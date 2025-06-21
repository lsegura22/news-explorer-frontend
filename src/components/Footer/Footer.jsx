import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Supersite, Powered by News API
        </p>
        <div className="footer__right">
          <nav className="footer__nav">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a
              className="footer__link"
              href="https://tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </nav>
          <div className="footer__socials">
            <a
              href="https://github.com/yourusername"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {/* GitHub icon */}
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.072 1.836 2.813 1.306 3.504.998.107-.776.418-1.306.762-1.606-2.665-.3-5.467-1.333-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.984-.399 3.003-.404 1.019.005 2.043.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.629-5.479 5.926.429.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* Facebook icon */}
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.406.597 24 1.326 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.919c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.326-.594 1.326-1.326V1.326C24 .592 23.405 0 22.675 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
