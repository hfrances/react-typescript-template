(this["webpackJsonpreact-typescript-template"]=this["webpackJsonpreact-typescript-template"]||[]).push([[0],{478:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);n(252),n(262);var a=n(0),i=n.n(a),r=n(50),c=n.n(r),o=n(69),s=n(51),l=new function e(){Object(s.a)(this,e),this.combineUrl=function(){for(var e="",t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return null===n||void 0===n||n.forEach((function(t){e.length>0&&"/"!==e.slice(-1)&&(e+="/"),e+=t})),e},this.omit=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i;return e?(i={},Object.keys(e).forEach((function(t){-1===n.indexOf(t)&&(i[t]=e[t])}))):i=e,i}},u=n(27),d=n.n(u),j=n(59),f=n(76),b=n(226),p=n(227),h=n(10),O="SET_CURRENT_USER",v="SET_TOKEN",m={currentUser:null,token:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload});case v:return Object(h.a)(Object(h.a)({},e),{},{token:t.payload});default:return e}},g="SET_VALOR_1",y="SET_VALOR_2",w={value1:void 0,value2:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(h.a)(Object(h.a)({},e),{},{value1:t.payload});case y:return Object(h.a)(Object(h.a)({},e),{},{value2:t.payload});default:return e}},S="SET_LANGUAGE",k={language:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(h.a)(Object(h.a)({},e),{},{language:t.payload});default:return e}},C="SET_ALERT",_="SET_ALERT_HIDDEN",N={severity:void 0,message:void 0,details:void 0,timeout:5e3,visible:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(h.a)({},t.payload);case _:return N;default:return e}},A=Object(f.combineReducers)({authority:x,session:T,alert:R,example:E}),L=Object(f.createStore)(A,Object(b.composeWithDevTools)(Object(f.applyMiddleware)(p.a))),I=function(e){return e((function(e){return e}))},B=function(e){return{type:v,payload:e}},P=function(e){return{type:C,payload:e}},F=function(){return{type:_,payload:void 0}},U=L,H="ALERT_SEVERITY_ERROR",D="ALERT_SEVERITY_WARNING",V="ALERT_SEVERITY_INFO",J="language",W="authToken",Y="useDebug",z={getUseDebug:function(){var e=sessionStorage.getItem(Y),t=localStorage.getItem(Y);return e?JSON.parse(e):t?JSON.parse(t):void 0},getToken:function(){var e=localStorage.getItem(W);return e?JSON.parse(e):null},setToken:function(e){return localStorage.setItem(W,e?JSON.stringify(e):null)},getLanguage:function(){return localStorage.getItem(J),localStorage.getItem(J)},setLanguage:function(e){return localStorage.setItem(J,e)}},M=n(246),q=n(245),G=n(228),K=n.n(G),X=new(function(e){Object(M.a)(n,e);var t=Object(q.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this,l.combineUrl("http://web-application.example.com/api/","sample"))).get=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.instance.get("").then((function(e){return e.data})).catch((function(e){throw console.error("get","fetch error:",e),e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),e}return n}((function e(t){var n=this;Object(s.a)(this,e),this.instance=void 0,this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._initializeRequestInterceptor=function(){n.instance.interceptors.request.use(n._handleRequest,n._handleError)},this._handleRequest=function(e){var t,n;e.withCredentials||e.headers.Authorization||(e.headers.Authorization="Bearer ".concat(null===(t=U.getState().authority)||void 0===t||null===(n=t.token)||void 0===n?void 0:n.accessToken));return e},this._handleResponse=function(e){return e},this._handleError=function(e){return console.error("http-client","fetch error",e,e.toJSON()),U.dispatch(P({severity:H,message:e.message,details:e.toJSON(),timeout:5e3,visible:!0})),Promise.reject(e.response)},this.instance=K.a.create({baseURL:t}),this._initializeResponseInterceptor(),this._initializeRequestInterceptor()}))),Q=new function e(){var t=this;Object(s.a)(this,e),this.init=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadToken().then(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.whoAmI().then((function(){return U.getState().authority}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.loadToken=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=z.getToken();try{U.dispatch(B(n)),e(n)}catch(a){t(a)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.whoAmI=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=z.getToken();try{e(n?{}:null)}catch(a){t(a)}})).then((function(e){return U.dispatch({type:O,payload:e}),e})).catch((function(e){if(401===e.status)return console.error("Unkown user"),null;throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},Z=n(229),$=new(function(){function e(){Object(s.a)(this,e),this.enabled=void 0,this.filter=void 0,this.enabled=!1,this.filter=function(e){return!0}}return Object(Z.a)(e,[{key:"log",value:function(){if(this.enabled){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;if(!this.filter||this.filter(t))(a=console).log.apply(a,t)}}},{key:"error",value:function(){if(this.enabled){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;if(!this.filter||this.filter(t))(a=console).error.apply(a,t)}}},{key:"warn",value:function(){if(this.enabled){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;if(!this.filter||this.filter(t))(a=console).warn.apply(a,t)}}},{key:"info",value:function(){if(this.enabled){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;if(!this.filter||this.filter(t))(a=console).info.apply(a,t)}}}]),e}());var ee=n(52),te=n(20),ne=n(3),ae=function(e){var t=e.style,n=e.children;return Object(ne.jsx)("div",{className:"floating-container",style:ie,children:Object(ne.jsx)("div",{className:"floating-content",style:Object(h.a)(Object(h.a)({},re),t),children:n})})},ie={position:"relative"},re={zIndex:1,position:"absolute",padding:0,left:0,right:0},ce=n(40),oe=n(58),se=function(e){var t=e.title,n=e.onHeight,i=Object(te.f)(),r=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e;n&&n(null===(e=r.current)||void 0===e?void 0:e.offsetHeight)}),[n]),Object(ne.jsx)("header",{className:"app-header",ref:r,children:Object(ne.jsxs)("div",{style:le,children:[Object(ne.jsx)("button",{style:Object(h.a)(Object(h.a)({},de),{},{backgroundColor:"transparent",borderWidth:"0"}),onClick:function(){return i.goBack()},children:"\u2039"}),Object(ne.jsx)("p",{className:"app-header-title",style:ue,children:t})]})})},le={display:"flex",flexDirection:"row",justifyContent:"flex-start",position:"relative",alignItems:"center"},ue={flex:"0 1 auto",position:"relative",marginLeft:"auto",marginRight:"auto"},de={flex:"none",position:"absolute",marginRight:"auto",textDecoration:"none",display:"inline-block",padding:"8px 16px",cursor:"pointer"},je=function(e){return"static"===e},fe=function(e){return"fixed"===e},be=function(e){var t=e.visibility,n=e.onHeight,i=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){var e;n&&n(null===(e=i.current)||void 0===e?void 0:e.offsetHeight)}),[n]),function(e){return je(e)||fe(e)}(t)?Object(ne.jsx)("footer",{className:"app-footer ".concat(je(t)?"static":"").trimEnd(),ref:i,children:Object(ne.jsx)("p",{className:"app-footer-component",children:"0.1.18-material.1"})}):null},pe="flex",he=function(e){var t=e.headerTitle,n=e.type,i=void 0===n?pe:n,r=e.style,c=e.contentStyle,o=e.footerVisibility,s=void 0===o?"fixed":o,l=e.children,u=Object(a.useState)(),d=Object(oe.a)(u,2),j=d[0],f=d[1],b=Object(a.useState)(),p=Object(oe.a)(b,2),O=p[0],v=p[1],m=function(e){return e===pe?"":e};return Object(a.useEffect)((function(){$.log("Creating component","MainFrame")}),[]),Object(ne.jsxs)(a.Fragment,{children:[Object(ne.jsx)(se,{title:t,onHeight:f}),Object(ne.jsx)(ve,{style:{marginTop:j}}),function(e){var t,n,a,o,s,u=je(e),d=(t={},Object(ce.a)(t,"--headerHeight","".concat(j,"px")),Object(ce.a)(t,"--footerHeight",fe(e)?"".concat(O,"px"):void 0),t);return u?Object(ne.jsxs)("div",{id:"main-container",className:"app-container ".concat(null!==(n=m(i))&&void 0!==n?n:"").trimEnd(),style:Object(h.a)(Object(h.a)({},d),{},{display:"flex",flex:"auto",justifyContent:"space-between"}),children:[Object(ne.jsx)("main",{id:"main-container-aux",style:Object(h.a)({width:"-webkit-fill-available",display:"grid",height:"calc(100vh - var(--headerHeight))"},r),children:Object(ne.jsx)("div",{className:"app-container-content ".concat(null!==(a=m(i))&&void 0!==a?a:"").trimEnd(),style:c,children:l})}),Object(ne.jsx)(be,{visibility:e,onHeight:v})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("main",{id:"main-container",className:"app-container ".concat(null!==(o=m(i))&&void 0!==o?o:"").trimEnd(),style:Object(h.a)(Object(h.a)({},d),r),children:Object(ne.jsx)("div",{className:"app-container-content ".concat(null!==(s=m(i))&&void 0!==s?s:"").trimEnd(),style:c,children:l})}),Object(ne.jsx)(be,{visibility:e,onHeight:v})]})}(s)]})},Oe=n(508),ve=function(e){var t=e.style,n=Object(te.f)(),i=Object(o.b)(),r=I(o.c).alert,c=function(){i(F())};return Object(a.useEffect)((function(){c()}),[n]),Object(ne.jsx)(ae,{style:{marginTop:null===t||void 0===t?void 0:t.marginTop},children:r.visible?Object(ne.jsx)(Oe.a,{severity:function(e){var t;switch(e){case H:t="error";break;case D:t="warning";break;case V:t="info";break;default:t=void 0}return t}(r.severity),style:Object(h.a)({},l.omit(t,"marginTop")),onClose:function(){return c()},children:r.message}):null})},me=n(9),xe=n(501),ge=n(502),ye=n(500),we=n(234),Ee=n.n(we),Se=n(235),ke=n.n(Se),Te=function(e){var t,n,i=e.drawerWidth,r=e.list,c=e.fixedList,o=e.opened,s=void 0===o||o,l=e.onChanged,u=e.style,d=e.children,j=Ce(),f=Object(xe.a)((function(e){return{width:{width:i}}}))(),b=Object(a.useState)(s),p=Object(oe.a)(b,2),h=p[0],O=p[1];return Object(a.useEffect)((function(){var e=s;O(e),l&&e!==s&&l(e)}),[s]),Object(ne.jsxs)("div",{className:j.root,style:u,children:[Object(ne.jsxs)("nav",{className:"".concat(j.navBar," ").concat(Object(me.a)((t={},Object(ce.a)(t,j.drawerOpen,h),Object(ce.a)(t,f.width,h),Object(ce.a)(t,j.drawerClose,!h),t))),children:[Object(ne.jsx)("div",{className:j.navBarContent,children:r}),Object(ne.jsx)(ge.a,{}),Object(ne.jsxs)("div",{className:j.navBarFixed,children:[Object(ne.jsx)("div",{className:j.navBarFixedContent,children:c}),Object(ne.jsx)("div",{className:"".concat(j.navBarButton," ").concat(Object(me.a)((n={},Object(ce.a)(n,j.drawerButtonOpen,h),Object(ce.a)(n,j.drawerButtonClose,!h),n))),children:Object(ne.jsx)(ye.a,{onClick:function(){var e=!h;O(e),l&&l(e)},children:h?Object(ne.jsx)(Ee.a,{}):Object(ne.jsx)(ke.a,{})})})]})]}),Object(ne.jsx)("div",{className:j.navContainer,children:Object(ne.jsx)("div",{className:j.navContent,children:d})})]})},Ce=Object(xe.a)((function(e){return{root:{display:"flex",flex:"auto",justifyContent:"space-between",overflowY:"inherit",width:"100%"},navBar:{display:"flex",flexDirection:"column",overflowY:"inherit",background:"#E0FFFF",color:"black",flexShrink:0,whiteSpace:"nowrap"},navBarContent:{overflowY:"auto",overflowX:"hidden"},navBarFixed:{display:"flex",flex:"auto",flexDirection:"column",justifyContent:"flex-end"},navBarFixedContent:{marginBottom:"-15px",overflowX:"hidden"},navBarButton:{display:"flex"},navContainer:{display:"grid",overflowY:"auto",width:"inherit"},navContent:{display:"flex",flexDirection:"column",justifyContent:"center"},drawerOpen:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ce.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(8)+1}),drawerButtonOpen:{justifyContent:"flex-end",marginRight:"4px"},drawerButtonClose:{justifyContent:"flex-start",marginLeft:"4px"}}})),_e=function(){return Object(a.useEffect)((function(){$.log("Creating component","Page not found")}),[]),Object(ne.jsx)(he,{headerTitle:"Page not found",children:Object(ne.jsx)("div",{children:"Not found"})})},Ne=n.p+"static/media/logo.6ce24c58.svg",Re=function(){return Object(a.useEffect)((function(){$.log("Creating component","Home")}),[]),Object(ne.jsxs)(he,{headerTitle:"Home",style:{padding:"20px 0px"},footerVisibility:"fixed",children:[Object(ne.jsx)("img",{src:Ne,className:"app-logo",alt:"logo"}),Object(ne.jsxs)("p",{children:["Edit ",Object(ne.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(ne.jsx)("a",{className:"app-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(ne.jsx)(ee.b,{className:"app-link",to:"/menu",children:"Menu"}),Object(ne.jsx)(ee.b,{className:"app-link",to:"/sample-alerts",children:"Alert samples"}),Object(ne.jsx)(ee.b,{className:"app-link",to:"/sample-list?count=15",children:"List samples"}),Object(ne.jsx)(ee.b,{className:"app-link",to:"/sample",children:"Service samples"})]})},Ae=n(503),Le=n(504),Ie=n(505),Be=n(506),Pe=n(507),Fe=n(509),Ue=n(244),He=n.n(Ue),De=n(243),Ve=n.n(De),Je=n(236),We=n.n(Je),Ye=n(237),ze=n.n(Ye),Me=n(238),qe=n.n(Me),Ge=n(239),Ke=n.n(Ge),Xe=n(240),Qe=n.n(Xe),Ze=n(241),$e=n.n(Ze),et=n(242),tt=n.n(et),nt=function(){var e,t=Object(Ae.a)(),n=Object(Le.a)(t.breakpoints.down("sm")),i=[Object(ne.jsx)(We.a,{}),Object(ne.jsx)(ze.a,{}),Object(ne.jsx)(qe.a,{}),Object(ne.jsx)(Ke.a,{}),Object(ne.jsx)(Qe.a,{}),Object(ne.jsx)($e.a,{}),Object(ne.jsx)(tt.a,{})],r=Object(a.useState)(null),c=Object(oe.a)(r,2),o=c[0],s=c[1],l="static"===(e="static")?{visibility:"static",style:{height:"calc(100vh - var(--headerHeight))"}}:{visibility:e,style:void 0},u=function(e,t){for(var n=new Array(e),a=0;a<e;a++)n[a]=t(a+1);return n};return Object(a.useEffect)((function(){$.log("Creating component","Menu")}),[]),Object(a.useEffect)((function(){$.log("isSmall:",n),s(!n)}),[n]),Object(ne.jsx)(he,{headerTitle:"Menu",type:"contents",footerVisibility:l.visibility,children:null===o?null:Object(ne.jsx)(Te,{drawerWidth:240,opened:o,onChanged:function(e){$.log("Menu bar","opened",e)},style:Object(h.a)({},l.style),list:Object(ne.jsx)(Ie.a,{children:u(10,(function(e){return Object(ne.jsxs)(Be.a,{button:!0,children:[Object(ne.jsx)(Pe.a,{children:i[(e-1)%i.length]}),Object(ne.jsx)(Fe.a,{primary:"menu-item-".concat(e)})]},e)}))}),fixedList:Object(ne.jsxs)(Ie.a,{children:[Object(ne.jsxs)(Be.a,{button:!0,children:[Object(ne.jsx)(Pe.a,{children:Object(ne.jsx)(Ve.a,{})}),Object(ne.jsx)(Fe.a,{primary:"Account"})]}),Object(ne.jsxs)(Be.a,{button:!0,children:[Object(ne.jsx)(Pe.a,{children:Object(ne.jsx)(He.a,{})}),Object(ne.jsx)(Fe.a,{primary:"Settings"})]})]}),children:u(15,(function(e){return Object(ne.jsx)("div",{children:"content ".concat(e)},"c".concat(e))}))})})},at=function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){$.log("Creating component","Sample")}),[]),Object(ne.jsx)(he,{headerTitle:"Service sample",footerVisibility:"fixed",children:Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){return e()},children:"Get sample"})})},it=function(){var e=Object(o.b)(),t=I(o.c).alert,n=function(t,n){e(P({severity:t,message:n,details:void 0,timeout:5e3,visible:!0}))};return Object(a.useEffect)((function(){$.log("Creating component","SampleAlerts")}),[]),Object(a.useEffect)((function(){}),[t]),Object(ne.jsxs)(he,{headerTitle:"Alert samples",footerVisibility:"fixed",children:[Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){return n(H,"This is an error alert!")},children:"Show error alert"}),Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){return n(D,"This is a warning alert!")},children:"Show warning alert"}),Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){return n(V,"This is an info message")},children:"Show info message"}),Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){return n("ALERT_SEVERITY_SUCCESS","This is a success message")},children:"Show success message"}),Object(ne.jsx)("button",{className:"button-link app-link",onClick:function(){e(F())},children:"Reset"})]})},rt=function(){var e=Object(te.f)(),t=Object(a.useState)(15),n=Object(oe.a)(t,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){$.log("Creating component","SampleList")}),[]),Object(a.useEffect)((function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("count"))&&void 0!==e?e:15;r(t)}),[e]),Object(ne.jsx)(he,{headerTitle:"List sample",type:"scrolled",footerVisibility:"static",children:Object(ne.jsx)(Ie.a,{children:function(e,t){for(var n=new Array(e),a=0;a<e;a++)n[a]=t(a+1);return n}(i,(function(e){return Object(ne.jsx)(Fe.a,{primary:"item ".concat(e)},e)}))})})},ct=function(){return Object(ne.jsx)(ee.a,{basename:"/react-typescript-template",children:Object(ne.jsxs)(te.c,{children:[Object(ne.jsx)(te.a,{path:"/sample-list",exact:!0,component:rt}),Object(ne.jsx)(te.a,{path:"/sample-alerts",exact:!0,component:it}),Object(ne.jsx)(te.a,{path:"/sample",exact:!0,component:at}),Object(ne.jsx)(te.a,{path:"/menu",exact:!0,component:nt}),Object(ne.jsx)(te.a,{path:"/home",exact:!0,component:Re}),Object(ne.jsx)(te.a,{path:"/",exact:!0,component:Re}),Object(ne.jsx)(te.a,{component:_e})]})})},ot=(n(478),function(){var e=Object(Ae.a)(),t=Object(Le.a)(e.breakpoints.down("sm"));return Object(a.useEffect)((function(){$.log("Creating component","App")}),[]),Object(a.useEffect)((function(){$.log("App","isSmall",t)}),[t]),Object(ne.jsx)("div",{className:"app",children:Object(ne.jsx)(ct,{})})}),st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,510)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};n(479);!function(){var e,t=z.getUseDebug();$.enabled=null===t?null!==(e=Object({NODE_ENV:"production",PUBLIC_URL:"/react-typescript-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_VERSION:"0.1.18-material.1",REACT_APP_PUBLIC_URL:"/react-typescript-template",REACT_APP_API_URL:"http://web-application.example.com/api/"}).REACT_APP_debug)&&void 0!==e&&e:!0===t,$.filter=function(e){return!0}}(),console.info("version","0.1.18-material.1"),c.a.render(Object(ne.jsx)(i.a.StrictMode,{children:Object(ne.jsx)(o.a,{store:U,children:Object(ne.jsx)(ot,{})})}),document.getElementById("root"),(function(){Q.init()})),st()}},[[480,1,2]]]);
//# sourceMappingURL=main.16ee5394.chunk.js.map