import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/nextjs-material-dashboard.js";
import { grayColor, primaryColor } from "../../nextjs-material-dashboard";
import chroma from "chroma-js";

const appStyle = (theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    justifyContent: "center",
    marginTop: "20px"
  },
  content: {
    marginTop: "10px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container: {
    ...container,
    justifyContent: "center"
  },
  map: {
    marginTop: "10px",
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
    }
  },
  stepperRoot: {
    "width": "100%",
    "padding": "10px 5px",
    "@media (width < 500px)": {
      flexDirection: "column",
      gap: "5px",
      padding: 0,
      paddingBottom: "5px"
    }
  },
  animate: {
    "& span": {
      fontSize: "0.8rem",
      animation: "$colorChangeLabel 5s normal",
      color: (props) => props.colorError
    },
    pointerEvents: "none",
    "& svg path": {
      animation: "$colorChangePath 5s normal",
      color: (props) => props.colorError
    },
  },
  static: {
    "& span": {
      fontSize: "0.8rem"
    },
    pointerEvents: "none",
    "& .Mui-checked svg path": {
      animation: "none",
      color: (props) => props.colorPrimary
    },
    "& .MuiButtonBase-root:hover": {
      color: (props) => props.colorPrimary,
      backgroundColor: (props) => {
        try {
          return chroma(props.colorPrimary).alpha(0.2);
        }
        catch {
          return "transparent";
        }
      }
    },
    "& .MuiButtonBase-root": {
      color: (props) => props.colorPrimary
    },
    '@media (hover: none)': {
      "& .MuiButtonBase-root:hover": {
        backgroundColor: "transparent !important"
      },
      "& .MuiButtonBase-root:active": {
        color: (props) => props.colorPrimary,
        backgroundColor: (props) => {
          try {
            return chroma(props.colorPrimary).alpha(0.2);
          }
          catch {
            return "transparent";
          }
        }
      },
    },
  },
  '@keyframes colorChangePath': {
    "0%": {
      fill: "currentColor"
    },
    "100%": {
      fill: "#0000008a"
    }
  },
  '@keyframes colorChangeLabel': {
    "0%": {
    },
    "100%": {
      color: "rgba(0, 0, 0, 0.87);"
    }
  },
  dialogActions: {
    "justifyContent": "space-around"
  },
  vicharacterSuccess: {
    color: (props) => props.colorSuccess,
    borderColor: (props) => props.colorSuccess
  },
  vicharacterError: {
    color: (props) => props.colorError,
    borderColor: (props) => props.colorError
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
