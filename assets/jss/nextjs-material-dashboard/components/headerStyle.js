import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/nextjs-material-dashboard.js";

const headerStyle = () => ({
  adminBar: {
    backgroundColor: (props) => props.colorPrimary 
  },
  appBar: {
    backgroundColor: "#b4c3d0",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    color: grayColor[7],
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  container: {
    ...container,
    minHeight: "50px",
    marginLeft: "unset",
    marginRight: "unset",
    justifyContent: "end"
  },
  flex: {
    flex: 0.65,
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default headerStyle;
