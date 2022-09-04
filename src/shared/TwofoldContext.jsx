
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import {
  C,
 } from "$shared"

const TwofoldContext = React.createContext({})
const TwofoldContextProvider = ({ children, ...props }) => {
  // logg(props, 'TwofoldContextProvider')
  const {
    layout, setLayout,
    loginModalOpen, setLoginModalOpen,
    theme, toggleTheme, // @TODO: Theme is not part of TwofoldContext! _vp_ 2022-09-04
  } = props

  const api = useApi()

  useEffect(() => {
    let closure = setTimeout(async () => {
      const result = await api.getMyAccount()
      setCurrentUser(result)
    }, 1 * 1000)
    return () => clearTimeout(closure)
  }, [currentUser.is_purchasing])

  /* B */
  // @TODO: does localStorage work like this on mobile?
  // @TODO: try and catch?
  const [ bottomDrawerOpen, _setBottomDrawerOpen ] = useState(JSON.parse(localStorage.getItem(C.bottomDrawerOpen)))
  const setBottomDrawerOpen = (m) => {
    localStorage.setItem(C.bottomDrawerOpen, JSON.stringify(m))
    _setBottomDrawerOpen(m)
  }

  /* F */
  const [ folded, setFolded ] = useState()

  /* I */
  const [ itemToUnlock, _setItemToUnlock ] = useState({})
  const setItemToUnlock = (item) => {
    if (itemToUnlock.id !== item.id && !loginModalOpen) {
      _setItemToUnlock(item)
    }
  }

  /* M */
  const [ mapPanelWidth, setMapPanelWidth ] = useState(null)
  const [ mapPanelHeight, setMapPanelHeight ] = useState(null)

  /* P */
  const [ purchaseModalIsOpen, setPurchaseModalIsOpen ] = useState(false)

  /* R */
  const [ ratedConfirmation, _setRatedConfirmation ] = useState(JSON.parse(localStorage.getItem(C.ratedConfirmation)))
  const setRatedConfirmation = (which) => {
    localStorage.setItem(C.ratedConfirmation, JSON.stringify(which))
    _setRatedConfirmation(which)
  }

  /* S */
  const [ showItem, setShowItem ] = useState(false)
  const [ showUrl, setShowUrl ] = useState(false)

  /* T */
  let tmp, defaultTwofoldPercent = 0.5
  if (tmp = localStorage.getItem(C.twofoldPercent)) {
    try {
      defaultTwofoldPercent = JSON.parse(tmp)
    } catch (err) {
      logg(err, 'cannot get twofoldPercent from localStorage')
    }
  }
  const [ twofoldPercent, setTwofoldPercent ] = useState(0.5)

  /* Z */
  const [ zoom, setZoom ] = useState(1)

  return <TwofoldContext.Provider value={{
    bottomDrawerOpen, setBottomDrawerOpen,

    folded, setFolded,

    itemToUnlock, setItemToUnlock,

    layout, setLayout,
    loginModalOpen, setLoginModalOpen,

    mapPanelHeight, setMapPanelHeight,
    mapPanelWidth, setMapPanelWidth,

    purchaseModalIsOpen, setPurchaseModalIsOpen,

    ratedConfirmation, setRatedConfirmation,

    showItem, setShowItem,
    showUrl, setShowUrl,

    twofoldPercent, setTwofoldPercent,

    zoom, setZoom,

    theme, toggleTheme,
  }} >{ children }</TwofoldContext.Provider>
}
TwofoldContextProvider.propTypes = {} // none so far

export {
  TwofoldContext,
  TwofoldContextProvider,
}
// Is is better to have, or not have, this default export? _vp_ 2022-09-04
export default TwofoldContextProvider

