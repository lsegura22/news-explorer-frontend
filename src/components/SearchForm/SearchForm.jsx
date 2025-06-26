import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch, loading }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    onSearch && onSearch(query.trim());
  }

  return (
    <form
      className="search-form__form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter a topic"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
        required
      />
      <button className="search-form__button" type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <div className="search-form__error">{error}</div>}
    </form>
  );
}

export default SearchForm;
