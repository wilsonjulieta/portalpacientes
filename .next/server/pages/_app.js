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

/***/ "./assets/img/icclogo.png":
/*!********************************!*\
  !*** ./assets/img/icclogo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icclogo-8af8f0b1612174a85c39693e8f145b2f.png";

/***/ }),

/***/ "./assets/img/lroldanlogo.png":
/*!************************************!*\
  !*** ./assets/img/lroldanlogo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/lroldanlogo-540f278bd4718c85c3618a071d21ef24.png";

/***/ }),

/***/ "./assets/img/setalogo.png":
/*!*********************************!*\
  !*** ./assets/img/setalogo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/setalogo-15bbd335ba6b9f34289b7f410cf58bbc.png";

/***/ }),

/***/ "./assets/img/urologo.png":
/*!********************************!*\
  !*** ./assets/img/urologo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/urologo-baad4d2abdd2bf8ea9e06b7dab91f7cc.png";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\Card\\Card.js";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\Card\\CardBody.js";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\Card\\CardHeader.js";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\CustomButtons\\Button.js";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\Dialogs\\MessageDialog.js";







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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\components\\PageChange\\PageChange.js";

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
/* harmony import */ var assets_img_icclogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/img/icclogo.png */ "./assets/img/icclogo.png");
/* harmony import */ var assets_img_icclogo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_img_icclogo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_img_lroldanlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/lroldanlogo.png */ "./assets/img/lroldanlogo.png");
/* harmony import */ var assets_img_lroldanlogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_img_lroldanlogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_img_setalogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/img/setalogo.png */ "./assets/img/setalogo.png");
/* harmony import */ var assets_img_setalogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_img_setalogo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_img_urologo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/img/urologo.png */ "./assets/img/urologo.png");
/* harmony import */ var assets_img_urologo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_img_urologo_png__WEBPACK_IMPORTED_MODULE_4__);
// Los nombres de los atributos e.j. icc, uro, lroldan, deben ir en minuscula para el correcto funcionamiento de la configuracion.





const logos = {
  "icc": assets_img_icclogo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  "uro": undefined,
  "comdp": undefined,
  "lroldan": assets_img_lroldanlogo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  "test": undefined,
  "seta": assets_img_setalogo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  "cic": undefined,
  "fade": undefined
};
const solicitarTurnoMessages = {
  "icc": "Los turnos que se obtienen son sólo para consulta y electrocardiograma, para otros estudios comunicarse telefónicamente.",
  "uro": "Los turnos que se obtienen son sólo para consulta, para otros estudios comunicarse telefónicamente.",
  "comdp": "",
  "lroldan": "",
  "test": "Mensaje de solicitar turno para test",
  "seta": "",
  "cic": "",
  "fade": ""
};
const consultoriosNameToId = {
  "icc": 1,
  "uro": 5,
  "comdp": 0,
  "lroldan": 2,
  "test": 0,
  "seta": 3,
  "cic": "4",
  "fade": "6"
};
const consultoriosFullName = {
  "icc": "Instituto Clínico Cardiológico",
  "uro": "Unidad Urológica Mar del Plata",
  "comdp": "Centro Oftalmológico Mar del Plata",
  "lroldan": "Consultorio Psiquiatría",
  "test": "Instituto test",
  "seta": "Instituto SETA",
  "cic": "Centro Integral de Salud",
  "fade": "Centro Psicológico Psiquiátrico"
};
const pageTitles = {
  "icc": "Portal Pacientes ICC",
  "uro": "Portal Pacientes",
  "comdp": "Portal Pacientes",
  "lroldan": "Portal Pacientes",
  "test": "Portal De Testing",
  "seta": "Portal Pacientes",
  "cic": "Portal Pacientes",
  "fade": "Portal Pacientes"
};
const favIconRoutes = {
  "icc": "ICC.ico",
  "uro": "test.png",
  "comdp": "test.png",
  "lroldan": "test.png",
  "test": "test.png",
  "seta": "test.png",
  "cic": "test.png",
  "fade": "test.png"
};
/**
 * Para agregar links a pagina principal, si la hay, ejemplo: https://www.iccardiologico.com
 */

const mainPageLinks = {
  "icc": "https://www.iccardiologico.com",
  "uro": "https://unidadurologicamardelplata.com/",
  "comdp": "",
  "lroldan": "",
  "test": "",
  "seta": "https://institutoseta.com.ar/",
  "cic": "",
  "fade": ""
}; //TODO: AGREGAR TYC

const terms = {
  "icc": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,
  "lroldan": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,
  "seta": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,
  "cic": `Términos y Condiciones de Uso
    1. Introducción
    Bienvenido a THISYS Portal Salud, diseñado para brindar mejor calidad de atención a los pacientes, en el cual los usuarios registrados podrán acceder a turnos programados, recetas de medicamentos e información de su salud. Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones. Si no está de acuerdo con estos términos, le solicitamos que no utilice el sitio.
    2. Aceptación de los Términos
    Al navegar y utilizar este sitio web, usted acepta cumplir con los términos y condiciones descritos aquí. Nos reservamos el derecho de modificar estos términos en cualquier momento y dichos cambios serán notificados oportunamente.
    3. Recopilación de Datos a Través del Sitio
    Este sitio web recopila información personal a través del ingreso de datos personales y  registro de usuarios. Los datos recopilados incluyen documento, apellido y nombre del paciente, fecha de nacimiento, sexo, datos de contacto y cobertura médica y serán utilizados para proporcionar servicios personalizados.
    4. Uso de Cookies
    Este sitio web utiliza cookies para mejorar su experiencia de usuario y personalizar el contenido que recibe. Las cookies son pequeños archivos que se almacenan en su dispositivo al navegar por sitios web. Para obtener más información, consulte nuestra Política de Cookies.
    5. Seguridad
    Implementamos medidas de seguridad adecuadas para proteger los datos personales que nos proporciona a través del sitio, utilizando conexiones seguras (HTTPS), cifrado de datos y autenticación en áreas protegidas del sitio.
    6. Derechos del Usuario
    Conforme a la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales proporcionados a través de este sitio web. Para ejercer estos derechos, por favor contáctenos en info@thisys.net.ar.
    7. Política de Enlaces Externos
    Este sitio web puede contener enlaces a sitios web operados por terceros. No nos hacemos responsables del contenido ni de las políticas de privacidad de dichos sitios. Al acceder a ellos, lo hace bajo su propia responsabilidad.
    8. Jurisdicción y Ley Aplicable
    Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con su uso del sitio web será sometida a los tribunales competentes en la Ciudad Autónoma de Buenos Aires.
    9. Contacto
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`,
  "test": new Array(5).fill("\ntest tyc").join("")
};
function getTheme(consultorioId) {
  var _consultoriosNameToId;

  return _THEMES__WEBPACK_IMPORTED_MODULE_0__["default"][(_consultoriosNameToId = consultoriosNameToId[consultorioId]) !== null && _consultoriosNameToId !== void 0 ? _consultoriosNameToId : 0];
}
function getMetaInfo(consultorioId) {
  var _consultorioId, _favIconRoutes$consul;

  consultorioId = (_consultorioId = consultorioId) === null || _consultorioId === void 0 ? void 0 : _consultorioId.toLowerCase();
  return {
    consultorioFullName: consultoriosFullName[consultorioId],
    pageTitle: pageTitles[consultorioId],
    favIconRoute: (_favIconRoutes$consul = favIconRoutes[consultorioId]) !== null && _favIconRoutes$consul !== void 0 ? _favIconRoutes$consul : "test.png",
    terms: terms[consultorioId],
    mainPageLink: mainPageLinks[consultorioId],
    logo: logos[consultorioId],
    solicitarTurnoMessage: solicitarTurnoMessages[consultorioId]
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
  colorPrimary: "#073763",
  colorSecondary: "#f44336",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#073763", "#839bb1"],
  cardHeaderSecondaryGradientColors: ["#a30000", "#db4c4c"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#539DD9",
  colorSecondary: "#19B882",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#539DD9", "#2952C0"],
  cardHeaderSecondaryGradientColors: ["#19B882", "#66B882"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#3c689e",
  colorSecondary: "#6e9322",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#3c689e", "#cdd7e1"],
  cardHeaderSecondaryGradientColors: ["#6e9322", "#c0ce94"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#121492ff",
  colorSecondary: "#26967eff",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#121492ff", "#cdd7e1"],
  cardHeaderSecondaryGradientColors: ["#26967eff", "#c0ce94"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#0B2E5B",
  colorSecondary: "#19B882",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#0B2E5B", "#114A7A"],
  cardHeaderSecondaryGradientColors: ["#19B882", "#2FD39A"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "turquoise",
  colorSecondary: "orangeRed",
  cardHeaderPrimaryGradientColors: ["turquoise", "cyan"]
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
  console.log(consultorioId);

  switch (consultorioId === null || consultorioId === void 0 ? void 0 : consultorioId.toLowerCase()) {
    case 'uro':
      return "https://cuumdp.ddns.net:9005/v1/";

    case 'icc':
      return "https://iccmdp.ddns.net:8889/v1/";

    case 'test':
      return "http://localhost:5000/v1/";

    case 'lroldan':
      return "https://saluddigital.ddns.net:9001/v1/";

    case 'seta':
      return "https://institutoseta.ddns.net:9003/v1/";

    case 'cic':
      return "https://cicbalcarce.dyndns.org:17001/v1/";

    case 'fade':
      return "https://fademdp.ddns.net:8081/v1/";

    default:
      console.warn(`ConsultorioID desconocido: ${consultorioId}`);
      return "https://default-url.com/v1/";
    // Cambia esto por la URL por defecto que necesites
  }
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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\context\\MessageDialogContextProvider.js";


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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\context\\MetaInfoContextProvider.js";


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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\context\\ThemeContextProvider.js";

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\context\\UserContextProvider.js";

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
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
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
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/debug.js */ "./utils/debug.js");


var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\pages\\_app.js";

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
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_10___default.a.get(ctx);
    console.log({
      cookies,
      consultorioId,
      router,
      query: router.query
    }); // Setear o pedir id de consultorio

    if (cookies.consultorioId && consultorioId && consultorioId != cookies.consultorioId) {
      Object.keys(cookies).forEach(cookieName => {
        nookies__WEBPACK_IMPORTED_MODULE_10___default.a.destroy(ctx, cookieName, {
          path: '/'
        });
      });
    }

    if (consultorioId) {
      // Set
      nookies__WEBPACK_IMPORTED_MODULE_10___default.a.set(ctx, 'consultorioId', consultorioId, {
        maxAge: 50 * 365 * 24 * 60 * 60,
        path: '/'
      });
    } else {
      consultorioId = cookies.consultorioId;
    }

    console.log({
      cookiesUpdated: nookies__WEBPACK_IMPORTED_MODULE_10___default.a.get(ctx)
    }); // Redirigir de admin si el usuario no esta logueado
    // if (cookies.id === undefined && router.asPath.includes("admin") && typeof window === 'undefined') {
    //   ctx.res.writeHead(302, {
    //     Location: '/login/' + consultorioId,
    //     'Content-Type': 'text/html; charset=utf-8',
    //   });
    //   return ctx.res.end();
    // }
    // Setear si existe, el usuario que ya esta logueado

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
          return ctx.res.end(); // ctx.res.finished = true;
        }
      } catch (error) {
        // nookies.set(ctx, 'loginTries', (Number(cookies.loginTries ?? 0)) + 1, {
        //   maxAge: 60,
        //   path: '/',
        // })
        // if (Number(cookies.loginTries) === 2) {
        //   nookies.destroy(ctx, "id", {
        //     path: "/"
        //   });
        //   nookies.destroy(ctx, "dni", {
        //     path: "/"
        //   });
        //   nookies.destroy(ctx, "loginTries", {
        //     path: "/"
        //   });
        // }
        // errorLog("%cENTRANDO PAPA");
        ctx.res.writeHead(302, {
          Location: '/login/' + consultorioId + "/server-error",
          'Content-Type': 'text/html; charset=utf-8'
        });
        return ctx.res.end(); // ctx.res.finished = true;
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
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
                src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_15__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
/* harmony import */ var _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LocalHospital */ "@material-ui/icons/LocalHospital");
/* harmony import */ var _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_10__);
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
}, {
  path: "/estudios",
  name: "Estudios Realizados",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_10___default.a,
  requierePortal: true,
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
    console.log("Consultorio ID: " + consultorioId);
    const token = await Object(_FETCH_JS__WEBPACK_IMPORTED_MODULE_1__["getToken"])(consultorioId); //Si no hay token se va al catch directamente

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

/***/ "./utils/debug.js":
/*!************************!*\
  !*** ./utils/debug.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return errorLog; });
function errorLog(error) {
  return console.log(`\x1b[31m${error}\x1b[0m`);
}

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

var _jsxFileName = "C:\\DATOS\\THISYS\\SISTEMA\\PORTALWEB\\PortalPacientes\\utils\\loading.js";


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

/***/ "@material-ui/icons/LocalHospital":
/*!***************************************************!*\
  !*** external "@material-ui/icons/LocalHospital" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalHospital");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMvSUNDLmljbyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2Zhdmljb25zL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvaWNjbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9scm9sZGFubG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9zZXRhbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy91cm9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZFN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZUNoYW5nZS9QYWdlQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9DT05GSUcuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RIRU1FUy5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVVJMLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L01ldGFJbmZvQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Vc2VyQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0ZFVENILkpTIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXJBdXRoLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0J1YmJsZUNoYXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEhvc3BpdGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9VbmFyY2hpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVnBuS2V5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21hLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleFRvUmdiIiwiaW5wdXQiLCJyZXBsYWNlIiwiaGV4UmVnZXgiLCJ0ZXN0IiwibGVuZ3RoIiwiRXJyb3IiLCJmaXJzdCIsInNlY29uZCIsImxhc3QiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwiYmxhY2tDb2xvciIsIndoaXRlQ29sb3IiLCJib3hTaGFkb3ciLCJwcmltYXJ5Qm94U2hhZG93IiwiaW5mb0JveFNoYWRvdyIsInN1Y2Nlc3NCb3hTaGFkb3ciLCJ3YXJuaW5nQm94U2hhZG93IiwiZGFuZ2VyQm94U2hhZG93Iiwicm9zZUJveFNoYWRvdyIsImRhcmtCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsImJhY2tncm91bmQiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJkYXJrQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2FyZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiY29sb3IiLCJkZWZhdWx0Qm94U2hhZG93IiwiYm9yZGVyIiwidGl0bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNhcmRUaXRsZSIsImNhcmRTdWJ0aXRsZSIsImNhcmRMaW5rIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJ3aGl0ZSIsInJvc2UiLCJwcmltYXJ5IiwicHJvcHMiLCJjb2xvclByaW1hcnkiLCJwcmltYXJ5T3V0bGluZWQiLCJjb2xvck5ldXRyYWwiLCJzZWNvbmRhcnkiLCJjb2xvclNlY29uZGFyeSIsInNlY29uZGFyeU91dGxpbmVkIiwicHJpbWFyeVNpbXBsZSIsImZpbHRlciIsInNlY29uZGFyeVNpbXBsZSIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsInNpbXBsZSIsInRyYW5zcGFyZW50IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImxnIiwic20iLCJyb3VuZCIsImJsb2NrIiwibGluayIsImp1c3RJY29uIiwiY2FyZEJvZHlTdHlsZSIsImNhcmRCb2R5IiwicGFkZGluZ0JvdHRvbSIsImZsZXgiLCJXZWJraXRCb3hGbGV4IiwiY2FyZEJvZHlQbGFpbiIsImNhcmRCb2R5UHJvZmlsZSIsImNhcmRIZWFkZXJTdHlsZSIsInRoZW1lIiwiYm9yZGVyQm90dG9tIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJjYXJkSGVhZGVyUGxhaW4iLCJjYXJkSGVhZGVyU3RhdHMiLCJjYXJkSGVhZGVySWNvbiIsImNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnMiLCJzZWNvbmRhcnlDYXJkSGVhZGVyIiwiY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzIiwiZXJyb3JDYXJkSGVhZGVyIiwiY29sb3JFcnJvciIsImNvbG9yRXJyb3IyIiwiY2FyZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndvcmRXcmFwIiwiY2FyZFBsYWluIiwiY2FyZFByb2ZpbGUiLCJjYXJkQ2hhcnQiLCJDYXJkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBsYWluIiwicHJvZmlsZSIsImNoYXJ0IiwicmVzdCIsImNhcmRDbGFzc2VzIiwiY2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJDYXJkSGVhZGVyIiwidXNlVGhlbWUiLCJzdGF0cyIsImljb24iLCJjYXJkSGVhZGVyQ2xhc3NlcyIsIm9uZU9mIiwiUmVndWxhckJ1dHRvbiIsInNpemUiLCJtdWlDbGFzc2VzIiwiYnRuQ2xhc3NlcyIsInJvb3QiLCJvYmplY3QiLCJNZXNzYWdlRGlhbG9nIiwib3BlbiIsInNldE9wZW4iLCJtZXNzYWdlIiwiaGFuZGxlS2V5cyIsImV2ZW50Iiwia2V5IiwicHJvZ3Jlc3MiLCJ3cmFwcGVyRGl2IiwibWF4V2lkdGgiLCJpY29uV3JhcHBlciIsImdldE5vbWJyZSIsInBhdGgiLCJyb3V0ZXMiLCJkYXNoYm9hcmRSb3V0ZXMiLCJyb3V0ZSIsImluY2x1ZGVzIiwibmFtZSIsIlBhZ2VDaGFuZ2UiLCJsb2dvcyIsImljY2xvZ28iLCJscm9sZGFubG9nbyIsInNldGFsb2dvIiwic29saWNpdGFyVHVybm9NZXNzYWdlcyIsImNvbnN1bHRvcmlvc05hbWVUb0lkIiwiY29uc3VsdG9yaW9zRnVsbE5hbWUiLCJwYWdlVGl0bGVzIiwiZmF2SWNvblJvdXRlcyIsIm1haW5QYWdlTGlua3MiLCJ0ZXJtcyIsIkFycmF5IiwiZmlsbCIsImpvaW4iLCJnZXRUaGVtZSIsImNvbnN1bHRvcmlvSWQiLCJUSEVNRVMiLCJnZXRNZXRhSW5mbyIsInRvTG93ZXJDYXNlIiwiY29uc3VsdG9yaW9GdWxsTmFtZSIsInBhZ2VUaXRsZSIsImZhdkljb25Sb3V0ZSIsIm1haW5QYWdlTGluayIsImxvZ28iLCJzb2xpY2l0YXJUdXJub01lc3NhZ2UiLCJERUZBVUxUIiwiY29sb3JTdWNjZXNzIiwidHVyblN0YXR1c0NvbG9ycyIsIkNPTVBMRVRFRCIsIkNBTkNFTExFRCIsIkFCU0VOVCIsImNocm9tYSIsInJlcXVpcmUiLCJjb2xvclRvSGV4IiwiY29sb3JPYmoiLCJoZXgiLCJmb3JFYWNoIiwiZWxlbSIsImluZGV4IiwiZ2V0VVJMIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJNZXNzYWdlRGlhbG9nQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyIiwidXNlU3RhdGUiLCJzZXRNZXNzYWdlIiwic2V0VGl0bGUiLCJzZXRJY29uIiwicmVzZXQiLCJkZWZhdWx0T3BlbiIsIm9wZW5DYWxsYmFjayIsImNsb3NlIiwid2FybmluZ09wZW4iLCJtZXNzYWdlT3BlbiIsIk1ldGFJbmZvQ29udGV4dCIsIk1ldGFJbmZvQ29udGV4dFByb3ZpZGVyIiwibWV0YUluZm8iLCJUaGVtZUNvbnRleHQiLCJUaGVtZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxUaGVtZSIsInNldFRoZW1lIiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiaW5pdFVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVzZUNvbnRleHQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInNob3dMb2FkIiwiaGlkZUxvYWQiLCJNeUFwcCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tbWVudCIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsImluc2VydEJlZm9yZSIsImRvY3VtZW50RWxlbWVudCIsImN0eCIsInF1ZXJ5IiwiY29va2llcyIsIm5vb2tpZXMiLCJnZXQiLCJPYmplY3QiLCJrZXlzIiwiY29va2llTmFtZSIsImRlc3Ryb3kiLCJzZXQiLCJtYXhBZ2UiLCJjb29raWVzVXBkYXRlZCIsImlkIiwiTnVtYmVyIiwibG9naW5UcmllcyIsImFzUGF0aCIsInRva2VuIiwiR0xPQkFMX0dFVF9UT0tFTiIsInBhdGllbnRSZXNwb25zZSIsImdldFBhdGllbnQiLCJkYXRhIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJlcnJvciIsIkxheW91dCIsImxheW91dCIsInJ0bE5hbWUiLCJEYXNoYm9hcmQiLCJQZXJzb24iLCJDYWxlbmRhciIsIkxvY2FsSG9zcGl0YWxJY29uIiwicmVxdWllcmVQb3J0YWwiLCJLZXkiLCJsb2dJbiIsInRpcG9kb2MiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9naW5SZXNwb25zZSIsImdldFRva2VuIiwicmVzcG9uc2UiLCJQT1NUIiwiZG5pIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwicmVnaXN0cmFkbyIsImxvZ2dlZEluIiwiZXJyIiwiZGlyIiwicjMiLCJHRVQiLCJlcnJvckxvZyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vSUNDLmljb1wiOiBcIi4vYXNzZXRzL2ltZy9mYXZpY29ucy9JQ0MuaWNvXCIsXG5cdFwiLi90ZXN0LnBuZ1wiOiBcIi4vYXNzZXRzL2ltZy9mYXZpY29ucy90ZXN0LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9pbWcvZmF2aWNvbnMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS92bmQubWljcm9zb2Z0Lmljb247YmFzZTY0LEFBQUJBQUVBRUJBQUFBRUFJQUJvQkFBQUZnQUFBQ2dBQUFBUUFBQUFJQUFBQUFFQUlBQUFBQUFBUUFRQUFCTUxBQUFUQ3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJaSlFBa1dTVUFiMXNsQUlaVkpoRUZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZrbEFFRlpKUUNjV2lVQXVGMGtBSUJKS0VzekppN2xKUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdTVUFUVmtsQUxOWkpRQ0NXeVVBUWdBQUFBQUFBQUFBSkM3d3V5TXU5TW9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV1NVQWRWa2xBTmxaSlFCRkFBQUFBQUFBQUFBQUFBQUFJQy8vZkNRdThINGtMdTdaSkM3dVlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXU1VBb1ZrbEFNOVpKUUFTQUFBQUFBQUFBQUFBQUFBQUlpNzVXU1F1N2JrQUFBQUFKQzd1VFNRdTd2OGtMdTVQQUFBQUFBQUFBQUFBQUFBQVdTVUFkVmtsQVA5WkpRQVlBQUFBQUFBQUFBQUFBQUFBSWk3MkRpUXU3ZVlrTHU0eEFBQUFBQUFBQUFBa0x1NktKQzd1L0NRdTdoOEFBQUFBV1NVQUwxa2xBUDFaSlFDdEFBQUFBQUFBQUFBQUFBQUFBQUFBQUNRdTdtTWtMdTZhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1F1N3Fva0x1N1RKQzd1Q2xrbEFJaFpKUUQvV1NVQXZnQUFBQUFBQUFBQUFBQUFBQUFBQUFBa0x1NnJKQzd1TUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFrTHU0MUpDN3UveVF1N21WWkpRQ1pXU1VBLzFrbEFQMVpKUUJ2QUFBQUFBQUFBQUFBQUFBQUl5N3hzQ1F1N2hBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSkM3dUlTUXU3djhrTHU2bVdTVUFWRmtsQVA5WkpRRC9XU1VBLzFvbEFMdFhKUVp3S1MzWVlDTXU4K2trTHU0VUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNRdTdqTWtMdTcvSkM3dXMxa2xBQVJaSlFDYldTVUEvMWtsQVA5YUpRRC9XU1VFN2k0c3c1QWlMdmIvSkM3dW15UXU3Z1VBQUFBQUFBQUFBQ1F1N2dza0x1NnBKQzd1L3lRdTdxa0FBQUFBQUFBQUFGa2xBSEJaSlFESVdTVUEzMXdsQUxBN0tvbENJUzc3L3lRdTd2OGtMdTdHSkM3dVdTUXU3bVVrTHU3VkpDN3UveVF1N3Y4a0x1NXRBQUFBQUFBQUFBQUFBQUFBQUFBQUFGa2xBQVVBQUFBQUFBQUFBQ0V1K2FNa0x1Ny9KQzd1L3lRdTd2OGtMdTcvSkM3dS95UXU3djhrTHU3SEpDN3VEUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFqTHZRS0pDN3V2aVF1N3Y4a0x1Ny9KQzd1L3lRdTd2OGtMdTdESkM3dURRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFrTHU1VkpDN3VtU1F1N3Awa0x1NWRKQzd1Q0FBQUFBQUFBQUFBLy84QUIvOFBBQUQ4RHdBQThNOEFBT09IQUFESEl3RC9qakVBZWg1NEFBQWVlQTdYRG5nQUFBQjRBQUFBTUFBQXdBQUFBUFlBQVAvK0FRQUEvNE9rS3c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Rlc3QtMGRkNmM4OWU5NDRjZjViMGFlYTMxMmIxNjRlYWMxMzYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ljY2xvZ28tOGFmOGYwYjE2MTIxNzRhODVjMzk2OTNlOGYxNDViMmYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xyb2xkYW5sb2dvLTU0MGYyNzhiZDQ3MThjODVjMzYxOGEwNzFkMjFlZjI0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zZXRhbG9nby0xNWJiZDMzNWJhNmI5ZjM0Mjg5YjdmNDEwY2Y1OGJiYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdXJvbG9nby1iYWFkNGQyYWJkZDJiZjhlYTllMDZiN2RhYjkxZjdjYy5wbmdcIjsiLCIvKiFcclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogKiBOZXh0SlMgTWF0ZXJpYWwgRGFzaGJvYXJkIHYxLjEuMCBiYXNlZCBvbiBNYXRlcmlhbCBEYXNoYm9hcmQgUmVhY3QgdjEuOS4wXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAqIFByb2R1Y3QgUGFnZTogaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4gKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiAqL1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIC8vIC8vIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSBoZXggY29sb3IgdG8gcmdiIGNvbG9yXHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gIzljMjdiMCA9PiBvdXRwdXQgPSAxNTYsIDM5LCAxNzZcclxuLy8gLy8gLy8gRXhhbXBsZTogaW5wdXQgPSA5YzI3YjAgPT4gb3V0cHV0ID0gMTU2LCAzOSwgMTc2XHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gIzk5OSA9PiBvdXRwdXQgPSAxNTMsIDE1MywgMTUzXHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gOTk5ID0+IG91dHB1dCA9IDE1MywgMTUzLCAxNTNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgaGV4VG9SZ2IgPSAoaW5wdXQpID0+IHtcclxuICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gIGxldCBoZXhSZWdleCA9IC9bMC05QS1GYS1mXS9nO1xyXG4gIGlmICghaGV4UmVnZXgudGVzdChpbnB1dCkgfHwgKGlucHV0Lmxlbmd0aCAhPT0gMyAmJiBpbnB1dC5sZW5ndGggIT09IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnB1dCBpcyBub3QgYSB2YWxpZCBoZXggY29sb3IuXCIpO1xyXG4gIH1cclxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAzKSB7XHJcbiAgICBsZXQgZmlyc3QgPSBpbnB1dFswXTtcclxuICAgIGxldCBzZWNvbmQgPSBpbnB1dFsxXTtcclxuICAgIGxldCBsYXN0ID0gaW5wdXRbMl07XHJcbiAgICBpbnB1dCA9IGZpcnN0ICsgZmlyc3QgKyBzZWNvbmQgKyBzZWNvbmQgKyBsYXN0ICsgbGFzdDtcclxuICB9XHJcbiAgaW5wdXQgPSBpbnB1dC50b1VwcGVyQ2FzZSgpO1xyXG4gIGxldCBmaXJzdCA9IGlucHV0WzBdICsgaW5wdXRbMV07XHJcbiAgbGV0IHNlY29uZCA9IGlucHV0WzJdICsgaW5wdXRbM107XHJcbiAgbGV0IGxhc3QgPSBpbnB1dFs0XSArIGlucHV0WzVdO1xyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUludChmaXJzdCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChzZWNvbmQsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQobGFzdCwgMTYpXHJcbiAgKTtcclxufTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyAvLyBWYXJpYWJsZXMgLSBTdHlsZXMgdGhhdCBhcmUgdXNlZCBvbiBtb3JlIHRoYW4gb25lIGNvbXBvbmVudFxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxyXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcclxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcclxuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IFtcIiM5YzI3YjBcIiwgXCIjYWI0N2JjXCIsIFwiIzhlMjRhYVwiLCBcIiNhZjJjYzVcIl07XHJcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFtcIiNmZjk4MDBcIiwgXCIjZmZhNzI2XCIsIFwiI2ZiOGMwMFwiLCBcIiNmZmEyMWFcIl07XHJcbmNvbnN0IGRhbmdlckNvbG9yID0gW1wiI2Y0NDMzNlwiLCBcIiNlZjUzNTBcIiwgXCIjZTUzOTM1XCIsIFwiI2Y1NWE0ZVwiXTtcclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gW1wiIzRjYWY1MFwiLCBcIiM2NmJiNmFcIiwgXCIjNDNhMDQ3XCIsIFwiIzVjYjg2MFwiXTtcclxuY29uc3QgaW5mb0NvbG9yID0gW1wiIzAwYWNjMVwiLCBcIiMyNmM2ZGFcIiwgXCIjMDBhY2MxXCIsIFwiIzAwZDNlZVwiXTtcclxuY29uc3Qgcm9zZUNvbG9yID0gW1wiI2U5MWU2M1wiLCBcIiNlYzQwN2FcIiwgXCIjZDgxYjYwXCIsIFwiI2ViMzU3M1wiXTtcclxuY29uc3QgZ3JheUNvbG9yID0gW1xyXG4gIFwiIzk5OVwiLFxyXG4gIFwiIzc3N1wiLFxyXG4gIFwiIzNDNDg1OFwiLFxyXG4gIFwiI0FBQUFBQVwiLFxyXG4gIFwiI0QyRDJEMlwiLFxyXG4gIFwiI0RERFwiLFxyXG4gIFwiI2I0YjRiNFwiLFxyXG4gIFwiIzU1NTU1NVwiLFxyXG4gIFwiIzMzM1wiLFxyXG4gIFwiI2E5YWZiYlwiLFxyXG4gIFwiI2VlZVwiLFxyXG4gIFwiI2U3ZTdlN1wiLFxyXG4gIFwiIzIxMjEyMVwiLFxyXG4gIFwiIzI2MzIzOFwiLFxyXG5dO1xyXG5jb25zdCBibGFja0NvbG9yID0gXCIjMDAwXCI7XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBcIiNGRkZcIjtcclxuXHJcbmNvbnN0IGJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3QgZGFya0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGdyYXlDb2xvclsxMl0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5cclxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHdhcm5pbmdDb2xvclsxXSArIFwiLCBcIiArIHdhcm5pbmdDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLndhcm5pbmdCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBzdWNjZXNzQ29sb3JbMV0gKyBcIiwgXCIgKyBzdWNjZXNzQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5zdWNjZXNzQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBkYW5nZXJDb2xvclsxXSArIFwiLCBcIiArIGRhbmdlckNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uZGFuZ2VyQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgaW5mb0NvbG9yWzFdICsgXCIsIFwiICsgaW5mb0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uaW5mb0JveFNoYWRvdyxcclxufTtcclxuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByaW1hcnlDb2xvclsxXSArIFwiLCBcIiArIHByaW1hcnlDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnByaW1hcnlCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyByb3NlQ29sb3JbMV0gKyBcIiwgXCIgKyByb3NlQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5yb3NlQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBkYXJrQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZ3JheUNvbG9yWzEzXSArIFwiLCBcIiArIGdyYXlDb2xvclsxMl0gKyBcIilcIixcclxuICAuLi5kYXJrQm94U2hhZG93LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIiArIGdyYXlDb2xvclsxMF0sXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAuLi5kZWZhdWx0Rm9udCxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXIgPSB7XHJcbiAgbWFyZ2luOiBcIi0yMHB4IDE1cHggMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBwYWRkaW5nOiBcIjE1cHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiMjVweCAwXCIsXHJcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcclxuICBib3JkZXI6IFwiMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlID0ge1xyXG4gIGNvbG9yOiBncmF5Q29sb3JbMl0sXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxyXG4gIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICBcIiYgc21hbGxcIjoge1xyXG4gICAgY29sb3I6IGdyYXlDb2xvclsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0ge1xyXG4gIC4uLnRpdGxlLFxyXG4gIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxyXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgXCImIGFcIjoge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcclxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIixcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaW5rID0ge1xyXG4gIFwiJiArICRjYXJkTGlua1wiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoZXhUb1JnYixcclxuICAvL3ZhcmlhYmxlc1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG4gIGJveFNoYWRvdyxcclxuICBjYXJkLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBwcmltYXJ5Qm94U2hhZG93LFxyXG4gIGluZm9Cb3hTaGFkb3csXHJcbiAgc3VjY2Vzc0JveFNoYWRvdyxcclxuICB3YXJuaW5nQm94U2hhZG93LFxyXG4gIGRhbmdlckJveFNoYWRvdyxcclxuICByb3NlQm94U2hhZG93LFxyXG4gIGRhcmtCb3hTaGFkb3csXHJcbiAgd2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcclxuICBpbmZvQ2FyZEhlYWRlcixcclxuICBwcmltYXJ5Q2FyZEhlYWRlcixcclxuICByb3NlQ2FyZEhlYWRlcixcclxuICBkYXJrQ2FyZEhlYWRlcixcclxuICBjYXJkQWN0aW9ucyxcclxuICBjYXJkSGVhZGVyLFxyXG4gIGRlZmF1bHRCb3hTaGFkb3csXHJcbiAgdGl0bGUsXHJcbiAgY2FyZFRpdGxlLFxyXG4gIGNhcmRTdWJ0aXRsZSxcclxuICBjYXJkTGluayxcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBncmF5Q29sb3IsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHJvc2VDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcclxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXHJcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsICYubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiLTFlbVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiLTFlbVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGp1c3RJY29uXCI6IHtcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdoaXRlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvc2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmltYXJ5T3V0bGluZWQ6IHtcclxuICAgIGJvcmRlcjogKHByb3BzKSA9PiBcIjFweCBzb2xpZCBcIiArIHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvck5ldXRyYWwsXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNvbmRhcnlPdXRsaW5lZDoge1xyXG4gICAgYm9yZGVyOiAocHJvcHMpID0+IFwiMXB4IHNvbGlkIFwiICsgcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvck5ldXRyYWwsXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlTaW1wbGU6IHtcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDAuNSlcIlxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeVNpbXBsZToge1xyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC41c1wiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDAuNSlcIlxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2ltcGxlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYkcm9zZVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRwcmltYXJ5XCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGluZm9cIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGRhbmdlclwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaXNhYmxlZDoge1xyXG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGxnOiB7XHJcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCIsXHJcbiAgfSxcclxuICBzbToge1xyXG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIixcclxuICB9LFxyXG4gIHJvdW5kOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGp1c3RJY29uOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcclxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcclxuICAgIHdpZHRoOiBcIjQxcHhcIixcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGxnXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIzMnB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc21cIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIixcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcclxuIiwiY29uc3QgY2FyZEJvZHlTdHlsZSA9IHtcclxuICBjYXJkQm9keToge1xyXG4gICAgcGFkZGluZzogXCIwLjkzNzVyZW0gMjBweFwiLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogXCIwXCIsXHJcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXHJcbiAgICBXZWJraXRCb3hGbGV4OiBcIjFcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBjYXJkQm9keVBsYWluOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCI1cHhcIixcclxuICAgIHBhZGRpbmdSaWdodDogXCI1cHhcIixcclxuICB9LFxyXG4gIGNhcmRCb2R5UHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkQm9keVN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgZGFya0NhcmRIZWFkZXIsXHJcbiAgd2hpdGVDb2xvcixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4uLy4uL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcIjtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXJTdHlsZSA9ICh0aGVtZSkgPT4gKHtcclxuICBjYXJkSGVhZGVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuNzVyZW0gMS4yNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjBcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB6SW5kZXg6IFwiMyAhaW1wb3J0YW50XCIsXHJcbiAgICBcIiYkY2FyZEhlYWRlclBsYWluLCYkY2FyZEhlYWRlckljb24sJiRjYXJkSGVhZGVyU3RhdHMsJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlciwmJGRhcmtDYXJkSGVhZGVyXCI6IHtcclxuICAgICAgbWFyZ2luOiBcIjAgMTVweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICB9LFxyXG4gICAgXCImOmZpcnN0LWNoaWxkXCI6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcImNhbGMoLjI1cmVtIC0gMXB4KSBjYWxjKC4yNXJlbSAtIDFweCkgMCAwXCIsXHJcbiAgICB9LFxyXG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyLCYkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTIwcHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzIHN2Z1wiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgd2lkdGg6IFwiMzZweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMzZweFwiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweCAxMHB4IDRweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMgaSwmJGNhcmRIZWFkZXJTdGF0cyAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB3aWR0aDogXCI1NnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgb3ZlcmZsb3c6IFwidW5zZXRcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMkY2FyZEhlYWRlckljb25cIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSGVhZGVyUGxhaW46IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBjYXJkSGVhZGVyU3RhdHM6IHtcclxuICAgIFwiJiAkY2FyZEhlYWRlckljb25cIjoge1xyXG4gICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaDEsJiBoMiwmIGgzLCYgaDQsJiBoNSwmIGg2XCI6IHtcclxuICAgICAgbWFyZ2luOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRIZWFkZXJJY29uOiB7XHJcbiAgICBcIiYgJHdhcm5pbmdDYXJkSGVhZGVyLCYgJHN1Y2Nlc3NDYXJkSGVhZGVyLCYgJGRhbmdlckNhcmRIZWFkZXIsJiAkaW5mb0NhcmRIZWFkZXIsJiAkcHJpbWFyeUNhcmRIZWFkZXIsJiAkcm9zZUNhcmRIZWFkZXIsJiAkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGksJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICB3aWR0aDogXCIzM3B4XCIsXHJcbiAgICAgIGhlaWdodDogXCIzM3B4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIixcclxuICAgICAgbWFyZ2luOiBcIjVweCA0cHggMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZ0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4ud2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5kYW5nZXJDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm9DYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmluZm9DYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnByaW1hcnlDYXJkSGVhZGVyLFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzBdKSArXHJcbiAgICAgICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMV0pICtcclxuICAgICAgICBcIiwuNClcIixcclxuICAgICAgYmFja2dyb3VuZDogKHByb3BzKSA9PiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzBdICsgXCIsIFwiICsgcHJvcHMuY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1sxXSArIFwiKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeUNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLy8gLi4uc2Vjb25kYXJ5Q2FyZEhlYWRlcixcclxuICAgICAgYmFja2dyb3VuZDogKHByb3BzKSA9PiBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcm9wcy5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMF0gKyBcIiwgXCIgKyBwcm9wcy5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMV0gKyBcIilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5yb3NlQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXJrQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5kYXJrQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBlcnJvckNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JFcnJvcikgK1xyXG4gICAgICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvckVycm9yMikgK1xyXG4gICAgICAgIFwiLC40KVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAocHJvcHMpID0+IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByb3BzLmNvbG9yRXJyb3IgKyBcIiwgXCIgKyBwcm9wcy5jb2xvckVycm9yMiArIFwiKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRIZWFkZXJTdHlsZTtcclxuIiwiaW1wb3J0IHtcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgIGNvbG9yOiBcInJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjg3KVwiLFxyXG4gICAgYmFja2dyb3VuZDogd2hpdGVDb2xvcixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBtaW5XaWR0aDogXCIwXCIsXHJcbiAgICB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsXHJcbiAgICBmb250U2l6ZTogXCIuODc1cmVtXCIsXHJcbiAgfSxcclxuICBjYXJkUGxhaW46IHtcclxuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgfSxcclxuICBjYXJkUHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGNhcmRDaGFydDoge1xyXG4gICAgXCImIHBcIjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJkU3R5bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZFN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBwcm9maWxlLCBjaGFydCwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZENsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRdOiB0cnVlLFxyXG4gICAgW2NsYXNzZXMuY2FyZFBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkUHJvZmlsZV06IHByb2ZpbGUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkQ2hhcnRdOiBjaGFydCxcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQm9keShwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZEJvZHlDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keV06IHRydWUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkQm9keVByb2ZpbGVdOiBwcm9maWxlLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZEJvZHlDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmRCb2R5LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanNcIjtcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gXCIuLi8uLi9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUaGVtZShzdHlsZXMpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgY29sb3IsIHBsYWluLCBzdGF0cywgaWNvbiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZEhlYWRlckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJdOiB0cnVlLFxyXG4gICAgW2NsYXNzZXNbY29sb3IgKyBcIkNhcmRIZWFkZXJcIl1dOiBjb2xvcixcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJQbGFpbl06IHBsYWluLFxyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclN0YXRzXTogc3RhdHMsXHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVySWNvbl06IGljb24sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkSGVhZGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcIndhcm5pbmdcIixcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgXCJkYW5nZXJcIixcclxuICAgIFwiaW5mb1wiLFxyXG4gICAgXCJwcmltYXJ5XCIsXHJcbiAgICBcInNlY29uZGFyeVwiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcImRhcmtcIixcclxuICAgIFwiZXJyb3JcIlxyXG4gIF0pLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdGF0czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLy8gbWF0ZXJpYWwtdWkgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzXCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlVGhlbWUoc3R5bGVzKTtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcixcclxuICAgIHJvdW5kLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHNpbXBsZSxcclxuICAgIHNpemUsXHJcbiAgICBibG9jayxcclxuICAgIGxpbmssXHJcbiAgICBqdXN0SWNvbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG11aUNsYXNzZXMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXHJcbiAgICBbY2xhc3Nlc1tzaXplXV06IHNpemUsXHJcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcclxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXHJcbiAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxyXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxyXG4gICAgW2NsYXNzZXMuYmxvY2tdOiBibG9jayxcclxuICAgIFtjbGFzc2VzLmxpbmtdOiBsaW5rLFxyXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e3sgLi4ubXVpQ2xhc3Nlcywgcm9vdDogYnRuQ2xhc3NlcyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcInByaW1hcnlcIixcclxuICAgIFwicHJpbWFyeU91dGxpbmVkXCIsXHJcbiAgICBcInNlY29uZGFyeVwiLFxyXG4gICAgXCJzZWNvbmRhcnlPdXRsaW5lZFwiLFxyXG4gICAgXCJzZWNvbmRhcnlTaW1wbGVcIixcclxuICAgIFwiaW5mb1wiLFxyXG4gICAgXCJzdWNjZXNzXCIsXHJcbiAgICBcIndhcm5pbmdcIixcclxuICAgIFwiZGFuZ2VyXCIsXHJcbiAgICBcInJvc2VcIixcclxuICAgIFwid2hpdGVcIixcclxuICAgIFwidHJhbnNwYXJlbnRcIixcclxuICBdKSxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXHJcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcclxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxyXG4gIG11aUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmQuanNcIjtcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkSGVhZGVyLmpzXCI7XHJcbmltcG9ydCBDYXJkQm9keSBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRCb2R5LmpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuXHJcblxyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBSZXBvcnRQcm9ibGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbSc7XHJcblxyXG4vKiBpY29uOiBcIm1lc3NhZ2VcIiA6IFwid2FybmluZ1wiICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2VEaWFsb2coeyBvcGVuLCBzZXRPcGVuLCBtZXNzYWdlLCB0aXRsZSwgaWNvbiB9KSB7XHJcbiAgICBjb25zdCBoYW5kbGVLZXlzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5c31cclxuICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlRGlhbG9nXCJcclxuICAgID5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCA+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJkaWFsb2dDYXJkSGVhZGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMS4yNXJlbVwiLCBwYWRkaW5nOiBcIjhweFwiIH19IGNvbG9yPXtpY29uID09PSBcIndhcm5pbmdcIiA/IFwiZXJyb3JcIiA6XCJwcmltYXJ5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9PT0gXCJ3YXJuaW5nXCIgPyA8UmVwb3J0UHJvYmxlbUljb24gY2xhc3NOYW1lPVwiZGlhbG9nQ2FyZEhlYWRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaWNvbiA9PT0gXCJtZXNzYWdlXCIgPyA8Q2hlY2tDaXJjbGVJY29uIGNsYXNzTmFtZT1cImRpYWxvZ0NhcmRIZWFkZXJcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjVyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9IHt0aXRsZX0gPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2VwdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgPC9EaWFsb2c+XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgaW5mb0NvbG9yLCB0aXRsZSB9IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuaW1wb3J0IGRhc2hib2FyZFJvdXRlcyBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIGNvbG9yOiBpbmZvQ29sb3IsXHJcbiAgICB3aWR0aDogXCI2cmVtICFpbXBvcnRhbnRcIixcclxuICAgIGhlaWdodDogXCI2cmVtICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIHdyYXBwZXJEaXY6IHtcclxuICAgIG1hcmdpbjogXCIxMDBweCBhdXRvXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IFwiOTk5OTk5XCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gIH0sXHJcbiAgaWNvbldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9tYnJlKHBhdGgpIHtcclxuICBjb25zdCByb3V0ZXMgPSBkYXNoYm9hcmRSb3V0ZXM7XHJcblxyXG4gIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICBpZiAocGF0aC5pbmNsdWRlcyhyb3V0ZS5wYXRoKSkge1xyXG4gICAgICByZXR1cm4gcm91dGUubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwYXRoLmluY2x1ZGVzKFwibG9naW5cIikpIHtcclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKFwicmVnaXN0ZXJcIikpIHtcclxuICAgICAgcmV0dXJuIFwiUmVnaXN0cm9cIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIFwiTG9naW5cIjtcclxuICB9XHJcblxyXG4gIGlmIChwYXRoID09PSBcIi9cIilcclxuICAgIHJldHVybiBcIkxvZ2luXCI7XHJcblxyXG4gIHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlQ2hhbmdlKHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlckRpdn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2dyZXNzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgQ2FyZ2FuZG86IHtnZXROb21icmUocHJvcHMucGF0aCl9XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIExvcyBub21icmVzIGRlIGxvcyBhdHJpYnV0b3MgZS5qLiBpY2MsIHVybywgbHJvbGRhbiwgZGViZW4gaXIgZW4gbWludXNjdWxhIHBhcmEgZWwgY29ycmVjdG8gZnVuY2lvbmFtaWVudG8gZGUgbGEgY29uZmlndXJhY2lvbi5cclxuXHJcbmltcG9ydCBUSEVNRVMgZnJvbSBcIi4vVEhFTUVTXCI7XHJcblxyXG5pbXBvcnQgaWNjbG9nbyBmcm9tIFwiYXNzZXRzL2ltZy9pY2Nsb2dvLnBuZ1wiO1xyXG5pbXBvcnQgbHJvbGRhbmxvZ28gZnJvbSBcImFzc2V0cy9pbWcvbHJvbGRhbmxvZ28ucG5nXCI7XHJcbmltcG9ydCBzZXRhbG9nbyBmcm9tIFwiYXNzZXRzL2ltZy9zZXRhbG9nby5wbmdcIjtcclxuXHJcbmltcG9ydCB1cm9sb2dvIGZyb20gXCJhc3NldHMvaW1nL3Vyb2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBsb2dvcyA9IHtcclxuICAgIFwiaWNjXCI6IGljY2xvZ28sXHJcbiAgICBcInVyb1wiOiB1bmRlZmluZWQsXHJcbiAgICBcImNvbWRwXCI6IHVuZGVmaW5lZCxcclxuICAgIFwibHJvbGRhblwiOiBscm9sZGFubG9nbyxcclxuICAgIFwidGVzdFwiOiB1bmRlZmluZWQsXHJcbiAgICBcInNldGFcIjogc2V0YWxvZ28sXHJcbiAgICBcImNpY1wiOiB1bmRlZmluZWQsXHJcbiAgICBcImZhZGVcIjogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IHNvbGljaXRhclR1cm5vTWVzc2FnZXMgPSB7XHJcbiAgICBcImljY1wiOiBcIkxvcyB0dXJub3MgcXVlIHNlIG9idGllbmVuIHNvbiBzw7NsbyBwYXJhIGNvbnN1bHRhIHkgZWxlY3Ryb2NhcmRpb2dyYW1hLCBwYXJhIG90cm9zIGVzdHVkaW9zIGNvbXVuaWNhcnNlIHRlbGVmw7NuaWNhbWVudGUuXCIsXHJcbiAgICBcInVyb1wiOiBcIkxvcyB0dXJub3MgcXVlIHNlIG9idGllbmVuIHNvbiBzw7NsbyBwYXJhIGNvbnN1bHRhLCBwYXJhIG90cm9zIGVzdHVkaW9zIGNvbXVuaWNhcnNlIHRlbGVmw7NuaWNhbWVudGUuXCIsXHJcbiAgICBcImNvbWRwXCI6IFwiXCIsXHJcbiAgICBcImxyb2xkYW5cIjogXCJcIixcclxuICAgIFwidGVzdFwiOiBcIk1lbnNhamUgZGUgc29saWNpdGFyIHR1cm5vIHBhcmEgdGVzdFwiLFxyXG4gICAgXCJzZXRhXCI6IFwiXCIsXHJcbiAgICBcImNpY1wiOiBcIlwiLFxyXG4gICAgXCJmYWRlXCI6IFwiXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IGNvbnN1bHRvcmlvc05hbWVUb0lkID0ge1xyXG4gICAgXCJpY2NcIjogMSxcclxuICAgIFwidXJvXCI6IDUsXHJcbiAgICBcImNvbWRwXCI6IDAsXHJcbiAgICBcImxyb2xkYW5cIjoyLFxyXG4gICAgXCJ0ZXN0XCI6IDAsXHJcbiAgICBcInNldGFcIjogMyxcclxuICAgIFwiY2ljXCI6IFwiNFwiLFxyXG4gICAgXCJmYWRlXCI6IFwiNlwiXHJcbn1cclxuXHJcbmNvbnN0IGNvbnN1bHRvcmlvc0Z1bGxOYW1lID0ge1xyXG4gICAgXCJpY2NcIjogXCJJbnN0aXR1dG8gQ2zDrW5pY28gQ2FyZGlvbMOzZ2ljb1wiLFxyXG4gICAgXCJ1cm9cIjogXCJVbmlkYWQgVXJvbMOzZ2ljYSBNYXIgZGVsIFBsYXRhXCIsXHJcbiAgICBcImNvbWRwXCI6IFwiQ2VudHJvIE9mdGFsbW9sw7NnaWNvIE1hciBkZWwgUGxhdGFcIixcclxuICAgIFwibHJvbGRhblwiOiBcIkNvbnN1bHRvcmlvIFBzaXF1aWF0csOtYVwiLFxyXG4gICAgXCJ0ZXN0XCI6IFwiSW5zdGl0dXRvIHRlc3RcIixcclxuICAgIFwic2V0YVwiOiBcIkluc3RpdHV0byBTRVRBXCIsXHJcbiAgICBcImNpY1wiOiBcIkNlbnRybyBJbnRlZ3JhbCBkZSBTYWx1ZFwiLFxyXG4gICAgXCJmYWRlXCI6IFwiQ2VudHJvIFBzaWNvbMOzZ2ljbyBQc2lxdWnDoXRyaWNvXCJcclxufVxyXG5cclxuY29uc3QgcGFnZVRpdGxlcyA9IHtcclxuICAgIFwiaWNjXCI6IFwiUG9ydGFsIFBhY2llbnRlcyBJQ0NcIixcclxuICAgIFwidXJvXCI6IFwiUG9ydGFsIFBhY2llbnRlc1wiLFxyXG4gICAgXCJjb21kcFwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwibHJvbGRhblwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwidGVzdFwiOiBcIlBvcnRhbCBEZSBUZXN0aW5nXCIsXHJcbiAgICBcInNldGFcIjogXCJQb3J0YWwgUGFjaWVudGVzXCIsXHJcbiAgICBcImNpY1wiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwiZmFkZVwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIlxyXG59XHJcblxyXG5jb25zdCBmYXZJY29uUm91dGVzID0ge1xyXG4gICAgXCJpY2NcIjogXCJJQ0MuaWNvXCIsXHJcbiAgICBcInVyb1wiOiBcInRlc3QucG5nXCIsXHJcbiAgICBcImNvbWRwXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwibHJvbGRhblwiOiBcInRlc3QucG5nXCIsXHJcbiAgICBcInRlc3RcIjogXCJ0ZXN0LnBuZ1wiLFxyXG4gICAgXCJzZXRhXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwiY2ljXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwiZmFkZVwiOiBcInRlc3QucG5nXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcmEgYWdyZWdhciBsaW5rcyBhIHBhZ2luYSBwcmluY2lwYWwsIHNpIGxhIGhheSwgZWplbXBsbzogaHR0cHM6Ly93d3cuaWNjYXJkaW9sb2dpY28uY29tXHJcbiAqL1xyXG5jb25zdCBtYWluUGFnZUxpbmtzID0ge1xyXG4gICAgXCJpY2NcIjogXCJodHRwczovL3d3dy5pY2NhcmRpb2xvZ2ljby5jb21cIixcclxuICAgIFwidXJvXCI6IFwiaHR0cHM6Ly91bmlkYWR1cm9sb2dpY2FtYXJkZWxwbGF0YS5jb20vXCIsXHJcbiAgICBcImNvbWRwXCI6IFwiXCIsXHJcbiAgICBcImxyb2xkYW5cIjogXCJcIixcclxuICAgIFwidGVzdFwiOiBcIlwiLFxyXG4gICAgXCJzZXRhXCI6IFwiaHR0cHM6Ly9pbnN0aXR1dG9zZXRhLmNvbS5hci9cIixcclxuICAgIFwiY2ljXCI6IFwiXCIsXHJcbiAgICBcImZhZGVcIjogXCJcIlxyXG59XHJcblxyXG5cclxuLy9UT0RPOiBBR1JFR0FSIFRZQ1xyXG5jb25zdCB0ZXJtcyA9IHtcclxuICAgIFwiaWNjXCI6IGBUw6lybWlub3MgeSBDb25kaWNpb25lcyBkZSBVc29cclxuICAgIDEuIEludHJvZHVjY2nDs25cclxuICAgIEJpZW52ZW5pZG8gYSBUSElTWVMgUG9ydGFsIFNhbHVkLCBkaXNlw7FhZG8gcGFyYSBicmluZGFyIG1lam9yIGNhbGlkYWQgZGUgYXRlbmNpw7NuIGEgbG9zIHBhY2llbnRlcywgZW4gZWwgY3VhbCBsb3MgdXN1YXJpb3MgcmVnaXN0cmFkb3MgcG9kcsOhbiBhY2NlZGVyIGEgdHVybm9zIHByb2dyYW1hZG9zLCByZWNldGFzIGRlIG1lZGljYW1lbnRvcyBlIGluZm9ybWFjacOzbiBkZSBzdSBzYWx1ZC4gQWwgYWNjZWRlciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMuIFNpIG5vIGVzdMOhIGRlIGFjdWVyZG8gY29uIGVzdG9zIHTDqXJtaW5vcywgbGUgc29saWNpdGFtb3MgcXVlIG5vIHV0aWxpY2UgZWwgc2l0aW8uXHJcbiAgICAyLiBBY2VwdGFjacOzbiBkZSBsb3MgVMOpcm1pbm9zXHJcbiAgICBBbCBuYXZlZ2FyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBjdW1wbGlyIGNvbiBsb3MgdMOpcm1pbm9zIHkgY29uZGljaW9uZXMgZGVzY3JpdG9zIGFxdcOtLiBOb3MgcmVzZXJ2YW1vcyBlbCBkZXJlY2hvIGRlIG1vZGlmaWNhciBlc3RvcyB0w6lybWlub3MgZW4gY3VhbHF1aWVyIG1vbWVudG8geSBkaWNob3MgY2FtYmlvcyBzZXLDoW4gbm90aWZpY2Fkb3Mgb3BvcnR1bmFtZW50ZS5cclxuICAgIDMuIFJlY29waWxhY2nDs24gZGUgRGF0b3MgYSBUcmF2w6lzIGRlbCBTaXRpb1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcmVjb3BpbGEgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGEgdHJhdsOpcyBkZWwgaW5ncmVzbyBkZSBkYXRvcyBwZXJzb25hbGVzIHkgIHJlZ2lzdHJvIGRlIHVzdWFyaW9zLiBMb3MgZGF0b3MgcmVjb3BpbGFkb3MgaW5jbHV5ZW4gZG9jdW1lbnRvLCBhcGVsbGlkbyB5IG5vbWJyZSBkZWwgcGFjaWVudGUsIGZlY2hhIGRlIG5hY2ltaWVudG8sIHNleG8sIGRhdG9zIGRlIGNvbnRhY3RvIHkgY29iZXJ0dXJhIG3DqWRpY2EgeSBzZXLDoW4gdXRpbGl6YWRvcyBwYXJhIHByb3BvcmNpb25hciBzZXJ2aWNpb3MgcGVyc29uYWxpemFkb3MuXHJcbiAgICA0LiBVc28gZGUgQ29va2llc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzIHBhcmEgbWVqb3JhciBzdSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIHkgcGVyc29uYWxpemFyIGVsIGNvbnRlbmlkbyBxdWUgcmVjaWJlLiBMYXMgY29va2llcyBzb24gcGVxdWXDsW9zIGFyY2hpdm9zIHF1ZSBzZSBhbG1hY2VuYW4gZW4gc3UgZGlzcG9zaXRpdm8gYWwgbmF2ZWdhciBwb3Igc2l0aW9zIHdlYi4gUGFyYSBvYnRlbmVyIG3DoXMgaW5mb3JtYWNpw7NuLCBjb25zdWx0ZSBudWVzdHJhIFBvbMOtdGljYSBkZSBDb29raWVzLlxyXG4gICAgNS4gU2VndXJpZGFkXHJcbiAgICBJbXBsZW1lbnRhbW9zIG1lZGlkYXMgZGUgc2VndXJpZGFkIGFkZWN1YWRhcyBwYXJhIHByb3RlZ2VyIGxvcyBkYXRvcyBwZXJzb25hbGVzIHF1ZSBub3MgcHJvcG9yY2lvbmEgYSB0cmF2w6lzIGRlbCBzaXRpbywgdXRpbGl6YW5kbyBjb25leGlvbmVzIHNlZ3VyYXMgKEhUVFBTKSwgY2lmcmFkbyBkZSBkYXRvcyB5IGF1dGVudGljYWNpw7NuIGVuIMOhcmVhcyBwcm90ZWdpZGFzIGRlbCBzaXRpby5cclxuICAgIDYuIERlcmVjaG9zIGRlbCBVc3VhcmlvXHJcbiAgICBDb25mb3JtZSBhIGxhIExleSAyNS4zMjYgZGUgUHJvdGVjY2nDs24gZGUgbG9zIERhdG9zIFBlcnNvbmFsZXMsIHVzdGVkIHRpZW5lIGRlcmVjaG8gYSBhY2NlZGVyLCByZWN0aWZpY2FyLCBhY3R1YWxpemFyIHkgc29saWNpdGFyIGxhIGVsaW1pbmFjacOzbiBkZSBzdXMgZGF0b3MgcGVyc29uYWxlcyBwcm9wb3JjaW9uYWRvcyBhIHRyYXbDqXMgZGUgZXN0ZSBzaXRpbyB3ZWIuIFBhcmEgZWplcmNlciBlc3RvcyBkZXJlY2hvcywgcG9yIGZhdm9yIGNvbnTDoWN0ZW5vcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuXHJcbiAgICA3LiBQb2zDrXRpY2EgZGUgRW5sYWNlcyBFeHRlcm5vc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcHVlZGUgY29udGVuZXIgZW5sYWNlcyBhIHNpdGlvcyB3ZWIgb3BlcmFkb3MgcG9yIHRlcmNlcm9zLiBObyBub3MgaGFjZW1vcyByZXNwb25zYWJsZXMgZGVsIGNvbnRlbmlkbyBuaSBkZSBsYXMgcG9sw610aWNhcyBkZSBwcml2YWNpZGFkIGRlIGRpY2hvcyBzaXRpb3MuIEFsIGFjY2VkZXIgYSBlbGxvcywgbG8gaGFjZSBiYWpvIHN1IHByb3BpYSByZXNwb25zYWJpbGlkYWQuXHJcbiAgICA4LiBKdXJpc2RpY2Npw7NuIHkgTGV5IEFwbGljYWJsZVxyXG4gICAgRXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgc2UgcmlnZW4gcG9yIGxhcyBsZXllcyBkZSBsYSBSZXDDumJsaWNhIEFyZ2VudGluYS4gQ3VhbHF1aWVyIGRpc3B1dGEgcmVsYWNpb25hZGEgY29uIHN1IHVzbyBkZWwgc2l0aW8gd2ViIHNlcsOhIHNvbWV0aWRhIGEgbG9zIHRyaWJ1bmFsZXMgY29tcGV0ZW50ZXMgZW4gbGEgQ2l1ZGFkIEF1dMOzbm9tYSBkZSBCdWVub3MgQWlyZXMuXHJcbiAgICA5LiBDb250YWN0b1xyXG4gICAgU2kgdGllbmUgYWxndW5hIHByZWd1bnRhIHNvYnJlIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLCBwdWVkZSBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbiBub3NvdHJvcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuYCxcclxuXHJcbiAgICBcImxyb2xkYW5cIjogYFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIGRlIFVzb1xyXG4gICAgMS4gSW50cm9kdWNjacOzblxyXG4gICAgQmllbnZlbmlkbyBhIFRISVNZUyBQb3J0YWwgU2FsdWQsIGRpc2XDsWFkbyBwYXJhIGJyaW5kYXIgbWVqb3IgY2FsaWRhZCBkZSBhdGVuY2nDs24gYSBsb3MgcGFjaWVudGVzLCBlbiBlbCBjdWFsIGxvcyB1c3VhcmlvcyByZWdpc3RyYWRvcyBwb2Ryw6FuIGFjY2VkZXIgYSB0dXJub3MgcHJvZ3JhbWFkb3MsIHJlY2V0YXMgZGUgbWVkaWNhbWVudG9zIGUgaW5mb3JtYWNpw7NuIGRlIHN1IHNhbHVkLiBBbCBhY2NlZGVyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBlc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcy4gU2kgbm8gZXN0w6EgZGUgYWN1ZXJkbyBjb24gZXN0b3MgdMOpcm1pbm9zLCBsZSBzb2xpY2l0YW1vcyBxdWUgbm8gdXRpbGljZSBlbCBzaXRpby5cclxuICAgIDIuIEFjZXB0YWNpw7NuIGRlIGxvcyBUw6lybWlub3NcclxuICAgIEFsIG5hdmVnYXIgeSB1dGlsaXphciBlc3RlIHNpdGlvIHdlYiwgdXN0ZWQgYWNlcHRhIGN1bXBsaXIgY29uIGxvcyB0w6lybWlub3MgeSBjb25kaWNpb25lcyBkZXNjcml0b3MgYXF1w60uIE5vcyByZXNlcnZhbW9zIGVsIGRlcmVjaG8gZGUgbW9kaWZpY2FyIGVzdG9zIHTDqXJtaW5vcyBlbiBjdWFscXVpZXIgbW9tZW50byB5IGRpY2hvcyBjYW1iaW9zIHNlcsOhbiBub3RpZmljYWRvcyBvcG9ydHVuYW1lbnRlLlxyXG4gICAgMy4gUmVjb3BpbGFjacOzbiBkZSBEYXRvcyBhIFRyYXbDqXMgZGVsIFNpdGlvXHJcbiAgICBFc3RlIHNpdGlvIHdlYiByZWNvcGlsYSBpbmZvcm1hY2nDs24gcGVyc29uYWwgYSB0cmF2w6lzIGRlbCBpbmdyZXNvIGRlIGRhdG9zIHBlcnNvbmFsZXMgeSAgcmVnaXN0cm8gZGUgdXN1YXJpb3MuIExvcyBkYXRvcyByZWNvcGlsYWRvcyBpbmNsdXllbiBkb2N1bWVudG8sIGFwZWxsaWRvIHkgbm9tYnJlIGRlbCBwYWNpZW50ZSwgZmVjaGEgZGUgbmFjaW1pZW50bywgc2V4bywgZGF0b3MgZGUgY29udGFjdG8geSBjb2JlcnR1cmEgbcOpZGljYSB5IHNlcsOhbiB1dGlsaXphZG9zIHBhcmEgcHJvcG9yY2lvbmFyIHNlcnZpY2lvcyBwZXJzb25hbGl6YWRvcy5cclxuICAgIDQuIFVzbyBkZSBDb29raWVzXHJcbiAgICBFc3RlIHNpdGlvIHdlYiB1dGlsaXphIGNvb2tpZXMgcGFyYSBtZWpvcmFyIHN1IGV4cGVyaWVuY2lhIGRlIHVzdWFyaW8geSBwZXJzb25hbGl6YXIgZWwgY29udGVuaWRvIHF1ZSByZWNpYmUuIExhcyBjb29raWVzIHNvbiBwZXF1ZcOxb3MgYXJjaGl2b3MgcXVlIHNlIGFsbWFjZW5hbiBlbiBzdSBkaXNwb3NpdGl2byBhbCBuYXZlZ2FyIHBvciBzaXRpb3Mgd2ViLiBQYXJhIG9idGVuZXIgbcOhcyBpbmZvcm1hY2nDs24sIGNvbnN1bHRlIG51ZXN0cmEgUG9sw610aWNhIGRlIENvb2tpZXMuXHJcbiAgICA1LiBTZWd1cmlkYWRcclxuICAgIEltcGxlbWVudGFtb3MgbWVkaWRhcyBkZSBzZWd1cmlkYWQgYWRlY3VhZGFzIHBhcmEgcHJvdGVnZXIgbG9zIGRhdG9zIHBlcnNvbmFsZXMgcXVlIG5vcyBwcm9wb3JjaW9uYSBhIHRyYXbDqXMgZGVsIHNpdGlvLCB1dGlsaXphbmRvIGNvbmV4aW9uZXMgc2VndXJhcyAoSFRUUFMpLCBjaWZyYWRvIGRlIGRhdG9zIHkgYXV0ZW50aWNhY2nDs24gZW4gw6FyZWFzIHByb3RlZ2lkYXMgZGVsIHNpdGlvLlxyXG4gICAgNi4gRGVyZWNob3MgZGVsIFVzdWFyaW9cclxuICAgIENvbmZvcm1lIGEgbGEgTGV5IDI1LjMyNiBkZSBQcm90ZWNjacOzbiBkZSBsb3MgRGF0b3MgUGVyc29uYWxlcywgdXN0ZWQgdGllbmUgZGVyZWNobyBhIGFjY2VkZXIsIHJlY3RpZmljYXIsIGFjdHVhbGl6YXIgeSBzb2xpY2l0YXIgbGEgZWxpbWluYWNpw7NuIGRlIHN1cyBkYXRvcyBwZXJzb25hbGVzIHByb3BvcmNpb25hZG9zIGEgdHJhdsOpcyBkZSBlc3RlIHNpdGlvIHdlYi4gUGFyYSBlamVyY2VyIGVzdG9zIGRlcmVjaG9zLCBwb3IgZmF2b3IgY29udMOhY3Rlbm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5cclxuICAgIDcuIFBvbMOtdGljYSBkZSBFbmxhY2VzIEV4dGVybm9zXHJcbiAgICBFc3RlIHNpdGlvIHdlYiBwdWVkZSBjb250ZW5lciBlbmxhY2VzIGEgc2l0aW9zIHdlYiBvcGVyYWRvcyBwb3IgdGVyY2Vyb3MuIE5vIG5vcyBoYWNlbW9zIHJlc3BvbnNhYmxlcyBkZWwgY29udGVuaWRvIG5pIGRlIGxhcyBwb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQgZGUgZGljaG9zIHNpdGlvcy4gQWwgYWNjZWRlciBhIGVsbG9zLCBsbyBoYWNlIGJham8gc3UgcHJvcGlhIHJlc3BvbnNhYmlsaWRhZC5cclxuICAgIDguIEp1cmlzZGljY2nDs24geSBMZXkgQXBsaWNhYmxlXHJcbiAgICBFc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcyBzZSByaWdlbiBwb3IgbGFzIGxleWVzIGRlIGxhIFJlcMO6YmxpY2EgQXJnZW50aW5hLiBDdWFscXVpZXIgZGlzcHV0YSByZWxhY2lvbmFkYSBjb24gc3UgdXNvIGRlbCBzaXRpbyB3ZWIgc2Vyw6Egc29tZXRpZGEgYSBsb3MgdHJpYnVuYWxlcyBjb21wZXRlbnRlcyBlbiBsYSBDaXVkYWQgQXV0w7Nub21hIGRlIEJ1ZW5vcyBBaXJlcy5cclxuICAgIDkuIENvbnRhY3RvXHJcbiAgICBTaSB0aWVuZSBhbGd1bmEgcHJlZ3VudGEgc29icmUgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMsIHB1ZWRlIHBvbmVyc2UgZW4gY29udGFjdG8gY29uIG5vc290cm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5gLFxyXG4gIFxyXG4gICAgXCJzZXRhXCI6IGBUw6lybWlub3MgeSBDb25kaWNpb25lcyBkZSBVc29cclxuICAgIDEuIEludHJvZHVjY2nDs25cclxuICAgIEJpZW52ZW5pZG8gYSBUSElTWVMgUG9ydGFsIFNhbHVkLCBkaXNlw7FhZG8gcGFyYSBicmluZGFyIG1lam9yIGNhbGlkYWQgZGUgYXRlbmNpw7NuIGEgbG9zIHBhY2llbnRlcywgZW4gZWwgY3VhbCBsb3MgdXN1YXJpb3MgcmVnaXN0cmFkb3MgcG9kcsOhbiBhY2NlZGVyIGEgdHVybm9zIHByb2dyYW1hZG9zLCByZWNldGFzIGRlIG1lZGljYW1lbnRvcyBlIGluZm9ybWFjacOzbiBkZSBzdSBzYWx1ZC4gQWwgYWNjZWRlciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMuIFNpIG5vIGVzdMOhIGRlIGFjdWVyZG8gY29uIGVzdG9zIHTDqXJtaW5vcywgbGUgc29saWNpdGFtb3MgcXVlIG5vIHV0aWxpY2UgZWwgc2l0aW8uXHJcbiAgICAyLiBBY2VwdGFjacOzbiBkZSBsb3MgVMOpcm1pbm9zXHJcbiAgICBBbCBuYXZlZ2FyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBjdW1wbGlyIGNvbiBsb3MgdMOpcm1pbm9zIHkgY29uZGljaW9uZXMgZGVzY3JpdG9zIGFxdcOtLiBOb3MgcmVzZXJ2YW1vcyBlbCBkZXJlY2hvIGRlIG1vZGlmaWNhciBlc3RvcyB0w6lybWlub3MgZW4gY3VhbHF1aWVyIG1vbWVudG8geSBkaWNob3MgY2FtYmlvcyBzZXLDoW4gbm90aWZpY2Fkb3Mgb3BvcnR1bmFtZW50ZS5cclxuICAgIDMuIFJlY29waWxhY2nDs24gZGUgRGF0b3MgYSBUcmF2w6lzIGRlbCBTaXRpb1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcmVjb3BpbGEgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGEgdHJhdsOpcyBkZWwgaW5ncmVzbyBkZSBkYXRvcyBwZXJzb25hbGVzIHkgIHJlZ2lzdHJvIGRlIHVzdWFyaW9zLiBMb3MgZGF0b3MgcmVjb3BpbGFkb3MgaW5jbHV5ZW4gZG9jdW1lbnRvLCBhcGVsbGlkbyB5IG5vbWJyZSBkZWwgcGFjaWVudGUsIGZlY2hhIGRlIG5hY2ltaWVudG8sIHNleG8sIGRhdG9zIGRlIGNvbnRhY3RvIHkgY29iZXJ0dXJhIG3DqWRpY2EgeSBzZXLDoW4gdXRpbGl6YWRvcyBwYXJhIHByb3BvcmNpb25hciBzZXJ2aWNpb3MgcGVyc29uYWxpemFkb3MuXHJcbiAgICA0LiBVc28gZGUgQ29va2llc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzIHBhcmEgbWVqb3JhciBzdSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIHkgcGVyc29uYWxpemFyIGVsIGNvbnRlbmlkbyBxdWUgcmVjaWJlLiBMYXMgY29va2llcyBzb24gcGVxdWXDsW9zIGFyY2hpdm9zIHF1ZSBzZSBhbG1hY2VuYW4gZW4gc3UgZGlzcG9zaXRpdm8gYWwgbmF2ZWdhciBwb3Igc2l0aW9zIHdlYi4gUGFyYSBvYnRlbmVyIG3DoXMgaW5mb3JtYWNpw7NuLCBjb25zdWx0ZSBudWVzdHJhIFBvbMOtdGljYSBkZSBDb29raWVzLlxyXG4gICAgNS4gU2VndXJpZGFkXHJcbiAgICBJbXBsZW1lbnRhbW9zIG1lZGlkYXMgZGUgc2VndXJpZGFkIGFkZWN1YWRhcyBwYXJhIHByb3RlZ2VyIGxvcyBkYXRvcyBwZXJzb25hbGVzIHF1ZSBub3MgcHJvcG9yY2lvbmEgYSB0cmF2w6lzIGRlbCBzaXRpbywgdXRpbGl6YW5kbyBjb25leGlvbmVzIHNlZ3VyYXMgKEhUVFBTKSwgY2lmcmFkbyBkZSBkYXRvcyB5IGF1dGVudGljYWNpw7NuIGVuIMOhcmVhcyBwcm90ZWdpZGFzIGRlbCBzaXRpby5cclxuICAgIDYuIERlcmVjaG9zIGRlbCBVc3VhcmlvXHJcbiAgICBDb25mb3JtZSBhIGxhIExleSAyNS4zMjYgZGUgUHJvdGVjY2nDs24gZGUgbG9zIERhdG9zIFBlcnNvbmFsZXMsIHVzdGVkIHRpZW5lIGRlcmVjaG8gYSBhY2NlZGVyLCByZWN0aWZpY2FyLCBhY3R1YWxpemFyIHkgc29saWNpdGFyIGxhIGVsaW1pbmFjacOzbiBkZSBzdXMgZGF0b3MgcGVyc29uYWxlcyBwcm9wb3JjaW9uYWRvcyBhIHRyYXbDqXMgZGUgZXN0ZSBzaXRpbyB3ZWIuIFBhcmEgZWplcmNlciBlc3RvcyBkZXJlY2hvcywgcG9yIGZhdm9yIGNvbnTDoWN0ZW5vcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuXHJcbiAgICA3LiBQb2zDrXRpY2EgZGUgRW5sYWNlcyBFeHRlcm5vc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcHVlZGUgY29udGVuZXIgZW5sYWNlcyBhIHNpdGlvcyB3ZWIgb3BlcmFkb3MgcG9yIHRlcmNlcm9zLiBObyBub3MgaGFjZW1vcyByZXNwb25zYWJsZXMgZGVsIGNvbnRlbmlkbyBuaSBkZSBsYXMgcG9sw610aWNhcyBkZSBwcml2YWNpZGFkIGRlIGRpY2hvcyBzaXRpb3MuIEFsIGFjY2VkZXIgYSBlbGxvcywgbG8gaGFjZSBiYWpvIHN1IHByb3BpYSByZXNwb25zYWJpbGlkYWQuXHJcbiAgICA4LiBKdXJpc2RpY2Npw7NuIHkgTGV5IEFwbGljYWJsZVxyXG4gICAgRXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgc2UgcmlnZW4gcG9yIGxhcyBsZXllcyBkZSBsYSBSZXDDumJsaWNhIEFyZ2VudGluYS4gQ3VhbHF1aWVyIGRpc3B1dGEgcmVsYWNpb25hZGEgY29uIHN1IHVzbyBkZWwgc2l0aW8gd2ViIHNlcsOhIHNvbWV0aWRhIGEgbG9zIHRyaWJ1bmFsZXMgY29tcGV0ZW50ZXMgZW4gbGEgQ2l1ZGFkIEF1dMOzbm9tYSBkZSBCdWVub3MgQWlyZXMuXHJcbiAgICA5LiBDb250YWN0b1xyXG4gICAgU2kgdGllbmUgYWxndW5hIHByZWd1bnRhIHNvYnJlIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLCBwdWVkZSBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbiBub3NvdHJvcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuYCxcclxuXHJcbiAgICBcImNpY1wiOiBgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgZGUgVXNvXHJcbiAgICAxLiBJbnRyb2R1Y2Npw7NuXHJcbiAgICBCaWVudmVuaWRvIGEgVEhJU1lTIFBvcnRhbCBTYWx1ZCwgZGlzZcOxYWRvIHBhcmEgYnJpbmRhciBtZWpvciBjYWxpZGFkIGRlIGF0ZW5jacOzbiBhIGxvcyBwYWNpZW50ZXMsIGVuIGVsIGN1YWwgbG9zIHVzdWFyaW9zIHJlZ2lzdHJhZG9zIHBvZHLDoW4gYWNjZWRlciBhIHR1cm5vcyBwcm9ncmFtYWRvcywgcmVjZXRhcyBkZSBtZWRpY2FtZW50b3MgZSBpbmZvcm1hY2nDs24gZGUgc3Ugc2FsdWQuIEFsIGFjY2VkZXIgeSB1dGlsaXphciBlc3RlIHNpdGlvIHdlYiwgdXN0ZWQgYWNlcHRhIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLiBTaSBubyBlc3TDoSBkZSBhY3VlcmRvIGNvbiBlc3RvcyB0w6lybWlub3MsIGxlIHNvbGljaXRhbW9zIHF1ZSBubyB1dGlsaWNlIGVsIHNpdGlvLlxyXG4gICAgMi4gQWNlcHRhY2nDs24gZGUgbG9zIFTDqXJtaW5vc1xyXG4gICAgQWwgbmF2ZWdhciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgY3VtcGxpciBjb24gbG9zIHTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzIGRlc2NyaXRvcyBhcXXDrS4gTm9zIHJlc2VydmFtb3MgZWwgZGVyZWNobyBkZSBtb2RpZmljYXIgZXN0b3MgdMOpcm1pbm9zIGVuIGN1YWxxdWllciBtb21lbnRvIHkgZGljaG9zIGNhbWJpb3Mgc2Vyw6FuIG5vdGlmaWNhZG9zIG9wb3J0dW5hbWVudGUuXHJcbiAgICAzLiBSZWNvcGlsYWNpw7NuIGRlIERhdG9zIGEgVHJhdsOpcyBkZWwgU2l0aW9cclxuICAgIEVzdGUgc2l0aW8gd2ViIHJlY29waWxhIGluZm9ybWFjacOzbiBwZXJzb25hbCBhIHRyYXbDqXMgZGVsIGluZ3Jlc28gZGUgZGF0b3MgcGVyc29uYWxlcyB5ICByZWdpc3RybyBkZSB1c3Vhcmlvcy4gTG9zIGRhdG9zIHJlY29waWxhZG9zIGluY2x1eWVuIGRvY3VtZW50bywgYXBlbGxpZG8geSBub21icmUgZGVsIHBhY2llbnRlLCBmZWNoYSBkZSBuYWNpbWllbnRvLCBzZXhvLCBkYXRvcyBkZSBjb250YWN0byB5IGNvYmVydHVyYSBtw6lkaWNhIHkgc2Vyw6FuIHV0aWxpemFkb3MgcGFyYSBwcm9wb3JjaW9uYXIgc2VydmljaW9zIHBlcnNvbmFsaXphZG9zLlxyXG4gICAgNC4gVXNvIGRlIENvb2tpZXNcclxuICAgIEVzdGUgc2l0aW8gd2ViIHV0aWxpemEgY29va2llcyBwYXJhIG1lam9yYXIgc3UgZXhwZXJpZW5jaWEgZGUgdXN1YXJpbyB5IHBlcnNvbmFsaXphciBlbCBjb250ZW5pZG8gcXVlIHJlY2liZS4gTGFzIGNvb2tpZXMgc29uIHBlcXVlw7FvcyBhcmNoaXZvcyBxdWUgc2UgYWxtYWNlbmFuIGVuIHN1IGRpc3Bvc2l0aXZvIGFsIG5hdmVnYXIgcG9yIHNpdGlvcyB3ZWIuIFBhcmEgb2J0ZW5lciBtw6FzIGluZm9ybWFjacOzbiwgY29uc3VsdGUgbnVlc3RyYSBQb2zDrXRpY2EgZGUgQ29va2llcy5cclxuICAgIDUuIFNlZ3VyaWRhZFxyXG4gICAgSW1wbGVtZW50YW1vcyBtZWRpZGFzIGRlIHNlZ3VyaWRhZCBhZGVjdWFkYXMgcGFyYSBwcm90ZWdlciBsb3MgZGF0b3MgcGVyc29uYWxlcyBxdWUgbm9zIHByb3BvcmNpb25hIGEgdHJhdsOpcyBkZWwgc2l0aW8sIHV0aWxpemFuZG8gY29uZXhpb25lcyBzZWd1cmFzIChIVFRQUyksIGNpZnJhZG8gZGUgZGF0b3MgeSBhdXRlbnRpY2FjacOzbiBlbiDDoXJlYXMgcHJvdGVnaWRhcyBkZWwgc2l0aW8uXHJcbiAgICA2LiBEZXJlY2hvcyBkZWwgVXN1YXJpb1xyXG4gICAgQ29uZm9ybWUgYSBsYSBMZXkgMjUuMzI2IGRlIFByb3RlY2Npw7NuIGRlIGxvcyBEYXRvcyBQZXJzb25hbGVzLCB1c3RlZCB0aWVuZSBkZXJlY2hvIGEgYWNjZWRlciwgcmVjdGlmaWNhciwgYWN0dWFsaXphciB5IHNvbGljaXRhciBsYSBlbGltaW5hY2nDs24gZGUgc3VzIGRhdG9zIHBlcnNvbmFsZXMgcHJvcG9yY2lvbmFkb3MgYSB0cmF2w6lzIGRlIGVzdGUgc2l0aW8gd2ViLiBQYXJhIGVqZXJjZXIgZXN0b3MgZGVyZWNob3MsIHBvciBmYXZvciBjb250w6FjdGVub3MgZW4gaW5mb0B0aGlzeXMubmV0LmFyLlxyXG4gICAgNy4gUG9sw610aWNhIGRlIEVubGFjZXMgRXh0ZXJub3NcclxuICAgIEVzdGUgc2l0aW8gd2ViIHB1ZWRlIGNvbnRlbmVyIGVubGFjZXMgYSBzaXRpb3Mgd2ViIG9wZXJhZG9zIHBvciB0ZXJjZXJvcy4gTm8gbm9zIGhhY2Vtb3MgcmVzcG9uc2FibGVzIGRlbCBjb250ZW5pZG8gbmkgZGUgbGFzIHBvbMOtdGljYXMgZGUgcHJpdmFjaWRhZCBkZSBkaWNob3Mgc2l0aW9zLiBBbCBhY2NlZGVyIGEgZWxsb3MsIGxvIGhhY2UgYmFqbyBzdSBwcm9waWEgcmVzcG9uc2FiaWxpZGFkLlxyXG4gICAgOC4gSnVyaXNkaWNjacOzbiB5IExleSBBcGxpY2FibGVcclxuICAgIEVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIHNlIHJpZ2VuIHBvciBsYXMgbGV5ZXMgZGUgbGEgUmVww7pibGljYSBBcmdlbnRpbmEuIEN1YWxxdWllciBkaXNwdXRhIHJlbGFjaW9uYWRhIGNvbiBzdSB1c28gZGVsIHNpdGlvIHdlYiBzZXLDoSBzb21ldGlkYSBhIGxvcyB0cmlidW5hbGVzIGNvbXBldGVudGVzIGVuIGxhIENpdWRhZCBBdXTDs25vbWEgZGUgQnVlbm9zIEFpcmVzLlxyXG4gICAgOS4gQ29udGFjdG9cclxuICAgIFNpIHRpZW5lIGFsZ3VuYSBwcmVndW50YSBzb2JyZSBlc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcywgcHVlZGUgcG9uZXJzZSBlbiBjb250YWN0byBjb24gbm9zb3Ryb3MgZW4gaW5mb0B0aGlzeXMubmV0LmFyLmAsXHJcblxyXG5cclxuICAgIFwidGVzdFwiOiBuZXcgQXJyYXkoNSlcclxuICAgICAgICAuZmlsbChcIlxcbnRlc3QgdHljXCIpXHJcbiAgICAgICAgLmpvaW4oXCJcIiksXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVtZShjb25zdWx0b3Jpb0lkKSB7XHJcbiAgICByZXR1cm4gVEhFTUVTW2NvbnN1bHRvcmlvc05hbWVUb0lkW2NvbnN1bHRvcmlvSWRdID8/IDBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YUluZm8oY29uc3VsdG9yaW9JZCkge1xyXG4gICAgY29uc3VsdG9yaW9JZCA9IGNvbnN1bHRvcmlvSWQ/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb25zdWx0b3Jpb0Z1bGxOYW1lOiBjb25zdWx0b3Jpb3NGdWxsTmFtZVtjb25zdWx0b3Jpb0lkXSxcclxuICAgICAgICBwYWdlVGl0bGU6IHBhZ2VUaXRsZXNbY29uc3VsdG9yaW9JZF0sXHJcbiAgICAgICAgZmF2SWNvblJvdXRlOiBmYXZJY29uUm91dGVzW2NvbnN1bHRvcmlvSWRdID8/IFwidGVzdC5wbmdcIixcclxuICAgICAgICB0ZXJtczogdGVybXNbY29uc3VsdG9yaW9JZF0sXHJcbiAgICAgICAgbWFpblBhZ2VMaW5rOiBtYWluUGFnZUxpbmtzW2NvbnN1bHRvcmlvSWRdLFxyXG4gICAgICAgIGxvZ286IGxvZ29zW2NvbnN1bHRvcmlvSWRdLFxyXG4gICAgICAgIHNvbGljaXRhclR1cm5vTWVzc2FnZTogc29saWNpdGFyVHVybm9NZXNzYWdlc1tjb25zdWx0b3Jpb0lkXVxyXG4gICAgfVxyXG59IiwiY29uc3QgREVGQVVMVCA9IHtcclxuICAgIGNvbG9yUHJpbWFyeTogXCIjZTAxMTVmXCIsXHJcbiAgICBjb2xvclNlY29uZGFyeTogXCJibHVlXCIsXHJcbiAgICBjb2xvck5ldXRyYWw6IFwiI2RkZFwiLFxyXG4gICAgY29sb3JFcnJvcjogXCIjYWEwMDAwXCIsXHJcbiAgICBjb2xvckVycm9yMjogXCIjZmZhYWFhXCIsXHJcbiAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInB1cnBsZVwiLCBcInZpb2xldFwiXSxcclxuICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2ZmNjZjY1wiLCBcInBpbmtcIl0sXHJcbiAgICB0dXJuU3RhdHVzQ29sb3JzOiB7XHJcbiAgICAgICAgQ09NUExFVEVEOiBcImdyZWVuXCIsXHJcbiAgICAgICAgQ0FOQ0VMTEVEOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgIEFCU0VOVDogXCJyZWRcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgVEhFTUVTID0gW1xyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIiMwNzM3NjNcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjZjQ0MzM2XCIsXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBcIiNkNmQ5ZWRcIixcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgICAgICBjYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzOiBbXCIjMDczNzYzXCIsIFwiIzgzOWJiMVwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiNhMzAwMDBcIiwgXCIjZGI0YzRjXCJdLFxyXG4gICAgfSwgIFxyXG5cclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMDczNzYzXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI2Y0NDMzNlwiLFxyXG4gICAgICAgIGNvbG9yTmV1dHJhbDogXCIjZDZkOWVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzA3Mzc2M1wiLCBcIiM4MzliYjFcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjYTMwMDAwXCIsIFwiI2RiNGM0Y1wiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzUzOUREOVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIiMxOUI4ODJcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiM1MzlERDlcIiwgXCIjMjk1MkMwXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiIzE5Qjg4MlwiLCBcIiM2NkI4ODJcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIiMzYzY4OWVcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjNmU5MzIyXCIsXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBcIiNkNmQ5ZWRcIixcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgICAgICBjYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzOiBbXCIjM2M2ODllXCIsIFwiI2NkZDdlMVwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiM2ZTkzMjJcIiwgXCIjYzBjZTk0XCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMTIxNDkyZmZcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjMjY5NjdlZmZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMxMjE0OTJmZlwiLCBcIiNjZGQ3ZTFcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjMjY5NjdlZmZcIiwgXCIjYzBjZTk0XCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjMEIyRTVCXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiIzE5Qjg4MlwiLFxyXG4gICAgICAgIGNvbG9yTmV1dHJhbDogXCIjZDZkOWVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzBCMkU1QlwiLCBcIiMxMTRBN0FcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjMTlCODgyXCIsIFwiIzJGRDM5QVwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwidHVycXVvaXNlXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwib3JhbmdlUmVkXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1widHVycXVvaXNlXCIsIFwiY3lhblwiXSxcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbi8vUEFSQSBRVUUgRlVOQ0lPTkVOIExBUyBCT1ggU0hBRE9XUywgTE9TIENPTE9SRVMgREVCRVJJQU4gRVNUQVIgRU4gSEVYQVxyXG5cclxuY29uc3QgY2hyb21hID0gcmVxdWlyZSgnY2hyb21hLWpzJyk7XHJcblxyXG5mdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yKSB7XHJcbiAgICBjb25zdCBjb2xvck9iaiA9IGNocm9tYShjb2xvcik7XHJcbiAgICByZXR1cm4gY29sb3JPYmouaGV4KCk7XHJcbn1cclxuXHJcblRIRU1FUy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xyXG4gICAgVEhFTUVTW2luZGV4XSA9IHtcclxuICAgICAgICAuLi5USEVNRVNbaW5kZXhdLFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogY29sb3JUb0hleChlbGVtLmNvbG9yUHJpbWFyeSksXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IGNvbG9yVG9IZXgoZWxlbS5jb2xvclNlY29uZGFyeSksXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBjb2xvclRvSGV4KGVsZW0uY29sb3JOZXV0cmFsKSxcclxuICAgICAgICBjb2xvckVycm9yOiBjb2xvclRvSGV4KGVsZW0uY29sb3JFcnJvciksXHJcbiAgICAgICAgY29sb3JFcnJvcjI6IGNvbG9yVG9IZXgoZWxlbS5jb2xvckVycm9yMiksXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBjb2xvclRvSGV4KGVsZW0uY29sb3JTdWNjZXNzKSxcclxuICAgICAgICBjYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzOiBbY29sb3JUb0hleChlbGVtLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMF0pLCBjb2xvclRvSGV4KGVsZW0uY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1sxXSldLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW2NvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnNbMF0pLCBjb2xvclRvSGV4KGVsZW0uY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzWzFdKV0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVEhFTUVTOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVSTChjb25zdWx0b3Jpb0lkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb25zdWx0b3Jpb0lkKTtcclxuXHJcbiAgICBzd2l0Y2ggKGNvbnN1bHRvcmlvSWQ/LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICd1cm8nOlxyXG4gICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9jdXVtZHAuZGRucy5uZXQ6OTAwNS92MS9cIjtcclxuICAgICAgICBjYXNlICdpY2MnOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2ljY21kcC5kZG5zLm5ldDo4ODg5L3YxL1wiO1xyXG4gICAgICAgIGNhc2UgJ3Rlc3QnOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdjEvXCI7XHJcbiAgICAgICAgY2FzZSAnbHJvbGRhbic6XHJcbiAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL3NhbHVkZGlnaXRhbC5kZG5zLm5ldDo5MDAxL3YxL1wiOyBcclxuICAgICAgICBjYXNlICdzZXRhJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vaW5zdGl0dXRvc2V0YS5kZG5zLm5ldDo5MDAzL3YxL1wiOyBcclxuICAgICAgICBjYXNlICdjaWMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9jaWNiYWxjYXJjZS5keW5kbnMub3JnOjE3MDAxL3YxL1wiOyBcclxuICAgICAgICBjYXNlICdmYWRlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vZmFkZW1kcC5kZG5zLm5ldDo4MDgxL3YxL1wiOyBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbnN1bHRvcmlvSUQgZGVzY29ub2NpZG86ICR7Y29uc3VsdG9yaW9JZH1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9kZWZhdWx0LXVybC5jb20vdjEvXCI7IC8vIENhbWJpYSBlc3RvIHBvciBsYSBVUkwgcG9yIGRlZmVjdG8gcXVlIG5lY2VzaXRlc1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2VEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZURpYWxvZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuLyogaWNvbjogXCJtZXNzYWdlXCIgOiBcIndhcm5pbmdcIiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldEljb24oXCJcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWZhdWx0T3BlbiA9ICgpID0+IHtcclxuICAgIHJlc2V0KCk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YXJuaW5nT3BlbiA9IChtZXNzYWdlLCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcclxuICAgIHNldFRpdGxlKHRpdGxlID8/IFwiXCIpO1xyXG4gICAgc2V0SWNvbihcIndhcm5pbmdcIik7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVzc2FnZU9wZW4gPSAobWVzc2FnZSwgdGl0bGUpID0+IHtcclxuICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBzZXRUaXRsZSh0aXRsZSA/PyBcIlwiKTtcclxuICAgIHNldEljb24oXCJtZXNzYWdlXCIpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgb3Blbjogb3BlbkNhbGxiYWNrLCBjbG9zZSwgc2V0TWVzc2FnZSwgc2V0VGl0bGUsIHNldEljb24sIHJlc2V0LCBkZWZhdWx0T3BlbiwgbWVzc2FnZU9wZW4sIHdhcm5pbmdPcGVuIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxNZXNzYWdlRGlhbG9nXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2UgfHwgXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvciwgaW50ZW50ZSBudWV2YW1lbnRlLlwifVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZSA9PT0gXCJcIiA/ICBcIkh1Ym8gdW4gcHJvYmxlbWFcIiA6IHRpdGxlfVxyXG4gICAgICAgIGljb249e2ljb24gfHwgXCJ3YXJuaW5nXCJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L01lc3NhZ2VEaWFsb2dDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YUluZm9Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbi8qIGljb246IFwibWVzc2FnZVwiIDogXCJ3YXJuaW5nXCIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YUluZm9Db250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgbWV0YUluZm8gfSkge1xyXG4gICAgY29uc29sZS5sb2cobWV0YUluZm8pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1ldGFJbmZvQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtZXRhSW5mbyB9fT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e21ldGFJbmZvLnBhZ2VUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e3JlcXVpcmUoXCJhc3NldHMvaW1nL2Zhdmljb25zL1wiICsgbWV0YUluZm8uZmF2SWNvblJvdXRlKX0gLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9NZXRhSW5mb0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgdGhlbWU6IGluaXRpYWxUaGVtZSB9KSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShpbml0aWFsVGhlbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiwgaW5pdFVzZXIgfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGluaXRVc2VyID8/IHt9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKHN0eWxlcykge1xyXG4gICAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIHVzZVN0eWxlcyh0aGVtZSk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgdjEuMS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCB2MS45LjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXHJcblxyXG4qIENvZGVkIGJ5IENyZWF0aXZlIFRpbVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgUGFnZUNoYW5nZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanNcIjtcclxuXHJcbmltcG9ydCBcImFzc2V0cy9jc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5jc3M/dj0xLjEuMFwiO1xyXG5pbXBvcnQgVGhlbWVDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IFVzZXJDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRQcm92aWRlclwiO1xyXG5cclxuaW1wb3J0IG5vb2tpZXMsIHsgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGhpZGVMb2FkLCBzaG93TG9hZCB9IGZyb20gXCIuLi91dGlscy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IGdldFBhdGllbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlckF1dGhcIjtcclxuaW1wb3J0IEdMT0JBTF9HRVRfVE9LRU4gZnJvbSBcIi4uL3V0aWxzL3Rva2VuXCI7XHJcbmltcG9ydCBNZXNzYWdlRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0RpYWxvZ3MvTWVzc2FnZURpYWxvZ1wiO1xyXG5pbXBvcnQgTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IGdldE1ldGFJbmZvLCBnZXRUaGVtZSB9IGZyb20gXCIuLi9jb25zdGFudHMvQ09ORklHLmpzXCI7XHJcbmltcG9ydCBNZXRhSW5mb0NvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9NZXRhSW5mb0NvbnRleHRQcm92aWRlci5qc1wiO1xyXG5pbXBvcnQgZXJyb3JMb2cgZnJvbSBcIi4uL3V0aWxzL2RlYnVnLmpzXCI7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAodXJsKSA9PiB7XHJcbiAgc2hvd0xvYWQodXJsKTtcclxufSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcclxuICBoaWRlTG9hZCgpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4ge1xyXG4gIGhpZGVMb2FkKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGBcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5gKTtcclxuICAgIGRvY3VtZW50Lmluc2VydEJlZm9yZShjb21tZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gIH1cclxuICAvLyBHZXRJbml0aWFsUHJvcHMgY29ycmUgdGFudG8gZW4gc2VydmVyIGFsIHByaW5jaXBpbywgY29tbyBlbiBjbGllbnRlIGFsIGNhbWJpYXIgZGUgcGFnaW5hLiBcclxuICAvLyBMYSBsb2dpY2EgcmVxdWVyaWRhIHNvbG8gZXMgcmVxdWVyaWRhIGFsIGNvcnJlciBkZWwgc2VydmVyIGFsIHByaW5jaXBpbywgcG9yIHRhbnRvIG5vIHZhbGlkbyBxdWUgY29ycmEgZGVzZGUgZWwgY2xpZW50ZS5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBcclxuICAgIGxldCB7IGNvbnN1bHRvcmlvSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIFxyXG4gICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eClcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7Y29va2llcywgY29uc3VsdG9yaW9JZCwgcm91dGVyLCBxdWVyeTogcm91dGVyLnF1ZXJ5fSk7ICAgIFxyXG4gICAgXHJcbiAgICAvLyBTZXRlYXIgbyBwZWRpciBpZCBkZSBjb25zdWx0b3Jpb1xyXG4gICAgaWYgKGNvb2tpZXMuY29uc3VsdG9yaW9JZCAmJiBjb25zdWx0b3Jpb0lkICYmIGNvbnN1bHRvcmlvSWQgIT0gY29va2llcy5jb25zdWx0b3Jpb0lkKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGNvb2tpZXMpLmZvckVhY2goKGNvb2tpZU5hbWUpID0+IHtcclxuICAgICAgICBub29raWVzLmRlc3Ryb3koY3R4LCBjb29raWVOYW1lLCB7IHBhdGg6ICcvJyB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKGNvbnN1bHRvcmlvSWQpIHtcclxuICAgICAgLy8gU2V0XHJcbiAgICAgIG5vb2tpZXMuc2V0KGN0eCwgJ2NvbnN1bHRvcmlvSWQnLCBjb25zdWx0b3Jpb0lkLCB7XHJcbiAgICAgICAgbWF4QWdlOiA1MCAqIDM2NSAqIDI0ICogNjAgKiA2MCxcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3VsdG9yaW9JZCA9IGNvb2tpZXMuY29uc3VsdG9yaW9JZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh7Y29va2llc1VwZGF0ZWQ6IG5vb2tpZXMuZ2V0KGN0eCl9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBSZWRpcmlnaXIgZGUgYWRtaW4gc2kgZWwgdXN1YXJpbyBubyBlc3RhIGxvZ3VlYWRvXHJcbiAgICAvLyBpZiAoY29va2llcy5pZCA9PT0gdW5kZWZpbmVkICYmIHJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJhZG1pblwiKSAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgIC8vICAgICBMb2NhdGlvbjogJy9sb2dpbi8nICsgY29uc3VsdG9yaW9JZCxcclxuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbDsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICByZXR1cm4gY3R4LnJlcy5lbmQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBcclxuICAgIC8vIFNldGVhciBzaSBleGlzdGUsIGVsIHVzdWFyaW8gcXVlIHlhIGVzdGEgbG9ndWVhZG9cclxuICAgIGxldCBpbml0VXNlcjtcclxuICAgIGlmIChjb29raWVzLmlkICE9PSB1bmRlZmluZWQgJiYgTnVtYmVyKGNvb2tpZXMubG9naW5UcmllcyA/PyAwKSA8PSAyICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmICFyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwic2VydmVyLWVycm9yXCIpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgdG9rZW4gfSA9IHsgaWQ6IGNvb2tpZXMuaWQsIHRva2VuOiBhd2FpdCBHTE9CQUxfR0VUX1RPS0VOKGN0eCkgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh7IGlkLCBjb25zdWx0b3Jpb0lkLCB0b2tlbiB9KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGF0aWVudFJlc3BvbnNlID0gYXdhaXQgZ2V0UGF0aWVudChpZCwgY29uc3VsdG9yaW9JZCwgdG9rZW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgcGF0aWVudFJlc3BvbnNlIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcGF0aWVudFJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbml0VXNlciA9IHBhdGllbnRSZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcImFkbWluXCIpICYmICFyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwidGVzdGluZ1wiKSkge1xyXG4gICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgICAgIExvY2F0aW9uOiAnL2FkbWluLycgKyBjb25zdWx0b3Jpb0lkICsgXCIvZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgICAvLyBjdHgucmVzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gbm9va2llcy5zZXQoY3R4LCAnbG9naW5UcmllcycsIChOdW1iZXIoY29va2llcy5sb2dpblRyaWVzID8/IDApKSArIDEsIHtcclxuICAgICAgICAvLyAgIG1heEFnZTogNjAsXHJcbiAgICAgICAgLy8gICBwYXRoOiAnLycsXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBpZiAoTnVtYmVyKGNvb2tpZXMubG9naW5UcmllcykgPT09IDIpIHtcclxuICAgICAgICAvLyAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwiaWRcIiwge1xyXG4gICAgICAgIC8vICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gICBub29raWVzLmRlc3Ryb3koY3R4LCBcImRuaVwiLCB7XHJcbiAgICAgICAgLy8gICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwibG9naW5Ucmllc1wiLCB7XHJcbiAgICAgICAgLy8gICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZXJyb3JMb2coXCIlY0VOVFJBTkRPIFBBUEFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbi8nICsgY29uc3VsdG9yaW9JZCArIFwiL3NlcnZlci1lcnJvclwiLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIC8vIGN0eC5yZXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWV0YUluZm9Db250ZXh0UHJvdmlkZXIgbWV0YUluZm89e2dldE1ldGFJbmZvKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXIgdGhlbWU9e2dldFRoZW1lKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICAgIDxVc2VyQ29udGV4dFByb3ZpZGVyIGluaXRVc2VyPXt7IC4uLmluaXRVc2VyLCBjb25zdWx0b3Jpb0lkIH19PlxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1ZT1VSX0tFWV9IRVJFXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDwvTWV0YUluZm9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI7XHJcbmltcG9ydCBMaWJyYXJ5Qm9va3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIjtcclxuaW1wb3J0IExvY2F0aW9uT24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgVW5hcmNoaXZlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCI7XHJcbmltcG9ydCBLZXkgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZwbktleSc7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVG9kYXknO1xyXG5pbXBvcnQgUmVjZXRhcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdCc7XHJcblxyXG5pbXBvcnQgTG9jYWxIb3NwaXRhbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsSG9zcGl0YWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXHJcbiAgICBuYW1lOiBcIkluaWNpb1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhNmI2K3YqSDYp9mE2YLZitin2K/YqVwiLFxyXG4gICAgaWNvbjogRGFzaGJvYXJkLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcclxuICAgIG5hbWU6IFwiTWkgUGVyZmlsXCIsXHJcbiAgICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gICAgaWNvbjogUGVyc29uLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3NvbGljaXRhclR1cm5vXCIsXHJcbiAgICBuYW1lOiBcIlNvbGljaXRhciBUdXJub1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IENhbGVuZGFyLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dlc3Rpb25UdXJub3NcIixcclxuICAgIG5hbWU6IFwiR2VzdGnDs24gZGUgVHVybm9zXCIsXHJcbiAgICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gICAgaWNvbjogQ2FsZW5kYXIsXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZXN0dWRpb3NcIixcclxuICAgIG5hbWU6IFwiRXN0dWRpb3MgUmVhbGl6YWRvc1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IExvY2FsSG9zcGl0YWxJY29uLFxyXG4gICAgcmVxdWllcmVQb3J0YWw6IHRydWUsXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9zb2xpY2l0YXJSZWNldGFcIixcclxuICAvLyAgIG5hbWU6IFwiU29saWNpdGFyIFJlY2V0YVwiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAvLyAgIGljb246IFJlY2V0YXMsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvZ2VzdGlvblJlY2V0YXNcIixcclxuICAvLyAgIG5hbWU6IFwiR2VzdGnDs24gZGUgUmVjZXRhc1wiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAvLyAgIGljb246IFJlY2V0YXMsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvdGFibGUtbGlzdFwiLFxyXG4gIC8vICAgbmFtZTogXCJUYWJsZSBMaXN0XCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItmC2KfYptmF2Kkg2KfZhNis2K/ZiNmEXCIsXHJcbiAgLy8gICBpY29uOiBcImNvbnRlbnRfcGFzdGVcIixcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi90eXBvZ3JhcGh5XCIsXHJcbiAgLy8gICBuYW1lOiBcIlR5cG9ncmFwaHlcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2LfYqNin2LnYqVwiLFxyXG4gIC8vICAgaWNvbjogTGlicmFyeUJvb2tzLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL2ljb25zXCIsXHJcbiAgLy8gICBuYW1lOiBcIkljb25zXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItin2YTYsdmF2YjYslwiLFxyXG4gIC8vICAgaWNvbjogQnViYmxlQ2hhcnQsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvbWFwc1wiLFxyXG4gIC8vICAgbmFtZTogXCJNYXBzXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItiu2LHYp9im2LdcIixcclxuICAvLyAgIGljb246IExvY2F0aW9uT24sXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvbm90aWZpY2F0aW9uc1wiLFxyXG4gIC8vICAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgLy8gICBydGxOYW1lOiBcItil2K7Yt9in2LHYp9iqXCIsXHJcbiAgLy8gICBpY29uOiBOb3RpZmljYXRpb25zLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3Byb2Zlc2lvbmFsZXNcIixcclxuICAvLyAgIG5hbWU6IFwiUHJvZmVzaW9uYWxlc1wiLFxyXG4gIC8vICAgaWNvblR5cGU6IFwic3ZnXCIsXHJcbiAgLy8gICBpY29uOiA8c3ZnIGNsYXNzTmFtZT1cImxpbmtDdXN0b21TVkdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPiA8Zz4gPHBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMEgyNFYyNEgwelwiLz4gPHBhdGggZD1cIk04IDN2Mkg2djRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNFY1aC0yVjNoM2MuNTUyIDAgMSAuNDQ4IDEgMXY1YzAgMi45NzMtMi4xNjIgNS40NC01IDUuOTE3VjE2LjVjMCAxLjkzMyAxLjU2NyAzLjUgMy41IDMuNSAxLjQ5NyAwIDIuNzc1LS45NCAzLjI3NS0yLjI2M0MxNi43MjggMTcuMjcgMTYgMTYuMjIgMTYgMTVjMC0xLjY1NyAxLjM0My0zIDMtM3MzIDEuMzQzIDMgM2MwIDEuMzcxLS45MiAyLjUyNy0yLjE3NiAyLjg4NUMxOS4yMSAyMC4yNTIgMTcuMDU5IDIyIDE0LjUgMjIgMTEuNDYyIDIyIDkgMTkuNTM4IDkgMTYuNXYtMS41ODNDNi4xNjIgMTQuNDQxIDQgMTEuOTczIDQgOVY0YzAtLjU1Mi40NDgtMSAxLTFoM3pcIi8+IDwvZz4gPC9zdmc+LFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2xvZ291dFwiLFxyXG4gICAgbmFtZTogXCJDZXJyYXIgU2VzacOzblwiLFxyXG4gICAgcnRsTmFtZTogXCLYp9mE2KrYt9mI2LEg2YTZhNin2K3Yqtix2KfZgdmK2KlcIixcclxuICAgIGljb246IEtleSxcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJvdXRlcztcclxuIiwiaW1wb3J0IGdldFVSTCBmcm9tIFwiLi4vY29uc3RhbnRzL1VSTFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIGNvbnN0IHIxID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgJ0F1dGgvTG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcInVzZXJOYW1lXCI6IFwiZnJvbnRFbmRUZWFtXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCIyOTYxMzc3MDEyLjE0MDI2Njk4NTRcIlxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByMS5qc29uKCk7IC8vU2kgbm8gaGF5IHRva2VuIGhhY2UgdGhyb3cgZGlyZWN0YW1lbnRlXHJcblxyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuXHJcbi8vIEVsIGJvZHkgc2UgY29udmllcnRlIGEgSlNPTiBwb3IgZGVmZWN0b1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgcmVsYXRpdmVSb3V0ZSwgYm9keSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoY29uc3VsdG9yaW9JZCkgKyByZWxhdGl2ZVJvdXRlLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlLCBib2R5KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufSIsImltcG9ydCBVUkwgZnJvbSBcIi4uL2NvbnN0YW50cy9VUkxcIjtcclxuaW1wb3J0IHsgUE9TVCB9IGZyb20gXCIuL0ZFVENILkpTXCI7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuaW1wb3J0IHsgR0VUIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dJbih0aXBvZG9jLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIGxldCBsb2dpblJlc3BvbnNlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdWx0b3JpbyBJRDogXCIgKyBjb25zdWx0b3Jpb0lkKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKGNvbnN1bHRvcmlvSWQpOyAvL1NpIG5vIGhheSB0b2tlbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQT1NUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCBcInBhdGllbnRzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpcG9kb2M6IE51bWJlcih0aXBvZG9jKSxcclxuICAgICAgICAgICAgICAgIGRuaTogTnVtYmVyKHVzZXJuYW1lKSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgLy9TaSBmYWxsYSBlbCBsb2dpbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvci4gSW50ZW50ZSBudWV2YW1lbnRlLlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWdpc3RyYWRvID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlN1cyBkYXRvcyBlc3TDoW4gY2FyZ2Fkb3MgcGVybyBubyBzZSBlbmN1ZW50cmEgcmVnaXN0cmFkby4gSW5ncmVzZSBhIFxcXCJyZWdpc3RyYXJzZVxcXCIuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb21icmUgZGUgdXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9naW5SZXNwb25zZSA9IHsgbG9nZ2VkSW46IHRydWUsIGRhdGEsIHRva2VuIH07XHJcblxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGxvZ2luUmVzcG9uc2UgPSB7IGxvZ2dlZEluOiBmYWxzZSwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUuZGlyKHtsb2dpblJlc3BvbnNlfSk7XHJcblxyXG4gICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF0aWVudChpZCwgY29uc3VsdG9yaW9JZCwgdG9rZW4pIHtcclxuICAgIGxldCBwYXRpZW50UmVzcG9uc2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByMyA9IGF3YWl0IEdFVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgXCJwYXRpZW50cy9cIiArIGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHIzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcjMuanNvbigpIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBwYXRpZW50UmVzcG9uc2UgPSB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTsgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcGF0aWVudFJlc3BvbnNlID0geyBzdWNjZXNzOiBmYWxzZSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGllbnRSZXNwb25zZTtcclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yTG9nKGVycm9yKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5sb2coYFxceDFiWzMxbSR7ZXJyb3J9XFx4MWJbMG1gKTtcclxufSIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkKHVybCkge1xyXG4gICAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFBhZ2VDaGFuZ2UgcGF0aD17dXJsfSAvPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xyXG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxufSIsImltcG9ydCBub29raWVzLCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vc2VydmljZXMvRkVUQ0guSlMnO1xyXG5cclxuLy8gU2kgZWwgdG9rZW4gZXN0YSBzZXRlYWRvLCBsbyBkZXZ1ZWx2ZSBkZXBlbmRpZW5kbyBlbCBjb250ZXh0byAoRW4gc2Vzc2lvbiBkZXNkZSBlbCBjbGllbnRlLCBlbiBjb29raWVzIGRlc2RlIGVsIHNlcnZpZG9yLilcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR0xPQkFMX0dFVF9UT0tFTihjdHgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy8gQ2xpZW50LXNpZGUtb25seSBjb2RlXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29va2llcy50b2tlbjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFNlcnZlci1zaWRlLW9ubHkgY29kZVxyXG4gICAgICAgIC8vIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oY29va2llcy5jb25zdWx0b3Jpb0lkKTtcclxuICAgICAgICAgICAgbm9va2llcy5zZXQoY3R4LCAndG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlCb29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxIb3NwaXRhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WcG5LZXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hyb21hLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=