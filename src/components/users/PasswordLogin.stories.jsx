

import React, { Fragment as F } from 'react'

import { logg, TwofoldContextProvider, } from "$shared"
import PasswordLogin from "./PasswordLogin"

export default {
  title: 'users/PasswordLogin',
  component: PasswordLogin,
}

const Template = (props) => {
  const providerProps = {
    currentUser: {},
    setCurrentUser: () => {},
    useApi: () => {},
  }

  return <F>
    <TwofoldContextProvider {...providerProps} >
      <PasswordLogin {...props} />
    </TwofoldContextProvider>
  </F>
}

export const Login = Template.bind({})
