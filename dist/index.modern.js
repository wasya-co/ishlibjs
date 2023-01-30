import React, { useContext, useState, createContext, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'ionicons/icons';
import '@material-ui/core';
import _Box from '@material-ui/core/Box';
import { ChevronLeft as ChevronLeft$1, ChevronRight as ChevronRight$1, Close, Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import '@capacitor/core';
import Modal from 'react-modal';
import '@ionic/react';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '@material-ui/core/ListItemIcon';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var C = {
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

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children", "onClose"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
var Actions = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"])));
var BackIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n  cursor: pointer;\n"])));
var Btn = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"])));
var ChevronLeft = styled(ChevronLeft$1)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var ChevronRight = styled(ChevronRight$1)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var Card = styled(_Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ", ";\n\n  display: flex;\n  flex-direction: column;\n"])), function (p) {
  return p.cursor ? p.cursor : 'auto';
});
var CloseBtn = function CloseBtn(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Close, _extends({
    style: _extends({
      cursor: 'pointer'
    }, props.style)
  }, props));
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

var _FlexCol = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"])));

var FlexCol = function FlexCol(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(_FlexCol, _extends({
    className: "FlexCol"
  }, props), children);
};
var FlexRow = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"])));

var _Circle = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"])));

var logg = function logg(a, b, c) {
  if (b === void 0) {
    b = "";
  }

  if (c === void 0) {
    c = null;
  }

  c = "string" === typeof c ? c : b.replace(/\W/g, "");

  if (c.length > 0 && typeof window !== "undefined") {
    window[c] = a;
  }

  console.log("+++ " + b + ":", a);
};
var MenuIcon = styled(Menu)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});

var _Header = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"])));

var ModalHeader = function ModalHeader(_ref3) {
  var children = _ref3.children,
      onClose = _ref3.onClose,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement(_Header, null, children), /*#__PURE__*/React.createElement(CloseBtn, {
    onClick: onClose
  }));
};
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};
var WBordered = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
});
var WBorderedItem = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});
var Wrapper = styled.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n"])));
var ZoomContext = React.createContext({});

var styles = {"LoginModal":"_2YolN","LoginModalOverlay":"_3hqvY","Notice":"_2ifwF"};

var LoginModal = function LoginModal(props) {
  var onError = props.onError,
      onSuccess = props.onSuccess;

  var _useContext = useContext(AuthContext),
      loginModalOpen = _useContext.loginModalOpen,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen,
      useApi = _useContext.useApi;

  var _useState = useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var api = useApi();

  var doPasswordLogin = function doPasswordLogin(email, password) {
    try {
      api.postLogin({
        email: email,
        password: password
      }).then(function (r) {
        setLoginModalOpen(false);
        onSuccess(r);
      }).catch(function (err) {
        onError(err);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  Modal.setAppElement('body');
  return /*#__PURE__*/React.createElement(Modal, {
    className: "LoginModal " + styles.LoginModal,
    isOpen: !!loginModalOpen,
    overlayClassName: styles.LoginModalOverlay,
    portalClassName: styles.LoginModalPortal
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: function onClose() {
      return setLoginModalOpen(false);
    }
  }, "Login"), 'string' === typeof loginModalOpen && /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement("div", {
    className: styles.Notice
  }, loginModalOpen)), /*#__PURE__*/React.createElement(FlexCol, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    name: "password",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
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
    onClick: function onClick() {
      return doPasswordLogin(email, password);
    }
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
    onClick: function onClick() {
      setLoginModalOpen(false);
      setRegisterModalOpen(true);
    }
  }, "Register Instead")));
};

LoginModal.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

var RegisterModal = function RegisterModal(props) {
  var _useContext = useContext(AuthContext),
      setLoginModalOpen = _useContext.setLoginModalOpen,
      registerModalOpen = _useContext.registerModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen,
      useApi = _useContext.useApi;

  var api = useApi();

  var _useState = useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = useState(''),
      password2 = _useState3[0],
      setPassword2 = _useState3[1];

  var doRegister = function doRegister(email, password, password2) {
    try {
      if (password !== password2) {
        toast('Passwords do not match');
        return Promise.resolve();
      }

      var out = api.doRegister({
        email: email,
        password: password
      });
      out.then(function (r) {
        setRegisterModalOpen(false);
        setLoginModalOpen(r.message);
      }).catch(function (e) {
        toast("Registration failed");
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React.createElement(Modal, {
    className: "LoginModal " + styles.LoginModal,
    isOpen: registerModalOpen,
    overlayClassName: styles.LoginModalOverlay,
    portalClassName: styles.LoginModalPortal
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: function onClose() {
      return setRegisterModalOpen(false);
    }
  }, "Register"), /*#__PURE__*/React.createElement(FlexCol, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password2"
  }, "Confirm Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    name: "password2",
    value: password2,
    onChange: function onChange(e) {
      return setPassword2(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    className: "Submit",
    onClick: function onClick() {
      return doRegister(email, password, password2);
    }
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
    onClick: function onClick() {
      return setLoginModalOpen(true) || setRegisterModalOpen(false);
    }
  }, "Login Instead"))));
};

RegisterModal.propTypes = {};

var _excluded$1 = ["children"];
var AuthContext = createContext({});

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  logg(props, 'AuthContextProvider');

  var _props$currentUser = props.currentUser,
      _currentUser = _props$currentUser === void 0 ? C.anonUser : _props$currentUser,
      _setCurrentUser = props.setCurrentUser,
      _props$loginModalOpen = props.loginModalOpen,
      _loginModalOpen = _props$loginModalOpen === void 0 ? false : _props$loginModalOpen,
      _setLoginModalOpen = props.setLoginModalOpen,
      _props$registerModalO = props.registerModalOpen,
      _registerModalOpen = _props$registerModalO === void 0 ? false : _props$registerModalO,
      _setRegisterModalOpen = props.setRegisterModalOpen;

  var _useState = useState(_currentUser),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  if (_setCurrentUser) {
    currentUser = _currentUser;
    setCurrentUser = _setCurrentUser;
  }

  var _useState2 = useState(_loginModalOpen),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  if (_setLoginModalOpen) {
    loginModalOpen = _loginModalOpen;
    setLoginModalOpen = _setLoginModalOpen;
  }

  var _useState3 = useState(_registerModalOpen),
      registerModalOpen = _useState3[0],
      setRegisterModalOpen = _useState3[1];

  if (_setRegisterModalOpen) {
    registerModalOpen = _registerModalOpen;
    setRegisterModalOpen = _setRegisterModalOpen;
  }

  var moreProps = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    loginModalOpen: loginModalOpen,
    setLoginModalOpen: setLoginModalOpen,
    registerModalOpen: registerModalOpen,
    setRegisterModalOpen: setRegisterModalOpen
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: _extends({}, props, moreProps)
  }, children);
};

AuthContextProvider.propTypes = {
  useApi: PropTypes.func.isRequired
};

var config = {
  apiOrigin: 'http://localhost:3001'
};

var TestApp = function TestApp() {
  var useApi = function useApi() {
    return {
      doRegister: function doRegister(_ref) {
        var email = _ref.email,
            password = _ref.password;
        return request.post(config.apiOrigin + "/api/users", {
          email: email,
          password: password
        }).then(function (r) {
          return r.data;
        }).then(function (r) {
          logg(r, 'done registered');
          return r;
        });
      }
    };
  };

  var _useState = useState(false),
      loginModalOpen = _useState[0],
      setLoginModalOpen = _useState[1];

  var _useState2 = useState(true),
      registerModalOpen = _useState2[0],
      setRegisterModalOpen = _useState2[1];

  return /*#__PURE__*/React.createElement(AuthContextProvider, {
    loginModalOpen: loginModalOpen,
    setLoginModalOpen: setLoginModalOpen,
    registerModalOpen: registerModalOpen,
    setRegisterModalOpen: setRegisterModalOpen,
    useApi: useApi
  }, /*#__PURE__*/React.createElement(LoginModal, null), /*#__PURE__*/React.createElement(ToastContainer, {
    position: "bottom-left"
  }));
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var _excluded$2 = ["children"];
var JwtContext = React.createContext({});

var JwtContextProvider = function JwtContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  logg(props, 'JwtContextProvider 222');
  var api = props.api;

  var _useState = useState({}),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = useState({}),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  useEffect(function () {
    logg('setting currentUser...');
    api.getMyAccount().then(function (resp) {
      logg(resp, 'got this resp');
      setCurrentUser(resp);
    }).catch(function (e) {
      logg(e, 'e322');
      toast("Login failed: " + e);
      setCurrentUser({});
    });
  }, []);
  return /*#__PURE__*/React.createElement(JwtContext.Provider, {
    value: {
      api: api,
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      loginModalOpen: loginModalOpen,
      setLoginModalOpen: setLoginModalOpen
    }
  }, children);
};

JwtContextProvider.props = {
  api: PropTypes.object
};
var FlexRow$1 = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    margin: auto .4em;\n  }\n"])));
var W1 = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  border: 1px solid red;\n"])));
var W2 = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n"])));
var SimpleJwtRow = function SimpleJwtRow() {
  var _useContext = useContext(JwtContext),
      currentUser = _useContext.currentUser;

  return /*#__PURE__*/React.createElement(W1, null, /*#__PURE__*/React.createElement(FlexRow$1, null, currentUser.email && /*#__PURE__*/React.createElement(W2, null, /*#__PURE__*/React.createElement("i", null, currentUser.email), /*#__PURE__*/React.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React.createElement(LoginWithPassword, null)));
};

var _W = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var Logout = function Logout() {
  var _useContext2 = useContext(JwtContext),
      setCurrentUser = _useContext2.setCurrentUser;

  var doLogout = function doLogout() {
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

var _templateObject$2;
var W0 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n"])));

var Scratchpad = function Scratchpad(props) {
  var _useContext = useContext(AuthContext),
      useApi = _useContext.useApi;

  var api = useApi();

  var _useState = useState(localStorage.getItem(C.names.scratchpad) || ''),
      txt = _useState[0],
      setTxt = _useState[1];

  var doSave = function doSave() {
    localStorage.setItem(C.names.scratchpad, txt);
    api.postProfile({
      scratchpad: txt
    }).then(function (data) {}).catch(function (err) {
      logg('Cannot update profile:', err);
    });
  };

  return /*#__PURE__*/React.createElement(W0, null, /*#__PURE__*/React.createElement("textarea", {
    name: "scratchpad",
    rows: "20",
    cols: "40",
    onChange: function onChange(e) {
      return setTxt(e.target.value);
    },
    value: txt
  }), /*#__PURE__*/React.createElement(Actions, null, /*#__PURE__*/React.createElement(Btn, {
    onClick: doSave
  }, "Save")));
};

Scratchpad.propTypes = {};

var _excluded$3 = ["children"];

var _templateObject$3;
var W0$1 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: space-between;\n"])));

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var listItems = props.listItems;

  var _React$useState = React.useState(false),
      drawerOpen = _React$useState[0],
      setDrawerOpen = _React$useState[1];

  var _useState = useState(false);

  var history = useHistory();
  return /*#__PURE__*/React.createElement(Fragment, null, props.variant === C.variants.floating ? /*#__PURE__*/React.createElement(Fab, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: '.5em',
      zIndex: 1
    },
    "aria-label": "main menu"
  }, /*#__PURE__*/React.createElement(MenuIcon, null)) : /*#__PURE__*/React.createElement(MenuIcon, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    }
  }), /*#__PURE__*/React.createElement(Drawer, {
    anchor: "left",
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    }
  }, /*#__PURE__*/React.createElement(W0$1, null, /*#__PURE__*/React.createElement(List, null, listItems.map(function (_ref2) {
    var label = _ref2.label,
        key = _ref2.key,
        path = _ref2.path;
    return /*#__PURE__*/React.createElement(ListItem, {
      button: true,
      key: key,
      onClick: function onClick() {
        setDrawerOpen(false);
        history.push(path());
      }
    }, label);
  })), children)));
};

SideMenu.propTypes = {
  listItems: PropTypes.array.isRequired,
  variant: PropTypes.string
};

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render( /*#__PURE__*/React.createElement(TestApp, null), document.getElementById('root'));
}

export { Actions, AuthContext, AuthContextProvider, CloseBtn, FlexCol, FlexRow, LoginModal, ModalHeader, RegisterModal, Scratchpad, SideMenu, JwtContext$1 as jwtManager, logg };
//# sourceMappingURL=index.modern.js.map
