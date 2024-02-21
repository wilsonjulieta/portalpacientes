import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  darkCardHeader,
  whiteColor,
} from "assets/jss/nextjs-material-dashboard.js";
import { hexToRgb } from "../../nextjs-material-dashboard";

const cardHeaderStyle = (theme) => ({
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: whiteColor,
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px",
      },
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px",
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px",
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right",
    },
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right",
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important",
    },
  },
  cardHeaderIcon: {
    "& $warningCardHeader,& $successCardHeader,& $dangerCardHeader,& $infoCardHeader,& $primaryCardHeader,& $roseCardHeader,& $darkCardHeader": {
      background: "transparent",
      boxShadow: "none",
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
  },
  warningCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...warningCardHeader,
    },
  },
  successCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...successCardHeader,
    },
  },
  dangerCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...dangerCardHeader,
    },
  },
  infoCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...infoCardHeader,
    },
  },
  primaryCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...primaryCardHeader,
      boxShadow: (props) =>
        "0 4px 20px 0 rgba(" +
        hexToRgb(props.cardHeaderPrimaryGradientColors[0]) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(props.cardHeaderPrimaryGradientColors[1]) +
        ",.4)",
      background: (props) => "linear-gradient(60deg, " + props.cardHeaderPrimaryGradientColors[0] + ", " + props.cardHeaderPrimaryGradientColors[1] + ")",
    },
  },
  secondaryCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      // ...secondaryCardHeader,
      background: (props) => "linear-gradient(60deg, " + props.cardHeaderSecondaryGradientColors[0] + ", " + props.cardHeaderSecondaryGradientColors[1] + ")",
    },
  },
  roseCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...roseCardHeader,
    },
  },
  darkCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      ...darkCardHeader,
    },
  },
  errorCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": {
      boxShadow: (props) =>
        "0 4px 20px 0 rgba(" +
        hexToRgb(props.colorError) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(props.colorError2) +
        ",.4)",
      background: (props) => "linear-gradient(60deg, " + props.colorError + ", " + props.colorError2 + ")",
    },
  },
});

export default cardHeaderStyle;
