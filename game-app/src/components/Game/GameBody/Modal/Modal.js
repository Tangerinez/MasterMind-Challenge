import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, showModal, computerAnswer }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        The Correct Answer is {computerAnswer}
        <button onClick={handleClose} className="start-over-btn">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
