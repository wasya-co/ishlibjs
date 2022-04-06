
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  AuthContext,
  FacebookLogin,
  LoginWithEmail,
  RegisterWithEmail,
} from "$components/users"

import {
  FlexCol,
} from "$shared"

/**
 * If user is logged in, display the email/handle and allow logout.
 * If user is not logged in, allow registration and login via Fb, and email+passwd.
**/
const AuthWidget = (props) => {
  const {
    setLoginModalOpen,
    setRegisterModalOpen,
  } = useContext(AuthContext)

  return <FlexCol>
    <FacebookLogin />
    <RegisterWithEmail onClick={() => {
      setRegisterModalOpen(true)
    }} />
    <LoginWithEmail onClick={() => {
      setLoginModalOpen(true)
    }} />
  </FlexCol>
};
AuthWidget.propTypes = {
  // none so far
}

export default AuthWidget
