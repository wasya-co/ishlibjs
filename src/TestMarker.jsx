
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
import Marker from './Marker'

const config = {
  apiOrigin: 'http://localhost:3001',
}

const TestApp = () => {
  return (<>
    <h1>Hello, world!</h1>
    <Marker />
  </>)
}
export default TestApp
