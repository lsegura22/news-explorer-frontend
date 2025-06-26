import React from "react";
import "./SuccessModal.css";

function SuccessModal({ onSignIn }) {
  return (
    <div className="modal-overlay">
      <div className="modal modal--success">
        <button className="modal__close" onClick={onSignIn} aria-label="Close">
          &times;
        </button>
        <h2 className="modal__success-title">
          Registration successfully <br /> completed!
        </h2>
        <p className="modal__switch" style={{ marginTop: 24 }}>
          <span onClick={onSignIn} className="modal__link modal__link--large">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SuccessModal;
