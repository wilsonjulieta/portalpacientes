import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";
import { grayColor, primaryColor } from "../../nextjs-material-dashboard";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme?.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "55px",
    padding: "0px 0px",
    minHeight: "calc(100vh - 123px)",
  },
  container: {
    ...container,
    paddingLeft: 0,
    paddingRight: 0
  },
  map: {
    marginTop: "70px",
  },
  select: {
    '&:before': {
      borderBottom: "1px solid " + grayColor[4],
    },
    '&:after': {
      borderBottom: (props) => "2px solid " + props.colorPrimary,
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: (props) => props.colorPrimary,
    },
    '&:not(.Mui-disabled)::before': {
      borderColor: (props) => props.colorPrimary,
    },
    '&:not(.Mui-disabled) svg': {
      fill: (props) => props.colorPrimary,
    }
  },
  selectRoot: {
    //...other styles
    '&:focus': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    fill: 'white',
  },
  root: {
    color: 'white',
  },
  underline: {
    '&:after': {
      borderColor: "red"
    }
  },
  label: {
    '&.Mui-focused': {
      color: (props) => props.colorPrimary
    },
  },
  labelEnabled: {
    color: (props) => props.colorPrimary
  },
  hrPrimaryColored: {
    borderTop: (props) => "1px solid " + props.colorPrimary
  },
  turnStatusCompleted: {
    color: (props) => props.turnStatusColors?.COMPLETED
  },
  turnStatusCancelled: {
    color: (props) => props.turnStatusColors?.CANCELLED
  },
  turnStatusAbsent: {
    color: (props) => props.turnStatusColors?.ABSENT
  },
  colorPrimary: {
    color: (props) => props.colorPrimary
  },
  colorSecondary: {
    color: (props) => props.colorSecondary
  },
  fillPrimary: {
    fill: (props) => props.colorPrimary
  },
  fillSecondary: {
    fill: (props) => props.colorSecondary
  },
  bgPrimary: {
    background: (props) => props.colorPrimary
  },
  bgSecondary: {
    background: (props) => props.colorSecondary
  },
});

export default appStyle;
