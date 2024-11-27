import { useState } from 'react'
import { BookFilterType } from '../Books/Books.type'
import { capitalize } from '../Shared/utils'
import './header.css'

const Header = ({
  currentUser,
  onUserChange,
  onFetchBooks,
}: {
  currentUser: string
  onUserChange: (user: string) => void
  onFetchBooks: (type: 'public' | 'private') => void
}) => {
  const [userInput, setUserInput] = useState(currentUser)
  const [bookType, setBookType] = useState<BookFilterType>('public')

  const handleApply = () => {
    onUserChange(userInput)
    onFetchBooks(bookType)
  }

  const handleToggle = (type: BookFilterType) => {
    setBookType(type)
    onFetchBooks(type)
  }

  return (
    <header className="header">
      <h1>Books App</h1>
      <div className="header__controls">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter username"
        />
        <button onClick={handleApply}>Apply</button>
        <div className="header__toggle">
          <button
            onClick={() => handleToggle('public')}
            className={bookType === 'public' ? 'active' : ''}
          >
            Show Public Books
          </button>
          <button
            onClick={() => handleToggle('private')}
            className={bookType === 'private' ? 'active' : ''}
          >
            Show Private Books for {capitalize(currentUser)}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
