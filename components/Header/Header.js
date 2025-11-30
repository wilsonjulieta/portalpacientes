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
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function Header(props) {
  const classes = useTheme(styles);

  const { metaInfo } = useContext(MetaInfoContext);

  const { consultorioFullName, mainPageLink } = metaInfo;
  
  const router = useRouter();

  const {consultorioId} = router.query;
  

  return (
    <header className={classes.appBar + " p-0 m-0 text-white"}>
      <Link href={"/login/" + consultorioId} >
        <List className={classes.list} style={{cursor: "pointer"}}>
          <ListItem className={classes.inlineBlock}>
            <span className="p-0 m-0">
              Inicio
            </span>
          </ListItem>
        </List>
      </Link>

      <div style={{ paddingRight: "10px" }}>
        <p className={classes.right}>
          <span>            
            &copy; {1900 + new Date().getYear()}{" "}
            {
              mainPageLink ? <a  target="_blank" className={classes.a + " no-underline"} href={mainPageLink}>
              {consultorioFullName} &nbsp;
              </a> : <>{consultorioFullName} &nbsp;</>
            }
          </span>
        </p>
      </div>
    </header>
  );
}
