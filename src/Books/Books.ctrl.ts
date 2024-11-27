import BooksModel from './Books.model'
import BooksRepository from './Books.repository'
import { Book, BookVMList, BookFilterType, IBooksRepository } from './Books.type'

export default class BooksController {
  private readonly model: BooksModel
  private readonly repository: IBooksRepository
  user: string = 'nick' // or postnikov
  private _currentBookType: BookFilterType = 'public'

  constructor(repository: IBooksRepository = new BooksRepository()) {
    this.model = new BooksModel()
    this.repository = repository
  }

  async init() {
    try {
      const books = await this.repository.getPublicBooks(this.user)
      this.model.setBooks(books)
    } catch (error) {
      console.debug('Failed to load books:', error)
      throw error
    }
  }

  get currentBookType(): BookFilterType {
    return this._currentBookType
  }

  get booksListVm(): BookVMList {
    return this.model.books.map((book: Book) => ({
      visibleName: `${book.author}: ${book.name}`,
    }))
  }

  async addBook(name: string, author: string) {
    const newBook = { name, author }
    try {
      const success = await this.repository.addBook(newBook, this.user)
      if (success) {
        this.model.addBook(newBook)
      }
    } catch (error) {
      console.debug('Failed to add book:', error)
      throw error
    }
  }

  async fetchBooks(type: BookFilterType) {
    try {
      const books =
        type === 'public'
          ? await this.repository.getPublicBooks(this.user)
          : await this.repository.getPrivateBooks(this.user)
      this.model.setBooks(books)
      this._currentBookType = type
    } catch (error) {
      console.debug('Failed to fetch books:', error)
      throw error
    }
  }

  updateUser(newUser: string) {
    this.user = newUser
  }
}
