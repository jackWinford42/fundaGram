"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Signup",{

/***/ "./pages/Api.js":
/*!**********************!*\
  !*** ./pages/Api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar BASE_URL = \"http://localhost:3001\";\nvar API = /** API Class.\n *\n * Static class tying together methods used to get/send to the API.\n * There shouldn't be any frontend-specific elements here, and there shouldn't\n * be any API-aware elements elsewhere in the frontend.\n *\n */ /*#__PURE__*/ function() {\n    \"use strict\";\n    function API() {\n        _classCallCheck(this, API);\n    }\n    _createClass(API, null, [\n        {\n            key: \"request\",\n            value: function request(endpoint) {\n                var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, method = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : \"get\";\n                return _asyncToGenerator(_home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var url, headers, params, message;\n                    return _home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.debug(\"API Call:\", endpoint, data, method);\n                                url = \"\".concat(BASE_URL, \"/\").concat(endpoint);\n                                headers = {\n                                    Authorization: \"Bearer \".concat(RamtApi.token)\n                                };\n                                params = method === \"get\" ? data : {};\n                                _ctx.prev = 4;\n                                console.log(url);\n                                _ctx.next = 8;\n                                return axios__WEBPACK_IMPORTED_MODULE_1___default()({\n                                    url: url,\n                                    method: method,\n                                    data: data,\n                                    params: params,\n                                    headers: headers\n                                });\n                            case 8:\n                                return _ctx.abrupt(\"return\", _ctx.sent.data);\n                            case 11:\n                                _ctx.prev = 11;\n                                _ctx.t0 = _ctx[\"catch\"](4);\n                                console.error(\"API Error:\", _ctx.t0.response);\n                                message = _ctx.t0.response.data.error.message;\n                                throw Array.isArray(message) ? message : [\n                                    message\n                                ];\n                            case 16:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            4,\n                            11\n                        ]\n                    ]);\n                }))();\n            }\n        },\n        {\n            key: \"signup\",\n            value: // Individual API routes\n            function signup(data) {\n                var _this = this;\n                return _asyncToGenerator(_home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var res;\n                    return _home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _this.request(\"auth/register\", data, \"post\");\n                            case 2:\n                                res = _ctx.sent;\n                                return _ctx.abrupt(\"return\", res.token);\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"login\",\n            value: function login(data) {\n                var _this = this;\n                return _asyncToGenerator(_home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var res;\n                    return _home_jw_Programs_fundaGram_frontEnd_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _this.request(\"auth/token\", data, \"post\");\n                            case 2:\n                                res = _ctx.sent;\n                                return _ctx.abrupt(\"return\", res.token);\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return API;\n}();\n_defineProperty(API, \"token\", // the token for interactive with the API will be stored here.\nvoid 0);\n_defineProperty(API, \"user\", void 0);\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBdUI7SUFTbENDLEdBQUcsR0FSVCxFQU1HOzs7Ozs7Q0FBQSxpQkFFSCxRQUFROzthQUFGQSxHQUFHOzs7OztZQUtNQyxHQUFPLEVBQVBBLENBQU87bUJBQXBCLFFBQVEsQ0FBS0EsT0FBTyxDQUFDQyxRQUFRO29CQUFFQyxJQUFJLG9FQUFHLENBQUMsQ0FBQyxFQUFFQyxNQUFNLG9FQUFHLENBQUs7eUxBQXhELFFBQVEsV0FBa0QsQ0FBQzt3QkFHbkRDLEdBQUcsRUFDSEMsT0FBTyxFQUNQQyxNQUFNLEVBU05DLE9BQU87Ozs7Z0NBYmJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQVcsWUFBRVIsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRTNDQyxHQUFHLEdBQUksR0FBY0gsTUFBUSxDQUFwQkgsUUFBUSxFQUFDLENBQUMsSUFBVyxPQUFURyxRQUFRO2dDQUM3QkksT0FBTyxHQUFHLENBQUM7b0NBQUNLLGFBQWEsRUFBRyxDQUFPLFNBQWdCLE9BQWRDLE9BQU8sQ0FBQ0MsS0FBSztnQ0FBRyxDQUFDO2dDQUN0RE4sTUFBTSxHQUFJSCxNQUFNLEtBQUssQ0FBSyxPQUMxQkQsSUFBSSxHQUNKLENBQUMsQ0FBQzs7Z0NBR05NLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDVCxHQUFHOzt1Q0FDRFAsNENBQUssQ0FBQyxDQUFDO29DQUFDTyxHQUFHLEVBQUhBLEdBQUc7b0NBQUVELE1BQU0sRUFBTkEsTUFBTTtvQ0FBRUQsSUFBSSxFQUFKQSxJQUFJO29DQUFFSSxNQUFNLEVBQU5BLE1BQU07b0NBQUVELE9BQU8sRUFBUEEsT0FBTztnQ0FBQyxDQUFDOzt1RUFBR0gsSUFBSTs7OztnQ0FFakVNLE9BQU8sQ0FBQ00sS0FBSyxDQUFDLENBQVkscUJBQU1DLFFBQVE7Z0NBQ3BDUixPQUFPLFdBQU9RLFFBQVEsQ0FBQ2IsSUFBSSxDQUFDWSxLQUFLLENBQUNQLE9BQU87Z0NBQzdDLEtBQUssQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLENBQUNWLE9BQU8sSUFBSUEsT0FBTyxHQUFHLENBQUNBO29DQUFBQSxPQUFPO2dDQUFBLENBQUM7Ozs7Ozs7Ozs7O2dCQUV0RCxDQUFDOzs7O1lBSVlXLEdBQU0sRUFBTkEsQ0FBTTttQkFGbkIsRUFBd0I7WUFFeEIsUUFBUSxDQUFLQSxNQUFNLENBQUNoQixJQUFJOzt5TEFBeEIsUUFBUSxXQUFrQixDQUFDO3dCQUNyQmlCLEdBQUc7Ozs7OzZDQUFjbkIsT0FBTyxDQUFDLENBQWUsZ0JBQUVFLElBQUksRUFBRSxDQUFNOztnQ0FBdERpQixHQUFHOzZEQUNBQSxHQUFHLENBQUNQLEtBQUs7Ozs7OztnQkFDbEIsQ0FBQzs7OztZQUVZUSxHQUFLLEVBQUxBLENBQUs7bUJBQWxCLFFBQVEsQ0FBS0EsS0FBSyxDQUFDbEIsSUFBSTs7eUxBQXZCLFFBQVEsV0FBaUIsQ0FBQzt3QkFDcEJpQixHQUFHOzs7Ozs2Q0FBY25CLE9BQU8sQ0FBQyxDQUFZLGFBQUVFLElBQUksRUFBRSxDQUFNOztnQ0FBbkRpQixHQUFHOzZEQUNBQSxHQUFHLENBQUNQLEtBQUs7Ozs7OztnQkFDbEIsQ0FBQzs7Ozs7O2dCQWxDR2IsR0FBRyxFQUVBYSxDQUFLLFFBRFosRUFBOEQ7QUFDOUQsSUFBSSxDQUFKLENBQWE7Z0JBRlRiLEdBQUcsRUFHQXNCLENBQUksT0FBWCxJQUFJLENBQUosQ0FBWTtBQWtDZCwrREFBZXRCLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BcGkuanM/MThkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIjtcbi8qKiBBUEkgQ2xhc3MuXG4gKlxuICogU3RhdGljIGNsYXNzIHR5aW5nIHRvZ2V0aGVyIG1ldGhvZHMgdXNlZCB0byBnZXQvc2VuZCB0byB0aGUgQVBJLlxuICogVGhlcmUgc2hvdWxkbid0IGJlIGFueSBmcm9udGVuZC1zcGVjaWZpYyBlbGVtZW50cyBoZXJlLCBhbmQgdGhlcmUgc2hvdWxkbid0XG4gKiBiZSBhbnkgQVBJLWF3YXJlIGVsZW1lbnRzIGVsc2V3aGVyZSBpbiB0aGUgZnJvbnRlbmQuXG4gKlxuICovXG5cbmNsYXNzIEFQSSB7XG4gIC8vIHRoZSB0b2tlbiBmb3IgaW50ZXJhY3RpdmUgd2l0aCB0aGUgQVBJIHdpbGwgYmUgc3RvcmVkIGhlcmUuXG4gIHN0YXRpYyB0b2tlbjtcbiAgc3RhdGljIHVzZXI7XG5cbiAgc3RhdGljIGFzeW5jIHJlcXVlc3QoZW5kcG9pbnQsIGRhdGEgPSB7fSwgbWV0aG9kID0gXCJnZXRcIikge1xuICAgIGNvbnNvbGUuZGVidWcoXCJBUEkgQ2FsbDpcIiwgZW5kcG9pbnQsIGRhdGEsIG1ldGhvZCk7XG5cbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vJHtlbmRwb2ludH1gO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtSYW10QXBpLnRva2VufWAgfTtcbiAgICBjb25zdCBwYXJhbXMgPSAobWV0aG9kID09PSBcImdldFwiKVxuICAgICAgICA/IGRhdGFcbiAgICAgICAgOiB7fTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICByZXR1cm4gKGF3YWl0IGF4aW9zKHsgdXJsLCBtZXRob2QsIGRhdGEsIHBhcmFtcywgaGVhZGVycyB9KSkuZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgRXJyb3I6XCIsIGVyci5yZXNwb25zZSk7XG4gICAgICBsZXQgbWVzc2FnZSA9IGVyci5yZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2U7XG4gICAgICB0aHJvdyBBcnJheS5pc0FycmF5KG1lc3NhZ2UpID8gbWVzc2FnZSA6IFttZXNzYWdlXTtcbiAgICB9XG4gIH1cblxuICAvLyBJbmRpdmlkdWFsIEFQSSByb3V0ZXNcblxuICBzdGF0aWMgYXN5bmMgc2lnbnVwKGRhdGEpIHtcbiAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy5yZXF1ZXN0KFwiYXV0aC9yZWdpc3RlclwiLCBkYXRhLCBcInBvc3RcIik7XG4gICAgcmV0dXJuIHJlcy50b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBsb2dpbihkYXRhKSB7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMucmVxdWVzdChcImF1dGgvdG9rZW5cIiwgZGF0YSwgXCJwb3N0XCIpO1xuICAgIHJldHVybiByZXMudG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQkFTRV9VUkwiLCJBUEkiLCJyZXF1ZXN0IiwiZW5kcG9pbnQiLCJkYXRhIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInBhcmFtcyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZGVidWciLCJBdXRob3JpemF0aW9uIiwiUmFtdEFwaSIsInRva2VuIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsIkFycmF5IiwiaXNBcnJheSIsInNpZ251cCIsInJlcyIsImxvZ2luIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Api.js\n");

/***/ })

});