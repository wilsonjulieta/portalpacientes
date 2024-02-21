/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Key from '@material-ui/icons/VpnKey';
import Calendar from '@material-ui/icons/Today';
import Recetas from '@material-ui/icons/ListAlt';


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Mi Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/solicitarTurno",
    name: "Solicitar Turno",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Calendar,

    layout: "/admin",
  },
  {
    path: "/gestionTurnos",
    name: "Gestión de Turnos",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Calendar,

    layout: "/admin",
  },
  // {
  //   path: "/solicitarReceta",
  //   name: "Solicitar Receta",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Recetas,

  //   layout: "/admin",
  // },
  // {
  //   path: "/gestionRecetas",
  //   name: "Gestión de Recetas",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Recetas,

  //   layout: "/admin",
  // },
  // {
  //   path: "/table-list",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",

  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,

  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,

  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,

  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,

  //   layout: "/admin",
  // },
  // {
  //   path: "/profesionales",
  //   name: "Profesionales",
  //   iconType: "svg",
  //   icon: <svg className="linkCustomSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0H24V24H0z"/> <path d="M8 3v2H6v4c0 2.21 1.79 4 4 4s4-1.79 4-4V5h-2V3h3c.552 0 1 .448 1 1v5c0 2.973-2.162 5.44-5 5.917V16.5c0 1.933 1.567 3.5 3.5 3.5 1.497 0 2.775-.94 3.275-2.263C16.728 17.27 16 16.22 16 15c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.371-.92 2.527-2.176 2.885C19.21 20.252 17.059 22 14.5 22 11.462 22 9 19.538 9 16.5v-1.583C6.162 14.441 4 11.973 4 9V4c0-.552.448-1 1-1h3z"/> </g> </svg>,

  //   layout: "/admin",
  // },
  {
    path: "/logout",
    name: "Cerrar Sesión",
    rtlName: "التطور للاحترافية",
    icon: Key,

    layout: "/admin",
  },
];

export default dashboardRoutes;
