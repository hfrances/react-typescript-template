(this["webpackJsonpreact-typescript-template"]=this["webpackJsonpreact-typescript-template"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(18),i=n.n(c),o=n(13),s=n(14),l=n(35),u=n(36),d=n(3),p="SET_CURRENT_USER",h="SET_TOKEN",b={currentUser:null,token:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),{},{currentUser:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{token:t.payload});default:return e}},f="SET_VALOR_1",O="SET_VALOR_2",g={value1:void 0,value2:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{value1:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{value2:t.payload});default:return e}},v="SET_LANGUAGE",x={language:void 0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)(Object(d.a)({},e),{},{language:t.payload});default:return e}},k="SET_ALERT",S="SET_ALERT_HIDDEN",w={severity:void 0,message:void 0,details:void 0,timeout:5e3,visible:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(d.a)({},t.payload);case S:return w;default:return e}},T=Object(s.combineReducers)({authority:j,session:y,alert:A,example:m}),E=Object(s.createStore)(T,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(u.a))),R=function(e){return e((function(e){return e}))},C=function(e){return{type:h,payload:e}},_=function(e){return{type:k,payload:e}},L=function(){return{type:S,payload:void 0}},N=E,I=n(16),z=n(4),V=n(1),M=function(e){var t=e.title,n=Object(z.f)();return Object(V.jsx)("header",{className:"App-header",children:Object(V.jsxs)("div",{style:P,children:[Object(V.jsx)("button",{style:Object(d.a)(Object(d.a)({},F),{},{backgroundColor:"transparent",borderWidth:"0"}),onClick:function(){return n.goBack()},children:"\u2039"}),Object(V.jsx)("p",{style:U,children:t})]})})},P={display:"flex",flexDirection:"row",justifyContent:"flex-start",position:"relative",alignItems:"center",margin:"10px 10px"},U={flex:"0 1 auto",position:"absolute",left:"50%",transform:"translateX(-50%)"},F={flex:"none",marginRight:"auto",textDecoration:"none",display:"inline-block",padding:"8px 16px",cursor:"pointer"},H=function(e){return e.visible?Object(V.jsx)("footer",{className:"App-footer",children:Object(V.jsx)("p",{children:"0.1.1"})}):null},B=function(e){var t=e.headerTitle,n=e.footerVisible,a=e.children;return Object(V.jsxs)(r.Fragment,{children:[Object(V.jsx)(M,{title:t}),Object(V.jsx)(re,{}),Object(V.jsx)("main",{id:"main-container",className:"App-container",children:a}),Object(V.jsx)(H,{visible:n})]})},D="ALERT_SEVERITY_ERROR",J="ALERT_SEVERITY_WARNING",q="ALERT_SEVERITY_INFO",G="ALERT_SEVERITY_SUCCESS",Y="language",W="authToken",Z=function(e){var t,n,r,a=e.severity,c=e.message,i=e.onClose,o=function(e){var t;switch(e){case D:t=$;break;case J:t=ee;break;case q:t=te;break;case G:t=ne;break;default:t=void 0}return t};return Object(V.jsx)("div",{style:{position:"relative"},children:Object(V.jsxs)("div",{style:Object(d.a)(Object(d.a)({},K),null===(t=o(a))||void 0===t?void 0:t.layerStyle),children:[Object(V.jsx)("svg",{style:Object(d.a)(Object(d.a)({},X),null===(n=o(a))||void 0===n?void 0:n.iconStyle),focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(V.jsx)("path",{d:null===(r=o(a))||void 0===r?void 0:r.iconPath})}),Object(V.jsx)("div",{style:Object(d.a)({},Q),children:c}),i?Object(V.jsx)("div",{style:{display:"flex",alignItems:"center",marginLeft:"auto",marginRight:"-8px",paddingLeft:"16px"},children:Object(V.jsx)("div",{style:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"middle"},onClick:i,children:Object(V.jsx)("span",{style:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"},children:Object(V.jsx)("svg",{style:{width:"1em"},focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(V.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})})}):null]})})},K=Object(d.a)(Object(d.a)({},{zIndex:1,position:"absolute",padding:0,left:0,right:0}),{},{display:"flex",padding:"6px 16px",borderRadius:"4px",margin:"5px",height:"30px"}),X={padding:"3px",marginRight:"12px",fontSize:"1.5rem",fill:"currentcolor",opacity:"0.9"},Q={padding:"3px"},$={layerStyle:{backgroundColor:"#fdecea",color:"#611a15"},iconStyle:{color:"#f44336"},iconPath:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},ee={layerStyle:{backgroundColor:"#fff4e5",color:"#663c00"},iconStyle:{color:"#ff9800"},iconPath:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"},te={layerStyle:{backgroundColor:"#e8f4fd",color:"#0d3c61"},iconStyle:{color:"#2196f3"},iconPath:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"},ne={layerStyle:{backgroundColor:"#edf7ed",color:"#1e4620"},iconStyle:{color:"#4caf50"},iconPath:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"},re=function(){var e=Object(o.b)(),t=R(o.c).alert;return Object(V.jsx)(r.Fragment,{children:t.visible?Object(V.jsx)(Z,{severity:t.severity,message:t.message,onClose:function(){e(L())}}):null})},ae=function(){return Object(V.jsx)(B,{headerTitle:"Page not found",footerVisible:!0,children:Object(V.jsx)("div",{children:"Not found"})})},ce=n.p+"static/media/logo.6ce24c58.svg",ie=function(){return Object(V.jsxs)(B,{headerTitle:"Home",footerVisible:!0,children:[Object(V.jsx)("img",{src:ce,className:"App-logo",alt:"logo"}),Object(V.jsxs)("p",{children:["Edit ",Object(V.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(V.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(V.jsx)(I.b,{className:"App-link",to:"/sample-alerts",children:"Alert samples"}),Object(V.jsx)(I.b,{className:"App-link",to:"/sample",children:"Service samples"})]})},oe=n(5),se=n.n(oe),le=n(11),ue={getToken:function(){var e=localStorage.getItem(W);return e?JSON.parse(e):null},setToken:function(e){return localStorage.setItem(W,e?JSON.stringify(e):null)},getLanguage:function(){return localStorage.getItem(Y),localStorage.getItem(Y)},setLanguage:function(e){return localStorage.setItem(Y,e)}},de=n(12),pe=n(39),he=n(38),be=n(37),je=n.n(be),fe=function e(t){var n=this;Object(de.a)(this,e),this.instance=void 0,this._initializeResponseInterceptor=function(){n.instance.interceptors.response.use(n._handleResponse,n._handleError)},this._initializeRequestInterceptor=function(){n.instance.interceptors.request.use(n._handleRequest,n._handleError)},this._handleRequest=function(e){var t,n;e.withCredentials||(e.headers.Authorization="Bearer ".concat(null===(t=N.getState().authority)||void 0===t||null===(n=t.token)||void 0===n?void 0:n.accessToken));return e},this._handleResponse=function(e){return e},this._handleError=function(e){return console.error("http-client","fetch error",e,e.toJSON()),N.dispatch(_({severity:D,message:e.message,details:e.toJSON(),timeout:5e3,visible:!0})),Promise.reject(e.response)},this.instance=je.a.create({baseURL:t}),this._initializeResponseInterceptor(),this._initializeRequestInterceptor()},Oe=new function e(){Object(de.a)(this,e),this.combineUrl=function(){for(var e="",t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return null===n||void 0===n||n.forEach((function(t){e.length>0&&"/"!==e.slice(-1)&&(e+="/"),e+=t})),e}},ge=new function e(){var t=this;Object(de.a)(this,e),this.init=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadToken().then(Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.whoAmI().then((function(){return N.getState().authority}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.loadToken=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=ue.getToken();try{N.dispatch(C(n)),e(n)}catch(r){t(r)}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.whoAmI=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n=ue.getToken();try{e(n?{}:null)}catch(r){t(r)}})).then((function(e){return N.dispatch({type:p,payload:e}),e})).catch((function(e){if(401===e.status)return console.error("Unkown user"),null;throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},me=new(function(e){Object(pe.a)(n,e);var t=Object(he.a)(n);function n(){var e;return Object(de.a)(this,n),(e=t.call(this,Oe.combineUrl("http://web-application.example.com/api/","sample"))).get=Object(le.a)(se.a.mark((function t(){return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.instance.get("").then((function(e){return e.data})).catch((function(e){throw console.error("get","fetch error:",e),e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),e}return n}(fe)),ve=function(){var e=function(){var e=Object(le.a)(se.a.mark((function e(){return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)(B,{headerTitle:"Service sample",footerVisible:!0,children:Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){return e()},children:"Get sample"})})},xe=function(){var e=Object(o.b)(),t=R(o.c).alert,n=function(t,n){e(_({severity:t,message:n,details:void 0,timeout:5e3,visible:!0}))};return Object(r.useEffect)((function(){console.log(t)}),[t]),Object(V.jsxs)(B,{headerTitle:"Alert samples",footerVisible:!0,children:[Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){return n(D,"This is an error alert!")},children:"Show error alert"}),Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){return n(J,"This is a warning alert!")},children:"Show warning alert"}),Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){return n(q,"This is an info message")},children:"Show info message"}),Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){return n(G,"This is a success message")},children:"Show success message"}),Object(V.jsx)("button",{className:"button-link App-link",onClick:function(){e(L())},children:"Reset"})]})},ye=function(){return Object(V.jsx)(I.a,{basename:"/react-typescript-template",children:Object(V.jsxs)(z.c,{children:[Object(V.jsx)(z.a,{path:"/sample-alerts",exact:!0,component:xe}),Object(V.jsx)(z.a,{path:"/sample",exact:!0,component:ve}),Object(V.jsx)(z.a,{path:"/home",exact:!0,component:ie}),Object(V.jsx)(z.a,{path:"/",exact:!0,component:ie}),Object(V.jsx)(z.a,{component:ae})]})})},ke=(n(69),function(){return Object(r.useEffect)((function(){ge.init()}),[]),Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(ye,{})})}),Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(70);i.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(o.a,{store:N,children:Object(V.jsx)(ke,{})})}),document.getElementById("root")),Se()}},[[71,1,2]]]);
//# sourceMappingURL=main.276439e4.chunk.js.map