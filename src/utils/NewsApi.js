const NEWS_API_KEY = "c14c172c93bb496ebf89de365d01b7ad";

// Switch between local and production URLs for NewsAPI
const BASE_URL = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

// Helper to get the date 7 days ago in YYYY-MM-DD format
function getLastWeekDate() {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  return lastWeek.toISOString().split("T")[0];
}

// Main fetch function
export async function fetchNews(keyword = "") {
  if (!keyword.trim()) throw new Error("Please enter a keyword");
  const params = new URLSearchParams({
    q: keyword,
    from: getLastWeekDate(),
    to: new Date().toISOString().split("T")[0],
    apiKey: NEWS_API_KEY,
    pageSize: 100,
  });

  const url = `${BASE_URL}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    // Optional: surface error text
    const text = await response.text();
    throw new Error(
      `Network error (${response.status}): ${text || response.statusText}`
    );
  }
  return response.json();
}
