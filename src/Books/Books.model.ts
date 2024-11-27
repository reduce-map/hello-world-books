import { makeAutoObservable } from 'mobx'
import { BookList, Book } from './Books.type'

export default class BooksModel {
  books: BookList = []

  constructor() {
    makeAutoObservable(this)
  }

  setBooks(books: BookList) {
    this.books = books
  }

  addBook(book: Book) {
    this.books.push(book)
  }
}
