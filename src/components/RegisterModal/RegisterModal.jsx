// src/components/RegisterModal/RegisterModal.jsx
import React, { useState } from "react";
import "./RegisterModal.css";

function RegisterModal({ onClose, onSignIn, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    name: false,
  });

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isNameValid = name.length >= 2 && name.length <= 40;
  const showEmailError = touched.email && email && !isEmailValid;
  const showNameError = touched.name && name && !isNameValid;

  function handleSubmit(e) {
    e.preventDefault();
    // Register logic here, or show success
    onSuccess && onSuccess();
  }

  return (
    <div className="modal-overlay">
      <div className="modal modal--register">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="modal__title">Sign up</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label" htmlFor="register-email">
            Email
          </label>
          <input
            className="modal__input"
            id="register-email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            required
            autoComplete="username"
          />
          {showEmailError && (
            <div className="modal__error">Invalid email address</div>
          )}

          <label className="modal__label" htmlFor="register-password">
            Password
          </label>
          <input
            className="modal__input"
            id="register-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            required
            autoComplete="new-password"
          />

          <label className="modal__label" htmlFor="register-name">
            Name
          </label>
          <input
            className="modal__input"
            id="register-name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            required
            minLength={2}
            maxLength={40}
          />
          {showNameError && (
            <div className="modal__error">Name must be 2-40 characters</div>
          )}

          <button
            type="submit"
            className="modal__submit"
            disabled={!isEmailValid || !password || !isNameValid}
          >
            Sign up
          </button>
        </form>
        <p className="modal__switch">
          or{" "}
          <span onClick={onSignIn} className="modal__link">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
