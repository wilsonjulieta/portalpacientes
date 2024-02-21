import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont,
} from "assets/jss/nextjs-material-dashboard.js";

const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: grayColor[4] + " !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: (props) => props.colorPrimary,
    },
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor[0],
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor[0],
    },
  },
  labelRoot: {
    ...defaultFont,
    color:  (props) => props.colorPrimary,
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    '&.Mui-focused': {
      color: (props) => props.colorPrimary
    } 
  },
  labelRootError: {
    color: dangerColor[0],
  },
  labelRootSuccess: {
    color: successColor[0],
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none",
  },
  marginTop: {
    marginTop: "16px",
  },
  formControl: {
    paddingBottom: "5px",
    marginBottom: "5px",
    position: "relative",
    verticalAlign: "unset",
  },
};

export default customInputStyle;
