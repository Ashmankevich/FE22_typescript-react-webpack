export type NewBooksApi = {
  total: string;
  books: NewBookApi[];
  error: string;
};

export type NewBookApi = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type SearchBooksApi = {
  total: string;
  page: string;
  books: NewBookApi[];
  error: string;
};

export type GetBookDetailsApi = {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {
    [key: string]: string;
  };
};

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'error';

export type NewBooks = {
  error: any;
  books: Book[];
  total: string;
  status: RequestStatusType;
};

export type Book = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
};

export type BookApi = {
  books: Book[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: any;
};

export type BooksApiResult = {
  error: any;
  page: string;
  total: string;
  books: Book[];
};

export type keyWords = {
  title: string;
  page: string;
};
