import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articleSlice';
import '../App.css';
const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalResults } = useSelector((state) => state.articles);
  const totalPages = Math.ceil(totalResults / 10);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={`page-item ${page === index + 1 ? 'active' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
