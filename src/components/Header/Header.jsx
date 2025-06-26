import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoutIcon from "../../images/logout.svg";
import logoutWhiteIcon from "../../images/logoutwhite.svg";
import menuIcon from "../../images/menu.svg";
import menuBlackIcon from "../../images/menublack.svg";
import "./Header.css";

// Props: showHeaderClose, onHeaderClose
function Header({
  user,
  onSignIn,
  onSignOut,
  showHeaderClose = false,
  onHeaderClose = () => {},
}) {
  const location = useLocation();
  const isLight = location.pathname === "/saved-news";
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logoutImg = isLight ? logoutIcon : logoutWhiteIcon;
  const burgerIcon = isLight ? menuBlackIcon : menuIcon;

  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body--noscroll");
    } else {
      document.body.classList.remove("body--noscroll");
    }
    return () => document.body.classList.remove("body--noscroll");
  }, [menuOpen]);

  // Show X if menu is open, or if showHeaderClose (from App) is true
  const showX = showHeaderClose || menuOpen;

  return (
    <header className={`header${isLight ? " header--light" : ""}`}>
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__logo">
            NewsExplorer
          </Link>

          {/* Burger/X always top-right */}
          <button
            className="header__burger"
            onClick={() => {
              if (showHeaderClose) {
                onHeaderClose();
              } else {
                setMenuOpen((v) => !v);
              }
            }}
            aria-label={showX ? "Close" : "Open menu"}
            type="button"
          >
            {showX ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke={isLight ? "#1a1b22" : "#fff"}
                  strokeWidth="2"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke={isLight ? "#1a1b22" : "#fff"}
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <img
                src={burgerIcon}
                alt="Open menu"
                className="header__burger-icon"
              />
            )}
          </button>

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

      {/* === MOBILE MENU OVERLAY === */}
      {menuOpen && (
        <>
          <div
            className="header__mobile-backdrop"
            onClick={() => setMenuOpen(false)}
          />
          <div className="header__mobile-menu">
            <div className="header__mobile-top">
              <Link
                to="/"
                className="header__logo"
                onClick={() => setMenuOpen(false)}
              >
                NewsExplorer
              </Link>
            </div>
            <nav className="header__mobile-nav">
              <Link
                to="/"
                className={
                  "header__mobile-link" +
                  (location.pathname === "/"
                    ? " header__mobile-link_active"
                    : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              {user && (
                <Link
                  to="/saved-news"
                  className={
                    "header__mobile-link" +
                    (location.pathname === "/saved-news"
                      ? " header__mobile-link_active"
                      : "")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Saved articles
                </Link>
              )}
            </nav>
            <div className="header__mobile-actions">
              {user ? (
                <button
                  className="header__mobile-user-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    onSignOut();
                  }}
                >
                  <span className="header__user-name">{user.name}</span>
                  <img
                    src={logoutWhiteIcon}
                    alt="Sign out"
                    className="header__logout-icon"
                  />
                </button>
              ) : (
                <button
                  className="header__mobile-signin-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    onSignIn();
                  }}
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
