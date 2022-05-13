/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  min-height: 100vh;\n  font-family: \"Inter\", sans-serif;\n}\nheader {\n  background-color: powderblue;\n  text-align: center;\n  padding: 30px;\n}\nmain {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 30px;\n}\n.projects {\n  flex-basis: 100px;\n}\n.current-project,\nform label {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n#select-project {\n  display: none;\n}\n.tasks {\n  flex: 1 1 400px;\n}\n.task-entry {\n  flex: 1 1 200px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\nform input,\nform select,\nform button {\n  margin-bottom: 15px;\n  padding: 4px 10px;\n  font-size: 1rem;\n}\n.task-container {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 40px auto;\n  background-color: aliceblue;\n  border: 1px solid powderblue;\n  margin-bottom: 8px;\n}\n.task-container > div {\n  display: flex;\n  align-items: center;\n  padding: 4px 10px;\n}\n.task-container > div:not(:first-of-type) {\n  justify-content: center;\n}\n.task-container > div:last-of-type {\n  margin-left: 10px;\n}\n.task-container > div:first-of-type > span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-container > .high {\n  color: red;\n}\n.task-container > .low {\n  color: gray;\n}\n.delete-btn {\n  padding: 5px 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,gCAAgC;AAClC;AACA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,eAAe;EACf,SAAS;EACT,aAAa;AACf;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,aAAa;EACb,oDAAoD;EACpD,2BAA2B;EAC3B,4BAA4B;EAC5B,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  min-height: 100vh;\n  font-family: \"Inter\", sans-serif;\n}\nheader {\n  background-color: powderblue;\n  text-align: center;\n  padding: 30px;\n}\nmain {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 30px;\n}\n.projects {\n  flex-basis: 100px;\n}\n.current-project,\nform label {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n#select-project {\n  display: none;\n}\n.tasks {\n  flex: 1 1 400px;\n}\n.task-entry {\n  flex: 1 1 200px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n}\nform input,\nform select,\nform button {\n  margin-bottom: 15px;\n  padding: 4px 10px;\n  font-size: 1rem;\n}\n.task-container {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 40px auto;\n  background-color: aliceblue;\n  border: 1px solid powderblue;\n  margin-bottom: 8px;\n}\n.task-container > div {\n  display: flex;\n  align-items: center;\n  padding: 4px 10px;\n}\n.task-container > div:not(:first-of-type) {\n  justify-content: center;\n}\n.task-container > div:last-of-type {\n  margin-left: 10px;\n}\n.task-container > div:first-of-type > span {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-container > .high {\n  color: red;\n}\n.task-container > .low {\n  color: gray;\n}\n.delete-btn {\n  padding: 5px 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findSelectedProject": () => (/* binding */ findSelectedProject),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectID": () => (/* binding */ projectID)
/* harmony export */ });


// find currently selected project
let project = "";
let projectID = "";
function findSelectedProject(projects) {
  projects.forEach((item, index) => {
    if (item.selected === true) {
      project = item;
      projectID = index;
    }
  });
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");




// generate default project
const project1 = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Project 1", true);
project1.createTask("Clean room");
project1.createTask(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis massa, tristique eu eleifend in, porta ut tortor. Morbi lorem erat, gravida a bibendum eget, suscipit id orci. Vivamus id felis metus. ",
  "",
  "",
  "low"
);
project1.createTask("Empty dishwasher", "", "", "high");

// create array of projects and add default project
const projects = [];
projects.push(project1);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectView": () => (/* binding */ buildProjectView),
/* harmony export */   "taskRows": () => (/* binding */ taskRows)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");






// cache dom
const body = document.querySelector("body");

// reused dom elements
const selectProjectForm = document.querySelector("#select-project");
const selectProjectSelector = document.querySelector("#selectProject");

// BUILD DEFAULT VIEW
function buildProjectView(projects) {
  // find currently selected project from data
  (0,_controller_js__WEBPACK_IMPORTED_MODULE_1__.findSelectedProject)(projects);
  const projectName = body.querySelector(".current-project");
  projectName.textContent = _controller_js__WEBPACK_IMPORTED_MODULE_1__.project.title;
  projectName.setAttribute("data-id", _controller_js__WEBPACK_IMPORTED_MODULE_1__.projectID);
  if (projects.length > 1) {
    selectProjectForm.style.display = "block";
    selectProjectSelector.textContent = "";
    // NEED TO SORT BY SELECTED FIRST THEN ALPHA
    projects.forEach((project, index) => {
      const selectOption = document.createElement("option");
      selectOption.setAttribute("value", index);
      if (project.selected === true) {
        selectOption.setAttribute("selected", "");
      }
      selectOption.textContent = project.title;
      selectProjectSelector.appendChild(selectOption);
    });
  } else {
    selectProjectForm.style = "";
  }
  _controller_js__WEBPACK_IMPORTED_MODULE_1__.project.listTasks();
}

// DISPLAY ALL TASKS
const taskList = body.querySelector(".task-list");

function taskRows(project) {
  taskList.textContent = "";
  project.sortTasks().forEach((task, index) => {
    taskRow(task, index);
  });
  // listenForDelete(project);
}

function taskRow(task, index) {
  // create DOM elements
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  const taskTitle = document.createElement("div");
  const taskTitleBox = document.createElement("span"); // need this for ellipsis to work
  const taskDueDate = document.createElement("div");
  const taskPriority = document.createElement("div");
  if (task.priority === "high") {
    taskPriority.classList.add("high");
  } else if (task.priority === "low") {
    taskPriority.classList.add("low");
  }
  const taskDelete = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-id", index);
  deleteBtn.classList.add("delete-btn");
  // add content to elements
  taskTitleBox.textContent = task.title;
  if (task.dueDate) {
    taskDueDate.textContent = task.dueDate;
  }
  taskPriority.textContent = task.priority;
  deleteBtn.textContent = "X";
  // append elements to parents
  taskContainer.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleBox);
  taskContainer.appendChild(taskDueDate);
  taskContainer.appendChild(taskPriority);
  taskContainer.appendChild(taskDelete);
  taskDelete.appendChild(deleteBtn);
  taskList.appendChild(taskContainer);
  // add listeners to elements
  deleteBtn.addEventListener("click", () => {
    const index = deleteBtn.getAttribute("data-id");
    _controller_js__WEBPACK_IMPORTED_MODULE_1__.project.deleteTask(index);
  });
}

// ADD TASK
const addTaskToProject = function (event) {
  event.preventDefault();
  const newTask = _controller_js__WEBPACK_IMPORTED_MODULE_1__.project.createTask(
    addTaskform.elements["title"].value,
    addTaskform.elements["description"].value,
    addTaskform.elements["dueDate"].value,
    addTaskform.elements["priority"].value
  );
  addTaskform.reset();
  // form.classList.toggle("show-form");
  // project.listTasks();
};

// get add task form submission
const addTaskform = document.querySelector("form#add-task");
addTaskform.onsubmit = addTaskToProject;

// ADD PROJECT
const addProject = function (event) {
  event.preventDefault();
  _controller_js__WEBPACK_IMPORTED_MODULE_1__.project.selected = false; // remove selected from current project
  const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](addProjectForm.elements["title"].value, true);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.projects.push(newProject);
  console.log(_data_js__WEBPACK_IMPORTED_MODULE_2__.projects);
  addProjectForm.reset();
  buildProjectView(_data_js__WEBPACK_IMPORTED_MODULE_2__.projects);
};

// get new project form submission
const addProjectForm = document.querySelector("form#add-project");
addProjectForm.onsubmit = addProject;

// SWITCH PROJECT VIEW
function selectProject() {}
selectProjectSelector.addEventListener("change", (event) => {
  console.log("change");
  _data_js__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
    project.selected = false;
  });
  _data_js__WEBPACK_IMPORTED_MODULE_2__.projects[event.target.value].selected = true;
  buildProjectView(_data_js__WEBPACK_IMPORTED_MODULE_2__.projects);
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



class Project {
  constructor(title, selected = false, tasks = []) {
    this.title = title;
    this.selected = selected;
    this.tasks = tasks;
  }

  listTasks() {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.taskRows)(this);
  }

  createTask(title, description, duedate, priority) {
    let task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, duedate, priority);
    this.tasks.push(task);
    this.listTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.listTasks();
    // need to set task instance to null somehow. memory leak.
  }

  sortTasks() {
    //https://serveanswer.com/questions/js-sort-array-object-by-custom-key-and-value
    const priority = {
      high: 1,
      normal: 2,
      low: 3,
    };
    const sorted = this.tasks.sort(
      (a, b) => priority[a.priority] - priority[b.priority]
    );
    return sorted;
  }
}

//https://stackoverflow.com/questions/52377344/javascript-array-of-instances-of-a-class


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(
    title,
    description = "",
    dueDate = false,
    priority = "normal",
    complete = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  setTitle(title) {
    this.title = title;
  }

  setDesc(description) {
    this.description = description;
  }

  setDueDate(date) {
    this.date = date;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setComplete() {
    this.complete = complete;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");

// import { compareAsc, format } from "date-fns";



// display task list for selected project
(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.buildProjectView)(_data_js__WEBPACK_IMPORTED_MODULE_1__.projects);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNyQixZQUFZLHFCQUFxQjtBQUNJO0FBQ087O0FBRTVDO0FBQ0EseURBQWdCLENBQUMsOENBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcG93ZGVyYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbm1haW4ge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZmxleC1iYXNpczogMTAwcHg7XFxufVxcbi5jdXJyZW50LXByb2plY3QsXFxuZm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4jc2VsZWN0LXByb2plY3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhc2tzIHtcXG4gIGZsZXg6IDEgMSA0MDBweDtcXG59XFxuLnRhc2stZW50cnkge1xcbiAgZmxleDogMSAxIDIwMHB4O1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5mb3JtIGlucHV0LFxcbmZvcm0gc2VsZWN0LFxcbmZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIGF1dG8gNDBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcG93ZGVyYmx1ZTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnRhc2stY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxufVxcbi50YXNrLWNvbnRhaW5lciA+IGRpdjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGFzay1jb250YWluZXIgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSA+IHNwYW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnRhc2stY29udGFpbmVyID4gLmhpZ2gge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLnRhc2stY29udGFpbmVyID4gLmxvdyB7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLmRlbGV0ZS1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxubWFpbiB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi5wcm9qZWN0cyB7XFxuICBmbGV4LWJhc2lzOiAxMDBweDtcXG59XFxuLmN1cnJlbnQtcHJvamVjdCxcXG5mb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbiNzZWxlY3QtcHJvamVjdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFza3Mge1xcbiAgZmxleDogMSAxIDQwMHB4O1xcbn1cXG4udGFzay1lbnRyeSB7XFxuICBmbGV4OiAxIDEgMjAwcHg7XFxufVxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmZvcm0gaW5wdXQsXFxuZm9ybSBzZWxlY3QsXFxuZm9ybSBidXR0b24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0byA0MHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwb3dkZXJibHVlO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuLnRhc2stY29udGFpbmVyID4gZGl2Om5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YXNrLWNvbnRhaW5lciA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi50YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1vZi10eXBlID4gc3BhbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1jb250YWluZXIgPiAuaGlnaCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4udGFzay1jb250YWluZXIgPiAubG93IHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uZGVsZXRlLWJ0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBmaW5kU2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0LCBwcm9qZWN0SUQgfTtcblxuLy8gZmluZCBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdFxubGV0IHByb2plY3QgPSBcIlwiO1xubGV0IHByb2plY3RJRCA9IFwiXCI7XG5mdW5jdGlvbiBmaW5kU2VsZWN0ZWRQcm9qZWN0KHByb2plY3RzKSB7XG4gIHByb2plY3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0uc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgIHByb2plY3QgPSBpdGVtO1xuICAgICAgcHJvamVjdElEID0gaW5kZXg7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcblxuLy8gZ2VuZXJhdGUgZGVmYXVsdCBwcm9qZWN0XG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KFwiUHJvamVjdCAxXCIsIHRydWUpO1xucHJvamVjdDEuY3JlYXRlVGFzayhcIkNsZWFuIHJvb21cIik7XG5wcm9qZWN0MS5jcmVhdGVUYXNrKFxuICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IHR1cnBpcyBtYXNzYSwgdHJpc3RpcXVlIGV1IGVsZWlmZW5kIGluLCBwb3J0YSB1dCB0b3J0b3IuIE1vcmJpIGxvcmVtIGVyYXQsIGdyYXZpZGEgYSBiaWJlbmR1bSBlZ2V0LCBzdXNjaXBpdCBpZCBvcmNpLiBWaXZhbXVzIGlkIGZlbGlzIG1ldHVzLiBcIixcbiAgXCJcIixcbiAgXCJcIixcbiAgXCJsb3dcIlxuKTtcbnByb2plY3QxLmNyZWF0ZVRhc2soXCJFbXB0eSBkaXNod2FzaGVyXCIsIFwiXCIsIFwiXCIsIFwiaGlnaFwiKTtcblxuLy8gY3JlYXRlIGFycmF5IG9mIHByb2plY3RzIGFuZCBhZGQgZGVmYXVsdCBwcm9qZWN0XG5jb25zdCBwcm9qZWN0cyA9IFtdO1xucHJvamVjdHMucHVzaChwcm9qZWN0MSk7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBmaW5kU2VsZWN0ZWRQcm9qZWN0LCBwcm9qZWN0LCBwcm9qZWN0SUQgfSBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2RhdGEuanNcIjtcblxuZXhwb3J0IHsgdGFza1Jvd3MsIGJ1aWxkUHJvamVjdFZpZXcgfTtcblxuLy8gY2FjaGUgZG9tXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIHJldXNlZCBkb20gZWxlbWVudHNcbmNvbnN0IHNlbGVjdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QtcHJvamVjdFwiKTtcbmNvbnN0IHNlbGVjdFByb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0UHJvamVjdFwiKTtcblxuLy8gQlVJTEQgREVGQVVMVCBWSUVXXG5mdW5jdGlvbiBidWlsZFByb2plY3RWaWV3KHByb2plY3RzKSB7XG4gIC8vIGZpbmQgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgZnJvbSBkYXRhXG4gIGZpbmRTZWxlY3RlZFByb2plY3QocHJvamVjdHMpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGJvZHkucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXByb2plY3RcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0SUQpO1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMSkge1xuICAgIHNlbGVjdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgc2VsZWN0UHJvamVjdFNlbGVjdG9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAvLyBORUVEIFRPIFNPUlQgQlkgU0VMRUNURUQgRklSU1QgVEhFTiBBTFBIQVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgc2VsZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGluZGV4KTtcbiAgICAgIGlmIChwcm9qZWN0LnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgIHNlbGVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICBzZWxlY3RQcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZSA9IFwiXCI7XG4gIH1cbiAgcHJvamVjdC5saXN0VGFza3MoKTtcbn1cblxuLy8gRElTUExBWSBBTEwgVEFTS1NcbmNvbnN0IHRhc2tMaXN0ID0gYm9keS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcblxuZnVuY3Rpb24gdGFza1Jvd3MocHJvamVjdCkge1xuICB0YXNrTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHByb2plY3Quc29ydFRhc2tzKCkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICB0YXNrUm93KHRhc2ssIGluZGV4KTtcbiAgfSk7XG4gIC8vIGxpc3RlbkZvckRlbGV0ZShwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gdGFza1Jvdyh0YXNrLCBpbmRleCkge1xuICAvLyBjcmVhdGUgRE9NIGVsZW1lbnRzXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1RpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7IC8vIG5lZWQgdGhpcyBmb3IgZWxsaXBzaXMgdG8gd29ya1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmICh0YXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gIH1cbiAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGluZGV4KTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAvLyBhZGQgY29udGVudCB0byBlbGVtZW50c1xuICB0YXNrVGl0bGVCb3gudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBpZiAodGFzay5kdWVEYXRlKSB7XG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIH1cbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIC8vIGFwcGVuZCBlbGVtZW50cyB0byBwYXJlbnRzXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRhc2tUaXRsZUJveCk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG4gIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIC8vIGFkZCBsaXN0ZW5lcnMgdG8gZWxlbWVudHNcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBkZWxldGVCdG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRhc2soaW5kZXgpO1xuICB9KTtcbn1cblxuLy8gQUREIFRBU0tcbmNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VGFzayA9IHByb2plY3QuY3JlYXRlVGFzayhcbiAgICBhZGRUYXNrZm9ybS5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlLFxuICAgIGFkZFRhc2tmb3JtLmVsZW1lbnRzW1wiZGVzY3JpcHRpb25cIl0udmFsdWUsXG4gICAgYWRkVGFza2Zvcm0uZWxlbWVudHNbXCJkdWVEYXRlXCJdLnZhbHVlLFxuICAgIGFkZFRhc2tmb3JtLmVsZW1lbnRzW1wicHJpb3JpdHlcIl0udmFsdWVcbiAgKTtcbiAgYWRkVGFza2Zvcm0ucmVzZXQoKTtcbiAgLy8gZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpO1xuICAvLyBwcm9qZWN0Lmxpc3RUYXNrcygpO1xufTtcblxuLy8gZ2V0IGFkZCB0YXNrIGZvcm0gc3VibWlzc2lvblxuY29uc3QgYWRkVGFza2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNhZGQtdGFza1wiKTtcbmFkZFRhc2tmb3JtLm9uc3VibWl0ID0gYWRkVGFza1RvUHJvamVjdDtcblxuLy8gQUREIFBST0pFQ1RcbmNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlOyAvLyByZW1vdmUgc2VsZWN0ZWQgZnJvbSBjdXJyZW50IHByb2plY3RcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGFkZFByb2plY3RGb3JtLmVsZW1lbnRzW1widGl0bGVcIl0udmFsdWUsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gIGJ1aWxkUHJvamVjdFZpZXcocHJvamVjdHMpO1xufTtcblxuLy8gZ2V0IG5ldyBwcm9qZWN0IGZvcm0gc3VibWlzc2lvblxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSNhZGQtcHJvamVjdFwiKTtcbmFkZFByb2plY3RGb3JtLm9uc3VibWl0ID0gYWRkUHJvamVjdDtcblxuLy8gU1dJVENIIFBST0pFQ1QgVklFV1xuZnVuY3Rpb24gc2VsZWN0UHJvamVjdCgpIHt9XG5zZWxlY3RQcm9qZWN0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJjaGFuZ2VcIik7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gIH0pO1xuICBwcm9qZWN0c1tldmVudC50YXJnZXQudmFsdWVdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgYnVpbGRQcm9qZWN0Vmlldyhwcm9qZWN0cyk7XG59KTtcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IHRhc2tSb3dzIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgc2VsZWN0ZWQgPSBmYWxzZSwgdGFza3MgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgbGlzdFRhc2tzKCkge1xuICAgIHRhc2tSb3dzKHRoaXMpO1xuICB9XG5cbiAgY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgdGhpcy5saXN0VGFza3MoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5saXN0VGFza3MoKTtcbiAgICAvLyBuZWVkIHRvIHNldCB0YXNrIGluc3RhbmNlIHRvIG51bGwgc29tZWhvdy4gbWVtb3J5IGxlYWsuXG4gIH1cblxuICBzb3J0VGFza3MoKSB7XG4gICAgLy9odHRwczovL3NlcnZlYW5zd2VyLmNvbS9xdWVzdGlvbnMvanMtc29ydC1hcnJheS1vYmplY3QtYnktY3VzdG9tLWtleS1hbmQtdmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IHtcbiAgICAgIGhpZ2g6IDEsXG4gICAgICBub3JtYWw6IDIsXG4gICAgICBsb3c6IDMsXG4gICAgfTtcbiAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLnRhc2tzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gcHJpb3JpdHlbYS5wcmlvcml0eV0gLSBwcmlvcml0eVtiLnByaW9yaXR5XVxuICAgICk7XG4gICAgcmV0dXJuIHNvcnRlZDtcbiAgfVxufVxuXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUyMzc3MzQ0L2phdmFzY3JpcHQtYXJyYXktb2YtaW5zdGFuY2VzLW9mLWEtY2xhc3NcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgZHVlRGF0ZSA9IGZhbHNlLFxuICAgIHByaW9yaXR5ID0gXCJub3JtYWxcIixcbiAgICBjb21wbGV0ZSA9IGZhbHNlXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICB9XG5cbiAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXREZXNjKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgfVxuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0Q29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCB7IGJ1aWxkUHJvamVjdFZpZXcgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuLy8gZGlzcGxheSB0YXNrIGxpc3QgZm9yIHNlbGVjdGVkIHByb2plY3RcbmJ1aWxkUHJvamVjdFZpZXcocHJvamVjdHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9