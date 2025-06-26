import React, { useState } from "react";
import bookmarkInactive from "../../images/bookmark-inactive.png";
import bookmarkActive from "../../images/bookmark-active.png";
import trashIcon from "../../images/trash.png";
import trashHoverIcon from "../../images/trashhover.png";
import "./NewsCard.css";

function NewsCard({
  article,
  isBookmarked = false,
  onToggleSave,
  user,
  isSavedList = false,
  showKeyword = false,
}) {
  const {
    urlToImage,
    title,
    publishedAt,
    description,
    source,
    url,
    content,
    keyword,
  } = article;

  // Tooltip and hover states
  const [showSigninTooltip, setShowSigninTooltip] = useState(false);
  const [showRemoveTooltip, setShowRemoveTooltip] = useState(false);
  const [trashHover, setTrashHover] = useState(false);

  function handleBookmarkClick(e) {
    e.preventDefault();
    if (!user) return;
    onToggleSave(article);
  }

  function handleTrashClick(e) {
    e.preventDefault();
    onToggleSave(article);
  }

  return (
    <div className="news-card">
      {showKeyword && keyword && (
        <span className="news-card__keyword">{keyword}</span>
      )}
      <img
        className="news-card__image"
        src={urlToImage || "/fallback-news.png"}
        alt={title}
        draggable="false"
      />
      {isSavedList ? (
        <button
          className="news-card__trash"
          aria-label="Remove from saved"
          onClick={handleTrashClick}
          type="button"
          onMouseEnter={() => {
            setShowRemoveTooltip(true);
            setTrashHover(true);
          }}
          onMouseLeave={() => {
            setShowRemoveTooltip(false);
            setTrashHover(false);
          }}
        >
          {showRemoveTooltip && (
            <span className="news-card__tooltip news-card__tooltip--remove">
              Remove from saved
            </span>
          )}
          <img
            src={trashHover ? trashHoverIcon : trashIcon}
            alt="Remove"
            aria-hidden="true"
            className="news-card__trash-img"
          />
        </button>
      ) : (
        <button
          className="news-card__bookmark"
          aria-label={isBookmarked ? "Remove bookmark" : "Save article"}
          onClick={handleBookmarkClick}
          type="button"
          tabIndex={0}
          onMouseEnter={() => {
            if (!user) setShowSigninTooltip(true);
          }}
          onMouseLeave={() => setShowSigninTooltip(false)}
        >
          <img
            src={isBookmarked ? bookmarkActive : bookmarkInactive}
            alt={isBookmarked ? "Bookmarked" : "Not bookmarked"}
            aria-hidden="true"
            className="news-card__bookmark-img"
          />
          {!user && showSigninTooltip && (
            <span className="news-card__tooltip news-card__tooltip--signin">
              Sign in to save articles
            </span>
          )}
        </button>
      )}
      <div className="news-card__content">
        <span className="news-card__date">{formatDate(publishedAt)}</span>
        <h3 className="news-card__title">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="news-card__description">{description || content}</p>
        <span className="news-card__source">
          {(source && source.name && source.name.toUpperCase()) || ""}
        </span>
      </div>
    </div>
  );
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default NewsCard;
