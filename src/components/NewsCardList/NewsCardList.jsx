// src/components/NewsCardList/NewsCardList.jsx
import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({
  articles = [],
  loading,
  error,
  searched,
  onToggleSave,
  savedArticles = [],
  user,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  // Show preloader as soon as loading is true!
  if (loading) {
    return (
      <section className="news-card-list">
        <Preloader />
      </section>
    );
  }

  // Show nothing before a search has been done
  if (!searched) return null;

  return (
    <section className="news-card-list">
      {(articles.length > 0 || error) && (
        <h2 className="news-card-list__title">Search results</h2>
      )}
      {error && <p className="news-card-list__error">{error}</p>}
      {!error && articles.length === 0 && (
        <p className="news-card-list__empty">Nothing found</p>
      )}
      {!error && articles.length > 0 && (
        <>
          <div className="news-card-list__grid">
            {articles.slice(0, visibleCount).map((article, idx) => (
              <div className="news-card-list__item" key={idx}>
                <NewsCard
                  article={article}
                  isBookmarked={
                    !!savedArticles.find((a) => a.url === article.url)
                  }
                  onToggleSave={onToggleSave}
                  user={user}
                />
              </div>
            ))}
          </div>
          {visibleCount < articles.length && (
            <button
              className="news-card-list__show-more"
              onClick={() => setVisibleCount(visibleCount + 3)}
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default NewsCardList;
