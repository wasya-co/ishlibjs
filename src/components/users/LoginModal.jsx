
/*
 * components / users / PasswordLoginModal
 */
import React, { Fragment as F, useContext, useState, } from 'react'
import _Modal from "react-modal"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

import {
  Btn,
  C, CloseBtn,
  FlexCol, FlexRow,
  logg,
  request,
} from "$shared"
import {
  AuthContext, AuthContextProvider,
} from './'

const Modal = _Modal

const styles = {
  LoginModal: {
    margin: 'auto',
    maxWidth: '500px',
    // position: "absolute",
    // top: "40px",
    // left: "40px",
    // right: "40px",
    // bottom: "40px",
    // backgroundColor: "papayawhip",
  },
  LoginModalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rebeccapurple",
  },
};

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

  return <Modal
    isOpen={loginModalOpen}
    style={{
      content: styles.LoginModal,
      // overlay: styles.LoginModalOverlay,
    }}
    // portalClassName={'LoginModalPortal'}
    // className={{
    //   base: styles.LoginModal,
    //   afterOpen: 'ReactModal__Content--after-open',
    //   beforeClose: 'ReactModal__Content--before-close',
    // }}
    // overlayClassName={{
    //   base: 'LoginModalOverlay',
    //   afterOpen: 'ReactModal__Overlay--after-open',
    //   beforeClose: 'ReactModal__Overlay--before-close',
    // }}
  >
    <FlexRow style={{ flexDirection: 'row-reverse' }} >
      <CloseBtn onClick={() => setLoginModalOpen(false)} />
    </FlexRow>
    <FlexCol>
      <label for='email'>Email</label>
      <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)    } />

      <label for='password'>Password</label>
      <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value) }
        onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
      />
      <FlexRow style={{
        justifyContent: 'space-between',
        marginTop: '0.4em',
      }} >
        <span>Forgot?</span>
        <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
      </FlexRow>
    </FlexCol>
  </Modal>
}

export default LoginModal
