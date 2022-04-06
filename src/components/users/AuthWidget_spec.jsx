
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { act } from '@testing-library/react'

import { logg, } from "$shared"
import { AuthContextProvider, AuthWidget, } from "./"

enzyme.configure({ adapter: new Adapter() })

describe("AuthWidget", () => {

  test(' current2 - renders', async () => {
    let wrapper = mount(<AuthContextProvider >
      <AuthWidget />
    </AuthContextProvider>)
    expect(wrapper).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
