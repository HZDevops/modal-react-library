import { useState } from "react";
import "./Modal.css";

/**
 * @param {*} props
 * @returns {HTMLElement}
 */

function Modal(props) {
  // Set the display of the modal
  const [toggle, setToggle] = useState(true);

  // Pass a function as props to close the modal in the main component
  const handleUserClick = () => {
    props.handleResponse();
  };

  return toggle ? (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">{props.title}</div>
        <div className="modal-body">{props.content}</div>
        <div className="modal-footer">
          <button
            onClick={() => {
              setToggle(false);
              handleUserClick();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Modal;
