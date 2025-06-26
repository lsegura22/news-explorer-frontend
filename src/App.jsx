import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SavedNews from "./components/SavedNews/SavedNews";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import SuccessModal from "./components/SuccessModal/SuccessModal";

function AppRoutes() {
  const [modal, setModal] = useState(null);
  const [user, setUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState("");

  const navigate = useNavigate();

  // Track if window is 320px or less
  const [isMobile320, setIsMobile320] = useState(window.innerWidth <= 320);
  useEffect(() => {
    const handleResize = () => setIsMobile320(window.innerWidth <= 320);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll only when modal is open on 320px
  useEffect(() => {
    if (modal && isMobile320) {
      document.body.classList.add("body--noscroll-320");
    } else {
      document.body.classList.remove("body--noscroll-320");
    }
    return () => document.body.classList.remove("body--noscroll-320");
  }, [modal, isMobile320]);

  function handleLogin() {
    setUser({ name: "Luis" });
    setModal(null);
  }
  function handleLogout() {
    setUser(null);
    navigate("/");
  }

  function handleToggleSave(article) {
    setSavedArticles((prev) => {
      const exists = prev.some((a) => a.url === article.url);
      if (exists) {
        return prev.filter((a) => a.url !== article.url);
      } else {
        return [{ ...article, keyword: lastSearchTerm }, ...prev];
      }
    });
  }

  // Only show the header close X if modal is open AND screen is 320px
  const showHeaderClose = !!modal && isMobile320;

  return (
    <>
      <Header
        user={user}
        onSignIn={() => setModal("login")}
        onSignOut={handleLogout}
        showHeaderClose={showHeaderClose}
        onHeaderClose={() => setModal(null)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              user={user}
              onToggleSave={handleToggleSave}
              savedArticles={savedArticles}
              setLastSearchTerm={setLastSearchTerm}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              user={user}
              savedArticles={savedArticles}
              onToggleSave={handleToggleSave}
            />
          }
        />
      </Routes>

      <Footer />

      {modal === "login" && (
        <LoginModal
          onClose={() => setModal(null)}
          onRegister={() => setModal("register")}
          onLogin={handleLogin}
        />
      )}
      {modal === "register" && (
        <RegisterModal
          onClose={() => setModal(null)}
          onSuccess={() => setModal("success")}
          onSignIn={() => setModal("login")}
        />
      )}
      {modal === "success" && (
        <SuccessModal onSignIn={() => setModal("login")} />
      )}
    </>
  );
}

function App() {
  return (
    <div className="app">
      <Router basename="/news-explorer-frontend/">
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
