
import React, { useState, } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// import 'react-toastify/dist/ReactToastify.css' // @TODO: re-add somehow nicer.

import {
  logg,
  request,
} from "$shared"
import {
  AuthContextProvider,
  LoginModal,
 } from './components/users'

const config = {
  apiOrigin: 'http://localhost:3001',
}

const TestApp = () => {

  const useApi = () => ({
    doRegister: ({ email, password }) => {
      return request.post(`${config.apiOrigin}/api/users`, { email, password }).then((r) => r.data).then((r) => {
        logg(r, 'done registered')
        return r
      })
    },
  })

  const [ loginModalOpen, setLoginModalOpen ] = useState(false) // useState("Please login!")
  const [ registerModalOpen, setRegisterModalOpen ] = useState(true) // useState("Please register")

  return <AuthContextProvider {...{
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
    useApi,
  }} >

    <LoginModal />


    <ToastContainer position="bottom-left" />
  </AuthContextProvider>
}
export default TestApp
