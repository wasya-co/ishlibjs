import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount, shallow } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import { JwtContextProvider, LoginWithPassword } from "."
import { logg, request } from "../shared"

enzyme.configure({ adapter: new Adapter() })

/*
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

localStorage.getItem = new localStorageMock()
global.localStorage = new LocalStorageMock
*/

describe("PasswordLogin", () => {

  beforeEach(() => {
    jest.spyOn(request, 'post').mockResolvedValue({ data: { some: 'dataz?' } })
  })

  it("submits on Enter", async () => {
    let component = mount(<JwtContextProvider config={{ routes: {}  }} >
      <LoginWithPassword />
    </JwtContextProvider>)
    expect(component.find('input[type="password"]').length).toEqual(1)

    component.find('input[type="password"]').simulate('keydown', { key: 'Enter' })
    await act(() => new Promise(setImmediate))

    logg(request.post.mock, 'mock data')

    expect(request.post).toHaveBeenCalled()
  })

})
