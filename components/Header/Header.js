/*eslint-disable*/
import React, { useContext } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/headerStyle.js";
import { MetaInfoContext } from "../../context/MetaInfoContextProvider";
import useTheme from "../../hooks/useTheme";

export default function Header(props) {
  const classes = useTheme(styles);

  const { metaInfo } = useContext(MetaInfoContext);

  const { consultorioFullName } = metaInfo;

  return (
    <header className={classes.appBar + " p-0 m-0 text-white"}>
      <List className={classes.list}>
        <ListItem className={classes.inlineBlock}>
          <span className="p-0 m-0">
            Inicio
          </span>
        </ListItem>
      </List>

      <div style={{ paddingRight: "10px" }}>
        <p className={classes.right}>
          <span>
            {consultorioFullName} &nbsp;
            &copy; {1900 + new Date().getYear()}{" "}
            <a  target="_blank" className={classes.a} href="https://www.iccardiologico.com/">
              Instituto Clínico Cardiológico
            </a>
            <a
              target="_blank"
              className={classes.a}
            >

            </a>
            &nbsp;
          </span>
        </p>
      </div>
    </header>
  );
}
