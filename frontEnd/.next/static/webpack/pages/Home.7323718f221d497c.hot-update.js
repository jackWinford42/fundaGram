"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Home",{

/***/ "./pages/Post.js":
/*!***********************!*\
  !*** ./pages/Post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), liked = ref[0], setLiked = ref[1];\n    var thumbColor = function() {\n        setLiked(!liked);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        className: \"Post\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: data.comment,\n                src: data.url,\n                width: \"400\",\n                height: \"400\"\n            }, void 0, false, {\n                fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    liked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().thumb),\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faThumbsUp,\n                        onClick: thumbColor\n                    }, void 0, false, {\n                        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                        lineNumber: 22,\n                        columnNumber: 19\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().likedThumb),\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faThumbsUp,\n                        onClick: thumbColor\n                    }, void 0, false, {\n                        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                        lineNumber: 23,\n                        columnNumber: 10\n                    }, this),\n                    data.location ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: data.location\n                    }, void 0, false, {\n                        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                        lineNumber: 24,\n                        columnNumber: 27\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Comments\"\n                            }, void 0, false, {\n                                fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            data.comments.map(function(comment) {\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        comment.userName,\n                                        \": \",\n                                        comment.text\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jw/Programs/fundaGram/frontEnd/pages/Post.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n};\n_s(Post, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBQ0U7QUFDRjtBQUNvQjtBQUNGO0FBQ2dCO0FBQ0U7O0FBRWpELFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLEtBQU0sRUFBRSxDQUFDO1FBQVJDLElBQUksR0FBTCxLQUFNLENBQUxBLElBQUk7OztJQUNoQyxHQUFLLENBQXFCWCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFqQ1ksS0FBSyxHQUFjWixHQUFlLEtBQTNCYSxRQUFRLEdBQUliLEdBQWU7SUFFekMsR0FBSyxDQUFDYyxVQUFVLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztRQUN4QkQsUUFBUSxFQUFFRCxLQUFLO0lBQ2pCLENBQUM7SUFFRCxNQUFNLDZFQUNIUCxpREFBSTtRQUFDVSxTQUFTLEVBQUMsQ0FBTTs7d0ZBQ25CQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sT0FBTztnQkFBRUMsR0FBRyxFQUFFUixJQUFJLENBQUNTLEdBQUc7Z0JBQUVDLEtBQUssRUFBQyxDQUFLO2dCQUFDQyxNQUFNLEVBQUMsQ0FBSzs7Ozs7O3dGQUM5RGhCLHFEQUFROztnR0FDTmlCLENBQUk7a0NBQUVaLElBQUksQ0FBQ2EsV0FBVzs7Ozs7O29CQUN0QlosS0FBSywrRUFBS0gsMkVBQWU7d0JBQUNNLFNBQVMsRUFBRVIsc0VBQVk7d0JBQUVtQixJQUFJLEVBQUVsQix5RUFBVTt3QkFBRW1CLE9BQU8sRUFBRWIsVUFBVTs7Ozs7MkdBQ3ZGTCwyRUFBZTt3QkFBQ00sU0FBUyxFQUFFUiwyRUFBaUI7d0JBQUVtQixJQUFJLEVBQUVsQix5RUFBVTt3QkFBRW1CLE9BQU8sRUFBRWIsVUFBVTs7Ozs7O29CQUNwRkgsSUFBSSxDQUFDa0IsUUFBUSwrRUFBS04sQ0FBSTtrQ0FBRVosSUFBSSxDQUFDa0IsUUFBUTs7Ozs7K0JBQVksSUFBSTtnR0FDckRDLENBQUc7O3dHQUNEQyxDQUFFOzBDQUFDLENBQVE7Ozs7Ozs0QkFDWHBCLElBQUksQ0FBQ3FCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDZixRQUFRLENBQVJBLE9BQU8sRUFBSSxDQUFDOzRHQUM1QkssQ0FBSTs7d0NBQUVMLE9BQU8sQ0FBQ2dCLFFBQVE7d0NBQUMsQ0FBRTt3Q0FBQ2hCLE9BQU8sQ0FBQ2lCLElBQUk7Ozs7Ozs7NEJBQ3pDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0dBeEJ1QnpCLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qb3N0LmpzP2FlMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZmFUaHVtYnNVcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7ZGF0YX0pIHtcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdGh1bWJDb2xvciA9ICgpID0+IHtcbiAgICBzZXRMaWtlZCghbGlrZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cIlBvc3RcIj5cbiAgICAgIDxpbWcgYWx0PXtkYXRhLmNvbW1lbnR9IHNyYz17ZGF0YS51cmx9IHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIvPlxuICAgICAgPENhcmRCb2R5PlxuICAgICAgICA8c3Bhbj57ZGF0YS5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIHtsaWtlZCA/ICg8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnRodW1ifSBpY29uPXtmYVRodW1ic1VwfSBvbkNsaWNrPXt0aHVtYkNvbG9yfS8+KSA6XG4gICAgICAgICg8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmxpa2VkVGh1bWJ9IGljb249e2ZhVGh1bWJzVXB9IG9uQ2xpY2s9e3RodW1iQ29sb3J9Lz4pfVxuICAgICAgICB7ZGF0YS5sb2NhdGlvbiA/ICg8c3Bhbj57ZGF0YS5sb2NhdGlvbn08L3NwYW4+KSA6IG51bGwgfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5Db21tZW50czwvaDQ+XG4gICAgICAgICAge2RhdGEuY29tbWVudHMubWFwKGNvbW1lbnQgPT4ge1xuICAgICAgICAgICAgPHNwYW4+e2NvbW1lbnQudXNlck5hbWV9OiB7Y29tbWVudC50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkltYWdlIiwiTGluayIsIkNhcmQiLCJDYXJkQm9keSIsInN0eWxlcyIsImZhVGh1bWJzVXAiLCJGb250QXdlc29tZUljb24iLCJQb3N0IiwiZGF0YSIsImxpa2VkIiwic2V0TGlrZWQiLCJ0aHVtYkNvbG9yIiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0IiwiY29tbWVudCIsInNyYyIsInVybCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsImRlc2NyaXB0aW9uIiwidGh1bWIiLCJpY29uIiwib25DbGljayIsImxpa2VkVGh1bWIiLCJsb2NhdGlvbiIsImRpdiIsImg0IiwiY29tbWVudHMiLCJtYXAiLCJ1c2VyTmFtZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Post.js\n");

/***/ })

});