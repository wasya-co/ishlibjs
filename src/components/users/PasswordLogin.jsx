/*
 * ishjs / components / users / PasswordLogin
 */

import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useState, } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

import { Btn, C, logg, request, TwofoldContext, } from "$shared"

const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

/**
 * Exchange your email and password for a jwt token.
 * api.doLogin() must be present.
 * Requires being wrapped in TwofoldContext, which should have:
 * * currentUser, setCurrentUser,
 * * useApi
 *
 * Sets `C.current_user` and `C.jwt_token` in local storage.
 *
 * Allows logout. (@TODO: not implemented)
 */
const PasswordLogin = (props) => {
  // logg(props, 'PasswordLogin')

  const {
    currentUser, setCurrentUser,
    // loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'PasswordLoginUsedTwofoldContext')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const api = useApi()

  // api.doLogin = `${config.apiOrigin}${api.loginPath}`
  const doPasswordLogin = async (email, password) => {
    request.post(api.doLogin(), { email, password }).then((r) => r.data).then((resp) => {
      localStorage.setItem(C.jwt_token, resp.jwt_token)
      localStorage.setItem(C.current_user, JSON.stringify(resp))
      setCurrentUser(resp) // must be done *after* setting C.jwt_token
      // setLoginModalOpen(false)
    }).catch((e) => {
      logg(e, 'e322')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <_W>
    <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } /><br />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
    />
    <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
  </_W>
}
PasswordLogin.propTypes = {
  // none so far
}

export default PasswordLogin
