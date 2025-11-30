import React, { useContext, useEffect, useMemo, useState } from "react";
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
import Login from "../../../layouts/Login.js";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, MenuItem, NativeSelect, Select, Step, StepContent, StepLabel, Stepper, TextField, Typography } from "@material-ui/core";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

import styles from "assets/jss/nextjs-material-dashboard/layouts/loginStyle.js";
import { ThemeContext } from "../../../context/ThemeContextProvider.js";
import { useRouter } from "next/router";
import THEMES from "../../../constants/THEMES.js";
import { logIn } from "../../../services/userAuth.js";
import { UserContext } from "../../../context/UserContextProvider.js";
import useTheme from "../../../hooks/useTheme.js";
import CustomPasswordInput from "../../../components/CustomInput/CustomPasswordInput.js";
import usePasswordConfirmation from "../../../hooks/usePasswordConfirmation.js";
import { useRef } from "react";

import MUIButton from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';


import VerificationInput from "react-verification-input";
import { getHealthCareList } from "../../../services/healthcare.js";
import GLOBAL_GET_TOKEN from "../../../utils/token.js";
import { resetFocus } from "../../../utils/focus.js";
import { password, validate, validateOTP } from "../../../services/register.js";
import { MessageDialogContext } from "../../../context/MessageDialogContextProvider.js";
import { USER_STATUS_MESSAGE, USER_STATUS_TYPE } from "../../../constants/TYPES.js";
import { patientsPut } from "../../../services/patients.js";
import { hideLoad, showLoad } from "../../../utils/loading.js";
import { CustomRadio, CustomRadioGroup } from "../../../components/CustomInput/CustomRadioGroup.js";
import LineSeparator from "../../../components/Utils/LineSeparator.jsx";

export async function getServerSideProps(context) {
  const { consultorioId } = context.query;

  const healthCareListResponse = await getHealthCareList(consultorioId, await GLOBAL_GET_TOKEN(context));

  if (!healthCareListResponse.success) {
    return {
      redirect: {
        destination: '/login/' + consultorioId + "/server-error",
        permanent: false,
      },
    }
  }

  return { props: { consultorioId, healthCareList: healthCareListResponse.data } };
}

function OTPDialog({ open, setOpen, onClose, onConfirm, setActiveStep, consultorioId, userId, setFormData, userEmail }) {
  const classes = useTheme(styles);

  const [resendDisabled, setResendDisabled] = useState(false);

  const [codeDisabled, setCodeDisabled] = useState(false);

  const [code, setCode] = useState("");

  const [codeState, setCodeState] = useState("");

  const confirmRef = useRef();

  const [confirmEnabled, setConfirmEnabled] = useState(true);

  const handleCancel = () => {
    handleClose();
    onClose();
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleConfirm()
    }
  }

  //TODO VOLVER A PONER OTP AUTOMATICO AL LLENAR, SE BUGUEABA SI APRETABAS TAMBIEN EL BOTON
  // useEffect(() => {
  //   if (code.length === 6) {
  //     handleConfirm();
  //   }
  // }, [code])

  const handleConfirm = async () => {
    if (!document.getElementById("verifInput").reportValidity()) {
      setCodeState("Error");
      return;
    }

    setConfirmEnabled(false);

    const validateResponse = await validateOTP(userId, code, consultorioId, await GLOBAL_GET_TOKEN());

    setConfirmEnabled(true);

    if (validateResponse.success) {
      setCodeDisabled(true);
      setCodeState("Success");

      // setFormData((prev) => ({
      //   ...prev,
      //   ...validateResponse.data,
      //   birthDate: validateResponse.data.birthDate === "0001-01-01T00:00:00" ? new Date().toISOString().slice(0, 10)
      //     : new Date(validateResponse.data.birthDate).toISOString().slice(0, 10),
      //   medicalCareId: validateResponse.data.medicalCareId === 0 ? "" : validateResponse.data.medicalCareId
      // }));

      setTimeout(() => {
        setActiveStep(prev => prev + 1);
        setOpen(false);
      }, 1500);

      setTimeout(() => {
        setCode("");
        setCodeDisabled(false);
        setCodeState("");
      }, 1600);
    }
    else {
      setCodeState("Error");
    }
  };

  const handleResend = () => {
    setResendDisabled(true)

    setTimeout(() => {
      setResendDisabled(false)
    }, 3000)
  };

  const handleClose = () => {
    setOpen(false);
    setResendDisabled(false);
    setCodeDisabled(false);
    setCode("");
    setCodeState("");
  }

  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      onKeyDown={handleEnterKey}
      onClose={handleClose}
    >
      <DialogTitle style={{ textAlign: "center", paddingBottom: "0" }}>Verificar c&oacute;digo</DialogTitle>
      <DialogContent>
        <hr />

        <DialogContentText>
          Se envió un código al mail: {userEmail}<br></br> Ingrese y confirme para validar
        </DialogContentText>

        <VerificationInput validChars="0-9"
          inputProps={{
            inputMode: "numeric",
            minLength: 6,
            required: true,
            id: "verifInput",
            autoComplete: "off",
            disabled: codeDisabled
          }}
          value={code}
          onChange={(value) => {
            if (value.length < 7)
              setCode(value)
            setCodeState("")
          }}
          autoFocus
          classNames={{
            character: classes["vicharacter" + codeState]
          }} />

        <br />

        <div style={{ textAlign: "center" }}>
          <MUIButton variant="outlined" endIcon={<SendIcon />} disabled={resendDisabled} onClick={handleResend}>
            Reenviar
          </MUIButton>
        </div>

        <hr />
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary" disabled={!confirmEnabled}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Register({ consultorioId, healthCareList }) {

  const router = useRouter();

  const classes = useTheme(styles);

  const [errorMsg, setErrorMsg] = useState("");

  const messageDialog = useContext(MessageDialogContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setAnimating(false);

    setTimeout(() => {
      setAnimating(true);
    }, 100)

    clearInterval(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setAnimating(false);
    }, 5100)

    console.log({ min6, equal });

    if (min6 && equal) {
      const url = "/login/" + consultorioId;
      showLoad(url);

      const putResponse = await patientsPut(consultorioId, await GLOBAL_GET_TOKEN(), {...userData, password: formData.password});

      router.push(url);

      if (!putResponse.success) {
        messageDialog.warningOpen(putResponse.message);
        return;
      }

      messageDialog.messageOpen("Su usuario ha sido creado correctamente. Utilize sus credenciales para ingresar.", "Registro de usuario");
    }
  }

  const handleLoginRedirect = () => {
    const currentPath = router.asPath; // get the current URL path

    const newPath = currentPath.replace(new RegExp("/passwordReset", 'g'), '');

    router.push(newPath);
  }

  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [userData, setUserData] = useState({});

  const [formData, setFormData] = useState({
    "tipoDoc": 1,
    "dni": "",
    "cellNumber": "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "medicalCareId": "",
    "coberturaParticular": false,
    "sexo": "",
    "address": "",
    "birthDate": new Date().toISOString().slice(0, 10),
    "password": "",
    "password2": "",
    "cellNumberOmitted": false
  })

  console.log(formData);


  /* HANDLE COBERTURAS */
  const coberturaParticularValue = useMemo(() => {
    return healthCareList.find((healthCare) => healthCare.name.toLowerCase() === "Particular".toLowerCase())?.id
  }, [healthCareList]);

  const toggleCoberturaParticular = (e) => {
    resetFocus();

    if (e.target.checked) {
      setFormData((prev) => ({ ...prev, medicalCareId: coberturaParticularValue, coberturaParticular: true }));
    }
    else {
      setFormData((prev) => ({ ...prev, medicalCareId: "", coberturaParticular: false }));
    }
    setErrorMsg("");
  }
  /* HANDLE COBERTURAS */


  const handleChange = (event) => {
    const { name, value } = event.target; 

    setFormData(prevState => ({ ...prevState, [name]: value }));
    setErrorMsg("");
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {

    const form = document.querySelector("form");

    const allValid = form.reportValidity();

    if (allValid) {
      if (activeStep === 0) {
        const url = "/login/" + consultorioId + "/passwordReset";

        showLoad(url);

        const passwordResponse = await password(formData.tipoDoc, Number(formData.dni), consultorioId, await GLOBAL_GET_TOKEN());

        hideLoad();

        console.log(passwordResponse);
        
        if (!passwordResponse.success) {
          messageDialog.defaultOpen();
          return;
        }

        const data = passwordResponse.data;

        setUserData(data);

        // switch (data.estadoId) {
        //   case USER_STATUS_TYPE["NO COINCIDE"]:
        //   case USER_STATUS_TYPE["YA REGISTRADO"]: {
        //     messageDialog.warningOpen(USER_STATUS_MESSAGE[data.estadoId], "Error de Registro");
        //     return;
        //   }
        // }

        // if (!data.otpEnviado) {
        //   messageDialog.warningOpen(USER_STATUS_MESSAGE["OTP ERROR"], "Error de Registro");
        //   return;
        // }

        setUserId(data.id)
        setUserEmail(data.email)
        handleOpen()
      }
      else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter" && !open) {
      if (activeStep === 1)
        handleSubmit(event);
      else
        handleNext();
    }
  }

  /* CONFIRMACION PASSWORD */
  const { min6, min1Upper, min1Lower, min1Number, equal, passwordValid } = usePasswordConfirmation(formData.password, formData.password2);

  const [animating, setAnimating] = useState(false);

  const timeoutId = useRef();
  /* CONFIRMACION PASSWORD */

  /* DIALOG VERIFICACION */
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleOTPConfirm = () => {

  }

  /* DIALOG VERIFICACION */

  return (
    <form method="post" action="/admin/dashboard" onSubmit={handleSubmit} autoComplete="on" onKeyDown={handleEnterKey}>
      <GridContainer style={{ width: "100%", height: "85vh", alignItems: "center" }} justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Restablecer contraseña</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Stepper activeStep={activeStep} orientation="horizontal" classes={{ root: classes.stepperRoot }}>
                  <Step key={"Documentaci\xF3n"}>
                    <StepLabel>
                      Identificación
                    </StepLabel>
                  </Step>
                  <Step key={"Seguridad"}>
                    <StepLabel>
                      Seguridad
                    </StepLabel>
                  </Step>
                </Stepper>


                {activeStep === 0 ?
                  <>
                    <GridItem xs={12} sm={12} md={6}>
                      <FormControl fullWidth key="tipoDocForm">
                        <InputLabel className={classes.label} variant="standard" htmlFor="uncontrolled-native">
                          Tipo de Documento
                        </InputLabel>
                        <Select
                          className={classes.select}
                          classes={{ root: classes.selectRoot }}
                          inputProps={{
                            name: 'tipoDoc',
                            key: 'tipoDoc',
                            value: formData.tipoDoc,
                            id: 'uncontrolled-native',
                            required: true,
                            onChange: handleChange
                          }}
                        >
                          <MenuItem value={1} selected>DNI</MenuItem>
                          <MenuItem value={2}>CI</MenuItem>
                          <MenuItem value={3}>Pasaporte</MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Nro. de Doc."
                        id="dni"
                        key="dniCustomInput"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "number",
                          name: 'dni',
                          key: 'dni',
                          value: formData.dni,
                          id: "dni",
                          required: true,
                          autoComplete: "dni",
                          onChange: handleChange
                        }}
                      />
                    </GridItem>                    
                  </> : activeStep === 1 ?
                      <>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomPasswordInput
                            key="passwordCustomInput"
                            labelText="Contraseña"
                            inputName="password"
                            password={formData.password}
                            setPassword={(value) => setFormData((prev) => ({ ...prev, "password": value }))}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomPasswordInput
                            key="password2CustomInput"
                            labelText="Confirmar Contraseña"
                            inputName="password2"
                            password={formData.password2}
                            setPassword={(value) => setFormData((prev) => ({ ...prev, "password2": value }))}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <FormGroup sx={{ alignContent: "center" }} style={{ color: "rgba(0, 0, 0, 0.87)" }} className="registerCheckboxes">
                            <FormControlLabel style={{ fontSize: "6px" }} className={animating && !min6 ? classes.animate : classes.static} control={<Checkbox size='small' checked={min6} />} label="M&iacute;nimo 6 caracteres" />
                            {/* <FormControlLabel className={animating && !min1Lower ? classes.animate : classes.static} control={<Checkbox size='small' checked={min1Lower} />} label="M&iacute;nimo 1 min&uacute;scula" />
                            <FormControlLabel className={animating && !min1Upper ? classes.animate : classes.static} control={<Checkbox size='small' checked={min1Upper} />} label="M&iacute;nimo 1 may&uacute;scula" />
                            <FormControlLabel className={animating && !min1Number ? classes.animate : classes.static} control={<Checkbox size='small' checked={min1Number} />} label="M&iacute;nimo 1 n&uacute;mero" /> */}
                            <FormControlLabel className={animating && !equal ? classes.animate : classes.static} control={<Checkbox size='small' checked={equal} />} label="Las contrase&ntilde;as coinciden" />
                          </FormGroup>
                        </GridItem>

                      </> : ""}

              </GridContainer>
            </CardBody>
            <CardFooter style={{ paddingInline: "18px" }}>
              {activeStep === 0 ?
                <Button onClick={handleLoginRedirect} type="button" color="secondaryOutlined">Volver a Login</Button> :
                activeStep === 2 ?
                  <Button onClick={handleBack} type="button" color="secondaryOutlined">Atr&aacute;s</Button> :
                  <div>
                    <Button onClick={handleBack} type="button" color="secondaryOutlined">Volver</Button>
                    <FormHelperText>Si regresa, deber&aacute; volver a validar su documentaci&oacute;n para restablecer la contraseña</FormHelperText>
                  </div>
              }
              {activeStep === 1 ?
                <Button onClick={handleSubmit} type="button" color="primary">Finalizar</Button> :
                <Button onClick={handleNext} type="button" color="primary" style={activeStep === 1 ? { alignSelf: "start" } : {}}>Siguiente</Button>
              }
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <OTPDialog
        open={open}
        onConfirm={() => { }}
        message={"hola"}
        setOpen={setOpen}
        setActiveStep={setActiveStep}
        consultorioId={consultorioId}
        userId={userId}
        userEmail={userEmail}
        handleOTPConfirm={handleOTPConfirm}
        setFormData={setFormData}
      />
    </form >
  );
}

Register.layout = Login;

export default Register;
