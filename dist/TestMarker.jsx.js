function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=require("react"),r=e(n);require("react-toastify"),require("ionicons/icons"),require("@material-ui/core");var t=e(require("@material-ui/core/Box")),i=require("@material-ui/icons");require("prop-types"),require("react-router-dom");var o,a,d,l,c,u,s,m,h,p,x,f,g,b,v=e(require("styled-components")),w=e(require("axios"));function y(e,n){return n||(n=e.slice(0)),e.raw=n,e}require("@capacitor/core"),require("react-modal"),w.create({}),v.div(o||(o=y(["\n\n  // @TODO: this should use variables, for Modal inner size.\n  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.\n  position: fixed; // for GalleriesShow\n  top: 60px;\n  right: 60px;\n\n  display: flex;\n  flex-direction: row-reverse;\n"]))),v.div(a||(a=y(["\n  margin-right: 5px;\n  cursor: pointer;\n"]))),v.div(d||(d=y(["\n  border: 1px solid gray;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  padding: .3em 1em;\n"]))),v(i.ChevronLeft)(l||(l=y(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),v(i.ChevronRight)(c||(c=y(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),v(t)(u||(u=y(["\n  margin-bottom: 1em;\n  padding: 1em;\n  background: white;\n  cursor: ",";\n\n  display: flex;\n  flex-direction: column;\n"])),function(e){return e.cursor?e.cursor:"auto"}),v.div(s||(s=y(["\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin: auto .4em; // @TODO: standardize this size!\n  }\n"]))),v.div(m||(m=y(["\n  display: flex;\n\n  > * {\n    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!\n  }\n"]))),v.div(h||(h=y(["\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n"]))),v(i.Menu)(p||(p=y(["\n  color: ","\n"])),function(e){return e.theme.colors.text}),v.div(x||(x=y(["\n  flex-grow: 1;\n  text-align: center;\n  font-size: 1.2rem;\n"]))),v.div(f||(f=y(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  padding: .5em;\n\n  margin-bottom: 1em;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground}),v.div(g||(g=y(["\n  border: ",";\n  border-radius: ",";\n  background: ",";\n  color: ",";\n\n  margin: 0 .5em .5em 0;\n  padding: .5em;\n\n  text-align: center;\n\n  width: 18%;\n  max-width: 140px;\n  min-width: 120px;\n"])),function(e){return e.theme.thinBorder},function(e){return e.theme.thinBorderRadius},function(e){return e.theme.colors.cardBackground},function(e){return e.theme.colors.text}),v.div(b||(b=y(["\n  height: 100vh;\n"]))),r.createContext({}),n.createContext({});const q=e=>{logg(e,"Marker 2");const{label:n="<none>"}=e;return React.createElement(React.Fragment,null,React.createElement("div",{className:"Card",style:{border:"1px solid red",borderRadius:"10px",padding:"10px",maxWidth:"400px"}},"I am a marker! Label: `",n,"`."))};module.exports=()=>r.createElement(Fragment,null,r.createElement("h1",null,"Hello, world!"),r.createElement(q,{label:"my-new-label"}));
//# sourceMappingURL=TestMarker.jsx.js.map
