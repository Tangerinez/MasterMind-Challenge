import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, showModal }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        You Fucking Suck Bro
        <button onClick={handleClose}>Start Over Bitch</button>
      </div>
    </div>
  );
};

export default Modal;
