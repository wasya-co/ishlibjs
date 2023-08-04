import React, { useContext, Fragment, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import 'ionicons/icons';
import '@material-ui/core';
import _Box from '@material-ui/core/Box';
import { ChevronLeft as ChevronLeft$1, ChevronRight as ChevronRight$1, Menu, Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { toast as toast$1, ToastContainer } from 'react-toastify';
import '@capacitor/core';
import Modal from 'react-modal';

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
  foldedCenter: 'folded-center',
  foldedLeft: 'folded-left',
  foldedRight: 'folded-right',
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

var S = {
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',
  thinBorderWidth: '2px',
  thinBorderRadius: '5px'
};

var lightTheme = _extends({}, S, {
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
    border: 'black',
    cardBackground: 'white'
  }
});

var darkTheme = _extends({}, S, {
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    blue: '#73b0fa',
    darkGrey: '#b3afaf',
    lightGrey: '#4a4343',
    red: '#eb83a8',
    border: 'white',
    cardBackground: '#1a1a1a'
  }
});

var TwofoldContext = React.createContext({});

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

var _excluded$1 = ["fill", "w", "h"];

var RegisterWithEmailBtn = function RegisterWithEmailBtn(props) {
  return /*#__PURE__*/React.createElement(Btn, props, "Register with Email");
};

var LoginWithEmailBtn = function LoginWithEmailBtn(props) {
  return /*#__PURE__*/React.createElement(Btn, props, "Login with Email");
};

var IconLogout = function IconLogout(_ref) {
  var w = _ref.w,
      h = _ref.h,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  w = w ? w : '12px';
  h = h ? h : '12px';
  return /*#__PURE__*/React.createElement("span", props, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: w,
    height: h,
    viewBox: "0 0 96.943 96.943",
    style: {
      enableBackground: 'new 0 0 96.943 96.943'
    }
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"
  }), " ", /*#__PURE__*/React.createElement("path", {
    d: "M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"
  }), " "), " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null, " "), " ", /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null)));
};

var AuthWidget = function AuthWidget(props) {
  var _useContext = useContext(AuthContext),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen;

  var doLogout = function doLogout() {
    setCurrentUser(C.anonUser);
    localStorage.removeItem('jwt_token');
    window.location.reload(false);
  };

  var onError = function onError(inn) {
    logg(inn, 'cannot login!');
    toast('cannot login!');
  };

  var onSuccess = function onSuccess(inn) {
    logg('Logged in successfully.');
    setCurrentUser(inn);
  };

  if (currentUser !== null && currentUser !== void 0 && currentUser.email) {
    return /*#__PURE__*/React.createElement(FlexRow, null, "[\xA0", currentUser.email, "\xA0", /*#__PURE__*/React.createElement(IconLogout, {
      onClick: doLogout
    }, "Logout"), "\xA0]");
  }

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(FlexCol, null, /*#__PURE__*/React.createElement(RegisterWithEmailBtn, {
    onClick: function onClick() {
      setRegisterModalOpen(true);
    }
  }), /*#__PURE__*/React.createElement(LoginWithEmailBtn, {
    onClick: function onClick() {
      setLoginModalOpen(true);
    }
  })), /*#__PURE__*/React.createElement(RegisterModal, null), /*#__PURE__*/React.createElement(LoginModal, {
    onError: onError,
    onSuccess: onSuccess
  }));
};

AuthWidget.propTypes = {};

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
        logg(err, 'e323 - cannot postLogin()');
        toast$1("Could not login.");
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
      return setLoginModalOpen(false) || setRegisterModalOpen(true);
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
        toast$1('Passwords do not match');
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
        toast$1("Registration failed");
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

var _excluded$2 = ["children"];
var AuthContext = createContext({});

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

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
  }, /*#__PURE__*/React.createElement(AuthWidget, null), /*#__PURE__*/React.createElement(ToastContainer, {
    position: "bottom-left"
  }));
};

if (process.env.REACT_APP_SERVE) {
  ReactDOM.render( /*#__PURE__*/React.createElement(TestApp, null), document.getElementById('root'));
}
//# sourceMappingURL=index.modern.js.map
