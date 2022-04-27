
/*
 * components / users / PasswordLoginModal.jsx
**/
import React, { Fragment as F, useContext, useState, } from 'react'
import Modal from "react-modal"
import { ToastContainer, toast } from 'react-toastify'

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

// @TODO: do I even need to re-add this? ishlibjs is *always* used from elsewhere.
// import 'react-toastify/dist/ReactToastify.css'
import styles from './LoginModal.scss'

/**
 * LoginModal
**/
const LoginModal = (props) => {
  // logg(props, 'LoginModal, ishlibjs')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'LoginModalUsedAuthContext2')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
    api.postLogin({ email, password }).then((r) => {
      setLoginModalOpen(false)
      toast('Login Successful.')
    }).catch((err) => {
      logg(err, 'e323')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <Modal
    className={`LoginModal ${styles.LoginModal}`}
    isOpen={loginModalOpen}
    overlayClassName={styles.LoginModalOverlay}
    // portalClassName={'LoginModalPortal'}
  >
    <FlexRow style={{ flexDirection: 'row-reverse' }} >
      <CloseBtn onClick={() => setLoginModalOpen(false)} />
    </FlexRow>
    <FlexCol>
      <label htmlFor='email'>Email</label>
      <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)    } />

      <label htmlFor='password'>Password</label>
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
