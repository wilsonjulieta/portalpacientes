import React, { useContext, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/placeholderPic.jpg";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, List, ListItem, ListItemAvatar, ListItemText, MenuItem, NativeSelect, Select } from "@material-ui/core";
import useTheme from "../../../hooks/useTheme";

import CalendarIcon from '@material-ui/icons/Today';
import PersonIcon from '@material-ui/icons/Person';

import CreateIcon from '@material-ui/icons/Create';

import AddIcon from '@material-ui/icons/Add';

import PlaceIcon from '@material-ui/icons/Place';

import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import { showLoad } from "../../../utils/loading";
import { useEffect } from "react";
import { TURNOS_DISPONIBLES } from "../../../utils/mockData";
import { useRef } from "react";
import MUIButton from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import { resetFocus } from "../../../utils/focus";

import ClearIcon from '@material-ui/icons/Clear';

import nookies from 'nookies'



import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { getAvailableTurns, getEspecialidades, getProfessionals, getSucursales, requestTurn } from "../../../services/turns";
import GLOBAL_GET_TOKEN from "../../../utils/token";
import MessageDialog from "../../../components/Dialogs/MessageDialog";
import { groupBy } from "../../../utils/algorithms";
import { UserContext } from "../../../context/UserContextProvider";
import { fullDateToDayMonth, getFullNameOfDate } from "../../../utils/dates";
import { MessageDialogContext } from "../../../context/MessageDialogContextProvider";
import { useRouter } from "next/router";
import LoadingSpinner from "../../../components/Utils/LoadingSpinner";

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;

  const cookies = nookies.get(context);

  const professionalsResponse = await getProfessionals(consultorioId, await GLOBAL_GET_TOKEN(context));

  if (!professionalsResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    }
  }

  const especialidadesResponse = await getEspecialidades(consultorioId, await GLOBAL_GET_TOKEN(context));

  if (!especialidadesResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    }
  }

  const sucursalesResponse = await getSucursales(consultorioId, await GLOBAL_GET_TOKEN(context));

  if (!sucursalesResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    }
  }

  return { props: { consultorioId, professionals: professionalsResponse.data, especialidades: especialidadesResponse.data, sucursales: sucursalesResponse.data } };
}

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

function SolicitarTurno({ professionals, especialidades, sucursales, consultorioId }) {
  const classes = useTheme(styles);

  const [loading, setLoading] = useState(false);

  console.log({ professionals, especialidades, sucursales });

  const messageDialog = useContext(MessageDialogContext);

  const { user } = useContext(UserContext);

  const showConsultasMessage = useRef(true);

  useEffect(() => {
    if (user.consultorioId === "1" && !localStorage.getItem("messageTurnosConsulta")) {
      showConsultasMessage.current = false;
      localStorage.setItem("messageTurnosConsulta", "true");
      messageDialog.messageOpen("Los turnos que se obtienen son sólo para consulta y electrocardiograma, para otros estudios comunicarse telefónicamente.", "Información");
    }
  }, []);

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

  const [turnsGrouped, setTurnsGrouped] = useState([]);
  const [turnSelected, setTurnSelected] = useState({});

  const [especialidadId, setEspecialidadId] = useState("");
  const [profesionalId, setProfesionalId] = useState("");
  const [sucursalId, setSucursalId] = useState("");

  const resetFilters = () => {
    setEspecialidadId("");
    setProfesionalId("");
    setSucursalId("");
    setTurnsGrouped([]);
  }

  const professionalsFiltered = professionals.filter(professional => especialidadId === "" || professional.specialty.id === especialidadId);

  useEffect(() => {
    async function getTurns() {
      setLoading(true);
      const turnsResponse = await getAvailableTurns(consultorioId, await GLOBAL_GET_TOKEN(), sucursalId, especialidadId, profesionalId, user.id);
      setLoading(false);

      if (!turnsResponse.success) {
        messageDialog.warningOpen(turnsResponse.message);
        return;
      }

      const turns = turnsResponse.data;

      // Agrupar turnos

      const turnsGrouped = groupBy(turns, "sucursal")
        ?.map(group => ({ sucursal: group.sucursal, content: group.content.slice(0, 10) }))
        ?.sort((a, b) => a.sucursal.localeCompare(b.sucursal));

      console.log({ turns, turnsGrouped });

      setTurnsGrouped(turnsGrouped ?? []);
    }

    setTurnsGrouped([]);

    if (especialidadId === "" && profesionalId === "" && sucursalId === "")
      return;

    showConsultasMessage.current = true;
    getTurns();
  }, [especialidadId, profesionalId, sucursalId]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} classes={{ root: "" }} style={{ minHeight: "calc(100vh - 55px)", display: "flex", flexDirection: "column" }}>
          <Card>
            <CardHeader color="primary" style={{ paddingTop: "6px", paddingBottom: "6px" }}>
              <h3 className={classes.cardTitleWhite}><CalendarIcon fontSize="large" />Solicitud de Turnos</h3>
            </CardHeader>
            <CardBody style={{ padding: "10px 20px" }}>
              <GridContainer style={{ rowGap: "1.5em" }}>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl fullWidth key="especialidadForm">
                    <InputLabel className={classes.label + " " + classes.labelEnabled} variant="standard" htmlFor="uncontrolled-native">
                      Elija Especialidad
                    </InputLabel>
                    <Select
                      className={classes.select}
                      classes={{ root: classes.selectRoot }}
                      inputProps={{
                        name: 'especialidad',
                        key: 'especialidad',
                        value: especialidadId,
                        id: 'uncontrolled-native',
                        required: false,
                        onChange: (e) => { setEspecialidadId(e.target.value); setProfesionalId("") }
                      }}
                    >
                      {
                        especialidades.map((especialidad) =>
                          <MenuItem value={especialidad.id}>{especialidad.nombre}</MenuItem>
                        )
                      }
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <FormControl fullWidth key="profesionalForm" >
                    <InputLabel className={classes.label + " " + classes.labelEnabled} variant="standard" htmlFor="uncontrolled-native">
                      Elija Profesional
                    </InputLabel>
                    <Select
                      className={classes.select}
                      classes={{ root: classes.selectRoot }}
                      inputProps={{
                        name: 'profesional',
                        key: 'profesional',
                        value: profesionalId,
                        id: 'uncontrolled-native',
                        required: true,
                        onChange: (e) => setProfesionalId(e.target.value)
                      }}
                    >
                      {
                        professionalsFiltered.length > 0 ? professionalsFiltered.map((professional) =>
                          <MenuItem value={professional.id}>{professional.fullName}</MenuItem>
                        ) : <MenuItem style={{ color: "red", pointerEvents: "none" }} value={2}>{"No hay profesionales para la especialidad seleccionada."}</MenuItem>
                      }
                    </Select>
                    {/* <FormHelperText style={{ "marginTop": "unset" }} >Opcional</FormHelperText> */}
                  </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <FormControl fullWidth key="lugarForm" disabled={especialidadId === "" && profesionalId === ""}>
                    <InputLabel className={classes.label + " " + classes.labelEnabled} variant="standard" htmlFor="uncontrolled-native">
                      Elija Lugar
                    </InputLabel>
                    <Select
                      className={classes.select}
                      classes={{ root: classes.selectRoot }}
                      inputProps={{
                        name: 'lugar',
                        key: 'lugar',
                        value: sucursalId,
                        id: 'uncontrolled-native',
                        required: true,
                        onChange: (e) => setSucursalId(e.target.value)
                      }}
                    >
                      {
                        sucursales.map((sucursal) =>
                          <MenuItem value={sucursal.id}>{sucursal.nombre}</MenuItem>
                        )
                      }
                    </Select>
                    {/* <FormHelperText style={{ "marginTop": "unset" }} >Opcional</FormHelperText> */}
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={2} style={{ textAlign: "center" }}>
                  <Button style={{ lineHeight: 0, padding: "12px", }} startIcon={<ClearIcon />} onClick={resetFilters} color="primary">
                    Limpiar filtro
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
          <TurnosDisponibles turnsGrouped={turnsGrouped} setOpen={setOpen} setTurnSelected={setTurnSelected}
            active={!(especialidadId === "" && profesionalId === "" && sucursalId === "")}
            turnsGroupedKey={especialidadId + "," + profesionalId + "," + sucursalId}
            showConsultasMessage={showConsultasMessage.current}
            loading={loading} />
        </GridItem>
      </GridContainer>
      <ConfirmationDialog
        open={open}
        onConfirm={() => { }}
        message={""}
        setOpen={setOpen}
        turno={turnSelected} />
    </div>
  );
}

function TurnosDisponibles({ turnsGrouped, setOpen, setTurnSelected, active, turnsGroupedKey, showConsultasMessage, loading }) {
  const classes = useTheme(styles);

  return <>
    {active &&
      turnsGrouped.map(turnsGroup => <div className="fade-in" key={turnsGroup.sucursal}>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }} className="proxTurnoCard">
          <CardHeader style={{ paddingTop: "4px", paddingBottom: "4px" }} color="secondary"><PlaceIcon /> Lugar de atenci&oacute;n: <b>{turnsGroup.sucursal}</b></CardHeader>
        </Card>
        <GridContainer style={{ margin: "-10px -16px" }}>
          {
            turnsGroup.content.map((turno, index) =>
              <GridItem key={turno.fecha + turno.profesional + index} style={{ padding: "8px 16px", marginTop: "24px" }} xs={12} sm={12} md={12} lg={6} xl={4}>
                <Card style={{ margin: 0, height: "100%" }} className="solicitarTurnoCard">
                  <CardHeader style={{ paddingTop: "2px", paddingBottom: "2px", paddingInline: "0" }} color="primary">
                    <h3 className={""} style={{ fontSize: '20px', margin: "auto", display: "block", textAlign: "center" }}><CalendarIcon style={{ fontSize: '30px' }} />&nbsp;{getFullNameOfDate(turno.fecha, turno.hora)}</h3>
                  </CardHeader>
                  <CardBody style={{ paddingBlock: "8px", paddingInline: "16px", display: "flex", alignItems: "center", justifyContent: "start" }}>
                    <img className={classes.profesionalImg}
                      src={turno.avatarUrl} alt="..."
                      onError={({currentTarget}) => currentTarget.src = avatar} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                      <label style={{ fontSize: '18px', textAlign: "left", marginBottom: "5px" }}>{turno.profesional}</label>
                      <label style={{ fontSize: '14px', textAlign: "left", marginBottom: "5px" }}>MP {turno.matricula}</label>
                      <label style={{ fontSize: '15px', textAlign: "left", marginBottom: "5px" }}>Esp. {turno.especialidad}</label>
                    </div>
                    <Button color="primary" style={{ paddingRight: "10px", paddingLeft: "10px", margin: "auto", borderRadius: "2rem", minWidth: "80px" }} size="small" onClick={() => { setOpen(true); setTurnSelected(turno) }}>Solicitar</Button>
                  </CardBody>                
                </Card>
              </GridItem>)
          }
        </GridContainer>
      </div>
      )
    }
    {
      turnsGrouped.length === 0 && active && !loading && <h3 key={"t1" + turnsGroupedKey} className={"fade-in-slow m-auto text-center " + classes.colorSecondary}>No hay turnos disponibles seg&uacute;n lo seleccionado.</h3>
    }
    {
      showConsultasMessage && !active && !loading && <h3 key={"t2" + turnsGroupedKey} className={"fade-in-slow m-auto text-center " + classes.colorPrimary}>Los turnos que se obtienen son sólo para consulta y electrocardiograma, para otros estudios comunicarse telefónicamente.</h3>
    }
    {
      loading &&
      <div className="fade-in-slow m-auto text-center">
        <LoadingSpinner />
      </div>
    }
  </>
}

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
    const { profesionalId: professionalId, fecha, hora, patienteId, horarioId } = { ...turno, patienteId: user.id };

    setConfirmEnabled(false);

    const requestTurnResponse = await requestTurn(user.consultorioId, await GLOBAL_GET_TOKEN(), { professionalId, fecha, hora, patienteId, horarioId });

    setConfirmEnabled(true);

    console.log(requestTurnResponse);

    if (!requestTurnResponse.success) {
      messageDialog.reset();
      messageDialog.setMessage(requestTurnResponse.message);
      messageDialog.open();
      return;
    }

    messageDialog.messageOpen("Se reservó su turno con éxito.", "Confirmación del turno");
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
          <CardHeader className="dialogCardHeader" style={{ fontSize: "1.5rem", padding: "8px", textAlign: "center" }} color="primary"><CheckCircleIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} /> ¿Desea confirmar la solicitud de este turno?</CardHeader>
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

SolicitarTurno.layout = Admin;

export default SolicitarTurno;
