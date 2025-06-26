// src/components/Main/Main.jsx
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import "./Main.css";
import { fetchNews } from "../../utils/NewsApi";

function Main({ user, onToggleSave, savedArticles, setLastSearchTerm }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function handleSearch(keyword) {
    setLastSearchTerm(keyword); // <--- Set the last search keyword!
    setLoading(true);
    setError("");
    setSearched(false);
    try {
      const data = await fetchNews(keyword);
      setArticles(data.articles || []);
      setSearched(true);
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
      );
      setArticles([]);
      setSearched(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="main">
      {/* HERO SECTION */}
      <section className="main__hero">
        <div className="main__hero-bg"></div>
        <div className="container">
          <div className="main__hero-content">
            <h1 className="main__hero-title">What's going on in the world?</h1>
            <p className="main__hero-subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <SearchForm onSearch={handleSearch} loading={loading} />
          </div>
        </div>
      </section>

      {/* NEWS CARD LIST */}
      <NewsCardList
        articles={articles}
        loading={loading}
        error={error}
        searched={searched}
        onToggleSave={onToggleSave}
        savedArticles={savedArticles}
        user={user}
      />

      {/* ABOUT SECTION (now at the bottom) */}
      <About />
    </main>
  );
}

export default Main;
