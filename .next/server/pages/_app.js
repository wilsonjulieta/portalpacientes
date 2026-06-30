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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\Card\\Card.js";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\Card\\CardBody.js";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\Card\\CardHeader.js";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\CustomButtons\\Button.js";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\Dialogs\\MessageDialog.js";







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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\components\\PageChange\\PageChange.js";

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
  "fade": undefined,
  "ngonzalez": undefined
};
const solicitarTurnoMessages = {
  "icc": "Los turnos que se obtienen son sólo para consulta y electrocardiograma, para otros estudios comunicarse telefónicamente.",
  "uro": "Los turnos que se obtienen son sólo para consulta, para otros estudios comunicarse telefónicamente.",
  "comdp": "",
  "lroldan": "",
  "test": "Mensaje de solicitar turno para test",
  "seta": "",
  "cic": "",
  "fade": "",
  "ngonzalez": "Los turnos que se obtienen son sólo para consulta, para otros estudios comunicarse telefónicamente."
};
const consultoriosNameToId = {
  "icc": 1,
  "uro": 5,
  "comdp": 0,
  "lroldan": 2,
  "test": 0,
  "seta": 3,
  "cic": "4",
  "fade": "6",
  "ngonzalez": "7"
};
const consultoriosFullName = {
  "icc": "Instituto Clínico Cardiológico",
  "uro": "Unidad Urológica Mar del Plata",
  "comdp": "Centro Oftalmológico Mar del Plata",
  "lroldan": "Consultorio Psiquiatría",
  "test": "Instituto test",
  "seta": "Instituto SETA",
  "cic": "Centro Integral de Salud",
  "fade": "Centro Psicológico Psiquiátrico",
  "ngonzalez": "Consultorio Oftalmológico"
};
const pageTitles = {
  "icc": "Portal Pacientes ICC",
  "uro": "Portal Pacientes",
  "comdp": "Portal Pacientes",
  "lroldan": "Portal Pacientes",
  "test": "Portal De Testing",
  "seta": "Portal Pacientes",
  "cic": "Portal Pacientes",
  "fade": "Portal Pacientes",
  "ngonzalez": "Portal Pacientes"
};
const favIconRoutes = {
  "icc": "ICC.ico",
  "uro": "test.png",
  "comdp": "test.png",
  "lroldan": "test.png",
  "test": "test.png",
  "seta": "test.png",
  "cic": "test.png",
  "fade": "test.png",
  "ngonzalez": "test.png"
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
  "fade": "",
  "ngonzalez": ""
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
  "ngonzalez": `Términos y Condiciones de Uso
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
  "test": `Términos y Condiciones de Uso
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
    Si tiene alguna pregunta sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros en info@thisys.net.ar.`
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
  colorSecondary: "#7b99ebff",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#073763", "#839bb1"],
  cardHeaderSecondaryGradientColors: ["#7b99ebff", "#dedcf3ff"]
}), // //TODO: REMOVE THEME, ONLY FOR TESTING
// {
//     ...DEFAULT,
//     colorPrimary: "yellow",
//     colorSecondary: "purple",
//     colorNeutral: "green",
//     colorSuccess: "red",
//     cardHeaderPrimaryGradientColors: ["blue", "gold"],
//     cardHeaderSecondaryGradientColors: ["purple", "brown"],
// },
_objectSpread(_objectSpread({}, DEFAULT), {}, {
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
  colorPrimary: "#636160ff",
  colorSecondary: "#cc4015ff",
  colorNeutral: "#ede2d6ff",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#cc4015ff", "#ddaf83ff"],
  cardHeaderSecondaryGradientColors: ["#636160ff", "#949493ff"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#0B2E5B",
  colorSecondary: "#19B882",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#0B2E5B", "#114A7A"],
  cardHeaderSecondaryGradientColors: ["#19B882", "#2FD39A"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#0B2E5B",
  colorSecondary: "#b98904ff",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#0B2E5B", "#114A7A"],
  cardHeaderSecondaryGradientColors: ["#b98904ff", "#e4a909ff"]
}), _objectSpread(_objectSpread({}, DEFAULT), {}, {
  colorPrimary: "#917b43ff",
  colorSecondary: "#c2aa85ff",
  colorNeutral: "#d6d9ed",
  colorSuccess: "green",
  cardHeaderPrimaryGradientColors: ["#917b43ff", "#dac48dff"],
  cardHeaderSecondaryGradientColors: ["#c2aa85ff", "#f0d2a5ff"]
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
      return "https://fademdp.ddns.net:9001/v1/";

    case 'ngonzalez':
      return "https://saluddigital.ddns.net:9009/v1/";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\context\\MessageDialogContextProvider.js";


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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\context\\MetaInfoContextProvider.js";


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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\context\\ThemeContextProvider.js";

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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\context\\UserContextProvider.js";

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
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/debug.js */ "./utils/debug.js");


var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\pages\\_app.js";

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
        var _initUser, _initUser2;

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

        if (cookies.archivos_habilitado !== undefined && ((_initUser = initUser) === null || _initUser === void 0 ? void 0 : _initUser.archivos_habilitado) === undefined && ((_initUser2 = initUser) === null || _initUser2 === void 0 ? void 0 : _initUser2.enviar_archivos_habilitado) === undefined) {
          initUser = _objectSpread(_objectSpread({}, initUser), {}, {
            archivos_habilitado: cookies.archivos_habilitado === "1"
          });
        }

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
                lineNumber: 195,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
                src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_MessageDialogContextProvider__WEBPACK_IMPORTED_MODULE_15__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
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
}, {
  path: "/archivos",
  name: "Enviar Archivos",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_10___default.a,
  requiereEnvioArchivos: true,
  layout: "/admin"
}, {
  path: "/recetas",
  name: "Mis Recetas",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_9___default.a,
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
/*! exports provided: getToken, GET, DELETE, POST, POST_FORMDATA, PUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_FORMDATA", function() { return POST_FORMDATA; });
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

async function POST_FORMDATA(consultorioId, token, relativeRoute, formData) {
    const response = await fetch(Object(_constants_URL__WEBPACK_IMPORTED_MODULE_0__["default"])(consultorioId) + relativeRoute, {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${token}`,
        },
        body: formData
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

var _jsxFileName = "C:\\Users\\Public\\SOFTWARE\\portalpacientes\\utils\\loading.js";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvZmF2aWNvbnMvSUNDLmljbyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2Zhdmljb25zL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvaWNjbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9scm9sZGFubG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9zZXRhbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy91cm9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZEJvZHlTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZFN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZUNoYW5nZS9QYWdlQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL2NvbnN0YW50cy9DT05GSUcuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RIRU1FUy5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvVVJMLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvTWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L01ldGFJbmZvQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVGhlbWVDb250ZXh0UHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9Vc2VyQ29udGV4dFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0ZFVENILkpTIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3VzZXJBdXRoLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0J1YmJsZUNoYXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhbEhvc3BpdGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0UHJvYmxlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9VbmFyY2hpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVnBuS2V5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hyb21hLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhleFRvUmdiIiwiaW5wdXQiLCJyZXBsYWNlIiwiaGV4UmVnZXgiLCJ0ZXN0IiwibGVuZ3RoIiwiRXJyb3IiLCJmaXJzdCIsInNlY29uZCIsImxhc3QiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlSW50IiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJkZWZhdWx0Rm9udCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInByaW1hcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImRhbmdlckNvbG9yIiwic3VjY2Vzc0NvbG9yIiwiaW5mb0NvbG9yIiwicm9zZUNvbG9yIiwiZ3JheUNvbG9yIiwiYmxhY2tDb2xvciIsIndoaXRlQ29sb3IiLCJib3hTaGFkb3ciLCJwcmltYXJ5Qm94U2hhZG93IiwiaW5mb0JveFNoYWRvdyIsInN1Y2Nlc3NCb3hTaGFkb3ciLCJ3YXJuaW5nQm94U2hhZG93IiwiZGFuZ2VyQm94U2hhZG93Iiwicm9zZUJveFNoYWRvdyIsImRhcmtCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsImJhY2tncm91bmQiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJkYXJrQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwibWFyZ2luIiwicGFkZGluZ1RvcCIsImJvcmRlclRvcCIsImhlaWdodCIsImNhcmRIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2FyZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiY29sb3IiLCJkZWZhdWx0Qm94U2hhZG93IiwiYm9yZGVyIiwidGl0bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNhcmRUaXRsZSIsImNhcmRTdWJ0aXRsZSIsImNhcmRMaW5rIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsInZlcnRpY2FsQWxpZ24iLCJ0b3VjaEFjdGlvbiIsImN1cnNvciIsInRvcCIsInRyYW5zZm9ybSIsImxlZnQiLCJ3aGl0ZSIsInJvc2UiLCJwcmltYXJ5IiwicHJvcHMiLCJjb2xvclByaW1hcnkiLCJwcmltYXJ5T3V0bGluZWQiLCJjb2xvck5ldXRyYWwiLCJzZWNvbmRhcnkiLCJjb2xvclNlY29uZGFyeSIsInNlY29uZGFyeU91dGxpbmVkIiwicHJpbWFyeVNpbXBsZSIsImZpbHRlciIsInNlY29uZGFyeVNpbXBsZSIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsInNpbXBsZSIsInRyYW5zcGFyZW50IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImxnIiwic20iLCJyb3VuZCIsImJsb2NrIiwibGluayIsImp1c3RJY29uIiwiY2FyZEJvZHlTdHlsZSIsImNhcmRCb2R5IiwicGFkZGluZ0JvdHRvbSIsImZsZXgiLCJXZWJraXRCb3hGbGV4IiwiY2FyZEJvZHlQbGFpbiIsImNhcmRCb2R5UHJvZmlsZSIsImNhcmRIZWFkZXJTdHlsZSIsInRoZW1lIiwiYm9yZGVyQm90dG9tIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJjYXJkSGVhZGVyUGxhaW4iLCJjYXJkSGVhZGVyU3RhdHMiLCJjYXJkSGVhZGVySWNvbiIsImNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnMiLCJzZWNvbmRhcnlDYXJkSGVhZGVyIiwiY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzIiwiZXJyb3JDYXJkSGVhZGVyIiwiY29sb3JFcnJvciIsImNvbG9yRXJyb3IyIiwiY2FyZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIndvcmRXcmFwIiwiY2FyZFBsYWluIiwiY2FyZFByb2ZpbGUiLCJjYXJkQ2hhcnQiLCJDYXJkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBsYWluIiwicHJvZmlsZSIsImNoYXJ0IiwicmVzdCIsImNhcmRDbGFzc2VzIiwiY2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEJvZHkiLCJjYXJkQm9keUNsYXNzZXMiLCJDYXJkSGVhZGVyIiwidXNlVGhlbWUiLCJzdGF0cyIsImljb24iLCJjYXJkSGVhZGVyQ2xhc3NlcyIsIm9uZU9mIiwiUmVndWxhckJ1dHRvbiIsInNpemUiLCJtdWlDbGFzc2VzIiwiYnRuQ2xhc3NlcyIsInJvb3QiLCJvYmplY3QiLCJNZXNzYWdlRGlhbG9nIiwib3BlbiIsInNldE9wZW4iLCJtZXNzYWdlIiwiaGFuZGxlS2V5cyIsImV2ZW50Iiwia2V5IiwicHJvZ3Jlc3MiLCJ3cmFwcGVyRGl2IiwibWF4V2lkdGgiLCJpY29uV3JhcHBlciIsImdldE5vbWJyZSIsInBhdGgiLCJyb3V0ZXMiLCJkYXNoYm9hcmRSb3V0ZXMiLCJyb3V0ZSIsImluY2x1ZGVzIiwibmFtZSIsIlBhZ2VDaGFuZ2UiLCJsb2dvcyIsImljY2xvZ28iLCJscm9sZGFubG9nbyIsInNldGFsb2dvIiwic29saWNpdGFyVHVybm9NZXNzYWdlcyIsImNvbnN1bHRvcmlvc05hbWVUb0lkIiwiY29uc3VsdG9yaW9zRnVsbE5hbWUiLCJwYWdlVGl0bGVzIiwiZmF2SWNvblJvdXRlcyIsIm1haW5QYWdlTGlua3MiLCJ0ZXJtcyIsImdldFRoZW1lIiwiY29uc3VsdG9yaW9JZCIsIlRIRU1FUyIsImdldE1ldGFJbmZvIiwidG9Mb3dlckNhc2UiLCJjb25zdWx0b3Jpb0Z1bGxOYW1lIiwicGFnZVRpdGxlIiwiZmF2SWNvblJvdXRlIiwibWFpblBhZ2VMaW5rIiwibG9nbyIsInNvbGljaXRhclR1cm5vTWVzc2FnZSIsIkRFRkFVTFQiLCJjb2xvclN1Y2Nlc3MiLCJ0dXJuU3RhdHVzQ29sb3JzIiwiQ09NUExFVEVEIiwiQ0FOQ0VMTEVEIiwiQUJTRU5UIiwiY2hyb21hIiwicmVxdWlyZSIsImNvbG9yVG9IZXgiLCJjb2xvck9iaiIsImhleCIsImZvckVhY2giLCJlbGVtIiwiaW5kZXgiLCJnZXRVUkwiLCJjb25zb2xlIiwibG9nIiwid2FybiIsIk1lc3NhZ2VEaWFsb2dDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1lc3NhZ2VEaWFsb2dDb250ZXh0UHJvdmlkZXIiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJzZXRUaXRsZSIsInNldEljb24iLCJyZXNldCIsImRlZmF1bHRPcGVuIiwib3BlbkNhbGxiYWNrIiwiY2xvc2UiLCJ3YXJuaW5nT3BlbiIsIm1lc3NhZ2VPcGVuIiwiTWV0YUluZm9Db250ZXh0IiwiTWV0YUluZm9Db250ZXh0UHJvdmlkZXIiLCJtZXRhSW5mbyIsIlRoZW1lQ29udGV4dCIsIlRoZW1lQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFRoZW1lIiwic2V0VGhlbWUiLCJVc2VyQ29udGV4dCIsIlVzZXJDb250ZXh0UHJvdmlkZXIiLCJpbml0VXNlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlQ29udGV4dCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwic2hvd0xvYWQiLCJoaWRlTG9hZCIsIk15QXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21tZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnRFbGVtZW50IiwiY3R4IiwicXVlcnkiLCJjb29raWVzIiwibm9va2llcyIsImdldCIsIk9iamVjdCIsImtleXMiLCJjb29raWVOYW1lIiwiZGVzdHJveSIsInNldCIsIm1heEFnZSIsImNvb2tpZXNVcGRhdGVkIiwiaWQiLCJOdW1iZXIiLCJsb2dpblRyaWVzIiwiYXNQYXRoIiwidG9rZW4iLCJHTE9CQUxfR0VUX1RPS0VOIiwicGF0aWVudFJlc3BvbnNlIiwiZ2V0UGF0aWVudCIsImRhdGEiLCJhcmNoaXZvc19oYWJpbGl0YWRvIiwiZW52aWFyX2FyY2hpdm9zX2hhYmlsaXRhZG8iLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImVycm9yIiwiTGF5b3V0IiwibGF5b3V0IiwicnRsTmFtZSIsIkRhc2hib2FyZCIsIlBlcnNvbiIsIkNhbGVuZGFyIiwiTG9jYWxIb3NwaXRhbEljb24iLCJyZXF1aWVyZVBvcnRhbCIsInJlcXVpZXJlRW52aW9BcmNoaXZvcyIsIlJlY2V0YXMiLCJLZXkiLCJsb2dJbiIsInRpcG9kb2MiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9naW5SZXNwb25zZSIsImdldFRva2VuIiwicmVzcG9uc2UiLCJQT1NUIiwiZG5pIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIiwicmVnaXN0cmFkbyIsImxvZ2dlZEluIiwiZXJyIiwiZGlyIiwicjMiLCJHRVQiLCJlcnJvckxvZyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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Ozs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsInZhciBtYXAgPSB7XG5cdFwiLi9JQ0MuaWNvXCI6IFwiLi9hc3NldHMvaW1nL2Zhdmljb25zL0lDQy5pY29cIixcblx0XCIuL3Rlc3QucG5nXCI6IFwiLi9hc3NldHMvaW1nL2Zhdmljb25zL3Rlc3QucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2ltZy9mYXZpY29ucyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3ZuZC5taWNyb3NvZnQuaWNvbjtiYXNlNjQsQUFBQkFBRUFFQkFBQUFFQUlBQm9CQUFBRmdBQUFDZ0FBQUFRQUFBQUlBQUFBQUVBSUFBQUFBQUFRQVFBQUJNTEFBQVRDd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlpKUUFrV1NVQWIxc2xBSVpWSmhFRkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRmtsQUVGWkpRQ2NXaVVBdUYwa0FJQkpLRXN6Smk3bEpRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBV1NVQVRWa2xBTE5aSlFDQ1d5VUFRZ0FBQUFBQUFBQUFKQzd3dXlNdTlNb0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFXU1VBZFZrbEFObFpKUUJGQUFBQUFBQUFBQUFBQUFBQUlDLy9mQ1F1OEg0a0x1N1pKQzd1WUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVdTVUFvVmtsQU05WkpRQVNBQUFBQUFBQUFBQUFBQUFBSWk3NVdTUXU3YmtBQUFBQUpDN3VUU1F1N3Y4a0x1NVBBQUFBQUFBQUFBQUFBQUFBV1NVQWRWa2xBUDlaSlFBWUFBQUFBQUFBQUFBQUFBQUFJaTcyRGlRdTdlWWtMdTR4QUFBQUFBQUFBQUFrTHU2S0pDN3UvQ1F1N2g4QUFBQUFXU1VBTDFrbEFQMVpKUUN0QUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1F1N21Na0x1NmFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDUXU3cW9rTHU3VEpDN3VDbGtsQUloWkpRRC9XU1VBdmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFrTHU2ckpDN3VNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtMdTQxSkM3dS95UXU3bVZaSlFDWldTVUEvMWtsQVAxWkpRQnZBQUFBQUFBQUFBQUFBQUFBSXk3eHNDUXU3aEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFKQzd1SVNRdTd2OGtMdTZtV1NVQVZGa2xBUDlaSlFEL1dTVUEvMW9sQUx0WEpRWndLUzNZWUNNdTgra2tMdTRVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1F1N2pNa0x1Ny9KQzd1czFrbEFBUlpKUUNiV1NVQS8xa2xBUDlhSlFEL1dTVUU3aTRzdzVBaUx2Yi9KQzd1bXlRdTdnVUFBQUFBQUFBQUFDUXU3Z3NrTHU2cEpDN3UveVF1N3FrQUFBQUFBQUFBQUZrbEFIQlpKUURJV1NVQTMxd2xBTEE3S29sQ0lTNzcveVF1N3Y4a0x1N0dKQzd1V1NRdTdtVWtMdTdWSkM3dS95UXU3djhrTHU1dEFBQUFBQUFBQUFBQUFBQUFBQUFBQUZrbEFBVUFBQUFBQUFBQUFDRXUrYU1rTHU3L0pDN3UveVF1N3Y4a0x1Ny9KQzd1L3lRdTd2OGtMdTdISkM3dURRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWpMdlFLSkM3dXZpUXU3djhrTHU3L0pDN3UveVF1N3Y4a0x1N0RKQzd1RFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtMdTVWSkM3dW1TUXU3cDBrTHU1ZEpDN3VDQUFBQUFBQUFBQUEvLzhBQi84UEFBRDhEd0FBOE04QUFPT0hBQURISXdEL2pqRUFlaDU0QUFBZWVBN1hEbmdBQUFCNEFBQUFNQUFBd0FBQUFQWUFBUC8rQVFBQS80T2tLdz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVzdC0wZGQ2Yzg5ZTk0NGNmNWIwYWVhMzEyYjE2NGVhYzEzNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaWNjbG9nby04YWY4ZjBiMTYxMjE3NGE4NWMzOTY5M2U4ZjE0NWIyZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbHJvbGRhbmxvZ28tNTQwZjI3OGJkNDcxOGM4NWMzNjE4YTA3MWQyMWVmMjQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NldGFsb2dvLTE1YmJkMzM1YmE2YjlmMzQyODliN2Y0MTBjZjU4YmJjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy91cm9sb2dvLWJhYWQ0ZDJhYmRkMmJmOGVhOWUwNmI3ZGFiOTFmN2NjLnBuZ1wiOyIsIi8qIVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiAqIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgdjEuMS4wIGJhc2VkIG9uIE1hdGVyaWFsIERhc2hib2FyZCBSZWFjdCB2MS45LjBcclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICogUHJvZHVjdCBQYWdlOiBodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkXHJcbiAqIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cDovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuICovXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gLy8gRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIGhleCBjb2xvciB0byByZ2IgY29sb3JcclxuLy8gLy8gLy8gRXhhbXBsZTogaW5wdXQgPSAjOWMyN2IwID0+IG91dHB1dCA9IDE1NiwgMzksIDE3NlxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9IDljMjdiMCA9PiBvdXRwdXQgPSAxNTYsIDM5LCAxNzZcclxuLy8gLy8gLy8gRXhhbXBsZTogaW5wdXQgPSAjOTk5ID0+IG91dHB1dCA9IDE1MywgMTUzLCAxNTNcclxuLy8gLy8gLy8gRXhhbXBsZTogaW5wdXQgPSA5OTkgPT4gb3V0cHV0ID0gMTUzLCAxNTMsIDE1M1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5jb25zdCBoZXhUb1JnYiA9IChpbnB1dCkgPT4ge1xyXG4gIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgbGV0IGhleFJlZ2V4ID0gL1swLTlBLUZhLWZdL2c7XHJcbiAgaWYgKCFoZXhSZWdleC50ZXN0KGlucHV0KSB8fCAoaW5wdXQubGVuZ3RoICE9PSAzICYmIGlucHV0Lmxlbmd0aCAhPT0gNikpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcImlucHV0IGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvci5cIik7XHJcbiAgfVxyXG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDMpIHtcclxuICAgIGxldCBmaXJzdCA9IGlucHV0WzBdO1xyXG4gICAgbGV0IHNlY29uZCA9IGlucHV0WzFdO1xyXG4gICAgbGV0IGxhc3QgPSBpbnB1dFsyXTtcclxuICAgIGlucHV0ID0gZmlyc3QgKyBmaXJzdCArIHNlY29uZCArIHNlY29uZCArIGxhc3QgKyBsYXN0O1xyXG4gIH1cclxuICBpbnB1dCA9IGlucHV0LnRvVXBwZXJDYXNlKCk7XHJcbiAgbGV0IGZpcnN0ID0gaW5wdXRbMF0gKyBpbnB1dFsxXTtcclxuICBsZXQgc2Vjb25kID0gaW5wdXRbMl0gKyBpbnB1dFszXTtcclxuICBsZXQgbGFzdCA9IGlucHV0WzRdICsgaW5wdXRbNV07XHJcbiAgcmV0dXJuIChcclxuICAgIHBhcnNlSW50KGZpcnN0LCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KHNlY29uZCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChsYXN0LCAxNilcclxuICApO1xyXG59O1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIC8vIC8vIFZhcmlhYmxlcyAtIFN0eWxlcyB0aGF0IGFyZSB1c2VkIG9uIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50XHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXHJcbiAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRGb250ID0ge1xyXG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiLFxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUNvbG9yID0gW1wiIzljMjdiMFwiLCBcIiNhYjQ3YmNcIiwgXCIjOGUyNGFhXCIsIFwiI2FmMmNjNVwiXTtcclxuY29uc3Qgd2FybmluZ0NvbG9yID0gW1wiI2ZmOTgwMFwiLCBcIiNmZmE3MjZcIiwgXCIjZmI4YzAwXCIsIFwiI2ZmYTIxYVwiXTtcclxuY29uc3QgZGFuZ2VyQ29sb3IgPSBbXCIjZjQ0MzM2XCIsIFwiI2VmNTM1MFwiLCBcIiNlNTM5MzVcIiwgXCIjZjU1YTRlXCJdO1xyXG5jb25zdCBzdWNjZXNzQ29sb3IgPSBbXCIjNGNhZjUwXCIsIFwiIzY2YmI2YVwiLCBcIiM0M2EwNDdcIiwgXCIjNWNiODYwXCJdO1xyXG5jb25zdCBpbmZvQ29sb3IgPSBbXCIjMDBhY2MxXCIsIFwiIzI2YzZkYVwiLCBcIiMwMGFjYzFcIiwgXCIjMDBkM2VlXCJdO1xyXG5jb25zdCByb3NlQ29sb3IgPSBbXCIjZTkxZTYzXCIsIFwiI2VjNDA3YVwiLCBcIiNkODFiNjBcIiwgXCIjZWIzNTczXCJdO1xyXG5jb25zdCBncmF5Q29sb3IgPSBbXHJcbiAgXCIjOTk5XCIsXHJcbiAgXCIjNzc3XCIsXHJcbiAgXCIjM0M0ODU4XCIsXHJcbiAgXCIjQUFBQUFBXCIsXHJcbiAgXCIjRDJEMkQyXCIsXHJcbiAgXCIjREREXCIsXHJcbiAgXCIjYjRiNGI0XCIsXHJcbiAgXCIjNTU1NTU1XCIsXHJcbiAgXCIjMzMzXCIsXHJcbiAgXCIjYTlhZmJiXCIsXHJcbiAgXCIjZWVlXCIsXHJcbiAgXCIjZTdlN2U3XCIsXHJcbiAgXCIjMjEyMTIxXCIsXHJcbiAgXCIjMjYzMjM4XCIsXHJcbl07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBcIiMwMDBcIjtcclxuY29uc3Qgd2hpdGVDb2xvciA9IFwiI0ZGRlwiO1xyXG5cclxuY29uc3QgYm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC40MiksIDAgNHB4IDI1cHggMHB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4yKVwiLFxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCBzdWNjZXNzQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3Qgcm9zZUJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcblxyXG5jb25zdCBkYXJrQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzEyXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcblxyXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgd2FybmluZ0NvbG9yWzFdICsgXCIsIFwiICsgd2FybmluZ0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ud2FybmluZ0JveFNoYWRvdyxcclxufTtcclxuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHN1Y2Nlc3NDb2xvclsxXSArIFwiLCBcIiArIHN1Y2Nlc3NDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IGRhbmdlckNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGRhbmdlckNvbG9yWzFdICsgXCIsIFwiICsgZGFuZ2VyQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5kYW5nZXJCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IGluZm9DYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBpbmZvQ29sb3JbMV0gKyBcIiwgXCIgKyBpbmZvQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5pbmZvQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJpbWFyeUNvbG9yWzFdICsgXCIsIFwiICsgcHJpbWFyeUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucHJpbWFyeUJveFNoYWRvdyxcclxufTtcclxuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHJvc2VDb2xvclsxXSArIFwiLCBcIiArIHJvc2VDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnJvc2VCb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IGRhcmtDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBncmF5Q29sb3JbMTNdICsgXCIsIFwiICsgZ3JheUNvbG9yWzEyXSArIFwiKVwiLFxyXG4gIC4uLmRhcmtCb3hTaGFkb3csXHJcbn07XHJcblxyXG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcclxuICBtYXJnaW46IFwiMCAyMHB4IDEwcHhcIixcclxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcclxuICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiICsgZ3JheUNvbG9yWzEwXSxcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIC4uLmRlZmF1bHRGb250LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEhlYWRlciA9IHtcclxuICBtYXJnaW46IFwiLTIwcHggMTVweCAwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTVweFwiLFxyXG59O1xyXG5cclxuY29uc3QgY2FyZCA9IHtcclxuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcclxuICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuMTQpXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIGNvbG9yOiBcInJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjg3KVwiLFxyXG4gIGJhY2tncm91bmQ6IHdoaXRlQ29sb3IsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Qm94U2hhZG93ID0ge1xyXG4gIGJvcmRlcjogXCIwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4yKVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiLFxyXG59O1xyXG5cclxuY29uc3QgdGl0bGUgPSB7XHJcbiAgY29sb3I6IGdyYXlDb2xvclsyXSxcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgbWluSGVpZ2h0OiBcIjMycHhcIixcclxuICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxyXG4gIFwiJiBzbWFsbFwiOiB7XHJcbiAgICBjb2xvcjogZ3JheUNvbG9yWzFdLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJkVGl0bGUgPSB7XHJcbiAgLi4udGl0bGUsXHJcbiAgbWFyZ2luVG9wOiBcIjBcIixcclxuICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXHJcbiAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICBcIiYgYVwiOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIG1hcmdpblRvcDogXCIuNjI1cmVtXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMC43NXJlbVwiLFxyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2FyZFN1YnRpdGxlID0ge1xyXG4gIG1hcmdpblRvcDogXCItLjM3NXJlbVwiLFxyXG59O1xyXG5cclxuY29uc3QgY2FyZExpbmsgPSB7XHJcbiAgXCImICsgJGNhcmRMaW5rXCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGhleFRvUmdiLFxyXG4gIC8vdmFyaWFibGVzXHJcbiAgZHJhd2VyV2lkdGgsXHJcbiAgdHJhbnNpdGlvbixcclxuICBjb250YWluZXIsXHJcbiAgYm94U2hhZG93LFxyXG4gIGNhcmQsXHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHJvc2VDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIHByaW1hcnlCb3hTaGFkb3csXHJcbiAgaW5mb0JveFNoYWRvdyxcclxuICBzdWNjZXNzQm94U2hhZG93LFxyXG4gIHdhcm5pbmdCb3hTaGFkb3csXHJcbiAgZGFuZ2VyQm94U2hhZG93LFxyXG4gIHJvc2VCb3hTaGFkb3csXHJcbiAgZGFya0JveFNoYWRvdyxcclxuICB3YXJuaW5nQ2FyZEhlYWRlcixcclxuICBzdWNjZXNzQ2FyZEhlYWRlcixcclxuICBkYW5nZXJDYXJkSGVhZGVyLFxyXG4gIGluZm9DYXJkSGVhZGVyLFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxyXG4gIHJvc2VDYXJkSGVhZGVyLFxyXG4gIGRhcmtDYXJkSGVhZGVyLFxyXG4gIGNhcmRBY3Rpb25zLFxyXG4gIGNhcmRIZWFkZXIsXHJcbiAgZGVmYXVsdEJveFNoYWRvdyxcclxuICB0aXRsZSxcclxuICBjYXJkVGl0bGUsXHJcbiAgY2FyZFN1YnRpdGxlLFxyXG4gIGNhcmRMaW5rLFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGdyYXlDb2xvcixcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICBoZXhUb1JnYixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBidXR0b246IHtcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBtaW5XaWR0aDogXCJhdXRvXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjEycHggMzBweFwiLFxyXG4gICAgbWFyZ2luOiBcIi4zMTI1cmVtIDFweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcclxuICAgIHdpbGxDaGFuZ2U6IFwiYm94LXNoYWRvdywgdHJhbnNmb3JtXCIsXHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICB0b3VjaEFjdGlvbjogXCJtYW5pcHVsYXRpb25cIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwgJi5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCItMWVtXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCItMWVtXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcclxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIH0sXHJcbiAgICBcIiYkanVzdEljb25cIjoge1xyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgbGVmdDogXCIwcHhcIixcclxuICAgICAgICB0b3A6IFwiMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQxcHhcIixcclxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2hpdGU6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcm9zZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzKSA9PiBwcm9wcy5jb2xvclByaW1hcnksXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgICAgYm94U2hhZG93OiAocHJvcHMpID0+XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlPdXRsaW5lZDoge1xyXG4gICAgYm9yZGVyOiAocHJvcHMpID0+IFwiMXB4IHNvbGlkIFwiICsgcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yTmV1dHJhbCxcclxuICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclByaW1hcnkpICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JQcmltYXJ5KSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yUHJpbWFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY29uZGFyeU91dGxpbmVkOiB7XHJcbiAgICBib3JkZXI6IChwcm9wcykgPT4gXCIxcHggc29saWQgXCIgKyBwcm9wcy5jb2xvclNlY29uZGFyeSxcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yTmV1dHJhbCxcclxuICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yU2Vjb25kYXJ5KSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY29sb3JTZWNvbmRhcnkpICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvclNlY29uZGFyeSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpbWFyeVNpbXBsZToge1xyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yUHJpbWFyeSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuNXNcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JQcmltYXJ5LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgZmlsdGVyOiBcImJyaWdodG5lc3MoMC41KVwiXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5U2ltcGxlOiB7XHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgY29sb3I6IChwcm9wcykgPT4gcHJvcHMuY29sb3JTZWNvbmRhcnksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiAocHJvcHMpID0+IHByb3BzLmNvbG9yU2Vjb25kYXJ5LFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgZmlsdGVyOiBcImJyaWdodG5lc3MoMC41KVwiXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5mbzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGFuZ2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaW1wbGU6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRyb3NlXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJHByaW1hcnlcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkaW5mb1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRzdWNjZXNzXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJHdhcm5pbmdcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkZGFuZ2VyXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0cmFuc3BhcmVudDoge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgbGc6IHtcclxuICAgIHBhZGRpbmc6IFwiMS4xMjVyZW0gMi4yNXJlbVwiLFxyXG4gICAgZm9udFNpemU6IFwiMC44NzVyZW1cIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS4zMzMzMzNcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIixcclxuICB9LFxyXG4gIHNtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuNDA2MjVyZW0gMS4yNXJlbVwiLFxyXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiLFxyXG4gIH0sXHJcbiAgcm91bmQ6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCIsXHJcbiAgfSxcclxuICBibG9jazoge1xyXG4gICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBcIiYsJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAganVzdEljb246IHtcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcclxuICAgIHBhZGRpbmdSaWdodDogXCIxMnB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNDFweFwiLFxyXG4gICAgbWluV2lkdGg6IFwiNDFweFwiLFxyXG4gICAgd2lkdGg6IFwiNDFweFwiLFxyXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiBzdmcsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYkbGdcIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjU3cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRzbVwiOiB7XHJcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMjlweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE3cHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblN0eWxlO1xyXG4iLCJjb25zdCBjYXJkQm9keVN0eWxlID0ge1xyXG4gIGNhcmRCb2R5OiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbSAyMHB4XCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjBcIixcclxuICAgIGZsZXg6IFwiMSAxIGF1dG9cIixcclxuICAgIFdlYmtpdEJveEZsZXg6IFwiMVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIGNhcmRCb2R5UGxhaW46IHtcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjVweFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjVweFwiLFxyXG4gIH0sXHJcbiAgY2FyZEJvZHlQcm9maWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRCb2R5U3R5bGU7XHJcbiIsImltcG9ydCB7XHJcbiAgd2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcclxuICBpbmZvQ2FyZEhlYWRlcixcclxuICBwcmltYXJ5Q2FyZEhlYWRlcixcclxuICByb3NlQ2FyZEhlYWRlcixcclxuICBkYXJrQ2FyZEhlYWRlcixcclxuICB3aGl0ZUNvbG9yLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi4vLi4vbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFwiO1xyXG5cclxuY29uc3QgY2FyZEhlYWRlclN0eWxlID0gKHRoZW1lKSA9PiAoe1xyXG4gIGNhcmRIZWFkZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMC43NXJlbSAxLjI1cmVtXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIHpJbmRleDogXCIzICFpbXBvcnRhbnRcIixcclxuICAgIFwiJiRjYXJkSGVhZGVyUGxhaW4sJiRjYXJkSGVhZGVySWNvbiwmJGNhcmRIZWFkZXJTdGF0cywmJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyLCYkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBtYXJnaW46IFwiMCAxNXB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIH0sXHJcbiAgICBcIiY6Zmlyc3QtY2hpbGRcIjoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiY2FsYyguMjVyZW0gLSAxcHgpIGNhbGMoLjI1cmVtIC0gMXB4KSAwIDBcIixcclxuICAgIH0sXHJcbiAgICBcIiYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXIsJiRkYXJrQ2FyZEhlYWRlclwiOiB7XHJcbiAgICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMjBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRjYXJkSGVhZGVyU3RhdHMgc3ZnXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMzZweFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICB3aWR0aDogXCIzNnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIzNnB4XCIsXHJcbiAgICAgIG1hcmdpbjogXCIxMHB4IDEwcHggNHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyBpLCYkY2FyZEhlYWRlclN0YXRzIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIGZvbnRTaXplOiBcIjM2cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjU2cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJ1bnNldFwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMXB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyRjYXJkSGVhZGVySWNvblwiOiB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRIZWFkZXJQbGFpbjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG4gIGNhcmRIZWFkZXJTdGF0czoge1xyXG4gICAgXCImICRjYXJkSGVhZGVySWNvblwiOiB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBoMSwmIGgyLCYgaDMsJiBoNCwmIGg1LCYgaDZcIjoge1xyXG4gICAgICBtYXJnaW46IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlckljb246IHtcclxuICAgIFwiJiAkd2FybmluZ0NhcmRIZWFkZXIsJiAkc3VjY2Vzc0NhcmRIZWFkZXIsJiAkZGFuZ2VyQ2FyZEhlYWRlciwmICRpbmZvQ2FyZEhlYWRlciwmICRwcmltYXJ5Q2FyZEhlYWRlciwmICRyb3NlQ2FyZEhlYWRlciwmICRkYXJrQ2FyZEhlYWRlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYgaSwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjMzcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjMzcHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMjRweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzNweFwiLFxyXG4gICAgICBtYXJnaW46IFwiNXB4IDRweCAwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXJuaW5nQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi53YXJuaW5nQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWNjZXNzQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5zdWNjZXNzQ2FyZEhlYWRlcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkYW5nZXJDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmRhbmdlckNhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5mb0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uaW5mb0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4ucHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgICAgIGJveFNoYWRvdzogKHByb3BzKSA9PlxyXG4gICAgICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMF0pICtcclxuICAgICAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJvcHMuY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yc1sxXSkgK1xyXG4gICAgICAgIFwiLC40KVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAocHJvcHMpID0+IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByb3BzLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMF0gKyBcIiwgXCIgKyBwcm9wcy5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzFdICsgXCIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vjb25kYXJ5Q2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAvLyAuLi5zZWNvbmRhcnlDYXJkSGVhZGVyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAocHJvcHMpID0+IFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByb3BzLmNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yc1swXSArIFwiLCBcIiArIHByb3BzLmNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yc1sxXSArIFwiKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvc2VDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnJvc2VDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhcmtDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmRhcmtDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVycm9yQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IChwcm9wcykgPT5cclxuICAgICAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcm9wcy5jb2xvckVycm9yKSArXHJcbiAgICAgICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByb3BzLmNvbG9yRXJyb3IyKSArXHJcbiAgICAgICAgXCIsLjQpXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IChwcm9wcykgPT4gXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJvcHMuY29sb3JFcnJvciArIFwiLCBcIiArIHByb3BzLmNvbG9yRXJyb3IyICsgXCIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEhlYWRlclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBoZXhUb1JnYixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBjYXJkU3R5bGUgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgYm9yZGVyOiBcIjBcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIG1pbldpZHRoOiBcIjBcIixcclxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgIGZvbnRTaXplOiBcIi44NzVyZW1cIixcclxuICB9LFxyXG4gIGNhcmRQbGFpbjoge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGNhcmRQcm9maWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgY2FyZENoYXJ0OiB7XHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgcGFkZGluZ1RvcDogXCIwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkU3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGxhaW4sIHByb2ZpbGUsIGNoYXJ0LCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkUGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRQcm9maWxlXTogcHJvZmlsZSxcclxuICAgIFtjbGFzc2VzLmNhcmRDaGFydF06IGNoYXJ0LFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9IHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGFydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBwcm9maWxlLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkQm9keUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5XTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5UGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5UHJvZmlsZV06IHByb2ZpbGUsXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQm9keUNsYXNzZXN9IHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ2FyZEJvZHkucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRIZWFkZXJTdHlsZS5qc1wiO1xyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVRoZW1lKHN0eWxlcyk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgcGxhaW4sIHN0YXRzLCBpY29uLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkSGVhZGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlcl06IHRydWUsXHJcbiAgICBbY2xhc3Nlc1tjb2xvciArIFwiQ2FyZEhlYWRlclwiXV06IGNvbG9yLFxyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVyU3RhdHNdOiBzdGF0cyxcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJJY29uXTogaWNvbixcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRIZWFkZXJDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFwid2FybmluZ1wiLFxyXG4gICAgXCJzdWNjZXNzXCIsXHJcbiAgICBcImRhbmdlclwiLFxyXG4gICAgXCJpbmZvXCIsXHJcbiAgICBcInByaW1hcnlcIixcclxuICAgIFwic2Vjb25kYXJ5XCIsXHJcbiAgICBcInJvc2VcIixcclxuICAgIFwiZGFya1wiLFxyXG4gICAgXCJlcnJvclwiXHJcbiAgXSksXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpY29uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanNcIjtcclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gXCIuLi8uLi9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVndWxhckJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VUaGVtZShzdHlsZXMpO1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yLFxyXG4gICAgcm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGRpc2FibGVkLFxyXG4gICAgc2ltcGxlLFxyXG4gICAgc2l6ZSxcclxuICAgIGJsb2NrLFxyXG4gICAgbGluayxcclxuICAgIGp1c3RJY29uLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbXVpQ2xhc3NlcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuYnV0dG9uXTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcclxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxyXG4gICAgW2NsYXNzZXMucm91bmRdOiByb3VuZCxcclxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXHJcbiAgICBbY2xhc3Nlcy5zaW1wbGVdOiBzaW1wbGUsXHJcbiAgICBbY2xhc3Nlcy5ibG9ja106IGJsb2NrLFxyXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXHJcbiAgICBbY2xhc3Nlcy5qdXN0SWNvbl06IGp1c3RJY29uLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiB7Li4ucmVzdH0gY2xhc3Nlcz17eyAuLi5tdWlDbGFzc2VzLCByb290OiBidG5DbGFzc2VzIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5SZWd1bGFyQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFwicHJpbWFyeVwiLFxyXG4gICAgXCJwcmltYXJ5T3V0bGluZWRcIixcclxuICAgIFwic2Vjb25kYXJ5XCIsXHJcbiAgICBcInNlY29uZGFyeU91dGxpbmVkXCIsXHJcbiAgICBcInNlY29uZGFyeVNpbXBsZVwiLFxyXG4gICAgXCJpbmZvXCIsXHJcbiAgICBcInN1Y2Nlc3NcIixcclxuICAgIFwid2FybmluZ1wiLFxyXG4gICAgXCJkYW5nZXJcIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJ3aGl0ZVwiLFxyXG4gICAgXCJ0cmFuc3BhcmVudFwiLFxyXG4gIF0pLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcImxnXCJdKSxcclxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxyXG4gIGp1c3RJY29uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLy8gdXNlIHRoaXMgdG8gcGFzcyB0aGUgY2xhc3NlcyBwcm9wcyBmcm9tIE1hdGVyaWFsLVVJXHJcbiAgbXVpQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCB7IERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nQ29udGVudCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBDYXJkIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5cclxuXHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IFJlcG9ydFByb2JsZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtJztcclxuXHJcbi8qIGljb246IFwibWVzc2FnZVwiIDogXCJ3YXJuaW5nXCIgKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZURpYWxvZyh7IG9wZW4sIHNldE9wZW4sIG1lc3NhZ2UsIHRpdGxlLCBpY29uIH0pIHtcclxuICAgIGNvbnN0IGhhbmRsZUtleXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPERpYWxvZ1xyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlzfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VEaWFsb2dcIlxyXG4gICAgPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50ID5cclxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImRpYWxvZ0NhcmRIZWFkZXJcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxLjI1cmVtXCIsIHBhZGRpbmc6IFwiOHB4XCIgfX0gY29sb3I9e2ljb24gPT09IFwid2FybmluZ1wiID8gXCJlcnJvclwiIDpcInByaW1hcnlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uID09PSBcIndhcm5pbmdcIiA/IDxSZXBvcnRQcm9ibGVtSWNvbiBjbGFzc05hbWU9XCJkaWFsb2dDYXJkSGVhZGVyXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpY29uID09PSBcIm1lc3NhZ2VcIiA/IDxDaGVja0NpcmNsZUljb24gY2xhc3NOYW1lPVwiZGlhbG9nQ2FyZEhlYWRlclwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNXJlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0ge3RpdGxlfSA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnttZXNzYWdlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjZXB0YXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICA8L0RpYWxvZz5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBpbmZvQ29sb3IsIHRpdGxlIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkUm91dGVzIGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcm9ncmVzczoge1xyXG4gICAgY29sb3I6IGluZm9Db2xvcixcclxuICAgIHdpZHRoOiBcIjZyZW0gIWltcG9ydGFudFwiLFxyXG4gICAgaGVpZ2h0OiBcIjZyZW0gIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgd3JhcHBlckRpdjoge1xyXG4gICAgbWFyZ2luOiBcIjEwMHB4IGF1dG9cIixcclxuICAgIHBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICBtYXhXaWR0aDogXCIzNjBweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHpJbmRleDogXCI5OTk5OTlcIixcclxuICAgIHRvcDogXCIwXCIsXHJcbiAgfSxcclxuICBpY29uV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXROb21icmUocGF0aCkge1xyXG4gIGNvbnN0IHJvdXRlcyA9IGRhc2hib2FyZFJvdXRlcztcclxuXHJcbiAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHJvdXRlLnBhdGgpKSB7XHJcbiAgICAgIHJldHVybiByb3V0ZS5uYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhdGguaW5jbHVkZXMoXCJsb2dpblwiKSkge1xyXG4gICAgaWYgKHBhdGguaW5jbHVkZXMoXCJyZWdpc3RlclwiKSkge1xyXG4gICAgICByZXR1cm4gXCJSZWdpc3Ryb1wiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gXCJMb2dpblwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhdGggPT09IFwiL1wiKVxyXG4gICAgcmV0dXJuIFwiTG9naW5cIjtcclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VDaGFuZ2UocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyRGl2fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uV3JhcHBlcn0+XHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjbGFzc05hbWU9e2NsYXNzZXMucHJvZ3Jlc3N9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICBDYXJnYW5kbzoge2dldE5vbWJyZShwcm9wcy5wYXRoKX1cclxuICAgICAgICA8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gTG9zIG5vbWJyZXMgZGUgbG9zIGF0cmlidXRvcyBlLmouIGljYywgdXJvLCBscm9sZGFuLCBkZWJlbiBpciBlbiBtaW51c2N1bGEgcGFyYSBlbCBjb3JyZWN0byBmdW5jaW9uYW1pZW50byBkZSBsYSBjb25maWd1cmFjaW9uLlxyXG5cclxuaW1wb3J0IFRIRU1FUyBmcm9tIFwiLi9USEVNRVNcIjtcclxuXHJcbmltcG9ydCBpY2Nsb2dvIGZyb20gXCJhc3NldHMvaW1nL2ljY2xvZ28ucG5nXCI7XHJcbmltcG9ydCBscm9sZGFubG9nbyBmcm9tIFwiYXNzZXRzL2ltZy9scm9sZGFubG9nby5wbmdcIjtcclxuaW1wb3J0IHNldGFsb2dvIGZyb20gXCJhc3NldHMvaW1nL3NldGFsb2dvLnBuZ1wiO1xyXG5cclxuaW1wb3J0IHVyb2xvZ28gZnJvbSBcImFzc2V0cy9pbWcvdXJvbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IGxvZ29zID0ge1xyXG4gICAgXCJpY2NcIjogaWNjbG9nbyxcclxuICAgIFwidXJvXCI6IHVuZGVmaW5lZCxcclxuICAgIFwiY29tZHBcIjogdW5kZWZpbmVkLFxyXG4gICAgXCJscm9sZGFuXCI6IGxyb2xkYW5sb2dvLFxyXG4gICAgXCJ0ZXN0XCI6IHVuZGVmaW5lZCxcclxuICAgIFwic2V0YVwiOiBzZXRhbG9nbyxcclxuICAgIFwiY2ljXCI6IHVuZGVmaW5lZCxcclxuICAgIFwiZmFkZVwiOiB1bmRlZmluZWQsXHJcbiAgICBcIm5nb256YWxlelwiOiB1bmRlZmluZWRcclxufVxyXG5cclxuY29uc3Qgc29saWNpdGFyVHVybm9NZXNzYWdlcyA9IHtcclxuICAgIFwiaWNjXCI6IFwiTG9zIHR1cm5vcyBxdWUgc2Ugb2J0aWVuZW4gc29uIHPDs2xvIHBhcmEgY29uc3VsdGEgeSBlbGVjdHJvY2FyZGlvZ3JhbWEsIHBhcmEgb3Ryb3MgZXN0dWRpb3MgY29tdW5pY2Fyc2UgdGVsZWbDs25pY2FtZW50ZS5cIixcclxuICAgIFwidXJvXCI6IFwiTG9zIHR1cm5vcyBxdWUgc2Ugb2J0aWVuZW4gc29uIHPDs2xvIHBhcmEgY29uc3VsdGEsIHBhcmEgb3Ryb3MgZXN0dWRpb3MgY29tdW5pY2Fyc2UgdGVsZWbDs25pY2FtZW50ZS5cIixcclxuICAgIFwiY29tZHBcIjogXCJcIixcclxuICAgIFwibHJvbGRhblwiOiBcIlwiLFxyXG4gICAgXCJ0ZXN0XCI6IFwiTWVuc2FqZSBkZSBzb2xpY2l0YXIgdHVybm8gcGFyYSB0ZXN0XCIsXHJcbiAgICBcInNldGFcIjogXCJcIixcclxuICAgIFwiY2ljXCI6IFwiXCIsXHJcbiAgICBcImZhZGVcIjogXCJcIixcclxuICAgIFwibmdvbnphbGV6XCI6XCJMb3MgdHVybm9zIHF1ZSBzZSBvYnRpZW5lbiBzb24gc8OzbG8gcGFyYSBjb25zdWx0YSwgcGFyYSBvdHJvcyBlc3R1ZGlvcyBjb211bmljYXJzZSB0ZWxlZsOzbmljYW1lbnRlLlwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBjb25zdWx0b3Jpb3NOYW1lVG9JZCA9IHtcclxuICAgIFwiaWNjXCI6IDEsXHJcbiAgICBcInVyb1wiOiA1LFxyXG4gICAgXCJjb21kcFwiOiAwLFxyXG4gICAgXCJscm9sZGFuXCI6MixcclxuICAgIFwidGVzdFwiOiAwLFxyXG4gICAgXCJzZXRhXCI6IDMsXHJcbiAgICBcImNpY1wiOiBcIjRcIixcclxuICAgIFwiZmFkZVwiOiBcIjZcIixcclxuICAgIFwibmdvbnphbGV6XCI6IFwiN1wiXHJcbn1cclxuXHJcbmNvbnN0IGNvbnN1bHRvcmlvc0Z1bGxOYW1lID0ge1xyXG4gICAgXCJpY2NcIjogXCJJbnN0aXR1dG8gQ2zDrW5pY28gQ2FyZGlvbMOzZ2ljb1wiLFxyXG4gICAgXCJ1cm9cIjogXCJVbmlkYWQgVXJvbMOzZ2ljYSBNYXIgZGVsIFBsYXRhXCIsXHJcbiAgICBcImNvbWRwXCI6IFwiQ2VudHJvIE9mdGFsbW9sw7NnaWNvIE1hciBkZWwgUGxhdGFcIixcclxuICAgIFwibHJvbGRhblwiOiBcIkNvbnN1bHRvcmlvIFBzaXF1aWF0csOtYVwiLFxyXG4gICAgXCJ0ZXN0XCI6IFwiSW5zdGl0dXRvIHRlc3RcIixcclxuICAgIFwic2V0YVwiOiBcIkluc3RpdHV0byBTRVRBXCIsXHJcbiAgICBcImNpY1wiOiBcIkNlbnRybyBJbnRlZ3JhbCBkZSBTYWx1ZFwiLFxyXG4gICAgXCJmYWRlXCI6IFwiQ2VudHJvIFBzaWNvbMOzZ2ljbyBQc2lxdWnDoXRyaWNvXCIsXHJcbiAgICBcIm5nb256YWxlelwiOiBcIkNvbnN1bHRvcmlvIE9mdGFsbW9sw7NnaWNvXCJcclxufVxyXG5cclxuY29uc3QgcGFnZVRpdGxlcyA9IHtcclxuICAgIFwiaWNjXCI6IFwiUG9ydGFsIFBhY2llbnRlcyBJQ0NcIixcclxuICAgIFwidXJvXCI6IFwiUG9ydGFsIFBhY2llbnRlc1wiLFxyXG4gICAgXCJjb21kcFwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwibHJvbGRhblwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwidGVzdFwiOiBcIlBvcnRhbCBEZSBUZXN0aW5nXCIsXHJcbiAgICBcInNldGFcIjogXCJQb3J0YWwgUGFjaWVudGVzXCIsXHJcbiAgICBcImNpY1wiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwiZmFkZVwiOiBcIlBvcnRhbCBQYWNpZW50ZXNcIixcclxuICAgIFwibmdvbnphbGV6XCI6IFwiUG9ydGFsIFBhY2llbnRlc1wiXHJcbn1cclxuXHJcbmNvbnN0IGZhdkljb25Sb3V0ZXMgPSB7XHJcbiAgICBcImljY1wiOiBcIklDQy5pY29cIixcclxuICAgIFwidXJvXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwiY29tZHBcIjogXCJ0ZXN0LnBuZ1wiLFxyXG4gICAgXCJscm9sZGFuXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwidGVzdFwiOiBcInRlc3QucG5nXCIsXHJcbiAgICBcInNldGFcIjogXCJ0ZXN0LnBuZ1wiLFxyXG4gICAgXCJjaWNcIjogXCJ0ZXN0LnBuZ1wiLFxyXG4gICAgXCJmYWRlXCI6IFwidGVzdC5wbmdcIixcclxuICAgIFwibmdvbnphbGV6XCI6IFwidGVzdC5wbmdcIlxyXG59XHJcblxyXG4vKipcclxuICogUGFyYSBhZ3JlZ2FyIGxpbmtzIGEgcGFnaW5hIHByaW5jaXBhbCwgc2kgbGEgaGF5LCBlamVtcGxvOiBodHRwczovL3d3dy5pY2NhcmRpb2xvZ2ljby5jb21cclxuICovXHJcbmNvbnN0IG1haW5QYWdlTGlua3MgPSB7XHJcbiAgICBcImljY1wiOiBcImh0dHBzOi8vd3d3LmljY2FyZGlvbG9naWNvLmNvbVwiLFxyXG4gICAgXCJ1cm9cIjogXCJodHRwczovL3VuaWRhZHVyb2xvZ2ljYW1hcmRlbHBsYXRhLmNvbS9cIixcclxuICAgIFwiY29tZHBcIjogXCJcIixcclxuICAgIFwibHJvbGRhblwiOiBcIlwiLFxyXG4gICAgXCJ0ZXN0XCI6IFwiXCIsXHJcbiAgICBcInNldGFcIjogXCJodHRwczovL2luc3RpdHV0b3NldGEuY29tLmFyL1wiLFxyXG4gICAgXCJjaWNcIjogXCJcIixcclxuICAgIFwiZmFkZVwiOiBcIlwiLFxyXG4gICAgXCJuZ29uemFsZXpcIjogXCJcIlxyXG59XHJcblxyXG5cclxuLy9UT0RPOiBBR1JFR0FSIFRZQ1xyXG5jb25zdCB0ZXJtcyA9IHtcclxuICAgIFwiaWNjXCI6IGBUw6lybWlub3MgeSBDb25kaWNpb25lcyBkZSBVc29cclxuICAgIDEuIEludHJvZHVjY2nDs25cclxuICAgIEJpZW52ZW5pZG8gYSBUSElTWVMgUG9ydGFsIFNhbHVkLCBkaXNlw7FhZG8gcGFyYSBicmluZGFyIG1lam9yIGNhbGlkYWQgZGUgYXRlbmNpw7NuIGEgbG9zIHBhY2llbnRlcywgZW4gZWwgY3VhbCBsb3MgdXN1YXJpb3MgcmVnaXN0cmFkb3MgcG9kcsOhbiBhY2NlZGVyIGEgdHVybm9zIHByb2dyYW1hZG9zLCByZWNldGFzIGRlIG1lZGljYW1lbnRvcyBlIGluZm9ybWFjacOzbiBkZSBzdSBzYWx1ZC4gQWwgYWNjZWRlciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMuIFNpIG5vIGVzdMOhIGRlIGFjdWVyZG8gY29uIGVzdG9zIHTDqXJtaW5vcywgbGUgc29saWNpdGFtb3MgcXVlIG5vIHV0aWxpY2UgZWwgc2l0aW8uXHJcbiAgICAyLiBBY2VwdGFjacOzbiBkZSBsb3MgVMOpcm1pbm9zXHJcbiAgICBBbCBuYXZlZ2FyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBjdW1wbGlyIGNvbiBsb3MgdMOpcm1pbm9zIHkgY29uZGljaW9uZXMgZGVzY3JpdG9zIGFxdcOtLiBOb3MgcmVzZXJ2YW1vcyBlbCBkZXJlY2hvIGRlIG1vZGlmaWNhciBlc3RvcyB0w6lybWlub3MgZW4gY3VhbHF1aWVyIG1vbWVudG8geSBkaWNob3MgY2FtYmlvcyBzZXLDoW4gbm90aWZpY2Fkb3Mgb3BvcnR1bmFtZW50ZS5cclxuICAgIDMuIFJlY29waWxhY2nDs24gZGUgRGF0b3MgYSBUcmF2w6lzIGRlbCBTaXRpb1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcmVjb3BpbGEgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGEgdHJhdsOpcyBkZWwgaW5ncmVzbyBkZSBkYXRvcyBwZXJzb25hbGVzIHkgIHJlZ2lzdHJvIGRlIHVzdWFyaW9zLiBMb3MgZGF0b3MgcmVjb3BpbGFkb3MgaW5jbHV5ZW4gZG9jdW1lbnRvLCBhcGVsbGlkbyB5IG5vbWJyZSBkZWwgcGFjaWVudGUsIGZlY2hhIGRlIG5hY2ltaWVudG8sIHNleG8sIGRhdG9zIGRlIGNvbnRhY3RvIHkgY29iZXJ0dXJhIG3DqWRpY2EgeSBzZXLDoW4gdXRpbGl6YWRvcyBwYXJhIHByb3BvcmNpb25hciBzZXJ2aWNpb3MgcGVyc29uYWxpemFkb3MuXHJcbiAgICA0LiBVc28gZGUgQ29va2llc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzIHBhcmEgbWVqb3JhciBzdSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIHkgcGVyc29uYWxpemFyIGVsIGNvbnRlbmlkbyBxdWUgcmVjaWJlLiBMYXMgY29va2llcyBzb24gcGVxdWXDsW9zIGFyY2hpdm9zIHF1ZSBzZSBhbG1hY2VuYW4gZW4gc3UgZGlzcG9zaXRpdm8gYWwgbmF2ZWdhciBwb3Igc2l0aW9zIHdlYi4gUGFyYSBvYnRlbmVyIG3DoXMgaW5mb3JtYWNpw7NuLCBjb25zdWx0ZSBudWVzdHJhIFBvbMOtdGljYSBkZSBDb29raWVzLlxyXG4gICAgNS4gU2VndXJpZGFkXHJcbiAgICBJbXBsZW1lbnRhbW9zIG1lZGlkYXMgZGUgc2VndXJpZGFkIGFkZWN1YWRhcyBwYXJhIHByb3RlZ2VyIGxvcyBkYXRvcyBwZXJzb25hbGVzIHF1ZSBub3MgcHJvcG9yY2lvbmEgYSB0cmF2w6lzIGRlbCBzaXRpbywgdXRpbGl6YW5kbyBjb25leGlvbmVzIHNlZ3VyYXMgKEhUVFBTKSwgY2lmcmFkbyBkZSBkYXRvcyB5IGF1dGVudGljYWNpw7NuIGVuIMOhcmVhcyBwcm90ZWdpZGFzIGRlbCBzaXRpby5cclxuICAgIDYuIERlcmVjaG9zIGRlbCBVc3VhcmlvXHJcbiAgICBDb25mb3JtZSBhIGxhIExleSAyNS4zMjYgZGUgUHJvdGVjY2nDs24gZGUgbG9zIERhdG9zIFBlcnNvbmFsZXMsIHVzdGVkIHRpZW5lIGRlcmVjaG8gYSBhY2NlZGVyLCByZWN0aWZpY2FyLCBhY3R1YWxpemFyIHkgc29saWNpdGFyIGxhIGVsaW1pbmFjacOzbiBkZSBzdXMgZGF0b3MgcGVyc29uYWxlcyBwcm9wb3JjaW9uYWRvcyBhIHRyYXbDqXMgZGUgZXN0ZSBzaXRpbyB3ZWIuIFBhcmEgZWplcmNlciBlc3RvcyBkZXJlY2hvcywgcG9yIGZhdm9yIGNvbnTDoWN0ZW5vcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuXHJcbiAgICA3LiBQb2zDrXRpY2EgZGUgRW5sYWNlcyBFeHRlcm5vc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcHVlZGUgY29udGVuZXIgZW5sYWNlcyBhIHNpdGlvcyB3ZWIgb3BlcmFkb3MgcG9yIHRlcmNlcm9zLiBObyBub3MgaGFjZW1vcyByZXNwb25zYWJsZXMgZGVsIGNvbnRlbmlkbyBuaSBkZSBsYXMgcG9sw610aWNhcyBkZSBwcml2YWNpZGFkIGRlIGRpY2hvcyBzaXRpb3MuIEFsIGFjY2VkZXIgYSBlbGxvcywgbG8gaGFjZSBiYWpvIHN1IHByb3BpYSByZXNwb25zYWJpbGlkYWQuXHJcbiAgICA4LiBKdXJpc2RpY2Npw7NuIHkgTGV5IEFwbGljYWJsZVxyXG4gICAgRXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgc2UgcmlnZW4gcG9yIGxhcyBsZXllcyBkZSBsYSBSZXDDumJsaWNhIEFyZ2VudGluYS4gQ3VhbHF1aWVyIGRpc3B1dGEgcmVsYWNpb25hZGEgY29uIHN1IHVzbyBkZWwgc2l0aW8gd2ViIHNlcsOhIHNvbWV0aWRhIGEgbG9zIHRyaWJ1bmFsZXMgY29tcGV0ZW50ZXMgZW4gbGEgQ2l1ZGFkIEF1dMOzbm9tYSBkZSBCdWVub3MgQWlyZXMuXHJcbiAgICA5LiBDb250YWN0b1xyXG4gICAgU2kgdGllbmUgYWxndW5hIHByZWd1bnRhIHNvYnJlIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLCBwdWVkZSBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbiBub3NvdHJvcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuYCxcclxuXHJcbiAgICBcImxyb2xkYW5cIjogYFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIGRlIFVzb1xyXG4gICAgMS4gSW50cm9kdWNjacOzblxyXG4gICAgQmllbnZlbmlkbyBhIFRISVNZUyBQb3J0YWwgU2FsdWQsIGRpc2XDsWFkbyBwYXJhIGJyaW5kYXIgbWVqb3IgY2FsaWRhZCBkZSBhdGVuY2nDs24gYSBsb3MgcGFjaWVudGVzLCBlbiBlbCBjdWFsIGxvcyB1c3VhcmlvcyByZWdpc3RyYWRvcyBwb2Ryw6FuIGFjY2VkZXIgYSB0dXJub3MgcHJvZ3JhbWFkb3MsIHJlY2V0YXMgZGUgbWVkaWNhbWVudG9zIGUgaW5mb3JtYWNpw7NuIGRlIHN1IHNhbHVkLiBBbCBhY2NlZGVyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBlc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcy4gU2kgbm8gZXN0w6EgZGUgYWN1ZXJkbyBjb24gZXN0b3MgdMOpcm1pbm9zLCBsZSBzb2xpY2l0YW1vcyBxdWUgbm8gdXRpbGljZSBlbCBzaXRpby5cclxuICAgIDIuIEFjZXB0YWNpw7NuIGRlIGxvcyBUw6lybWlub3NcclxuICAgIEFsIG5hdmVnYXIgeSB1dGlsaXphciBlc3RlIHNpdGlvIHdlYiwgdXN0ZWQgYWNlcHRhIGN1bXBsaXIgY29uIGxvcyB0w6lybWlub3MgeSBjb25kaWNpb25lcyBkZXNjcml0b3MgYXF1w60uIE5vcyByZXNlcnZhbW9zIGVsIGRlcmVjaG8gZGUgbW9kaWZpY2FyIGVzdG9zIHTDqXJtaW5vcyBlbiBjdWFscXVpZXIgbW9tZW50byB5IGRpY2hvcyBjYW1iaW9zIHNlcsOhbiBub3RpZmljYWRvcyBvcG9ydHVuYW1lbnRlLlxyXG4gICAgMy4gUmVjb3BpbGFjacOzbiBkZSBEYXRvcyBhIFRyYXbDqXMgZGVsIFNpdGlvXHJcbiAgICBFc3RlIHNpdGlvIHdlYiByZWNvcGlsYSBpbmZvcm1hY2nDs24gcGVyc29uYWwgYSB0cmF2w6lzIGRlbCBpbmdyZXNvIGRlIGRhdG9zIHBlcnNvbmFsZXMgeSAgcmVnaXN0cm8gZGUgdXN1YXJpb3MuIExvcyBkYXRvcyByZWNvcGlsYWRvcyBpbmNsdXllbiBkb2N1bWVudG8sIGFwZWxsaWRvIHkgbm9tYnJlIGRlbCBwYWNpZW50ZSwgZmVjaGEgZGUgbmFjaW1pZW50bywgc2V4bywgZGF0b3MgZGUgY29udGFjdG8geSBjb2JlcnR1cmEgbcOpZGljYSB5IHNlcsOhbiB1dGlsaXphZG9zIHBhcmEgcHJvcG9yY2lvbmFyIHNlcnZpY2lvcyBwZXJzb25hbGl6YWRvcy5cclxuICAgIDQuIFVzbyBkZSBDb29raWVzXHJcbiAgICBFc3RlIHNpdGlvIHdlYiB1dGlsaXphIGNvb2tpZXMgcGFyYSBtZWpvcmFyIHN1IGV4cGVyaWVuY2lhIGRlIHVzdWFyaW8geSBwZXJzb25hbGl6YXIgZWwgY29udGVuaWRvIHF1ZSByZWNpYmUuIExhcyBjb29raWVzIHNvbiBwZXF1ZcOxb3MgYXJjaGl2b3MgcXVlIHNlIGFsbWFjZW5hbiBlbiBzdSBkaXNwb3NpdGl2byBhbCBuYXZlZ2FyIHBvciBzaXRpb3Mgd2ViLiBQYXJhIG9idGVuZXIgbcOhcyBpbmZvcm1hY2nDs24sIGNvbnN1bHRlIG51ZXN0cmEgUG9sw610aWNhIGRlIENvb2tpZXMuXHJcbiAgICA1LiBTZWd1cmlkYWRcclxuICAgIEltcGxlbWVudGFtb3MgbWVkaWRhcyBkZSBzZWd1cmlkYWQgYWRlY3VhZGFzIHBhcmEgcHJvdGVnZXIgbG9zIGRhdG9zIHBlcnNvbmFsZXMgcXVlIG5vcyBwcm9wb3JjaW9uYSBhIHRyYXbDqXMgZGVsIHNpdGlvLCB1dGlsaXphbmRvIGNvbmV4aW9uZXMgc2VndXJhcyAoSFRUUFMpLCBjaWZyYWRvIGRlIGRhdG9zIHkgYXV0ZW50aWNhY2nDs24gZW4gw6FyZWFzIHByb3RlZ2lkYXMgZGVsIHNpdGlvLlxyXG4gICAgNi4gRGVyZWNob3MgZGVsIFVzdWFyaW9cclxuICAgIENvbmZvcm1lIGEgbGEgTGV5IDI1LjMyNiBkZSBQcm90ZWNjacOzbiBkZSBsb3MgRGF0b3MgUGVyc29uYWxlcywgdXN0ZWQgdGllbmUgZGVyZWNobyBhIGFjY2VkZXIsIHJlY3RpZmljYXIsIGFjdHVhbGl6YXIgeSBzb2xpY2l0YXIgbGEgZWxpbWluYWNpw7NuIGRlIHN1cyBkYXRvcyBwZXJzb25hbGVzIHByb3BvcmNpb25hZG9zIGEgdHJhdsOpcyBkZSBlc3RlIHNpdGlvIHdlYi4gUGFyYSBlamVyY2VyIGVzdG9zIGRlcmVjaG9zLCBwb3IgZmF2b3IgY29udMOhY3Rlbm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5cclxuICAgIDcuIFBvbMOtdGljYSBkZSBFbmxhY2VzIEV4dGVybm9zXHJcbiAgICBFc3RlIHNpdGlvIHdlYiBwdWVkZSBjb250ZW5lciBlbmxhY2VzIGEgc2l0aW9zIHdlYiBvcGVyYWRvcyBwb3IgdGVyY2Vyb3MuIE5vIG5vcyBoYWNlbW9zIHJlc3BvbnNhYmxlcyBkZWwgY29udGVuaWRvIG5pIGRlIGxhcyBwb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQgZGUgZGljaG9zIHNpdGlvcy4gQWwgYWNjZWRlciBhIGVsbG9zLCBsbyBoYWNlIGJham8gc3UgcHJvcGlhIHJlc3BvbnNhYmlsaWRhZC5cclxuICAgIDguIEp1cmlzZGljY2nDs24geSBMZXkgQXBsaWNhYmxlXHJcbiAgICBFc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcyBzZSByaWdlbiBwb3IgbGFzIGxleWVzIGRlIGxhIFJlcMO6YmxpY2EgQXJnZW50aW5hLiBDdWFscXVpZXIgZGlzcHV0YSByZWxhY2lvbmFkYSBjb24gc3UgdXNvIGRlbCBzaXRpbyB3ZWIgc2Vyw6Egc29tZXRpZGEgYSBsb3MgdHJpYnVuYWxlcyBjb21wZXRlbnRlcyBlbiBsYSBDaXVkYWQgQXV0w7Nub21hIGRlIEJ1ZW5vcyBBaXJlcy5cclxuICAgIDkuIENvbnRhY3RvXHJcbiAgICBTaSB0aWVuZSBhbGd1bmEgcHJlZ3VudGEgc29icmUgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMsIHB1ZWRlIHBvbmVyc2UgZW4gY29udGFjdG8gY29uIG5vc290cm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5gLFxyXG4gIFxyXG4gICAgXCJzZXRhXCI6IGBUw6lybWlub3MgeSBDb25kaWNpb25lcyBkZSBVc29cclxuICAgIDEuIEludHJvZHVjY2nDs25cclxuICAgIEJpZW52ZW5pZG8gYSBUSElTWVMgUG9ydGFsIFNhbHVkLCBkaXNlw7FhZG8gcGFyYSBicmluZGFyIG1lam9yIGNhbGlkYWQgZGUgYXRlbmNpw7NuIGEgbG9zIHBhY2llbnRlcywgZW4gZWwgY3VhbCBsb3MgdXN1YXJpb3MgcmVnaXN0cmFkb3MgcG9kcsOhbiBhY2NlZGVyIGEgdHVybm9zIHByb2dyYW1hZG9zLCByZWNldGFzIGRlIG1lZGljYW1lbnRvcyBlIGluZm9ybWFjacOzbiBkZSBzdSBzYWx1ZC4gQWwgYWNjZWRlciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMuIFNpIG5vIGVzdMOhIGRlIGFjdWVyZG8gY29uIGVzdG9zIHTDqXJtaW5vcywgbGUgc29saWNpdGFtb3MgcXVlIG5vIHV0aWxpY2UgZWwgc2l0aW8uXHJcbiAgICAyLiBBY2VwdGFjacOzbiBkZSBsb3MgVMOpcm1pbm9zXHJcbiAgICBBbCBuYXZlZ2FyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBjdW1wbGlyIGNvbiBsb3MgdMOpcm1pbm9zIHkgY29uZGljaW9uZXMgZGVzY3JpdG9zIGFxdcOtLiBOb3MgcmVzZXJ2YW1vcyBlbCBkZXJlY2hvIGRlIG1vZGlmaWNhciBlc3RvcyB0w6lybWlub3MgZW4gY3VhbHF1aWVyIG1vbWVudG8geSBkaWNob3MgY2FtYmlvcyBzZXLDoW4gbm90aWZpY2Fkb3Mgb3BvcnR1bmFtZW50ZS5cclxuICAgIDMuIFJlY29waWxhY2nDs24gZGUgRGF0b3MgYSBUcmF2w6lzIGRlbCBTaXRpb1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcmVjb3BpbGEgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGEgdHJhdsOpcyBkZWwgaW5ncmVzbyBkZSBkYXRvcyBwZXJzb25hbGVzIHkgIHJlZ2lzdHJvIGRlIHVzdWFyaW9zLiBMb3MgZGF0b3MgcmVjb3BpbGFkb3MgaW5jbHV5ZW4gZG9jdW1lbnRvLCBhcGVsbGlkbyB5IG5vbWJyZSBkZWwgcGFjaWVudGUsIGZlY2hhIGRlIG5hY2ltaWVudG8sIHNleG8sIGRhdG9zIGRlIGNvbnRhY3RvIHkgY29iZXJ0dXJhIG3DqWRpY2EgeSBzZXLDoW4gdXRpbGl6YWRvcyBwYXJhIHByb3BvcmNpb25hciBzZXJ2aWNpb3MgcGVyc29uYWxpemFkb3MuXHJcbiAgICA0LiBVc28gZGUgQ29va2llc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzIHBhcmEgbWVqb3JhciBzdSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIHkgcGVyc29uYWxpemFyIGVsIGNvbnRlbmlkbyBxdWUgcmVjaWJlLiBMYXMgY29va2llcyBzb24gcGVxdWXDsW9zIGFyY2hpdm9zIHF1ZSBzZSBhbG1hY2VuYW4gZW4gc3UgZGlzcG9zaXRpdm8gYWwgbmF2ZWdhciBwb3Igc2l0aW9zIHdlYi4gUGFyYSBvYnRlbmVyIG3DoXMgaW5mb3JtYWNpw7NuLCBjb25zdWx0ZSBudWVzdHJhIFBvbMOtdGljYSBkZSBDb29raWVzLlxyXG4gICAgNS4gU2VndXJpZGFkXHJcbiAgICBJbXBsZW1lbnRhbW9zIG1lZGlkYXMgZGUgc2VndXJpZGFkIGFkZWN1YWRhcyBwYXJhIHByb3RlZ2VyIGxvcyBkYXRvcyBwZXJzb25hbGVzIHF1ZSBub3MgcHJvcG9yY2lvbmEgYSB0cmF2w6lzIGRlbCBzaXRpbywgdXRpbGl6YW5kbyBjb25leGlvbmVzIHNlZ3VyYXMgKEhUVFBTKSwgY2lmcmFkbyBkZSBkYXRvcyB5IGF1dGVudGljYWNpw7NuIGVuIMOhcmVhcyBwcm90ZWdpZGFzIGRlbCBzaXRpby5cclxuICAgIDYuIERlcmVjaG9zIGRlbCBVc3VhcmlvXHJcbiAgICBDb25mb3JtZSBhIGxhIExleSAyNS4zMjYgZGUgUHJvdGVjY2nDs24gZGUgbG9zIERhdG9zIFBlcnNvbmFsZXMsIHVzdGVkIHRpZW5lIGRlcmVjaG8gYSBhY2NlZGVyLCByZWN0aWZpY2FyLCBhY3R1YWxpemFyIHkgc29saWNpdGFyIGxhIGVsaW1pbmFjacOzbiBkZSBzdXMgZGF0b3MgcGVyc29uYWxlcyBwcm9wb3JjaW9uYWRvcyBhIHRyYXbDqXMgZGUgZXN0ZSBzaXRpbyB3ZWIuIFBhcmEgZWplcmNlciBlc3RvcyBkZXJlY2hvcywgcG9yIGZhdm9yIGNvbnTDoWN0ZW5vcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuXHJcbiAgICA3LiBQb2zDrXRpY2EgZGUgRW5sYWNlcyBFeHRlcm5vc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcHVlZGUgY29udGVuZXIgZW5sYWNlcyBhIHNpdGlvcyB3ZWIgb3BlcmFkb3MgcG9yIHRlcmNlcm9zLiBObyBub3MgaGFjZW1vcyByZXNwb25zYWJsZXMgZGVsIGNvbnRlbmlkbyBuaSBkZSBsYXMgcG9sw610aWNhcyBkZSBwcml2YWNpZGFkIGRlIGRpY2hvcyBzaXRpb3MuIEFsIGFjY2VkZXIgYSBlbGxvcywgbG8gaGFjZSBiYWpvIHN1IHByb3BpYSByZXNwb25zYWJpbGlkYWQuXHJcbiAgICA4LiBKdXJpc2RpY2Npw7NuIHkgTGV5IEFwbGljYWJsZVxyXG4gICAgRXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgc2UgcmlnZW4gcG9yIGxhcyBsZXllcyBkZSBsYSBSZXDDumJsaWNhIEFyZ2VudGluYS4gQ3VhbHF1aWVyIGRpc3B1dGEgcmVsYWNpb25hZGEgY29uIHN1IHVzbyBkZWwgc2l0aW8gd2ViIHNlcsOhIHNvbWV0aWRhIGEgbG9zIHRyaWJ1bmFsZXMgY29tcGV0ZW50ZXMgZW4gbGEgQ2l1ZGFkIEF1dMOzbm9tYSBkZSBCdWVub3MgQWlyZXMuXHJcbiAgICA5LiBDb250YWN0b1xyXG4gICAgU2kgdGllbmUgYWxndW5hIHByZWd1bnRhIHNvYnJlIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLCBwdWVkZSBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbiBub3NvdHJvcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuYCxcclxuXHJcbiAgICBcImNpY1wiOiBgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgZGUgVXNvXHJcbiAgICAxLiBJbnRyb2R1Y2Npw7NuXHJcbiAgICBCaWVudmVuaWRvIGEgVEhJU1lTIFBvcnRhbCBTYWx1ZCwgZGlzZcOxYWRvIHBhcmEgYnJpbmRhciBtZWpvciBjYWxpZGFkIGRlIGF0ZW5jacOzbiBhIGxvcyBwYWNpZW50ZXMsIGVuIGVsIGN1YWwgbG9zIHVzdWFyaW9zIHJlZ2lzdHJhZG9zIHBvZHLDoW4gYWNjZWRlciBhIHR1cm5vcyBwcm9ncmFtYWRvcywgcmVjZXRhcyBkZSBtZWRpY2FtZW50b3MgZSBpbmZvcm1hY2nDs24gZGUgc3Ugc2FsdWQuIEFsIGFjY2VkZXIgeSB1dGlsaXphciBlc3RlIHNpdGlvIHdlYiwgdXN0ZWQgYWNlcHRhIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLiBTaSBubyBlc3TDoSBkZSBhY3VlcmRvIGNvbiBlc3RvcyB0w6lybWlub3MsIGxlIHNvbGljaXRhbW9zIHF1ZSBubyB1dGlsaWNlIGVsIHNpdGlvLlxyXG4gICAgMi4gQWNlcHRhY2nDs24gZGUgbG9zIFTDqXJtaW5vc1xyXG4gICAgQWwgbmF2ZWdhciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgY3VtcGxpciBjb24gbG9zIHTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzIGRlc2NyaXRvcyBhcXXDrS4gTm9zIHJlc2VydmFtb3MgZWwgZGVyZWNobyBkZSBtb2RpZmljYXIgZXN0b3MgdMOpcm1pbm9zIGVuIGN1YWxxdWllciBtb21lbnRvIHkgZGljaG9zIGNhbWJpb3Mgc2Vyw6FuIG5vdGlmaWNhZG9zIG9wb3J0dW5hbWVudGUuXHJcbiAgICAzLiBSZWNvcGlsYWNpw7NuIGRlIERhdG9zIGEgVHJhdsOpcyBkZWwgU2l0aW9cclxuICAgIEVzdGUgc2l0aW8gd2ViIHJlY29waWxhIGluZm9ybWFjacOzbiBwZXJzb25hbCBhIHRyYXbDqXMgZGVsIGluZ3Jlc28gZGUgZGF0b3MgcGVyc29uYWxlcyB5ICByZWdpc3RybyBkZSB1c3Vhcmlvcy4gTG9zIGRhdG9zIHJlY29waWxhZG9zIGluY2x1eWVuIGRvY3VtZW50bywgYXBlbGxpZG8geSBub21icmUgZGVsIHBhY2llbnRlLCBmZWNoYSBkZSBuYWNpbWllbnRvLCBzZXhvLCBkYXRvcyBkZSBjb250YWN0byB5IGNvYmVydHVyYSBtw6lkaWNhIHkgc2Vyw6FuIHV0aWxpemFkb3MgcGFyYSBwcm9wb3JjaW9uYXIgc2VydmljaW9zIHBlcnNvbmFsaXphZG9zLlxyXG4gICAgNC4gVXNvIGRlIENvb2tpZXNcclxuICAgIEVzdGUgc2l0aW8gd2ViIHV0aWxpemEgY29va2llcyBwYXJhIG1lam9yYXIgc3UgZXhwZXJpZW5jaWEgZGUgdXN1YXJpbyB5IHBlcnNvbmFsaXphciBlbCBjb250ZW5pZG8gcXVlIHJlY2liZS4gTGFzIGNvb2tpZXMgc29uIHBlcXVlw7FvcyBhcmNoaXZvcyBxdWUgc2UgYWxtYWNlbmFuIGVuIHN1IGRpc3Bvc2l0aXZvIGFsIG5hdmVnYXIgcG9yIHNpdGlvcyB3ZWIuIFBhcmEgb2J0ZW5lciBtw6FzIGluZm9ybWFjacOzbiwgY29uc3VsdGUgbnVlc3RyYSBQb2zDrXRpY2EgZGUgQ29va2llcy5cclxuICAgIDUuIFNlZ3VyaWRhZFxyXG4gICAgSW1wbGVtZW50YW1vcyBtZWRpZGFzIGRlIHNlZ3VyaWRhZCBhZGVjdWFkYXMgcGFyYSBwcm90ZWdlciBsb3MgZGF0b3MgcGVyc29uYWxlcyBxdWUgbm9zIHByb3BvcmNpb25hIGEgdHJhdsOpcyBkZWwgc2l0aW8sIHV0aWxpemFuZG8gY29uZXhpb25lcyBzZWd1cmFzIChIVFRQUyksIGNpZnJhZG8gZGUgZGF0b3MgeSBhdXRlbnRpY2FjacOzbiBlbiDDoXJlYXMgcHJvdGVnaWRhcyBkZWwgc2l0aW8uXHJcbiAgICA2LiBEZXJlY2hvcyBkZWwgVXN1YXJpb1xyXG4gICAgQ29uZm9ybWUgYSBsYSBMZXkgMjUuMzI2IGRlIFByb3RlY2Npw7NuIGRlIGxvcyBEYXRvcyBQZXJzb25hbGVzLCB1c3RlZCB0aWVuZSBkZXJlY2hvIGEgYWNjZWRlciwgcmVjdGlmaWNhciwgYWN0dWFsaXphciB5IHNvbGljaXRhciBsYSBlbGltaW5hY2nDs24gZGUgc3VzIGRhdG9zIHBlcnNvbmFsZXMgcHJvcG9yY2lvbmFkb3MgYSB0cmF2w6lzIGRlIGVzdGUgc2l0aW8gd2ViLiBQYXJhIGVqZXJjZXIgZXN0b3MgZGVyZWNob3MsIHBvciBmYXZvciBjb250w6FjdGVub3MgZW4gaW5mb0B0aGlzeXMubmV0LmFyLlxyXG4gICAgNy4gUG9sw610aWNhIGRlIEVubGFjZXMgRXh0ZXJub3NcclxuICAgIEVzdGUgc2l0aW8gd2ViIHB1ZWRlIGNvbnRlbmVyIGVubGFjZXMgYSBzaXRpb3Mgd2ViIG9wZXJhZG9zIHBvciB0ZXJjZXJvcy4gTm8gbm9zIGhhY2Vtb3MgcmVzcG9uc2FibGVzIGRlbCBjb250ZW5pZG8gbmkgZGUgbGFzIHBvbMOtdGljYXMgZGUgcHJpdmFjaWRhZCBkZSBkaWNob3Mgc2l0aW9zLiBBbCBhY2NlZGVyIGEgZWxsb3MsIGxvIGhhY2UgYmFqbyBzdSBwcm9waWEgcmVzcG9uc2FiaWxpZGFkLlxyXG4gICAgOC4gSnVyaXNkaWNjacOzbiB5IExleSBBcGxpY2FibGVcclxuICAgIEVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIHNlIHJpZ2VuIHBvciBsYXMgbGV5ZXMgZGUgbGEgUmVww7pibGljYSBBcmdlbnRpbmEuIEN1YWxxdWllciBkaXNwdXRhIHJlbGFjaW9uYWRhIGNvbiBzdSB1c28gZGVsIHNpdGlvIHdlYiBzZXLDoSBzb21ldGlkYSBhIGxvcyB0cmlidW5hbGVzIGNvbXBldGVudGVzIGVuIGxhIENpdWRhZCBBdXTDs25vbWEgZGUgQnVlbm9zIEFpcmVzLlxyXG4gICAgOS4gQ29udGFjdG9cclxuICAgIFNpIHRpZW5lIGFsZ3VuYSBwcmVndW50YSBzb2JyZSBlc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcywgcHVlZGUgcG9uZXJzZSBlbiBjb250YWN0byBjb24gbm9zb3Ryb3MgZW4gaW5mb0B0aGlzeXMubmV0LmFyLmAsXHJcbiAgIFxyXG4gICAgXCJuZ29uemFsZXpcIjogYFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzIGRlIFVzb1xyXG4gICAgMS4gSW50cm9kdWNjacOzblxyXG4gICAgQmllbnZlbmlkbyBhIFRISVNZUyBQb3J0YWwgU2FsdWQsIGRpc2XDsWFkbyBwYXJhIGJyaW5kYXIgbWVqb3IgY2FsaWRhZCBkZSBhdGVuY2nDs24gYSBsb3MgcGFjaWVudGVzLCBlbiBlbCBjdWFsIGxvcyB1c3VhcmlvcyByZWdpc3RyYWRvcyBwb2Ryw6FuIGFjY2VkZXIgYSB0dXJub3MgcHJvZ3JhbWFkb3MsIHJlY2V0YXMgZGUgbWVkaWNhbWVudG9zIGUgaW5mb3JtYWNpw7NuIGRlIHN1IHNhbHVkLiBBbCBhY2NlZGVyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBlc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcy4gU2kgbm8gZXN0w6EgZGUgYWN1ZXJkbyBjb24gZXN0b3MgdMOpcm1pbm9zLCBsZSBzb2xpY2l0YW1vcyBxdWUgbm8gdXRpbGljZSBlbCBzaXRpby5cclxuICAgIDIuIEFjZXB0YWNpw7NuIGRlIGxvcyBUw6lybWlub3NcclxuICAgIEFsIG5hdmVnYXIgeSB1dGlsaXphciBlc3RlIHNpdGlvIHdlYiwgdXN0ZWQgYWNlcHRhIGN1bXBsaXIgY29uIGxvcyB0w6lybWlub3MgeSBjb25kaWNpb25lcyBkZXNjcml0b3MgYXF1w60uIE5vcyByZXNlcnZhbW9zIGVsIGRlcmVjaG8gZGUgbW9kaWZpY2FyIGVzdG9zIHTDqXJtaW5vcyBlbiBjdWFscXVpZXIgbW9tZW50byB5IGRpY2hvcyBjYW1iaW9zIHNlcsOhbiBub3RpZmljYWRvcyBvcG9ydHVuYW1lbnRlLlxyXG4gICAgMy4gUmVjb3BpbGFjacOzbiBkZSBEYXRvcyBhIFRyYXbDqXMgZGVsIFNpdGlvXHJcbiAgICBFc3RlIHNpdGlvIHdlYiByZWNvcGlsYSBpbmZvcm1hY2nDs24gcGVyc29uYWwgYSB0cmF2w6lzIGRlbCBpbmdyZXNvIGRlIGRhdG9zIHBlcnNvbmFsZXMgeSAgcmVnaXN0cm8gZGUgdXN1YXJpb3MuIExvcyBkYXRvcyByZWNvcGlsYWRvcyBpbmNsdXllbiBkb2N1bWVudG8sIGFwZWxsaWRvIHkgbm9tYnJlIGRlbCBwYWNpZW50ZSwgZmVjaGEgZGUgbmFjaW1pZW50bywgc2V4bywgZGF0b3MgZGUgY29udGFjdG8geSBjb2JlcnR1cmEgbcOpZGljYSB5IHNlcsOhbiB1dGlsaXphZG9zIHBhcmEgcHJvcG9yY2lvbmFyIHNlcnZpY2lvcyBwZXJzb25hbGl6YWRvcy5cclxuICAgIDQuIFVzbyBkZSBDb29raWVzXHJcbiAgICBFc3RlIHNpdGlvIHdlYiB1dGlsaXphIGNvb2tpZXMgcGFyYSBtZWpvcmFyIHN1IGV4cGVyaWVuY2lhIGRlIHVzdWFyaW8geSBwZXJzb25hbGl6YXIgZWwgY29udGVuaWRvIHF1ZSByZWNpYmUuIExhcyBjb29raWVzIHNvbiBwZXF1ZcOxb3MgYXJjaGl2b3MgcXVlIHNlIGFsbWFjZW5hbiBlbiBzdSBkaXNwb3NpdGl2byBhbCBuYXZlZ2FyIHBvciBzaXRpb3Mgd2ViLiBQYXJhIG9idGVuZXIgbcOhcyBpbmZvcm1hY2nDs24sIGNvbnN1bHRlIG51ZXN0cmEgUG9sw610aWNhIGRlIENvb2tpZXMuXHJcbiAgICA1LiBTZWd1cmlkYWRcclxuICAgIEltcGxlbWVudGFtb3MgbWVkaWRhcyBkZSBzZWd1cmlkYWQgYWRlY3VhZGFzIHBhcmEgcHJvdGVnZXIgbG9zIGRhdG9zIHBlcnNvbmFsZXMgcXVlIG5vcyBwcm9wb3JjaW9uYSBhIHRyYXbDqXMgZGVsIHNpdGlvLCB1dGlsaXphbmRvIGNvbmV4aW9uZXMgc2VndXJhcyAoSFRUUFMpLCBjaWZyYWRvIGRlIGRhdG9zIHkgYXV0ZW50aWNhY2nDs24gZW4gw6FyZWFzIHByb3RlZ2lkYXMgZGVsIHNpdGlvLlxyXG4gICAgNi4gRGVyZWNob3MgZGVsIFVzdWFyaW9cclxuICAgIENvbmZvcm1lIGEgbGEgTGV5IDI1LjMyNiBkZSBQcm90ZWNjacOzbiBkZSBsb3MgRGF0b3MgUGVyc29uYWxlcywgdXN0ZWQgdGllbmUgZGVyZWNobyBhIGFjY2VkZXIsIHJlY3RpZmljYXIsIGFjdHVhbGl6YXIgeSBzb2xpY2l0YXIgbGEgZWxpbWluYWNpw7NuIGRlIHN1cyBkYXRvcyBwZXJzb25hbGVzIHByb3BvcmNpb25hZG9zIGEgdHJhdsOpcyBkZSBlc3RlIHNpdGlvIHdlYi4gUGFyYSBlamVyY2VyIGVzdG9zIGRlcmVjaG9zLCBwb3IgZmF2b3IgY29udMOhY3Rlbm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5cclxuICAgIDcuIFBvbMOtdGljYSBkZSBFbmxhY2VzIEV4dGVybm9zXHJcbiAgICBFc3RlIHNpdGlvIHdlYiBwdWVkZSBjb250ZW5lciBlbmxhY2VzIGEgc2l0aW9zIHdlYiBvcGVyYWRvcyBwb3IgdGVyY2Vyb3MuIE5vIG5vcyBoYWNlbW9zIHJlc3BvbnNhYmxlcyBkZWwgY29udGVuaWRvIG5pIGRlIGxhcyBwb2zDrXRpY2FzIGRlIHByaXZhY2lkYWQgZGUgZGljaG9zIHNpdGlvcy4gQWwgYWNjZWRlciBhIGVsbG9zLCBsbyBoYWNlIGJham8gc3UgcHJvcGlhIHJlc3BvbnNhYmlsaWRhZC5cclxuICAgIDguIEp1cmlzZGljY2nDs24geSBMZXkgQXBsaWNhYmxlXHJcbiAgICBFc3RvcyBUw6lybWlub3MgeSBDb25kaWNpb25lcyBzZSByaWdlbiBwb3IgbGFzIGxleWVzIGRlIGxhIFJlcMO6YmxpY2EgQXJnZW50aW5hLiBDdWFscXVpZXIgZGlzcHV0YSByZWxhY2lvbmFkYSBjb24gc3UgdXNvIGRlbCBzaXRpbyB3ZWIgc2Vyw6Egc29tZXRpZGEgYSBsb3MgdHJpYnVuYWxlcyBjb21wZXRlbnRlcyBlbiBsYSBDaXVkYWQgQXV0w7Nub21hIGRlIEJ1ZW5vcyBBaXJlcy5cclxuICAgIDkuIENvbnRhY3RvXHJcbiAgICBTaSB0aWVuZSBhbGd1bmEgcHJlZ3VudGEgc29icmUgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMsIHB1ZWRlIHBvbmVyc2UgZW4gY29udGFjdG8gY29uIG5vc290cm9zIGVuIGluZm9AdGhpc3lzLm5ldC5hci5gLFxyXG5cclxuXHJcblxyXG4gICAgXCJ0ZXN0XCI6IGBUw6lybWlub3MgeSBDb25kaWNpb25lcyBkZSBVc29cclxuICAgIDEuIEludHJvZHVjY2nDs25cclxuICAgIEJpZW52ZW5pZG8gYSBUSElTWVMgUG9ydGFsIFNhbHVkLCBkaXNlw7FhZG8gcGFyYSBicmluZGFyIG1lam9yIGNhbGlkYWQgZGUgYXRlbmNpw7NuIGEgbG9zIHBhY2llbnRlcywgZW4gZWwgY3VhbCBsb3MgdXN1YXJpb3MgcmVnaXN0cmFkb3MgcG9kcsOhbiBhY2NlZGVyIGEgdHVybm9zIHByb2dyYW1hZG9zLCByZWNldGFzIGRlIG1lZGljYW1lbnRvcyBlIGluZm9ybWFjacOzbiBkZSBzdSBzYWx1ZC4gQWwgYWNjZWRlciB5IHV0aWxpemFyIGVzdGUgc2l0aW8gd2ViLCB1c3RlZCBhY2VwdGEgZXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMuIFNpIG5vIGVzdMOhIGRlIGFjdWVyZG8gY29uIGVzdG9zIHTDqXJtaW5vcywgbGUgc29saWNpdGFtb3MgcXVlIG5vIHV0aWxpY2UgZWwgc2l0aW8uXHJcbiAgICAyLiBBY2VwdGFjacOzbiBkZSBsb3MgVMOpcm1pbm9zXHJcbiAgICBBbCBuYXZlZ2FyIHkgdXRpbGl6YXIgZXN0ZSBzaXRpbyB3ZWIsIHVzdGVkIGFjZXB0YSBjdW1wbGlyIGNvbiBsb3MgdMOpcm1pbm9zIHkgY29uZGljaW9uZXMgZGVzY3JpdG9zIGFxdcOtLiBOb3MgcmVzZXJ2YW1vcyBlbCBkZXJlY2hvIGRlIG1vZGlmaWNhciBlc3RvcyB0w6lybWlub3MgZW4gY3VhbHF1aWVyIG1vbWVudG8geSBkaWNob3MgY2FtYmlvcyBzZXLDoW4gbm90aWZpY2Fkb3Mgb3BvcnR1bmFtZW50ZS5cclxuICAgIDMuIFJlY29waWxhY2nDs24gZGUgRGF0b3MgYSBUcmF2w6lzIGRlbCBTaXRpb1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcmVjb3BpbGEgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGEgdHJhdsOpcyBkZWwgaW5ncmVzbyBkZSBkYXRvcyBwZXJzb25hbGVzIHkgIHJlZ2lzdHJvIGRlIHVzdWFyaW9zLiBMb3MgZGF0b3MgcmVjb3BpbGFkb3MgaW5jbHV5ZW4gZG9jdW1lbnRvLCBhcGVsbGlkbyB5IG5vbWJyZSBkZWwgcGFjaWVudGUsIGZlY2hhIGRlIG5hY2ltaWVudG8sIHNleG8sIGRhdG9zIGRlIGNvbnRhY3RvIHkgY29iZXJ0dXJhIG3DqWRpY2EgeSBzZXLDoW4gdXRpbGl6YWRvcyBwYXJhIHByb3BvcmNpb25hciBzZXJ2aWNpb3MgcGVyc29uYWxpemFkb3MuXHJcbiAgICA0LiBVc28gZGUgQ29va2llc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzIHBhcmEgbWVqb3JhciBzdSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIHkgcGVyc29uYWxpemFyIGVsIGNvbnRlbmlkbyBxdWUgcmVjaWJlLiBMYXMgY29va2llcyBzb24gcGVxdWXDsW9zIGFyY2hpdm9zIHF1ZSBzZSBhbG1hY2VuYW4gZW4gc3UgZGlzcG9zaXRpdm8gYWwgbmF2ZWdhciBwb3Igc2l0aW9zIHdlYi4gUGFyYSBvYnRlbmVyIG3DoXMgaW5mb3JtYWNpw7NuLCBjb25zdWx0ZSBudWVzdHJhIFBvbMOtdGljYSBkZSBDb29raWVzLlxyXG4gICAgNS4gU2VndXJpZGFkXHJcbiAgICBJbXBsZW1lbnRhbW9zIG1lZGlkYXMgZGUgc2VndXJpZGFkIGFkZWN1YWRhcyBwYXJhIHByb3RlZ2VyIGxvcyBkYXRvcyBwZXJzb25hbGVzIHF1ZSBub3MgcHJvcG9yY2lvbmEgYSB0cmF2w6lzIGRlbCBzaXRpbywgdXRpbGl6YW5kbyBjb25leGlvbmVzIHNlZ3VyYXMgKEhUVFBTKSwgY2lmcmFkbyBkZSBkYXRvcyB5IGF1dGVudGljYWNpw7NuIGVuIMOhcmVhcyBwcm90ZWdpZGFzIGRlbCBzaXRpby5cclxuICAgIDYuIERlcmVjaG9zIGRlbCBVc3VhcmlvXHJcbiAgICBDb25mb3JtZSBhIGxhIExleSAyNS4zMjYgZGUgUHJvdGVjY2nDs24gZGUgbG9zIERhdG9zIFBlcnNvbmFsZXMsIHVzdGVkIHRpZW5lIGRlcmVjaG8gYSBhY2NlZGVyLCByZWN0aWZpY2FyLCBhY3R1YWxpemFyIHkgc29saWNpdGFyIGxhIGVsaW1pbmFjacOzbiBkZSBzdXMgZGF0b3MgcGVyc29uYWxlcyBwcm9wb3JjaW9uYWRvcyBhIHRyYXbDqXMgZGUgZXN0ZSBzaXRpbyB3ZWIuIFBhcmEgZWplcmNlciBlc3RvcyBkZXJlY2hvcywgcG9yIGZhdm9yIGNvbnTDoWN0ZW5vcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuXHJcbiAgICA3LiBQb2zDrXRpY2EgZGUgRW5sYWNlcyBFeHRlcm5vc1xyXG4gICAgRXN0ZSBzaXRpbyB3ZWIgcHVlZGUgY29udGVuZXIgZW5sYWNlcyBhIHNpdGlvcyB3ZWIgb3BlcmFkb3MgcG9yIHRlcmNlcm9zLiBObyBub3MgaGFjZW1vcyByZXNwb25zYWJsZXMgZGVsIGNvbnRlbmlkbyBuaSBkZSBsYXMgcG9sw610aWNhcyBkZSBwcml2YWNpZGFkIGRlIGRpY2hvcyBzaXRpb3MuIEFsIGFjY2VkZXIgYSBlbGxvcywgbG8gaGFjZSBiYWpvIHN1IHByb3BpYSByZXNwb25zYWJpbGlkYWQuXHJcbiAgICA4LiBKdXJpc2RpY2Npw7NuIHkgTGV5IEFwbGljYWJsZVxyXG4gICAgRXN0b3MgVMOpcm1pbm9zIHkgQ29uZGljaW9uZXMgc2UgcmlnZW4gcG9yIGxhcyBsZXllcyBkZSBsYSBSZXDDumJsaWNhIEFyZ2VudGluYS4gQ3VhbHF1aWVyIGRpc3B1dGEgcmVsYWNpb25hZGEgY29uIHN1IHVzbyBkZWwgc2l0aW8gd2ViIHNlcsOhIHNvbWV0aWRhIGEgbG9zIHRyaWJ1bmFsZXMgY29tcGV0ZW50ZXMgZW4gbGEgQ2l1ZGFkIEF1dMOzbm9tYSBkZSBCdWVub3MgQWlyZXMuXHJcbiAgICA5LiBDb250YWN0b1xyXG4gICAgU2kgdGllbmUgYWxndW5hIHByZWd1bnRhIHNvYnJlIGVzdG9zIFTDqXJtaW5vcyB5IENvbmRpY2lvbmVzLCBwdWVkZSBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbiBub3NvdHJvcyBlbiBpbmZvQHRoaXN5cy5uZXQuYXIuYCxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVtZShjb25zdWx0b3Jpb0lkKSB7XHJcbiAgICByZXR1cm4gVEhFTUVTW2NvbnN1bHRvcmlvc05hbWVUb0lkW2NvbnN1bHRvcmlvSWRdID8/IDBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWV0YUluZm8oY29uc3VsdG9yaW9JZCkge1xyXG4gICAgY29uc3VsdG9yaW9JZCA9IGNvbnN1bHRvcmlvSWQ/LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb25zdWx0b3Jpb0Z1bGxOYW1lOiBjb25zdWx0b3Jpb3NGdWxsTmFtZVtjb25zdWx0b3Jpb0lkXSxcclxuICAgICAgICBwYWdlVGl0bGU6IHBhZ2VUaXRsZXNbY29uc3VsdG9yaW9JZF0sXHJcbiAgICAgICAgZmF2SWNvblJvdXRlOiBmYXZJY29uUm91dGVzW2NvbnN1bHRvcmlvSWRdID8/IFwidGVzdC5wbmdcIixcclxuICAgICAgICB0ZXJtczogdGVybXNbY29uc3VsdG9yaW9JZF0sXHJcbiAgICAgICAgbWFpblBhZ2VMaW5rOiBtYWluUGFnZUxpbmtzW2NvbnN1bHRvcmlvSWRdLFxyXG4gICAgICAgIGxvZ286IGxvZ29zW2NvbnN1bHRvcmlvSWRdLFxyXG4gICAgICAgIHNvbGljaXRhclR1cm5vTWVzc2FnZTogc29saWNpdGFyVHVybm9NZXNzYWdlc1tjb25zdWx0b3Jpb0lkXVxyXG4gICAgfVxyXG59IiwiY29uc3QgREVGQVVMVCA9IHtcclxuICAgIGNvbG9yUHJpbWFyeTogXCIjZTAxMTVmXCIsXHJcbiAgICBjb2xvclNlY29uZGFyeTogXCJibHVlXCIsXHJcbiAgICBjb2xvck5ldXRyYWw6IFwiI2RkZFwiLFxyXG4gICAgY29sb3JFcnJvcjogXCIjYWEwMDAwXCIsXHJcbiAgICBjb2xvckVycm9yMjogXCIjZmZhYWFhXCIsXHJcbiAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInB1cnBsZVwiLCBcInZpb2xldFwiXSxcclxuICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2ZmNjZjY1wiLCBcInBpbmtcIl0sXHJcbiAgICB0dXJuU3RhdHVzQ29sb3JzOiB7XHJcbiAgICAgICAgQ09NUExFVEVEOiBcImdyZWVuXCIsXHJcbiAgICAgICAgQ0FOQ0VMTEVEOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgIEFCU0VOVDogXCJyZWRcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgVEhFTUVTID0gW1xyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIiMwNzM3NjNcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjN2I5OWViZmZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwNzM3NjNcIiwgXCIjODM5YmIxXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiIzdiOTllYmZmXCIsIFwiI2RlZGNmM2ZmXCJdLFxyXG4gICAgfSwgIFxyXG4gICAgLy8gLy9UT0RPOiBSRU1PVkUgVEhFTUUsIE9OTFkgRk9SIFRFU1RJTkdcclxuICAgIC8vIHtcclxuICAgIC8vICAgICAuLi5ERUZBVUxULFxyXG4gICAgLy8gICAgIGNvbG9yUHJpbWFyeTogXCJ5ZWxsb3dcIixcclxuICAgIC8vICAgICBjb2xvclNlY29uZGFyeTogXCJwdXJwbGVcIixcclxuICAgIC8vICAgICBjb2xvck5ldXRyYWw6IFwiZ3JlZW5cIixcclxuICAgIC8vICAgICBjb2xvclN1Y2Nlc3M6IFwicmVkXCIsXHJcbiAgICAvLyAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiYmx1ZVwiLCBcImdvbGRcIl0sXHJcbiAgICAvLyAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCJwdXJwbGVcIiwgXCJicm93blwiXSxcclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzA3Mzc2M1wiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIiNmNDQzMzZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwNzM3NjNcIiwgXCIjODM5YmIxXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2EzMDAwMFwiLCBcIiNkYjRjNGNcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIiM1MzlERDlcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjMTlCODgyXCIsXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBcIiNkNmQ5ZWRcIixcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgICAgICBjYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzOiBbXCIjNTM5REQ5XCIsIFwiIzI5NTJDMFwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMxOUI4ODJcIiwgXCIjNjZCODgyXCJdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAuLi5ERUZBVUxULFxyXG4gICAgICAgIGNvbG9yUHJpbWFyeTogXCIjM2M2ODllXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiIzZlOTMyMlwiLFxyXG4gICAgICAgIGNvbG9yTmV1dHJhbDogXCIjZDZkOWVkXCIsXHJcbiAgICAgICAgY29sb3JTdWNjZXNzOiBcImdyZWVuXCIsXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW1wiIzNjNjg5ZVwiLCBcIiNjZGQ3ZTFcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjNmU5MzIyXCIsIFwiI2MwY2U5NFwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzYzNjE2MGZmXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI2NjNDAxNWZmXCIsXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBcIiNlZGUyZDZmZlwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiNjYzQwMTVmZlwiLCBcIiNkZGFmODNmZlwiXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiM2MzYxNjBmZlwiLCBcIiM5NDk0OTNmZlwiXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzBCMkU1QlwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIiMxOUI4ODJcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwQjJFNUJcIiwgXCIjMTE0QTdBXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiIzE5Qjg4MlwiLCBcIiMyRkQzOUFcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcIiMwQjJFNUJcIixcclxuICAgICAgICBjb2xvclNlY29uZGFyeTogXCIjYjk4OTA0ZmZcIixcclxuICAgICAgICBjb2xvck5ldXRyYWw6IFwiI2Q2ZDllZFwiLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogXCJncmVlblwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcIiMwQjJFNUJcIiwgXCIjMTE0QTdBXCJdLFxyXG4gICAgICAgIGNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yczogW1wiI2I5ODkwNGZmXCIsIFwiI2U0YTkwOWZmXCJdLFxyXG4gICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgLi4uREVGQVVMVCxcclxuICAgICAgICBjb2xvclByaW1hcnk6IFwiIzkxN2I0M2ZmXCIsXHJcbiAgICAgICAgY29sb3JTZWNvbmRhcnk6IFwiI2MyYWE4NWZmXCIsXHJcbiAgICAgICAgY29sb3JOZXV0cmFsOiBcIiNkNmQ5ZWRcIixcclxuICAgICAgICBjb2xvclN1Y2Nlc3M6IFwiZ3JlZW5cIixcclxuICAgICAgICBjYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzOiBbXCIjOTE3YjQzZmZcIiwgXCIjZGFjNDhkZmZcIl0sXHJcbiAgICAgICAgY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzOiBbXCIjYzJhYTg1ZmZcIiwgXCIjZjBkMmE1ZmZcIl0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIC4uLkRFRkFVTFQsXHJcbiAgICAgICAgY29sb3JQcmltYXJ5OiBcInR1cnF1b2lzZVwiLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBcIm9yYW5nZVJlZFwiLFxyXG4gICAgICAgIGNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnM6IFtcInR1cnF1b2lzZVwiLCBcImN5YW5cIl0sXHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG4vL1BBUkEgUVVFIEZVTkNJT05FTiBMQVMgQk9YIFNIQURPV1MsIExPUyBDT0xPUkVTIERFQkVSSUFOIEVTVEFSIEVOIEhFWEFcclxuXHJcbmNvbnN0IGNocm9tYSA9IHJlcXVpcmUoJ2Nocm9tYS1qcycpO1xyXG5cclxuZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcikge1xyXG4gICAgY29uc3QgY29sb3JPYmogPSBjaHJvbWEoY29sb3IpO1xyXG4gICAgcmV0dXJuIGNvbG9yT2JqLmhleCgpO1xyXG59XHJcblxyXG5USEVNRVMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgIFRIRU1FU1tpbmRleF0gPSB7XHJcbiAgICAgICAgLi4uVEhFTUVTW2luZGV4XSxcclxuICAgICAgICBjb2xvclByaW1hcnk6IGNvbG9yVG9IZXgoZWxlbS5jb2xvclByaW1hcnkpLFxyXG4gICAgICAgIGNvbG9yU2Vjb25kYXJ5OiBjb2xvclRvSGV4KGVsZW0uY29sb3JTZWNvbmRhcnkpLFxyXG4gICAgICAgIGNvbG9yTmV1dHJhbDogY29sb3JUb0hleChlbGVtLmNvbG9yTmV1dHJhbCksXHJcbiAgICAgICAgY29sb3JFcnJvcjogY29sb3JUb0hleChlbGVtLmNvbG9yRXJyb3IpLFxyXG4gICAgICAgIGNvbG9yRXJyb3IyOiBjb2xvclRvSGV4KGVsZW0uY29sb3JFcnJvcjIpLFxyXG4gICAgICAgIGNvbG9yU3VjY2VzczogY29sb3JUb0hleChlbGVtLmNvbG9yU3VjY2VzcyksXHJcbiAgICAgICAgY2FyZEhlYWRlclByaW1hcnlHcmFkaWVudENvbG9yczogW2NvbG9yVG9IZXgoZWxlbS5jYXJkSGVhZGVyUHJpbWFyeUdyYWRpZW50Q29sb3JzWzBdKSwgY29sb3JUb0hleChlbGVtLmNhcmRIZWFkZXJQcmltYXJ5R3JhZGllbnRDb2xvcnNbMV0pXSxcclxuICAgICAgICBjYXJkSGVhZGVyU2Vjb25kYXJ5R3JhZGllbnRDb2xvcnM6IFtjb2xvclRvSGV4KGVsZW0uY2FyZEhlYWRlclNlY29uZGFyeUdyYWRpZW50Q29sb3JzWzBdKSwgY29sb3JUb0hleChlbGVtLmNhcmRIZWFkZXJTZWNvbmRhcnlHcmFkaWVudENvbG9yc1sxXSldLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRIRU1FUzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVUkwoY29uc3VsdG9yaW9JZCkge1xyXG4gICAgY29uc29sZS5sb2coY29uc3VsdG9yaW9JZCk7XHJcblxyXG4gICAgc3dpdGNoIChjb25zdWx0b3Jpb0lkPy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAndXJvJzpcclxuICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vY3V1bWRwLmRkbnMubmV0OjkwMDUvdjEvXCI7XHJcbiAgICAgICAgY2FzZSAnaWNjJzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9pY2NtZHAuZGRucy5uZXQ6ODg4OS92MS9cIjtcclxuICAgICAgICBjYXNlICd0ZXN0JzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3YxL1wiO1xyXG4gICAgICAgIGNhc2UgJ2xyb2xkYW4nOlxyXG4gICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9zYWx1ZGRpZ2l0YWwuZGRucy5uZXQ6OTAwMS92MS9cIjsgXHJcbiAgICAgICAgY2FzZSAnc2V0YSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2luc3RpdHV0b3NldGEuZGRucy5uZXQ6OTAwMy92MS9cIjsgXHJcbiAgICAgICAgY2FzZSAnY2ljJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vY2ljYmFsY2FyY2UuZHluZG5zLm9yZzoxNzAwMS92MS9cIjsgXHJcbiAgICAgICAgY2FzZSAnZmFkZSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2ZhZGVtZHAuZGRucy5uZXQ6OTAwMS92MS9cIjsgXHJcbiAgICAgICAgY2FzZSAnbmdvbnphbGV6JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vc2FsdWRkaWdpdGFsLmRkbnMubmV0OjkwMDkvdjEvXCI7IFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ29uc3VsdG9yaW9JRCBkZXNjb25vY2lkbzogJHtjb25zdWx0b3Jpb0lkfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwczovL2RlZmF1bHQtdXJsLmNvbS92MS9cIjsgLy8gQ2FtYmlhIGVzdG8gcG9yIGxhIFVSTCBwb3IgZGVmZWN0byBxdWUgbmVjZXNpdGVzXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVzc2FnZURpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9EaWFsb2dzL01lc3NhZ2VEaWFsb2dcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlRGlhbG9nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG4vKiBpY29uOiBcIm1lc3NhZ2VcIiA6IFwid2FybmluZ1wiICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2VEaWFsb2dDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ljb24sIHNldEljb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgIHNldFRpdGxlKFwiXCIpO1xyXG4gICAgc2V0SWNvbihcIlwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRPcGVuID0gKCkgPT4ge1xyXG4gICAgcmVzZXQoKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdhcm5pbmdPcGVuID0gKG1lc3NhZ2UsIHRpdGxlKSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgc2V0VGl0bGUodGl0bGUgPz8gXCJcIik7XHJcbiAgICBzZXRJY29uKFwid2FybmluZ1wiKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtZXNzYWdlT3BlbiA9IChtZXNzYWdlLCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShtZXNzYWdlKTtcclxuICAgIHNldFRpdGxlKHRpdGxlID8/IFwiXCIpO1xyXG4gICAgc2V0SWNvbihcIm1lc3NhZ2VcIik7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZXNzYWdlRGlhbG9nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvcGVuOiBvcGVuQ2FsbGJhY2ssIGNsb3NlLCBzZXRNZXNzYWdlLCBzZXRUaXRsZSwgc2V0SWNvbiwgcmVzZXQsIGRlZmF1bHRPcGVuLCBtZXNzYWdlT3Blbiwgd2FybmluZ09wZW4gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPE1lc3NhZ2VEaWFsb2dcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgbWVzc2FnZT17bWVzc2FnZSB8fCBcIk9jdXJyacOzIHVuIGVycm9yIGVuIGVsIHNlcnZpZG9yLCBpbnRlbnRlIG51ZXZhbWVudGUuXCJ9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlID09PSBcIlwiID8gIFwiSHVibyB1biBwcm9ibGVtYVwiIDogdGl0bGV9XHJcbiAgICAgICAgaWNvbj17aWNvbiB8fCBcIndhcm5pbmdcIn1cclxuICAgICAgLz5cclxuICAgIDwvTWVzc2FnZURpYWxvZ0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXRhSW5mb0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuLyogaWNvbjogXCJtZXNzYWdlXCIgOiBcIndhcm5pbmdcIiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhSW5mb0NvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCBtZXRhSW5mbyB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXRhSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWV0YUluZm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG1ldGFJbmZvIH19PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bWV0YUluZm8ucGFnZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cmVxdWlyZShcImFzc2V0cy9pbWcvZmF2aWNvbnMvXCIgKyBtZXRhSW5mby5mYXZJY29uUm91dGUpfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L01ldGFJbmZvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCB0aGVtZTogaW5pdGlhbFRoZW1lIH0pIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGluaXRpYWxUaGVtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCBzZXRUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuLCBpbml0VXNlciB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoaW5pdFVzZXIgPz8ge30pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoc3R5bGVzKSB7XHJcbiAgICBjb25zdCB7IHRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbiAgICByZXR1cm4gdXNlU3R5bGVzKHRoZW1lKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIi8qIVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZS5qc1wiO1xyXG5cclxuaW1wb3J0IFwiYXNzZXRzL2Nzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmNzcz92PTEuMS4wXCI7XHJcbmltcG9ydCBUaGVtZUNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9UaGVtZUNvbnRleHRQcm92aWRlclwiO1xyXG5pbXBvcnQgVXNlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFByb3ZpZGVyXCI7XHJcblxyXG5pbXBvcnQgbm9va2llcywgeyBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgaGlkZUxvYWQsIHNob3dMb2FkIH0gZnJvbSBcIi4uL3V0aWxzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHsgZ2V0UGF0aWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyQXV0aFwiO1xyXG5pbXBvcnQgR0xPQkFMX0dFVF9UT0tFTiBmcm9tIFwiLi4vdXRpbHMvdG9rZW5cIjtcclxuaW1wb3J0IE1lc3NhZ2VEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlhbG9ncy9NZXNzYWdlRGlhbG9nXCI7XHJcbmltcG9ydCBNZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L01lc3NhZ2VEaWFsb2dDb250ZXh0UHJvdmlkZXJcIjtcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgZ2V0TWV0YUluZm8sIGdldFRoZW1lIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9DT05GSUcuanNcIjtcclxuaW1wb3J0IE1ldGFJbmZvQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L01ldGFJbmZvQ29udGV4dFByb3ZpZGVyLmpzXCI7XHJcbmltcG9ydCBlcnJvckxvZyBmcm9tIFwiLi4vdXRpbHMvZGVidWcuanNcIjtcclxuXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICh1cmwpID0+IHtcclxuICBzaG93TG9hZCh1cmwpO1xyXG59KTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4ge1xyXG4gIGhpZGVMb2FkKCk7XHJcbn0pO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiB7XHJcbiAgaGlkZUxvYWQoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYFxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogKiBOZXh0SlMgTWF0ZXJpYWwgRGFzaGJvYXJkIHYxLjEuMCBiYXNlZCBvbiBNYXRlcmlhbCBEYXNoYm9hcmQgUmVhY3QgdjEuOS4wXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkXHJcbiogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxyXG4qIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxyXG5cclxuKiBDb2RlZCBieSBDcmVhdGl2ZSBUaW1cclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbmApO1xyXG4gICAgZG9jdW1lbnQuaW5zZXJ0QmVmb3JlKGNvbW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgfVxyXG4gIC8vIEdldEluaXRpYWxQcm9wcyBjb3JyZSB0YW50byBlbiBzZXJ2ZXIgYWwgcHJpbmNpcGlvLCBjb21vIGVuIGNsaWVudGUgYWwgY2FtYmlhciBkZSBwYWdpbmEuIFxyXG4gIC8vIExhIGxvZ2ljYSByZXF1ZXJpZGEgc29sbyBlcyByZXF1ZXJpZGEgYWwgY29ycmVyIGRlbCBzZXJ2ZXIgYWwgcHJpbmNpcGlvLCBwb3IgdGFudG8gbm8gdmFsaWRvIHF1ZSBjb3JyYSBkZXNkZSBlbCBjbGllbnRlLlxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgIFxyXG4gICAgbGV0IHsgY29uc3VsdG9yaW9JZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgXHJcbiAgICBjb25zdCBjb29raWVzID0gbm9va2llcy5nZXQoY3R4KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHtjb29raWVzLCBjb25zdWx0b3Jpb0lkLCByb3V0ZXIsIHF1ZXJ5OiByb3V0ZXIucXVlcnl9KTsgICAgXHJcbiAgICBcclxuICAgIC8vIFNldGVhciBvIHBlZGlyIGlkIGRlIGNvbnN1bHRvcmlvXHJcbiAgICBpZiAoY29va2llcy5jb25zdWx0b3Jpb0lkICYmIGNvbnN1bHRvcmlvSWQgJiYgY29uc3VsdG9yaW9JZCAhPSBjb29raWVzLmNvbnN1bHRvcmlvSWQpIHtcclxuICAgICAgT2JqZWN0LmtleXMoY29va2llcykuZm9yRWFjaCgoY29va2llTmFtZSkgPT4ge1xyXG4gICAgICAgIG5vb2tpZXMuZGVzdHJveShjdHgsIGNvb2tpZU5hbWUsIHsgcGF0aDogJy8nIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoY29uc3VsdG9yaW9JZCkge1xyXG4gICAgICAvLyBTZXRcclxuICAgICAgbm9va2llcy5zZXQoY3R4LCAnY29uc3VsdG9yaW9JZCcsIGNvbnN1bHRvcmlvSWQsIHtcclxuICAgICAgICBtYXhBZ2U6IDUwICogMzY1ICogMjQgKiA2MCAqIDYwLFxyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdWx0b3Jpb0lkID0gY29va2llcy5jb25zdWx0b3Jpb0lkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHtjb29raWVzVXBkYXRlZDogbm9va2llcy5nZXQoY3R4KX0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIFJlZGlyaWdpciBkZSBhZG1pbiBzaSBlbCB1c3VhcmlvIG5vIGVzdGEgbG9ndWVhZG9cclxuICAgIC8vIGlmIChjb29raWVzLmlkID09PSB1bmRlZmluZWQgJiYgcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcImFkbWluXCIpICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge1xyXG4gICAgLy8gICAgIExvY2F0aW9uOiAnL2xvZ2luLycgKyBjb25zdWx0b3Jpb0lkLFxyXG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHJldHVybiBjdHgucmVzLmVuZCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIFxyXG4gICAgLy8gU2V0ZWFyIHNpIGV4aXN0ZSwgZWwgdXN1YXJpbyBxdWUgeWEgZXN0YSBsb2d1ZWFkb1xyXG4gICAgbGV0IGluaXRVc2VyO1xyXG4gICAgaWYgKGNvb2tpZXMuaWQgIT09IHVuZGVmaW5lZCAmJiBOdW1iZXIoY29va2llcy5sb2dpblRyaWVzID8/IDApIDw9IDIgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgIXJvdXRlci5hc1BhdGguaW5jbHVkZXMoXCJzZXJ2ZXItZXJyb3JcIikpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkLCB0b2tlbiB9ID0geyBpZDogY29va2llcy5pZCwgdG9rZW46IGF3YWl0IEdMT0JBTF9HRVRfVE9LRU4oY3R4KSB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgaWQsIGNvbnN1bHRvcmlvSWQsIHRva2VuIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwYXRpZW50UmVzcG9uc2UgPSBhd2FpdCBnZXRQYXRpZW50KGlkLCBjb25zdWx0b3Jpb0lkLCB0b2tlbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coeyBwYXRpZW50UmVzcG9uc2UgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFwYXRpZW50UmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRVc2VyID0gcGF0aWVudFJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGNvb2tpZXMuYXJjaGl2b3NfaGFiaWxpdGFkbyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBpbml0VXNlcj8uYXJjaGl2b3NfaGFiaWxpdGFkbyA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICBpbml0VXNlcj8uZW52aWFyX2FyY2hpdm9zX2hhYmlsaXRhZG8gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaW5pdFVzZXIgPSB7IC4uLmluaXRVc2VyLCBhcmNoaXZvc19oYWJpbGl0YWRvOiBjb29raWVzLmFyY2hpdm9zX2hhYmlsaXRhZG8gPT09IFwiMVwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcm91dGVyLmFzUGF0aC5pbmNsdWRlcyhcImFkbWluXCIpICYmICFyb3V0ZXIuYXNQYXRoLmluY2x1ZGVzKFwidGVzdGluZ1wiKSkge1xyXG4gICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgICAgIExvY2F0aW9uOiAnL2FkbWluLycgKyBjb25zdWx0b3Jpb0lkICsgXCIvZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGN0eC5yZXMuZW5kKCk7XHJcbiAgICAgICAgICAvLyBjdHgucmVzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gbm9va2llcy5zZXQoY3R4LCAnbG9naW5UcmllcycsIChOdW1iZXIoY29va2llcy5sb2dpblRyaWVzID8/IDApKSArIDEsIHtcclxuICAgICAgICAvLyAgIG1heEFnZTogNjAsXHJcbiAgICAgICAgLy8gICBwYXRoOiAnLycsXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBpZiAoTnVtYmVyKGNvb2tpZXMubG9naW5UcmllcykgPT09IDIpIHtcclxuICAgICAgICAvLyAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwiaWRcIiwge1xyXG4gICAgICAgIC8vICAgICBwYXRoOiBcIi9cIlxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gICBub29raWVzLmRlc3Ryb3koY3R4LCBcImRuaVwiLCB7XHJcbiAgICAgICAgLy8gICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyAgIG5vb2tpZXMuZGVzdHJveShjdHgsIFwibG9naW5Ucmllc1wiLCB7XHJcbiAgICAgICAgLy8gICAgIHBhdGg6IFwiL1wiXHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZXJyb3JMb2coXCIlY0VOVFJBTkRPIFBBUEFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgICBMb2NhdGlvbjogJy9sb2dpbi8nICsgY29uc3VsdG9yaW9JZCArIFwiL3NlcnZlci1lcnJvclwiLFxyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdHgucmVzLmVuZCgpO1xyXG4gICAgICAgIC8vIGN0eC5yZXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY29uc3VsdG9yaW9JZCwgaW5pdFVzZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWV0YUluZm9Db250ZXh0UHJvdmlkZXIgbWV0YUluZm89e2dldE1ldGFJbmZvKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICA8VGhlbWVDb250ZXh0UHJvdmlkZXIgdGhlbWU9e2dldFRoZW1lKGNvbnN1bHRvcmlvSWQpfT5cclxuICAgICAgICAgIDxVc2VyQ29udGV4dFByb3ZpZGVyIGluaXRVc2VyPXt7IC4uLmluaXRVc2VyLCBjb25zdWx0b3Jpb0lkIH19PlxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1ZT1VSX0tFWV9IRVJFXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZURpYWxvZ0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlRGlhbG9nQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDwvVGhlbWVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDwvTWV0YUluZm9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI7XHJcbmltcG9ydCBMaWJyYXJ5Qm9va3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIjtcclxuaW1wb3J0IExvY2F0aW9uT24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgVW5hcmNoaXZlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCI7XHJcbmltcG9ydCBLZXkgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZwbktleSc7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVG9kYXknO1xyXG5pbXBvcnQgUmVjZXRhcyBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdCc7XHJcblxyXG5pbXBvcnQgTG9jYWxIb3NwaXRhbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsSG9zcGl0YWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXHJcbiAgICBuYW1lOiBcIkluaWNpb1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhNmI2K3YqSDYp9mE2YLZitin2K/YqVwiLFxyXG4gICAgaWNvbjogRGFzaGJvYXJkLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3Byb2ZpbGVcIixcclxuICAgIG5hbWU6IFwiTWkgUGVyZmlsXCIsXHJcbiAgICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gICAgaWNvbjogUGVyc29uLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3NvbGljaXRhclR1cm5vXCIsXHJcbiAgICBuYW1lOiBcIlNvbGljaXRhciBUdXJub1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IENhbGVuZGFyLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2dlc3Rpb25UdXJub3NcIixcclxuICAgIG5hbWU6IFwiR2VzdGnDs24gZGUgVHVybm9zXCIsXHJcbiAgICBydGxOYW1lOiBcItmF2YTZgSDYqti52LHZitmB2Yog2YTZhNmF2LPYqtiu2K/ZhVwiLFxyXG4gICAgaWNvbjogQ2FsZW5kYXIsXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZXN0dWRpb3NcIixcclxuICAgIG5hbWU6IFwiRXN0dWRpb3MgUmVhbGl6YWRvc1wiLFxyXG4gICAgcnRsTmFtZTogXCLZhdmE2YEg2KrYudix2YrZgdmKINmE2YTZhdiz2KrYrtiv2YVcIixcclxuICAgIGljb246IExvY2FsSG9zcGl0YWxJY29uLFxyXG4gICAgcmVxdWllcmVQb3J0YWw6IHRydWUsXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9hcmNoaXZvc1wiLFxyXG4gICAgbmFtZTogXCJFbnZpYXIgQXJjaGl2b3NcIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBMb2NhbEhvc3BpdGFsSWNvbixcclxuICAgIHJlcXVpZXJlRW52aW9BcmNoaXZvczogdHJ1ZSxcclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3JlY2V0YXNcIixcclxuICAgIG5hbWU6IFwiTWlzIFJlY2V0YXNcIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBSZWNldGFzLFxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvc29saWNpdGFyUmVjZXRhXCIsXHJcbiAgLy8gICBuYW1lOiBcIlNvbGljaXRhciBSZWNldGFcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgLy8gICBpY29uOiBSZWNldGFzLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL2dlc3Rpb25SZWNldGFzXCIsXHJcbiAgLy8gICBuYW1lOiBcIkdlc3Rpw7NuIGRlIFJlY2V0YXNcIixcclxuICAvLyAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgLy8gICBpY29uOiBSZWNldGFzLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL3RhYmxlLWxpc3RcIixcclxuICAvLyAgIG5hbWU6IFwiVGFibGUgTGlzdFwiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLZgtin2KbZhdipINin2YTYrNiv2YjZhFwiLFxyXG4gIC8vICAgaWNvbjogXCJjb250ZW50X3Bhc3RlXCIsXHJcblxyXG4gIC8vICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgcGF0aDogXCIvdHlwb2dyYXBoeVwiLFxyXG4gIC8vICAgbmFtZTogXCJUeXBvZ3JhcGh5XCIsXHJcbiAgLy8gICBydGxOYW1lOiBcIti32KjYp9i52KlcIixcclxuICAvLyAgIGljb246IExpYnJhcnlCb29rcyxcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9pY29uc1wiLFxyXG4gIC8vICAgbmFtZTogXCJJY29uc1wiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLYp9mE2LHZhdmI2LJcIixcclxuICAvLyAgIGljb246IEJ1YmJsZUNoYXJ0LFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL21hcHNcIixcclxuICAvLyAgIG5hbWU6IFwiTWFwc1wiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLYrtix2KfYpti3XCIsXHJcbiAgLy8gICBpY29uOiBMb2NhdGlvbk9uLFxyXG5cclxuICAvLyAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIHBhdGg6IFwiL25vdGlmaWNhdGlvbnNcIixcclxuICAvLyAgIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIC8vICAgcnRsTmFtZTogXCLYpdiu2LfYp9ix2KfYqlwiLFxyXG4gIC8vICAgaWNvbjogTm90aWZpY2F0aW9ucyxcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBwYXRoOiBcIi9wcm9mZXNpb25hbGVzXCIsXHJcbiAgLy8gICBuYW1lOiBcIlByb2Zlc2lvbmFsZXNcIixcclxuICAvLyAgIGljb25UeXBlOiBcInN2Z1wiLFxyXG4gIC8vICAgaWNvbjogPHN2ZyBjbGFzc05hbWU9XCJsaW5rQ3VzdG9tU1ZHXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPGc+IDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBIMjRWMjRIMHpcIi8+IDxwYXRoIGQ9XCJNOCAzdjJINnY0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTRWNWgtMlYzaDNjLjU1MiAwIDEgLjQ0OCAxIDF2NWMwIDIuOTczLTIuMTYyIDUuNDQtNSA1LjkxN1YxNi41YzAgMS45MzMgMS41NjcgMy41IDMuNSAzLjUgMS40OTcgMCAyLjc3NS0uOTQgMy4yNzUtMi4yNjNDMTYuNzI4IDE3LjI3IDE2IDE2LjIyIDE2IDE1YzAtMS42NTcgMS4zNDMtMyAzLTNzMyAxLjM0MyAzIDNjMCAxLjM3MS0uOTIgMi41MjctMi4xNzYgMi44ODVDMTkuMjEgMjAuMjUyIDE3LjA1OSAyMiAxNC41IDIyIDExLjQ2MiAyMiA5IDE5LjUzOCA5IDE2LjV2LTEuNTgzQzYuMTYyIDE0LjQ0MSA0IDExLjk3MyA0IDlWNGMwLS41NTIuNDQ4LTEgMS0xaDN6XCIvPiA8L2c+IDwvc3ZnPixcclxuXHJcbiAgLy8gICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgLy8gfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9sb2dvdXRcIixcclxuICAgIG5hbWU6IFwiQ2VycmFyIFNlc2nDs25cIixcclxuICAgIHJ0bE5hbWU6IFwi2KfZhNiq2LfZiNixINmE2YTYp9it2KrYsdin2YHZitipXCIsXHJcbiAgICBpY29uOiBLZXksXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmRSb3V0ZXM7XHJcbiIsImltcG9ydCBnZXRVUkwgZnJvbSBcIi4uL2NvbnN0YW50cy9VUkxcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2tlbihjb25zdWx0b3Jpb0lkKSB7XHJcbiAgICBjb25zdCByMSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArICdBdXRoL0xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJ1c2VyTmFtZVwiOiBcImZyb250RW5kVGVhbVwiLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiMjk2MTM3NzAxMi4xNDAyNjY5ODU0XCJcclxuXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgcjEuanNvbigpOyAvL1NpIG5vIGhheSB0b2tlbiBoYWNlIHRocm93IGRpcmVjdGFtZW50ZVxyXG5cclxuICAgIHJldHVybiB0b2tlbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgcmVsYXRpdmVSb3V0ZSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnZXRVUkwoY29uc3VsdG9yaW9JZCkgKyByZWxhdGl2ZVJvdXRlLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke3Rva2VufWAsIC8vIG5vdGljZSB0aGUgQmVhcmVyIGJlZm9yZSB5b3VyIHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKGNvbnN1bHRvcmlvSWQsIHRva2VuLCByZWxhdGl2ZVJvdXRlKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcblxyXG4vLyBFbCBib2R5IHNlIGNvbnZpZXJ0ZSBhIEpTT04gcG9yIGRlZmVjdG9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUsIGJvZHkpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7dG9rZW59YCwgLy8gbm90aWNlIHRoZSBCZWFyZXIgYmVmb3JlIHlvdXIgdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1RfRk9STURBVEEoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUsIGZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdldFVSTChjb25zdWx0b3Jpb0lkKSArIHJlbGF0aXZlUm91dGUsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYGJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQoY29uc3VsdG9yaW9JZCwgdG9rZW4sIHJlbGF0aXZlUm91dGUsIGJvZHkpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0VVJMKGNvbnN1bHRvcmlvSWQpICsgcmVsYXRpdmVSb3V0ZSwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHt0b2tlbn1gLCAvLyBub3RpY2UgdGhlIEJlYXJlciBiZWZvcmUgeW91ciB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcbiIsImltcG9ydCBVUkwgZnJvbSBcIi4uL2NvbnN0YW50cy9VUkxcIjtcclxuaW1wb3J0IHsgUE9TVCB9IGZyb20gXCIuL0ZFVENILkpTXCI7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuaW1wb3J0IHsgR0VUIH0gZnJvbSBcIi4vRkVUQ0guSlNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dJbih0aXBvZG9jLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNvbnN1bHRvcmlvSWQpIHtcclxuICAgIGxldCBsb2dpblJlc3BvbnNlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdWx0b3JpbyBJRDogXCIgKyBjb25zdWx0b3Jpb0lkKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKGNvbnN1bHRvcmlvSWQpOyAvL1NpIG5vIGhheSB0b2tlbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQT1NUKGNvbnN1bHRvcmlvSWQsIHRva2VuLCBcInBhdGllbnRzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpcG9kb2M6IE51bWJlcih0aXBvZG9jKSxcclxuICAgICAgICAgICAgICAgIGRuaTogTnVtYmVyKHVzZXJuYW1lKSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkgLy9TaSBmYWxsYSBlbCBsb2dpbiBzZSB2YSBhbCBjYXRjaCBkaXJlY3RhbWVudGVcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJPY3VycmnDsyB1biBlcnJvciBlbiBlbCBzZXJ2aWRvci4gSW50ZW50ZSBudWV2YW1lbnRlLlwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZWdpc3RyYWRvID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlN1cyBkYXRvcyBlc3TDoW4gY2FyZ2Fkb3MgcGVybyBubyBzZSBlbmN1ZW50cmEgcmVnaXN0cmFkby4gSW5ncmVzZSBhIFxcXCJyZWdpc3RyYXJzZVxcXCIuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOb21icmUgZGUgdXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9naW5SZXNwb25zZSA9IHsgbG9nZ2VkSW46IHRydWUsIGRhdGEsIHRva2VuIH07XHJcblxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGxvZ2luUmVzcG9uc2UgPSB7IGxvZ2dlZEluOiBmYWxzZSwgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUuZGlyKHtsb2dpblJlc3BvbnNlfSk7XHJcblxyXG4gICAgcmV0dXJuIGxvZ2luUmVzcG9uc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF0aWVudChpZCwgY29uc3VsdG9yaW9JZCwgdG9rZW4pIHtcclxuICAgIGxldCBwYXRpZW50UmVzcG9uc2U7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByMyA9IGF3YWl0IEdFVChjb25zdWx0b3Jpb0lkLCB0b2tlbiwgXCJwYXRpZW50cy9cIiArIGlkKTtcclxuXHJcbiAgICAgICAgaWYgKHIzLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcjMuanNvbigpIC8vU2kgZmFsbGEgYWwgcGVkaXIgbG9zIGRhdG9zIGRlbCBwYWNpZW50ZSB2YSBhbCBjYXRjaFxyXG5cclxuICAgICAgICBwYXRpZW50UmVzcG9uc2UgPSB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTsgXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcGF0aWVudFJlc3BvbnNlID0geyBzdWNjZXNzOiBmYWxzZSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGllbnRSZXNwb25zZTtcclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yTG9nKGVycm9yKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS5sb2coYFxceDFiWzMxbSR7ZXJyb3J9XFx4MWJbMG1gKTtcclxufSIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkKHVybCkge1xyXG4gICAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFBhZ2VDaGFuZ2UgcGF0aD17dXJsfSAvPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkKCkge1xyXG4gICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcclxufSIsImltcG9ydCBub29raWVzLCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vc2VydmljZXMvRkVUQ0guSlMnO1xyXG5cclxuLy8gU2kgZWwgdG9rZW4gZXN0YSBzZXRlYWRvLCBsbyBkZXZ1ZWx2ZSBkZXBlbmRpZW5kbyBlbCBjb250ZXh0byAoRW4gc2Vzc2lvbiBkZXNkZSBlbCBjbGllbnRlLCBlbiBjb29raWVzIGRlc2RlIGVsIHNlcnZpZG9yLilcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gR0xPQkFMX0dFVF9UT0tFTihjdHgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgLy8gQ2xpZW50LXNpZGUtb25seSBjb2RlXHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29va2llcy50b2tlbjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFNlcnZlci1zaWRlLW9ubHkgY29kZVxyXG4gICAgICAgIC8vIHRocm93IEVycm9yKCk7XHJcbiAgICAgICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oY29va2llcy5jb25zdWx0b3Jpb0lkKTtcclxuICAgICAgICAgICAgbm9va2llcy5zZXQoY3R4LCAndG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlCb29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlzdEFsdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxIb3NwaXRhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBvcnRQcm9ibGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ub2RheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9WcG5LZXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hyb21hLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=