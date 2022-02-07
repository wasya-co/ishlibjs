/**
 * ishjs / jwt_manager
 */

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Btn, logg, request } from "../shared" // @TODO: alias $shared



// @TODO: testdrive this context,
// @TODO: replace TwofoldContext in guydme with the one from ishjs.
export const JwtContext = React.createContext({})
const JwtContextProvider = ({ children, ...props }) => {
  // logg(props, 'JwtContextProvider')
  const {
    config,
  } = props

  const [ currentUser, setCurrentUser ] = useState({})
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


export const SimpleJwtRow = () => {
  return <div>
    <h1>SimpleJwtRow2</h1>
  </div>
}



const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

export const LoginWithPassword = (props) => {
  const {
    config,
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(JwtContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const doPasswordLogin = async (email, password) => {
    request.post(`${config.apiOrigin}${config.routes.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
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
    <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
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
