import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '420f3f8264a24d0792b4c580c4b3fbdf';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ category, page, query }) => {
    const params = {
      apiKey: API_KEY,
      category,
      page,
      pageSize: 10,
      q: query,
    };
    const response = await axios.get(`${BASE_URL}/top-headlines`, { params });
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
    totalResults: 0,
    query: '',
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(fav => fav.title !== action.payload.title);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setQuery, addFavorite, removeFavorite } = articlesSlice.actions;

export default articlesSlice.reducer;
