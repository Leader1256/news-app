import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../store/articleSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
  };

  return (
    <div className="btn-group mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`btn btn-primary ${currentCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
