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
import Login from "../../../layouts/Login";
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, MenuItem, NativeSelect, Select, Step, StepContent, StepLabel, Stepper, TextField, Typography } from "@material-ui/core";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

import styles from "assets/jss/nextjs-material-dashboard/layouts/loginStyle.js";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { useRouter } from "next/router";
import THEMES from "../../../constants/THEMES";
import { logIn } from "../../../services/userAuth.js";
import { UserContext } from "../../../context/UserContextProvider";
import useTheme from "../../../hooks/useTheme";
import CustomPasswordInput from "../../../components/CustomInput/CustomPasswordInput";
import usePasswordConfirmation from "../../../hooks/usePasswordConfirmation";
import { useRef } from "react";

import MUIButton from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';


import VerificationInput from "react-verification-input";
import { getHealthCareList } from "../../../services/healthcare";
import GLOBAL_GET_TOKEN from "../../../utils/token";
import { resetFocus } from "../../../utils/focus";
import { validate, validateOTP } from "../../../services/register";
import { MessageDialogContext } from "../../../context/MessageDialogContextProvider";
import { USER_STATUS_MESSAGE, USER_STATUS_TYPE } from "../../../constants/TYPES";
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

function OTPDialog({ open, setOpen, onClose, onConfirm, setActiveStep, consultorioId, userId, setFormData }) {
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

      setFormData((prev) => ({
        ...prev,
        ...validateResponse.data,
        birthDate: validateResponse.data.birthDate === "0001-01-01T00:00:00" ? new Date().toISOString().slice(0, 10)
          : new Date(validateResponse.data.birthDate).toISOString().slice(0, 10),
        medicalCareId: validateResponse.data.medicalCareId === 0 ? "" : validateResponse.data.medicalCareId
      }));

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
          Se envió un código al mail ingresado, ingrese y confirme para validar
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

      const putResponse = await patientsPut(consultorioId, await GLOBAL_GET_TOKEN(), formData);

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

    const newPath = currentPath.replace(new RegExp("/register", 'g'), '');

    router.push(newPath);
  }

  const [userId, setUserId] = useState("");

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
        const url = "/login/" + consultorioId + "/register";

        showLoad(url);

        const validateResponse = await validate(formData.tipoDoc, Number(formData.dni), formData.email, formData.cellNumber, consultorioId, await GLOBAL_GET_TOKEN());

        hideLoad();

        console.log(validateResponse);
        
        if (!validateResponse.success) {
          messageDialog.defaultOpen();
          return;
        }

        const data = validateResponse.data;

        switch (data.estadoId) {
          case USER_STATUS_TYPE["NO COINCIDE"]:
          case USER_STATUS_TYPE["YA REGISTRADO"]: {
            messageDialog.warningOpen(USER_STATUS_MESSAGE[data.estadoId], "Error de Registro");
            return;
          }
        }

        if (!data.otpEnviado) {
          messageDialog.warningOpen(USER_STATUS_MESSAGE["OTP ERROR"], "Error de Registro");
          return;
        }

        setUserId(data.pacienteId)
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
      if (activeStep === 2)
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
              <h4 className={classes.cardTitleWhite}>Registro</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <Stepper activeStep={activeStep} orientation="horizontal" classes={{ root: classes.stepperRoot }}>
                  <Step key={"Documentaci\xF3n"}>
                    <StepLabel>
                      Documentaci&oacute;n
                    </StepLabel>
                  </Step>
                  <Step key={"Datos Personales"}>
                    <StepLabel>
                      Datos Personales
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
                    <GridItem xs={12} sm={12} md={12}>
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
                    <GridItem xs={12} sm={12} md={12}>
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
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Celular"
                        id="cellNumber"
                        key="cellNumberCustomInput"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          name: "cellNumber",
                          id: "cellNumber",
                          key: "cellNumber",
                          value: formData.cellNumber,
                          required: true,
                          type: "tel",
                          autoComplete: "cellNumber",
                          onChange: handleChange
                        }}
                        moreInputProps={{
                          pattern: "^[0-9]{10}$"
                        }}
                      />
                      <FormHelperText className="formHelper">Se aceptan números de teléfono de 10 dígitos</FormHelperText>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="E-mail"
                        id="email"
                        key="emailCustomInput"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "email",
                          id: "email",
                          key: "email",
                          type: "email",
                          value: formData.email,
                          required: true,
                          autoComplete: "email",
                          onChange: handleChange
                        }}

                      />
                      <FormHelperText className="formHelper">Se enviará un mail a esta dirección para verificaci&oacute;n</FormHelperText>
                    </GridItem>
                    <GridItem>
                      <p style={{ color: errorMsg ? "red" : "transparent", margin: "0", transition: "all 0.6s", userSelect: "none" }}>
                        {errorMsg ? errorMsg : "Esto deberia ocupar la misma longitud que el error mas largo"}
                      </p>
                    </GridItem>
                  </> : activeStep === 1 ?
                    <>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Apellido"
                          id="lastName"
                          key="lastNameCustomInput"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: 'lastName',
                            id: "lastName",
                            key: "lastName",
                            value: formData.lastName,
                            required: true,
                            autoComplete: "lastName",
                            onChange: handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Nombre"
                          id="firstName"
                          key="firstNameCustomInput"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: "firstName",
                            id: "firstName",
                            key: "firstName",
                            value: formData.firstName,
                            required: true,
                            autoComplete: "firstName",
                            onChange: handleChange
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel className={classes.label} variant="standard" htmlFor="uncontrolled-native">
                            Cobertura
                          </InputLabel>
                          <Select
                            {... (formData.medicalCareId === coberturaParticularValue ? { style: { pointerEvents: "none" }, readOnly: true } : {})}
                            className={classes.select}
                            classes={{ root: classes.selectRoot }}
                            inputProps={{
                              name: 'medicalCareId',
                              key: 'medicalCareId',
                              value: formData.medicalCareId,
                              id: 'uncontrolled-native',
                              required: true,
                              onChange: handleChange
                            }}
                          >
                            {healthCareList.map((healthCare) => {
                              if (healthCare.id === coberturaParticularValue || !healthCare.web) {
                                return (
                                  <MenuItem style={{ display: "none" }} value={healthCare.id} key={"healthcare" + healthCare.id}>{healthCare.name}</MenuItem>
                                )
                              }
                              else {
                                return (
                                  <MenuItem value={healthCare.id} key={"healthcare" + healthCare.id}>{healthCare.name}</MenuItem>
                                )
                              }
                            })}
                          </Select>
                        </FormControl>
                        <FormControlLabel style={{ pointerEvents: "all", marginBlock: "4px" }} onChange={toggleCoberturaParticular} className={classes.static} control={<Checkbox size='medium' checked={formData.coberturaParticular} />} label="Poseo cobertura particular (Seleccionar casilla si no encuentra su cobertura listada)" />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6} className="">
                        <div className="my-4 sm:my-0">
                          <div className="text-base font-normal flex items-end justify-between">
                            <div className={classes.colorPrimary + ""}>Sexo</div>
                            <div className="w-5/6">
                              <CustomRadioGroup name="sexo" value={formData.sexo} setValue={(sexo) => setFormData(prev => ({ ...prev, sexo: sexo }))}>
                                <CustomRadio name="Masculino" value="M" />
                                <CustomRadio name="Femenino" value="F" />
                                <CustomRadio name="Otro" value="O" />
                              </CustomRadioGroup>
                            </div>
                          </div>
                          <LineSeparator />
                        </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Fecha de nacimiento"
                          id="birthDate"
                          key="bdCustomInput"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: "birthDate",
                            id: "birthDate",
                            key: "birthDate",
                            value: formData.birthDate,
                            type: "date",
                            required: true,
                            // autoComplete: "birthDate",
                            onChange: handleChange
                          }}
                          moreInputProps={{
                            min: new Date("1850-01-01").toISOString().split("T")[0],
                            max: new Date().toISOString().split("T")[0]
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Domicilio"
                          id="address"
                          key="addressCustomInput"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            name: "address",
                            id: "address",
                            key: "address",
                            value: formData.address,
                            required: true,
                            autoComplete: "address",
                            onChange: handleChange
                          }}
                        />
                      </GridItem>

                    </> : activeStep === 2 ?
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
                    <FormHelperText>Si regresa, deber&aacute; volver a validar su documentaci&oacute;n para registrarse</FormHelperText>
                  </div>
              }
              {activeStep === 2 ?
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
        handleOTPConfirm={handleOTPConfirm}
        setFormData={setFormData}
      />
    </form >
  );
}

Register.layout = Login;

export default Register;
