
import React, { useState, } from 'react'

import {
  AuthWidget,
  AuthContextProvider,
  LoginModal,
 } from './components/users'

const TestApp = () => {

  const useApi = () => {}

  const [ loginModalOpen, setLoginModalOpen ] = useState("Please login!")

  return <AuthContextProvider {...{ loginModalOpen, setLoginModalOpen, useApi, }} >

    {/* <LoginModal /> */}
    <AuthWidget />

  </AuthContextProvider>
}
export default TestApp
