import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/articleSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import Header from '../components/Header.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page, query } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category, page, query }));
  }, [category, page, query, dispatch]);

  return (
    <div className="container mt-4">
        <Header/>
      <CategoryFilter />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <div className="row">
          {articles.map((article) => (
            <div key={article.title} className="col-md-4">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default HomePage;
