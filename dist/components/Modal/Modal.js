"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalHeader = exports.ModalFooter = exports.ModalBody = exports.Button = void 0;
require("./Modal.css");
function Modal(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, props.children));
}
var _default = Modal;
exports.default = _default;
const ModalHeader = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, props.children);
};
exports.ModalHeader = ModalHeader;
const ModalBody = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, props.children);
};
exports.ModalBody = ModalBody;
const ModalFooter = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, props.children);
};
exports.ModalFooter = ModalFooter;
const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick
  }, props.children);
};
exports.Button = Button;