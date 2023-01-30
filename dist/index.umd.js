(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.ishlibjs = factory(global.react));
}(this, (function (React) {
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  var Marker = function Marker(props) {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "Card",
      style: {
        border: '1px solid red',
        borderRadius: '10x'
      }
    }, "I am a marker!"));
  };

  return Marker;

})));
//# sourceMappingURL=index.umd.js.map
