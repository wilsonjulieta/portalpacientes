import React, { useContext, useState } from "react";
// @material-ui/core components
// layout for this page
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { Dialog, DialogContent, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

import CalendarIcon from '@material-ui/icons/Today';



import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";
import { fullDateToDayMonth, getFullNameOfDate, getMonthName } from "../../utils/dates";
import { useMemo } from "react";
import { parseTurns } from "../../utils/algorithms";
import { UserContext } from "../../context/UserContextProvider";
import { MessageDialogContext } from "../../context/MessageDialogContextProvider";
import { useRouter } from "next/router";

import CancelIcon from '@material-ui/icons/Cancel';
import { resetFocus } from "../../utils/focus";
import { cancelTurn } from "../../services/turns";
import GLOBAL_GET_TOKEN from "../../utils/token";

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
    fontSize: "22px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  description: {
    fontSize: "1.25rem"
  },
  colorPrimary: {
    color: (props) => props.colorPrimary
  }
});

function ConfirmationDialog({ open, setOpen, turno }) {
  const classes = useTheme(styles);

  const handleKeys = (event) => {
    if (event.key === "Enter") {
      setOpen(false)
    }
    if (event.key === "Escape") {
      setOpen(false)
    }
  }

  const { user } = useContext(UserContext);

  console.log(user);

  const messageDialog = useContext(MessageDialogContext);

  const router = useRouter();

  const handleConfirm = async () => {
    const { id } = turno;

    setConfirmEnabled(false);

    const cancelTurnResponse = await cancelTurn(user.consultorioId, await GLOBAL_GET_TOKEN(), id);

    console.log(cancelTurnResponse);

    setConfirmEnabled(true);
    setOpen(false);

    if (!cancelTurnResponse.success) {
      messageDialog.reset();
      messageDialog.setMessage(cancelTurnResponse.message);
      messageDialog.open();
      return;
    }

    messageDialog.messageOpen("Se canceló su turno con éxito.", "Cancelación del turno");
    router.push("/admin/" + user.consultorioId + "/dashboard");
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(resetFocus, 0);
  }

  const [confirmEnabled, setConfirmEnabled] = useState(true);

  return (
    <Dialog
      open={open}
      onKeyDown={handleKeys}
      onClose={handleClose}
      className="solicitarTurnoDialog"
    >
      <DialogContent>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }} className="proxTurnoCard">
          <CardHeader className="dialogCardHeader" style={{ fontSize: "1.5rem", padding: "8px", textAlign: "center" }} color="primary"><CancelIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} /> ¿Desea cancelar este turno?</CardHeader>
          <CardBody style={{ paddingTop: 0 }}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <label className={classes.colorPrimary}>
                    <label style={{ fontSize: '20px' }}><b>{fullDateToDayMonth(turno.fecha)}</b></label><br />
                    <label style={{ fontSize: '13px' }}><b>{turno.hora}</b>hs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  </label>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <label className="">
                      <label style={{ fontSize: '15px' }}><b>Especialidad: </b><label style={{ fontSize: '14px' }}>{turno.especialidad}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Lugar de Atenci&oacute;n: </b><label style={{ fontSize: '14px' }}>{turno.sucursal}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Fecha: </b><label style={{ fontSize: '14px' }}>{getFullNameOfDate(turno.fecha, turno.hora)}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Profesional: </b><label style={{ fontSize: '14px' }}>{turno.profesionalNombre}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Motivo: </b><label style={{ fontSize: '14px' }}>{turno.practicaNombre}</label></label><br />
                    </label>
                  }
                />
              </ListItem>
              <hr />
            </List>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "8px" }}>
              <Button onClick={handleClose} color="secondaryOutlined">
                Cerrar
              </Button>
              <Button onClick={handleConfirm} color="primary" disabled={!confirmEnabled}>
                Confirmar
              </Button>
            </div>

          </CardBody>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default function ProxTurnos({ nextTurns, ...props }) {
  const classes = useTheme(styles);

  console.log({nextTurns});
  
  const nextTurnsParsed = useMemo(() => parseTurns(nextTurns), [nextTurns]);
  
  console.log({nextTurnsParsed});

  const [open, setOpen] = useState(false);

  const [turnSelected, setTurnSelected] = useState({});

  const handleOpen = (turn) => {
    setOpen(true);
    setTurnSelected(turn);
  }
  
  console.log(turnSelected);

  return (
    <GridItem {...props} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
      <Card style={{ marginBottom: "5px" }}>
        <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
          <h3 className={classes.cardTitleWhite}><CalendarIcon fontSize="large" />Pr&oacute;ximos Turnos</h3>
        </CardHeader>
        <CardBody style={{ padding: "0px 20px" }}>
          <Card style={{ marginTop: "10px", marginBottom: "30px" }} className="proxTurnoCard">
            {nextTurnsParsed.map((month, index) => <React.Fragment key={month.monthNumber}>
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
                              {/* <label style={{ fontSize: '15px' }}><b>Consultorio: </b><label style={{ fontSize: '14px' }}>{turn.consultorio}</label></label><br /> */}
                              <label style={{ fontSize: '15px' }}><b>Lugar de Atención: </b><label style={{ fontSize: '14px' }}>{turn.sucursal}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Especialidad: </b><label style={{ fontSize: '14px' }}>{turn.especialidad}</label></label><br />
                              <label style={{ fontSize: '15px' }}><b>Profesional: </b><label style={{ fontSize: '14px' }}>{turn.profesionalNombre}</label></label><br />
                              {turn.practicaNombre && <><label style={{ fontSize: '15px' }}><b>Motivo: </b><label style={{ fontSize: '14px' }}>{turn.practicaNombre}</label></label><br /></>}
                            </label>
                          }
                        />
                        <ListItemAvatar>
                          <Button onClick={() => handleOpen(turn)} color="secondaryOutlined" style={{ paddingRight: "10px", paddingLeft: "10px" }}>Cancelar</Button>
                        </ListItemAvatar>
                      </ListItem>
                      {index === month.turns.length - 1 ? "" : <hr />}
                    </List>)
                }
              </CardBody>
            </React.Fragment>)}
          </Card>
          {nextTurnsParsed.length === 0 ? <p style={{ fontSize: "24px" }}> Usted no posee turnos agendados. </p> : ""}
        </CardBody>
      </Card>
      <ConfirmationDialog
        open={open}
        onConfirm={() => { }}
        message={""}
        setOpen={setOpen}
        turno={turnSelected} />
    </GridItem>


  )
}