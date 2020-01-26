import React from "react";
import "./Modal.scss";

const Modal = ({
  handleClose,
  showModal,
  computerAnswer,
  modalButtonText,
  modalHeader
}) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {modalHeader} {computerAnswer}
        <button onClick={handleClose} className="start-over-btn">
          {modalButtonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
