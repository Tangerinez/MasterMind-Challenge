import React from "react";
import "./Hint.scss";

const Hint = ({ hints, hint, showHintModal, hideModal, handleHint }) => {
  const showHideClassName = showHintModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div>
      <div className={showHideClassName}>
        <div className="hint-modal">
          {hint}
          <button onClick={hideModal} className="close-btn">
            Close
          </button>
        </div>
      </div>
      <button className="hint-btn" onClick={handleHint}>
        Hints Left: {hints}
      </button>
    </div>
  );
};

export default Hint;

// const Modal = ({ handleClose, showModal, modalButtonText, modalHeader }) => {
//     const showHideClassName = showModal
//       ? "modal display-block"
//       : "modal display-none";

//     return (
//       <div className={showHideClassName}>
//         <div className="modal-main">
//           {modalHeader}
//           <button onClick={handleClose} className="end-game-btn">
//             {modalButtonText}
//           </button>
//         </div>
//       </div>
//     );
//   };
