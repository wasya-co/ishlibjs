import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { act } from '@testing-library/react'

import { AuthContextProvider, MyAccountWidget } from "$components/users"
import { AppMock, logg } from "$shared"


import { RegisterModal } from "./"

configure({ adapter: new Adapter() })

const C = { // @TODO: this is not the place for C.
  anonUser: null,
}

let currentUser = C.anonUser
const setCurrentUser = (props) => currentUser = props

const mockPostLogin = jest.fn(() => new Promise(() => true, () => true) )
const useApi = () => ({
  // postLogin: () => new Promise((r, rr) => r()),
  postLogin: mockPostLogin
})

describe("RegisterModal", () => {

  it("renders - ", async () => {
    const w = mount(<AuthContextProvider {...{
      currentUser, setCurrentUser,
      loginModalOpen: true, setLoginModalOpen: () => {},
      useApi,
    }} ><RegisterModal /></AuthContextProvider>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
