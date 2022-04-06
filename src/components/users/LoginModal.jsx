
/*
 * components / users / PasswordLoginModal
 */
import React, { Fragment as F, useContext, useState, } from 'react'
import Modal from "react-modal"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

import {
  Btn,
  C,
  FlexCol,
  logg,
  request,
} from "$shared"
import {
  AuthContext, AuthContextProvider,
} from './'

/**
 * LoginModal
**/
const LoginModal = (props) => {
  // logg(props, 'LoginModal')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(TwofoldContext), 'LoginModalUsedContext')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
    api.postLogin({ email, password }).then((r) => {
      setLoginModalOpen(false)
      toast('Login Successful.')
    }).catch((err) => {
      logg(e, 'e323')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <Modal isOpen={loginModalOpen} >
    <div onClick={() => setLoginModalOpen(false)} >[x]</div>
    <FlexCol>
      <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } /><br />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
        onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
      />
      <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
    </FlexCol>
  </Modal>
}

export default LoginModal
