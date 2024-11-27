import ApiGateway from '../Shared/ApiGateway'
import { Book, BookList, IBooksRepository } from './Books.type'

export default class BooksRepository implements IBooksRepository {
  private readonly http = new ApiGateway()

  async getPublicBooks(user: string): Promise<BookList> {
    return this.http.get(`/books/${user}`)
  }

  async getPrivateBooks(user: string): Promise<BookList> {
    return this.http.get(`/books/${user}/private`)
  }

  async addBook(book: Book, user: string): Promise<boolean> {
    const response: ApiResponse = await this.http.post(`/books/${user}/`, book)
    return response.status === 'ok'
  }
}
