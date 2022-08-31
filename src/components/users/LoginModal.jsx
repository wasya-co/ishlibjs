
import React, { Fragment as F, useContext, useState, } from 'react'
import Modal from "react-modal"
// @TODO: do I even need to re-add this? ishlibjs is *always* used from elsewhere.
// import 'react-toastify/dist/ReactToastify.css'
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


import styles from './LoginModal.module.scss'

// copy-pasted in RegisterModal
export const Header = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`;

/**
 * LoginModal
**/
const LoginModal = (props) => {
  // logg(props, 'LoginModal, ishlibjs')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'LoginModalUsedAuthContext')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
    api.postLogin({ email, password }).then((r) => {
      setLoginModalOpen(false)
      toast('Login Successful.')
    }).catch((err) => {
      logg(err, 'e323 - cannot postLogin()')
      setCurrentUser(C.anonUser)
      toast("Login failed")
    })
  }

  Modal.setAppElement('body')
  return <Modal
    className={`LoginModal ${styles.LoginModal}`}
    isOpen={!!loginModalOpen}
    overlayClassName={styles.LoginModalOverlay}
    portalClassName={styles.LoginModalPortal}
  >
    <FlexRow >
      <Header>Login</Header>
      <CloseBtn onClick={() => setLoginModalOpen(false)} />
    </FlexRow>
    { 'string' === typeof loginModalOpen && <FlexRow>
      <div className={styles.Notice} >{ loginModalOpen }</div>
    </FlexRow> }
    <FlexCol>
      <label htmlFor='email'>Email</label>
      <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)    } />

      <label htmlFor='password'>Password</label>
      <input name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value) }
        onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
      />
      <FlexRow style={{
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: '0.4em',
      }} >
        <Btn onClick={() => doPasswordLogin(email, password)}>Login</Btn>
      </FlexRow>
    </FlexCol>
    <hr style={{ margin: '2rem 0', borderWidth: '1px' }} />
    <FlexRow style={{ justifyContent: 'center' }} >
      <a href='#' onClick={() => setLoginModalOpen(false) || setRegisterModalOpen(true) }>Register Instead</a>
    </FlexRow>
  </Modal>
}

export default LoginModal
