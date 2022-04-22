/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestSpeakers */ \"./src/hooks/useRequestSpeakers.js\");\n/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var showSession = param.showSession;\n    _s();\n    var ref = _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3___default()(2000), speakersData = ref.speakersData, isLoading = ref.isLoading, hasErrored = ref.hasErrored, error = ref.error, onFavoriteToggle = ref.onFavoriteToggle;\n    if (hasErrored === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 15,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    }\n    // if (isLoading === true) return <div>Loading...</div> //Esce quì\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: isLoading === false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakersData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSession: showSession,\n                        onFavoriteToggle: function() {\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Learning\\\\React\\\\ps-designcomponent\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"cdcGbBfzl/IEtAdUN/TJQ2NTGMc=\", false, function() {\n    return [\n        (_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3___default())\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQWdDO0FBQ2lCO0FBQ1k7O0FBRTdELFNBQVNHLFlBQVksQ0FBQyxLQUFjLEVBQUU7UUFBaEIsV0FBYSxHQUFiLEtBQWMsQ0FBWkMsV0FBVzs7SUFFL0IsSUFHSUYsR0FBd0IsR0FBeEJBLGdFQUFrQixDQUFDLElBQUksQ0FBQyxFQUZ4QkcsWUFBWSxHQUVaSCxHQUF3QixDQUZ4QkcsWUFBWSxFQUFFQyxTQUFTLEdBRXZCSixHQUF3QixDQUZWSSxTQUFTLEVBQUVDLFVBQVUsR0FFbkNMLEdBQXdCLENBRkNLLFVBQVUsRUFBQ0MsS0FBSyxHQUV6Q04sR0FBd0IsQ0FGWU0sS0FBSyxFQUN6Q0MsZ0JBQWdCLEdBQ2hCUCxHQUF3QixDQUR4Qk8sZ0JBQWdCO0lBR3BCLElBQUlGLFVBQVUsS0FBSyxJQUFJLEVBQUM7UUFDcEIscUJBQ0ksOERBQUNHLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGFBQWE7O2dCQUFDLFNBQ2xCOzhCQUFBLDhEQUFDQyxHQUFDOzt3QkFBQyw4QkFBNEI7d0JBQUNKLEtBQUs7d0JBQUMsR0FBQzs7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ2hELENBQ1Q7S0FDSjtJQUVGO0lBRUMscUJBQ0ksOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDcEMsNEVBQUNWLHlEQUFnQjtZQUNiWSxJQUFJLEVBQUMsT0FBTztZQUNaQyxJQUFJLEVBQUUsRUFBRTtZQUNSSCxTQUFTLEVBQUMsMEJBQTBCO1lBQ3BDSSxLQUFLLEVBQUVULFNBQVMsS0FBSyxLQUFLO3NCQUN0Qiw0RUFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEtBQUs7MEJBQ25CTixZQUFZLENBQUNXLEdBQUcsQ0FBQyxTQUFVQyxPQUFPLEVBQUU7b0JBQ2pDLHFCQUNBLDhEQUFDakIsZ0RBQU87d0JBRUppQixPQUFPLEVBQUVBLE9BQU87d0JBQ2hCYixXQUFXLEVBQUVBLFdBQVc7d0JBQ3hCSyxnQkFBZ0IsRUFBRSxXQUFNOzRCQUFDQSxnQkFBZ0IsQ0FBQ1EsT0FBTyxDQUFDQyxFQUFFLENBQUM7eUJBQUM7dUJBSGpERCxPQUFPLENBQUNDLEVBQUU7Ozs7NEJBSWIsQ0FDSjtpQkFDTCxDQUFDOzs7OztvQkFDSTs7Ozs7Z0JBQ0s7Ozs7O1lBQ2pCLENBQ1Q7Q0FDSjtHQXZDUWYsWUFBWTs7UUFLYkQsa0VBQWtCOzs7QUFMakJDLEtBQUFBLFlBQVk7QUF5Q3JCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi9TcGVha2VyJztcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSAncmVhY3QtcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgdXNlUmVxdWVzdFNwZWFrZXJzIGZyb20gJy4uL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycyc7XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc3BlYWtlcnNEYXRhLCBpc0xvYWRpbmcsIGhhc0Vycm9yZWQsZXJyb3IsXHJcbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZSwgXHJcbiAgICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApXHJcblxyXG4gICAgaWYgKGhhc0Vycm9yZWQgPT09IHRydWUpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9IDwvYj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgIC8vIGlmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gLy9Fc2NlIHF1w6xcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICByb3dzPXsxNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICByZWFkeT17aXNMb2FkaW5nID09PSBmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9uPXtzaG93U2Vzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsIlJlYWN0UGxhY2VIb2xkZXIiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbiIsInNwZWFrZXJzRGF0YSIsImlzTG9hZGluZyIsImhhc0Vycm9yZWQiLCJlcnJvciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJyZWFkeSIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ }),

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});