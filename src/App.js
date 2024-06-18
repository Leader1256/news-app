import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleDetail from './pages/ArticleDetail';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/article/:title" element={<ArticleDetail/>} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
