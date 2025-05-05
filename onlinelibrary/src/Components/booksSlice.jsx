// src/features/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from '../Booksdata';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
