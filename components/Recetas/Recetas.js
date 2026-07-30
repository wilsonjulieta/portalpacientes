import React, { useContext, useMemo, useState } from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import RecetasIcon from "@material-ui/icons/ListAlt";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";
import { getMonthName } from "../../utils/dates";

const styles = {
  ...adminStyles(),
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  colorPrimary: {
    color: (props) => props.colorPrimary,
  },
  colorSecondary: {
    color: (props) => props.colorSecondary,
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Parsea "DD/MM/YYYY" → { day, month, year } */
function parseDDMMYYYY(str) {
  const [day, month, year] = str.split("/").map(Number);
  return { day, month, year };
}

/** Agrupa recetas por mes/año de emisión, ordenadas desc */
function parseRecetas(recetas) {
  const map = new Map();

  for (const receta of recetas) {
    const { month, year } = parseDDMMYYYY(receta.fechaEmision);
    const key = month + "/" + year;

    if (map.has(key)) {
      map.get(key).push(receta);
    } else {
      map.set(key, [receta]);
    }
  }

  const result = [];
  for (const [key, items] of map) {
    const [m, y] = key.split("/").map(Number);
    result.push({ monthNumber: m, yearNumber: y, recetas: items });
  }

  result.sort((a, b) => {
    if (b.yearNumber !== a.yearNumber) return b.yearNumber - a.yearNumber;
    return b.monthNumber - a.monthNumber;
  });

  return result;
}

// ── Chip de estado ────────────────────────────────────────────────────────────
function EstadoChip({ estado }) {
  const config = {
    Activa: {
      icon: <CheckCircleIcon style={{ fontSize: 14, verticalAlign: "middle" }} />,
      className: "recetaChip recetaChip--activa",
    },
    Vencida: {
      icon: <CancelIcon style={{ fontSize: 14, verticalAlign: "middle" }} />,
      className: "recetaChip recetaChip--vencida",
    },
    Comprada: {
      icon: <ShoppingCartIcon style={{ fontSize: 14, verticalAlign: "middle" }} />,
      className: "recetaChip recetaChip--comprada",
    },
  };
  const { icon, className } = config[estado] || { icon: null, className: "recetaChip" };
  return (
    <span className={className}>
      {icon}&nbsp;{estado}
    </span>
  );
}

// ── Dialog de detalle ─────────────────────────────────────────────────────────
function DetalleRecetaDialog({ open, setOpen, receta }) {
  const classes = useTheme(styles);
  const handleClose = () => setOpen(false);
  if (!receta) return null;

  const filas = [
    { label: "Medicamento", value: receta.medicamento },
    { label: "Dosis / Presentación", value: receta.dosis },
    { label: "Indicaciones", value: receta.indicaciones },
    { label: "Médico", value: receta.medico },
    { label: "Especialidad", value: receta.especialidad },
    { label: "Fecha de emisión", value: receta.fechaEmision },
    { label: "Fecha de vencimiento", value: receta.fechaVencimiento },
  ];

  return (
    <Dialog open={open} onClose={handleClose} className="solicitarTurnoDialog">
      <DialogContent>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }} className="proxTurnoCard">
          <CardHeader
            className="dialogCardHeader"
            style={{ fontSize: "1.2rem", padding: "10px 16px", textAlign: "center" }}
            color="primary"
          >
            <RecetasIcon style={{ fontSize: "1.4rem", verticalAlign: "middle" }} />
            &nbsp;Detalle de Receta
          </CardHeader>
          <CardBody style={{ paddingTop: 0 }}>
            <List>
              {filas.map(({ label, value }, i) => (
                <ListItem key={label} divider={i < filas.length - 1}>
                  <ListItemText
                    primary={
                      <div className="recetaDetalle__fila">
                        <strong>{label}:</strong>
                        <span>{value}</span>
                      </div>
                    }
                  />
                </ListItem>
              ))}
              <ListItem>
                <ListItemText
                  primary={
                    <div className="recetaDetalle__fila">
                      <strong>Estado:</strong>
                      <EstadoChip estado={receta.estado} />
                    </div>
                  }
                />
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button onClick={handleClose} color="primaryOutlined">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function Recetas({ recetas = [], ...props }) {
  const classes = useTheme(styles);

  const recetasParsed = useMemo(() => parseRecetas(recetas), [recetas]);

  const [open, setOpen] = useState(false);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  const handleOpen = (receta) => {
    setRecetaSeleccionada(receta);
    setOpen(true);
  };

  const handleDescargar = (receta) => {
    // Acción visual: en producción llamaría a la API de PDFs
    alert(`Descargando PDF: ${receta.medicamento}`);
  };

  return (
    <>
      <GridItem {...props} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
        <Card style={{ marginBottom: "5px" }}>
          <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
            <h3 className={classes.cardTitleWhite}>
              <RecetasIcon fontSize="large" />
              Mis Recetas
            </h3>
            <p className={classes.cardCategoryWhite}>Vea sus recetas y prescripciones médicas</p>
          </CardHeader>

          <CardBody style={{ padding: "0px 20px" }}>
            <Card style={{ marginTop: "10px", marginBottom: "30px" }} className="proxTurnoCard">
              {recetasParsed.map((month) => (
                <React.Fragment key={month.monthNumber + "-" + month.yearNumber}>
                  <CardHeader style={{ paddingTop: "5px", paddingBottom: "5px" }} color="secondary">
                    {getMonthName(month.monthNumber)} de {month.yearNumber}
                  </CardHeader>

                  <CardBody style={{ paddingTop: 0, paddingLeft: "5px", marginBottom: "16px" }}>
                    {month.recetas.map((receta, index) => (
                      <List key={receta.id}>
                        <ListItem alignItems="flex-start" style={{ paddingTop: "12px", paddingBottom: "12px" }}>
                          {/* Fecha de emisión a la izquierda */}
                          <div style={{ minWidth: "60px", marginTop: "2px", marginRight: "10px" }}>
                            <span className={classes.colorPrimary} style={{ fontSize: "20px", fontWeight: "bold" }}>
                              {receta.fechaEmision.split("/")[0]}/{receta.fechaEmision.split("/")[1]}
                            </span>
                          </div>

                          {/* Datos centrales */}
                          <ListItemText
                            disableTypography
                            style={{ margin: 0 }}
                            primary={
                              <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingRight: "16px" }}>
                                <span style={{ fontSize: "16px", fontWeight: "bold", lineHeight: 1.3, color: "#333" }}>
                                  {receta.medicamento}
                                </span>
                                {receta.dosis && receta.dosis !== "-" && (
                                  <span style={{ fontSize: "14px", color: "#555" }}>{receta.dosis}</span>
                                )}
                                <span style={{ fontSize: "14px" }}>
                                  <b>Médico: </b>
                                  <span style={{ color: "#333" }}>{receta.medico}</span>
                                </span>
                                {receta.fechaVencimiento && receta.fechaVencimiento !== "-" && (
                                  <span style={{ fontSize: "14px" }}>
                                    <b>Vence: </b>
                                    <span
                                      style={{
                                        color: receta.estado === "Vencida" ? "#e53935" : "inherit",
                                        fontWeight: receta.estado === "Vencida" ? "600" : "400",
                                      }}
                                    >
                                      {receta.fechaVencimiento}
                                    </span>
                                  </span>
                                )}
                                <div style={{ marginTop: "4px" }}>
                                  <EstadoChip estado={receta.estado} />
                                </div>
                              </div>
                            }
                          />

                          {/* Botones a la derecha */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", minWidth: "150px", alignItems: "flex-end" }}>
                            <Button
                              onClick={() => handleOpen(receta)}
                              color="primaryOutlined"
                              size="sm"
                              style={{ paddingRight: "10px", paddingLeft: "10px", whiteSpace: "nowrap", width: "100%", justifyContent: "center" }}
                              id={"btn-detalle-" + receta.id}
                            >
                              <InfoIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
                              Ver detalle
                            </Button>
                            <Button
                              onClick={() => handleDescargar(receta)}
                              color="primary"
                              size="sm"
                              style={{ paddingRight: "10px", paddingLeft: "10px", whiteSpace: "nowrap", width: "100%", justifyContent: "center" }}
                              id={"btn-pdf-" + receta.id}
                            >
                              <GetAppIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
                              Descargar PDF
                            </Button>
                          </div>
                        </ListItem>

                        {index < month.recetas.length - 1 && <hr />}
                      </List>
                    ))}
                  </CardBody>
                </React.Fragment>
              ))}

              {recetasParsed.length === 0 && (
                <CardBody>
                  <div className="recetaVacia">
                    <RecetasIcon style={{ fontSize: "3rem", opacity: 0.3 }} />
                    <p>No hay recetas registradas.</p>
                  </div>
                </CardBody>
              )}
            </Card>
          </CardBody>
        </Card>
      </GridItem>

      <DetalleRecetaDialog open={open} setOpen={setOpen} receta={recetaSeleccionada} />
    </>
  );
}
