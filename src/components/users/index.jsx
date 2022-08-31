
import { Plugins } from '@capacitor/core'
import React, { createContext, useContext, useState } from 'react'

import {
  Btn,
  C,
  logg,
} from '$shared'

// export { default as loginModalStyles } from './LoginModal.scss'

/* A */
const AuthContext = createContext({})
const AuthContextProvider = ({children, ...props }) => {
  let {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen: _registerModalOpen, setRegisterModalOpen: _setRegisterModalOpen,
  } = props
  // logg(props, 'AuthContextProvider')

  let defaultUser = localStorage.getItem(C.current_user)
  defaultUser = defaultUser ? JSON.parse(defaultUser) : C.anonUser

  const [ localCurrentUser, _setCurrentUser ] = useState(defaultUser)
  const setLocalCurrentUser = (user) => {
    localStorage.setItem(C.jwt_token, user.jwt_token)
    localStorage.setItem(C.current_user, JSON.stringify(user))
    _setCurrentUser(user)
  }
  if (!setCurrentUser) {
    currentUser = localCurrentUser
    setCurrentUser = setLocalCurrentUser
  }

  const [ _loginModalOpen, _setLoginModalOpen ] = useState(false)
  if (typeof loginModalOpen === 'undefined') {
    loginModalOpen = _loginModalOpen
    setLoginModalOpen = _setLoginModalOpen
  }


  let [ registerModalOpen, setRegisterModalOpen ] = useState(false)
  if (_registerModalOpen) {
    registerModalOpen = _registerModalOpen
    setRegisterModalOpen = _setRegisterModalOpen
  }
  const moreProps = {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    registerModalOpen, setRegisterModalOpen,
  }

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

/* J */



/* L */
export { default as LoginModal } from "./LoginModal"

/* R */
export { default as RegisterModal } from "./RegisterModal"


