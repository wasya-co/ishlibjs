
import React from 'react'
import {
  logg,
} from "$shared"

const Marker = (props) => {
  logg(props, 'Marker')
  const {
    label = '<none>',
  } = props

  return (<React.Fragment>
    <div className='Card' style={{
      border: '1px solid red',
      borderRadius: '10px',
      padding: '10px',
      maxWidth: '400px',
    }} >
      I am a marker! Label: `{label}`.
    </div>
  </React.Fragment>)
}

export default Marker
