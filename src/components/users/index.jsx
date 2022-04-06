
import { Plugins } from '@capacitor/core'
import React, { createContext, useContext } from 'react'

/* A */
const AuthContext = createContext()
const AuthContextProvider = <AuthContext.Provider values={{}}></AuthContext.Provider>

export {
  AuthContext, AuthContextProvider,
}

/* F */
const { FacebookLogin: _FacebookLogin } = Plugins

const FACEBOOK_PERMISSIONS = ['email']

// export const FbLogin = (props) => {
//   const api = useApi()
//   const { currentUser, setCurrentUser } = useContext(TwofoldContext)

//   const doFbLogin = async () => {
//     const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
//     if (result.accessToken) {
//       request.post(`${config.apiOrigin}${api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
//         localStorage.setItem(C.jwt_token, resp.data.jwt_token)
//         localStorage.setItem(C.current_user, JSON.stringify(resp.data) )
//         setCurrentUser(resp.data)
//       }).catch((err) => {
//         logg(err, `Could not post request to ${config.apiOrigin}${api.longTermTokenPath}`)
//       })
//     } else {
//       // Canceled by user.
//       logg('canceled')
//     }
//   }
//   return <Btn onClick={doFbLogin}>FB Login</Btn>
// }

/**
 * FacebookLogin
**/
export const FacebookLogin = (props) => {
  const api = useApi()
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)

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
export { default as LoginWithEmail } from "./PasswordLogin"

/* R */
export { default as RegisterWithEmail } from "./RegisterWithEmail"

