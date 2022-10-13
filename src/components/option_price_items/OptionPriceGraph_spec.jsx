
import React from 'react'
import { render, screen } from '@testing-library/react'
import OptionPriceGraph from './OptionPriceGraph'

// @TODO: re-add. useApi is injected, not imported!
test.skip('current2 - renders', () => {
  render(<OptionPriceGraph symbol="some-symbol" />)
  const el = screen.getByText(/some-symbol/i)
  expect(el).toBeInTheDocument()
})
