var e = function(e) {
  logg(e, "Marker");
  var a = e.label;
  return React.createElement(React.Fragment, null, React.createElement("div", {
      className: "Card",
      style: {
          border: "1px solid red",
          borderRadius: "10px",
          padding: "10px",
          maxWidth: "400px"
      }
  }, "I am a marker! Label: `", void 0 === a ? "<none>" : a, "`."))
};
export default function(a) {
  return React.createElement(e, a)
}
//# sourceMappingURL=Marker.jsx.modern.js.map
