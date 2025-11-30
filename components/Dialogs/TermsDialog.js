import React, { useContext, useRef, useState } from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";

import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { MetaInfoContext } from "../../context/MetaInfoContextProvider";
import nookies from 'nookies'

import styles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";
import useTheme from "../../hooks/useTheme";
import { useRouter } from "next/router";

const getCookieName = (consultorioId) => {
    return "termsAccepted_" + consultorioId?.toUpperCase();
}

const acceptTerms = (consultorioId) => {
    nookies.set(null, getCookieName(consultorioId), "true", {
        maxAge: 3000 * 24 * 60 * 60,
    });
}

const areTermsAccepted = (consultorioId) => {
    const cookies = nookies.get();

    console.log({ cookies, consultorioId });

    const cookieName = getCookieName(consultorioId);

    if (!cookies[cookieName]) {
        return false;
    }
    else if (typeof window !== undefined) {
        acceptTerms(consultorioId);
    }

    return true;
}
export default function TermsDialog() {
    const router = useRouter();
    const { consultorioId } = router.query;

    const termsAccepted = areTermsAccepted(consultorioId);

    const classes = useTheme(styles);

    const [open, setOpen] = useState(!termsAccepted);
    const { metaInfo } = useContext(MetaInfoContext);

    const handleKeys = (event) => {
        if (event.key === "Enter") {
            setOpen(false)
        }
        if (event.key === "Escape") {
            setOpen(false)
        }
    };



    return <Dialog
        open={open}
        onKeyDown={handleKeys}
        className="messageDialog"
    >
        <DialogContent >
            <Card style={{ marginTop: "10px", marginBottom: "10px", maxWidth: "95vw" }} className="">
                <CardHeader className="dialogCardHeader" style={{ fontSize: "1.25rem", padding: "8px", textAlign: "center" }} color={"primary"}>
                    {
                        <ReportProblemIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} />
                    } Términos y Condiciones </CardHeader>
                <CardBody style={{ paddingTop: 0, textAlign: "center" }}>
                    <h3 className={classes.colorPrimary} style={{ padding: 0, marginBlock: '8px' }}>Para poder utilizar la aplicación, usted deberá leer y aceptar los siguientes términos y condiciones de uso:</h3>
                    <h5 style={{ marginBlock: '1rem', textAlign: "start", maxHeight: "50vh", overflowY: "auto" }}>{metaInfo.terms}
                        <Button style={{ textAlign: "center", display: "block", marginInline: "auto", marginTop: "1rem" }} color="primary" onClick={() => {acceptTerms(consultorioId); setOpen(false)}}>
                            Aceptar Condiciones
                        </Button>
                    </h5>
                </CardBody>
            </Card>
        </DialogContent>
    </Dialog>
}