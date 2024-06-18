import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../store/articleSlice';

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.articles.favorites);
  const isFavorite = favorites.some((fav) => fav.title === article.title);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <div className="card mb-4">
      {article.urlToImage && (
        <img src={article.urlToImage} alt="img loading" className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title"><Link to={`/article/${article.title}`} className="text-dark">{article.title}</Link></h5>
        <p className="card-text">{article.description}</p>
        <button onClick={toggleFavorite} style={{background:"orange"}} className="btn btn-sm btn-primary">
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
