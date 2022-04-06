
import React, { Fragment as F, useContext, } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AuthContext, AuthContextProvider,
  FacebookLogin,
  LoginModal, LoginWithEmail,
  RegisterModal, RegisterWithEmail,
} from "$components/users"

import {
  Btn,
  FlexCol,
  logg,
} from "$shared"



const RegisterWithEmailBtn = (props) => {
  return <Btn {...props} >Register with Email</Btn>
}
const LoginWithEmailBtn = (props) => {
  return <Btn {...props} >Login with Email</Btn>
}


/**
 * If user is logged in, display the email/handle and allow logout.
 * If user is not logged in, allow registration and login via Fb, and email+passwd.
**/
const AuthWidget = (props) => {
  logg(props, 'AuthWidget')

  const {
    setLoginModalOpen,
    setRegisterModalOpen,
  } = useContext(AuthContext)
  logg(useContext(AuthContext), 'AuthWidgetUsedContext')

  return <F>
    <FlexCol>
      <FacebookLogin />
      <RegisterWithEmailBtn onClick={() => {
        setRegisterModalOpen(true)
      }} />
      <LoginWithEmailBtn onClick={() => {
        setLoginModalOpen(true)
      }} />
    </FlexCol>

    <RegisterModal />
    <LoginModal />

  </F>
};
AuthWidget.propTypes = {
  // none so far
}

export default AuthWidget
