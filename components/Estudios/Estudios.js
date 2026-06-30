import React, { useContext, useMemo, useRef, useState } from "react";
// @material-ui/core components
// layout for this page
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

import CalendarIcon from '@material-ui/icons/Today';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';



import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";
import { parseEstudios, parseTurns } from "../../utils/algorithms";
import { fullDateToDayMonth, getMonthName } from "../../utils/dates";

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { openPdfFromApi } from "../../services/pdfs";
import GLOBAL_GET_TOKEN from "../../utils/token";
import { UserContext } from "../../context/UserContextProvider";

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

//TODO: Llamar a API
function InformesDialog({ open, setOpen, archivos = [] }) {
  const classes = useTheme(styles);

  const { user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  }

const openFile = async (archivo) => {
  const token = await GLOBAL_GET_TOKEN();

  if (archivo.url) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${archivo.url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("No se pudo abrir el informe");
    }

    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = fileURL;
    link.target = '_blank';
    link.download = `informe_${archivo.id || 'estudio'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  openPdfFromApi(user.consultorioId, token, archivo.idArchivo);
};

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{
        paper: "informeDialogRoot"
      }}
    >
      <DialogTitle style={{ textAlign: "center", paddingBottom: "0" }}>Informes</DialogTitle>
      <DialogContent style={{ padding: "4px" }}>

        {archivos.map(archivo =>
          <Card style={{ marginTop: "10px", marginBottom: "16px", width: "100%" }} className="proxTurnoCard">
            <CardHeader style={{ paddingTop: "5px", paddingBottom: "5px" }} color="secondary">{archivo.nombre}</CardHeader>
            <CardBody style={{ paddingTop: 0, paddingLeft: "5px" }}>

              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <div style={{ display: "flex", flexDirection: "row", gap: "32px", alignItems: "center" }}>
                        <label className="">
                          <label style={{ fontSize: '18px' }}><b>Informe Realizado: </b><label style={{ fontSize: '14px' }}></label></label><br />
                        </label >
                        <Button onClick={() => openFile(archivo)} color="primary" style={{ paddingRight: "10px", paddingLeft: "10px", textAlign: "center", marginLeft: "auto" }}><OpenInNewIcon />&nbsp; Abrir</Button>
                      </div>
                    }
                  />
                </ListItem>
              </List>
            </CardBody>
          </Card>
        )
        }
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button onClick={handleClose} color="primaryOutlined">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Estudios({ estudios, ...props }) {
  const classes = useTheme(styles);

  console.log({ estudios });

  const estudiosParsed = useMemo(() => parseEstudios(estudios), [estudios]);

  const [open, setOpen] = useState(false);
  const [archivos, setArchivos] = useState([]);

  const handleOpen = (archivos) => {
    setOpen(true);
    setArchivos(archivos);
  }

  return (
    <>
      <GridItem {...props} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
        <Card style={{ marginBottom: "5px" }}>
          <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
            <h3 className={classes.cardTitleWhite}><LocalHospitalIcon fontSize="large" />Historial de Estudios</h3>
            <p className={classes.cardCategoryWhite}>Vea sus &uacute;ltimos estudios</p>
          </CardHeader>
          <CardBody style={{ padding: "0px 20px" }}>
            <Card style={{ marginTop: "10px", marginBottom: "30px" }} className="proxTurnoCard">
              {estudiosParsed.map((month, index) => <React.Fragment key={month.monthNumber + index}>
                <CardHeader style={{ paddingTop: "5px", paddingBottom: "5px" }} color="secondary">{getMonthName(month.monthNumber)} de {month.yearNumber}</CardHeader>
                <CardBody style={{ paddingTop: 0, paddingLeft: "5px", marginBottom: "16px" }}>
                  {
                    month.turns.map((turn, index) =>
                      <List key={turn.id}>
                        <ListItem>
                          <ListItemAvatar>
                            <label className={classes.colorPrimary}>
                              <label style={{ fontSize: '20px' }}><b>{fullDateToDayMonth(turn.fechaEstudio)}&nbsp;&nbsp;</b></label><br />
                            </label>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <>
                                <label className="">
                                <label style={{ fontSize: '18px' }}><b>{turn.practica}</b></label><br />
                               {/*   <label style={{ fontSize: '15px' }}>Profesional que solicita: <label style={{ fontSize: '14px' }}>{turn.profesionalSolicita || "-----------"}</label></label><br />
                                     <label style={{ fontSize: '15px' }}>Profesional que realiza: <label style={{ fontSize: '14px' }}>{turn.profesionalRealizada || "-----------"}</label></label><br />
                               */}
                                  <label style={{ fontSize: '15px' }}><b>Profesional que informa: </b><label style={{ fontSize: '14px' }}>{turn.profesionalInforma || "-----------"}</label></label><br />
                                  <label className={classes.colorPrimary} style={{ fontSize: '15px' }}><b>Informe: </b></label>
                                </label >
                                <div dangerouslySetInnerHTML={{ __html: turn.informe}} style={{ fontSize: '15px'}}></div>
                              </>
                            }
                          />
                          {turn.archivos?.length > 0 &&
                            <ListItemAvatar>
                              <Button onClick={() => handleOpen(turn.archivos)} color="primary" style={{ paddingRight: "10px", paddingLeft: "10px" }}>Ver Informe</Button>
                            </ListItemAvatar>
                          }
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
      <InformesDialog open={open} setOpen={setOpen} archivos={archivos} />
    </>
  )
}

function getStatusColor(status) {
  return {
    "Ausente": "turnStatusAbsent",
    "Cancelado": "turnStatusCancelled",
    "Realizado": "turnStatusCompleted"
  }[status];
}