import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import { getFeaturedNews } from '../api/mockApi';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedNews().then(data => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Завантаження новин...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-warning">Останні новини зі світу ігор</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;