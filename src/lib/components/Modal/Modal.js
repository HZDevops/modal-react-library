import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  // State for modal
  const [isDisplayed, setDisplay] = useState(true);

  return (
    <div>
      {isDisplayed ? (
        <div className="modal-bg">
          <div className="modal">
            {props.text}
            <div
              type="button"
              className="modalButton"
              onClick={() => {
                setDisplay(false);
              }}
            >
              <span className="close">&times;</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Modal;
