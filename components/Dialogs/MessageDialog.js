import { Dialog, DialogActions, DialogContent } from "@material-ui/core"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";


import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

/* icon: "message" : "warning" */
export default function MessageDialog({ open, setOpen, message, title, icon }) {
    const handleKeys = (event) => {
        if (event.key === "Enter") {
            setOpen(false)
        }
        if (event.key === "Escape") {
            setOpen(false)
        }
    }

    return <Dialog
        open={open}
        onKeyDown={handleKeys}
        className="messageDialog"
    >
        <DialogContent >
            <Card style={{ marginTop: "10px", marginBottom: "10px" }} className="">
                <CardHeader className="dialogCardHeader" style={{ fontSize: "1.25rem", padding: "8px" }} color={icon === "warning" ? "error" :"primary"}>
                    {
                        icon === "warning" ? <ReportProblemIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} />
                        : icon === "message" ? <CheckCircleIcon className="dialogCardHeader" style={{ fontSize: "1.5rem" }} />
                        : ""
                    } {title} </CardHeader>
                <CardBody style={{ paddingTop: 0, textAlign: "center"}}>
                    <h3>{message}</h3>
                    <Button color="primary" onClick={() => setOpen(false)}>
                        Aceptar
                    </Button>
                </CardBody>
            </Card>
        </DialogContent>
    </Dialog>
}