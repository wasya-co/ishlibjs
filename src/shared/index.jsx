/*
 *  $shared / index
 */
import { arrowBack, closeOutline, } from 'ionicons/icons'
import { CircularProgress as _CircularProgress } from '@material-ui/core'
import _Box from '@material-ui/core/Box'
import {
  ChevronLeft as _ChevronLeft,
  ChevronRight as _ChevronRight,
  Close as _Close,
  Menu as _MenuIcon,
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import {
  Route as _Route, useHistory,
} from 'react-router-dom'
import styled from 'styled-components'

import C from './C'

/* A */

const Actions = styled.div`

  // @TODO: this should use variables, for Modal inner size.
  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.
  position: fixed; // for GalleriesShow
  top: 60px;
  right: 60px;

  display: flex;
  flex-direction: row-reverse;
`;
export { Actions }

/* B */

/**
 * Back Button
 */
// const BackIcon = styled(IonIcon)
// @TODO: reintroduce IonIcon maybe?
const BackIcon = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;
export const BackBtn = () => {
  const history = useHistory()
  return <BackIcon onClick={history.goBack} icon={arrowBack}></BackIcon>
}

/**
 * Just your regular shadowed box. Pointer cursor. TDD
 */
export const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`;


/* C */
export { default as C } from './C'
export const ChevronLeft = styled(_ChevronLeft)`
  color: ${(p) => p.theme.colors.text}
`;
export const ChevronRight = styled(_ChevronRight)`
  color: ${(p) => p.theme.colors.text}
`;

/**
 * Card
 */
export const Card = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${p => p.cursor ? p.cursor : 'auto'};

  display: flex;
  flex-direction: column;
`;

/**
 * CloseBtn
**/
export const CloseBtn = ({ children, ...props }) => {
  return <_Close style={{ cursor: 'pointer', ...props.style }} {...props} />
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}

/* D */

/* F */

/**
 * FlexCol
**/
const _FlexCol = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`;
export const FlexCol = ({ children, ...props }) => <_FlexCol className="FlexCol" {...props} >{children}</_FlexCol>

/**
 * FlexRow
 *
 * @TODO: Remove. Where is this used?! This is silly.
**/
export const FlexRow = styled.div`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`;


/* I */

/**
 * Like the rails inflector, has methods:
 * tableize()
 */
export const inflector = {
  tableize: (m) => {
    switch(m) {
      case 'Gallery':
        return 'galleries'
      default:
      return `${m.toLowerCase()}s`
    }
  },
}

/* L */


// From: https://codepen.io/charlyarg/pen/GByKja
const _Circle = styled.div`
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;
export const Loading = (p) => <_Circle><_CircularProgress /></_Circle>

/**
 * Usage: logg(someObject, 'label')
 *
 * This development-grade logger can be used instead of console.log() with some advantages:
 * * It encourages consistent labeling of logs. By labeling each log line, you can have dozens of log lines
 * written per action, and still know which log line comes from where.
 * The recommended label is the component name, or function name.
 * * If the label is present, the logged object is placed in the window, allowing you to inspect it in the console. The
 * label becomes the name of the object (stripped to [0-9a-zA-Z\-_] chars). If you're logging a function, you can execute it.
 * If you log more than one thing, they can interact, allowing you to validate control flow.
 * * the logger can be turned off by making this function simply return.
 */
const logg = (a, b="", c=null) => {
  c = "string" === typeof c ? c : b.replace(/\W/g, "");
  if (c.length > 0 && typeof window !== "undefined") {
    window[c] = a;
  }

  console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
};
// optimized for Android (e.g. it inspects and doesn't use window)
const logg2 = (a, b="", c=null) => {
  console.log(`+++ ${b}:`, a.inspect); // eslint-disable-line no-console
};
export { logg, logg2 };

/* M */
export const MenuIcon = styled(_MenuIcon)`
  color: ${(p) => p.theme.colors.text}
`;


const _Header = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`;
export const ModalHeader = ({ children, onClose, ...props }) => {
  return <FlexRow >
    <_Header>{children}</_Header>
    <CloseBtn onClick={onClose} />
  </FlexRow>
}
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
}

/* P */

/**
 * pretty print date
 */
export const pp_date = (d) => (d || "" ).substring(0, 10)

/* R */

export { default as request } from "./request"

/* S */
export { default as S } from "./S"

/* T */

export { TwofoldContext, TwofoldContextProvider } from './TwofoldContext'

/* U */
export { default as useWindowSize } from './useWindowSize'

/* W */

/**
 * Wrapper Bordered. This expects a list? _vp_ 2021-11-02
 * Used in collapsibles and MarkersList
 */
export const WBordered = styled.div`
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};
  background: ${p => p.theme.colors.cardBackground};
  padding: .5em;

  margin-bottom: 1em;
`;

/**
 * Wrapper Bordered Item. Is padded, margined.
 */
export const WBorderedItem = styled.div`
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};
  background: ${p => p.theme.colors.cardBackground};
  color: ${p => p.theme.colors.text};

  margin: 0 .5em .5em 0;
  padding: .5em;

  text-align: center;

  width: 18%;
  max-width: 140px;
  min-width: 120px;
`;


export const WidgetContainer = ({ children, ...props }) => {
  return <WBordered {...props} >{ children }</WBordered>
}

export const Wrapper = styled.div`
  height: 100vh;
`;

/* Z */

export const ZoomContext = React.createContext({})



