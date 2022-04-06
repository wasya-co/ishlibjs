
import { Plugins } from '@capacitor/core'
import React, { createContext, useContext, useState } from 'react'

import {
  Btn,
  C,
  logg,
} from '$shared'

/* A */
const AuthContext = createContext({})
const AuthContextProvider = ({children, ...props }) => {
  // logg(props, 'AuthContextProvider')

  let defaultUser = localStorage.getItem(C.current_user)
  logg(defaultUser, 'defaultUser')

  defaultUser = defaultUser ? JSON.parse(defaultUser) : C.anonUser


  const [ currentUser, _setCurrentUser ] = useState(defaultUser)
  const setCurrentUser = (user) => {
    localStorage.setItem(C.jwt_token, user.jwt_token)
    localStorage.setItem(C.current_user, JSON.stringify(user))
    _setCurrentUser(user)
  }

  // @TODO: make these cascading from the props
  const [ loginModalOpen, setLoginModalOpen ] = useState(false)
  const [ registerModalOpen, setRegisterModalOpen ] = useState(false)
  const moreProps = {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
  }

  logg(moreProps, 'moreProps')

  return <AuthContext.Provider value={{ ...props, ...moreProps }} >
    { children }
  </AuthContext.Provider>
}

export {
  AuthContext, AuthContextProvider,
}
export { default as AuthWidget } from './AuthWidget'


/* F */
const { FacebookLogin: _FacebookLogin } = Plugins

const FACEBOOK_PERMISSIONS = ['email']


/**
 * FacebookLogin
**/
export const FacebookLogin = (props) => {

  const {
    currentUser, setCurrentUser,
    useApi,
  } = useContext(AuthContext)

  const api = useApi()

  const doFbLogin = async () => {
    const result = await _FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result.accessToken) {
      request.post(`${config.apiOrigin}${api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        localStorage.setItem(C.jwt_token, resp.data.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp.data) )
        setCurrentUser(resp.data)
      }).catch((err) => {
        logg(err, `Could not post request to ${config.apiOrigin}${api.longTermTokenPath}`)
      })
    } else {
      // Canceled by user.
      logg('canceled')
    }
  }
  return <Btn onClick={doFbLogin}>Login or Register with Facebook</Btn>
}

/* L */
export { default as LoginModal } from "./LoginModal"

/* R */
export { default as RegisterModal } from "./RegisterModal"


