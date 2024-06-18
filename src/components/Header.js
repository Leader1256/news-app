import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setQuery } from '../store/articleSlice';

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setQuery(search));
  };

  return (
    <header className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="text-xl font-bold"><Link to="/" className="text-white">Daily NewsApp</Link></h1>
        <form onSubmit={handleSearch} className="form-inline">
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-light">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
