webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\\u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\\calcBroadFitFin\\simple-calculator\\nextjs\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      number1 = _useState[0],
      setNumber1 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      number2 = _useState2[0],
      setNumber2 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      result = _useState3[0],
      setResult = _useState3[1];

  function calculate() {
    var operator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
    var list = [];
    if (number1) list.push(number1);
    if (number2) list.push(number2);

    if (list.length === 0) {
      setResult("Please select fields");
      return;
    }

    var total = list[0];

    for (var idx = 1; idx < list.length; idx++) {
      if (operator === "/") total = number1 / number2;
    }

    setResult(total);
  }

  return __jsx("div", {
    style: {
      backgroundColor: "#EAEEF3"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("br", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("h1", {
    style: {
      textAlign: "center",
      maxWidth: "470px",
      margin: "0 auto"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Flexible payment structures designed for your business."), __jsx("br", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      margin: "50px auto",
      backgroundColor: "white",
      maxWidth: "726px",
      display: "flex",
      padding: "21px 35px"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "number1",
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Amount to finance")), __jsx("input", {
    type: "number",
    value: number1,
    onChange: function onChange(e) {
      return setNumber1(+e.target.value);
    },
    placeholder: "$5000",
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "number2",
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Term length")), __jsx("input", {
    type: "number",
    value: number2,
    onChange: function onChange(e) {
      return setNumber2(+e.target.value);
    },
    placeholder: "12 months",
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("p", {
    style: {
      marginTop: "0px"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Estimated Payment"), __jsx("h5", {
    style: {
      marginTop: "-5px"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, result))), __jsx("div", {
    style: {
      margin: "20px auto",
      width: "50px"
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("button", {
    style: {
      alignSelf: "center"
    },
    type: "button",
    onClick: function onClick() {
      calculate("/");
    },
    className: "jsx-822794511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "result")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "822794511",
    __self: this
  }, "html,body{background:rgba(234,238,243,1);padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}input{margin-top:13px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXNC60LDQu9GM0LrRg9C70Y/RgtC+0YBcXGNhbGNCcm9hZEZpdEZpblxcc2ltcGxlLWNhbGN1bGF0b3JcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGeUIsQUFJNkMsQUFTWixBQUdOLGdCQUNKLE1BSGQsTUFJQSxHQWJZLFVBQ0QsU0FHRyxzSUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFzQutCw0LvRjNC60YPQu9GP0YLQvtGAXFxjYWxjQnJvYWRGaXRGaW5cXHNpbXBsZS1jYWxjdWxhdG9yXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbnVtYmVyMSwgc2V0TnVtYmVyMV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbnVtYmVyMiwgc2V0TnVtYmVyMl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZShvcGVyYXRvciA9IFwiL1wiKSB7XHJcbiAgICBsZXQgbGlzdCA9IFtdO1xyXG5cclxuICAgIGlmIChudW1iZXIxKSBsaXN0LnB1c2gobnVtYmVyMSk7XHJcbiAgICBpZiAobnVtYmVyMikgbGlzdC5wdXNoKG51bWJlcjIpO1xyXG5cclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRSZXN1bHQoXCJQbGVhc2Ugc2VsZWN0IGZpZWxkc1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0b3RhbCA9IGxpc3RbMF07XHJcbiAgICBmb3IgKGxldCBpZHggPSAxOyBpZHggPCBsaXN0Lmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgaWYgKG9wZXJhdG9yID09PSBcIi9cIikgdG90YWwgPSBudW1iZXIxIC8gbnVtYmVyMjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXN1bHQodG90YWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNFQUVFRjNcIiB9fT5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXhXaWR0aDogXCI0NzBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmxleGlibGUgcGF5bWVudCBzdHJ1Y3R1cmVzIGRlc2lnbmVkIGZvciB5b3VyIGJ1c2luZXNzLlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjUwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjcyNnB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIyMXB4IDM1cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1iZXIxXCI+QW1vdW50IHRvIGZpbmFuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyMX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtYmVyMSgrZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkNTAwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlcjJcIj5UZXJtIGxlbmd0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtudW1iZXIyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXIyKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyIG1vbnRoc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBweFwiIH19PkVzdGltYXRlZCBQYXltZW50PC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTVweFwiIH19PntyZXN1bHR9PC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHggYXV0b1wiLCB3aWR0aDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGUoXCIvXCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICByZXN1bHRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzOCwgMjQzLCAxKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Admin\\\\Desktop\\\\\u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\\\\calcBroadFitFin\\\\simple-calculator\\\\nextjs\\\\pages\\\\index.js */"));
}

_s(Home, "SBPbgqaH/uzrNNUc09q0krsKz0U=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJudW1iZXIxIiwic2V0TnVtYmVyMSIsIm51bWJlcjIiLCJzZXROdW1iZXIyIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2FsY3VsYXRlIiwib3BlcmF0b3IiLCJsaXN0IiwicHVzaCIsImxlbmd0aCIsInRvdGFsIiwiaWR4IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwicGFkZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsIndpZHRoIiwiYWxpZ25TZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLENBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBQUEsbUJBR0RKLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHdEJLLE1BSHNCO0FBQUEsTUFHZEMsU0FIYzs7QUFLN0IsV0FBU0MsU0FBVCxHQUFtQztBQUFBLFFBQWhCQyxRQUFnQix1RUFBTCxHQUFLO0FBQ2pDLFFBQUlDLElBQUksR0FBRyxFQUFYO0FBRUEsUUFBSVIsT0FBSixFQUFhUSxJQUFJLENBQUNDLElBQUwsQ0FBVVQsT0FBVjtBQUNiLFFBQUlFLE9BQUosRUFBYU0sSUFBSSxDQUFDQyxJQUFMLENBQVVQLE9BQVY7O0FBRWIsUUFBSU0sSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCTCxlQUFTLENBQUMsc0JBQUQsQ0FBVDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSU0sS0FBSyxHQUFHSCxJQUFJLENBQUMsQ0FB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RUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFQSxlQUFTLEVBQUU7QUFBYixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ2xCLE1BQW5DLENBRkYsQ0FoQ0YsQ0FWRixFQStDRTtBQUFLLFNBQUssRUFBRTtBQUFFWSxZQUFNLEVBQUUsV0FBVjtBQUF1Qk8sV0FBSyxFQUFFO0FBQTlCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FEVDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JsQixlQUFTLENBQUMsR0FBRCxDQUFUO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQS9DRixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsZ3hLQURGO0FBcUZEOztHQTdHdUJSLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjE3YWVmOGVkYzk3N2FlNTg3OGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW251bWJlcjEsIHNldE51bWJlcjFdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW251bWJlcjIsIHNldE51bWJlcjJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjYWxjdWxhdGUob3BlcmF0b3IgPSBcIi9cIikge1xyXG4gICAgbGV0IGxpc3QgPSBbXTtcclxuXHJcbiAgICBpZiAobnVtYmVyMSkgbGlzdC5wdXNoKG51bWJlcjEpO1xyXG4gICAgaWYgKG51bWJlcjIpIGxpc3QucHVzaChudW1iZXIyKTtcclxuXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0UmVzdWx0KFwiUGxlYXNlIHNlbGVjdCBmaWVsZHNcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdG90YWwgPSBsaXN0WzBdO1xyXG4gICAgZm9yIChsZXQgaWR4ID0gMTsgaWR4IDwgbGlzdC5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgIGlmIChvcGVyYXRvciA9PT0gXCIvXCIpIHRvdGFsID0gbnVtYmVyMSAvIG51bWJlcjI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVzdWx0KHRvdGFsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRUFFRUYzXCIgfX0+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWF4V2lkdGg6IFwiNDcwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXhpYmxlIHBheW1lbnQgc3RydWN0dXJlcyBkZXNpZ25lZCBmb3IgeW91ciBidXNpbmVzcy5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCI1MHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI3MjZweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjFweCAzNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyMVwiPkFtb3VudCB0byBmaW5hbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e251bWJlcjF9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlcjEoK2UudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJDUwMDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1iZXIyXCI+VGVybSBsZW5ndGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyMn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtYmVyMigrZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMiBtb250aHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiB9fT5Fc3RpbWF0ZWQgUGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi01cHhcIiB9fT57cmVzdWx0fTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IGF1dG9cIiwgd2lkdGg6IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlKFwiL1wiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgcmVzdWx0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzgsIDI0MywgMSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==