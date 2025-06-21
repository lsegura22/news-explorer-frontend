import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoutIcon from "../../images/logout.png";
import logoutWhiteIcon from "../../images/logoutwhite.png";
import "./Header.css";

function Header({ user, onSignIn, onSignOut }) {
  const location = useLocation();
  const isLight = location.pathname === "/saved-news";

  // Pick the right logout icon for the header
  const logoutImg = isLight ? logoutIcon : logoutWhiteIcon;

  return (
    <header className={`header${isLight ? " header--light" : ""}`}>
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            NewsExplorer
          </Link>
          <div
            className={`header__links${!user ? " header__links--guest" : ""}`}
          >
            <Link
              to="/"
              className={
                "header__link" +
                (location.pathname === "/" ? " header__link_active" : "")
              }
            >
              Home
            </Link>
            {user && (
              <Link
                to="/saved-news"
                className={
                  "header__link" +
                  (location.pathname === "/saved-news"
                    ? " header__link_active"
                    : "")
                }
              >
                Saved articles
              </Link>
            )}
            {user ? (
              <button className="header__user-btn" onClick={onSignOut}>
                <span className="header__user-name">{user.name}</span>
                <img
                  src={logoutImg}
                  alt="Sign out"
                  className="header__logout-icon"
                />
              </button>
            ) : (
              <button
                className={`header__signin-btn${
                  isLight ? " header__signin-btn--light" : ""
                }`}
                onClick={onSignIn}
              >
                Sign in
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
