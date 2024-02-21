import React, { useState } from "react";
// @material-ui/core components
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/placeholderPic.jpg";
import { Dialog, DialogContent, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import useTheme from "../../../hooks/useTheme";

import CalendarIcon from '@material-ui/icons/Today';


import AddIcon from '@material-ui/icons/Add';

import PlaceIcon from '@material-ui/icons/Place';

import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import { useEffect } from "react";
import { TURNOS_DISPONIBLES } from "../../../utils/mockData";
import { useRef } from "react";
import { resetFocus } from "../../../utils/focus";


import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ProxTurnos from "../../../components/ProxTurnos/ProxTurnos";


import ShortcutIcon from '@material-ui/icons/RotateRight';
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import HistorialTurnos from "../../../components/HistorialTurnos.js/HistorialTurnos";

import nookies from 'nookies';
import { getNextTurns, getTurnsHistory } from "../../../services/turns";
import GLOBAL_GET_TOKEN from "../../../utils/token";


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
  profesionalImg: {
    width: "20%",
    border: (props) => "1px solid " + props.colorPrimary,
    borderRadius: "100%"
  }
});

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;

  const cookies = nookies.get(context);

  const nextTurnsResponse = await getNextTurns(cookies.id, consultorioId, await GLOBAL_GET_TOKEN(context));
  const turnsHistoryResponse = await getTurnsHistory(consultorioId, await GLOBAL_GET_TOKEN(context), cookies.id);

  if (!nextTurnsResponse.success || !turnsHistoryResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    }
  }

  return { props: { consultorioId, nextTurns: nextTurnsResponse.data, turnsHistory: turnsHistoryResponse.data } };
}

function GestionTurnos({ especialidadesInit, nextTurns, turnsHistory} ) {
  const classes = useTheme(styles);

  const [especialidades, setEspecialidades] = useState([]);

  const [especialidad, setEspecialidad] = useState("");

  const [lugar, setLugar] = useState("");

  const [profesional, setProfesional] = useState("");

  const [turnos, setTurnos] = useState(TURNOS_DISPONIBLES);

  const handleChange = (event) => {

  };

  const router = useRouter();

  const { consultorioId } = router.query;

  useEffect(() => {
    setEspecialidades([
      {
        value: 1,
        name: "Especialidad 1"
      },
      {
        value: 2,
        name: "Especialidad 2"
      },
      {
        value: 3,
        name: "Especialidad 3"
      }
    ])
  }, [])

  /* DIALOG VERIFICACION */
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    // Do something when the dialog is closed
  }

  const handleCancel = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }
  /* DIALOG VERIFICACION */

  const [turnoSeleccionado, setTurnoSeleccionado] = useState({});

  return (
    <div>
      <GridContainer style={{marginBottom: "50px"}}>
        <ProxTurnos nextTurns={nextTurns} xs={12} sm={12} md={8} lg={9} xl={10} />
        <GridItem xs={12} sm={12} md={4} lg={3} xl={2} order={1} className="gestionSolicitarTurnosWrapper">
          <Card profile style={{ marginBlock: "15px" }}>
            <CardHeader color="secondary" style={{ padding: "0" }}>
              <h3 className={classes.cardTitleWhite}><ShortcutIcon fontSize="large" style={{ verticalAlign: "bottom" }} /></h3>
            </CardHeader>
            {/* <CardAvatar profile className="cardAvatarDashboard"> */}
            {/* <PersonIcon fontSize="1000px" /> */}
            {/* <img src={"https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/86817051_10219136178949733_2821387424314163200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE3GGTelkEDwzvz_b1EFjHbGvL-KurQvVYa8v4q6tC9VqP6sJod_BeQr-QJUvkUHFY&_nc_ohc=ZLsddLXIGpUAX_yv3GT&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfDMXHg6O9GvPNMec_iJjlxJsNzbSgh6GepdfgftLbFNlA&oe=648AB274"} alt="..." />      */}
            {/* </CardAvatar> */}
            <CardBody style={{ paddingInline: "0", paddingBlock: "30px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", paddingInline: "6px" }}>
                <Link passHref href={{
                  pathname: '/admin/[consultorioId]/solicitarTurno',
                  query: { consultorioId },
                }}>
                  <a style={{ width: "100%" }}>
                    <Button color="primary" style={{ fontSize: "1.25em", width: "100%" }}>
                      <AddIcon style={{ fontSize: "1.25em" }} />
                      Solicitar Turno
                    </Button>
                  </a>
                </Link>
              </div>
            </CardBody>
          </Card>
        </GridItem>
        <HistorialTurnos xs={12} sm={12} md={12} lg={12} xl={12} turnsHistory={turnsHistory} />
      </GridContainer>
      <ConfirmationDialog
        open={open}
        onConfirm={() => { }}
        message={"hola"}
        setOpen={setOpen}
        turno={turnoSeleccionado} />
    </div>
  );
}

function TurnosDisponibles({ turnosLugar, setOpen, setTurnoSeleccionado }) {
  const classes = useTheme(styles);

  const { lugar, turnos } = turnosLugar;

  return <><Card style={{ marginTop: "10px", marginBottom: "10px" }} className="proxTurnoCard">
    <CardHeader style={{ paddingTop: "4px", paddingBottom: "4px" }} color="secondary"><PlaceIcon /> Lugar de atenci&oacute;n: <b>{lugar}</b></CardHeader>
  </Card>

    <GridContainer style={{ margin: "-10px -16px" }}>
      {
        turnos.map((turno, index) =>
          <GridItem style={{ padding: "8px 16px", marginTop: "24px" }} xs={12} sm={12} md={12} lg={6} xl={4}>
            <Card style={{ margin: 0 }} className="solicitarTurnoCard">
              <CardHeader style={{ paddingTop: "2px", paddingBottom: "2px", paddingInline: "0" }} color="primary">
                <h3 className={""} style={{ fontSize: '24px', margin: "auto", display: "block", textAlign: "center" }}><CalendarIcon style={{ fontSize: '30px' }} />&nbsp;{turno.fecha}</h3>
              </CardHeader>
              <CardBody style={{ paddingBlock: "8px", paddingInline: "16px", display: "flex", alignItems: "center", justifyContent: "start" }}>
                <img className={classes.profesionalImg}
                  src={avatar} alt="..." />
                <label style={{ fontSize: '24px', width: "60%", textAlign: "left", paddingInline: "6px", display: "block" }}> {turno.profesional}</label><br />
                <Button color="primary" style={{ paddingRight: "10px", paddingLeft: "10px", margin: "auto", display: "block", width: "20%", borderRadius: "2rem", minWidth: "80px" }} size="small" onClick={() => { setOpen(true); setTurnoSeleccionado(turno) }}>Solicitar</Button>
              </CardBody>
            </Card>
          </GridItem>)
      }
    </GridContainer>
  </>
}

function ConfirmationDialog({ open, setOpen, onConfirm, setActiveStep, turno }) {
  const classes = useTheme(styles);

  const [resendDisabled, setResendDisabled] = useState(false);

  const [codeDisabled, setCodeDisabled] = useState(false);

  const [code, setCode] = useState("");

  const [codeState, setCodeState] = useState("");

  const confirmRef = useRef();

  const handleCancel = () => {
    onClose();
  };

  const handleKeys = (event) => {
    if (event.key === "Enter") {
      handleConfirm()
    }
    if (event.key === "Escape") {
      setOpen(false)
    }
  }

  const handleConfirm = () => {
    // if (document.getElementById("verifInput").reportValidity()) {
    //   setCodeDisabled(true);
    //   setCodeState("Success");

    //   setTimeout(() => {
    //     setActiveStep(prev => prev + 1);
    //     setOpen(false)
    //   }, 1500);
    // }
    // else {
    //   setCodeState("Error");
    // }
  };

  const handleResend = () => {
    setResendDisabled(true)

    setTimeout(() => {
      setResendDisabled(false)
    }, 3000)
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(resetFocus, 0);
  }

  return (
    <Dialog
      open={open}
      onKeyDown={handleKeys}
      onClose={handleClose}
      className="solicitarTurnoDialog"
    >
      {/* <DialogTitle style={{ textAlign: "center", paddingBottom: "0" }}>Verificar c&oacute;digo</DialogTitle>
      <DialogContent>
        <hr />

        <DialogContentText>
          Se envió un código al mail ingresado, ingrese y confirme para validar
        </DialogContentText>


        <br />

        <div style={{ textAlign: "center" }}>
          <MUIButton variant="outlined" endIcon={<SendIcon />} disabled={resendDisabled} onClick={handleResend}>
            Reenviar
          </MUIButton>
        </div>

        <hr />
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Confirmar
        </Button>
      </DialogActions> */}
      <DialogContent>

        <Card style={{ marginTop: "10px", marginBottom: "10px" }} className="proxTurnoCard">
          <CardHeader className="dialogCardHeader" style={{ fontSize: "1.5rem", padding: "8px", textAlign: "center" }} color="primary"><CheckCircleIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} /> ¿Desea confirmar la solicitud de este turno?</CardHeader>
          <CardBody style={{ paddingTop: 0}}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <label className={classes.colorPrimary}>
                    <label style={{ fontSize: '20px' }}><b>{"13/6"}</b></label><br />
                    <label style={{ fontSize: '13px' }}><b>{"17:40"}</b>hs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  </label>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <label className="">
                      <label style={{ fontSize: '15px' }}><b>Especialidad: </b><label style={{ fontSize: '14px' }}>{turno.especialidad}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Lugar de Atenci&oacute;n: </b><label style={{ fontSize: '14px' }}>{turno.lugar}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Fecha: </b><label style={{ fontSize: '14px' }}>{turno.fecha}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Profesional: </b><label style={{ fontSize: '14px' }}>{turno.profesional}</label></label><br />
                      <label style={{ fontSize: '15px' }}><b>Motivo: </b><label style={{ fontSize: '14px' }}>{turno.motivo}</label></label><br />
                    </label>
                  }
                />
                {/* <ListItemAvatar>
                  <Button onClick={handleClose} color="primary">
                    Cancelar
                  </Button>
                  <Button onClick={handleConfirm} color="primary">
                    Confirmar
                  </Button>              </ListItemAvatar> */}
              </ListItem>
              <hr />
            </List>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "8px" }}>
              <Button onClick={handleClose} color="secondaryOutlined">
                Cancelar
              </Button>
              <Button onClick={handleConfirm} color="primary">
                Confirmar
              </Button>
            </div>

          </CardBody>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

GestionTurnos.layout = Admin;

export default GestionTurnos;
