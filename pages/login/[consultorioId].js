import React, { useContext, useEffect, useState } from "react";
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
import Login from "../../layouts/Login";
import { FormControl, FormGroup, MenuItem, NativeSelect, Select, TextField } from "@material-ui/core";

import styles from "assets/jss/nextjs-material-dashboard/layouts/loginStyle.js";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useRouter } from "next/router";
import THEMES from "../../constants/THEMES";
import { logIn } from "../../services/userAuth.js";
import { UserContext } from "../../context/UserContextProvider";
import useTheme from "../../hooks/useTheme";
import CustomPasswordInput from "../../components/CustomInput/CustomPasswordInput";
import { setCookie } from "nookies";
import { hideLoad, showLoad } from "../../utils/loading";

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;

  return { props: { consultorioId } };
}

function LoginView({ consultorioId }) {

  const router = useRouter();

  const path = "Inicio";

  const classes = useTheme(styles);

  const [errorMsg, setErrorMsg] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const tipoDoc = formData.get("tipodoc");
    const username = formData.get("username");
    const password = formData.get("password");

    showLoad(path);

    let loginResponse = {};

    try {
      loginResponse = await logIn(tipoDoc, username, password, consultorioId);
    } catch (error) {

    } finally {

    }

    console.log(loginResponse);

    // loginResponse = {message: "Sus datos están cargados pero no se encuentra registrado. Ingrese a \"registrarse\"."}

    if (loginResponse.loggedIn) {
      sessionStorage.setItem("id", loginResponse.data.id);
      sessionStorage.setItem("token", loginResponse.token);

      setCookie(null, 'id', loginResponse.data.id, {
        maxAge: 50 * 365 * 24 * 60 * 60,
        path: '/',
      });

      setCookie(null, 'token', loginResponse.token, {
        maxAge: 24 * 60 * 60,
        path: '/',
      });

      setUser({...loginResponse.data, consultorioId});

      router.push("/admin/" + consultorioId + "/dashboard");
      return true
    }
    else {
      sessionStorage.clear();
      hideLoad(path);
      setErrorMsg(loginResponse.message);

      return false
    }
  }

  const handleRegisterRedirect = () => {
    const currentPath = router.asPath; // get the current URL path

    router.push(currentPath + "/register")
  }

  return (
    <form method="post" action="/admin/dashboard" onSubmit={handleSubmit} autoComplete="on">
      <GridContainer style={{ width: "100%", height: "80vh", alignItems: "center" }} justify="center">
        <GridItem xs={12} sm={10} md={7}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Bienvenido</h4>
              <p className={classes.cardCategoryWhite}>Complete sus datos de ingreso</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel className={classes.label} variant="standard" htmlFor="uncontrolled-native">
                      Tipo de Documento
                    </InputLabel>
                    <Select
                      className={classes.select}
                      classes={{ root: classes.selectRoot }}
                      defaultValue={1}
                      inputProps={{
                        name: 'tipodoc',
                        id: 'uncontrolled-native',
                        required: true,
                        onChange: () => setErrorMsg(false)
                      }}
                    >
                      <MenuItem value={1} selected>DNI</MenuItem>
                      <MenuItem value={2}>CI</MenuItem>
                      <MenuItem value={3}>Pasaporte</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Nro. de Documento"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: 'username',
                      id: "username",
                      type:"number",
                      required: true,
                      autoComplete: "username",
                      onChange: () => setErrorMsg(false)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomPasswordInput
                    labelText="Contraseña"
                    inputName="password"
                    handleChangeHook={() => setErrorMsg(false)}
                  />
                </GridItem>
                <GridItem>
                  <p style={{ color: errorMsg ? "red" : "transparent", margin: "0", transition: "all 0.6s", userSelect: "none" }}>
                    {errorMsg ? errorMsg : "Sus datos estan cargados pero no se encuentra registrado. Ingrese a \"registrarse\"."}
                  </p>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter style={{ paddingTop: "0", flexWrap: "wrap", rowGap: "10px", justifyContent: "center", paddingInline: "18px" }}>
              <div style={{ flex: "1 0 33.33%", textAlign: "left" }} className="botonLoginRegistro" >
                <Button onClick={handleRegisterRedirect} type="button" color="primaryOutlined" style={{ padding: "15px 6px" }}>Registrarse</Button>
              </div>
              <div style={{ flex: "1 0 33.33%", textAlign: "center" }} className="botonLoginIngreso">
                <Button type="submit" color="primary" style={{ fontSize: "1.35em" }}>Ingresar</Button>
              </div>
              <div style={{ flex: "1 0 33.33%", textAlign: "right" }} className="botonLoginOlvido">
                <Button type="button" color="secondarySimple" style={{ padding: "15px 6px" }}>Olvid&eacute; mi contraseña</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </form>
  );
}

LoginView.layout = Login;

export default LoginView;
