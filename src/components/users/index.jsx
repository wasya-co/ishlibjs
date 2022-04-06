
import { Plugins } from '@capacitor/core'
import React, { createContext, useContext } from 'react'

import {
  Btn,
} from '$shared'

/* A */
const AuthContext = createContext({})
const AuthContextProvider = ({children, ...props }) => {
  return <AuthContext.Provider value={props}>
    { children }
  </AuthContext.Provider>
}

export {
  AuthContext, AuthContextProvider,
}

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


