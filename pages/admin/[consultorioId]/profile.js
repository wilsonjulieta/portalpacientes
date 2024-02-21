import React, { useContext, useRef, useState } from "react";
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
import { FormControl, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select } from "@material-ui/core";
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
import { calculateAge } from "../../../utils/age";
import { getHealthCareList } from "../../../services/healthcare";
import { patientsPut } from "../../../services/patients";
import { MessageDialogContext } from "../../../context/MessageDialogContextProvider";
import { showLoad } from "../../../utils/loading";
import { CustomRadio, CustomRadioGroup } from "../../../components/CustomInput/CustomRadioGroup";
import LineSeparator from "../../../components/Utils/LineSeparator";

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
    }
});

export async function getServerSideProps(context) {
    const { consultorioId } = context.query;

    const cookies = nookies.get(context);

    const nextTurnsResponse = await getNextTurns(cookies.id, consultorioId, await GLOBAL_GET_TOKEN(context));

    if (!nextTurnsResponse.success) {
        return {
            redirect: {
                destination: '/login/' + consultorioId + "/server-error",
                permanent: false,
            },
        }
    }

    //   console.log({nextTurns: nextTurnsResponse.data});

    const healthCareListResponse = await getHealthCareList(consultorioId, await GLOBAL_GET_TOKEN(context));

    if (!healthCareListResponse.success) {
        return {
            redirect: {
                destination: '/login/' + consultorioId + "/server-error",
                permanent: false,
            },
        }
    }

    return { props: { consultorioId, nextTurns: nextTurnsResponse.data, healthCareList: healthCareListResponse.data } };
}

function Profile({ nombre, nextTurns, healthCareList }) {
    const classes = useTheme(styles);
    const { user } = useContext(UserContext);

    const messageDialog = useContext(MessageDialogContext);

    const [formData, setFormData] = useState(user);

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        setErrorMsg("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll("input");

        const okay = [...inputs].every(input => input.reportValidity());

        if (!okay) {
            return;
        }

        const url = "/admin/" + user.consultorioId + "/profile";
        showLoad(url);

        const putResponse = await patientsPut(consultorioId, await GLOBAL_GET_TOKEN(), formData);

        router.push(url);

        if (!putResponse.success) {
            messageDialog.warningOpen(putResponse.message);
            return;
        }

        messageDialog.messageOpen("Sus datos han sido actualizados satisfactoriamente.", "Edición de perfil");
    }

    // const [editingAdress, setEditingAdress] = useState(false);

    // const handleAddressFocus = (e) => {
    //     e.preventDefault();

    //     setEditingAdress(true);

    //     if (e.target.value === "No posee") {
    //         console.log(e);
    //         setFormData(prev => ({ ...prev, address: "" }))
    //     }
    // }

    // const handleAddressBlur = (e) => {
    //     e.preventDefault();

    //     setEditingAdress(false);
    // }

    console.log(formData);

    const router = useRouter();

    const { consultorioId } = router.query;

    return (
        <div>
            {/* <input defaultValue={nombre}></input>
            <button onClick={() => router.push("/admin/" + consultorioId + "/profile")}></button>
            {nombre} */}
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} order={1}>
                    <Card profile style={{ marginBlock: "3px", height: "100%" }}>
                        <CardHeader color="secondary" style={{ padding: "0" }}>
                            <h3 className={classes.cardTitleWhite}><PersonIcon fontSize="large" />Mi Perfil</h3>
                        </CardHeader>
                        <CardBody profile style={{ padding: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* <h6 style={{margin: "0.5rem"}} className={classes.cardCategory}>CEO / CO-FOUNDER</h6> */}
                            <div style={{ marginBlock: "0.5em", padding: "0 10px", width: "100%", textAlign: "left" }}>
                                <GridContainer classes={{ container: "rg-1" }}>
                                    <GridItem xs={7} sm={6} md={6}>
                                        <FormControl fullWidth key="tipoDocForm">
                                            <InputLabel className={classes.label + " " + classes.labelEnabled} variant="standard" htmlFor="uncontrolled-native">
                                                Tipo de Documento
                                            </InputLabel>
                                            <Select
                                                className={classes.select}
                                                classes={{ root: classes.selectRoot }}
                                                inputProps={{
                                                    name: 'tipodoc',
                                                    key: 'tipodoc',
                                                    value: formData.tipodoc ?? 1,
                                                    id: 'uncontrolled-native',
                                                    required: true,
                                                    readOnly: true,
                                                    onChange: handleChange,
                                                    style: { textAlign: "left" }
                                                }}
                                            >
                                                <MenuItem value={1} selected>DNI</MenuItem>
                                                <MenuItem value={2}>CI</MenuItem>
                                                <MenuItem value={3}>Pasaporte</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem xs={5} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Nro. de Doc."
                                            id="dni"
                                            key="dniCustomInput"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                type: "number",
                                                name: 'dni',
                                                key: 'dni',
                                                value: formData.dni || "123",
                                                id: "dni",
                                                required: true,
                                                autoComplete: "dni",
                                                readOnly: true,
                                                onChange: handleChange
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={7} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Fecha de nacimiento"
                                            id="birthDate"
                                            key="birthDateCustomInput"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                type: "date",
                                                name: 'birthDate',
                                                key: 'birthDate',
                                                value: formData.birthDate ? new Date(formData.birthDate).toISOString().slice(0, 10)
                                                    : "",
                                                id: "birthDate",
                                                required: true,
                                                autoComplete: "birthDate",
                                                onChange: handleChange,
                                            }}
                                            moreInputProps={{
                                                min: new Date("1850-01-01").toISOString().split("T")[0],
                                                max: new Date().toISOString().split("T")[0]
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={5} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Edad"
                                            id="age"
                                            key="ageCustomInput"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                type: "number",
                                                name: 'age',
                                                key: 'age',
                                                value: calculateAge(formData.birthDate),
                                                id: "age",
                                                required: true,
                                                autoComplete: "age",
                                                readOnly: true,
                                                onChange: handleChange
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Apellido/s"
                                            id="lastName"
                                            key="lastName"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                name: 'lastName',
                                                key: 'lastName',
                                                value: formData.lastName,
                                                id: "lastName",
                                                required: true,
                                                autoComplete: "lastName",
                                                onChange: handleChange
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <CustomInput
                                            labelText="Nombre/s"
                                            id="firstName"
                                            key="firstName"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                name: 'firstName',
                                                key: 'firstName',
                                                value: formData.firstName,
                                                id: "firstName",
                                                required: true,
                                                autoComplete: "firstName",
                                                onChange: handleChange
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Correo Electrónico"
                                            id="email"
                                            key="email"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                type: "email",
                                                name: 'email',
                                                key: 'email',
                                                value: formData.email,
                                                id: "email",
                                                required: true,
                                                autoComplete: "email",
                                                onChange: handleChange,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Nro. de celular"
                                            id="cellNumber"
                                            key="cellNumber"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                name: 'cellNumber',
                                                key: 'cellNumber',
                                                value: formData.cellNumber,
                                                id: "cellNumber",
                                                required: true,
                                                autoComplete: "cellNumber",
                                                onChange: handleChange,
                                                readOnly: true
                                            }}
                                        />
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
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Cobertura"
                                            id="medicalCareId"
                                            key="medicalCareId"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                name: 'medicalCareId',
                                                key: 'medicalCareId',
                                                value: healthCareList.find(elem => elem.id === formData.medicalCareId)?.name || "No posee",
                                                id: "medicalCareId",
                                                required: true,
                                                autoComplete: "medicalCareId",
                                                onChange: handleChange,
                                                readOnly: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Domicilio"
                                            id="address"
                                            key="address"
                                            formControlProps={{
                                                fullWidth: true,
                                                classes: { root: "m-0 p-0" }
                                            }}
                                            inputProps={{
                                                name: 'address',
                                                key: 'address',
                                                value: formData.address,
                                                id: "address",
                                                required: true,
                                                autoComplete: "address",
                                                onChange: handleChange,
                                                readOnly: false,
                                                // onFocus: handleAddressFocus,
                                                // onBlur: handleAddressBlur
                                            }}
                                        />
                                    </GridItem>
                                </ GridContainer>
                            </div>
                        </CardBody>
                        <Button style={{ margin: "1rem auto" }} onClick={handleSubmit} type="button" color="primary">Confirmar Cambios</Button>
                    </Card>
                </GridItem>


            </GridContainer>
        </div >
    );
}

Profile.layout = Admin;

export default Profile;