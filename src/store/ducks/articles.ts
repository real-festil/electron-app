/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: `articles`,
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;
