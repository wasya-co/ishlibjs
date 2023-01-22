import React, { useState, useEffect, useRef, useContext, createContext, Fragment as Fragment$1 } from 'react';
import ReactDOM from 'react-dom';
import 'ionicons/icons';
import '@material-ui/core';
import _Box from '@material-ui/core/Box';
import { ChevronLeft as ChevronLeft$1, ChevronRight as ChevronRight$1, Close, Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled, { ThemeProvider as ThemeProvider$1 } from 'styled-components';
import axios from 'axios';
import { IonImg } from '@ionic/react';
import { toast } from 'react-toastify';
import '@capacitor/core';
import Modal from 'react-modal';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '@material-ui/core/ListItemIcon';

const C = {
  anonUser: {},
  bottomDrawerOpen: 'bottom-drawer-open',
  collapsible: {
    description: "descr-sec",
    extra1: "extra1-sec",
    extra2: "extra2-sec",
    extra3: "extra3-sec",
    map: "map-sec",
    markers: "markers-sec"
  },
  collapsibles: 'collapsibles',
  current_user: 'current_user',
  horizontal: 'horizontal',
  item_types: {
    gallery: 'Gallery',
    report: 'Report',
    video: 'Video'
  },
  jwt_token: 'jwt_token',
  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
  locations: {
    earth: 'earth'
  },
  map_panel_types: {
    Equirectangular: "Equirectangular",
    MapPanel: "MapPanel",
    MapPanelNoZoom: "MapPanelNoZoom",
    ThreePanelV1: "ThreePanelV1",
    ThreePanelV4: "ThreePanelV4"
  },
  names: {
    scratchpad: 'Scratchpad'
  },
  rated: {
    nc17: 'nc-17'
  },
  ratedConfirmation: 'rated-confirmation',
  theme: 'theme',
  themes: {
    dark: 'dark',
    light: 'light'
  },
  twofoldPercent: 'twofold-percent',
  variants: {
    bordered: 'bordered',
    floating: 'floating',
    inline: 'inline',
    transparent: 'transparent'
  },
  vertical: 'vertical'
};

var request = axios.create({});

const S = {
  borderWidth: '10px',
  bottomDrawerClosedHeight: '24px',
  bottomDrawerOpenHeight: '124px',
  breadcrumbsHeight: '30px',
  smallWidth: '10px',
  mediumWidth: '20px',
  thinBorderWidth: '2px'
};
const lightTheme = { ...S,
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    border: 'black',
    blue: '#6aa3e9',
    cardBackground: 'white',
    cyan: "#49bcc6",
    darkGrey: '#605d5d',
    gold: '#ffe100',
    lightGrey: '#988b8b',
    red: 'red'
  }
};
const darkTheme = { ...S,
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    border: 'white',
    blue: '#73b0fa',
    cardBackground: '#1a1a1a',
    cyan: "#49bcc6",
    darkGrey: '#b3afaf',
    gold: '#ffe100',
    lightGrey: '#4a4343',
    red: '#eb83a8'
  }
};
var S$1 = {
  lightTheme,
  darkTheme
};

const ThemeContext = React.createContext({});

const ThemeProvider = ({
  children,
  ...props
}) => {
  const defaultTheme = 'undefined' === typeof window ? C.themes.light : window.localStorage.getItem(C.theme) || C.themes.light;
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    const positive = theme === C.themes.light ? C.themes.light : C.themes.dark;
    const negative = theme === C.themes.light ? C.themes.dark : C.themes.light;
    document.body.classList.remove(negative);
    document.body.classList.add(positive);
  }, []);

  const toggleTheme = e => {
    e.preventDefault();

    if (theme === C.themes.light) {
      window.localStorage.setItem(C.theme, C.themes.dark);
      setTheme(C.themes.dark);
      document.body.classList.remove(C.themes.light);
      document.body.classList.add(C.themes.dark);
    } else {
      window.localStorage.setItem(C.theme, C.themes.light);
      setTheme(C.themes.light);
      document.body.classList.add(C.themes.light);
      document.body.classList.remove(C.themes.dark);
    }
  };

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: {
      theme,
      setTheme,
      toggleTheme
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: theme == C.themes.light ? S$1.lightTheme : S$1.darkTheme
  }, children));
};

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10,
    _t11,
    _t12,
    _t13,
    _t14;
const Actions = styled.div(_t || (_t = _`

  // @TODO: this should use variables, for Modal inner size.
  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.
  position: fixed; // for GalleriesShow
  top: 60px;
  right: 60px;

  display: flex;
  flex-direction: row-reverse;
`));
const BackIcon = styled.div(_t2 || (_t2 = _`
  margin-right: 5px;
  cursor: pointer;
`));
const Btn = styled.div(_t3 || (_t3 = _`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`));
const ChevronLeft = styled(ChevronLeft$1)(_t4 || (_t4 = _`
  color: ${0}
`), p => p.theme.colors.text);
const ChevronRight = styled(ChevronRight$1)(_t5 || (_t5 = _`
  color: ${0}
`), p => p.theme.colors.text);
const Card = styled(_Box)(_t6 || (_t6 = _`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${0};

  display: flex;
  flex-direction: column;
`), p => p.cursor ? p.cursor : 'auto');
const CloseBtn = ({
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(Close, Object.assign({
    style: {
      cursor: 'pointer',
      ...props.style
    }
  }, props));
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

const _FlexCol = styled.div(_t7 || (_t7 = _`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`));

const FlexCol = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(_FlexCol, Object.assign({
  className: "FlexCol"
}, props), children);
const FlexRow = styled.div(_t8 || (_t8 = _`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`));

const _Circle = styled.div(_t9 || (_t9 = _`
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
`));

const logg = (a, b = "", c = null) => {
  c = "string" === typeof c ? c : b.replace(/\W/g, "");

  if (c.length > 0 && typeof window !== "undefined") {
    window[c] = a;
  }

  console.log(`+++ ${b}:`, a);
};
const MenuIcon = styled(Menu)(_t10 || (_t10 = _`
  color: ${0}
`), p => p.theme.colors.text);

const _Header = styled.div(_t11 || (_t11 = _`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`));

const ModalHeader = ({
  children,
  onClose,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement(_Header, null, children), /*#__PURE__*/React.createElement(CloseBtn, {
    onClick: onClose
  }));
};
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};
const pp_date = d => (d || "").substring(0, 10);
const WBordered = styled.div(_t12 || (_t12 = _`
  border: ${0};
  border-radius: ${0};
  background: ${0};
  padding: .5em;

  margin-bottom: 1em;
`), p => p.theme.thinBorder, p => p.theme.thinBorderRadius, p => p.theme.colors.cardBackground);
const WBorderedItem = styled.div(_t13 || (_t13 = _`
  border: ${0};
  border-radius: ${0};
  background: ${0};
  color: ${0};

  margin: 0 .5em .5em 0;
  padding: .5em;

  text-align: center;

  width: 18%;
  max-width: 140px;
  min-width: 120px;
`), p => p.theme.thinBorder, p => p.theme.thinBorderRadius, p => p.theme.colors.cardBackground, p => p.theme.colors.text);
const Wrapper = styled.div(_t14 || (_t14 = _`
  height: 100vh;
`));
const ZoomContext = React.createContext({});

var styles = {"Metaline":"_Metaline-module__Metaline__19rQA","user":"_Metaline-module__user__2n8g7","city":"_Metaline-module__city__1rVav","tags":"_Metaline-module__tags__38yvm"};

let _$1 = t => t,
    _t$1;
const W0 = styled.div(_t$1 || (_t$1 = _$1`
  margin: .5em 0;
  color: ${0};
`), p => p.theme.colors.text);

const Metaline = props => {
  const {
    created_at,
    city,
    tags = [],
    username
  } = props;
  return /*#__PURE__*/React.createElement(W0, {
    className: styles.Metaline
  }, created_at && /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, "On ", pp_date(created_at), "\xA0"), username && /*#__PURE__*/React.createElement(Fragment, null, "by ", /*#__PURE__*/React.createElement("span", {
    className: "user",
    style: {
      textDecoration: 'underline'
    }
  }, username), "\xA0"));
};

var styles$1 = {"GalleriesShow":"_Galleries-module__GalleriesShow__u8uRZ","heading":"_Galleries-module__heading__1VkHq","title":"_Galleries-module__title__13CIA","narrow":"_Galleries-module__narrow__38Pco","thumbs":"_Galleries-module__thumbs__3dj2X","card":"_Galleries-module__card__36lL4","full_img_section":"_Galleries-module__full_img_section__327kj","item":"_Galleries-module__item__1TYwn"};

let _$2 = t => t,
    _t$2;
const W0$1 = styled.div(_t$2 || (_t$2 = _$2`
  // border: 1px solid blue;
  height: auto;
`));

const GalleriesShow = props => {
  logg(props, 'GalleriesShow');
  const {
    match,
    useApi
  } = props;
  const [gallery, setGallery] = useState({});
  const mountedRef = useRef('init');
  const api = useApi();
  logg(api, 'api');
  useEffect(() => {
    api.getGallery(match.params.slug).then(_gallery => {
      if (!mountedRef.current) {
        return;
      }

      setGallery(_gallery);
    });
    return () => {
      mountedRef.current = null;
    };
  }, [gallery.id]);
  return /*#__PURE__*/React.createElement(W0$1, {
    className: styles$1.GalleriesShow
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$1.narrow
  }, /*#__PURE__*/React.createElement("h1", {
    className: styles$1.heading
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$1.title
  }, gallery.name)), /*#__PURE__*/React.createElement(Metaline, gallery), /*#__PURE__*/React.createElement("div", {
    className: styles$1.thumbs
  }, gallery.photos && gallery.photos.map((ph, i) => /*#__PURE__*/React.createElement("div", {
    className: styles$1.card,
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IonImg, {
    src: ph.thumb_url
  }))))), /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: gallery.description
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.full_img_section
  }, gallery.photos && gallery.photos.map((ph, i) => /*#__PURE__*/React.createElement("div", {
    className: styles$1.item,
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: ph.large_url
  })))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "maxWidth"
  }, "ishlibjs v0.2.7 (branch 0.6.0) :: GalleriesShow v0.0.0")));
};

GalleriesShow.propsTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string
    })
  }),
  useApi: PropTypes.function
};

const TestApp_LeadsDataTable = () => {
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Search, null), /*#__PURE__*/React.createElement("a", null, "Leads"), /*#__PURE__*/React.createElement("a", null, "Leadsets")), /*#__PURE__*/React.createElement(DataTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Schedule, null)));
};

let _$3 = t => t,
    _t$3,
    _t2$1,
    _t3$1,
    _t4$1;
const JwtContext = React.createContext({});

const LoginWithPassword = () => {};

const JwtContextProvider = ({
  children,
  ...props
}) => {
  logg(props, 'JwtContextProvider 222');
  const {
    api
  } = props;
  const [currentUser, setCurrentUser] = useState({});
  const [loginModalOpen, setLoginModalOpen] = useState({});
  useEffect(() => {
    logg('setting currentUser...');
    api.getMyAccount().then(resp => {
      logg(resp, 'got this resp');
      setCurrentUser(resp);
    }).catch(e => {
      logg(e, 'e322');
      toast(`Login failed: ${e}`);
      setCurrentUser({});
    });
  }, []);
  return /*#__PURE__*/React.createElement(JwtContext.Provider, {
    value: {
      api,
      currentUser,
      setCurrentUser,
      loginModalOpen,
      setLoginModalOpen
    }
  }, children);
};

JwtContextProvider.props = {
  api: PropTypes.object
};
const FlexRow$1 = styled.div(_t$3 || (_t$3 = _$3`
  display: flex;

  > * {
    margin: auto .4em;
  }
`));
const W1 = styled.div(_t2$1 || (_t2$1 = _$3`
  border: 1px solid red;
`));
const W2 = styled.div(_t3$1 || (_t3$1 = _$3`
  display: flex;
`));
const SimpleJwtRow = () => {
  const {
    api,
    currentUser,
    setCurrentUser,
    loginModalOpen,
    setLoginModalOpen
  } = useContext(JwtContext);
  return /*#__PURE__*/React.createElement(W1, null, /*#__PURE__*/React.createElement(FlexRow$1, null, currentUser.email && /*#__PURE__*/React.createElement(W2, null, /*#__PURE__*/React.createElement("i", null, currentUser.email), /*#__PURE__*/React.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React.createElement(LoginWithPassword, null)));
};

const _W = styled.div(_t4$1 || (_t4$1 = _$3`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`));

const Logout = () => {
  const {
    currentUser,
    setCurrentUser
  } = useContext(JwtContext);

  const doLogout = () => {
    localStorage.removeItem('jwt_token');
    setCurrentUser({});
  };

  return /*#__PURE__*/React.createElement(Btn, {
    onClick: doLogout
  }, "Logout");
};

var JwtContext$1 = {
  __proto__: null,
  JwtContext: JwtContext,
  JwtContextProvider: JwtContextProvider,
  SimpleJwtRow: SimpleJwtRow,
  Logout: Logout
};

var styles$2 = {"LoginModal":"_LoginModal-module__LoginModal__2YolN","LoginModalOverlay":"_LoginModal-module__LoginModalOverlay__3hqvY","Notice":"_LoginModal-module__Notice__2ifwF"};

const LoginModal = props => {
  const {
    onError,
    onSuccess
  } = props;
  const {
    currentUser,
    setCurrentUser,
    loginModalOpen,
    setLoginModalOpen,
    registerModalOpen,
    setRegisterModalOpen,
    useApi
  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const api = useApi();

  const doPasswordLogin = async (email, password) => {
    api.postLogin({
      email,
      password
    }).then(r => {
      setLoginModalOpen(false);
      onSuccess(r);
    }).catch(err => {
      onError(err);
    });
  };

  Modal.setAppElement('body');
  return /*#__PURE__*/React.createElement(Modal, {
    className: `LoginModal ${styles$2.LoginModal}`,
    isOpen: !!loginModalOpen,
    overlayClassName: styles$2.LoginModalOverlay,
    portalClassName: styles$2.LoginModalPortal
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: () => setLoginModalOpen(false)
  }, "Login"), 'string' === typeof loginModalOpen && /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement("div", {
    className: styles$2.Notice
  }, loginModalOpen)), /*#__PURE__*/React.createElement(FlexCol, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    name: "password",
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        doPasswordLogin(email, password);
      }
    }
  }), /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => doPasswordLogin(email, password)
  }, "Login"))), /*#__PURE__*/React.createElement("hr", {
    style: {
      margin: '2rem 0',
      borderWidth: '1px'
    }
  }), /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      setLoginModalOpen(false);
      setRegisterModalOpen(true);
    }
  }, "Register Instead")));
};

LoginModal.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

const RegisterModal = props => {
  const {
    currentUser,
    setCurrentUser,
    loginModalOpen,
    setLoginModalOpen,
    registerModalOpen,
    setRegisterModalOpen,
    useApi
  } = useContext(AuthContext);
  const api = useApi();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const doRegister = async (email, password, password2) => {
    if (password !== password2) {
      toast('Passwords do not match');
      return;
    }

    const out = api.doRegister({
      email,
      password
    });
    out.then(r => {
      setRegisterModalOpen(false);
      setLoginModalOpen(r.message);
    }).catch(e => {
      toast("Registration failed");
    });
  };

  return /*#__PURE__*/React.createElement(Modal, {
    className: `LoginModal ${styles$2.LoginModal}`,
    isOpen: registerModalOpen,
    overlayClassName: styles$2.LoginModalOverlay,
    portalClassName: styles$2.LoginModalPortal
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: () => setRegisterModalOpen(false)
  }, "Register"), /*#__PURE__*/React.createElement(FlexCol, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password2"
  }, "Confirm Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password2",
    value: password2,
    onChange: e => setPassword2(e.target.value)
  }), /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    className: "Submit",
    onClick: () => doRegister(email, password, password2)
  }, "Register")), /*#__PURE__*/React.createElement("hr", {
    style: {
      margin: '2rem 0',
      borderWidth: '1px'
    }
  }), /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setLoginModalOpen(true) || setRegisterModalOpen(false)
  }, "Login Instead"))));
};

RegisterModal.propTypes = {};

const AuthContext = createContext({});

const AuthContextProvider = ({
  children,
  ...props
}) => {
  let {
    currentUser: _currentUser = C.anonUser,
    setCurrentUser: _setCurrentUser,
    loginModalOpen: _loginModalOpen = false,
    setLoginModalOpen: _setLoginModalOpen,
    registerModalOpen: _registerModalOpen = false,
    setRegisterModalOpen: _setRegisterModalOpen
  } = props;
  let [currentUser, setCurrentUser] = useState(_currentUser);

  if (_setCurrentUser) {
    currentUser = _currentUser;
    setCurrentUser = _setCurrentUser;
  }

  let [loginModalOpen, setLoginModalOpen] = useState(_loginModalOpen);

  if (_setLoginModalOpen) {
    loginModalOpen = _loginModalOpen;
    setLoginModalOpen = _setLoginModalOpen;
  }

  let [registerModalOpen, setRegisterModalOpen] = useState(_registerModalOpen);

  if (_setRegisterModalOpen) {
    registerModalOpen = _registerModalOpen;
    setRegisterModalOpen = _setRegisterModalOpen;
  }

  const moreProps = {
    currentUser,
    setCurrentUser,
    loginModalOpen,
    setLoginModalOpen,
    registerModalOpen,
    setRegisterModalOpen
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: { ...props,
      ...moreProps
    }
  }, children);
};

AuthContextProvider.propTypes = {
  useApi: PropTypes.func.isRequired
};

let _$4 = t => t,
    _t$4;
const W0$2 = styled.div(_t$4 || (_t$4 = _$4`
`));

const Scratchpad = props => {
  const {
    useApi
  } = useContext(AuthContext);
  const api = useApi();
  const [txt, setTxt] = useState(localStorage.getItem(C.names.scratchpad) || '');

  const doSave = () => {
    localStorage.setItem(C.names.scratchpad, txt);
    api.postProfile({
      scratchpad: txt
    }).then(data => {}).catch(err => {
      logg('Cannot update profile:', err);
    });
  };

  return /*#__PURE__*/React.createElement(W0$2, null, /*#__PURE__*/React.createElement("textarea", {
    name: "scratchpad",
    rows: "20",
    cols: "40",
    onChange: e => setTxt(e.target.value),
    value: txt
  }), /*#__PURE__*/React.createElement(Actions, null, /*#__PURE__*/React.createElement(Btn, {
    onClick: doSave
  }, "Save")));
};

Scratchpad.propTypes = {};

let _$5 = t => t,
    _t$5;
const W0$3 = styled.div(_t$5 || (_t$5 = _$5`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`));

const SideMenu = ({
  children,
  ...props
}) => {
  const {
    listItems
  } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return /*#__PURE__*/React.createElement(Fragment$1, null, props.variant === C.variants.floating ? /*#__PURE__*/React.createElement(Fab, {
    onClick: () => setDrawerOpen(true),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: '.5em',
      zIndex: 1
    },
    "aria-label": "main menu"
  }, /*#__PURE__*/React.createElement(MenuIcon, null)) : /*#__PURE__*/React.createElement(MenuIcon, {
    onClick: () => setDrawerOpen(true)
  }), /*#__PURE__*/React.createElement(Drawer, {
    anchor: "left",
    open: drawerOpen,
    onClose: () => setDrawerOpen(false)
  }, /*#__PURE__*/React.createElement(W0$3, null, /*#__PURE__*/React.createElement(List, null, listItems.map(({
    label,
    key,
    path
  }) => /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    key: key,
    onClick: () => {
      setDrawerOpen(false);
      history.push(path());
    }
  }, label))), children)));
};

SideMenu.propTypes = {
  listItems: PropTypes.array.isRequired,
  variant: PropTypes.string
};

const config = {
  apiOrigin: 'http://localhost:3001'
};

const Gallery20230112Chitown = () => {
  const api = {
    getGallery: slug => {
      return request.get(`${config.apiOrigin}/api/galleries/view/${slug}`).then(r => r.data.gallery);
    }
  };
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(GalleriesShow, {
    match: {
      params: {
        slug: 'chicago-scenery-i'
      }
    },
    useApi: () => api
  })));
};

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render( /*#__PURE__*/React.createElement(TestApp_LeadsDataTable, null), document.getElementById('root'));
}

export { Actions, AuthContext, AuthContextProvider, CloseBtn, FlexCol, FlexRow, LoginModal, ModalHeader, RegisterModal, Scratchpad, SideMenu, Gallery20230112Chitown as TestApp_Gallery20230112Chitown, JwtContext$1 as jwtManager, logg };
//# sourceMappingURL=index.modern.js.map
