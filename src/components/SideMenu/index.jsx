import { IonApp, IonButtons, IonMenuButton } from '@ionic/react'
import Drawer from '@material-ui/core/Drawer'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import {
  C,
  logg,
  MenuIcon,
} from "$shared"

const W0 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;


const SideMenu = ({ children, ...props }) => {
  const { listItems } = props
  // logg(props, 'SideMenu')

  const [ drawerOpen, setDrawerOpen ] = React.useState(false)
  const [ loading, setLoading ] = useState(false)
  const history = useHistory()

  return <F>

    { /* @TODO: probably remove from here, too many variations of the button, it gotta be separate */ }
    { props.variant === C.variants.floating ?
      <Fab onClick={() => setDrawerOpen(true)} style={{ position: 'absolute', top: 0, left: 0, margin: '.5em', zIndex: 1 }} aria-label='main menu'><MenuIcon /></Fab>
      : <MenuIcon onClick={() => setDrawerOpen(true)} /> }

    <Drawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
      <W0>
        <List>

          { listItems.map( ({ label, key, path }) => <ListItem button key={key}
            onClick={() => {
              setDrawerOpen(false)
              history.push(path())
            } } >{ label }
          </ListItem> )}

        </List>

        { children }
      </W0>
    </Drawer>

  </F>
}

SideMenu.propTypes = {
  listItems: PropTypes.array.isRequired, // @TODO: specify: key, label, path
  variant: PropTypes.string,
}
export default SideMenu
