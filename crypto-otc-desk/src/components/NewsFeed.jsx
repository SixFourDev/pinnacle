// src/components/NewsFeed.js
import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from the News API
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=de2105eb24b242439ec03fc1a7fd2a3c'
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch news. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched news:', data.articles);
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="news-feed">
      <h2>Cryptocurrency News Feed</h2>
      <ul>
        {news.slice(0, 5).map((article, index) => (
          <li key={index} className="news-item">
            <img
              src={article.urlToImage}
              alt={`${article.title} thumbnail`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <h3>{article.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsFeed;
