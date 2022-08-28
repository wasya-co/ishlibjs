function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('ionicons/icons');
require('@material-ui/core');
var _Box = _interopDefault(require('@material-ui/core/Box'));
var icons$1 = require('@material-ui/icons');
var PropTypes = _interopDefault(require('prop-types'));
var reactRouterDom = require('react-router-dom');
var styled = _interopDefault(require('styled-components'));
var axios = _interopDefault(require('axios'));
require('@capacitor/core');
var Modal = _interopDefault(require('react-modal'));
var reactToastify = require('react-toastify');
require('@ionic/react');
var Drawer = _interopDefault(require('@material-ui/core/Drawer'));
var Fab = _interopDefault(require('@material-ui/core/Fab'));
require('@material-ui/core/IconButton');
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
require('@material-ui/core/ListItemIcon');

function _extends() {
  _extends = Object.assign || function (target) {
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

const C$1 = {
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

axios.create({});

var _excluded = ["children"],
    _excluded2 = ["children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var Actions = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"])));
var BackIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n  cursor: pointer;\n"])));
var Btn = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"])));
var ChevronLeft = styled(icons$1.ChevronLeft)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var ChevronRight = styled(icons$1.ChevronRight)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var Card = styled(_Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ", ";\n\n  display: flex;\n  flex-direction: column;\n"])), function (p) {
  return p.cursor ? p.cursor : 'auto';
});
var CloseBtn = function CloseBtn(_ref) {
  var props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React__default.createElement(icons$1.Close, props);
};
CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequred
};

var _FlexCol = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"])));

var FlexCol = function FlexCol(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React__default.createElement(_FlexCol, _extends({
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

  if (c.length > 0) {
    window[c] = a;
  }

  console.log("+++ " + b + ":", a);
};
var MenuIcon = styled(icons$1.Menu)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var TwofoldContext = React__default.createContext({});
var WBordered = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
});
var WBorderedItem = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});
var Wrapper = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n"])));
var ZoomContext = React__default.createContext({});

var RegisterWithEmailBtn = function RegisterWithEmailBtn(props) {
  return /*#__PURE__*/React__default.createElement(Btn, props, "Register with Email");
};

var LoginWithEmailBtn = function LoginWithEmailBtn(props) {
  return /*#__PURE__*/React__default.createElement(Btn, props, "Login with Email");
};

var AuthWidget = function AuthWidget(props) {
  var _useContext = React.useContext(AuthContext),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      setRegisterModalOpen = _useContext.setRegisterModalOpen;

  var doLogout = function doLogout() {
    setCurrentUser(JSON.stringify(C$1.anonUser));
  };

  if (currentUser !== null && currentUser !== void 0 && currentUser.email) {
    return /*#__PURE__*/React__default.createElement(FlexRow, null, "[", currentUser.email, " ", /*#__PURE__*/React__default.createElement(Btn, {
      onClick: doLogout
    }, "Logout"), " ]");
  }

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement(RegisterWithEmailBtn, {
    onClick: function onClick() {
      setRegisterModalOpen(true);
    }
  }), /*#__PURE__*/React__default.createElement(LoginWithEmailBtn, {
    onClick: function onClick() {
      setLoginModalOpen(true);
    }
  }), "Hello!"), /*#__PURE__*/React__default.createElement(RegisterModal, null), /*#__PURE__*/React__default.createElement(LoginModal, null));
};

AuthWidget.propTypes = {};

var styles = {"LoginModal":"_2YolN","LoginModalOverlay":"_3hqvY"};

var LoginModal = function LoginModal(props) {
  var _useContext = React.useContext(AuthContext),
      setCurrentUser = _useContext.setCurrentUser,
      loginModalOpen = _useContext.loginModalOpen,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      useApi = _useContext.useApi;

  logg(React.useContext(AuthContext), 'LoginModalUsedAuthContext');

  var _useState = React.useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = React.useState(''),
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
        reactToastify.toast('Login Successful.');
      }).catch(function (err) {
        logg(err, 'e323 - cannot postLogin()');
        setCurrentUser(C$1.anonUser);
        reactToastify.toast("Login failed");
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(Modal, {
    className: "LoginModal " + styles.LoginModal,
    isOpen: loginModalOpen,
    overlayClassName: styles.LoginModalOverlay,
    portalClassName: styles.LoginModalPortal
  }, /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React__default.createElement(CloseBtn, {
    onClick: function onClick() {
      return setLoginModalOpen(false);
    }
  })), /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React__default.createElement("input", {
    name: "email",
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React__default.createElement("input", {
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
  }), /*#__PURE__*/React__default.createElement(FlexRow, {
    style: {
      justifyContent: 'space-between',
      marginTop: '0.4em'
    }
  }, /*#__PURE__*/React__default.createElement("span", null, "Forgot?"), /*#__PURE__*/React__default.createElement(Btn, {
    onClick: function onClick() {
      return doPasswordLogin(email, password);
    }
  }, "Password Login"))));
};

const RegisterModal = props => {
  const {
    currentUser,
    setCurrentUser,
    registerModalOpen,
    setRegisterModalOpen,
    useApi
  } = React.useContext(AuthContext);
  const api = useApi();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const doRegister = function (email, password, password2) {
    try {
      if (password !== password2) {
        return Promise.resolve(toast('Passwords do not match'));
      }

      api.doRegister({
        email,
        password
      }).then(r => {
        logg(r, 'registered');
        localStorage.setItem(C.jwt_token, r.jwt_token);
        localStorage.setItem(C.current_user, JSON.stringify(r));
        setCurrentUser(r);
        setRegisterModalOpen(false);
      }).catch(e => {
        logg(e, 'e322');
        toast("Registration failed");
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(Modal, {
    style: {
      zIndex: 3
    },
    isOpen: registerModalOpen
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: () => setRegisterModalOpen(false)
  }, "[x]"), /*#__PURE__*/React__default.createElement(FlexCol, null, /*#__PURE__*/React__default.createElement("label", {
    for: "email"
  }, "Email"), /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    name: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React__default.createElement("label", {
    for: "password"
  }, "Password"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    name: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), /*#__PURE__*/React__default.createElement("label", {
    for: "password2"
  }, "Confirm Password"), /*#__PURE__*/React__default.createElement("input", {
    type: "password",
    name: "password2",
    value: password2,
    onChange: e => setPassword2(e.target.value)
  }), /*#__PURE__*/React__default.createElement(FlexRow, null, /*#__PURE__*/React__default.createElement(Btn, {
    onClick: () => doRegister(email, password, password2)
  }, "Register"), /*#__PURE__*/React__default.createElement(Btn, {
    onClick: () => setRegisterModalOpen(false)
  }, "Cancel"))));
};

var _excluded$1 = ["children"];
var AuthContext = React.createContext({});

var AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var currentUser = props.currentUser,
      setCurrentUser = props.setCurrentUser,
      loginModalOpen = props.loginModalOpen,
      setLoginModalOpen = props.setLoginModalOpen;
  var defaultUser = localStorage.getItem(C$1.current_user);
  defaultUser = defaultUser ? JSON.parse(defaultUser) : C$1.anonUser;

  var _useState = React.useState(defaultUser),
      localCurrentUser = _useState[0],
      _setCurrentUser = _useState[1];

  var setLocalCurrentUser = function setLocalCurrentUser(user) {
    localStorage.setItem(C$1.jwt_token, user.jwt_token);
    localStorage.setItem(C$1.current_user, JSON.stringify(user));

    _setCurrentUser(user);
  };

  if (!setCurrentUser) {
    currentUser = localCurrentUser;
    setCurrentUser = setLocalCurrentUser;
  }

  if (typeof loginModalOpen === 'undefined') {
    var _useState2 = React.useState(false),
        _loginModalOpen = _useState2[0],
        _setLoginModalOpen = _useState2[1];

    loginModalOpen = _loginModalOpen;
    setLoginModalOpen = _setLoginModalOpen;
  }

  var _useState3 = React.useState(false),
      registerModalOpen = _useState3[0],
      setRegisterModalOpen = _useState3[1];

  var moreProps = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    loginModalOpen: loginModalOpen,
    setLoginModalOpen: setLoginModalOpen,
    registerModalOpen: registerModalOpen,
    setRegisterModalOpen: setRegisterModalOpen
  };
  return /*#__PURE__*/React__default.createElement(AuthContext.Provider, {
    value: _extends({}, props, moreProps)
  }, children);
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var _excluded$2 = ["children"];
var JwtContext = React__default.createContext({});

var JwtContextProvider = function JwtContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  logg(props, 'JwtContextProvider');
  var api = props.api;
  var maybeUser = JSON.parse(localStorage.getItem(C$1.current_user)) || C$1.anonUser;

  var _useState = React.useState(maybeUser),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = React.useState({}),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  React.useEffect(function () {
    api.getMyAccount().then(function (resp) {
      localStorage.setItem(C$1.current_user, JSON.stringify(resp));
      setCurrentUser(resp);
    }).catch(function (e) {
      logg(e, 'e322');
      setCurrentUser(C$1.anonUser);
      localStorage.removeItem(C$1.current_user);
      localStorage.removeItem(C$1.jwt_token);
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(JwtContext.Provider, {
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
  var _useContext = React.useContext(JwtContext),
      currentUser = _useContext.currentUser;

  logg(React.useContext(JwtContext), 'SimpleJwtRowUsedJwtContext');
  return /*#__PURE__*/React__default.createElement(W1, null, /*#__PURE__*/React__default.createElement(FlexRow$1, null, currentUser.email && /*#__PURE__*/React__default.createElement(W2, null, /*#__PURE__*/React__default.createElement("i", null, currentUser.email), /*#__PURE__*/React__default.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React__default.createElement(LoginWithPassword, null)));
};

var _W = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var LoginWithPassword = function LoginWithPassword(props) {
  var _useContext2 = React.useContext(JwtContext),
      api = _useContext2.api,
      setCurrentUser = _useContext2.setCurrentUser,
      setLoginModalOpen = _useContext2.setLoginModalOpen;

  var _useState3 = React.useState(''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = React.useState(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var doPasswordLogin = function doPasswordLogin(email, password) {
    try {
      api.postLoginWithPassword({
        email: email,
        password: password
      }).then(function (resp) {
        logg(resp, 'ze resp');
        localStorage.setItem(C$1.jwt_token, resp.jwt_token);
        localStorage.setItem(C$1.current_user, JSON.stringify(resp));
        setCurrentUser(resp);
        setLoginModalOpen(false);
      }).catch(function (e) {
        logg(e, 'e322');
        toast("Login failed");
        setCurrentUser(C$1.anonUser);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(_W, null, /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("input", {
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
  }), /*#__PURE__*/React__default.createElement(Btn, {
    onClick: function onClick() {
      return doPasswordLogin(email, password);
    }
  }, "Login"));
};
var Logout = function Logout() {
  var _useContext3 = React.useContext(JwtContext),
      setCurrentUser = _useContext3.setCurrentUser;

  var doLogout = function doLogout() {
    localStorage.removeItem(C$1.jwt_token);
    localStorage.removeItem(C$1.current_user);
    setCurrentUser({});
  };

  return /*#__PURE__*/React__default.createElement(Btn, {
    onClick: doLogout
  }, "Logout");
};

var JwtContext$1 = {
  __proto__: null,
  JwtContext: JwtContext,
  JwtContextProvider: JwtContextProvider,
  SimpleJwtRow: SimpleJwtRow,
  LoginWithPassword: LoginWithPassword,
  Logout: Logout
};

var _templateObject$2;

var _W$1 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var PasswordLogin = function PasswordLogin(props) {
  var _useContext = React.useContext(SimpleContext),
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen,
      useApi = _useContext.useApi;

  var _useState = React.useState(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = React.useState(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var api = useApi();

  var doPasswordLogin = function doPasswordLogin(email, password) {
    try {
      api.postLogin({
        email: email,
        password: password
      }).then(function (resp) {
        setLoginModalOpen(false);
      }).catch(function (e) {
        logg(e, 'e322');
        reactToastify.toast("Login failed");
        setCurrentUser(C$1.anonUser);
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React__default.createElement(_W$1, null, /*#__PURE__*/React__default.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("input", {
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
  }), /*#__PURE__*/React__default.createElement(Btn, {
    onClick: function onClick() {
      return doPasswordLogin(email, password);
    }
  }, "Password Login"));
};

PasswordLogin.propTypes = {};

var _templateObject$3;
var W0 = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n"])));

var Scratchpad = function Scratchpad(props) {
  var _useContext = React.useContext(AuthContext),
      useApi = _useContext.useApi;

  var api = useApi();

  var _useState = React.useState(localStorage.getItem(C$1.names.scratchpad) || ''),
      txt = _useState[0],
      setTxt = _useState[1];

  var doSave = function doSave() {
    localStorage.setItem(C$1.names.scratchpad, txt);
    api.postProfile({
      scratchpad: txt
    }).then(function (data) {}).catch(function (err) {
      logg('Cannot update profile:', err);
    });
  };

  return /*#__PURE__*/React__default.createElement(W0, null, /*#__PURE__*/React__default.createElement("textarea", {
    name: "scratchpad",
    rows: "20",
    cols: "40",
    onChange: function onChange(e) {
      return setTxt(e.target.value);
    },
    value: txt
  }), /*#__PURE__*/React__default.createElement(Actions, null, /*#__PURE__*/React__default.createElement(Btn, {
    onClick: doSave
  }, "Save")));
};

Scratchpad.propTypes = {};

var _excluded$3 = ["children"];

var _templateObject$4;
var W0$1 = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: space-between;\n"])));

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var listItems = props.listItems;

  var _React$useState = React__default.useState(false),
      drawerOpen = _React$useState[0],
      setDrawerOpen = _React$useState[1];

  var _useState = React.useState(false);

  var history = reactRouterDom.useHistory();
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, props.variant === C$1.variants.floating ? /*#__PURE__*/React__default.createElement(Fab, {
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
  }, /*#__PURE__*/React__default.createElement(MenuIcon, null)) : /*#__PURE__*/React__default.createElement(MenuIcon, {
    onClick: function onClick() {
      return setDrawerOpen(true);
    }
  }), /*#__PURE__*/React__default.createElement(Drawer, {
    anchor: "left",
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    }
  }, /*#__PURE__*/React__default.createElement(W0$1, null, /*#__PURE__*/React__default.createElement(List, null, listItems.map(function (_ref2) {
    var label = _ref2.label,
        key = _ref2.key,
        path = _ref2.path;
    return /*#__PURE__*/React__default.createElement(ListItem, {
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

exports.Actions = Actions;
exports.AuthContext = AuthContext;
exports.AuthContextProvider = AuthContextProvider;
exports.AuthWidget = AuthWidget;
exports.CloseBtn = CloseBtn;
exports.FlexCol = FlexCol;
exports.FlexRow = FlexRow;
exports.LoginModal = LoginModal;
exports.PasswordLogin = PasswordLogin;
exports.RegisterModal = RegisterModal;
exports.Scratchpad = Scratchpad;
exports.SideMenu = SideMenu;
exports.jwtManager = JwtContext$1;
exports.logg = logg;
//# sourceMappingURL=index.js.map
