
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

import {
  Box,
  FlexCol, FlexRow,
  inflector,
  ModalHeader,
  WBordered,
} from './'

configure({ adapter: new Adapter() })


test('FlexCol', () => {
  const w = mount(<FlexCol />)
  expect(w).toBeTruthy()
})

test('FlexRow', () => {
  const w = mount(<FlexRow />)
  expect(w).toBeTruthy()
})


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


it('WBordered', () => {
  const w = <WBordered />
  expect(w).toBeTruthy()
})
