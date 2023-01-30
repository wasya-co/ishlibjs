!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom"),require("ionicons/icons"),require("@material-ui/core"),require("@material-ui/core/Box"),require("@material-ui/icons"),require("prop-types"),require("react-router-dom"),require("styled-components"),require("axios"),require("react-toastify"),require("@capacitor/core"),require("react-modal"),require("@ionic/react"),require("@material-ui/core/Drawer"),require("@material-ui/core/Fab"),require("@material-ui/core/IconButton"),require("@material-ui/core/List"),require("@material-ui/core/ListItem"),require("@material-ui/core/ListItemIcon")):"function"==typeof define&&define.amd?define(["exports","react","react-dom","ionicons/icons","@material-ui/core","@material-ui/core/Box","@material-ui/icons","prop-types","react-router-dom","styled-components","axios","react-toastify","@capacitor/core","react-modal","@ionic/react","@material-ui/core/Drawer","@material-ui/core/Fab","@material-ui/core/IconButton","@material-ui/core/List","@material-ui/core/ListItem","@material-ui/core/ListItemIcon"],t):t((e=e||self).ishlibjs={},e.react,e.ReactDOM,0,0,e._Box,e.icons$1,e.PropTypes,e.reactRouterDom,e.styled,e.axios,e.reactToastify,0,e.Modal,0,e.Drawer,e.Fab,e.IconButton,e.List,e.ListItem,e.ListItemIcon)}(this,function(e,t,r,a,o,n,l,i,s,c,u,d,p,m,g,h,f,y,v,w,x){var E="default"in t?t.default:t;function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,c=c&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c,u=u&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u,m=m&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m,h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h,f=f&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f,y=y&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y,v=v&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v,w=w&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w,x=x&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x;const O={anonUser:{},bottomDrawerOpen:"bottom-drawer-open",collapsible:{description:"descr-sec",extra1:"extra1-sec",extra2:"extra2-sec",extra3:"extra3-sec",map:"map-sec",markers:"markers-sec"},collapsibles:"collapsibles",current_user:"current_user",horizontal:"horizontal",item_types:{gallery:"Gallery",report:"Report",video:"Video"},jwt_token:"jwt_token",layout_onecol:"onecol",layout_mapui:"mapui",locations:{earth:"earth"},map_panel_types:{Equirectangular:"Equirectangular",MapPanel:"MapPanel",MapPanelNoZoom:"MapPanelNoZoom",ThreePanelV1:"ThreePanelV1",ThreePanelV4:"ThreePanelV4"},names:{scratchpad:"Scratchpad"},rated:{nc17:"nc-17"},ratedConfirmation:"rated-confirmation",theme:"theme",themes:{dark:"dark",light:"light"},twofoldPercent:"twofold-percent",variants:{bordered:"bordered",floating:"floating",inline:"inline",transparent:"transparent"},vertical:"vertical"};var C=u.create({});const M=c.div`

  // @TODO: this should use variables, for Modal inner size.
  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.
  position: fixed; // for GalleriesShow
  top: 60px;
  right: 60px;

  display: flex;
  flex-direction: row-reverse;
`,P=(c.div`
  margin-right: 5px;
  cursor: pointer;
`,c.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`),L=(c(l.ChevronLeft)`
  color: ${e=>e.theme.colors.text}
`,c(l.ChevronRight)`
  color: ${e=>e.theme.colors.text}
`,c(n)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${e=>e.cursor?e.cursor:"auto"};

  display: flex;
  flex-direction: column;
`,e=>{let{...t}=e;return E.createElement(l.Close,b({style:{cursor:"pointer",...t.style}},t))});L.propTypes={onClick:i.func.isRequired};const j=c.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`,S=e=>{let{children:t,...r}=e;return E.createElement(j,b({className:"FlexCol"},r),t)},k=c.div`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`,q=(c.div`
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
`,function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=null),(r="string"==typeof r?r:t.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[r]=e),console.log(`+++ ${t}:`,e)}),R=c(l.Menu)`
  color: ${e=>e.theme.colors.text}
`,I=c.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`,T=e=>{let{children:t,onClose:r,...a}=e;return E.createElement(k,null,E.createElement(I,null,t),E.createElement(L,{onClick:r}))};T.propTypes={onClose:i.func.isRequired},c.div`
  border: ${e=>e.theme.thinBorder};
  border-radius: ${e=>e.theme.thinBorderRadius};
  background: ${e=>e.theme.colors.cardBackground};
  padding: .5em;

  margin-bottom: 1em;
`,c.div`
  border: ${e=>e.theme.thinBorder};
  border-radius: ${e=>e.theme.thinBorderRadius};
  background: ${e=>e.theme.colors.cardBackground};
  color: ${e=>e.theme.colors.text};

  margin: 0 .5em .5em 0;
  padding: .5em;

  text-align: center;

  width: 18%;
  max-width: 140px;
  min-width: 120px;
`,c.div`
  height: 100vh;
`,E.createContext({});var _={LoginModal:"_2YolN",LoginModalOverlay:"_3hqvY",Notice:"_2ifwF"};const B=e=>{const{onError:r,onSuccess:a}=e,{loginModalOpen:o,setLoginModalOpen:n,setRegisterModalOpen:l,useApi:i}=t.useContext(A),[s,c]=t.useState(""),[u,d]=t.useState(""),p=i(),g=function(e,t){try{return p.postLogin({email:e,password:t}).then(e=>{n(!1),a(e)}).catch(e=>{r(e)}),Promise.resolve()}catch(e){return Promise.reject(e)}};return m.setAppElement("body"),E.createElement(m,{className:"LoginModal "+_.LoginModal,isOpen:!!o,overlayClassName:_.LoginModalOverlay,portalClassName:_.LoginModalPortal},E.createElement(T,{onClose:()=>n(!1)},"Login"),"string"==typeof o&&E.createElement(k,null,E.createElement("div",{className:_.Notice},o)),E.createElement(S,null,E.createElement("label",{htmlFor:"email"},"Email"),E.createElement("input",{name:"email",type:"email",value:s,onChange:e=>c(e.target.value)}),E.createElement("label",{htmlFor:"password"},"Password"),E.createElement("input",{name:"password",type:"password",value:u,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&g(s,u)}}),E.createElement(k,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},E.createElement(P,{onClick:()=>g(s,u)},"Login"))),E.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),E.createElement(k,{style:{justifyContent:"center"}},E.createElement("a",{onClick:()=>{n(!1),l(!0)}},"Register Instead")))};B.propTypes={onError:i.func,onSuccess:i.func};const N=e=>{const{setLoginModalOpen:r,registerModalOpen:a,setRegisterModalOpen:o,useApi:n}=t.useContext(A),l=n(),[i,s]=t.useState(""),[c,u]=t.useState(""),[p,g]=t.useState("");return E.createElement(m,{className:"LoginModal "+_.LoginModal,isOpen:a,overlayClassName:_.LoginModalOverlay,portalClassName:_.LoginModalPortal},E.createElement(T,{onClose:()=>o(!1)},"Register"),E.createElement(S,null,E.createElement("label",{htmlFor:"email"},"Email"),E.createElement("input",{type:"email",name:"email",value:i,onChange:e=>s(e.target.value)}),E.createElement("label",{htmlFor:"password"},"Password"),E.createElement("input",{type:"password",name:"password",value:c,onChange:e=>u(e.target.value)}),E.createElement("label",{htmlFor:"password2"},"Confirm Password"),E.createElement("input",{type:"password",name:"password2",value:p,onChange:e=>g(e.target.value)}),E.createElement(k,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},E.createElement(P,{className:"Submit",onClick:()=>function(e,t,a){try{return t!==a?(d.toast("Passwords do not match"),Promise.resolve()):(l.doRegister({email:e,password:t}).then(e=>{o(!1),r(e.message)}).catch(e=>{d.toast("Registration failed")}),Promise.resolve())}catch(e){return Promise.reject(e)}}(i,c,p)},"Register")),E.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),E.createElement(k,{style:{justifyContent:"center"}},E.createElement("a",{onClick:()=>r(!0)||o(!1)},"Login Instead"))))};N.propTypes={};const A=t.createContext({}),F=e=>{let{children:r,...a}=e;q(a,"AuthContextProvider");let{currentUser:o=O.anonUser,setCurrentUser:n,loginModalOpen:l=!1,setLoginModalOpen:i,registerModalOpen:s=!1,setRegisterModalOpen:c}=a,[u,d]=t.useState(o);n&&(u=o,d=n);let[p,m]=t.useState(l);i&&(p=l,m=i);let[g,h]=t.useState(s);c&&(g=s,h=c);const f={currentUser:u,setCurrentUser:d,loginModalOpen:p,setLoginModalOpen:m,registerModalOpen:g,setRegisterModalOpen:h};return E.createElement(A.Provider,{value:{...a,...f}},r)};F.propTypes={useApi:i.func.isRequired};const $=()=>{const[e,r]=t.useState(!1),[a,o]=t.useState(!0);return E.createElement(F,{loginModalOpen:e,setLoginModalOpen:r,registerModalOpen:a,setRegisterModalOpen:o,useApi:()=>({doRegister:e=>{let{email:t,password:r}=e;return C.post("http://localhost:3001/api/users",{email:t,password:r}).then(e=>e.data).then(e=>(q(e,"done registered"),e))}})},E.createElement(B,null),E.createElement(d.ToastContainer,{position:"bottom-left"}))},D=E.createContext({}),U=e=>{let{children:r,...a}=e;q(a,"JwtContextProvider 222");const{api:o}=a,[n,l]=t.useState({}),[i,s]=t.useState({});return t.useEffect(()=>{q("setting currentUser..."),o.getMyAccount().then(e=>{q(e,"got this resp"),l(e)}).catch(e=>{q(e,"e322"),d.toast("Login failed: "+e),l({})})},[]),E.createElement(D.Provider,{value:{api:o,currentUser:n,setCurrentUser:l,loginModalOpen:i,setLoginModalOpen:s}},r)};U.props={api:i.object};const z=c.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`,V=c.div`
  border: 1px solid red;
`,J=c.div`
  display: flex;
`,W=(c.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`,()=>{const{setCurrentUser:e}=t.useContext(D);return E.createElement(P,{onClick:()=>{localStorage.removeItem("jwt_token"),e({})}},"Logout")});var G={__proto__:null,JwtContext:D,JwtContextProvider:U,SimpleJwtRow:()=>{const{currentUser:e}=t.useContext(D);return E.createElement(V,null,E.createElement(z,null,e.email&&E.createElement(J,null,E.createElement("i",null,e.email),E.createElement(W,null)),!e.email&&E.createElement(LoginWithPassword,null)))},Logout:W};const H=c.div`
`,Y=e=>{const{useApi:r}=t.useContext(A),a=r(),[o,n]=t.useState(localStorage.getItem(O.names.scratchpad)||"");return E.createElement(H,null,E.createElement("textarea",{name:"scratchpad",rows:"20",cols:"40",onChange:e=>n(e.target.value),value:o}),E.createElement(M,null,E.createElement(P,{onClick:()=>{localStorage.setItem(O.names.scratchpad,o),a.postProfile({scratchpad:o}).then(e=>{}).catch(e=>{q("Cannot update profile:",e)})}},"Save")))};Y.propTypes={};const Z=c.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`,K=e=>{let{children:r,...a}=e;const{listItems:o}=a,[n,l]=E.useState(!1),[i,c]=t.useState(!1),u=s.useHistory();return E.createElement(t.Fragment,null,a.variant===O.variants.floating?E.createElement(f,{onClick:()=>l(!0),style:{position:"absolute",top:0,left:0,margin:".5em",zIndex:1},"aria-label":"main menu"},E.createElement(R,null)):E.createElement(R,{onClick:()=>l(!0)}),E.createElement(h,{anchor:"left",open:n,onClose:()=>l(!1)},E.createElement(Z,null,E.createElement(v,null,o.map(e=>{let{label:t,key:r,path:a}=e;return E.createElement(w,{button:!0,key:r,onClick:()=>{l(!1),u.push(a())}},t)})),r)))};K.propTypes={listItems:i.array.isRequired,variant:i.string},process.env.REACT_APP_SERVE&&r.render(E.createElement($,null),document.getElementById("root")),e.Actions=M,e.AuthContext=A,e.AuthContextProvider=F,e.CloseBtn=L,e.FlexCol=S,e.FlexRow=k,e.LoginModal=B,e.ModalHeader=T,e.RegisterModal=N,e.Scratchpad=Y,e.SideMenu=K,e.jwtManager=G,e.logg=q});
//# sourceMappingURL=index.jsx.umd.js.map
