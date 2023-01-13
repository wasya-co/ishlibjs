
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

import {
  Btn,
  logg,
} from "$shared"

export const JwtContext = React.createContext({})

const LoginWithPassword = () => {};

/**
 * JwtContextProvider
**/
const JwtContextProvider = ({ children, ...props }) => {
  logg(props, 'JwtContextProvider 222')
  const {
    api,
  } = props

  const [ currentUser, setCurrentUser ] = useState({})
  const [ loginModalOpen, setLoginModalOpen ] = useState({})

  // call to verify creds
  useEffect(() => {
    logg('setting currentUser...')

    // request.get(`${config.apiOrigin}${config.routes.myAccountPath}`).then((r) => r.data).then((resp) => {
    api.getMyAccount().then((resp) => {
      logg(resp, 'got this resp')

      setCurrentUser(resp) // must be done *after* setting localStorage.jwt_token
    }).catch((e) => {
      logg(e, 'e322')
      toast(`Login failed: ${e}`)
      setCurrentUser({})
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
  // logg(useContext(JwtContext), 'SimpleJwtRowUsedJwtContext')

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


export const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(JwtContext)
  const doLogout = () => {
    localStorage.removeItem('jwt_token') // this is not constantized b/c I removed $shared.C from this repo.
    setCurrentUser({})
  }
  return <Btn onClick={doLogout}>Logout</Btn>
}
