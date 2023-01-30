import e,{useContext as t,useState as r,createContext as o,useEffect as n,Fragment as a}from"react";import l from"react-dom";import"ionicons/icons";import"@material-ui/core";import i from"@material-ui/core/Box";import{ChevronLeft as s,ChevronRight as c,Close as m,Menu as p}from"@material-ui/icons";import d from"prop-types";import{useHistory as u}from"react-router-dom";import g from"styled-components";import h from"axios";import{toast as f,ToastContainer as v}from"react-toastify";import"@capacitor/core";import E from"react-modal";import"@ionic/react";import y from"@material-ui/core/Drawer";import w from"@material-ui/core/Fab";import"@material-ui/core/IconButton";import x from"@material-ui/core/List";import b from"@material-ui/core/ListItem";import"@material-ui/core/ListItemIcon";function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}const M={anonUser:{},bottomDrawerOpen:"bottom-drawer-open",collapsible:{description:"descr-sec",extra1:"extra1-sec",extra2:"extra2-sec",extra3:"extra3-sec",map:"map-sec",markers:"markers-sec"},collapsibles:"collapsibles",current_user:"current_user",horizontal:"horizontal",item_types:{gallery:"Gallery",report:"Report",video:"Video"},jwt_token:"jwt_token",layout_onecol:"onecol",layout_mapui:"mapui",locations:{earth:"earth"},map_panel_types:{Equirectangular:"Equirectangular",MapPanel:"MapPanel",MapPanelNoZoom:"MapPanelNoZoom",ThreePanelV1:"ThreePanelV1",ThreePanelV4:"ThreePanelV4"},names:{scratchpad:"Scratchpad"},rated:{nc17:"nc-17"},ratedConfirmation:"rated-confirmation",theme:"theme",themes:{dark:"dark",light:"light"},twofoldPercent:"twofold-percent",variants:{bordered:"bordered",floating:"floating",inline:"inline",transparent:"transparent"},vertical:"vertical"};var O=h.create({});const P=g.div`

  // @TODO: this should use variables, for Modal inner size.
  // I'd need to do dependency injection of the variable, from infiniteshelterjs into ishlibjs.
  position: fixed; // for GalleriesShow
  top: 60px;
  right: 60px;

  display: flex;
  flex-direction: row-reverse;
`,L=(g.div`
  margin-right: 5px;
  cursor: pointer;
`,g.div`
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .3em 1em;
`),k=(g(s)`
  color: ${e=>e.theme.colors.text}
`,g(c)`
  color: ${e=>e.theme.colors.text}
`,g(i)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${e=>e.cursor?e.cursor:"auto"};

  display: flex;
  flex-direction: column;
`,t=>{let{...r}=t;return e.createElement(m,C({style:{cursor:"pointer",...r.style}},r))});k.propTypes={onClick:d.func.isRequired};const R=g.div`
  display: flex;
  flex-direction: column;

  > * {
    margin: auto .4em; // @TODO: standardize this size!
  }
`,_=t=>{let{children:r,...o}=t;return e.createElement(R,C({className:"FlexCol"},o),r)},j=g.div`
  display: flex;

  > * {
    // margin: auto .4em; // @TODO: why? the LoginModal needs no margins!
  }
`,T=(g.div`
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
`,function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=null),(r="string"==typeof r?r:t.replace(/\W/g,"")).length>0&&"undefined"!=typeof window&&(window[r]=e),console.log(`+++ ${t}:`,e)}),I=g(p)`
  color: ${e=>e.theme.colors.text}
`,N=g.div`
  flex-grow: 1;
  text-align: center;
  font-size: 1.2rem;
`,S=t=>{let{children:r,onClose:o,...n}=t;return e.createElement(j,null,e.createElement(N,null,r),e.createElement(k,{onClick:o}))};S.propTypes={onClose:d.func.isRequired},g.div`
  border: ${e=>e.theme.thinBorder};
  border-radius: ${e=>e.theme.thinBorderRadius};
  background: ${e=>e.theme.colors.cardBackground};
  padding: .5em;

  margin-bottom: 1em;
`,g.div`
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
`,g.div`
  height: 100vh;
`,e.createContext({});var $={LoginModal:"_2YolN",LoginModalOverlay:"_3hqvY",Notice:"_2ifwF"};const U=o=>{const{onError:n,onSuccess:a}=o,{loginModalOpen:l,setLoginModalOpen:i,setRegisterModalOpen:s,useApi:c}=t(B),[m,p]=r(""),[d,u]=r(""),g=c(),h=function(e,t){try{return g.postLogin({email:e,password:t}).then(e=>{i(!1),a(e)}).catch(e=>{n(e)}),Promise.resolve()}catch(e){return Promise.reject(e)}};return E.setAppElement("body"),e.createElement(E,{className:"LoginModal "+$.LoginModal,isOpen:!!l,overlayClassName:$.LoginModalOverlay,portalClassName:$.LoginModalPortal},e.createElement(S,{onClose:()=>i(!1)},"Login"),"string"==typeof l&&e.createElement(j,null,e.createElement("div",{className:$.Notice},l)),e.createElement(_,null,e.createElement("label",{htmlFor:"email"},"Email"),e.createElement("input",{name:"email",type:"email",value:m,onChange:e=>p(e.target.value)}),e.createElement("label",{htmlFor:"password"},"Password"),e.createElement("input",{name:"password",type:"password",value:d,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"===e.key&&h(m,d)}}),e.createElement(j,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},e.createElement(L,{onClick:()=>h(m,d)},"Login"))),e.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),e.createElement(j,{style:{justifyContent:"center"}},e.createElement("a",{onClick:()=>{i(!1),s(!0)}},"Register Instead")))};U.propTypes={onError:d.func,onSuccess:d.func};const A=o=>{const{setLoginModalOpen:n,registerModalOpen:a,setRegisterModalOpen:l,useApi:i}=t(B),s=i(),[c,m]=r(""),[p,d]=r(""),[u,g]=r("");return e.createElement(E,{className:"LoginModal "+$.LoginModal,isOpen:a,overlayClassName:$.LoginModalOverlay,portalClassName:$.LoginModalPortal},e.createElement(S,{onClose:()=>l(!1)},"Register"),e.createElement(_,null,e.createElement("label",{htmlFor:"email"},"Email"),e.createElement("input",{type:"email",name:"email",value:c,onChange:e=>m(e.target.value)}),e.createElement("label",{htmlFor:"password"},"Password"),e.createElement("input",{type:"password",name:"password",value:p,onChange:e=>d(e.target.value)}),e.createElement("label",{htmlFor:"password2"},"Confirm Password"),e.createElement("input",{type:"password",name:"password2",value:u,onChange:e=>g(e.target.value)}),e.createElement(j,{style:{flexDirection:"row-reverse",justifyContent:"space-between",marginTop:"0.4em"}},e.createElement(L,{className:"Submit",onClick:()=>function(e,t,r){try{return t!==r?(f("Passwords do not match"),Promise.resolve()):(s.doRegister({email:e,password:t}).then(e=>{l(!1),n(e.message)}).catch(e=>{f("Registration failed")}),Promise.resolve())}catch(e){return Promise.reject(e)}}(c,p,u)},"Register")),e.createElement("hr",{style:{margin:"2rem 0",borderWidth:"1px"}}),e.createElement(j,{style:{justifyContent:"center"}},e.createElement("a",{onClick:()=>n(!0)||l(!1)},"Login Instead"))))};A.propTypes={};const B=o({}),z=t=>{let{children:o,...n}=t;T(n,"AuthContextProvider");let{currentUser:a=M.anonUser,setCurrentUser:l,loginModalOpen:i=!1,setLoginModalOpen:s,registerModalOpen:c=!1,setRegisterModalOpen:m}=n,[p,d]=r(a);l&&(p=a,d=l);let[u,g]=r(i);s&&(u=i,g=s);let[h,f]=r(c);m&&(h=c,f=m);const v={currentUser:p,setCurrentUser:d,loginModalOpen:u,setLoginModalOpen:g,registerModalOpen:h,setRegisterModalOpen:f};return e.createElement(B.Provider,{value:{...n,...v}},o)};z.propTypes={useApi:d.func.isRequired};const D=()=>{const[t,o]=r(!1),[n,a]=r(!0);return e.createElement(z,{loginModalOpen:t,setLoginModalOpen:o,registerModalOpen:n,setRegisterModalOpen:a,useApi:()=>({doRegister:e=>{let{email:t,password:r}=e;return O.post("http://localhost:3001/api/users",{email:t,password:r}).then(e=>e.data).then(e=>(T(e,"done registered"),e))}})},e.createElement(U,null),e.createElement(v,{position:"bottom-left"}))},F=e.createContext({}),q=t=>{let{children:o,...a}=t;T(a,"JwtContextProvider 222");const{api:l}=a,[i,s]=r({}),[c,m]=r({});return n(()=>{T("setting currentUser..."),l.getMyAccount().then(e=>{T(e,"got this resp"),s(e)}).catch(e=>{T(e,"e322"),f("Login failed: "+e),s({})})},[]),e.createElement(F.Provider,{value:{api:l,currentUser:i,setCurrentUser:s,loginModalOpen:c,setLoginModalOpen:m}},o)};q.props={api:d.object};const V=g.div`
  display: flex;

  > * {
    margin: auto .4em;
  }
`,J=g.div`
  border: 1px solid red;
`,W=g.div`
  display: flex;
`,G=(g.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`,()=>{const{setCurrentUser:r}=t(F);return e.createElement(L,{onClick:()=>{localStorage.removeItem("jwt_token"),r({})}},"Logout")});var Y={__proto__:null,JwtContext:F,JwtContextProvider:q,SimpleJwtRow:()=>{const{currentUser:r}=t(F);return e.createElement(J,null,e.createElement(V,null,r.email&&e.createElement(W,null,e.createElement("i",null,r.email),e.createElement(G,null)),!r.email&&e.createElement(LoginWithPassword,null)))},Logout:G};const Z=g.div`
`,K=o=>{const{useApi:n}=t(B),a=n(),[l,i]=r(localStorage.getItem(M.names.scratchpad)||"");return e.createElement(Z,null,e.createElement("textarea",{name:"scratchpad",rows:"20",cols:"40",onChange:e=>i(e.target.value),value:l}),e.createElement(P,null,e.createElement(L,{onClick:()=>{localStorage.setItem(M.names.scratchpad,l),a.postProfile({scratchpad:l}).then(e=>{}).catch(e=>{T("Cannot update profile:",e)})}},"Save")))};K.propTypes={};const H=g.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`,Q=t=>{let{children:o,...n}=t;const{listItems:l}=n,[i,s]=e.useState(!1),[c,m]=r(!1),p=u();return e.createElement(a,null,n.variant===M.variants.floating?e.createElement(w,{onClick:()=>s(!0),style:{position:"absolute",top:0,left:0,margin:".5em",zIndex:1},"aria-label":"main menu"},e.createElement(I,null)):e.createElement(I,{onClick:()=>s(!0)}),e.createElement(y,{anchor:"left",open:i,onClose:()=>s(!1)},e.createElement(H,null,e.createElement(x,null,l.map(t=>{let{label:r,key:o,path:n}=t;return e.createElement(b,{button:!0,key:o,onClick:()=>{s(!1),p.push(n())}},r)})),o)))};Q.propTypes={listItems:d.array.isRequired,variant:d.string},process.env.REACT_APP_SERVE&&l.render(e.createElement(D,null),document.getElementById("root"));export{P as Actions,B as AuthContext,z as AuthContextProvider,k as CloseBtn,_ as FlexCol,j as FlexRow,U as LoginModal,S as ModalHeader,A as RegisterModal,K as Scratchpad,Q as SideMenu,Y as jwtManager,T as logg};
//# sourceMappingURL=index.jsx.module.js.map
