module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/css/nextjs-material-dashboard.css?v=1.1.0":
/*!**********************************************************!*\
  !*** ./assets/css/nextjs-material-dashboard.css?v=1.1.0 ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard.js":
/*!*************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard.js ***!
  \*************************************************/
/*! exports provided: hexToRgb, drawerWidth, transition, container, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, blackColor, whiteColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, darkBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, darkCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardSubtitle, cardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkBoxShadow", function() { return darkBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkCardHeader", function() { return darkCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/nextjs-material-dashboard
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7", "#212121", "#263238"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};
const darkBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(grayColor[12]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const darkCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + grayColor[13] + ", " + grayColor[12] + ")"
}, darkBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/buttonStyle.js":
/*!************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/buttonStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2)"
    }
  },
  primary: {
    backgroundColor: props => props.colorPrimary,
    boxShadow: props => "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: props => props.colorPrimary,
      boxShadow: props => "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.2)"
    }
  },
  primaryOutlined: {
    border: props => "1px solid " + props.colorPrimary,
    color: props => props.colorPrimary,
    backgroundColor: props => props.colorNeutral,
    boxShadow: props => "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: props => props.colorPrimary,
      boxShadow: props => "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorPrimary) + ", 0.2)"
    }
  },
  secondary: {
    backgroundColor: props => props.colorSecondary,
    boxShadow: props => "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: props => props.colorSecondary,
      boxShadow: props => "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.2)"
    }
  },
  secondaryOutlined: {
    border: props => "1px solid " + props.colorSecondary,
    color: props => props.colorSecondary,
    backgroundColor: props => props.colorNeutral,
    boxShadow: props => "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: props => props.colorSecondary,
      boxShadow: props => "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorSecondary) + ", 0.2)"
    }
  },
  primarySimple: {
    border: "none",
    color: props => props.colorPrimary,
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "all 0.5s",
    "&:hover,&:focus": {
      border: "none",
      color: props => props.colorPrimary,
      backgroundColor: "transparent",
      boxShadow: "none",
      filter: "brightness(0.5)"
    }
  },
  secondarySimple: {
    border: "none",
    color: props => props.colorSecondary,
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "all 0.5s",
    "&:hover,&:focus": {
      border: "none",
      color: props => props.colorSecondary,
      backgroundColor: "transparent",
      boxShadow: "none",
      filter: "brightness(0.5)"
    }
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js":
/*!**************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    paddingBottom: "0",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "0px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js":
/*!****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const cardHeaderStyle = theme => ({
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
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "& $warningCardHeader,& $successCardHeader,& $dangerCardHeader,& $infoCardHeader,& $primaryCardHeader,& $roseCardHeader,& $darkCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"])
  },
  successCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"])
  },
  dangerCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"])
  },
  infoCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"])
  },
  primaryCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"]), {}, {
      boxShadow: props => "0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.cardHeaderPrimaryGradientColors[0]) + ",.14), 0 7px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.cardHeaderPrimaryGradientColors[1]) + ",.4)",
      background: props => "linear-gradient(60deg, " + props.cardHeaderPrimaryGradientColors[0] + ", " + props.cardHeaderPrimaryGradientColors[1] + ")"
    })
  },
  secondaryCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": {
      // ...secondaryCardHeader,
      background: props => "linear-gradient(60deg, " + props.cardHeaderSecondaryGradientColors[0] + ", " + props.cardHeaderSecondaryGradientColors[1] + ")"
    }
  },
  roseCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseCardHeader"])
  },
  darkCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["darkCardHeader"])
  },
  errorCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": {
      boxShadow: props => "0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorError) + ",.14), 0 7px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(props.colorError2) + ",.4)",
      background: props => "linear-gradient(60deg, " + props.colorError + ", " + props.colorError2 + ")"
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.87)",
    background: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardStyle.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\Card\\Card.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function Card(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile,
    chart
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "chart"]);

  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  chart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Card/CardBody.js":
/*!*************************************!*\
  !*** ./components/Card/CardBody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\Card\\CardBody.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function CardBody(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Card/CardHeader.js":
/*!***************************************!*\
  !*** ./components/Card/CardHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useTheme */ "./hooks/useTheme.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\Card\\CardHeader.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



function CardHeader(props) {
  const classes = Object(_hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])(assets_jss_nextjs_material_dashboard_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

  const {
    className,
    children,
    color,
    plain,
    stats,
    icon
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "stats", "icon"]);

  const cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardHeaderClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["warning", "success", "danger", "info", "primary", "secondary", "rose", "dark", "error"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegularButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/buttonStyle.js */ "./assets/jss/nextjs-material-dashboard/components/buttonStyle.js");
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useTheme */ "./hooks/useTheme.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\CustomButtons\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components





function RegularButton(props) {
  const classes = Object(_hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])(assets_jss_nextjs_material_dashboard_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, rest), {}, {
    classes: _objectSpread(_objectSpread({}, muiClasses), {}, {
      root: btnClasses
    }),
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "primaryOutlined", "secondary", "secondaryOutlined", "secondarySimple", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  // use this to pass the classes props from Material-UI
  muiClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Dialogs/MessageDialog.js":
/*!*********************************************!*\
  !*** ./components/Dialogs/MessageDialog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageDialog; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "@material-ui/icons/CheckCircle");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ReportProblem */ "@material-ui/icons/ReportProblem");
/* harmony import */ var _material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\Dialogs\\MessageDialog.js";







/* icon: "message" : "warning" */

function MessageDialog({
  open,
  setOpen,
  message,
  title,
  icon
}) {
  const handleKeys = event => {
    if (event.key === "Enter") {
      setOpen(false);
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: open,
    onKeyDown: handleKeys,
    className: "messageDialog",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          marginTop: "10px",
          marginBottom: "10px"
        },
        className: "",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "dialogCardHeader",
          style: {
            fontSize: "1.25rem",
            padding: "8px"
          },
          color: icon === "warning" ? "error" : "primary",
          children: [icon === "warning" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ReportProblem__WEBPACK_IMPORTED_MODULE_7___default.a, {
            className: "dialogCardHeader",
            style: {
              fontSize: "1.5rem"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 46
          }, this) : icon === "message" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: "dialogCardHeader",
            style: {
              fontSize: "1.5rem"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 48
          }, this) : "", " ", title, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          style: {
            paddingTop: 0,
            textAlign: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            color: "primary",
            onClick: () => setOpen(false),
            children: "Aceptar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./components/PageChange/PageChange.js":
/*!*********************************************!*\
  !*** ./components/PageChange/PageChange.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageChange; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "./routes.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\components\\PageChange\\PageChange.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // @material-ui/core components


 // core components



const styles = {
  progress: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__["infoColor"],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "999999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_4__["title"]), {}, {
    color: "#FFFFFF"
  })
};

function getNombre(path) {
  const routes = _routes__WEBPACK_IMPORTED_MODULE_5__["default"];

  for (const route of routes) {
    if (path.includes(route.path)) {
      return route.name;
    }
  }

  if (path.includes("login")) {
    if (path.includes("register")) {
      return "Registro";
    }

    return "Login";
  }

  if (path === "/") return "Login";
  return path;
}

function PageChange(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.wrapperDiv,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.iconWrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: classes.progress
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: classes.title,
        children: ["Cargando: ", getNombre(props.path)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./constants/THEMES.js":
/*!*****************************!*\
  !*** ./constants/THEMES.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT = {
  colorPrimary: "#e0115f",
  colorSecondary: "blue",
  colorNeutral: "#ddd",
  colorError: "#aa0000",
  colorError2: "#ffaaaa",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["purple", "violet"],
  cardHeaderSecondaryGradientColors: ["#ff66cc", "pink"],
  turnStatusColors: {
    COMPLETED: "green",
    CANCELLED: "orange",
    ABSENT: "red"
  }
};
const THEMES = [_objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#073763",
  colorSecondary: "#f44336",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#073763", "#839bb1"],
  cardHeaderSecondaryGradientColors: ["#a30000", "#db4c4c"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "purple",
  colorSecondary: "violet",
  colorError: "orange"
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "orange",
  colorSecondary: "brown",
  cardHeaderPrimaryGradientColors: ["orange", "yellow"],
  cardHeaderSecondaryGradientColors: ["brown", "orange"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "turquoise",
  colorSecondary: "orangeRed",
  cardHeaderPrimaryGradientColors: ["turquoise", "cyan"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "purple",
  colorSecondary: "magenta",
  colorNeutral: "#f6d1de",
  colorError: "red",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["purple", "#c8a2c8"],
  cardHeaderSecondaryGradientColors: ["magenta", "pink"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#087C9F",
  colorSecondary: "#C62828",
  colorError: "red",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#087C9F", "#00a9a9"],
  cardHeaderSecondaryGradientColors: ["#C62828", "red"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#087C9F",
  colorSecondary: "#C62828",
  colorError: "red",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#087C9F", "#00a9a9"],
  cardHeaderSecondaryGradientColors: ["blue", "lightblue"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "red",
  colorSecondary: "purple",
  colorError: "red",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["yellow", "red"],
  cardHeaderSecondaryGradientColors: ["blue", "lightblue"],
  turnStatusColors: {
    COMPLETED: "black",
    CANCELLED: "pink",
    ABSENT: "violet"
  }
})]; //PARA QUE FUNCIONEN LAS BOX SHADOWS, LOS COLORES DEBERIAN ESTAR EN HEXA

const chroma = __webpack_require__(/*! chroma-js */ "chroma-js");

function colorToHex(color) {
  const colorObj = chroma(color);
  return colorObj.hex();
}

THEMES.forEach((elem, index) => {
  THEMES[index] = _objectSpread(_objectSpread({}, THEMES[index]), {}, {
    colorPrimary: colorToHex(elem.colorPrimary),
    colorSecondary: colorToHex(elem.colorSecondary),
    colorNeutral: colorToHex(elem.colorNeutral),
    colorError: colorToHex(elem.colorError),
    colorError2: colorToHex(elem.colorError2),
    colorSuccess: colorToHex(elem.colorSuccess),
    cardHeaderPrimaryGradientColors: [colorToHex(elem.cardHeaderPrimaryGradientColors[0]), colorToHex(elem.cardHeaderPrimaryGradientColors[1])],
    cardHeaderSecondaryGradientColors: [colorToHex(elem.cardHeaderSecondaryGradientColors[0]), colorToHex(elem.cardHeaderSecondaryGradientColors[1])]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (THEMES);

/***/ }),

/***/ "./constants/URL.js":
/*!**************************!*\
  !*** ./constants/URL.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getURL; });
function getURL(consultorioId) {
  return "https://iccmdp.ddns.net:8889/v1/"; // return "http://201.213.239.73:8889/v1/"
  // return "http://localhost:5000/v1/"
}

/***/ }),

/***/ "./context/MessageDialogContextProvider.js":
/*!*************************************************!*\
  !*** ./context/MessageDialogContextProvider.js ***!
  \*************************************************/
/*! exports provided: MessageDialogContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialogContext", function() { return MessageDialogContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageDialogContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dialogs_MessageDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dialogs/MessageDialog */ "./components/Dialogs/MessageDialog.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\context\\MessageDialogContextProvider.js";


const MessageDialogContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
/* icon: "message" : "warning" */

function MessageDialogContextProvider({
  children
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: icon,
    1: setIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const reset = () => {
    setMessage("");
    setTitle("");
    setIcon("");
  };

  const defaultOpen = () => {
    reset();
    setOpen(true);
  };

  const openCallback = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const warningOpen = (message, title) => {
    setMessage(message);
    setTitle(title !== null && title !== void 0 ? title : "");
    setIcon("warning");
    setOpen(true);
  };

  const messageOpen = (message, title) => {
    setMessage(message);
    setTitle(title !== null && title !== void 0 ? title : "");
    setIcon("message");
    setOpen(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MessageDialogContext.Provider, {
    value: {
      open: openCallback,
      close,
      setMessage,
      setTitle,
      setIcon,
      reset,
      defaultOpen,
      messageOpen,
      warningOpen
    },
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dialogs_MessageDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      open: open,
      setOpen: setOpen,
      message: message || "Ocurrió un error en el servidor, intente nuevamente.",
      title: title === "" ? "Hubo un problema" : title,
      icon: icon || "warning"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./context/ThemeContextProvider.js":
/*!*****************************************!*\
  !*** ./context/ThemeContextProvider.js ***!
  \*****************************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\context\\ThemeContextProvider.js";

const ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
function ThemeContextProvider({
  children,
  theme: initialTheme
}) {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialTheme);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ThemeContext.Provider, {
    value: {
      theme,
      setTheme
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./context/UserContextProvider.js":
/*!****************************************!*\
  !*** ./context/UserContextProvider.js ***!
  \****************************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\context\\UserContextProvider.js";

const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
function UserContextProvider({
  children,
  initUser
}) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initUser !== null && initUser !== void 0 ? initUser : {});
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserContext.Provider, {
    value: {
      user,
      setUser
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./hooks/useTheme.js":
/*!***************************!*\
  !*** ./hooks/useTheme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/ThemeContextProvider */ "./context/ThemeContextProvider.js");



function useTheme(styles) {
  const {
    theme,
    setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]);
  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(styles);
  return useStyles(theme);
}

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PageChange/PageChange.js */ "./components/PageChange/PageChange.js");
/* harmony import */ var assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/css/nextjs-material-dashboard.css?v=1.1.0 */ "./assets/css/nextjs-material-dashboard.css?v=1.1.0");
/* harmony import */ var assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_css_nextjs_material_dashboard_css_v_1_1_0__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/ThemeContextProvider */ "./context/ThemeContextProvider.js");
/* harmony import */ var _constants_THEMES__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/THEMES */ "./constants/THEMES.js");
/* harmony import */ var _context_UserContextProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/UserContextProvider */ "./context/UserContextProvider.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/loading */ "./utils/loading.js");
/* harmony import */ var _services_userAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/userAuth */ "./services/userAuth.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/token */ "./utils/token.js");
/* harmony import */ var _components_Dialogs_MessageDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Dialogs/MessageDialog */ "./components/Dialogs/MessageDialog.js");
/* harmony import */ var _context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../context/MessageDialogContextProvider */ "./context/MessageDialogContextProvider.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_17__);


var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

=========================================================
* NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

















next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeStart", url => {
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_12__["showLoad"])(url);
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeComplete", () => {
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_12__["hideLoad"])();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeError", () => {
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_12__["hideLoad"])();
});
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  } // GetInitialProps corre tanto en server al principio, como en cliente al cambiar de pagina. 
  // La logica requerida solo es requerida al correr del server al principio, por tanto no valido que corra desde el cliente.


  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    var _cookies$loginTries;

    let pageProps = {};
    let {
      consultorioId
    } = router.query;
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_11___default.a.get(ctx); // Setear o pedir id de consultorio

    if (consultorioId) {
      // Set
      nookies__WEBPACK_IMPORTED_MODULE_11___default.a.set(ctx, 'consultorioId', consultorioId, {
        maxAge: 50 * 365 * 24 * 60 * 60,
        path: '/'
      });
    } else {
      consultorioId = cookies.consultorioId;
    } // Redirigir de admin si el usuario no esta logueado


    if (cookies.id === undefined && router.asPath.includes("admin") && true) {
      ctx.res.writeHead(302, {
        Location: '/login/' + consultorioId,
        'Content-Type': 'text/html; charset=utf-8'
      });
      ctx.res.end();
    } // Setear si existe, el usuario que ya esta logueado


    let initUser;

    if (cookies.id !== undefined && Number((_cookies$loginTries = cookies.loginTries) !== null && _cookies$loginTries !== void 0 ? _cookies$loginTries : 0) <= 2 && true && !router.asPath.includes("server-error")) {
      try {
        const {
          id,
          token
        } = {
          id: cookies.id,
          token: await Object(_utils_token__WEBPACK_IMPORTED_MODULE_14__["default"])(ctx)
        };
        console.log({
          id,
          consultorioId,
          token
        });
        let patientResponse = await Object(_services_userAuth__WEBPACK_IMPORTED_MODULE_13__["getPatient"])(id, consultorioId, token);
        console.log({
          patientResponse
        });

        if (!patientResponse.success) {
          throw Error("");
        }

        initUser = patientResponse.data;

        if (!router.asPath.includes("admin") && !router.asPath.includes("testing")) {
          ctx.res.writeHead(302, {
            Location: '/admin/' + consultorioId + "/dashboard",
            'Content-Type': 'text/html; charset=utf-8'
          });
          ctx.res.end(); // ctx.res.finished = true;
        }
      } catch (error) {
        var _cookies$loginTries2;

        nookies__WEBPACK_IMPORTED_MODULE_11___default.a.set(ctx, 'loginTries', Number((_cookies$loginTries2 = cookies.loginTries) !== null && _cookies$loginTries2 !== void 0 ? _cookies$loginTries2 : 0) + 1, {
          maxAge: 60,
          path: '/'
        });

        if (Number(cookies.loginTries) === 2) {
          nookies__WEBPACK_IMPORTED_MODULE_11___default.a.destroy(ctx, "id", {
            path: "/"
          });
          nookies__WEBPACK_IMPORTED_MODULE_11___default.a.destroy(ctx, "dni", {
            path: "/"
          });
          nookies__WEBPACK_IMPORTED_MODULE_11___default.a.destroy(ctx, "loginTries", {
            path: "/"
          });
        }

        ctx.res.writeHead(302, {
          Location: '/login/' + consultorioId + "/server-error",
          'Content-Type': 'text/html; charset=utf-8'
        });
        ctx.res.end(); // ctx.res.finished = true;
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      consultorioId,
      initUser
    };
  }

  render() {
    const {
      Component,
      pageProps,
      consultorioId,
      initUser
    } = this.props;

    const Layout = Component.layout || (({
      children
    }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false));

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
      theme: _constants_THEMES__WEBPACK_IMPORTED_MODULE_9__["default"][consultorioId - 1],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_UserContextProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
        initUser: _objectSpread(_objectSpread({}, initUser), {}, {
          consultorioId
        }),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "NextJS Material Dashboard by Creative Tim"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
              src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_16__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ "@material-ui/icons/LibraryBooks");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/BubbleChart */ "@material-ui/icons/BubbleChart");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Unarchive */ "@material-ui/icons/Unarchive");
/* harmony import */ var _material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/VpnKey */ "@material-ui/icons/VpnKey");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Today__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Today */ "@material-ui/icons/Today");
/* harmony import */ var _material_ui_icons_Today__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Today__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "@material-ui/icons/ListAlt");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9__);
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










const dashboardRoutes = [{
  path: "/dashboard",
  name: "Inicio",
  rtlName: "لوحة القيادة",
  icon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default.a,
  layout: "/admin"
}, {
  path: "/profile",
  name: "Mi Perfil",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default.a,
  layout: "/admin"
}, {
  path: "/solicitarTurno",
  name: "Solicitar Turno",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_Today__WEBPACK_IMPORTED_MODULE_8___default.a,
  layout: "/admin"
}, {
  path: "/gestionTurnos",
  name: "Gestión de Turnos",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_Today__WEBPACK_IMPORTED_MODULE_8___default.a,
  layout: "/admin"
}, // {
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
  icon: _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_7___default.a,
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["default"] = (dashboardRoutes);

/***/ }),

/***/ "./services/FETCH.JS":
/*!***************************!*\
  !*** ./services/FETCH.JS ***!
  \***************************/
/*! exports provided: getToken, GET, DELETE, POST, PUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return PUT; });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/URL */ "./constants/URL.js");


async function getToken(consultorioId) {
    const r1 = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + 'Auth/Login', {
        method: 'POST',
        body: JSON.stringify({
            "userName": "frontEndTeam",
            "password": "2961377012.1402669854"

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    const { token } = await r1.json(); //Si no hay token hace throw directamente

    return token;
}

async function GET(consultorioId, token, relativeRoute) {
    const response = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + relativeRoute, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${token}`, // notice the Bearer before your token
        },
    })

    return response;
}

async function DELETE(consultorioId, token, relativeRoute) {
    const response = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + relativeRoute, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${token}`, // notice the Bearer before your token
        },
    })

    return response;
}


// El body se convierte a JSON por defecto
async function POST(consultorioId, token, relativeRoute, body) {
    const response = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + relativeRoute, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${token}`, // notice the Bearer before your token
        },
        body: JSON.stringify(body)
    })

    return response;
}

async function PUT(consultorioId, token, relativeRoute, body) {
    const response = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + relativeRoute, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `bearer ${token}`, // notice the Bearer before your token
        },
        body: JSON.stringify(body)
    })

    return response;
}

/***/ }),

/***/ "./services/userAuth.js":
/*!******************************!*\
  !*** ./services/userAuth.js ***!
  \******************************/
/*! exports provided: logIn, getPatient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logIn", function() { return logIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatient", function() { return getPatient; });
/* harmony import */ var _constants_URL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/URL */ "./constants/URL.js");
/* harmony import */ var _FETCH_JS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FETCH.JS */ "./services/FETCH.JS");




async function logIn(tipodoc, username, password, consultorioId) {
  let loginResponse;

  try {
    const token = await Object(_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__["getToken"])(); //Si no hay token se va al catch directamente

    const response = await Object(_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__["POST"])(consultorioId, token, "patients/login", {
      tipodoc: Number(tipodoc),
      dni: Number(username),
      password,
      email: ""
    });
    if (response.status !== 200) //Si falla el login se va al catch directamente
      throw Error("Ocurrió un error en el servidor. Intente nuevamente.");
    const data = await response.json(); //Si falla al pedir los datos del paciente va al catch

    if (data.registrado === false) {
      throw Error("Sus datos están cargados pero no se encuentra registrado. Ingrese a \"registrarse\".");
    }

    if (data.id === 0) {
      throw Error("Nombre de usuario o contraseña incorrectos");
    }

    loginResponse = {
      loggedIn: true,
      data,
      token
    };
  } catch (err) {
    loginResponse = {
      loggedIn: false,
      message: err.message
    };
  }

  console.dir({
    loginResponse
  });
  return loginResponse;
}
async function getPatient(id, consultorioId, token) {
  let patientResponse;

  try {
    const r3 = await Object(_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__["GET"])(consultorioId, token, "patients/" + id);

    if (r3.status != 200) {
      throw new Error();
    }

    const data = await r3.json(); //Si falla al pedir los datos del paciente va al catch

    patientResponse = {
      success: true,
      data
    };
  } catch (err) {
    patientResponse = {
      success: false
    };
  }

  return patientResponse;
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/loading.js":
/*!**************************!*\
  !*** ./utils/loading.js ***!
  \**************************/
/*! exports provided: showLoad, hideLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoad", function() { return showLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoad", function() { return hideLoad; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageChange_PageChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageChange/PageChange */ "./components/PageChange/PageChange.js");

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\utils\\loading.js";


function showLoad(url) {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageChange_PageChange__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: url
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this), document.getElementById("page-transition"));
}
function hideLoad() {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
}

/***/ }),

/***/ "./utils/token.js":
/*!************************!*\
  !*** ./utils/token.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GLOBAL_GET_TOKEN; });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/FETCH.JS */ "./services/FETCH.JS");

 // Si el token esta seteado, lo devuelve dependiendo el contexto (En session desde el cliente, en cookies desde el servidor.)

async function GLOBAL_GET_TOKEN(ctx) {
  if (false) {} else {
    // Server-side-only code
    // throw Error();
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default.a.get(ctx);

    try {
      const token = await Object(_services_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__["getToken"])(cookies.consultorioId);
      nookies__WEBPACK_IMPORTED_MODULE_0___default.a.set(ctx, 'token', token, {
        maxAge: 24 * 60 * 60,
        path: '/'
      });
      return token;
    } catch (error) {
      return "";
    }
  }
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/BubbleChart":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BubbleChart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BubbleChart");

/***/ }),

/***/ "@material-ui/icons/CheckCircle":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CheckCircle" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/LibraryBooks":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LibraryBooks" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "@material-ui/icons/ListAlt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ListAlt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ListAlt");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/ReportProblem":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ReportProblem" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ReportProblem");

/***/ }),

/***/ "@material-ui/icons/Today":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Today" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Today");

/***/ }),

/***/ "@material-ui/icons/Unarchive":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Unarchive" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Unarchive");

/***/ }),

/***/ "@material-ui/icons/VpnKey":
/*!********************************************!*\
  !*** external "@material-ui/icons/VpnKey" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VpnKey");

/***/ }),

/***/ "chroma-js":
/*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRIZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWFsb2dzL01lc3NhZ2VEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RIRU1FUy5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVVJMLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1RoZW1lQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlckNvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GRVRDSC5KUyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91c2VyQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3Rva2VuLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9CdWJibGVDaGFydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUJvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpc3RBbHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1RvZGF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1VuYXJjaGl2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9WcG5LZXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaHJvbWEtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGV4VG9SZ2IiLCJpbnB1dCIsInJlcGxhY2UiLCJoZXhSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0Iiwic2Vjb25kIiwibGFzdCIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJjb250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImRlZmF1bHRGb250IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwicHJpbWFyeUNvbG9yIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyQ29sb3IiLCJzdWNjZXNzQ29sb3IiLCJpbmZvQ29sb3IiLCJyb3NlQ29sb3IiLCJncmF5Q29sb3IiLCJibGFja0NvbG9yIiwid2hpdGVDb2xvciIsImJveFNoYWRvdyIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93IiwiZGFya0JveFNoYWRvdyIsIndhcm5pbmdDYXJkSGVhZGVyIiwiYmFja2dyb3VuZCIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImRhcmtDYXJkSGVhZGVyIiwiY2FyZEFjdGlvbnMiLCJtYXJnaW4iLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwiaGVpZ2h0IiwiY2FyZEhlYWRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJjb2xvciIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsIndoaXRlIiwicm9zZSIsInByaW1hcnkiLCJwcm9wcyIsImNvbG9yUHJpbWFyeSIsInByaW1hcnlPdXRsaW5lZCIsImNvbG9yTmV1dHJhbCIsInNlY29uZGFyeSIsImNvbG9yU2Vjb25kYXJ5Iiwic2Vjb25kYXJ5T3V0bGluZWQiLCJwcmltYXJ5U2ltcGxlIiwiZmlsdGVyIiwic2Vjb25kYXJ5U2ltcGxlIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwic2ltcGxlIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJjYXJkQm9keVN0eWxlIiwiY2FyZEJvZHkiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIldlYmtpdEJveEZsZXgiLCJjYXJkQm9keVBsYWluIiwiY2FyZEJvZHlQcm9maWxlIiwiY2FyZEhlYWRlclN0eWxlIiwidGhlbWUiLCJib3JkZXJCb3R0b20iLCJ6SW5kZXgiLCJvdmVyZmxvdyIsImNhcmRIZWFkZXJQbGFpbiIsImNhcmRIZWFkZXJTdGF0cyIsImNhcmRIZWFkZXJJY29uIiwiY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9ycyIsInNlY29uZGFyeUNhcmRIZWFkZXIiLCJjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnMiLCJlcnJvckNhcmRIZWFkZXIiLCJjb2xvckVycm9yIiwiY29sb3JFcnJvcjIiLCJjYXJkU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwid29yZFdyYXAiLCJjYXJkUGxhaW4iLCJjYXJkUHJvZmlsZSIsImNhcmRDaGFydCIsIkNhcmQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGxhaW4iLCJwcm9maWxlIiwiY2hhcnQiLCJyZXN0IiwiY2FyZENsYXNzZXMiLCJjbGFzc05hbWVzIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJDYXJkQm9keSIsImNhcmRCb2R5Q2xhc3NlcyIsIkNhcmRIZWFkZXIiLCJ1c2VUaGVtZSIsInN0YXRzIiwiaWNvbiIsImNhcmRIZWFkZXJDbGFzc2VzIiwib25lT2YiLCJSZWd1bGFyQnV0dG9uIiwic2l6ZSIsIm11aUNsYXNzZXMiLCJidG5DbGFzc2VzIiwicm9vdCIsIm9iamVjdCIsIk1lc3NhZ2VEaWFsb2ciLCJvcGVuIiwic2V0T3BlbiIsIm1lc3NhZ2UiLCJoYW5kbGVLZXlzIiwiZXZlbnQiLCJrZXkiLCJwcm9ncmVzcyIsIndyYXBwZXJEaXYiLCJtYXhXaWR0aCIsImljb25XcmFwcGVyIiwiZ2V0Tm9tYnJlIiwicGF0aCIsInJvdXRlcyIsImRhc2hib2FyZFJvdXRlcyIsInJvdXRlIiwiaW5jbHVkZXMiLCJuYW1lIiwiUGFnZUNoYW5nZSIsIkRFRkFVTFQiLCJjb2xvclN1Y2Nlc3MiLCJ0dXJuU3RhdHVzQ29sb3JzIiwiQ09NUExFVEVEIiwiQ0FOQ0VMTEVEIiwiQUJTRU5UIiwiVEhFTUVTIiwiY2hyb21hIiwicmVxdWlyZSIsImNvbG9yVG9IZXgiLCJjb2xvck9iaiIsImhleCIsImZvckVhY2giLCJlbGVtIiwiaW5kZXgiLCJnZXRVUkwiLCJjb25zdWx0b3Jpb0lkIiwiTWVzc2FnZURpYWxvZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlciIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInNldFRpdGxlIiwic2V0SWNvbiIsInJlc2V0IiwiZGVmYXVsdE9wZW4iLCJvcGVuQ2FsbGJhY2siLCJjbG9zZSIsIndhcm5pbmdPcGVuIiwibWVzc2FnZU9wZW4iLCJUaGVtZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxUaGVtZSIsInNldFRoZW1lIiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiaW5pdFVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZUNvbnRleHQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJzaG93TG9hZCIsImhpZGVMb2FkIiwiTXlBcHAiLCJjb21wb25lbnREaWRNb3VudCIsImNvbW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjdHgiLCJxdWVyeSIsImNvb2tpZXMiLCJub29raWVzIiwiZ2V0Iiwic2V0IiwibWF4QWdlIiwiaWQiLCJhc1BhdGgiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIk51bWJlciIsImxvZ2luVHJpZXMiLCJ0b2tlbiIsIkdMT0JBTF9HRVRfVE9LRU4iLCJsb2ciLCJwYXRpZW50UmVzcG9uc2UiLCJnZXRQYXRpZW50IiwiZGF0YSIsImVycm9yIiwiZGVzdHJveSIsIkxheW91dCIsImxheW91dCIsInJ0bE5hbWUiLCJEYXNoYm9hcmQiLCJQZXJzb24iLCJDYWxlbmRhciIsIktleSIsImxvZ0luIiwidGlwb2RvYyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dpblJlc3BvbnNlIiwiZ2V0VG9rZW4iLCJyZXNwb25zZSIsIlBPU1QiLCJkbmkiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJyZWdpc3RyYWRvIiwibG9nZ2VkSW4iLCJlcnIiLCJkaXIiLCJyMyIsIkdFVCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiLyohXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuICogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gKi9cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyAvLyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gaGV4IGNvbG9yIHRvIHJnYiBjb2xvclxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5YzI3YjAgPT4gb3V0cHV0ID0gMTU2LCAzOSwgMTc2XHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gOWMyN2IwID0+IG91dHB1dCA9IDE1NiwgMzksIDE3NlxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5OTkgPT4gb3V0cHV0ID0gMTUzLCAxNTMsIDE1M1xyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9IDk5OSA9PiBvdXRwdXQgPSAxNTMsIDE1MywgMTUzXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGhleFRvUmdiID0gKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBsZXQgaGV4UmVnZXggPSAvWzAtOUEtRmEtZl0vZztcclxuICBpZiAoIWhleFJlZ2V4LnRlc3QoaW5wdXQpIHx8IChpbnB1dC5sZW5ndGggIT09IDMgJiYgaW5wdXQubGVuZ3RoICE9PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yLlwiKTtcclxuICB9XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgbGV0IGZpcnN0ID0gaW5wdXRbMF07XHJcbiAgICBsZXQgc2Vjb25kID0gaW5wdXRbMV07XHJcbiAgICBsZXQgbGFzdCA9IGlucHV0WzJdO1xyXG4gICAgaW5wdXQgPSBmaXJzdCArIGZpcnN0ICsgc2Vjb25kICsgc2Vjb25kICsgbGFzdCArIGxhc3Q7XHJcbiAgfVxyXG4gIGlucHV0ID0gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICBsZXQgZmlyc3QgPSBpbnB1dFswXSArIGlucHV0WzFdO1xyXG4gIGxldCBzZWNvbmQgPSBpbnB1dFsyXSArIGlucHV0WzNdO1xyXG4gIGxldCBsYXN0ID0gaW5wdXRbNF0gKyBpbnB1dFs1XTtcclxuICByZXR1cm4gKFxyXG4gICAgcGFyc2VJbnQoZmlyc3QsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQoc2Vjb25kLCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KGxhc3QsIDE2KVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gLy8gVmFyaWFibGVzIC0gU3R5bGVzIHRoYXQgYXJlIHVzZWQgb24gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcclxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XHJcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBbXCIjOWMyN2IwXCIsIFwiI2FiNDdiY1wiLCBcIiM4ZTI0YWFcIiwgXCIjYWYyY2M1XCJdO1xyXG5jb25zdCB3YXJuaW5nQ29sb3IgPSBbXCIjZmY5ODAwXCIsIFwiI2ZmYTcyNlwiLCBcIiNmYjhjMDBcIiwgXCIjZmZhMjFhXCJdO1xyXG5jb25zdCBkYW5nZXJDb2xvciA9IFtcIiNmNDQzMzZcIiwgXCIjZWY1MzUwXCIsIFwiI2U1MzkzNVwiLCBcIiNmNTVhNGVcIl07XHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFtcIiM0Y2FmNTBcIiwgXCIjNjZiYjZhXCIsIFwiIzQzYTA0N1wiLCBcIiM1Y2I4NjBcIl07XHJcbmNvbnN0IGluZm9Db2xvciA9IFtcIiMwMGFjYzFcIiwgXCIjMjZjNmRhXCIsIFwiIzAwYWNjMVwiLCBcIiMwMGQzZWVcIl07XHJcbmNvbnN0IHJvc2VDb2xvciA9IFtcIiNlOTFlNjNcIiwgXCIjZWM0MDdhXCIsIFwiI2Q4MWI2MFwiLCBcIiNlYjM1NzNcIl07XHJcbmNvbnN0IGdyYXlDb2xvciA9IFtcclxuICBcIiM5OTlcIixcclxuICBcIiM3NzdcIixcclxuICBcIiMzQzQ4NThcIixcclxuICBcIiNBQUFBQUFcIixcclxuICBcIiNEMkQyRDJcIixcclxuICBcIiNERERcIixcclxuICBcIiNiNGI0YjRcIixcclxuICBcIiM1NTU1NTVcIixcclxuICBcIiMzMzNcIixcclxuICBcIiNhOWFmYmJcIixcclxuICBcIiNlZWVcIixcclxuICBcIiNlN2U3ZTdcIixcclxuICBcIiMyMTIxMjFcIixcclxuICBcIiMyNjMyMzhcIixcclxuXTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFwiIzAwMFwiO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gXCIjRkZGXCI7XHJcblxyXG5jb25zdCBib3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuXHJcbmNvbnN0IGRhcmtCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihncmF5Q29sb3JbMTJdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuXHJcbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyB3YXJuaW5nQ29sb3JbMV0gKyBcIiwgXCIgKyB3YXJuaW5nQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi53YXJuaW5nQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgc3VjY2Vzc0NvbG9yWzFdICsgXCIsIFwiICsgc3VjY2Vzc0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcclxufTtcclxuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZGFuZ2VyQ29sb3JbMV0gKyBcIiwgXCIgKyBkYW5nZXJDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmRhbmdlckJveFNoYWRvdyxcclxufTtcclxuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGluZm9Db2xvclsxXSArIFwiLCBcIiArIGluZm9Db2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmluZm9Cb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcmltYXJ5Q29sb3JbMV0gKyBcIiwgXCIgKyBwcmltYXJ5Q29sb3JbMl0gKyBcIilcIixcclxuICAuLi5wcmltYXJ5Qm94U2hhZG93LFxyXG59O1xyXG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcm9zZUNvbG9yWzFdICsgXCIsIFwiICsgcm9zZUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucm9zZUJveFNoYWRvdyxcclxufTtcclxuY29uc3QgZGFya0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGdyYXlDb2xvclsxM10gKyBcIiwgXCIgKyBncmF5Q29sb3JbMTJdICsgXCIpXCIsXHJcbiAgLi4uZGFya0JveFNoYWRvdyxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRBY3Rpb25zID0ge1xyXG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxyXG4gIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gIGJvcmRlclRvcDogXCIxcHggc29saWQgXCIgKyBncmF5Q29sb3JbMTBdLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgLi4uZGVmYXVsdEZvbnQsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyID0ge1xyXG4gIG1hcmdpbjogXCItMjBweCAxNXB4IDBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxNXB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkID0ge1xyXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxyXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgYmFja2dyb3VuZDogd2hpdGVDb2xvcixcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XHJcbiAgYm9yZGVyOiBcIjBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCIsXHJcbn07XHJcblxyXG5jb25zdCB0aXRsZSA9IHtcclxuICBjb2xvcjogZ3JheUNvbG9yWzJdLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgXCImIHNtYWxsXCI6IHtcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbMV0sXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRUaXRsZSA9IHtcclxuICAuLi50aXRsZSxcclxuICBtYXJnaW5Ub3A6IFwiMFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcclxuICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIFwiJiBhXCI6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwLjc1cmVtXCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XHJcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkTGluayA9IHtcclxuICBcIiYgKyAkY2FyZExpbmtcIjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGV4VG9SZ2IsXHJcbiAgLy92YXJpYWJsZXNcclxuICBkcmF3ZXJXaWR0aCxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGNvbnRhaW5lcixcclxuICBib3hTaGFkb3csXHJcbiAgY2FyZCxcclxuICBkZWZhdWx0Rm9udCxcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIGdyYXlDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgcHJpbWFyeUJveFNoYWRvdyxcclxuICBpbmZvQm94U2hhZG93LFxyXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXHJcbiAgd2FybmluZ0JveFNoYWRvdyxcclxuICBkYW5nZXJCb3hTaGFkb3csXHJcbiAgcm9zZUJveFNoYWRvdyxcclxuICBkYXJrQm94U2hhZG93LFxyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgZGFya0NhcmRIZWFkZXIsXHJcbiAgY2FyZEFjdGlvbnMsXHJcbiAgY2FyZEhlYWRlcixcclxuICBkZWZhdWx0Qm94U2hhZG93LFxyXG4gIHRpdGxlLFxyXG4gIGNhcmRUaXRsZSxcclxuICBjYXJkU3VidGl0bGUsXHJcbiAgY2FyZExpbmssXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgZ3JheUNvbG9yLFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIGhleFRvUmdiLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICAgIG1pbldpZHRoOiBcImF1dG9cIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHBhZGRpbmc6IFwiMTJweCAzMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxyXG4gICAgd2lsbENoYW5nZTogXCJib3gtc2hhZG93LCB0cmFuc2Zvcm1cIixcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgIFwiYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCAmLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIi0xZW1cIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIi0xZW1cIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRqdXN0SWNvblwiOiB7XHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3aGl0ZToge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgY29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpbWFyeU91dGxpbmVkOiB7XHJcbiAgICBib3JkZXI6IChwcm9wcykgPT4gXCIxcHggc29saWQgXCIgKyBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JOZXV0cmFsLFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5T3V0bGluZWQ6IHtcclxuICAgIGJvcmRlcjogKHByb3BzKSA9PiBcIjFweCBzb2xpZCBcIiArIHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JOZXV0cmFsLFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5U2ltcGxlOiB7XHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcygwLjUpXCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlTaW1wbGU6IHtcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuNXNcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBmaWx0ZXI6IFwiYnJpZ2h0bmVzcygwLjUpXCJcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbmZvOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VjY2Vzczoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdhcm5pbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYW5nZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNpbXBsZToge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImJHJvc2VcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkcHJpbWFyeVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRpbmZvXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJHN1Y2Nlc3NcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkd2FybmluZ1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRkYW5nZXJcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRyYW5zcGFyZW50OiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGlzYWJsZWQ6IHtcclxuICAgIG9wYWNpdHk6IFwiMC42NVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgfSxcclxuICBsZzoge1xyXG4gICAgcGFkZGluZzogXCIxLjEyNXJlbSAyLjI1cmVtXCIsXHJcbiAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiLFxyXG4gIH0sXHJcbiAgc206IHtcclxuICAgIHBhZGRpbmc6IFwiMC40MDYyNXJlbSAxLjI1cmVtXCIsXHJcbiAgICBmb250U2l6ZTogXCIwLjY4NzVyZW1cIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCIsXHJcbiAgfSxcclxuICByb3VuZDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIixcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIFwiJiwmOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgY29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBqdXN0SWNvbjoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEycHhcIixcclxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI0MXB4XCIsXHJcbiAgICBtaW5XaWR0aDogXCI0MXB4XCIsXHJcbiAgICB3aWR0aDogXCI0MXB4XCIsXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIHN2ZywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRsZ1wiOiB7XHJcbiAgICAgIGhlaWdodDogXCI1N3B4XCIsXHJcbiAgICAgIG1pbldpZHRoOiBcIjU3cHhcIixcclxuICAgICAgd2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjMycHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJHNtXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCIyOXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3R5bGU7XHJcbiIsImNvbnN0IGNhcmRCb2R5U3R5bGUgPSB7XHJcbiAgY2FyZEJvZHk6IHtcclxuICAgIHBhZGRpbmc6IFwiMC45Mzc1cmVtIDIwcHhcIixcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMFwiLFxyXG4gICAgZmxleDogXCIxIDEgYXV0b1wiLFxyXG4gICAgV2Via2l0Qm94RmxleDogXCIxXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIH0sXHJcbiAgY2FyZEJvZHlQbGFpbjoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IFwiNXB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIsXHJcbiAgfSxcclxuICBjYXJkQm9keVByb2ZpbGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcclxuIiwiaW1wb3J0IHtcclxuICB3YXJuaW5nQ2FyZEhlYWRlcixcclxuICBzdWNjZXNzQ2FyZEhlYWRlcixcclxuICBkYW5nZXJDYXJkSGVhZGVyLFxyXG4gIGluZm9DYXJkSGVhZGVyLFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxyXG4gIHJvc2VDYXJkSGVhZGVyLFxyXG4gIGRhcmtDYXJkSGVhZGVyLFxyXG4gIHdoaXRlQ29sb3IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuLi8uLi9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkXCI7XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyU3R5bGUgPSAodGhlbWUpID0+ICh7XHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgcGFkZGluZzogXCIwLjc1cmVtIDEuMjVyZW1cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgekluZGV4OiBcIjMgIWltcG9ydGFudFwiLFxyXG4gICAgXCImJGNhcmRIZWFkZXJQbGFpbiwmJGNhcmRIZWFkZXJJY29uLCYkY2FyZEhlYWRlclN0YXRzLCYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXIsJiRkYXJrQ2FyZEhlYWRlclwiOiB7XHJcbiAgICAgIG1hcmdpbjogXCIwIDE1cHhcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgfSxcclxuICAgIFwiJjpmaXJzdC1jaGlsZFwiOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweCkgY2FsYyguMjVyZW0gLSAxcHgpIDAgMFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlciwmJGRhcmtDYXJkSGVhZGVyXCI6IHtcclxuICAgICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0yMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyBzdmdcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHdpZHRoOiBcIjM2cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTBweCA0cHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzIGksJiRjYXJkSGVhZGVyU3RhdHMgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMzZweFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgd2lkdGg6IFwiNTZweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcInVuc2V0XCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzJGNhcmRIZWFkZXJJY29uXCI6IHtcclxuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlclBsYWluOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlclN0YXRzOiB7XHJcbiAgICBcIiYgJGNhcmRIZWFkZXJJY29uXCI6IHtcclxuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGgxLCYgaDIsJiBoMywmIGg0LCYgaDUsJiBoNlwiOiB7XHJcbiAgICAgIG1hcmdpbjogXCIwICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSGVhZGVySWNvbjoge1xyXG4gICAgXCImICR3YXJuaW5nQ2FyZEhlYWRlciwmICRzdWNjZXNzQ2FyZEhlYWRlciwmICRkYW5nZXJDYXJkSGVhZGVyLCYgJGluZm9DYXJkSGVhZGVyLCYgJHByaW1hcnlDYXJkSGVhZGVyLCYgJHJvc2VDYXJkSGVhZGVyLCYgJGRhcmtDYXJkSGVhZGVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBpLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMzNweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMzNweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzNweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICB3aWR0aDogXCIyNHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCIsXHJcbiAgICAgIG1hcmdpbjogXCI1cHggNHB4IDBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdhcm5pbmdDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLndhcm5pbmdDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhbmdlckNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uZGFuZ2VyQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbmZvQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5pbmZvQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5Q2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5wcmltYXJ5Q2FyZEhlYWRlcixcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1swXSkgK1xyXG4gICAgICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzFdKSArXHJcbiAgICAgICAgXCIsLjQpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IChwcm9wcykgPT4gXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJvcHMuY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1swXSArIFwiLCBcIiArIHByb3BzLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMV0gKyBcIilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC8vIC4uLnNlY29uZGFyeUNhcmRIZWFkZXIsXHJcbiAgICAgIGJhY2tncm91bmQ6IChwcm9wcykgPT4gXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJvcHMuY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzWzBdICsgXCIsIFwiICsgcHJvcHMuY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzWzFdICsgXCIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcm9zZUNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4ucm9zZUNhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGFya0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uZGFya0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXJyb3JDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yRXJyb3IpICtcclxuICAgICAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JFcnJvcjIpICtcclxuICAgICAgICBcIiwuNClcIixcclxuICAgICAgYmFja2dyb3VuZDogKHByb3BzKSA9PiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcm9wcy5jb2xvckVycm9yICsgXCIsIFwiICsgcHJvcHMuY29sb3JFcnJvcjIgKyBcIilcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkSGVhZGVyU3R5bGU7XHJcbiIsImltcG9ydCB7XHJcbiAgYmxhY2tDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIGhleFRvUmdiLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuXHJcbmNvbnN0IGNhcmRTdHlsZSA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIixcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlQ29sb3IsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuMTQpXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgbWluV2lkdGg6IFwiMFwiLFxyXG4gICAgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLFxyXG4gICAgZm9udFNpemU6IFwiLjg3NXJlbVwiLFxyXG4gIH0sXHJcbiAgY2FyZFBsYWluOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgY2FyZFByb2ZpbGU6IHtcclxuICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBjYXJkQ2hhcnQ6IHtcclxuICAgIFwiJiBwXCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjBweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZFN0eWxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRTdHlsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZChwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgY2hhcnQsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5jYXJkXTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzLmNhcmRQbGFpbl06IHBsYWluLFxyXG4gICAgW2NsYXNzZXMuY2FyZFByb2ZpbGVdOiBwcm9maWxlLFxyXG4gICAgW2NsYXNzZXMuY2FyZENoYXJ0XTogY2hhcnQsXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQ2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoYXJ0OiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEJvZHkocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGxhaW4sIHByb2ZpbGUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNhcmRCb2R5Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZEJvZHldOiB0cnVlLFxyXG4gICAgW2NsYXNzZXMuY2FyZEJvZHlQbGFpbl06IHBsYWluLFxyXG4gICAgW2NsYXNzZXMuY2FyZEJvZHlQcm9maWxlXTogcHJvZmlsZSxcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRCb2R5Q2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkQm9keS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZEhlYWRlclN0eWxlLmpzXCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlVGhlbWUoc3R5bGVzKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNvbG9yLCBwbGFpbiwgc3RhdHMsIGljb24sIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNhcmRIZWFkZXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVyXTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzW2NvbG9yICsgXCJDYXJkSGVhZGVyXCJdXTogY29sb3IsXHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVyUGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJTdGF0c106IHN0YXRzLFxyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlckljb25dOiBpY29uLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEhlYWRlckNsYXNzZXN9IHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgXCJ3YXJuaW5nXCIsXHJcbiAgICBcInN1Y2Nlc3NcIixcclxuICAgIFwiZGFuZ2VyXCIsXHJcbiAgICBcImluZm9cIixcclxuICAgIFwicHJpbWFyeVwiLFxyXG4gICAgXCJzZWNvbmRhcnlcIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJkYXJrXCIsXHJcbiAgICBcImVycm9yXCJcclxuICBdKSxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc3RhdHM6IFByb3BUeXBlcy5ib29sLFxyXG4gIGljb246IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8vIG1hdGVyaWFsLXVpIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qc1wiO1xyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWd1bGFyQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRoZW1lKHN0eWxlcyk7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICByb3VuZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBzaW1wbGUsXHJcbiAgICBzaXplLFxyXG4gICAgYmxvY2ssXHJcbiAgICBsaW5rLFxyXG4gICAganVzdEljb24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBtdWlDbGFzc2VzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxyXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxyXG4gICAgW2NsYXNzZXNbY29sb3JdXTogY29sb3IsXHJcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxyXG4gICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcclxuICAgIFtjbGFzc2VzLnNpbXBsZV06IHNpbXBsZSxcclxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXHJcbiAgICBbY2xhc3Nlcy5saW5rXTogbGluayxcclxuICAgIFtjbGFzc2VzLmp1c3RJY29uXToganVzdEljb24sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSBjbGFzc2VzPXt7IC4uLm11aUNsYXNzZXMsIHJvb3Q6IGJ0bkNsYXNzZXMgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgXCJwcmltYXJ5XCIsXHJcbiAgICBcInByaW1hcnlPdXRsaW5lZFwiLFxyXG4gICAgXCJzZWNvbmRhcnlcIixcclxuICAgIFwic2Vjb25kYXJ5T3V0bGluZWRcIixcclxuICAgIFwic2Vjb25kYXJ5U2ltcGxlXCIsXHJcbiAgICBcImluZm9cIixcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgXCJ3YXJuaW5nXCIsXHJcbiAgICBcImRhbmdlclwiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcInRyYW5zcGFyZW50XCIsXHJcbiAgXSksXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibGdcIl0pLFxyXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXHJcbiAganVzdEljb246IFByb3BUeXBlcy5ib29sLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvLyB1c2UgdGhpcyB0byBwYXNzIHRoZSBjbGFzc2VzIHByb3BzIGZyb20gTWF0ZXJpYWwtVUlcclxuICBtdWlDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc1wiO1xyXG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XHJcblxyXG5cclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgUmVwb3J0UHJvYmxlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFByb2JsZW0nO1xyXG5cclxuLyogaWNvbjogXCJtZXNzYWdlXCIgOiBcIndhcm5pbmdcIiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlRGlhbG9nKHsgb3Blbiwgc2V0T3BlbiwgbWVzc2FnZSwgdGl0bGUsIGljb24gfSkge1xyXG4gICAgY29uc3QgaGFuZGxlS2V5cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8RGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleXN9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZURpYWxvZ1wiXHJcbiAgICA+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgPlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwiZGlhbG9nQ2FyZEhlYWRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuMjVyZW1cIiwgcGFkZGluZzogXCI4cHhcIiB9fSBjb2xvcj17aWNvbiA9PT0gXCJ3YXJuaW5nXCIgPyBcImVycm9yXCIgOlwicHJpbWFyeVwifT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPT09IFwid2FybmluZ1wiID8gPFJlcG9ydFByb2JsZW1JY29uIGNsYXNzTmFtZT1cImRpYWxvZ0NhcmRIZWFkZXJcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGljb24gPT09IFwibWVzc2FnZVwiID8gPENoZWNrQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJkaWFsb2dDYXJkSGVhZGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSB7dGl0bGV9IDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNlcHRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IGluZm9Db2xvciwgdGl0bGUgfSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmRSb3V0ZXMgZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByb2dyZXNzOiB7XHJcbiAgICBjb2xvcjogaW5mb0NvbG9yLFxyXG4gICAgd2lkdGg6IFwiNnJlbSAhaW1wb3J0YW50XCIsXHJcbiAgICBoZWlnaHQ6IFwiNnJlbSAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICB3cmFwcGVyRGl2OiB7XHJcbiAgICBtYXJnaW46IFwiMTAwcHggYXV0b1wiLFxyXG4gICAgcGFkZGluZzogXCIwcHhcIixcclxuICAgIG1heFdpZHRoOiBcIjM2MHB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiBcIjk5OTk5OVwiLFxyXG4gICAgdG9wOiBcIjBcIixcclxuICB9LFxyXG4gIGljb25XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5vbWJyZShwYXRoKSB7XHJcbiAgY29uc3Qgcm91dGVzID0gZGFzaGJvYXJkUm91dGVzO1xyXG5cclxuICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgaWYgKHBhdGguaW5jbHVkZXMocm91dGUucGF0aCkpIHtcclxuICAgICAgcmV0dXJuIHJvdXRlLm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocGF0aC5pbmNsdWRlcyhcImxvZ2luXCIpKSB7XHJcbiAgICBpZiAocGF0aC5pbmNsdWRlcyhcInJlZ2lzdGVyXCIpKSB7XHJcbiAgICAgIHJldHVybiBcIlJlZ2lzdHJvXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBcIkxvZ2luXCI7XHJcbiAgfVxyXG5cclxuICBpZiAocGF0aCA9PT0gXCIvXCIpXHJcbiAgICByZXR1cm4gXCJMb2dpblwiO1xyXG5cclxuICByZXR1cm4gcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUNoYW5nZShwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJEaXZ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25XcmFwcGVyfT5cclxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgIENhcmdhbmRvOiB7Z2V0Tm9tYnJlKHByb3BzLnBhdGgpfVxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJjb25zdCBERUZBVUxUID0ge1xyXG4gICAgY29sb3JQcmltYXJ5OiBcIiNlMDExNWZcIixcclxuICAgIGNvbG9yU2Vjb25kYXJ5OiBcImJsdWVcIixcclxuICAgIGNvbG9yTmV1dHJhbDogXCIjZGRkXCIsXHJcbiAgICBjb2xvckVycm9yOiBcIiNhYTAwMDBcIixcclxuICAgIGNvbG9yRXJyb3IyOiBcIiNmZmFhYWFcIixcclxuICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wicHVycGxlXCIsIFwidmlvbGV0XCJdLFxyXG4gICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjZmY2NmNjXCIsIFwicGlua1wiXSxcclxuICAgIHR1cm5TdGF0dXNDb2xvcnM6IHtcclxuICAgICAgICBDT01QTEVURUQ6IFwiZ3JlZW5cIixcclxuICAgICAgICBDQU5DRUxMRUQ6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgQUJTRU5UOiBcInJlZFwiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBUSEVNRVMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzA3Mzc2M1wiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIiNmNDQzMzZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwNzM3NjNcIiwgXCIjODM5YmIxXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2EzMDAwMFwiLCBcIiNkYjRjNGNcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInB1cnBsZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcInZpb2xldFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwib3JhbmdlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIm9yYW5nZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcImJyb3duXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wib3JhbmdlXCIsIFwieWVsbG93XCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiYnJvd25cIiwgXCJvcmFuZ2VcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInR1cnF1b2lzZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIm9yYW5nZVJlZFwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInR1cnF1b2lzZVwiLCBcImN5YW5cIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInB1cnBsZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIm1hZ2VudGFcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Y2ZDFkZVwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wicHVycGxlXCIsIFwiI2M4YTJjOFwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIm1hZ2VudGFcIiwgXCJwaW5rXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMDg3QzlGXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI0M2MjgyOFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzA4N0M5RlwiLCBcIiMwMGE5YTlcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjQzYyODI4XCIsIFwicmVkXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMDg3QzlGXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI0M2MjgyOFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzA4N0M5RlwiLCBcIiMwMGE5YTlcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCJibHVlXCIsIFwibGlnaHRibHVlXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCJyZWRcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCJwdXJwbGVcIixcclxuICAgICAgICBjb2xvckVycm9yOiBcInJlZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInllbGxvd1wiLCBcInJlZFwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcImJsdWVcIiwgXCJsaWdodGJsdWVcIl0sXHJcbiAgICAgICAgdHVyblN0YXR1c0NvbG9yczoge1xyXG4gICAgICAgICAgICBDT01QTEVURUQ6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgQ0FOQ0VMTEVEOiBcInBpbmtcIixcclxuICAgICAgICAgICAgQUJTRU5UOiBcInZpb2xldFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXVxyXG5cclxuLy9QQVJBIFFVRSBGVU5DSU9ORU4gTEFTIEJPWCBTSEFET1dTLCBMT1MgQ09MT1JFUyBERUJFUklBTiBFU1RBUiBFTiBIRVhBXHJcblxyXG5jb25zdCBjaHJvbWEgPSByZXF1aXJlKCdjaHJvbWEtanMnKTtcclxuXHJcbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcclxuICAgIGNvbnN0IGNvbG9yT2JqID0gY2hyb21hKGNvbG9yKTtcclxuICAgIHJldHVybiBjb2xvck9iai5oZXgoKTtcclxufVxyXG5cclxuVEhFTUVTLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICBUSEVNRVNbaW5kZXhdID0ge1xyXG4gICAgICAgIC4uLlRIRU1FU1tpbmRleF0sXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBjb2xvclRvSGV4KGVsZW0uY29sb3JQcmltYXJ5KSxcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogY29sb3JUb0hleChlbGVtLmNvbG9yU2Vjb25kYXJ5KSxcclxuICAgICAgICBjb2xvck5ldXRyYWw6IGNvbG9yVG9IZXgoZWxlbS5jb2xvck5ldXRyYWwpLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IGNvbG9yVG9IZXgoZWxlbS5jb2xvckVycm9yKSxcclxuICAgICAgICBjb2xvckVycm9yMjogY29sb3JUb0hleChlbGVtLmNvbG9yRXJyb3IyKSxcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IGNvbG9yVG9IZXgoZWxlbS5jb2xvclN1Y2Nlc3MpLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtjb2xvclRvSGV4KGVsZW0uY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1swXSksIGNvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzFdKV0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbY29sb3JUb0hleChlbGVtLmNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yc1swXSksIGNvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMV0pXSxcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUSEVNRVM7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVJMKGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vaWNjbWRwLmRkbnMubmV0Ojg4ODkvdjEvXCJcclxuICAgIC8vIHJldHVybiBcImh0dHA6Ly8yMDEuMjEzLjIzOS43Mzo4ODg5L3YxL1wiXHJcbiAgIC8vIHJldHVybiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92MS9cIlxyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2VEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZURpYWxvZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuLyogaWNvbjogXCJtZXNzYWdlXCIgOiBcIndhcm5pbmdcIiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldEljb24oXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWZhdWx0T3BlbiA9ICgpID0+IHtcclxuICAgIHJlc2V0KCk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YXJuaW5nT3BlbiA9IChtZXNzYWdlLCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcclxuICAgIHNldFRpdGxlKHRpdGxlID8/IFwiXCIpO1xyXG4gICAgc2V0SWNvbihcIndhcm5pbmdcIik7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVzc2FnZU9wZW4gPSAobWVzc2FnZSwgdGl0bGUpID0+IHtcclxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBzZXRUaXRsZSh0aXRsZSA/PyBcIlwiKTtcclxuICAgIHNldEljb24oXCJtZXNzYWdlXCIpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3Blbjogb3BlbkNhbGxiYWNrLCBjbG9zZSwgc2V0TWVzc2FnZSwgc2V0VGl0bGUsIHNldEljb24sIHJlc2V0LCBkZWZhdWx0T3BlbiwgbWVzc2FnZU9wZW4sIHdhcm5pbmdPcGVuIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxNZXNzYWdlRGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2UgfHwgXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvciwgaW50ZW50ZSBudWV2YW1lbnRlLlwifVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZSA9PT0gXCJcIiA/ICBcIkh1Ym8gdW4gcHJvYmxlbWFcIiA6IHRpdGxlfVxyXG4gICAgICAgIGljb249e2ljb24gfHwgXCJ3YXJuaW5nXCJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L01lc3NhZ2VEaWFsb2dDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCB0aGVtZTogaW5pdGlhbFRoZW1lIH0pIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGluaXRpYWxUaGVtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCBzZXRUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCBpbml0VXNlciB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoaW5pdFVzZXIgPz8ge30pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoc3R5bGVzKSB7XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbiAgICByZXR1cm4gdXNlU3R5bGVzKHRoZW1lKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIi8qIVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZS5qc1wiO1xyXG5cclxuaW1wb3J0IFwiYXNzZXRzL2Nzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmNzcz92PTEuMS4wXCI7XHJcbmltcG9ydCBUaGVtZUNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRQcm92aWRlclwiO1xyXG5pbXBvcnQgVEhFTUVTIGZyb20gXCIuLi9jb25zdGFudHMvVEhFTUVTXCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0UHJvdmlkZXJcIjtcclxuXHJcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGhpZGVMb2FkLCBzaG93TG9hZCB9IGZyb20gXCIuLi91dGlscy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IGdldFBhdGllbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlckF1dGhcIjtcclxuaW1wb3J0IEdMT0JBTF9HRVRfVE9LRU4gZnJvbSBcIi4uL3V0aWxzL3Rva2VuXCI7XHJcbmltcG9ydCBNZXNzYWdlRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0RpYWxvZ3MvTWVzc2FnZURpYWxvZ1wiO1xyXG5pbXBvcnQgTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAodXJsKSA9PiB7XHJcbiAgc2hvd0xvYWQodXJsKTtcclxufSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcclxuICBoaWRlTG9hZCgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4ge1xyXG4gIGhpZGVMb2FkKCk7IFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChgXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiAqIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgdjEuMS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCB2MS45LjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4qIENvZGVkIGJ5IENyZWF0aXZlIFRpbVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuYCk7XHJcbiAgICBkb2N1bWVudC5pbnNlcnRCZWZvcmUoY29tbWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICB9XHJcbiAgLy8gR2V0SW5pdGlhbFByb3BzIGNvcnJlIHRhbnRvIGVuIHNlcnZlciBhbCBwcmluY2lwaW8sIGNvbW8gZW4gY2xpZW50ZSBhbCBjYW1iaWFyIGRlIHBhZ2luYS4gXHJcbiAgLy8gTGEgbG9naWNhIHJlcXVlcmlkYSBzb2xvIGVzIHJlcXVlcmlkYSBhbCBjb3JyZXIgZGVsIHNlcnZlciBhbCBwcmluY2lwaW8sIHBvciB0YW50byBubyB2YWxpZG8gcXVlIGNvcnJhIGRlc2RlIGVsIGNsaWVudGUuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfSkge1xyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG5cclxuICAgIGxldCB7IGNvbnN1bHRvcmlvSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBjb29raWVzID0gbm9va2llcy5nZXQoY3R4KVxyXG5cclxuICAgIC8vIFNldGVhciBvIHBlZGlyIGlkIGRlIGNvbnN1bHRvcmlvXHJcbiAgICBpZiAoY29uc3VsdG9yaW9JZCkge1xyXG4gICAgICAvLyBTZXRcclxuICAgICAgbm9va2llcy5zZXQoY3R4LCAnY29uc3VsdG9yaW9JZCcsIGNvbnN1bHRvcmlvSWQsIHtcclxuICAgICAgICBtYXhBZ2U6IDUwICogMzY1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdWx0b3Jpb0lkID0gY29va2llcy5jb25zdWx0b3Jpb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZGlyaWdpciBkZSBhZG1pbiBzaSBlbCB1c3VhcmlvIG5vIGVzdGEgbG9ndWVhZG9cclxuICAgIGlmIChjb29raWVzLmlkID09PSB1bmRlZmluZWQgJiYgcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcImFkbWluXCIpICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICAgIExvY2F0aW9uOiAnL2xvZ2luLycgKyBjb25zdWx0b3Jpb0lkLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgfSk7XHJcbiAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0ZWFyIHNpIGV4aXN0ZSwgZWwgdXN1YXJpbyBxdWUgeWEgZXN0YSBsb2d1ZWFkb1xyXG4gICAgbGV0IGluaXRVc2VyO1xyXG4gICAgaWYgKGNvb2tpZXMuaWQgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIoY29va2llcy5sb2dpblRyaWVzID8/IDApIDw9IDIgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgIXJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJzZXJ2ZXItZXJyb3JcIikpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0geyBpZDogY29va2llcy5pZCwgdG9rZW46IGF3YWl0IEdMT0JBTF9HRVRfVE9LRU4oY3R4KSB9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh7IGlkLCBjb25zdWx0b3Jpb0lkLCB0b2tlbiB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBhdGllbnRSZXNwb25zZSA9IGF3YWl0IGdldFBhdGllbnQoaWQsIGNvbnN1bHRvcmlvSWQsIHRva2VuKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coeyBwYXRpZW50UmVzcG9uc2UgfSk7XHJcblxyXG4gICAgICAgIGlmICghcGF0aWVudFJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFVzZXIgPSBwYXRpZW50UmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKCFyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiYWRtaW5cIikgJiYgIXJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJ0ZXN0aW5nXCIpKSB7XHJcbiAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICAgICAgTG9jYXRpb246ICcvYWRtaW4vJyArIGNvbnN1bHRvcmlvSWQgKyBcIi9kYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgICAgLy8gY3R4LnJlcy5maW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIG5vb2tpZXMuc2V0KGN0eCwgJ2xvZ2luVHJpZXMnLCAoTnVtYmVyKGNvb2tpZXMubG9naW5UcmllcyA/PyAwKSkgKyAxLCB7XHJcbiAgICAgICAgICBtYXhBZ2U6IDYwLFxyXG4gICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKE51bWJlcihjb29raWVzLmxvZ2luVHJpZXMpID09PSAyKSB7XHJcbiAgICAgICAgICBub29raWVzLmRlc3Ryb3koY3R4LCBcImlkXCIsIHtcclxuICAgICAgICAgICAgcGF0aDogXCIvXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbm9va2llcy5kZXN0cm95KGN0eCwgXCJkbmlcIiwge1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBub29raWVzLmRlc3Ryb3koY3R4LCBcImxvZ2luVHJpZXNcIiwge1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICAgIExvY2F0aW9uOiAnL2xvZ2luLycgKyBjb25zdWx0b3Jpb0lkICsgXCIvc2VydmVyLWVycm9yXCIsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgICAgICAvLyBjdHgucmVzLmZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMsIGNvbnN1bHRvcmlvSWQsIGluaXRVc2VyIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGNvbnN1bHRvcmlvSWQsIGluaXRVc2VyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IExheW91dCA9IENvbXBvbmVudC5sYXlvdXQgfHwgKCh7IGNoaWxkcmVuIH0pID0+IDw+e2NoaWxkcmVufTwvPik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lQ29udGV4dFByb3ZpZGVyIHRoZW1lPXtUSEVNRVNbY29uc3VsdG9yaW9JZCAtIDFdfT5cclxuICAgICAgICA8VXNlckNvbnRleHRQcm92aWRlciBpbml0VXNlcj17eyAuLi5pbml0VXNlciwgY29uc3VsdG9yaW9JZCB9fT5cclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPk5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgYnkgQ3JlYXRpdmUgVGltPC90aXRsZT5cclxuICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9WU9VUl9LRVlfSEVSRVwiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2VEaWFsb2dDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8L1RoZW1lQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLyohXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKiAqIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgdjEuMS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCB2MS45LjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4qIENvZGVkIGJ5IENyZWF0aXZlIFRpbVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuKi9cclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiO1xyXG5pbXBvcnQgTGlicmFyeUJvb2tzIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUJvb2tzXCI7XHJcbmltcG9ydCBCdWJibGVDaGFydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0J1YmJsZUNoYXJ0XCI7XHJcbmltcG9ydCBMb2NhdGlvbk9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IFVuYXJjaGl2ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1VuYXJjaGl2ZVwiO1xyXG5pbXBvcnQgS2V5IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WcG5LZXknO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RvZGF5JztcclxuaW1wb3J0IFJlY2V0YXMgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpc3RBbHQnO1xyXG5cclxuXHJcbmNvbnN0IGRhc2hib2FyZFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcIi9kYXNoYm9hcmRcIixcclxuICAgIG5hbWU6IFwiSW5pY2lvXCIsXHJcbiAgICBydGxOYW1lOiBcItmE2YjYrdipINin2YTZgtmK2KfYr9ipXCIsXHJcbiAgICBpY29uOiBEYXNoYm9hcmQsXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvcHJvZmlsZVwiLFxyXG4gICAgbmFtZTogXCJNaSBQZXJmaWxcIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBQZXJzb24sXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvc29saWNpdGFyVHVybm9cIixcclxuICAgIG5hbWU6IFwiU29saWNpdGFyIFR1cm5vXCIsXHJcbiAgICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gICAgaWNvbjogQ2FsZW5kYXIsXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZ2VzdGlvblR1cm5vc1wiLFxyXG4gICAgbmFtZTogXCJHZXN0acOzbiBkZSBUdXJub3NcIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBDYWxlbmRhcixcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9zb2xpY2l0YXJSZWNldGFcIixcclxuICAvLyAgIG5hbWU6IFwiU29saWNpdGFyIFJlY2V0YVwiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAvLyAgIGljb246IFJlY2V0YXMsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvZ2VzdGlvblJlY2V0YXNcIixcclxuICAvLyAgIG5hbWU6IFwiR2VzdGnDs24gZGUgUmVjZXRhc1wiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAvLyAgIGljb246IFJlY2V0YXMsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvdGFibGUtbGlzdFwiLFxyXG4gIC8vICAgbmFtZTogXCJUYWJsZSBMaXN0XCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItmC2KfYptmF2Kkg2KfZhNis2K/ZiNmEXCIsXHJcbiAgLy8gICBpY29uOiBcImNvbnRlbnRfcGFzdGVcIixcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi90eXBvZ3JhcGh5XCIsXHJcbiAgLy8gICBuYW1lOiBcIlR5cG9ncmFwaHlcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2LfYqNin2LnYqVwiLFxyXG4gIC8vICAgaWNvbjogTGlicmFyeUJvb2tzLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL2ljb25zXCIsXHJcbiAgLy8gICBuYW1lOiBcIkljb25zXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItin2YTYsdmF2YjYslwiLFxyXG4gIC8vICAgaWNvbjogQnViYmxlQ2hhcnQsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvbWFwc1wiLFxyXG4gIC8vICAgbmFtZTogXCJNYXBzXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItiu2LHYp9im2LdcIixcclxuICAvLyAgIGljb246IExvY2F0aW9uT24sXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvbm90aWZpY2F0aW9uc1wiLFxyXG4gIC8vICAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItil2K7Yt9in2LHYp9iqXCIsXHJcbiAgLy8gICBpY29uOiBOb3RpZmljYXRpb25zLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3Byb2Zlc2lvbmFsZXNcIixcclxuICAvLyAgIG5hbWU6IFwiUHJvZmVzaW9uYWxlc1wiLFxyXG4gIC8vICAgaWNvblR5cGU6IFwic3ZnXCIsXHJcbiAgLy8gICBpY29uOiA8c3ZnIGNsYXNzTmFtZT1cImxpbmtDdXN0b21TVkdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8Zz4gPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMEgyNFYyNEgwelwiLz4gPHBhdGggZD1cIk04IDN2Mkg2djRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNFY1aC0yVjNoM2MuNTUyIDAgMSAuNDQ4IDEgMXY1YzAgMi45NzMtMi4xNjIgNS40NC01IDUuOTE3VjE2LjVjMCAxLjkzMyAxLjU2NyAzLjUgMy41IDMuNSAxLjQ5NyAwIDIuNzc1LS45NCAzLjI3NS0yLjI2M0MxNi43MjggMTcuMjcgMTYgMTYuMjIgMTYgMTVjMC0xLjY1NyAxLjM0My0zIDMtM3MzIDEuMzQzIDMgM2MwIDEuMzcxLS45MiAyLjUyNy0yLjE3NiAyLjg4NUMxOS4yMSAyMC4yNTIgMTcuMDU5IDIyIDE0LjUgMjIgMTEuNDYyIDIyIDkgMTkuNTM4IDkgMTYuNXYtMS41ODNDNi4xNjIgMTQuNDQxIDQgMTEuOTczIDQgOVY0YzAtLjU1Mi40NDgtMSAxLTFoM3pcIi8+IDwvZz4gPC9zdmc+LFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2xvZ291dFwiLFxyXG4gICAgbmFtZTogXCJDZXJyYXIgU2VzacOzblwiLFxyXG4gICAgcnRsTmFtZTogXCLYp9mE2KrYt9mI2LEg2YTZhNin2K3Yqtix2KfZgdmK2KlcIixcclxuICAgIGljb246IEtleSxcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJvdXRlcztcclxuIiwiaW1wb3J0IGdldFVSTCBmcm9tIFwiLi4vY29uc3RhbnRzL1VSTFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIGNvbnN0IHIxID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgJ0F1dGgvTG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcInVzZXJOYW1lXCI6IFwiZnJvbnRFbmRUZWFtXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCIyOTYxMzc3MDEyLjE0MDI2Njk4NTRcIlxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByMS5qc29uKCk7IC8vU2kgbm8gaGF5IHRva2VuIGhhY2UgdGhyb3cgZGlyZWN0YW1lbnRlXHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuXHJcbi8vIEVsIGJvZHkgc2UgY29udmllcnRlIGEgSlNPTiBwb3IgZGVmZWN0b1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgcmVsYXRpdmVSb3V0ZSwgYm9keSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoY29uc3VsdG9yaW9JZCkgKyByZWxhdGl2ZVJvdXRlLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlLCBib2R5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufSIsImltcG9ydCBVUkwgZnJvbSBcIi4uL2NvbnN0YW50cy9VUkxcIjtcclxuaW1wb3J0IHsgUE9TVCB9IGZyb20gXCIuL0ZFVENILkpTXCI7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuaW1wb3J0IHsgR0VUIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dJbih0aXBvZG9jLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIGxldCBsb2dpblJlc3BvbnNlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpOyAvL1NpIG5vIGhheSB0b2tlbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQT1NUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCBcInBhdGllbnRzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpcG9kb2M6IE51bWJlcih0aXBvZG9jKSxcclxuICAgICAgICAgICAgICAgIGRuaTogTnVtYmVyKHVzZXJuYW1lKSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgLy9TaSBmYWxsYSBlbCBsb2dpbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvci4gSW50ZW50ZSBudWV2YW1lbnRlLlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWdpc3RyYWRvID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlN1cyBkYXRvcyBlc3TDoW4gY2FyZ2Fkb3MgcGVybyBubyBzZSBlbmN1ZW50cmEgcmVnaXN0cmFkby4gSW5ncmVzZSBhIFxcXCJyZWdpc3RyYXJzZVxcXCIuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb21icmUgZGUgdXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9naW5SZXNwb25zZSA9IHsgbG9nZ2VkSW46IHRydWUsIGRhdGEsIHRva2VuIH07XHJcblxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGxvZ2luUmVzcG9uc2UgPSB7IGxvZ2dlZEluOiBmYWxzZSwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUuZGlyKHtsb2dpblJlc3BvbnNlfSk7XHJcblxyXG4gICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF0aWVudChpZCwgY29uc3VsdG9yaW9JZCwgdG9rZW4pIHtcclxuICAgIGxldCBwYXRpZW50UmVzcG9uc2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByMyA9IGF3YWl0IEdFVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgXCJwYXRpZW50cy9cIiArIGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHIzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcjMuanNvbigpIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBwYXRpZW50UmVzcG9uc2UgPSB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTsgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcGF0aWVudFJlc3BvbnNlID0geyBzdWNjZXNzOiBmYWxzZSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGllbnRSZXNwb25zZTtcclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkKHVybCkge1xyXG4gICAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFBhZ2VDaGFuZ2UgcGF0aD17dXJsfSAvPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xyXG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxufSIsImltcG9ydCBub29raWVzLCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vc2VydmljZXMvRkVUQ0guSlMnO1xyXG5cclxuLy8gU2kgZWwgdG9rZW4gZXN0YSBzZXRlYWRvLCBsbyBkZXZ1ZWx2ZSBkZXBlbmRpZW5kbyBlbCBjb250ZXh0byAoRW4gc2Vzc2lvbiBkZXNkZSBlbCBjbGllbnRlLCBlbiBjb29raWVzIGRlc2RlIGVsIHNlcnZpZG9yLilcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR0xPQkFMX0dFVF9UT0tFTihjdHgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy8gQ2xpZW50LXNpZGUtb25seSBjb2RlXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29va2llcy50b2tlbjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFNlcnZlci1zaWRlLW9ubHkgY29kZVxyXG4gICAgICAgIC8vIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oY29va2llcy5jb25zdWx0b3Jpb0lkKTtcclxuICAgICAgICAgICAgbm9va2llcy5zZXQoY3R4LCAndG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlCb29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WcG5LZXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hyb21hLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=