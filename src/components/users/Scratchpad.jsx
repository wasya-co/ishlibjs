
import React, { Fragment as F, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const W0 = styled.div`
`;

/**
 * A single text area that saves locally and in the cloud.
 */
const Scratchpad = (props) => {
  // logg(props, 'Scratchpad')

  const [ txt, setTxt ] = useState(localStorage.getItem('txt')||'')

  const doSave = () => {
    localStorage.setItem('txt', txt)
    api.updateProfile({ scratchpad: txt }).then((data) => {
      toast('Updated profile.')
    }).catch((err) => {
      logg('Cannot update profile:', err)
      toast('e54 - Cannot update profile.')
    })
  }

  return <W0>
    <textarea name='txt1' rows='20' cols='40'
      onChange={(e) => setTxt(e.target.value) }
      value={txt}
    / >
    <button onClick={doSave}>Save</button>
  </W0>
}
Scratchpad.propTypes = {
  // none so far
}

export default Scratchpad
