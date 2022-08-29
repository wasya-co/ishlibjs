import React from 'react'
import ReactDOM from 'react-dom'

import {
  logg,
} from "./shared"
import App from './TestApp'

// @TODO: rename
import * as jwtManager from './components/users/JwtContext' // this syntax is correct

/* A */
export { Actions, } from './shared'
export { AuthContext, AuthContextProvider, } from './components/users'
export { default as AuthWidget } from "./components/users/AuthWidget"

/* C */
export { CloseBtn } from './shared'

/* F */
export { FlexCol, FlexRow } from "./shared"

/* J */
export { jwtManager }

/* L */
export { logg }
export { default as LoginModal } from './components/users/LoginModal'
// export { default as loginModalStyles } from './components/users/LoginModal.scss'

/* P */
export { default as PasswordLogin } from "./components/users/PasswordLogin"

/* R */
export { RegisterModal } from './components/users'

/* S */
export { default as Scratchpad } from "./components/users/Scratchpad"
export { default as SideMenu } from './components/SideMenu'

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
