/**
 * ishjs / jwt_manager
 */

import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Btn, C, logg, request } from "$shared" // @TODO: alias $shared



// @TODO: testdrive this context,
// @TODO: replace TwofoldContext in guydme with the one from ishjs.
export const JwtContext = React.createContext({})
const JwtContextProvider = ({ children, ...props }) => {
  logg(props, 'JwtContextProvider')
  const {
    api,
  } = props

  const maybeUser = JSON.parse(localStorage.getItem(C.current_user)) || C.anonUser
  const [ currentUser, setCurrentUser ] = useState(maybeUser)
  const [ loginModalOpen, setLoginModalOpen ] = useState({})

  // call to verify creds
  useEffect(() => {
    // request.get(`${config.apiOrigin}${config.routes.myAccountPath}`).then((r) => r.data).then((resp) => {
    api.getMyAccount().then((resp) => {
      localStorage.setItem(C.current_user, JSON.stringify(resp))
      setCurrentUser(resp) // must be done *after* setting C.jwt_token
    }).catch((e) => {
      logg(e, 'e322')
      // toast("Login failed") // @TODO: re-add toast
      setCurrentUser(C.anonUser)
      localStorage.removeItem(C.current_user)
      localStorage.removeItem(C.jwt_token)
    })
  }, [])

  return <JwtContext.Provider value={{
    api,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  }} >{ children }</JwtContext.Provider>
}
JwtContextProvider.props = {
  api: PropTypes.object,
}
export { JwtContextProvider }

// @TODO: move to shared?
const FlexRow = styled.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`;

const W1 = styled.div`
  border: 1px solid red;
`;

const W2 = styled.div`
  display: flex;
`;

export const SimpleJwtRow = () => {
  const {
    api,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(JwtContext)
  logg(useContext(JwtContext), 'SimpleJwtRowUsedJwtContext')

  return <W1>
    <FlexRow>
      { /* <FbLogin /> */ }
      { currentUser.email && <W2>
        <i>{currentUser.email}</i>
        <Logout />
      </W2>}
      { !currentUser.email && <LoginWithPassword /> }
    </FlexRow>
  </W1>
}



const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

export const LoginWithPassword = (props) => {
  // logg(useContext(JwtContext), 'useContext(JwtContext)')
  const {
    api,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(JwtContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const doPasswordLogin = async (email, password) => {
    // logg(`${config.apiOrigin}${config.routes.loginWithPasswordPath}`, 'doPasswordLogin')
    // request.post(`${config.apiOrigin}${config.routes.loginWithPasswordPath}`, { email, password }).then((r) => r.data
    api.postLoginWithPassword({ email, password }).then((resp) => {
      logg(resp, 'ze resp')

      localStorage.setItem(C.jwt_token, resp.jwt_token)
      localStorage.setItem(C.current_user, JSON.stringify(resp))
      setCurrentUser(resp) // must be done *after* setting C.jwt_token
      setLoginModalOpen(false)
    }).catch((e) => {
      logg(e, 'e322')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <_W>
    <input type='email' value={email} onChange={(e) => setEmail(e.target.value) } /><br />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => {
        if (e.key === 'Enter') { doPasswordLogin(email, password) }
      }}
    />
    <Btn onClick={() => doPasswordLogin(email, password)}>Login</Btn>
  </_W>
}


export const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(JwtContext)
  const doLogout = () => {
    localStorage.removeItem(C.jwt_token)
    localStorage.removeItem(C.current_user)
    setCurrentUser({})
  }
  return <Btn onClick={doLogout}>Logout</Btn>
}
