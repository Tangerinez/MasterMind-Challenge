import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, showModal, modalButtonText, modalHeader }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {modalHeader}
        <button onClick={handleClose} className="end-game-btn">
          {modalButtonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
