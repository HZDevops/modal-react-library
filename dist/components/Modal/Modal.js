"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
require("./Modal.css");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * @param {*} props
 * @returns {HTMLElement}
 */

function Modal(props) {
  // Set the display of the modal
  const [toggle, setToggle] = (0, _react.useState)(true);

  // Pass a function as props to close the modal in the main component
  const handleUserClick = () => {
    props.handleResponse();
  };
  return toggle ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-bg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-header",
        children: props.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-body",
        children: props.content
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-footer",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          onClick: () => {
            setToggle(false);
            handleUserClick();
          },
          children: "Close"
        })
      })]
    })
  }) : "";
}
var _default = Modal;
exports.default = _default;