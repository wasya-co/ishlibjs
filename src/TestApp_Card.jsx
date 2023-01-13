
import React, { useState, } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'

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

const W0 = styled.div`
  width: 680px;
  border: 1px solid black;
  border-radius: 10px;

  // box-shadow: -12px 12px 2px 1px rgba(0, 0, 255, .2);

  --ish-shadow-size: 3px;
  --ish-card-bg: white;

  box-shadow: var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #b2b8c9, var(--ish-shadow-size) var(--ish-shadow-size) calc( 2 * var(--ish-shadow-size)) #f0f8ff;
  background: var(--ish-card-bg);
  min-height: 50vh;
  margin: 30px auto 130px auto ;
  padding: .5em;
`;

const Card = ({ children, ...props} ) => {
  return (<W0>{children}</W0>)
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

    {/* <LoginModal /> */}

    <Card >
      <form>
        <label>hello?</label>
        <input type="text"></input>

        <button>World</button>
      </form>
      <h1>Hello, world!</h1>
    </Card>

    <ToastContainer position="bottom-left" />
  </AuthContextProvider>
}
export default TestApp
