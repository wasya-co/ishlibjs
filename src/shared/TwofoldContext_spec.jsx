
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

configure({ adapter: new Adapter() })

import {
  TwofoldContext,
  TwofoldContextProvider,
} from './TwofoldContext'

describe('TwofoldContext', () => {
  it('renders', () => {
    const w = mount(<TwofoldContextProvider />)
    expect(w).toBeTruthy()
  })
})
