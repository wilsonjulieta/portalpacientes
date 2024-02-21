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

import avatar from "assets/img/faces/marc.jpg";
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import useTheme from "../../../hooks/useTheme";

import CalendarIcon from '@material-ui/icons/Today';
import PersonIcon from '@material-ui/icons/Person';

import CreateIcon from '@material-ui/icons/Create';

import AddIcon from '@material-ui/icons/Add';
import ShortcutIcon from '@material-ui/icons/RotateRight';
import RecetasIcon from '@material-ui/icons/ListAlt';

import adminStyles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { UserContext } from "../../../context/UserContextProvider";
import { dayMonthYear } from "../../../utils/dates";
import ProxTurnos from "../../../components/ProxTurnos/ProxTurnos";
import { getNextTurns } from "../../../services/turns";

import nookies from 'nookies'
import GLOBAL_GET_TOKEN from "../../../utils/token";

const styles = ({
  ...adminStyles(),
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
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
  }
});

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;

  const cookies = nookies.get(context);

  const nextTurnsResponse = await getNextTurns(cookies.id, consultorioId, await GLOBAL_GET_TOKEN(context));

  if (!nextTurnsResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error?firstTry=true",
        permanent: false,
      },
    }
  }

  console.log({nextTurns: nextTurnsResponse.data});

  return { props: { consultorioId, nextTurns: nextTurnsResponse.data } };
}

function Dashboard({ nextTurns }) {
  const classes = useTheme(styles);

  const { user } = useContext(UserContext);

  const router = useRouter();

  const { consultorioId } = router.query;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8} lg={9} xl={10} order={1}>
          <Card profile style={{ marginBlock: "3px", height: "100%" }}>
            <CardHeader color="secondary" style={{ padding: "0" }}>
              <h3 className={classes.cardTitleWhite}><PersonIcon fontSize="large" /><span style={{ textTransform: "uppercase" }}>{user.lastName}</span>, {user.firstName}</h3>
            </CardHeader>
            {/* <CardAvatar profile className="cardAvatarDashboard"> */}
            {/* <PersonIcon fontSize="1000px" /> */}
            {/* <img src={"https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/86817051_10219136178949733_2821387424314163200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE3GGTelkEDwzvz_b1EFjHbGvL-KurQvVYa8v4q6tC9VqP6sJod_BeQr-QJUvkUHFY&_nc_ohc=ZLsddLXIGpUAX_yv3GT&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfDMXHg6O9GvPNMec_iJjlxJsNzbSgh6GepdfgftLbFNlA&oe=648AB274"} alt="..." />      */}
            {/* </CardAvatar> */}
            <CardBody profile style={{ padding: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* <h6 style={{margin: "0.5rem"}} className={classes.cardCategory}>CEO / CO-FOUNDER</h6> */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBlock: "0.5em", padding: "0 10px", width: "100%" }}>
                <p className={classes.description} style={{ textAlign: "left", margin: 0, fontSize: "18px" }}>
                  <b>DNI:</b> {user.dni} <br />
                  <b>Fecha de Nacimiento:</b> {dayMonthYear(user.birthDate)} <br />
                  <b>Domicilio:</b> {user.address ?? "No posee"} <br />
                  <b>Celular:</b> {user.cellNumber ?? "No posee"} <br />
                </p>
                <Link href={{
                  pathname: '/admin/[consultorioId]/profile',
                  query: { consultorioId },
                }}>
                  <Button color="primaryOutlined" variant="outlined" style={{ height: "2.5em", fontSize: "1.2em", paddingRight: "6px", paddingLeft: "6px" }}>
                    <CreateIcon fontSize="large" /> Editar
                  </Button>
                </Link>

              </div>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={3} xl={2} order={1}>
          <Card profile style={{ marginBlock: "3px", height: "100%" }}>
            <CardHeader color="secondary" style={{ padding: "0" }}>
              <h3 className={classes.cardTitleWhite}><ShortcutIcon fontSize="large" style={{ verticalAlign: "bottom" }} /></h3>
            </CardHeader>
            {/* <CardAvatar profile className="cardAvatarDashboard"> */}
            {/* <PersonIcon fontSize="1000px" /> */}
            {/* <img src={"https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/86817051_10219136178949733_2821387424314163200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE3GGTelkEDwzvz_b1EFjHbGvL-KurQvVYa8v4q6tC9VqP6sJod_BeQr-QJUvkUHFY&_nc_ohc=ZLsddLXIGpUAX_yv3GT&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfDMXHg6O9GvPNMec_iJjlxJsNzbSgh6GepdfgftLbFNlA&oe=648AB274"} alt="..." />      */}
            {/* </CardAvatar> */}
            <CardBody style={{ paddingInline: "0", display: "flex", padding: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", paddingInline: "6px", margin: "auto" }}>
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
                {/* <Link passHref href={{
                  pathname: '/admin/[consultorioId]/solicitarReceta',
                  query: { consultorioId },
                }}>
                  <a style={{ width: "100%" }}>
                    <Button color="secondaryOutlined" style={{ fontSize: "1.25em", width: "100%" }}>
                      <AddIcon style={{ fontSize: "1.25em" }} />
                      Solicitar Receta
                    </Button>
                  </a>
                </Link> */}
              </div>
            </CardBody>
          </Card>
        </GridItem>

        <ProxTurnos nextTurns={nextTurns} xs={12} sm={12} md={12} />

        {/* <GridItem xs={12} sm={12} md={5} classes={{ root: "proxTurnos" }} style={{ marginTop: "5px" }}>
          <Card>
            <CardHeader color="primary" style={{ paddingBlock: "5px" }}>
              <h3 className={classes.cardTitleWhite}><RecetasIcon fontSize="large" />Mis Recetas</h3>
              <p className={classes.cardCategoryWhite}>Vea y administre sus recetas</p>
            </CardHeader>
            <CardBody style={{ padding: "5px 20px" }}>
              
            </CardBody>
          </Card>
        </GridItem> */}

      </GridContainer>
    </div >
  );
}

Dashboard.layout = Admin;

export default Dashboard;
