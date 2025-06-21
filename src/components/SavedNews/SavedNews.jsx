// src/components/SavedNews/SavedNews.jsx
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ user, savedArticles, onToggleSave }) {
  const keywordList = Array.from(
    new Set(
      savedArticles.map((a) => a.keyword && a.keyword.trim()).filter(Boolean)
    )
  );
  let keywordsText = "";
  if (keywordList.length === 1) {
    keywordsText = keywordList[0];
  } else if (keywordList.length === 2) {
    keywordsText = `${keywordList[0]}, ${keywordList[1]}`;
  } else if (keywordList.length > 2) {
    keywordsText = `${keywordList[0]}, ${keywordList[1]}, and ${
      keywordList.length - 2
    } other`;
  }

  return (
    <main className="main main--saved-news">
      <section className="saved-news">
        <div className="container">
          <div className="saved-news__header">
            <p className="saved-news__label">Saved articles</p>
            <h1 className="saved-news__title">
              {user?.name}, you have {savedArticles.length} saved article
              {savedArticles.length !== 1 && "s"}
            </h1>
            <p className="saved-news__keywords">
              By keyword:{" "}
              <span className="saved-news__keywords-list">
                {keywordsText.split(", ").map((k, i, arr) => (
                  <b key={k}>
                    {k}
                    {i < arr.length - 1 ? ", " : ""}
                  </b>
                ))}
              </span>
            </p>
          </div>
        </div>
        {/* Gray background only behind cards */}
        <div className="saved-news__cards-bg">
          <div className="container">
            {savedArticles.length === 0 ? (
              <div className="saved-news__empty">No saved articles yet.</div>
            ) : (
              <div className="saved-news__grid">
                {savedArticles.map((article, idx) => (
                  <NewsCard
                    key={article.url || idx}
                    article={article}
                    isBookmarked={true}
                    onToggleSave={onToggleSave}
                    user={user}
                    isSavedList={true}
                    showKeyword={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SavedNews;
