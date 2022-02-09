function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));
require('ionicons/icons');
var react = require('@ionic/react');
require('@material-ui/core');
var _Box = _interopDefault(require('@material-ui/core/Box'));
var icons$1 = require('@material-ui/icons');
require('react-router-dom');
var axios = _interopDefault(require('axios'));

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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var BackIcon = styled(react.IonIcon)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n  cursor: pointer;\n"])));
var Btn = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  border: 1px solid gray;\n  border-radius: 5px;\n\n  padding: .3em 1em;\n  cursor: pointer;\n"])));
var ChevronLeft = styled(icons$1.ChevronLeft)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var ChevronRight = styled(icons$1.ChevronRight)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var Card = styled(_Box)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ", ";\n\n  display: flex;\n  flex-direction: column;\n"])), function (p) {
  return p.cursor ? p.cursor : 'auto';
});

var _Circle = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"])));

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
var MenuIcon = styled(icons$1.Menu)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var WBordered = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
});
var WBorderedItem = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});
var Wrapper = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n"])));
var ZoomContext = React__default.createContext({});

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1;

var _excluded = ["children"];
var JwtContext = React__default.createContext({});

var JwtContextProvider = function JwtContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var config = props.config;
  var maybeUser = JSON.parse(localStorage.getItem(C.current_user)) || {};

  var _useState = React.useState(maybeUser),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = React.useState({}),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  return /*#__PURE__*/React__default.createElement(JwtContext.Provider, {
    value: {
      config: config,
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      loginModalOpen: loginModalOpen,
      setLoginModalOpen: setLoginModalOpen
    }
  }, children);
};

JwtContextProvider.props = {
  config: PropTypes.object
};
var FlexRow = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    margin: auto .4em;\n  }\n"])));
var W1 = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  border: 1px solid red;\n"])));
var W2 = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n"])));
var SimpleJwtRow = function SimpleJwtRow() {
  var _useContext = React.useContext(JwtContext),
      currentUser = _useContext.currentUser;

  logg(currentUser, 'simple row');
  return /*#__PURE__*/React__default.createElement(W1, null, /*#__PURE__*/React__default.createElement(FlexRow, null, currentUser.email && /*#__PURE__*/React__default.createElement(W2, null, /*#__PURE__*/React__default.createElement("i", null, currentUser.email), /*#__PURE__*/React__default.createElement(Logout, null)), !currentUser.email && /*#__PURE__*/React__default.createElement(LoginWithPassword, null)));
};

var _W = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var LoginWithPassword = function LoginWithPassword(props) {
  logg(React.useContext(JwtContext), 'useContext(JwtContext)');

  var _useContext2 = React.useContext(JwtContext),
      config = _useContext2.config,
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
      logg("" + config.apiOrigin + config.routes.loginWithPasswordPath, 'doPasswordLogin');
      request.post("" + config.apiOrigin + config.routes.loginWithPasswordPath, {
        email: email,
        password: password
      }).then(function (r) {
        return r.data;
      }).then(function (resp) {
        localStorage.setItem(C.jwt_token, resp.jwt_token);
        localStorage.setItem(C.current_user, JSON.stringify(resp));
        setCurrentUser(resp);
        setLoginModalOpen(false);
      })["catch"](function (e) {
        logg(e, 'e322');
        toast("Login failed");
        setCurrentUser(C.anonUser);
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
    localStorage.removeItem(C.jwt_token);
    localStorage.removeItem(C.current_user);
    setCurrentUser({});
  };

  return /*#__PURE__*/React__default.createElement(Btn, {
    onClick: doLogout
  }, "Logout");
};

var index = {
  __proto__: null,
  JwtContext: JwtContext,
  JwtContextProvider: JwtContextProvider,
  SimpleJwtRow: SimpleJwtRow,
  LoginWithPassword: LoginWithPassword,
  Logout: Logout
};

exports.jwtManager = index;
//# sourceMappingURL=index.js.map
