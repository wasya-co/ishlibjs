/**
 * ishjs / jwt_manager
 */

import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { Btn, C, logg, request } from "../shared" // @TODO: alias $shared



// @TODO: testdrive this context,
// @TODO: replace TwofoldContext in guydme with the one from ishjs.
export const JwtContext = React.createContext({})
const JwtContextProvider = ({ children, ...props }) => {
  logg(props, 'JwtContextProvider')
  const {
    config,
  } = props

  const maybeUser = localStorage.getItem(C.current_user)||{}
  const [ currentUser, setCurrentUser ] = useState(maybeUser) // @TODO: see if localStorage has me already logged in!
  const [ loginModalOpen, setLoginModalOpen ] = useState({})

  return <JwtContext.Provider value={{
    config,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  }} >{ children }</JwtContext.Provider>
}
JwtContextProvider.props = {
  config: PropTypes.object,
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

export const SimpleJwtRow = () => {
  const {
    config,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(JwtContext)

  return <W1>
    <FlexRow>
      { /* <FbLogin /> */ }
      { currentUser.email && <i>{currentUser.email}</i> }
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
  logg(useContext(JwtContext), 'useContext(JwtContext)')
  const {
    config,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(JwtContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const doPasswordLogin = async (email, password) => {
    logg(`${config.apiOrigin}${config.routes.loginWithPasswordPath}`, 'doPasswordLogin')
    request.post(`${config.apiOrigin}${config.routes.loginWithPasswordPath}`, { email, password }).then((r) => r.data).then((resp) => {
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
