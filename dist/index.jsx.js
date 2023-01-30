function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),r=e(t),o=e(require("react-dom"));require("ionicons/icons"),require("@material-ui/core");var n=e(require("@material-ui/core/Box")),a=require("@material-ui/icons"),l=e(require("prop-types")),i=require("react-router-dom"),s=e(require("styled-components")),c=e(require("axios")),u=require("react-toastify");require("@capacitor/core");var d=e(require("react-modal"));require("@ionic/react");var m=e(require("@material-ui/core/Drawer")),p=e(require("@material-ui/core/Fab"));require("@material-ui/core/IconButton");var g=e(require("@material-ui/core/List")),h=e(require("@material-ui/core/ListItem"));function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}require("@material-ui/core/ListItemIcon");const x={anonUser:{},bottomDrawerOpen:"bottom-drawer-open",collapsible:{description:"descr-sec",extra1:"extra1-sec",extra2:"extra2-sec",extra3:"extra3-sec",map:"map-sec",markers:"markers-sec"},collapsibles:"collapsibles",current_user:"current_user",horizontal:"horizontal",item_types:{gallery:"Gallery",report:"Report",video:"Video"},jwt_token:"jwt_token",layout_onecol:"onecol",layout_mapui:"mapui",locations:{earth:"earth"},map_panel_types:{Equirectangular:"Equirectangular",MapPanel:"MapPanel",MapPanelNoZoom:"MapPanelNoZoom",ThreePanelV1:"ThreePanelV1",ThreePanelV4:"ThreePanelV4"},names:{scratchpad:"Scratchpad"},rated:{nc17:"nc-17"},ratedConfirmation:"rated-confirmation",theme:"theme",themes:{dark:"dark",light:"light"},twofoldPercent:"twofold-percent",variants:{bordered:"bordered",floating:"floating",inline:"inline",transparent:"transparent"},vertical:"vertical"};var E=c.create({});const f=s.div`

  // @TODO: this should use variables, for Modal inner size.
  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.
  position: fixed; // for GalleriesShow
  top: 60px;
  right: 60px;

  display: flex;
  flex-direction: row-reverse;
`,y=(s.div`
  margin-right: 5px;
  cursor: pointer;
`,s.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`),C=(s(a.ChevronLeft)`
  color: ${e=>e.theme.colors.text}
`,s(a.ChevronRight)`
  color: ${e=>e.theme.colors.text}
`,s(n)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${e=>e.cursor?e.cursor:"auto"};

  display: flex;
  flex-direction: column;
`,e=>{let{...t}=e;return r.createElement(a.Close,v({style:{cursor:"pointer",...t.style}},t))});C.propTypes={onClick:l.func.isRequired};const w=s.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`,b=e=>{let{children:t,...o}=e;return r.createElement(w,v({className:"FlexCol"},o),t)},M=s.div`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`,O=(s.div`
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
`,function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=null),(r="string"==typeof r?r:t.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[r]=e),console.log(`+++ ${t}:`,e)}),P=s(a.Menu)`
  color: ${e=>e.theme.colors.text}
`,L=s.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`,S=e=>{let{children:t,onClose:o,...n}=e;return r.createElement(M,null,r.createElement(L,null,t),r.createElement(C,{onClick:o}))};S.propTypes={onClose:l.func.isRequired},s.div`
  border: ${e=>e.theme.thinBorder};
  border-radius: ${e=>e.theme.thinBorderRadius};
  background: ${e=>e.theme.colors.cardBackground};
  padding: .5em;

  margin-bottom: 1em;
`,s.div`
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
`,s.div`
  height: 100vh;
`,r.createContext({});var k={LoginModal:"_2YolN",LoginModalOverlay:"_3hqvY",Notice:"_2ifwF"};const q=e=>{const{onError:o,onSuccess:n}=e,{loginModalOpen:a,setLoginModalOpen:l,setRegisterModalOpen:i,useApi:s}=t.useContext(j),[c,u]=t.useState(""),[m,p]=t.useState(""),g=s(),h=function(e,t){try{return g.postLogin({email:e,password:t}).then(e=>{l(!1),n(e)}).catch(e=>{o(e)}),Promise.resolve()}catch(e){return Promise.reject(e)}};return d.setAppElement("body"),r.createElement(d,{className:"LoginModal "+k.LoginModal,isOpen:!!a,overlayClassName:k.LoginModalOverlay,portalClassName:k.LoginModalPortal},r.createElement(S,{onClose:()=>l(!1)},"Login"),"string"==typeof a&&r.createElement(M,null,r.createElement("div",{className:k.Notice},a)),r.createElement(b,null,r.createElement("label",{htmlFor:"email"},"Email"),r.createElement("input",{name:"email",type:"email",value:c,onChange:e=>u(e.target.value)}),r.createElement("label",{htmlFor:"password"},"Password"),r.createElement("input",{name:"password",type:"password",value:m,onChange:e=>p(e.target.value),onKeyDown:e=>{"Enter"===e.key&&h(c,m)}}),r.createElement(M,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},r.createElement(y,{onClick:()=>h(c,m)},"Login"))),r.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),r.createElement(M,{style:{justifyContent:"center"}},r.createElement("a",{onClick:()=>{l(!1),i(!0)}},"Register Instead")))};q.propTypes={onError:l.func,onSuccess:l.func};const R=e=>{const{setLoginModalOpen:o,registerModalOpen:n,setRegisterModalOpen:a,useApi:l}=t.useContext(j),i=l(),[s,c]=t.useState(""),[m,p]=t.useState(""),[g,h]=t.useState("");return r.createElement(d,{className:"LoginModal "+k.LoginModal,isOpen:n,overlayClassName:k.LoginModalOverlay,portalClassName:k.LoginModalPortal},r.createElement(S,{onClose:()=>a(!1)},"Register"),r.createElement(b,null,r.createElement("label",{htmlFor:"email"},"Email"),r.createElement("input",{type:"email",name:"email",value:s,onChange:e=>c(e.target.value)}),r.createElement("label",{htmlFor:"password"},"Password"),r.createElement("input",{type:"password",name:"password",value:m,onChange:e=>p(e.target.value)}),r.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.createElement("input",{type:"password",name:"password2",value:g,onChange:e=>h(e.target.value)}),r.createElement(M,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},r.createElement(y,{className:"Submit",onClick:()=>function(e,t,r){try{return t!==r?(u.toast("Passwords do not match"),Promise.resolve()):(i.doRegister({email:e,password:t}).then(e=>{a(!1),o(e.message)}).catch(e=>{u.toast("Registration failed")}),Promise.resolve())}catch(e){return Promise.reject(e)}}(s,m,g)},"Register")),r.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),r.createElement(M,{style:{justifyContent:"center"}},r.createElement("a",{onClick:()=>o(!0)||a(!1)},"Login Instead"))))};R.propTypes={};const j=t.createContext({}),_=e=>{let{children:o,...n}=e;O(n,"AuthContextProvider");let{currentUser:a=x.anonUser,setCurrentUser:l,loginModalOpen:i=!1,setLoginModalOpen:s,registerModalOpen:c=!1,setRegisterModalOpen:u}=n,[d,m]=t.useState(a);l&&(d=a,m=l);let[p,g]=t.useState(i);s&&(p=i,g=s);let[h,v]=t.useState(c);u&&(h=c,v=u);const E={currentUser:d,setCurrentUser:m,loginModalOpen:p,setLoginModalOpen:g,registerModalOpen:h,setRegisterModalOpen:v};return r.createElement(j.Provider,{value:{...n,...E}},o)};_.propTypes={useApi:l.func.isRequired};const T=()=>{const[e,o]=t.useState(!1),[n,a]=t.useState(!0);return r.createElement(_,{loginModalOpen:e,setLoginModalOpen:o,registerModalOpen:n,setRegisterModalOpen:a,useApi:()=>({doRegister:e=>{let{email:t,password:r}=e;return E.post("http://localhost:3001/api/users",{email:t,password:r}).then(e=>e.data).then(e=>(O(e,"done registered"),e))}})},r.createElement(q,null),r.createElement(u.ToastContainer,{position:"bottom-left"}))},I=r.createContext({}),N=e=>{let{children:o,...n}=e;O(n,"JwtContextProvider 222");const{api:a}=n,[l,i]=t.useState({}),[s,c]=t.useState({});return t.useEffect(()=>{O("setting currentUser..."),a.getMyAccount().then(e=>{O(e,"got this resp"),i(e)}).catch(e=>{O(e,"e322"),u.toast("Login failed: "+e),i({})})},[]),r.createElement(I.Provider,{value:{api:a,currentUser:l,setCurrentUser:i,loginModalOpen:s,setLoginModalOpen:c}},o)};N.props={api:l.object};const A=s.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`,$=s.div`
  border: 1px solid red;
`,F=s.div`
  display: flex;
`,U=(s.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`,()=>{const{setCurrentUser:e}=t.useContext(I);return r.createElement(y,{onClick:()=>{localStorage.removeItem("jwt_token"),e({})}},"Logout")});var B={__proto__:null,JwtContext:I,JwtContextProvider:N,SimpleJwtRow:()=>{const{currentUser:e}=t.useContext(I);return r.createElement($,null,r.createElement(A,null,e.email&&r.createElement(F,null,r.createElement("i",null,e.email),r.createElement(U,null)),!e.email&&r.createElement(LoginWithPassword,null)))},Logout:U};const z=s.div`
`,D=e=>{const{useApi:o}=t.useContext(j),n=o(),[a,l]=t.useState(localStorage.getItem(x.names.scratchpad)||"");return r.createElement(z,null,r.createElement("textarea",{name:"scratchpad",rows:"20",cols:"40",onChange:e=>l(e.target.value),value:a}),r.createElement(f,null,r.createElement(y,{onClick:()=>{localStorage.setItem(x.names.scratchpad,a),n.postProfile({scratchpad:a}).then(e=>{}).catch(e=>{O("Cannot update profile:",e)})}},"Save")))};D.propTypes={};const V=s.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`,J=e=>{let{children:o,...n}=e;const{listItems:a}=n,[l,s]=r.useState(!1),[c,u]=t.useState(!1),d=i.useHistory();return r.createElement(t.Fragment,null,n.variant===x.variants.floating?r.createElement(p,{onClick:()=>s(!0),style:{position:"absolute",top:0,left:0,margin:".5em",zIndex:1},"aria-label":"main menu"},r.createElement(P,null)):r.createElement(P,{onClick:()=>s(!0)}),r.createElement(m,{anchor:"left",open:l,onClose:()=>s(!1)},r.createElement(V,null,r.createElement(g,null,a.map(e=>{let{label:t,key:o,path:n}=e;return r.createElement(h,{button:!0,key:o,onClick:()=>{s(!1),d.push(n())}},t)})),o)))};J.propTypes={listItems:l.array.isRequired,variant:l.string},process.env.REACT_APP_SERVE&&o.render(r.createElement(T,null),document.getElementById("root")),exports.Actions=f,exports.AuthContext=j,exports.AuthContextProvider=_,exports.CloseBtn=C,exports.FlexCol=b,exports.FlexRow=M,exports.LoginModal=q,exports.ModalHeader=S,exports.RegisterModal=R,exports.Scratchpad=D,exports.SideMenu=J,exports.jwtManager=B,exports.logg=O;
//# sourceMappingURL=index.jsx.js.map
