
import React from 'react'
import ReactDOM from 'react-dom'

import {
  logg,
} from "./shared"
import App from './AppGalleriesView'

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
