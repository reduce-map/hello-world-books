export type Book = {
  id?: number // after rest api analisis
  name: string
  author: string
}

export type BookList = Book[]

export type BookVm = {
  visibleName: string
}

export type BookVMList = BookVm[]

export type BookFilterType = 'public' | 'private'

export interface IBooksRepository {
  getPublicBooks(user: string): Promise<BookList>;
  getPrivateBooks(user: string): Promise<BookList>;
  addBook(book: Book, user: string): Promise<boolean>;
}