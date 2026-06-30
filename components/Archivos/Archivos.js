import React, { useContext, useEffect, useState } from "react";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Snackbar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { Paper, Typography } from "@material-ui/core";

import getURL from "../../constants/URL";
import { UserContext } from "../../context/UserContextProvider";
import GLOBAL_GET_TOKEN from "../../utils/token";
import { deleteArchivoFromPaciente, getArchivosFromPaciente, uploadArchivosFromPaciente } from "../../services/pdfs";

import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";

function Toast({ children }) {
  return (
    <Paper style={{ padding: 16 }}>
      <Typography>{children}</Typography>
    </Paper>
  );
}

const styles = {
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
};

export default function Archivos({ consultorioId, ...props }) {
  const classes = useTheme(styles);

  const { user } = useContext(UserContext);

  const envioArchivosHabilitado =
    user?.archivos_habilitado === true || user?.enviar_archivos_habilitado === true
      ? true
      : user?.archivos_habilitado === false || user?.enviar_archivos_habilitado === false
        ? false
        : true;

  const [openUpload, setOpenUpload] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [archivos, setArchivos] = useState([]);
  const [loadingArchivos, setLoadingArchivos] = useState(false);
  const [archivosError, setArchivosError] = useState("");
  const [deletingArchivoId, setDeletingArchivoId] = useState(null);

  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const loadArchivos = async () => {
    if (!envioArchivosHabilitado) return;

    const effectiveConsultorioId = consultorioId || user?.consultorioId;
    const pacienteId = user?.id;

    if (!effectiveConsultorioId || !pacienteId) return;

    setLoadingArchivos(true);
    setArchivosError("");

    try {
      const token = await GLOBAL_GET_TOKEN();
      const response = await getArchivosFromPaciente(effectiveConsultorioId, token, pacienteId);

      if (!response.success) {
        throw new Error(response.message || "Error al obtener los archivos.");
      }

      setArchivos(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setArchivosError(error.message || "Error al obtener los archivos.");
      setArchivos([]);
    } finally {
      setLoadingArchivos(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (cancelled) return;
      await loadArchivos();
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [consultorioId, user?.consultorioId, user?.id]);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;
    if (!envioArchivosHabilitado) {
      setSnackbar({ open: true, message: "Su usuario no está habilitado para enviar archivos." });
      return;
    }

    setUploading(true);
    try {
      const token = await GLOBAL_GET_TOKEN();

      const effectiveConsultorioId = consultorioId || user?.consultorioId;
      const pacienteId = user?.id;

      if (!effectiveConsultorioId) {
        setSnackbar({ open: true, message: "No se encontró consultorioId para subir el archivo." });
        return;
      }

      if (!pacienteId) {
        setSnackbar({ open: true, message: "No se encontró el id del paciente para subir el archivo." });
        return;
      }

      const uploadResponse = await uploadArchivosFromPaciente(effectiveConsultorioId, token, pacienteId, selectedFiles);

      if (!uploadResponse.success) {
        setSnackbar({ open: true, message: uploadResponse.message || "Error al subir los archivos. Intente nuevamente." });
        return;
      }

      setSnackbar({ open: true, message: "Archivos subidos con éxito." });
      await loadArchivos();
      setOpenUpload(false);
      setSelectedFiles([]);
    } catch (error) {
      setSnackbar({ open: true, message: "Error al subir los archivos. Intente nuevamente." });
    } finally {
      setUploading(false);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleDeleteArchivo = async (event, archivo) => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    if (!envioArchivosHabilitado) {
      setSnackbar({ open: true, message: "Su usuario no está habilitado para enviar archivos." });
      return;
    }

    const archivoId = archivo?.id;
    const fileName = archivo?.fileName || "este archivo";

    if (!archivoId) {
      setSnackbar({ open: true, message: "No se encontró el id del archivo." });
      return;
    }

    const confirmed = window.confirm(`¿Eliminar "${fileName}"?`);
    if (!confirmed) return;

    const effectiveConsultorioId = consultorioId || user?.consultorioId;
    const pacienteId = user?.id;

    if (!effectiveConsultorioId || !pacienteId) {
      setSnackbar({ open: true, message: "Faltan datos para eliminar el archivo." });
      return;
    }

    setDeletingArchivoId(archivoId);
    try {
      const token = await GLOBAL_GET_TOKEN();
      const response = await deleteArchivoFromPaciente(effectiveConsultorioId, token, pacienteId, archivoId);

      if (!response.success) {
        throw new Error(response.message || "Error al eliminar el archivo.");
      }

      setSnackbar({ open: true, message: "Archivo eliminado." });
      await loadArchivos();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || "Error al eliminar el archivo." });
    } finally {
      setDeletingArchivoId(null);
    }
  };

  return (
    <>
      <GridItem {...props} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
        <Card style={{ marginTop: "10px" }}>
          <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
            <h3 className={classes.cardTitleWhite}>
              <LocalHospitalIcon fontSize="large" />
              Mis archivos
            </h3>
            <p className={classes.cardCategoryWhite}>Vea sus últimos archivos subidos</p>
          </CardHeader>
          <CardBody style={{ padding: "10px 20px" }}>
            <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 12px" }}>
              <Button
                color="primary"
                style={{ fontSize: "1.05em", padding: "12px 18px", borderRadius: "999px" }}
                disabled={!envioArchivosHabilitado}
                onClick={() => setOpenUpload(true)}
              >
                <LocalHospitalIcon style={{ fontSize: "1.25em" }} />
                Cargar nuevo archivo
              </Button>
            </div>
            {!envioArchivosHabilitado ? (
              <Typography color="error" style={{ textAlign: "center", padding: "10px 0" }}>
                Su usuario no está habilitado para enviar archivos.
              </Typography>
            ) : loadingArchivos ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                <CircularProgress />
              </div>
            ) : archivosError ? (
              <Typography color="error" style={{ textAlign: "center", padding: "10px 0" }}>
                {archivosError}
              </Typography>
            ) : archivos.length > 0 ? (
              <List>
                {archivos.map((archivo, index) => {
                  const effectiveConsultorioId = consultorioId || user?.consultorioId;
                  const apiBase = effectiveConsultorioId ? getURL(effectiveConsultorioId) : "";
                  const origin = apiBase ? apiBase.replace(/\/v1\/?$/, "/") : "";
                  const href = origin ? new URL(archivo.publicUrl, origin).toString() : archivo.publicUrl;

                  return (
                    <React.Fragment key={archivo.id ?? index}>
                      <ListItem
                        button
                        onClick={() => {
                          window.open(href, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <ListItemText primary={<b>{archivo.fileName}</b>} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="eliminar"
                            onClick={(event) => handleDeleteArchivo(event, archivo)}
                            disabled={deletingArchivoId === archivo.id}
                            style={{ color: "#f44336" }}
                          >
                            {deletingArchivoId === archivo.id ? (
                              <CircularProgress size={18} />
                            ) : (
                              <DeleteIcon />
                            )}
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index < archivos.length - 1 && <hr />}
                    </React.Fragment>
                  );
                })}
              </List>
            ) : (
              <Typography style={{ textAlign: "center", padding: "10px 0" }}>
                Aún no ha cargado ningún archivo.
              </Typography>
            )}
          </CardBody>
        </Card>
      </GridItem>
      <Dialog open={openUpload && envioArchivosHabilitado} onClose={() => !uploading && setOpenUpload(false)} fullWidth maxWidth="sm">
        <DialogTitle>Cargar Nuevo Archivo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seleccione uno o más archivos (PDF o Imagen) para cargar.
          </DialogContentText>
          <div style={{ marginTop: "20px", border: "2px dashed #ccc", padding: "20px", textAlign: "center" }}>
            <input
              accept="application/pdf,image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="raised-button-file">
              <Button component="span" color="secondaryOutlined">
                Seleccionar Archivos
              </Button>
            </label>
            {selectedFiles.length > 0 && (
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <b>Archivos seleccionados:</b>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpload(false)} color="secondaryOutlined" disabled={uploading}>
            Cancelar
          </Button>
          <Button onClick={handleUpload} color="primary" disabled={selectedFiles.length === 0 || uploading}>
            {uploading ? <CircularProgress size={24} color="inherit" /> : "Subir Archivos"}
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        style={{ zIndex: 100000 }}
      >
        <Toast>
          {snackbar.message}
        </Toast>
      </Snackbar>
    </>
  )
}
