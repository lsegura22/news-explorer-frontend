import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onClose, onRegister, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const showEmailError = touched && email && !isEmailValid;

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate login (success if fields valid)
    if (isEmailValid && password) {
      onLogin(); // parent handles user state
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal modal--login">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="modal__title">Sign in</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label" htmlFor="login-email">
            Email
          </label>
          <input
            className="modal__input"
            id="login-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            required
            autoComplete="username"
          />
          {showEmailError && (
            <div className="modal__error">Invalid email address</div>
          )}

          <label className="modal__label" htmlFor="login-password">
            Password
          </label>
          <input
            className="modal__input"
            id="login-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="modal__submit"
            disabled={!isEmailValid || !password}
          >
            Sign in
          </button>
        </form>
        <p className="modal__switch">
          or{" "}
          <span onClick={onRegister} className="modal__link">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
