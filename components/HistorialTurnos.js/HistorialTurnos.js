import React, { useMemo, useState } from "react";
// @material-ui/core components
// layout for this page
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

import CalendarIcon from '@material-ui/icons/Today';



import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";
import { parseTurns } from "../../utils/algorithms";
import { fullDateToDayMonth, getMonthName } from "../../utils/dates";

const styles = ({
  ...adminStyles(),
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  description: {
    fontSize: "1.25rem"
  },
  colorPrimary: {
    color: (props) => props.colorPrimary
  },
  colorSecondary: {
    color: (props) => props.colorSecondary
  },
});

export default function HistorialTurnos({ turnsHistory, ...props }) {
  const classes = useTheme(styles);

  const turnsHistoryParsed = useMemo(() => parseTurns(turnsHistory), [turnsHistory]);

  return (
    <GridItem {...props} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
      <Card style={{ marginBottom: "5px" }}>
        <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
          <h3 className={classes.cardTitleWhite}><CalendarIcon fontSize="large" />Historial de Turnos</h3>
          <p className={classes.cardCategoryWhite}>Vea sus &uacute;ltimos turnos</p>
        </CardHeader>
        <CardBody style={{ padding: "0px 20px" }}>
          <Card style={{ marginTop: "10px", marginBottom: "30px" }} className="proxTurnoCard">
            {turnsHistoryParsed.map((month, index) => <React.Fragment key={month.monthNumber}>
              <CardHeader style={{ paddingTop: "5px", paddingBottom: "5px" }} color="secondary">{getMonthName(month.monthNumber)} de {month.yearNumber}</CardHeader>
              <CardBody style={{ paddingTop: 0, paddingLeft: "5px", marginBottom: "16px" }}>
                {
                  month.turns.map((turn, index) =>
                    <List key={turn.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <label className={classes.colorPrimary}>
                            <label style={{ fontSize: '20px' }}><b>{fullDateToDayMonth(turn.fecha)}</b></label><br />
                            <label style={{ fontSize: '16px' }}><b>{turn.hora}</b>hs&nbsp;&nbsp;&nbsp;&nbsp;</label>
                          </label>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <label className="">
                              <label style={{ fontSize: '15px' }}><b>Lugar de Atención: </b><label style={{ fontSize: '14px' }}>{turn.sucursal}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Especialidad: </b><label style={{ fontSize: '14px' }}>{turn.especialidad}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Profesional: </b><label style={{ fontSize: '14px' }}>{turn.profesionalNombre}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Motivo: </b><label style={{ fontSize: '14px' }}>{turn.practicaNombre}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Estado: </b><label className={classes[getStatusColor(turn.estado)]} style={{ fontSize: '14px', fontWeight: 800 }}>{turn.estado}</label></label><br />
                            </label >
                          }
                        />
                        {/* <ListItemAvatar>
                          <Button color="secondaryOutlined" style={{ paddingRight: "10px", paddingLeft: "10px" }}>Cancelar</Button>
                        </ListItemAvatar> */}
                      </ListItem>
                      {index === month.turns.length - 1 ? "" : <hr />}
                    </List>)
                }
              </CardBody>
            </React.Fragment>)}
          </Card>
        </CardBody>
      </Card>
    </GridItem>

  )
}

function getStatusColor(status) {
  return {
    "Ausente": "turnStatusAbsent",
    "Cancelado": "turnStatusCancelled",
    "Realizado": "turnStatusCompleted"
  }[status];
}