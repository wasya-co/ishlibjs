import React from 'react'
import ReactDOM from 'react-dom'

import {
  logg,
} from "./shared"
import TestApp from './TestApp'

// @TODO: rename
import * as jwtManager from './components/users/JwtContext' // this syntax is correct

/* A */
export { Actions, } from './shared'
export { AuthContext, AuthContextProvider, } from './components/users'

/* C */
export { CloseBtn } from './shared'

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
