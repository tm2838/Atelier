"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_components_ratingsAndReviews_reviews_reviewButtons_jsx"],{

/***/ "./client/src/components/ratingsAndReviews/reviews/reviewButtons.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/ratingsAndReviews/reviews/reviewButtons.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ratingsAndReviews.module.css */ \"./client/src/components/ratingsAndReviews/ratingsAndReviews.module.css\");\n/* eslint-disable react/prop-types */\n\n\n\n\n\nvar ReviewButtons = function ReviewButtons(_ref) {\n  var remainingReviews = _ref.remainingReviews,\n      onLoadReviews = _ref.onLoadReviews,\n      onAddReview = _ref.onAddReview;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"review-buttons\"]\n  }, remainingReviews.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"review-btn\"],\n    onClick: onLoadReviews\n  }, \"MORE REVIEWS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: _ratingsAndReviews_module_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"review-btn\"],\n    onClick: onAddReview\n  }, \"ADD A REVIEW\", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n    icon: \"plus\"\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    remainingReviews: state.remainingReviews\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ReviewButtons));\n\n//# sourceURL=webpack://atelier/./client/src/components/ratingsAndReviews/reviews/reviewButtons.jsx?");

/***/ })

}]);