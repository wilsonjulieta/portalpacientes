import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function useTheme(styles) {
    const { theme, setTheme } = useContext(ThemeContext);

    const useStyles = makeStyles(styles);

    return useStyles(theme);
}