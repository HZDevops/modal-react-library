import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal-bg">
      <div className="modal">{props.children}</div>
    </div>
  );
}
export default Modal;

export const ModalHeader = (props) => {
  return <div className="modal-header">{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return <div className="modal-footer">{props.children}</div>;
};

export const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
