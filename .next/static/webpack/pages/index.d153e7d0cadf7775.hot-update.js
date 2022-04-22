"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var E_Learning_React_ps_designcomponent_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_Learning_React_ps_designcomponent_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Learning_React_ps_designcomponent_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\n//Esporto così non devo ripetermi negli altri componenti\nvar REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestSpeakers() {\n    var delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n    var onFavoriteToggle = function onFavoriteToggle(id) {\n        //Recupero la referenza dell'oggetto che voglio modificare\n        var speakerRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        //Creo un nuovo oggetto con i parametri aggiornati\n        var speakerRecUpdated = _objectSpread({}, speakerRecPrevious, {\n            //E poi aggiorno il valore da modificare\n            favorite: !speakerRecPrevious.favorite\n        });\n        // speakerData è un array, quindi aggiorno solo l'elemento modificato\n        var speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), speakersData = ref[0], setSpeakersData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(REQUEST_STATUS.LOADING), requestStatus = ref1[0], setRequestStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    // Lo useEffect non è asincrono, quindi mi darà errore la promise, quindi creo una funzione async dentro\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = _asyncToGenerator(E_Learning_React_ps_designcomponent_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return E_Learning_React_ps_designcomponent_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            // throw \"Had Error.\"\n                            setRequestStatus(REQUEST_STATUS.SUCCESS); //Renderizza nuovamente, come ad ogni cambio stato\n                            setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n                            _ctx.next = 11;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setRequestStatus(REQUEST_STATUS.FAILURE);\n                            setError(_ctx.t0);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []); //Gli passo l'array vuoto per evitare che venga renderizzato ad ogni cambio stato\n    return {\n        speakersData: speakersData,\n        requestStatus: requestStatus,\n        error: error,\n        onFavoriteToggle: onFavoriteToggle\n    };\n}\n_s(useRequestSpeakers, \"tPdbQyb9PhVc9WskO6c6fuS9BfY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0c7O0FBRTFDO0FBQ08sSUFBTUcsY0FBYyxHQUFHO0lBQzFCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE9BQU8sRUFBRSxTQUFTO0NBQ3JCLENBQUM7QUFFRixTQUFTQyxrQkFBa0IsR0FBa0I7UUFBakJDLFNBQVMsR0FBVEEsK0NBQWdCLGtCQUFKLElBQUk7UUF5Qi9CQyxnQkFBZ0IsR0FBekIsU0FBU0EsZ0JBQWdCLENBQUNDLEVBQUUsRUFBRTtRQUMxQiwwREFBMEQ7UUFDMUQsSUFBTUMsa0JBQWtCLEdBQUdDLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLFNBQVVDLEdBQUcsRUFBRTtZQUN4RCxPQUFPQSxHQUFHLENBQUNKLEVBQUUsS0FBS0EsRUFBRSxDQUFDO1NBQ3hCLENBQUM7UUFDRixrREFBa0Q7UUFDbEQsSUFBTUssaUJBQWlCLEdBQUcsa0JBRW5CSixrQkFBa0I7WUFDckIsd0NBQXdDO1lBQ3hDSyxRQUFRLEVBQUUsQ0FBQ0wsa0JBQWtCLENBQUNLLFFBQVE7VUFDekM7UUFDRDtRQUNBLElBQU1DLGVBQWUsR0FBR0wsWUFBWSxDQUFDTSxHQUFHLENBQUMsU0FBVUosR0FBRyxFQUFDO1lBQ25ELE9BQU9BLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFLEdBQUdLLGlCQUFpQixHQUFFRCxHQUFHLENBQUM7U0FDakQsQ0FBQztRQUNGSyxlQUFlLENBQUNGLGVBQWUsQ0FBQyxDQUFDO0tBQ3BDOztJQXpDRCxJQUF3Q2hCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFYeEQsWUFXdUIsR0FBcUJBLEdBQVksR0FBakMsRUFYdkIsZUFXd0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNwQyxJQUEwQ0EsSUFBZ0MsR0FBaENBLCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLEVBWjlFLGFBWXdCLEdBQXNCSCxJQUFnQyxHQUF0RCxFQVp4QixnQkFZMEMsR0FBSUEsSUFBZ0MsR0FBcEM7SUFDdEMsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFiMUMsS0FhZ0IsR0FBY0EsSUFBWSxHQUExQixFQWJoQixRQWEwQixHQUFJQSxJQUFZLEdBQWhCO0lBR3RCLElBQU11QixLQUFLLEdBQUcsU0FBQ0MsRUFBRTtlQUFLLElBQUlDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPO21CQUFLQyxVQUFVLENBQUVELE9BQU8sRUFBQ0YsRUFBRSxDQUFDO1NBQUEsQ0FBQztLQUFBO0lBRXZFO0lBQ0V2QixnREFBTyxDQUFDLFdBQU07aUJBQ0cyQixTQUFTO21CQUFUQSxVQUFTOztpQkFBVEEsVUFBUztZQUFUQSxVQUFTLEdBQXhCLG9MQUEwQjs7Ozs7O21DQUdaTCxLQUFLLENBQUNoQixTQUFTLENBQUM7OzRCQUN0QixxQkFBcUI7NEJBQ3JCYSxnQkFBZ0IsQ0FBQ2xCLGNBQWMsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxrREFBa0Q7NEJBQzVGYyxlQUFlLENBQUNuQiw4Q0FBSSxDQUFDLENBQUM7Ozs7Ozs0QkFFdEJxQixnQkFBZ0IsQ0FBQ2xCLGNBQWMsQ0FBQ0csT0FBTyxDQUFDLENBQUM7NEJBQ3pDaUIsUUFBUSxTQUFHLENBQUM7Ozs7Ozs7Ozs7O2FBRW5CO21CQVhjTSxVQUFTOztRQVl4QkEsU0FBUyxFQUFFLENBQUM7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUZBQWlGO0lBcUJ6RixPQUFNO1FBQ0ZqQixZQUFZLEVBQVpBLFlBQVk7UUFBRVEsYUFBYSxFQUFiQSxhQUFhO1FBQUVFLEtBQUssRUFBTEEsS0FBSztRQUNsQ2IsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7S0FDbkIsQ0FBQztDQUNMO0dBaERRRixrQkFBa0I7QUFrRDNCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzPzAxY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vRXNwb3J0byBjb3PDrCBub24gZGV2byByaXBldGVybWkgbmVnbGkgYWx0cmkgY29tcG9uZW50aVxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJmYWlsdXJlXCIsICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VSZXF1ZXN0U3BlYWtlcnMoZGVsYXlUaW1lID0gMTAwMCl7XHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pOyBcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0IChyZXNvbHZlLG1zKSk7XHJcblxyXG4gICAgLy8gTG8gdXNlRWZmZWN0IG5vbiDDqCBhc2luY3Jvbm8sIHF1aW5kaSBtaSBkYXLDoCBlcnJvcmUgbGEgcHJvbWlzZSwgcXVpbmRpIGNyZW8gdW5hIGZ1bnppb25lIGFzeW5jIGRlbnRyb1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKXtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aHJvdyBcIkhhZCBFcnJvci5cIlxyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTsgLy9SZW5kZXJpenphIG51b3ZhbWVudGUsIGNvbWUgYWQgb2duaSBjYW1iaW8gc3RhdG9cclxuICAgICAgICAgICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jKCk7ICAgICAgICAgICBcclxuICAgIH0sIFtdKTsgLy9HbGkgcGFzc28gbCdhcnJheSB2dW90byBwZXIgZXZpdGFyZSBjaGUgdmVuZ2EgcmVuZGVyaXp6YXRvIGFkIG9nbmkgY2FtYmlvIHN0YXRvXHJcblxyXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xyXG4gICAgICAgIC8vUmVjdXBlcm8gbGEgcmVmZXJlbnphIGRlbGwnb2dnZXR0byBjaGUgdm9nbGlvIG1vZGlmaWNhcmVcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQ3JlbyB1biBudW92byBvZ2dldHRvIGNvbiBpIHBhcmFtZXRyaSBhZ2dpb3JuYXRpXHJcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XHJcbiAgICAgICAgICAgIC8vUmlwb3J0byBpIHZhbG9yaSBkZWxsJ29nZ2V0dG8gb3JpZ2luYWxlXHJcbiAgICAgICAgICAgIC4uLnNwZWFrZXJSZWNQcmV2aW91cyxcclxuICAgICAgICAgICAgLy9FIHBvaSBhZ2dpb3JubyBpbCB2YWxvcmUgZGEgbW9kaWZpY2FyZVxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWNQcmV2aW91cy5mYXZvcml0ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc3BlYWtlckRhdGEgw6ggdW4gYXJyYXksIHF1aW5kaSBhZ2dpb3JubyBzb2xvIGwnZWxlbWVudG8gbW9kaWZpY2F0b1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQ6IHJlYztcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvcixcclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlLCBcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VyczsiXSwibmFtZXMiOlsiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2VyUmVjUHJldmlvdXMiLCJzcGVha2Vyc0RhdGEiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsInNldFNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestSpeakers.js\n");

/***/ })

});