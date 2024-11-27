import { useRef } from 'react'
import Books from './Books/Books'
import Header from './Header/Header'
import BooksController from './Books/Books.ctrl'
import { BookFilterType } from './Books/Books.type'

function App() {
  const booksController = useRef(new BooksController()).current

  const handleUserChange = (newUser: string) => {
    booksController.updateUser(newUser)
  }

  const handleFetchBooks = (type: BookFilterType) => {
    booksController.fetchBooks(type)
  }

  return (
    <div>
      <Header
        currentUser={booksController.user}
        onUserChange={handleUserChange}
        onFetchBooks={handleFetchBooks}
      />
      <Books controller={booksController} />
    </div>
  )
}

export default App
