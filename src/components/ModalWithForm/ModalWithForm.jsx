import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title, // e.g. "Sign in" or "Sign up"
  onClose, // function to close modal
  onSwitch, // function to switch modal (login <-> register)
  children, // custom form fields from parent
  error, // error message string (optional)
  buttonText, // e.g. "Sign in" or "Sign up"
  onSubmit, // form submit handler
  submitDisabled = false, // disables submit button
  switchText, // e.g. "Sign up" or "Sign in"
  switchPrompt = "or", // e.g. "or"
  width = "430px",
  height = "380px",
}) {
  return (
    <div className="modal-overlay">
      <div
        className="modal"
        style={{
          width,
          height,
          borderRadius: "16px",
        }}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit} autoComplete="off">
          {children}
          {error && <div className="modal__error">{error}</div>}
          <button
            type="submit"
            className="modal__submit"
            style={{ width: "358px", height: "64px" }}
            disabled={submitDisabled}
          >
            {buttonText}
          </button>
        </form>
        <p className="modal__switch">
          {switchPrompt}{" "}
          <span className="modal__link" onClick={onSwitch}>
            {switchText}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ModalWithForm;
