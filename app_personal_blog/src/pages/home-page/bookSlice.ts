import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bookApi } from './bookApi';
import {
  BookApi,
  BooksApiResult,
  GetBookDetailsApi,
  keyWords,
  NewBooksApi,
} from './types';

const initialState: BookApi = {
  books: [],
  error: null,
  status: 'idle',
  total: '0',
  result: {
    authors: '',
    desc: '',
    error: '',
    image: '',
    isbn10: '',
    isbn13: '',
    language: '',
    pages: '',
    pdf: {},
    price: '',
    publisher: '',
    rating: '',
    subtitle: '',
    title: '',
    url: '',
    year: '',
  },
};

export const fetchBook = createAsyncThunk<NewBooksApi>(
  'book/fetchBook',
  async () => {
    const newBooks = await bookApi.getNewBooks();
    return newBooks;
  }
);

export const fetchSearchBooks = createAsyncThunk<BooksApiResult, keyWords>(
  'books/fetchSearchBooks',
  async ({ title, page }) => {
    const resultBooks = await bookApi.searchBooks(title, page);
    return resultBooks;
  }
);

export const fetchBookDetails = createAsyncThunk<GetBookDetailsApi, string>(
  'books/fetchBookDetails',
  async (id) => {
    const bookDetails = await bookApi.getBookDetails(id);
    return bookDetails;
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchBook.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.books = payload.books;
      state.error = payload.error;
      state.total = payload.total;
    });
    builder.addCase(fetchBook.rejected, (state, { payload }) => {
      state.status = 'error';
      state.error = payload;
    });
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
      state.books = action.payload.books;
      state.status = 'success';
      state.total = action.payload.total;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, action) => {
      state.error = action.error;
      state.status = 'error';
    });
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.result = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchBookDetails.rejected, (state) => {
      state.status = 'loading';
      state.error = null;
    });
  },
});
export default bookSlice.reducer;
