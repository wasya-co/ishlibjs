function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
require('ionicons/icons');
var react = require('@ionic/react');
require('@material-ui/core');
var _Box = _interopDefault(require('@material-ui/core/Box'));
var icons$1 = require('@material-ui/icons');
require('react-router-dom');
var styled$1 = require('styled-components');
var styled$1__default = _interopDefault(styled$1);
var config = _interopDefault(require('config'));
var $shared = require('$shared');
require('history');
require('$components/users');
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

var _excluded = ["children", "variant"],
    _excluded2 = ["children"];

var _templateObject, _templateObject2, _templateObject3;

var Gt = function Gt() {
  return /*#__PURE__*/React__default.createElement("span", null, "\xA0>\xA0\xA0");
};

var Inner = styled$1__default.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  // border: 2px solid red;\n  // max-height: 100vh;\n\n  clear: left;\n"])));

var Lt = function Lt() {
  return /*#__PURE__*/React__default.createElement("span", null, "\xA0<\xA0\xA0");
};

var Label = styled$1__default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-bottom: ", ";\n"])), function (p) {
  return p.theme.borderWidth;
});
var WTransparent = styled$1__default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  background: ", ";\n\n  margin: 0 0.5 1em .5em;\n  padding: 0 .5em .5em .5em;\n\n"])), function (p) {
  return p.theme.colors.background;
});

var W = function W(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  switch (variant) {
    case $shared.C.variants.bordered:
      return /*#__PURE__*/React__default.createElement($shared.WBordered, props, children);

    default:
      return /*#__PURE__*/React__default.createElement(WTransparent, props, children);
  }
};

var Collapsible = function Collapsible(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      config = props.config,
      variant = props.variant;
  var ctx = React.useContext($shared.CollapsibleContext);

  if (!ctx) {
    return null;
  }

  var collapsibles = ctx.collapsibles,
      setCollapsibles = ctx.setCollapsibles;

  var doToggle = function doToggle() {
    var _extends2;

    return setCollapsibles(_extends({}, collapsibles, (_extends2 = {}, _extends2[props.slug] = !collapsibles[props.slug], _extends2)));
  };

  var collapsible = typeof config === 'undefined' ? true : typeof config.collapsible === 'undefined' ? true : config.collapsible;
  var folded = collapsible ? !!collapsibles[props.slug] : false;
  return /*#__PURE__*/React__default.createElement(W, {
    variant: variant,
    className: "Collapsible " + className
  }, props.label && collapsible && /*#__PURE__*/React__default.createElement(Label, {
    onClick: doToggle
  }, folded ? /*#__PURE__*/React__default.createElement(Lt, null) : /*#__PURE__*/React__default.createElement(Gt, null), " ", props.label), props.label && !collapsible && /*#__PURE__*/React__default.createElement(Label, null, props.label), !folded && /*#__PURE__*/React__default.createElement(Inner, null, children));
};

Collapsible.propTypes = {
  className: PropTypes.string,
  config: PropTypes.shape({
    collapsible: PropTypes.bool
  }),
  label: PropTypes.string,
  slug: PropTypes.string.isRequired,
  variant: PropTypes.string
};

var settings = {
  baseURL: config.apiOrigin
};
var request = axios.create(settings);

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

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var BackIcon = styled$1__default(react.IonIcon)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  margin-right: 5px;\n  cursor: pointer;\n"])));
var Btn = styled$1__default.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  border: 1px solid gray;\n  border-radius: 5px;\n\n  padding: .3em 1em;\n  cursor: pointer;\n"])));
var ChevronLeft = styled$1__default(icons$1.ChevronLeft)(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var ChevronRight = styled$1__default(icons$1.ChevronRight)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var Card = styled$1__default(_Box)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ", ";\n\n  display: flex;\n  flex-direction: column;\n"])), function (p) {
  return p.cursor ? p.cursor : 'auto';
});
var CollapsibleContext = React__default.createContext({});

var _Circle = styled$1__default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"])));

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
var MenuIcon = styled$1__default(icons$1.Menu)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  color: ", "\n"])), function (p) {
  return p.theme.colors.text;
});
var TwofoldContext = React__default.createContext({});
var WBordered = styled$1__default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
});
var WBorderedItem = styled$1__default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  border-radius: ", ";\n  background: ", ";\n  color: ", ";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])), function (p) {
  return p.theme.thinBorder;
}, function (p) {
  return p.theme.thinBorderRadius;
}, function (p) {
  return p.theme.colors.cardBackground;
}, function (p) {
  return p.theme.colors.text;
});
var Wrapper = styled$1__default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  height: 100vh;\n"])));
var ZoomContext = React__default.createContext({});

var _templateObject$2;

var _excluded$1 = ["children"];
var JwtContext = React__default.createContext({});

var JwtContextProvider = function JwtContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var _useState = useState({}),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = useState({}),
      loginModalOpen = _useState2[0],
      setLoginModalOpen = _useState2[1];

  var config = props.config;
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
var SimpleJwtRow = function SimpleJwtRow() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h1", null, "SimpleJwtRow2"));
};

var _W = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em;\n  }\n"])));

var LoginWithPassword = function LoginWithPassword(props) {
  var _useContext = useContext(JwtContext),
      config = _useContext.config,
      setCurrentUser = _useContext.setCurrentUser,
      setLoginModalOpen = _useContext.setLoginModalOpen;

  var _useState3 = useState(''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = useState(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var doPasswordLogin = function doPasswordLogin(email, password) {
    try {
      request.post("" + config.apiOrigin + config.routes.loginPath, {
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
  }, "Password Login"));
};
var Logout = function Logout() {
  var _useContext2 = useContext(JwtContext),
      setCurrentUser = _useContext2.setCurrentUser;

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
