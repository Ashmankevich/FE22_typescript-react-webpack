import axios from 'axios';
import { GetBookDetailsApi, NewBooksApi, SearchBooksApi } from './types';

class Api {
  private readonly API_URL = 'https://api.itbook.store/1.0/';

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<NewBooksApi> {
    const { data } = await this.api.get<NewBooksApi>('/new');
    return data;
  }
  public async searchBooks(
    title: string,
    page: string
  ): Promise<SearchBooksApi> {
    const { data } = await this.api.get<SearchBooksApi>(
      `/search/${title}/${page}`
    );
    return data;
  }
  public async getBookDetails(isbn: string): Promise<GetBookDetailsApi> {
    const { data } = await this.api.get<GetBookDetailsApi>(`/books/${isbn}`);
    return data;
  }
}
export const bookApi = new Api();
