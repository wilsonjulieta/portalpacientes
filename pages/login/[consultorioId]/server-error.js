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
import { destroyCookie, parseCookies } from "nookies";

function ConfirmationDialog({ open, setOpen, onClose, onConfirm, setActiveStep }) {
    const classes = useTheme(styles);

    const [resendDisabled, setResendDisabled] = useState(false);

    const [codeDisabled, setCodeDisabled] = useState(false);

    const [code, setCode] = useState("");

    const [codeState, setCodeState] = useState("");

    const confirmRef = useRef();

    const handleCancel = () => {
        onClose();
    };

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
            handleConfirm()
        }
    }

    const handleConfirm = () => {
        if (document.getElementById("verifInput").reportValidity()) {
            setCodeDisabled(true);
            setCodeState("Success");

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

    return (
        <Dialog
            open={open}
            disableBackdropClick
            disableEscapeKeyDown
            onKeyDown={handleEnterKey}
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
                <Button onClick={() => setOpen(false)} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function ServerError() {

    const router = useRouter();

    const { consultorioId } = router.query;

    const classes = useTheme(styles);

    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        setTimeout(() => {
            router.push('/login/' + consultorioId);
        }, 2500);
    }, [])

    if (router.query.firstTry === "true") {
        const cookies = parseCookies();
        destroyCookie(null, "id", {path: "/"})
    }
    
    return (
        <GridContainer >
            <GridItem style={{ textAlign: "center" }} xs={12}>Ocurrió un error en el servidor. Intentando nuevamente.</GridItem>
        </GridContainer>

    )
}

ServerError.layout = Login;

export default ServerError;
