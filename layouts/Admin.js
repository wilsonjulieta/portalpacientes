import React, { useRef } from "react";
import { useRouter } from "next/router";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/nextjs-material-dashboard/layouts/adminStyle.js";

import bgImage from "assets/img/sidebar.png";
import logo from "assets/img/hospitallogo.png";
import { UserContext } from "../context/UserContextProvider";
import { useContext } from "react";
import { getPatient } from "../services/userAuth";
import { useEffect } from "react";

let ps;

export default function Admin({ children, ...rest }) {
  //TEMPLATE CODE

  // used for checking current route
  const router = useRouter();

  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("white");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
    mobileOpenRef.current = !mobileOpenRef.current;
  };
  const getRoute = () => {
    return router.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  //FIN TEMPLATE CODE

  // Close sidebar when changing routes
  useEffect(() => {
    closeSidebar();
  }, [router.asPath]);

  /* Handle sidebar swipes on mobile */
  const closeSidebar = () => {
    setMobileOpen(false);
    mobileOpenRef.current = false;
  }

  const openSidebar = () => {
    setMobileOpen(true);
    mobileOpenRef.current = true;
  }

  const sidebarMoving = useRef(false);
  const mobileOpenRef = useRef(false);

  useEffect(() => {

    const start = (e) => {
      if (window.innerWidth >= 960) {
        return;
      }
      // X = 0 a la derecha, ya que el sidebar esta en la derecha
      let x = window.innerWidth - e.pageX;
      // Y = 0 arriba
      const y = e.pageY;

      // Evito handlear el slider si el start empieza a la altura del boton de abrir sidebar
      if (y < 50) {
        return;
      }

      // console.log("start", { x, y });

      // Si el sidebar esta cerrado, permito que lo deslice con un margen de 30 px
      if (!mobileOpenRef.current && x > 30) {
        return;
      }
      // Si el sidebar esta abierto, permito que lo deslice con un margen de 20 px
      if (mobileOpenRef.current && (x > 295 || x < 275)) {
        return;
      }

      if (x > 280) {
        x = 280;
      }

      // Abro el sidebar si no lo estaba
      if (!mobileOpenRef.current) {
        openSidebar();
      }

      const sidebar = document.querySelector(".sidebar");

      sidebar.style.setProperty("pointer-events", `none`, "important");
      sidebar.style.setProperty("transform", `translate3d(${280 - x}px, 0, 0)`, "important");
      sidebarMoving.current = true;
    }

    const move = (e) => {
      if (window.innerWidth >= 960) {
        return;
      }
      if (!sidebarMoving.current)
        return;

      const sidebar = document.querySelector(".sidebar");
      let x = window.innerWidth - (e.pageX ?? e.changedTouches?.[0]?.pageX ?? 0);

      // console.log("move", x);

      if (x > 280) {
        x = 280;
      }

      e.preventDefault();

      sidebar.style.setProperty("transform", `translate3d(${280 - x}px, 0, 0)`, "important");
      sidebar.style.setProperty("transition", `all 0s`, "important");
    }
    
    const end = (e) => {
      if (window.innerWidth >= 960) {
        return;
      }
      if (!sidebarMoving.current) {
        return;
      }
      
      sidebarMoving.current = false;
      const x = window.innerWidth - e.pageX;
      
      // console.log("end", x);
      const sidebar = document.querySelector(".sidebar");
      
      setTimeout(() => {
        sidebar.style.setProperty("pointer-events", `all`, "important");
      }, 100);
      
      if (x < 100) {
        closeSidebar();
      }
      else {
        sidebar.style.setProperty("transform", `translate3d(${0}px, 0, 0)`, "important");
        sidebar.style.setProperty("transition", `transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms`, "important");
      }
    }

    document.addEventListener('pointerdown', start);
    document.addEventListener('pointermove', move, { passive: false });
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('pointerup', end);

    return () => {
      document.removeEventListener('pointerdown', start);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('pointerup', end);
    }
  }, [])
  /* Handle sidebar swipes on mobile */

  /* Handle scroll to top on route change */  
  useEffect(() => {
    setTimeout(() => {
      if (typeof mainPanel.current === 'object' && mainPanel.current !== null) {
        mainPanel.current.scrollTop = 0;
      }
      else {
        window.scrollY = 0;
        // window.scrollTo(0, 0);
      }
    }, 2000);
  }, [router.asPath]);
  /* Handle scroll to top on route change */

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"PORTAL PACIENTES"}
        logo={logo}
        image={image}
        handleDrawerToggle={closeSidebar}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{children}</div>
          </div>
        ) : (
          <div className={classes.map}>{children}</div>
        )}
        {/* {getRoute() ? <Footer /> : null} */}
        {/* <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        /> */}
      </div>
    </div>
  );
}
