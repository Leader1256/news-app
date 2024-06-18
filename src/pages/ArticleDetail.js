import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((article) => article.title === title)
  );

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="container mt-4">
        <Header/>
      <h2>{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="img-fluid" />
      )}
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
