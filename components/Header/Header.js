/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/headerStyle.js";

export default function Header(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <header className={classes.appBar}>
      <List className={classes.list}>
        <ListItem className={classes.inlineBlock}>
          <a href="#home" className={classes.block}>
            Inicio
          </a>
        </ListItem>
      </List>

      <div style={{paddingRight: "10px"}}>
        <p className={classes.right}>
          <span>
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
