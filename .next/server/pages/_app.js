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

/***/ "./assets/img/favicons sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./assets/img/favicons sync ^\.\/.*$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ICC.ico": "./assets/img/favicons/ICC.ico",
	"./test.png": "./assets/img/favicons/test.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/img/favicons sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./assets/img/favicons/ICC.ico":
/*!*************************************!*\
  !*** ./assets/img/favicons/ICC.ico ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZJQAkWSUAb1slAIZVJhEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFklAEFZJQCcWiUAuF0kAIBJKEszJi7lJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWSUATVklALNZJQCCWyUAQgAAAAAAAAAAJC7wuyMu9MoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWSUAdVklANlZJQBFAAAAAAAAAAAAAAAAIC//fCQu8H4kLu7ZJC7uYAAAAAAAAAAAAAAAAAAAAAAAAAAAWSUAoVklAM9ZJQASAAAAAAAAAAAAAAAAIi75WSQu7bkAAAAAJC7uTSQu7v8kLu5PAAAAAAAAAAAAAAAAWSUAdVklAP9ZJQAYAAAAAAAAAAAAAAAAIi72DiQu7eYkLu4xAAAAAAAAAAAkLu6KJC7u/CQu7h8AAAAAWSUAL1klAP1ZJQCtAAAAAAAAAAAAAAAAAAAAACQu7mMkLu6aAAAAAAAAAAAAAAAAAAAAACQu7qokLu7TJC7uClklAIhZJQD/WSUAvgAAAAAAAAAAAAAAAAAAAAAkLu6rJC7uMAAAAAAAAAAAAAAAAAAAAAAkLu41JC7u/yQu7mVZJQCZWSUA/1klAP1ZJQBvAAAAAAAAAAAAAAAAIy7xsCQu7hAAAAAAAAAAAAAAAAAAAAAAJC7uISQu7v8kLu6mWSUAVFklAP9ZJQD/WSUA/1olALtXJQZwKS3YYCMu8+kkLu4UAAAAAAAAAAAAAAAAAAAAACQu7jMkLu7/JC7us1klAARZJQCbWSUA/1klAP9aJQD/WSUE7i4sw5AiLvb/JC7umyQu7gUAAAAAAAAAACQu7gskLu6pJC7u/yQu7qkAAAAAAAAAAFklAHBZJQDIWSUA31wlALA7KolCIS77/yQu7v8kLu7GJC7uWSQu7mUkLu7VJC7u/yQu7v8kLu5tAAAAAAAAAAAAAAAAAAAAAFklAAUAAAAAAAAAACEu+aMkLu7/JC7u/yQu7v8kLu7/JC7u/yQu7v8kLu7HJC7uDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjLvQKJC7uviQu7v8kLu7/JC7u/yQu7v8kLu7DJC7uDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkLu5VJC7umSQu7p0kLu5dJC7uCAAAAAAAAAAA//8AB/8PAAD8DwAA8M8AAOOHAADHIwD/jjEAeh54AAAeeA7XDngAAAB4AAAAMAAAwAAAAPYAAP/+AQAA/4OkKw=="

/***/ }),

/***/ "./assets/img/favicons/test.png":
/*!**************************************!*\
  !*** ./assets/img/favicons/test.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/test-0dd6c89e944cf5b0aea312b164eac136.png";

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

/***/ "./constants/CONFIG.js":
/*!*****************************!*\
  !*** ./constants/CONFIG.js ***!
  \*****************************/
/*! exports provided: getTheme, getMetaInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaInfo", function() { return getMetaInfo; });
/* harmony import */ var _THEMES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./THEMES */ "./constants/THEMES.js");

const consultoriosNameToId = {
  "ICC": 0,
  "1": 0,
  "TEST": 4
};
const consultoriosFullName = {
  "ICC": "Instituto Clínico Cardiológico",
  "TEST": "Instituto test"
};
const pageTitles = {
  "ICC": "Portal Pacientes ICC",
  "TEST": "Portal De Testing"
};
const favIconRoutes = {
  "ICC": "ICC.ico",
  "TEST": "test.png"
};
function getTheme(consultorioId) {
  var _consultoriosNameToId;

  return _THEMES__WEBPACK_IMPORTED_MODULE_0__["default"][(_consultoriosNameToId = consultoriosNameToId[consultorioId.toUpperCase()]) !== null && _consultoriosNameToId !== void 0 ? _consultoriosNameToId : 0];
}
function getMetaInfo(consultorioId) {
  var _favIconRoutes$consul;

  consultorioId = consultorioId.toUpperCase();
  return {
    consultorioFullName: consultoriosFullName[consultorioId],
    pageTitle: pageTitles[consultorioId],
    favIconRoute: (_favIconRoutes$consul = favIconRoutes[consultorioId]) !== null && _favIconRoutes$consul !== void 0 ? _favIconRoutes$consul : "test.png"
  };
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

/***/ "./context/MetaInfoContextProvider.js":
/*!********************************************!*\
  !*** ./context/MetaInfoContextProvider.js ***!
  \********************************************/
/*! exports provided: MetaInfoContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaInfoContext", function() { return MetaInfoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MetaInfoContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTAL WEB\\PortalPacientes\\context\\MetaInfoContextProvider.js";


const MetaInfoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(null);
/* icon: "message" : "warning" */

function MetaInfoContextProvider({
  children,
  metaInfo
}) {
  console.log(metaInfo);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MetaInfoContext.Provider, {
    value: {
      metaInfo
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: metaInfo.pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: __webpack_require__("./assets/img/favicons sync recursive ^\\.\\/.*$")("./" + metaInfo.favIconRoute)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
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
/* harmony import */ var _context_UserContextProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/UserContextProvider */ "./context/UserContextProvider.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/loading */ "./utils/loading.js");
/* harmony import */ var _services_userAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/userAuth */ "./services/userAuth.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/token */ "./utils/token.js");
/* harmony import */ var _components_Dialogs_MessageDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Dialogs/MessageDialog */ "./components/Dialogs/MessageDialog.js");
/* harmony import */ var _context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../context/MessageDialogContextProvider */ "./context/MessageDialogContextProvider.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants_CONFIG_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/CONFIG.js */ "./constants/CONFIG.js");
/* harmony import */ var _context_MetaInfoContextProvider_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../context/MetaInfoContextProvider.js */ "./context/MetaInfoContextProvider.js");


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
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_11__["showLoad"])(url);
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeComplete", () => {
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_11__["hideLoad"])();
});
next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on("routeChangeError", () => {
  Object(_utils_loading__WEBPACK_IMPORTED_MODULE_11__["hideLoad"])();
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
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_10___default.a.get(ctx); // Setear o pedir id de consultorio

    if (consultorioId) {
      // Set
      nookies__WEBPACK_IMPORTED_MODULE_10___default.a.set(ctx, 'consultorioId', consultorioId, {
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
          token: await Object(_utils_token__WEBPACK_IMPORTED_MODULE_13__["default"])(ctx)
        };
        console.log({
          id,
          consultorioId,
          token
        });
        let patientResponse = await Object(_services_userAuth__WEBPACK_IMPORTED_MODULE_12__["getPatient"])(id, consultorioId, token);
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

        nookies__WEBPACK_IMPORTED_MODULE_10___default.a.set(ctx, 'loginTries', Number((_cookies$loginTries2 = cookies.loginTries) !== null && _cookies$loginTries2 !== void 0 ? _cookies$loginTries2 : 0) + 1, {
          maxAge: 60,
          path: '/'
        });

        if (Number(cookies.loginTries) === 2) {
          nookies__WEBPACK_IMPORTED_MODULE_10___default.a.destroy(ctx, "id", {
            path: "/"
          });
          nookies__WEBPACK_IMPORTED_MODULE_10___default.a.destroy(ctx, "dni", {
            path: "/"
          });
          nookies__WEBPACK_IMPORTED_MODULE_10___default.a.destroy(ctx, "loginTries", {
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

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MetaInfoContextProvider_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
      metaInfo: Object(_constants_CONFIG_js__WEBPACK_IMPORTED_MODULE_17__["getMetaInfo"])(consultorioId),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_ThemeContextProvider__WEBPACK_IMPORTED_MODULE_8__["default"], {
        theme: Object(_constants_CONFIG_js__WEBPACK_IMPORTED_MODULE_17__["getTheme"])(consultorioId),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_UserContextProvider__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
                src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_15__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMvSUNDLmljbyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2Zhdmljb25zL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9idXR0b25TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRIZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWFsb2dzL01lc3NhZ2VEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0NPTkZJRy5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVEhFTUVTLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9VUkwuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvTWV0YUluZm9Db250ZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9UaGVtZUNvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1VzZXJDb250ZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvRkVUQ0guSlMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvdXNlckF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy90b2tlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlCb29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0QWx0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9VbmFyY2hpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVnBuS2V5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21hLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleFRvUmdiIiwiaW5wdXQiLCJyZXBsYWNlIiwiaGV4UmVnZXgiLCJ0ZXN0IiwibGVuZ3RoIiwiRXJyb3IiLCJmaXJzdCIsInNlY29uZCIsImxhc3QiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwiYmxhY2tDb2xvciIsIndoaXRlQ29sb3IiLCJib3hTaGFkb3ciLCJwcmltYXJ5Qm94U2hhZG93IiwiaW5mb0JveFNoYWRvdyIsInN1Y2Nlc3NCb3hTaGFkb3ciLCJ3YXJuaW5nQm94U2hhZG93IiwiZGFuZ2VyQm94U2hhZG93Iiwicm9zZUJveFNoYWRvdyIsImRhcmtCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsImJhY2tncm91bmQiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJkYXJrQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2FyZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiY29sb3IiLCJkZWZhdWx0Qm94U2hhZG93IiwiYm9yZGVyIiwidGl0bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNhcmRUaXRsZSIsImNhcmRTdWJ0aXRsZSIsImNhcmRMaW5rIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJ3aGl0ZSIsInJvc2UiLCJwcmltYXJ5IiwicHJvcHMiLCJjb2xvclByaW1hcnkiLCJwcmltYXJ5T3V0bGluZWQiLCJjb2xvck5ldXRyYWwiLCJzZWNvbmRhcnkiLCJjb2xvclNlY29uZGFyeSIsInNlY29uZGFyeU91dGxpbmVkIiwicHJpbWFyeVNpbXBsZSIsImZpbHRlciIsInNlY29uZGFyeVNpbXBsZSIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsInNpbXBsZSIsInRyYW5zcGFyZW50IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImxnIiwic20iLCJyb3VuZCIsImJsb2NrIiwibGluayIsImp1c3RJY29uIiwiY2FyZEJvZHlTdHlsZSIsImNhcmRCb2R5IiwicGFkZGluZ0JvdHRvbSIsImZsZXgiLCJXZWJraXRCb3hGbGV4IiwiY2FyZEJvZHlQbGFpbiIsImNhcmRCb2R5UHJvZmlsZSIsImNhcmRIZWFkZXJTdHlsZSIsInRoZW1lIiwiYm9yZGVyQm90dG9tIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJjYXJkSGVhZGVyUGxhaW4iLCJjYXJkSGVhZGVyU3RhdHMiLCJjYXJkSGVhZGVySWNvbiIsImNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnMiLCJzZWNvbmRhcnlDYXJkSGVhZGVyIiwiY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzIiwiZXJyb3JDYXJkSGVhZGVyIiwiY29sb3JFcnJvciIsImNvbG9yRXJyb3IyIiwiY2FyZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndvcmRXcmFwIiwiY2FyZFBsYWluIiwiY2FyZFByb2ZpbGUiLCJjYXJkQ2hhcnQiLCJDYXJkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBsYWluIiwicHJvZmlsZSIsImNoYXJ0IiwicmVzdCIsImNhcmRDbGFzc2VzIiwiY2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJDYXJkSGVhZGVyIiwidXNlVGhlbWUiLCJzdGF0cyIsImljb24iLCJjYXJkSGVhZGVyQ2xhc3NlcyIsIm9uZU9mIiwiUmVndWxhckJ1dHRvbiIsInNpemUiLCJtdWlDbGFzc2VzIiwiYnRuQ2xhc3NlcyIsInJvb3QiLCJvYmplY3QiLCJNZXNzYWdlRGlhbG9nIiwib3BlbiIsInNldE9wZW4iLCJtZXNzYWdlIiwiaGFuZGxlS2V5cyIsImV2ZW50Iiwia2V5IiwicHJvZ3Jlc3MiLCJ3cmFwcGVyRGl2IiwibWF4V2lkdGgiLCJpY29uV3JhcHBlciIsImdldE5vbWJyZSIsInBhdGgiLCJyb3V0ZXMiLCJkYXNoYm9hcmRSb3V0ZXMiLCJyb3V0ZSIsImluY2x1ZGVzIiwibmFtZSIsIlBhZ2VDaGFuZ2UiLCJjb25zdWx0b3Jpb3NOYW1lVG9JZCIsImNvbnN1bHRvcmlvc0Z1bGxOYW1lIiwicGFnZVRpdGxlcyIsImZhdkljb25Sb3V0ZXMiLCJnZXRUaGVtZSIsImNvbnN1bHRvcmlvSWQiLCJUSEVNRVMiLCJnZXRNZXRhSW5mbyIsImNvbnN1bHRvcmlvRnVsbE5hbWUiLCJwYWdlVGl0bGUiLCJmYXZJY29uUm91dGUiLCJERUZBVUxUIiwiY29sb3JTdWNjZXNzIiwidHVyblN0YXR1c0NvbG9ycyIsIkNPTVBMRVRFRCIsIkNBTkNFTExFRCIsIkFCU0VOVCIsImNocm9tYSIsInJlcXVpcmUiLCJjb2xvclRvSGV4IiwiY29sb3JPYmoiLCJoZXgiLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4IiwiZ2V0VVJMIiwiTWVzc2FnZURpYWxvZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlciIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInNldFRpdGxlIiwic2V0SWNvbiIsInJlc2V0IiwiZGVmYXVsdE9wZW4iLCJvcGVuQ2FsbGJhY2siLCJjbG9zZSIsIndhcm5pbmdPcGVuIiwibWVzc2FnZU9wZW4iLCJNZXRhSW5mb0NvbnRleHQiLCJNZXRhSW5mb0NvbnRleHRQcm92aWRlciIsIm1ldGFJbmZvIiwiY29uc29sZSIsImxvZyIsIlRoZW1lQ29udGV4dCIsIlRoZW1lQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFRoZW1lIiwic2V0VGhlbWUiLCJVc2VyQ29udGV4dCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJpbml0VXNlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlQ29udGV4dCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwic2hvd0xvYWQiLCJoaWRlTG9hZCIsIk15QXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21tZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnRFbGVtZW50IiwiY3R4IiwicXVlcnkiLCJjb29raWVzIiwibm9va2llcyIsImdldCIsInNldCIsIm1heEFnZSIsImlkIiwiYXNQYXRoIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJOdW1iZXIiLCJsb2dpblRyaWVzIiwidG9rZW4iLCJHTE9CQUxfR0VUX1RPS0VOIiwicGF0aWVudFJlc3BvbnNlIiwiZ2V0UGF0aWVudCIsImRhdGEiLCJlcnJvciIsImRlc3Ryb3kiLCJMYXlvdXQiLCJsYXlvdXQiLCJydGxOYW1lIiwiRGFzaGJvYXJkIiwiUGVyc29uIiwiQ2FsZW5kYXIiLCJLZXkiLCJsb2dJbiIsInRpcG9kb2MiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9naW5SZXNwb25zZSIsImdldFRva2VuIiwicmVzcG9uc2UiLCJQT1NUIiwiZG5pIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwicmVnaXN0cmFkbyIsImxvZ2dlZEluIiwiZXJyIiwiZGlyIiwicjMiLCJHRVQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNB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Ozs7Ozs7Ozs7O0FDN0JELDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsInZhciBtYXAgPSB7XG5cdFwiLi9JQ0MuaWNvXCI6IFwiLi9hc3NldHMvaW1nL2Zhdmljb25zL0lDQy5pY29cIixcblx0XCIuL3Rlc3QucG5nXCI6IFwiLi9hc3NldHMvaW1nL2Zhdmljb25zL3Rlc3QucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2ltZy9mYXZpY29ucyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbjtiYXNlNjQsQUFBQkFBRUFFQkFBQUFFQUlBQm9CQUFBRmdBQUFDZ0FBQUFRQUFBQUlBQUFBQUVBSUFBQUFBQUFRQVFBQUJNTEFBQVRDd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlpKUUFrV1NVQWIxc2xBSVpWSmhFRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRmtsQUVGWkpRQ2NXaVVBdUYwa0FJQkpLRXN6Smk3bEpRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV1NVQVRWa2xBTE5aSlFDQ1d5VUFRZ0FBQUFBQUFBQUFKQzd3dXlNdTlNb0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXU1VBZFZrbEFObFpKUUJGQUFBQUFBQUFBQUFBQUFBQUlDLy9mQ1F1OEg0a0x1N1pKQzd1WUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdTVUFvVmtsQU05WkpRQVNBQUFBQUFBQUFBQUFBQUFBSWk3NVdTUXU3YmtBQUFBQUpDN3VUU1F1N3Y4a0x1NVBBQUFBQUFBQUFBQUFBQUFBV1NVQWRWa2xBUDlaSlFBWUFBQUFBQUFBQUFBQUFBQUFJaTcyRGlRdTdlWWtMdTR4QUFBQUFBQUFBQUFrTHU2S0pDN3UvQ1F1N2g4QUFBQUFXU1VBTDFrbEFQMVpKUUN0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1F1N21Na0x1NmFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDUXU3cW9rTHU3VEpDN3VDbGtsQUloWkpRRC9XU1VBdmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFrTHU2ckpDN3VNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtMdTQxSkM3dS95UXU3bVZaSlFDWldTVUEvMWtsQVAxWkpRQnZBQUFBQUFBQUFBQUFBQUFBSXk3eHNDUXU3aEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKQzd1SVNRdTd2OGtMdTZtV1NVQVZGa2xBUDlaSlFEL1dTVUEvMW9sQUx0WEpRWndLUzNZWUNNdTgra2tMdTRVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1F1N2pNa0x1Ny9KQzd1czFrbEFBUlpKUUNiV1NVQS8xa2xBUDlhSlFEL1dTVUU3aTRzdzVBaUx2Yi9KQzd1bXlRdTdnVUFBQUFBQUFBQUFDUXU3Z3NrTHU2cEpDN3UveVF1N3FrQUFBQUFBQUFBQUZrbEFIQlpKUURJV1NVQTMxd2xBTEE3S29sQ0lTNzcveVF1N3Y4a0x1N0dKQzd1V1NRdTdtVWtMdTdWSkM3dS95UXU3djhrTHU1dEFBQUFBQUFBQUFBQUFBQUFBQUFBQUZrbEFBVUFBQUFBQUFBQUFDRXUrYU1rTHU3L0pDN3UveVF1N3Y4a0x1Ny9KQzd1L3lRdTd2OGtMdTdISkM3dURRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWpMdlFLSkM3dXZpUXU3djhrTHU3L0pDN3UveVF1N3Y4a0x1N0RKQzd1RFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtMdTVWSkM3dW1TUXU3cDBrTHU1ZEpDN3VDQUFBQUFBQUFBQUEvLzhBQi84UEFBRDhEd0FBOE04QUFPT0hBQURISXdEL2pqRUFlaDU0QUFBZWVBN1hEbmdBQUFCNEFBQUFNQUFBd0FBQUFQWUFBUC8rQVFBQS80T2tLdz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVzdC0wZGQ2Yzg5ZTk0NGNmNWIwYWVhMzEyYjE2NGVhYzEzNi5wbmdcIjsiLCIvKiFcclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogKiBOZXh0SlMgTWF0ZXJpYWwgRGFzaGJvYXJkIHYxLjEuMCBiYXNlZCBvbiBNYXRlcmlhbCBEYXNoYm9hcmQgUmVhY3QgdjEuOS4wXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAqIFByb2R1Y3QgUGFnZTogaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4gKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAqL1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIC8vIC8vIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSBoZXggY29sb3IgdG8gcmdiIGNvbG9yXHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gIzljMjdiMCA9PiBvdXRwdXQgPSAxNTYsIDM5LCAxNzZcclxuLy8gLy8gLy8gRXhhbXBsZTogaW5wdXQgPSA5YzI3YjAgPT4gb3V0cHV0ID0gMTU2LCAzOSwgMTc2XHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gIzk5OSA9PiBvdXRwdXQgPSAxNTMsIDE1MywgMTUzXHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gOTk5ID0+IG91dHB1dCA9IDE1MywgMTUzLCAxNTNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgaGV4VG9SZ2IgPSAoaW5wdXQpID0+IHtcclxuICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gIGxldCBoZXhSZWdleCA9IC9bMC05QS1GYS1mXS9nO1xyXG4gIGlmICghaGV4UmVnZXgudGVzdChpbnB1dCkgfHwgKGlucHV0Lmxlbmd0aCAhPT0gMyAmJiBpbnB1dC5sZW5ndGggIT09IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnB1dCBpcyBub3QgYSB2YWxpZCBoZXggY29sb3IuXCIpO1xyXG4gIH1cclxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAzKSB7XHJcbiAgICBsZXQgZmlyc3QgPSBpbnB1dFswXTtcclxuICAgIGxldCBzZWNvbmQgPSBpbnB1dFsxXTtcclxuICAgIGxldCBsYXN0ID0gaW5wdXRbMl07XHJcbiAgICBpbnB1dCA9IGZpcnN0ICsgZmlyc3QgKyBzZWNvbmQgKyBzZWNvbmQgKyBsYXN0ICsgbGFzdDtcclxuICB9XHJcbiAgaW5wdXQgPSBpbnB1dC50b1VwcGVyQ2FzZSgpO1xyXG4gIGxldCBmaXJzdCA9IGlucHV0WzBdICsgaW5wdXRbMV07XHJcbiAgbGV0IHNlY29uZCA9IGlucHV0WzJdICsgaW5wdXRbM107XHJcbiAgbGV0IGxhc3QgPSBpbnB1dFs0XSArIGlucHV0WzVdO1xyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUludChmaXJzdCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChzZWNvbmQsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQobGFzdCwgMTYpXHJcbiAgKTtcclxufTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyAvLyBWYXJpYWJsZXMgLSBTdHlsZXMgdGhhdCBhcmUgdXNlZCBvbiBtb3JlIHRoYW4gb25lIGNvbXBvbmVudFxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxyXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcclxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcclxuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IFtcIiM5YzI3YjBcIiwgXCIjYWI0N2JjXCIsIFwiIzhlMjRhYVwiLCBcIiNhZjJjYzVcIl07XHJcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFtcIiNmZjk4MDBcIiwgXCIjZmZhNzI2XCIsIFwiI2ZiOGMwMFwiLCBcIiNmZmEyMWFcIl07XHJcbmNvbnN0IGRhbmdlckNvbG9yID0gW1wiI2Y0NDMzNlwiLCBcIiNlZjUzNTBcIiwgXCIjZTUzOTM1XCIsIFwiI2Y1NWE0ZVwiXTtcclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gW1wiIzRjYWY1MFwiLCBcIiM2NmJiNmFcIiwgXCIjNDNhMDQ3XCIsIFwiIzVjYjg2MFwiXTtcclxuY29uc3QgaW5mb0NvbG9yID0gW1wiIzAwYWNjMVwiLCBcIiMyNmM2ZGFcIiwgXCIjMDBhY2MxXCIsIFwiIzAwZDNlZVwiXTtcclxuY29uc3Qgcm9zZUNvbG9yID0gW1wiI2U5MWU2M1wiLCBcIiNlYzQwN2FcIiwgXCIjZDgxYjYwXCIsIFwiI2ViMzU3M1wiXTtcclxuY29uc3QgZ3JheUNvbG9yID0gW1xyXG4gIFwiIzk5OVwiLFxyXG4gIFwiIzc3N1wiLFxyXG4gIFwiIzNDNDg1OFwiLFxyXG4gIFwiI0FBQUFBQVwiLFxyXG4gIFwiI0QyRDJEMlwiLFxyXG4gIFwiI0RERFwiLFxyXG4gIFwiI2I0YjRiNFwiLFxyXG4gIFwiIzU1NTU1NVwiLFxyXG4gIFwiIzMzM1wiLFxyXG4gIFwiI2E5YWZiYlwiLFxyXG4gIFwiI2VlZVwiLFxyXG4gIFwiI2U3ZTdlN1wiLFxyXG4gIFwiIzIxMjEyMVwiLFxyXG4gIFwiIzI2MzIzOFwiLFxyXG5dO1xyXG5jb25zdCBibGFja0NvbG9yID0gXCIjMDAwXCI7XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBcIiNGRkZcIjtcclxuXHJcbmNvbnN0IGJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3QgZGFya0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGdyYXlDb2xvclsxMl0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHdhcm5pbmdDb2xvclsxXSArIFwiLCBcIiArIHdhcm5pbmdDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLndhcm5pbmdCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBzdWNjZXNzQ29sb3JbMV0gKyBcIiwgXCIgKyBzdWNjZXNzQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5zdWNjZXNzQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBkYW5nZXJDb2xvclsxXSArIFwiLCBcIiArIGRhbmdlckNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uZGFuZ2VyQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgaW5mb0NvbG9yWzFdICsgXCIsIFwiICsgaW5mb0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uaW5mb0JveFNoYWRvdyxcclxufTtcclxuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByaW1hcnlDb2xvclsxXSArIFwiLCBcIiArIHByaW1hcnlDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnByaW1hcnlCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyByb3NlQ29sb3JbMV0gKyBcIiwgXCIgKyByb3NlQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5yb3NlQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYXJrQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZ3JheUNvbG9yWzEzXSArIFwiLCBcIiArIGdyYXlDb2xvclsxMl0gKyBcIilcIixcclxuICAuLi5kYXJrQm94U2hhZG93LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIiArIGdyYXlDb2xvclsxMF0sXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAuLi5kZWZhdWx0Rm9udCxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXIgPSB7XHJcbiAgbWFyZ2luOiBcIi0yMHB4IDE1cHggMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBwYWRkaW5nOiBcIjE1cHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiMjVweCAwXCIsXHJcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcclxuICBib3JkZXI6IFwiMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlID0ge1xyXG4gIGNvbG9yOiBncmF5Q29sb3JbMl0sXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxyXG4gIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICBcIiYgc21hbGxcIjoge1xyXG4gICAgY29sb3I6IGdyYXlDb2xvclsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0ge1xyXG4gIC4uLnRpdGxlLFxyXG4gIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxyXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgXCImIGFcIjoge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcclxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaW5rID0ge1xyXG4gIFwiJiArICRjYXJkTGlua1wiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoZXhUb1JnYixcclxuICAvL3ZhcmlhYmxlc1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG4gIGJveFNoYWRvdyxcclxuICBjYXJkLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBwcmltYXJ5Qm94U2hhZG93LFxyXG4gIGluZm9Cb3hTaGFkb3csXHJcbiAgc3VjY2Vzc0JveFNoYWRvdyxcclxuICB3YXJuaW5nQm94U2hhZG93LFxyXG4gIGRhbmdlckJveFNoYWRvdyxcclxuICByb3NlQm94U2hhZG93LFxyXG4gIGRhcmtCb3hTaGFkb3csXHJcbiAgd2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcclxuICBpbmZvQ2FyZEhlYWRlcixcclxuICBwcmltYXJ5Q2FyZEhlYWRlcixcclxuICByb3NlQ2FyZEhlYWRlcixcclxuICBkYXJrQ2FyZEhlYWRlcixcclxuICBjYXJkQWN0aW9ucyxcclxuICBjYXJkSGVhZGVyLFxyXG4gIGRlZmF1bHRCb3hTaGFkb3csXHJcbiAgdGl0bGUsXHJcbiAgY2FyZFRpdGxlLFxyXG4gIGNhcmRTdWJ0aXRsZSxcclxuICBjYXJkTGluayxcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBncmF5Q29sb3IsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHJvc2VDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcclxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXHJcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsICYubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiLTFlbVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiLTFlbVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGp1c3RJY29uXCI6IHtcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdoaXRlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvc2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5T3V0bGluZWQ6IHtcclxuICAgIGJvcmRlcjogKHByb3BzKSA9PiBcIjFweCBzb2xpZCBcIiArIHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvck5ldXRyYWwsXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlPdXRsaW5lZDoge1xyXG4gICAgYm9yZGVyOiAocHJvcHMpID0+IFwiMXB4IHNvbGlkIFwiICsgcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvck5ldXRyYWwsXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlTaW1wbGU6IHtcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDAuNSlcIlxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeVNpbXBsZToge1xyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDAuNSlcIlxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2ltcGxlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYkcm9zZVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRwcmltYXJ5XCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGluZm9cIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGRhbmdlclwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaXNhYmxlZDoge1xyXG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGxnOiB7XHJcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCIsXHJcbiAgfSxcclxuICBzbToge1xyXG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIixcclxuICB9LFxyXG4gIHJvdW5kOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGp1c3RJY29uOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcclxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcclxuICAgIHdpZHRoOiBcIjQxcHhcIixcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGxnXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIzMnB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc21cIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIixcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcclxuIiwiY29uc3QgY2FyZEJvZHlTdHlsZSA9IHtcclxuICBjYXJkQm9keToge1xyXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMjBweFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwXCIsXHJcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXHJcbiAgICBXZWJraXRCb3hGbGV4OiBcIjFcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBjYXJkQm9keVBsYWluOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCI1cHhcIixcclxuICAgIHBhZGRpbmdSaWdodDogXCI1cHhcIixcclxuICB9LFxyXG4gIGNhcmRCb2R5UHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkQm9keVN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgZGFya0NhcmRIZWFkZXIsXHJcbiAgd2hpdGVDb2xvcixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcIjtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXJTdHlsZSA9ICh0aGVtZSkgPT4gKHtcclxuICBjYXJkSGVhZGVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMS4yNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB6SW5kZXg6IFwiMyAhaW1wb3J0YW50XCIsXHJcbiAgICBcIiYkY2FyZEhlYWRlclBsYWluLCYkY2FyZEhlYWRlckljb24sJiRjYXJkSGVhZGVyU3RhdHMsJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlciwmJGRhcmtDYXJkSGVhZGVyXCI6IHtcclxuICAgICAgbWFyZ2luOiBcIjAgMTVweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgXCImOmZpcnN0LWNoaWxkXCI6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KSBjYWxjKC4yNXJlbSAtIDFweCkgMCAwXCIsXHJcbiAgICB9LFxyXG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyLCYkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzIHN2Z1wiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgd2lkdGg6IFwiMzZweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweCAxMHB4IDRweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMgaSwmJGNhcmRIZWFkZXJTdGF0cyAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB3aWR0aDogXCI1NnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgb3ZlcmZsb3c6IFwidW5zZXRcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMkY2FyZEhlYWRlckljb25cIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSGVhZGVyUGxhaW46IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBjYXJkSGVhZGVyU3RhdHM6IHtcclxuICAgIFwiJiAkY2FyZEhlYWRlckljb25cIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDEsJiBoMiwmIGgzLCYgaDQsJiBoNSwmIGg2XCI6IHtcclxuICAgICAgbWFyZ2luOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRIZWFkZXJJY29uOiB7XHJcbiAgICBcIiYgJHdhcm5pbmdDYXJkSGVhZGVyLCYgJHN1Y2Nlc3NDYXJkSGVhZGVyLCYgJGRhbmdlckNhcmRIZWFkZXIsJiAkaW5mb0NhcmRIZWFkZXIsJiAkcHJpbWFyeUNhcmRIZWFkZXIsJiAkcm9zZUNhcmRIZWFkZXIsJiAkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGksJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICB3aWR0aDogXCIzM3B4XCIsXHJcbiAgICAgIGhlaWdodDogXCIzM3B4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIixcclxuICAgICAgbWFyZ2luOiBcIjVweCA0cHggMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZ0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4ud2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5kYW5nZXJDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm9DYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmluZm9DYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnByaW1hcnlDYXJkSGVhZGVyLFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzBdKSArXHJcbiAgICAgICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMV0pICtcclxuICAgICAgICBcIiwuNClcIixcclxuICAgICAgYmFja2dyb3VuZDogKHByb3BzKSA9PiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzBdICsgXCIsIFwiICsgcHJvcHMuY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1sxXSArIFwiKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLy8gLi4uc2Vjb25kYXJ5Q2FyZEhlYWRlcixcclxuICAgICAgYmFja2dyb3VuZDogKHByb3BzKSA9PiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcm9wcy5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMF0gKyBcIiwgXCIgKyBwcm9wcy5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMV0gKyBcIilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5yb3NlQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXJrQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5kYXJrQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBlcnJvckNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JFcnJvcikgK1xyXG4gICAgICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvckVycm9yMikgK1xyXG4gICAgICAgIFwiLC40KVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAocHJvcHMpID0+IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByb3BzLmNvbG9yRXJyb3IgKyBcIiwgXCIgKyBwcm9wcy5jb2xvckVycm9yMiArIFwiKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRIZWFkZXJTdHlsZTtcclxuIiwiaW1wb3J0IHtcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgIGNvbG9yOiBcInJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjg3KVwiLFxyXG4gICAgYmFja2dyb3VuZDogd2hpdGVDb2xvcixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBtaW5XaWR0aDogXCIwXCIsXHJcbiAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXHJcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCIsXHJcbiAgfSxcclxuICBjYXJkUGxhaW46IHtcclxuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgfSxcclxuICBjYXJkUHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGNhcmRDaGFydDoge1xyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkU3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZFN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBwcm9maWxlLCBjaGFydCwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZENsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRdOiB0cnVlLFxyXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkUHJvZmlsZV06IHByb2ZpbGUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkQ2hhcnRdOiBjaGFydCxcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQm9keShwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZEJvZHlDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keV06IHRydWUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVByb2ZpbGVdOiBwcm9maWxlLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEJvZHlDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmRCb2R5LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanNcIjtcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gXCIuLi8uLi9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUaGVtZShzdHlsZXMpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29sb3IsIHBsYWluLCBzdGF0cywgaWNvbiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZEhlYWRlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJdOiB0cnVlLFxyXG4gICAgW2NsYXNzZXNbY29sb3IgKyBcIkNhcmRIZWFkZXJcIl1dOiBjb2xvcixcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJQbGFpbl06IHBsYWluLFxyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclN0YXRzXTogc3RhdHMsXHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVySWNvbl06IGljb24sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkSGVhZGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcIndhcm5pbmdcIixcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgXCJkYW5nZXJcIixcclxuICAgIFwiaW5mb1wiLFxyXG4gICAgXCJwcmltYXJ5XCIsXHJcbiAgICBcInNlY29uZGFyeVwiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcImRhcmtcIixcclxuICAgIFwiZXJyb3JcIlxyXG4gIF0pLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdGF0czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLy8gbWF0ZXJpYWwtdWkgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzXCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlVGhlbWUoc3R5bGVzKTtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcixcclxuICAgIHJvdW5kLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHNpbXBsZSxcclxuICAgIHNpemUsXHJcbiAgICBibG9jayxcclxuICAgIGxpbmssXHJcbiAgICBqdXN0SWNvbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG11aUNsYXNzZXMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXHJcbiAgICBbY2xhc3Nlc1tzaXplXV06IHNpemUsXHJcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcclxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXHJcbiAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxyXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxyXG4gICAgW2NsYXNzZXMuYmxvY2tdOiBibG9jayxcclxuICAgIFtjbGFzc2VzLmxpbmtdOiBsaW5rLFxyXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e3sgLi4ubXVpQ2xhc3Nlcywgcm9vdDogYnRuQ2xhc3NlcyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcInByaW1hcnlcIixcclxuICAgIFwicHJpbWFyeU91dGxpbmVkXCIsXHJcbiAgICBcInNlY29uZGFyeVwiLFxyXG4gICAgXCJzZWNvbmRhcnlPdXRsaW5lZFwiLFxyXG4gICAgXCJzZWNvbmRhcnlTaW1wbGVcIixcclxuICAgIFwiaW5mb1wiLFxyXG4gICAgXCJzdWNjZXNzXCIsXHJcbiAgICBcIndhcm5pbmdcIixcclxuICAgIFwiZGFuZ2VyXCIsXHJcbiAgICBcInJvc2VcIixcclxuICAgIFwid2hpdGVcIixcclxuICAgIFwidHJhbnNwYXJlbnRcIixcclxuICBdKSxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXHJcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcclxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxyXG4gIG11aUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuXHJcblxyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBSZXBvcnRQcm9ibGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbSc7XHJcblxyXG4vKiBpY29uOiBcIm1lc3NhZ2VcIiA6IFwid2FybmluZ1wiICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2VEaWFsb2coeyBvcGVuLCBzZXRPcGVuLCBtZXNzYWdlLCB0aXRsZSwgaWNvbiB9KSB7XHJcbiAgICBjb25zdCBoYW5kbGVLZXlzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5c31cclxuICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlRGlhbG9nXCJcclxuICAgID5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCA+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJkaWFsb2dDYXJkSGVhZGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4yNXJlbVwiLCBwYWRkaW5nOiBcIjhweFwiIH19IGNvbG9yPXtpY29uID09PSBcIndhcm5pbmdcIiA/IFwiZXJyb3JcIiA6XCJwcmltYXJ5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9PT0gXCJ3YXJuaW5nXCIgPyA8UmVwb3J0UHJvYmxlbUljb24gY2xhc3NOYW1lPVwiZGlhbG9nQ2FyZEhlYWRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaWNvbiA9PT0gXCJtZXNzYWdlXCIgPyA8Q2hlY2tDaXJjbGVJY29uIGNsYXNzTmFtZT1cImRpYWxvZ0NhcmRIZWFkZXJcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9IHt0aXRsZX0gPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2VwdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgPC9EaWFsb2c+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgaW5mb0NvbG9yLCB0aXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuaW1wb3J0IGRhc2hib2FyZFJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBpbmZvQ29sb3IsXHJcbiAgICB3aWR0aDogXCI2cmVtICFpbXBvcnRhbnRcIixcclxuICAgIGhlaWdodDogXCI2cmVtICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIHdyYXBwZXJEaXY6IHtcclxuICAgIG1hcmdpbjogXCIxMDBweCBhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwiOTk5OTk5XCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gIH0sXHJcbiAgaWNvbldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9tYnJlKHBhdGgpIHtcclxuICBjb25zdCByb3V0ZXMgPSBkYXNoYm9hcmRSb3V0ZXM7XHJcblxyXG4gIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICBpZiAocGF0aC5pbmNsdWRlcyhyb3V0ZS5wYXRoKSkge1xyXG4gICAgICByZXR1cm4gcm91dGUubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwYXRoLmluY2x1ZGVzKFwibG9naW5cIikpIHtcclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKFwicmVnaXN0ZXJcIikpIHtcclxuICAgICAgcmV0dXJuIFwiUmVnaXN0cm9cIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFwiTG9naW5cIjtcclxuICB9XHJcblxyXG4gIGlmIChwYXRoID09PSBcIi9cIilcclxuICAgIHJldHVybiBcIkxvZ2luXCI7XHJcblxyXG4gIHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ2hhbmdlKHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlckRpdn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgQ2FyZ2FuZG86IHtnZXROb21icmUocHJvcHMucGF0aCl9XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBUSEVNRVMgZnJvbSBcIi4vVEhFTUVTXCI7XHJcblxyXG5jb25zdCBjb25zdWx0b3Jpb3NOYW1lVG9JZCA9IHtcclxuICAgIFwiSUNDXCI6IDAsXHJcbiAgICBcIjFcIjogMCxcclxuICAgIFwiVEVTVFwiOiA0XHJcbn1cclxuXHJcbmNvbnN0IGNvbnN1bHRvcmlvc0Z1bGxOYW1lID0ge1xyXG4gICAgXCJJQ0NcIjogXCJJbnN0aXR1dG8gQ2zDrW5pY28gQ2FyZGlvbMOzZ2ljb1wiLFxyXG4gICAgXCJURVNUXCI6IFwiSW5zdGl0dXRvIHRlc3RcIlxyXG59XHJcblxyXG5jb25zdCBwYWdlVGl0bGVzID0ge1xyXG4gICAgXCJJQ0NcIjogXCJQb3J0YWwgUGFjaWVudGVzIElDQ1wiLFxyXG4gICAgXCJURVNUXCI6IFwiUG9ydGFsIERlIFRlc3RpbmdcIixcclxufVxyXG5cclxuY29uc3QgZmF2SWNvblJvdXRlcyA9IHtcclxuICAgIFwiSUNDXCI6IFwiSUNDLmljb1wiLFxyXG4gICAgXCJURVNUXCI6IFwidGVzdC5wbmdcIlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWUoY29uc3VsdG9yaW9JZCkge1xyXG4gICAgcmV0dXJuIFRIRU1FU1tjb25zdWx0b3Jpb3NOYW1lVG9JZFtjb25zdWx0b3Jpb0lkLnRvVXBwZXJDYXNlKCldID8/IDBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YUluZm8oY29uc3VsdG9yaW9JZCkge1xyXG4gICAgY29uc3VsdG9yaW9JZCA9IGNvbnN1bHRvcmlvSWQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnN1bHRvcmlvRnVsbE5hbWU6IGNvbnN1bHRvcmlvc0Z1bGxOYW1lW2NvbnN1bHRvcmlvSWRdLFxyXG4gICAgICAgIHBhZ2VUaXRsZTogcGFnZVRpdGxlc1tjb25zdWx0b3Jpb0lkXSxcclxuICAgICAgICBmYXZJY29uUm91dGU6IGZhdkljb25Sb3V0ZXNbY29uc3VsdG9yaW9JZF0gPz8gXCJ0ZXN0LnBuZ1wiXHJcbiAgICB9XHJcbn0iLCJjb25zdCBERUZBVUxUID0ge1xyXG4gICAgY29sb3JQcmltYXJ5OiBcIiNlMDExNWZcIixcclxuICAgIGNvbG9yU2Vjb25kYXJ5OiBcImJsdWVcIixcclxuICAgIGNvbG9yTmV1dHJhbDogXCIjZGRkXCIsXHJcbiAgICBjb2xvckVycm9yOiBcIiNhYTAwMDBcIixcclxuICAgIGNvbG9yRXJyb3IyOiBcIiNmZmFhYWFcIixcclxuICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wicHVycGxlXCIsIFwidmlvbGV0XCJdLFxyXG4gICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjZmY2NmNjXCIsIFwicGlua1wiXSxcclxuICAgIHR1cm5TdGF0dXNDb2xvcnM6IHtcclxuICAgICAgICBDT01QTEVURUQ6IFwiZ3JlZW5cIixcclxuICAgICAgICBDQU5DRUxMRUQ6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgQUJTRU5UOiBcInJlZFwiXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBUSEVNRVMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzA3Mzc2M1wiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIiNmNDQzMzZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwNzM3NjNcIiwgXCIjODM5YmIxXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2EzMDAwMFwiLCBcIiNkYjRjNGNcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInB1cnBsZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcInZpb2xldFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwib3JhbmdlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIm9yYW5nZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcImJyb3duXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wib3JhbmdlXCIsIFwieWVsbG93XCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiYnJvd25cIiwgXCJvcmFuZ2VcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInR1cnF1b2lzZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIm9yYW5nZVJlZFwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInR1cnF1b2lzZVwiLCBcImN5YW5cIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInB1cnBsZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIm1hZ2VudGFcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Y2ZDFkZVwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wicHVycGxlXCIsIFwiI2M4YTJjOFwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIm1hZ2VudGFcIiwgXCJwaW5rXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMDg3QzlGXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI0M2MjgyOFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzA4N0M5RlwiLCBcIiMwMGE5YTlcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjQzYyODI4XCIsIFwicmVkXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMDg3QzlGXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI0M2MjgyOFwiLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IFwicmVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzA4N0M5RlwiLCBcIiMwMGE5YTlcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCJibHVlXCIsIFwibGlnaHRibHVlXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCJyZWRcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCJwdXJwbGVcIixcclxuICAgICAgICBjb2xvckVycm9yOiBcInJlZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInllbGxvd1wiLCBcInJlZFwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcImJsdWVcIiwgXCJsaWdodGJsdWVcIl0sXHJcbiAgICAgICAgdHVyblN0YXR1c0NvbG9yczoge1xyXG4gICAgICAgICAgICBDT01QTEVURUQ6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgQ0FOQ0VMTEVEOiBcInBpbmtcIixcclxuICAgICAgICAgICAgQUJTRU5UOiBcInZpb2xldFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXVxyXG5cclxuLy9QQVJBIFFVRSBGVU5DSU9ORU4gTEFTIEJPWCBTSEFET1dTLCBMT1MgQ09MT1JFUyBERUJFUklBTiBFU1RBUiBFTiBIRVhBXHJcblxyXG5jb25zdCBjaHJvbWEgPSByZXF1aXJlKCdjaHJvbWEtanMnKTtcclxuXHJcbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcclxuICAgIGNvbnN0IGNvbG9yT2JqID0gY2hyb21hKGNvbG9yKTtcclxuICAgIHJldHVybiBjb2xvck9iai5oZXgoKTtcclxufVxyXG5cclxuVEhFTUVTLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICBUSEVNRVNbaW5kZXhdID0ge1xyXG4gICAgICAgIC4uLlRIRU1FU1tpbmRleF0sXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBjb2xvclRvSGV4KGVsZW0uY29sb3JQcmltYXJ5KSxcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogY29sb3JUb0hleChlbGVtLmNvbG9yU2Vjb25kYXJ5KSxcclxuICAgICAgICBjb2xvck5ldXRyYWw6IGNvbG9yVG9IZXgoZWxlbS5jb2xvck5ldXRyYWwpLFxyXG4gICAgICAgIGNvbG9yRXJyb3I6IGNvbG9yVG9IZXgoZWxlbS5jb2xvckVycm9yKSxcclxuICAgICAgICBjb2xvckVycm9yMjogY29sb3JUb0hleChlbGVtLmNvbG9yRXJyb3IyKSxcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IGNvbG9yVG9IZXgoZWxlbS5jb2xvclN1Y2Nlc3MpLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtjb2xvclRvSGV4KGVsZW0uY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1swXSksIGNvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzFdKV0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbY29sb3JUb0hleChlbGVtLmNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yc1swXSksIGNvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMV0pXSxcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUSEVNRVM7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVJMKGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIHJldHVybiBcImh0dHBzOi8vaWNjbWRwLmRkbnMubmV0Ojg4ODkvdjEvXCJcclxuICAgIC8vIHJldHVybiBcImh0dHA6Ly8yMDEuMjEzLjIzOS43Mzo4ODg5L3YxL1wiXHJcbiAgIC8vIHJldHVybiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92MS9cIlxyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2VEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZURpYWxvZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuLyogaWNvbjogXCJtZXNzYWdlXCIgOiBcIndhcm5pbmdcIiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldEljb24oXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWZhdWx0T3BlbiA9ICgpID0+IHtcclxuICAgIHJlc2V0KCk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YXJuaW5nT3BlbiA9IChtZXNzYWdlLCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcclxuICAgIHNldFRpdGxlKHRpdGxlID8/IFwiXCIpO1xyXG4gICAgc2V0SWNvbihcIndhcm5pbmdcIik7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVzc2FnZU9wZW4gPSAobWVzc2FnZSwgdGl0bGUpID0+IHtcclxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBzZXRUaXRsZSh0aXRsZSA/PyBcIlwiKTtcclxuICAgIHNldEljb24oXCJtZXNzYWdlXCIpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3Blbjogb3BlbkNhbGxiYWNrLCBjbG9zZSwgc2V0TWVzc2FnZSwgc2V0VGl0bGUsIHNldEljb24sIHJlc2V0LCBkZWZhdWx0T3BlbiwgbWVzc2FnZU9wZW4sIHdhcm5pbmdPcGVuIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxNZXNzYWdlRGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2UgfHwgXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvciwgaW50ZW50ZSBudWV2YW1lbnRlLlwifVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZSA9PT0gXCJcIiA/ICBcIkh1Ym8gdW4gcHJvYmxlbWFcIiA6IHRpdGxlfVxyXG4gICAgICAgIGljb249e2ljb24gfHwgXCJ3YXJuaW5nXCJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L01lc3NhZ2VEaWFsb2dDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YUluZm9Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbi8qIGljb246IFwibWVzc2FnZVwiIDogXCJ3YXJuaW5nXCIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YUluZm9Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgbWV0YUluZm8gfSkge1xyXG4gICAgY29uc29sZS5sb2cobWV0YUluZm8pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1ldGFJbmZvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtZXRhSW5mbyB9fT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e21ldGFJbmZvLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3JlcXVpcmUoXCJhc3NldHMvaW1nL2Zhdmljb25zL1wiICsgbWV0YUluZm8uZmF2SWNvblJvdXRlKX0gLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9NZXRhSW5mb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgdGhlbWU6IGluaXRpYWxUaGVtZSB9KSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShpbml0aWFsVGhlbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgaW5pdFVzZXIgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGluaXRVc2VyID8/IHt9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKHN0eWxlcykge1xyXG4gICAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIHVzZVN0eWxlcyh0aGVtZSk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgdjEuMS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCB2MS45LjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4qIENvZGVkIGJ5IENyZWF0aXZlIFRpbVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgUGFnZUNoYW5nZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanNcIjtcclxuXHJcbmltcG9ydCBcImFzc2V0cy9jc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5jc3M/dj0xLjEuMFwiO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IFVzZXJDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IG5vb2tpZXMgZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgaGlkZUxvYWQsIHNob3dMb2FkIH0gZnJvbSBcIi4uL3V0aWxzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgZ2V0UGF0aWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyQXV0aFwiO1xyXG5pbXBvcnQgR0xPQkFMX0dFVF9UT0tFTiBmcm9tIFwiLi4vdXRpbHMvdG9rZW5cIjtcclxuaW1wb3J0IE1lc3NhZ2VEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nXCI7XHJcbmltcG9ydCBNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L01lc3NhZ2VEaWFsb2dDb250ZXh0UHJvdmlkZXJcIjtcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgZ2V0TWV0YUluZm8sIGdldFRoZW1lIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9DT05GSUcuanNcIjtcclxuaW1wb3J0IE1ldGFJbmZvQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L01ldGFJbmZvQ29udGV4dFByb3ZpZGVyLmpzXCI7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAodXJsKSA9PiB7XHJcbiAgc2hvd0xvYWQodXJsKTtcclxufSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcclxuICBoaWRlTG9hZCgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4ge1xyXG4gIGhpZGVMb2FkKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGBcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5gKTtcclxuICAgIGRvY3VtZW50Lmluc2VydEJlZm9yZShjb21tZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gIH1cclxuICAvLyBHZXRJbml0aWFsUHJvcHMgY29ycmUgdGFudG8gZW4gc2VydmVyIGFsIHByaW5jaXBpbywgY29tbyBlbiBjbGllbnRlIGFsIGNhbWJpYXIgZGUgcGFnaW5hLiBcclxuICAvLyBMYSBsb2dpY2EgcmVxdWVyaWRhIHNvbG8gZXMgcmVxdWVyaWRhIGFsIGNvcnJlciBkZWwgc2VydmVyIGFsIHByaW5jaXBpbywgcG9yIHRhbnRvIG5vIHZhbGlkbyBxdWUgY29ycmEgZGVzZGUgZWwgY2xpZW50ZS5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcblxyXG4gICAgbGV0IHsgY29uc3VsdG9yaW9JZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGNvb2tpZXMgPSBub29raWVzLmdldChjdHgpXHJcblxyXG4gICAgLy8gU2V0ZWFyIG8gcGVkaXIgaWQgZGUgY29uc3VsdG9yaW9cclxuICAgIGlmIChjb25zdWx0b3Jpb0lkKSB7XHJcbiAgICAgIC8vIFNldFxyXG4gICAgICBub29raWVzLnNldChjdHgsICdjb25zdWx0b3Jpb0lkJywgY29uc3VsdG9yaW9JZCwge1xyXG4gICAgICAgIG1heEFnZTogNTAgKiAzNjUgKiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN1bHRvcmlvSWQgPSBjb29raWVzLmNvbnN1bHRvcmlvSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVkaXJpZ2lyIGRlIGFkbWluIHNpIGVsIHVzdWFyaW8gbm8gZXN0YSBsb2d1ZWFkb1xyXG4gICAgaWYgKGNvb2tpZXMuaWQgPT09IHVuZGVmaW5lZCAmJiByb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwiYWRtaW5cIikgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgTG9jYXRpb246ICcvbG9naW4vJyArIGNvbnN1bHRvcmlvSWQsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICB9KTtcclxuICAgICAgY3R4LnJlcy5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXRlYXIgc2kgZXhpc3RlLCBlbCB1c3VhcmlvIHF1ZSB5YSBlc3RhIGxvZ3VlYWRvXHJcbiAgICBsZXQgaW5pdFVzZXI7XHJcbiAgICBpZiAoY29va2llcy5pZCAhPT0gdW5kZWZpbmVkICYmIE51bWJlcihjb29raWVzLmxvZ2luVHJpZXMgPz8gMCkgPD0gMiAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiAhcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcInNlcnZlci1lcnJvclwiKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIHRva2VuIH0gPSB7IGlkOiBjb29raWVzLmlkLCB0b2tlbjogYXdhaXQgR0xPQkFMX0dFVF9UT0tFTihjdHgpIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgaWQsIGNvbnN1bHRvcmlvSWQsIHRva2VuIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGF0aWVudFJlc3BvbnNlID0gYXdhaXQgZ2V0UGF0aWVudChpZCwgY29uc3VsdG9yaW9JZCwgdG9rZW4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh7IHBhdGllbnRSZXNwb25zZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXRpZW50UmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0VXNlciA9IHBhdGllbnRSZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICBpZiAoIXJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJhZG1pblwiKSAmJiAhcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcInRlc3RpbmdcIikpIHtcclxuICAgICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICAgICAgICBMb2NhdGlvbjogJy9hZG1pbi8nICsgY29uc3VsdG9yaW9JZCArIFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgICAvLyBjdHgucmVzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbm9va2llcy5zZXQoY3R4LCAnbG9naW5UcmllcycsIChOdW1iZXIoY29va2llcy5sb2dpblRyaWVzID8/IDApKSArIDEsIHtcclxuICAgICAgICAgIG1heEFnZTogNjAsXHJcbiAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoTnVtYmVyKGNvb2tpZXMubG9naW5UcmllcykgPT09IDIpIHtcclxuICAgICAgICAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwiaWRcIiwge1xyXG4gICAgICAgICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBub29raWVzLmRlc3Ryb3koY3R4LCBcImRuaVwiLCB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwibG9naW5Ucmllc1wiLCB7XHJcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgICAgICAgTG9jYXRpb246ICcvbG9naW4vJyArIGNvbnN1bHRvcmlvSWQgKyBcIi9zZXJ2ZXItZXJyb3JcIixcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIC8vIGN0eC5yZXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWV0YUluZm9Db250ZXh0UHJvdmlkZXIgbWV0YUluZm89e2dldE1ldGFJbmZvKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXIgdGhlbWU9e2dldFRoZW1lKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICAgIDxVc2VyQ29udGV4dFByb3ZpZGVyIGluaXRVc2VyPXt7IC4uLmluaXRVc2VyLCBjb25zdWx0b3Jpb0lkIH19PlxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1ZT1VSX0tFWV9IRVJFXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDwvTWV0YUluZm9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI7XHJcbmltcG9ydCBMaWJyYXJ5Qm9va3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIjtcclxuaW1wb3J0IExvY2F0aW9uT24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgVW5hcmNoaXZlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCI7XHJcbmltcG9ydCBLZXkgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZwbktleSc7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVG9kYXknO1xyXG5pbXBvcnQgUmVjZXRhcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdCc7XHJcblxyXG5cclxuY29uc3QgZGFzaGJvYXJkUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgbmFtZTogXCJJbmljaW9cIixcclxuICAgIHJ0bE5hbWU6IFwi2YTZiNit2Kkg2KfZhNmC2YrYp9iv2KlcIixcclxuICAgIGljb246IERhc2hib2FyZCxcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9wcm9maWxlXCIsXHJcbiAgICBuYW1lOiBcIk1pIFBlcmZpbFwiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IFBlcnNvbixcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9zb2xpY2l0YXJUdXJub1wiLFxyXG4gICAgbmFtZTogXCJTb2xpY2l0YXIgVHVybm9cIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBDYWxlbmRhcixcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9nZXN0aW9uVHVybm9zXCIsXHJcbiAgICBuYW1lOiBcIkdlc3Rpw7NuIGRlIFR1cm5vc1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IENhbGVuZGFyLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3NvbGljaXRhclJlY2V0YVwiLFxyXG4gIC8vICAgbmFtZTogXCJTb2xpY2l0YXIgUmVjZXRhXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gIC8vICAgaWNvbjogUmVjZXRhcyxcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9nZXN0aW9uUmVjZXRhc1wiLFxyXG4gIC8vICAgbmFtZTogXCJHZXN0acOzbiBkZSBSZWNldGFzXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gIC8vICAgaWNvbjogUmVjZXRhcyxcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi90YWJsZS1saXN0XCIsXHJcbiAgLy8gICBuYW1lOiBcIlRhYmxlIExpc3RcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2YLYp9im2YXYqSDYp9mE2KzYr9mI2YRcIixcclxuICAvLyAgIGljb246IFwiY29udGVudF9wYXN0ZVwiLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3R5cG9ncmFwaHlcIixcclxuICAvLyAgIG5hbWU6IFwiVHlwb2dyYXBoeVwiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLYt9io2KfYudipXCIsXHJcbiAgLy8gICBpY29uOiBMaWJyYXJ5Qm9va3MsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvaWNvbnNcIixcclxuICAvLyAgIG5hbWU6IFwiSWNvbnNcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2KfZhNix2YXZiNiyXCIsXHJcbiAgLy8gICBpY29uOiBCdWJibGVDaGFydCxcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9tYXBzXCIsXHJcbiAgLy8gICBuYW1lOiBcIk1hcHNcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2K7Ysdin2KbYt1wiLFxyXG4gIC8vICAgaWNvbjogTG9jYXRpb25PbixcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9ub3RpZmljYXRpb25zXCIsXHJcbiAgLy8gICBuYW1lOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2KXYrti32KfYsdin2KpcIixcclxuICAvLyAgIGljb246IE5vdGlmaWNhdGlvbnMsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvcHJvZmVzaW9uYWxlc1wiLFxyXG4gIC8vICAgbmFtZTogXCJQcm9mZXNpb25hbGVzXCIsXHJcbiAgLy8gICBpY29uVHlwZTogXCJzdmdcIixcclxuICAvLyAgIGljb246IDxzdmcgY2xhc3NOYW1lPVwibGlua0N1c3RvbVNWR1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+IDxnPiA8cGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwSDI0VjI0SDB6XCIvPiA8cGF0aCBkPVwiTTggM3YySDZ2NGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00VjVoLTJWM2gzYy41NTIgMCAxIC40NDggMSAxdjVjMCAyLjk3My0yLjE2MiA1LjQ0LTUgNS45MTdWMTYuNWMwIDEuOTMzIDEuNTY3IDMuNSAzLjUgMy41IDEuNDk3IDAgMi43NzUtLjk0IDMuMjc1LTIuMjYzQzE2LjcyOCAxNy4yNyAxNiAxNi4yMiAxNiAxNWMwLTEuNjU3IDEuMzQzLTMgMy0zczMgMS4zNDMgMyAzYzAgMS4zNzEtLjkyIDIuNTI3LTIuMTc2IDIuODg1QzE5LjIxIDIwLjI1MiAxNy4wNTkgMjIgMTQuNSAyMiAxMS40NjIgMjIgOSAxOS41MzggOSAxNi41di0xLjU4M0M2LjE2MiAxNC40NDEgNCAxMS45NzMgNCA5VjRjMC0uNTUyLjQ0OC0xIDEtMWgzelwiLz4gPC9nPiA8L3N2Zz4sXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbG9nb3V0XCIsXHJcbiAgICBuYW1lOiBcIkNlcnJhciBTZXNpw7NuXCIsXHJcbiAgICBydGxOYW1lOiBcItin2YTYqti32YjYsSDZhNmE2KfYrdiq2LHYp9mB2YrYqVwiLFxyXG4gICAgaWNvbjogS2V5LFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkUm91dGVzO1xyXG4iLCJpbXBvcnQgZ2V0VVJMIGZyb20gXCIuLi9jb25zdGFudHMvVVJMXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4oY29uc3VsdG9yaW9JZCkge1xyXG4gICAgY29uc3QgcjEgPSBhd2FpdCBmZXRjaChnZXRVUkwoY29uc3VsdG9yaW9JZCkgKyAnQXV0aC9Mb2dpbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFwidXNlck5hbWVcIjogXCJmcm9udEVuZFRlYW1cIixcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIjI5NjEzNzcwMTIuMTQwMjY2OTg1NFwiXHJcblxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IHIxLmpzb24oKTsgLy9TaSBubyBoYXkgdG9rZW4gaGFjZSB0aHJvdyBkaXJlY3RhbWVudGVcclxuXHJcbiAgICByZXR1cm4gdG9rZW47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShjb25zdWx0b3Jpb0lkLCB0b2tlbiwgcmVsYXRpdmVSb3V0ZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoY29uc3VsdG9yaW9JZCkgKyByZWxhdGl2ZVJvdXRlLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke3Rva2VufWAsIC8vIG5vdGljZSB0aGUgQmVhcmVyIGJlZm9yZSB5b3VyIHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5cclxuLy8gRWwgYm9keSBzZSBjb252aWVydGUgYSBKU09OIHBvciBkZWZlY3RvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlLCBib2R5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke3Rva2VufWAsIC8vIG5vdGljZSB0aGUgQmVhcmVyIGJlZm9yZSB5b3VyIHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUsIGJvZHkpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59IiwiaW1wb3J0IFVSTCBmcm9tIFwiLi4vY29uc3RhbnRzL1VSTFwiO1xyXG5pbXBvcnQgeyBQT1NUIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tIFwiLi9GRVRDSC5KU1wiO1xyXG5pbXBvcnQgeyBHRVQgfSBmcm9tIFwiLi9GRVRDSC5KU1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ0luKHRpcG9kb2MsIHVzZXJuYW1lLCBwYXNzd29yZCwgY29uc3VsdG9yaW9JZCkge1xyXG4gICAgbGV0IGxvZ2luUmVzcG9uc2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7IC8vU2kgbm8gaGF5IHRva2VuIHNlIHZhIGFsIGNhdGNoIGRpcmVjdGFtZW50ZVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFBPU1QoY29uc3VsdG9yaW9JZCwgdG9rZW4sIFwicGF0aWVudHMvbG9naW5cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGlwb2RvYzogTnVtYmVyKHRpcG9kb2MpLFxyXG4gICAgICAgICAgICAgICAgZG5pOiBOdW1iZXIodXNlcm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSAvL1NpIGZhbGxhIGVsIGxvZ2luIHNlIHZhIGFsIGNhdGNoIGRpcmVjdGFtZW50ZVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk9jdXJyacOzIHVuIGVycm9yIGVuIGVsIHNlcnZpZG9yLiBJbnRlbnRlIG51ZXZhbWVudGUuXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgLy9TaSBmYWxsYSBhbCBwZWRpciBsb3MgZGF0b3MgZGVsIHBhY2llbnRlIHZhIGFsIGNhdGNoXHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlZ2lzdHJhZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiU3VzIGRhdG9zIGVzdMOhbiBjYXJnYWRvcyBwZXJvIG5vIHNlIGVuY3VlbnRyYSByZWdpc3RyYWRvLiBJbmdyZXNlIGEgXFxcInJlZ2lzdHJhcnNlXFxcIi5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5vbWJyZSBkZSB1c3VhcmlvIG8gY29udHJhc2XDsWEgaW5jb3JyZWN0b3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2dpblJlc3BvbnNlID0geyBsb2dnZWRJbjogdHJ1ZSwgZGF0YSwgdG9rZW4gfTtcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgbG9naW5SZXNwb25zZSA9IHsgbG9nZ2VkSW46IGZhbHNlLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5kaXIoe2xvZ2luUmVzcG9uc2V9KTtcclxuXHJcbiAgICByZXR1cm4gbG9naW5SZXNwb25zZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXRpZW50KGlkLCBjb25zdWx0b3Jpb0lkLCB0b2tlbikge1xyXG4gICAgbGV0IHBhdGllbnRSZXNwb25zZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHIzID0gYXdhaXQgR0VUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCBcInBhdGllbnRzL1wiICsgaWQpO1xyXG5cclxuICAgICAgICBpZiAocjMuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByMy5qc29uKCkgLy9TaSBmYWxsYSBhbCBwZWRpciBsb3MgZGF0b3MgZGVsIHBhY2llbnRlIHZhIGFsIGNhdGNoXHJcblxyXG4gICAgICAgIHBhdGllbnRSZXNwb25zZSA9IHsgc3VjY2VzczogdHJ1ZSwgZGF0YSB9OyBcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBwYXRpZW50UmVzcG9uc2UgPSB7IHN1Y2Nlc3M6IGZhbHNlIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aWVudFJlc3BvbnNlO1xyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFBhZ2VDaGFuZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUNoYW5nZS9QYWdlQ2hhbmdlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWQodXJsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8UGFnZUNoYW5nZSBwYXRoPXt1cmx9IC8+LFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUxvYWQoKSB7XHJcbiAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktcGFnZS10cmFuc2l0aW9uXCIpO1xyXG59IiwiaW1wb3J0IG5vb2tpZXMsIHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9GRVRDSC5KUyc7XHJcblxyXG4vLyBTaSBlbCB0b2tlbiBlc3RhIHNldGVhZG8sIGxvIGRldnVlbHZlIGRlcGVuZGllbmRvIGVsIGNvbnRleHRvIChFbiBzZXNzaW9uIGRlc2RlIGVsIGNsaWVudGUsIGVuIGNvb2tpZXMgZGVzZGUgZWwgc2Vydmlkb3IuKVxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHTE9CQUxfR0VUX1RPS0VOKGN0eCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAvLyBDbGllbnQtc2lkZS1vbmx5IGNvZGVcclxuICAgICAgICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb29raWVzLnRva2VuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gU2VydmVyLXNpZGUtb25seSBjb2RlXHJcbiAgICAgICAgLy8gdGhyb3cgRXJyb3IoKTtcclxuICAgICAgICBjb25zdCBjb29raWVzID0gbm9va2llcy5nZXQoY3R4KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbihjb29raWVzLmNvbnN1bHRvcmlvSWQpO1xyXG4gICAgICAgICAgICBub29raWVzLnNldChjdHgsICd0b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDI0ICogNjAgKiA2MCxcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CdWJibGVDaGFydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUJvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaXN0QWx0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFByb2JsZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RvZGF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9VbmFyY2hpdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZwbktleVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaHJvbWEtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==