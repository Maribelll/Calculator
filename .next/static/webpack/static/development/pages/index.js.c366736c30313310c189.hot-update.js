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
    var operator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
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
  }, "html,body{background:rgba(234,238,243,1);padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}input{margin-top:13px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXNC60LDQu9GM0LrRg9C70Y/RgtC+0YBcXGNhbGNCcm9hZEZpdEZpblxcc2ltcGxlLWNhbGN1bGF0b3JcXG5leHRqc1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGeUIsQUFJNkMsQUFTWixBQUdOLGdCQUNKLE1BSGQsTUFJQSxHQWJZLFVBQ0QsU0FHRyxzSUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFzQutCw0LvRjNC60YPQu9GP0YLQvtGAXFxjYWxjQnJvYWRGaXRGaW5cXHNpbXBsZS1jYWxjdWxhdG9yXFxuZXh0anNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbnVtYmVyMSwgc2V0TnVtYmVyMV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbnVtYmVyMiwgc2V0TnVtYmVyMl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZShvcGVyYXRvciA9IFwiXCIpIHtcclxuICAgIGxldCBsaXN0ID0gW107XHJcblxyXG4gICAgaWYgKG51bWJlcjEpIGxpc3QucHVzaChudW1iZXIxKTtcclxuICAgIGlmIChudW1iZXIyKSBsaXN0LnB1c2gobnVtYmVyMik7XHJcblxyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFJlc3VsdChcIlBsZWFzZSBzZWxlY3QgZmllbGRzXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRvdGFsID0gbGlzdFswXTtcclxuICAgIGZvciAobGV0IGlkeCA9IDE7IGlkeCA8IGxpc3QubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICBpZiAob3BlcmF0b3IgPT09IFwiL1wiKSB0b3RhbCA9IG51bWJlcjEgLyBudW1iZXIyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlc3VsdCh0b3RhbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBRUVGM1wiIH19PlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1heFdpZHRoOiBcIjQ3MHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGbGV4aWJsZSBwYXltZW50IHN0cnVjdHVyZXMgZGVzaWduZWQgZm9yIHlvdXIgYnVzaW5lc3MuXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiNTBweCBhdXRvXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNzI2cHhcIixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIxcHggMzVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWJlcjFcIj5BbW91bnQgdG8gZmluYW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtudW1iZXIxfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXIxKCtlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQ1MDAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyMlwiPlRlcm0gbGVuZ3RoPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e251bWJlcjJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlcjIoK2UudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIgbW9udGhzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMHB4XCIgfX0+RXN0aW1hdGVkIFBheW1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpblRvcDogXCItNXB4XCIgfX0+e3Jlc3VsdH08L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjBweCBhdXRvXCIsIHdpZHRoOiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZShcIi9cIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHJlc3VsdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjM4LCAyNDMsIDEpO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Admin\\\\Desktop\\\\\u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\\\\calcBroadFitFin\\\\simple-calculator\\\\nextjs\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJudW1iZXIxIiwic2V0TnVtYmVyMSIsIm51bWJlcjIiLCJzZXROdW1iZXIyIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2FsY3VsYXRlIiwib3BlcmF0b3IiLCJsaXN0IiwicHVzaCIsImxlbmd0aCIsInRvdGFsIiwiaWR4IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwicGFkZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsIndpZHRoIiwiYWxpZ25TZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLENBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBQUEsbUJBR0RKLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHdEJLLE1BSHNCO0FBQUEsTUFHZEMsU0FIYzs7QUFLN0IsV0FBU0MsU0FBVCxHQUFrQztBQUFBLFFBQWZDLFFBQWUsdUVBQUosRUFBSTtBQUNoQyxRQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUVBLFFBQUlSLE9BQUosRUFBYVEsSUFBSSxDQUFDQyxJQUFMLENBQVVULE9BQVY7QUFDYixRQUFJRSxPQUFKLEVBQWFNLElBQUksQ0FBQ0MsSUFBTCxDQUFVUCxPQUFWOztBQUViLFFBQUlNLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQkwsZUFBUyxDQUFDLHNCQUFELENBQVQ7QUFDQTtBQUNEOztBQUVELFFBQUlNLEtBQUssR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBaEI7O0FBQ0EsU0FBSyxJQUFJSSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHSixJQUFJLENBQUNFLE1BQTdCLEVBQXFDRSxHQUFHLEVBQXhDLEVBQTRDO0FBQzFDLFVBQUlMLFFBQVEsS0FBSyxHQUFqQixFQUFzQkksS0FBSyxHQUFHWCxPQUFPLEdBQUdFLE9BQWxCO0FBQ3ZCOztBQUVERyxhQUFTLENBQUNNLEtBQUQsQ0FBVDtBQUNEOztBQUVELFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUscUJBQWUsRUFBRTtBQUFuQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsY0FBUSxFQUFFLE9BQWpDO0FBQTBDQyxZQUFNLEVBQUU7QUFBbEQsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBSEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFDRSxTQUFLLEVBQUU7QUFDTEEsWUFBTSxFQUFFLFdBREg7QUFFTEgscUJBQWUsRUFBRSxPQUZaO0FBR0xFLGNBQVEsRUFBRSxPQUhMO0FBSUxFLGFBQU8sRUFBRSxNQUpKO0FBS0xDLGFBQU8sRUFBRTtBQUxKLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsQ0FERixFQUlFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUVsQixPQUZUO0FBR0UsWUFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLGFBQU9sQixVQUFVLENBQUMsQ0FBQ2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFYLENBQWpCO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxPQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBVEYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixFQUlFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUVuQixPQUZUO0FBR0UsWUFBUSxFQUFFLGtCQUFDaUIsQ0FBRDtBQUFBLGFBQU9oQixVQUFVLENBQUMsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFYLENBQWpCO0FBQUEsS0FIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBckJGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBSSxTQUFLLEVBQUU7QUFBRUEsZUFBUyxFQUFFO0FBQWIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNsQixNQUFuQyxDQUZGLENBaENGLENBVkYsRUErQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRVksWUFBTSxFQUFFLFdBQVY7QUFBdUJPLFdBQUssRUFBRTtBQUE5QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBRFQ7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNibEIsZUFBUyxDQUFDLEdBQUQsQ0FBVDtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0EvQ0YsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLGd4S0FERjtBQXFGRDs7R0E3R3VCUixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMzY2NzM2YzMwMzEzMzEwYzE4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtudW1iZXIxLCBzZXROdW1iZXIxXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtudW1iZXIyLCBzZXROdW1iZXIyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlKG9wZXJhdG9yID0gXCJcIikge1xyXG4gICAgbGV0IGxpc3QgPSBbXTtcclxuXHJcbiAgICBpZiAobnVtYmVyMSkgbGlzdC5wdXNoKG51bWJlcjEpO1xyXG4gICAgaWYgKG51bWJlcjIpIGxpc3QucHVzaChudW1iZXIyKTtcclxuXHJcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0UmVzdWx0KFwiUGxlYXNlIHNlbGVjdCBmaWVsZHNcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdG90YWwgPSBsaXN0WzBdO1xyXG4gICAgZm9yIChsZXQgaWR4ID0gMTsgaWR4IDwgbGlzdC5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgIGlmIChvcGVyYXRvciA9PT0gXCIvXCIpIHRvdGFsID0gbnVtYmVyMSAvIG51bWJlcjI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVzdWx0KHRvdGFsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRUFFRUYzXCIgfX0+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWF4V2lkdGg6IFwiNDcwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEZsZXhpYmxlIHBheW1lbnQgc3RydWN0dXJlcyBkZXNpZ25lZCBmb3IgeW91ciBidXNpbmVzcy5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCI1MHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI3MjZweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMjFweCAzNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtYmVyMVwiPkFtb3VudCB0byBmaW5hbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e251bWJlcjF9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlcjEoK2UudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJDUwMDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1iZXIyXCI+VGVybSBsZW5ndGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyMn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtYmVyMigrZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMiBtb250aHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiB9fT5Fc3RpbWF0ZWQgUGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi01cHhcIiB9fT57cmVzdWx0fTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4IGF1dG9cIiwgd2lkdGg6IFwiNTBweFwiIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlKFwiL1wiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgcmVzdWx0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzgsIDI0MywgMSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==