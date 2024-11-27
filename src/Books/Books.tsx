import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import BooksController from './Books.ctrl'

const Books = observer(({ controller }: { controller: BooksController }) => {
  const [newBookName, setNewBookName] = useState('')
  const [newBookAuthor, setNewBookAuthor] = useState('')

  useEffect(() => {
    controller.init()
  }, [controller])

  const handleAddBook = () => {
    if (newBookName && newBookAuthor) {
      try {
        controller.addBook(newBookName, newBookAuthor)
        setNewBookName('')
        setNewBookAuthor('')
      } catch (error) {
        console.debug('Failed to add book:', error)
      }
    }
  }

  return (
    <div>
      <h1>
        {controller.user} {controller.currentBookType} (
        {controller.booksListVm.length}) Books List
      </h1>
      <div>
        {controller.booksListVm.map((book, index) => (
          <div key={`${index}${book.visibleName}`} className="books__item">
            {book.visibleName}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Author Name"
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Name"
          value={newBookName}
          onChange={(e) => setNewBookName(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  )
})

export default Books
