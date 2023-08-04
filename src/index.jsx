import React from 'react'
import ReactDOM from 'react-dom'

import {
  logg,
} from "./shared"
import TestApp from './AppTest'

// @TODO: rename
import * as jwtManager from './components/users/JwtContext' // this syntax is correct

/* A */
export { Actions, } from './shared'
export { AuthContext, AuthContextProvider, } from './components/users'
export { default as AuthWidget } from "./components/users/AuthWidget"

/* C */
export { CloseBtn } from './shared'

/* D */
export { doLogout } from './components/users'

/* F */
export { FlexCol, FlexRow } from "./shared"

/* J */
export { jwtManager }

/* L */
export { logg }
export { LoginModal } from './components/users'

/* M */
export { ModalHeader } from './shared'

/* P */

/* R */
export { RegisterModal } from './components/users'

/* S */
export { default as Scratchpad } from "./components/users/Scratchpad"
export { default as SideMenu } from './components/SideMenu'

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render(<TestApp />, document.getElementById('root'))
}
