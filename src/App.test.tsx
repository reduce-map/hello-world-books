import React, { act } from 'react'
import { render, screen, expect, describe, jest, it } from '@testing-library/react' // Импортируем act из @testing-library/react
import App from './App'

jest.mock('./Header/Header', () => () => <div>Mocked Header</div>)
jest.mock('./Books/Books', () => () => <div>Mocked Books</div>)

describe('App Component', () => {
  it('should render Header and Books components', () => {
    act(() => {
      render(<App />)
    })

    expect(screen.getByText('Mocked Header')).toBeInTheDocument()
    expect(screen.getByText('Mocked Books')).toBeInTheDocument()
  })
})
