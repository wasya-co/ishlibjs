
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

import {
  Box,
  inflector,
  ModalHeader,
  WBordered,
} from './'

configure({ adapter: new Adapter() })

describe('inflector', () => {

  test('tableize', () => {
    expect(inflector.tableize('Report')).toEqual('reports')
    expect(inflector.tableize('Gallery')).toEqual('galleries')
  })

})

describe('ModalHeader - current2 ', () => {
  it('renders', () => {
    const w = mount(<ModalHeader onClose={() => {}} />)
    expect(w).toBeTruthy()
  })
})

describe('TwofoldContext', () => {
  it.skip('gets bottomDrawerOpen from localStorage', () => {
    throw 'not implemented'
  })
})

it('WBordered', () => {
  const w = <WBordered />
  expect(w).toBeTruthy()
})
