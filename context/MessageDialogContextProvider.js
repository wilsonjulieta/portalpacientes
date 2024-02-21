import { createContext, useState } from "react";
import MessageDialog from "../components/Dialogs/MessageDialog";

export const MessageDialogContext = createContext(null);

/* icon: "message" : "warning" */
export default function MessageDialogContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const reset = () => {
    setMessage("");
    setTitle("");
    setIcon("");
  }

  const defaultOpen = () => {
    reset();
    setOpen(true);
  }

  const openCallback = () => {
    setOpen(true);
  }

  const close = () => {
    setOpen(false);
  }

  const warningOpen = (message, title) => {
    setMessage(message);
    setTitle(title ?? "");
    setIcon("warning");
    setOpen(true);
  }

  const messageOpen = (message, title) => {
    setMessage(message);
    setTitle(title ?? "");
    setIcon("message");
    setOpen(true);
  }

  return (
    <MessageDialogContext.Provider value={{ open: openCallback, close, setMessage, setTitle, setIcon, reset, defaultOpen, messageOpen, warningOpen }}>
      {children}
      <MessageDialog
        open={open}
        setOpen={setOpen}
        message={message || "Ocurrió un error en el servidor, intente nuevamente."}
        title={title === "" ?  "Hubo un problema" : title}
        icon={icon || "warning"}
      />
    </MessageDialogContext.Provider>
  );
}