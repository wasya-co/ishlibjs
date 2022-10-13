
import React from 'react'
import { render, screen } from '@testing-library/react'
import StockWatch from './StockWatch'
import '@testing-library/jest-dom'

test('renders', () => {
  render(<StockWatch />)
  const el = screen.getByText(/when/i)
  expect(el).toBeInTheDocument()
})
