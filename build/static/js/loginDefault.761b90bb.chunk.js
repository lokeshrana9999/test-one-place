(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[7],{835:function(e,n,t){"use strict";var r=t(836),o=t(160);function a(e,n){return n.encode?n.strict?r(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e){var n=Object.create(null);return"string"!==typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),o=t.length>0?t.join("="):void 0;r=decodeURIComponent(r),o=void 0===o?null:decodeURIComponent(o),void 0===n[r]?n[r]=o:Array.isArray(n[r])?n[r].push(o):n[r]=[n[r],o]})),n):n},n.stringify=function(e,n){return n=o({encode:!0,strict:!0},n),e?Object.keys(e).sort().map((function(t){var r=e[t];if(void 0===r)return"";if(null===r)return a(t,n);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&(null===e?o.push(a(t,n)):o.push(a(t,n)+"="+a(e,n)))})),o.join("&")}return a(t,n)+"="+a(r,n)})).filter((function(e){return e.length>0})).join("&"):""}},836:function(e,n,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},908:function(e,n,t){"use strict";t.r(n);var r=t(153),o=t.n(r),a=t(205),i=t(19),c=t(0),u=t.n(c),l=t(13),s=t(886),p=t(154),b=t(63),f=t(835),d=t.n(f),m=t(40),h=t(203),g=t(497),x=t(496),v=t(488),k=t(498);function w(){var e=Object(i.a)(["\n  background: transparent !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  padding: 0 20px;\n\n  font-family: Rubik;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  .ant-input-prefix {\n    color: white;\n    margin-right: 10px;\n  }\n  input {\n    background: inherit !important;\n    font-size: 15px;\n    caret-color: white;\n    color: white;\n  }\n  .ant-input[disabled]{\n    color:white;\n  }\n  input:focus {\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: white;\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(i.a)(["\n  background-color: transparent !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  font-size: 15px;\n  padding: 0 20px;\n  caret-color: white;\n  color: white;\n  font-family: Rubik;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  :focus {\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: white;\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(i.a)(["\n  font-family: Rubik;\n  /* font-size: 25px; */\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n"]);return y=function(){return e},e}function j(){var e=Object(i.a)(["\n  font-family: Rubik;\n  font-size: 30px;\n  font-weight: 1200;\n"]);return j=function(){return e},e}function E(){var e=Object(i.a)(["\n  font-family: Rubik;\n  font-size: 25px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n"]);return E=function(){return e},e}function z(){var e=Object(i.a)(["\n  border-radius: 20px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.3;\n  backdrop-filter: blur(50px);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);\n  background-color: black;\n"]);return z=function(){return e},e}function T(){var e=Object(i.a)(["\n  color: white;\n  padding: 30px 20px 32px;\n  border-radius: 20px;\n  position: relative;\n  background-color: transparent;\n  .ant-form-item-extra {\n    color: white !important;\n  }\n"]);return T=function(){return e},e}var R=l.b.div(T()),N=l.b.div(z()),C=l.b.h1(E()),S=l.b.div(j()),I=Object(l.b)(v.a)(y()),P=Object(l.b)(v.c)(O()),A=Object(l.b)(v.c)(w()),U={phoneNumber:[g.f,g.e],otp:[g.f,Object(g.d)(6)]},L=Object(x.c)({enableReinitialize:!0,mapPropsToValues:function(){return{phoneNumber:"",otp:""}},handleSubmit:function(){var e=Object(a.a)(o.a.mark((function e(n,t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.onSubmit,(a=n).phoneNumber=Object(k.a)(a.phoneNumber),e.next=5,r(n);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),validate:function(e){return Object(g.g)(e,U)},displayName:"LoginForm"}),Y=Object(l.c)(L((function(e){var n=e.values,t=e.handleSubmit,r=e.sendOtp,i=Object(c.useState)(!1),l=Object(h.a)(i,2),p=l[0],b=l[1],f=function(){var e=Object(a.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(g.e)(n.phoneNumber),""===n.phoneNumber||t){e.next=14;break}return a=Object(k.a)(n.phoneNumber),e.prev=3,e.next=6,r(a);case 6:b(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("formerror",e.t0);case 12:e.next=15;break;case 14:s.b.error({duration:5,content:"Please enter a valid phone number"});case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(R,null,u.a.createElement(N,null),u.a.createElement(C,null,"\u201cTime to set up your"," ",u.a.createElement(S,null,"Oneplace Universe\u201d")),u.a.createElement(m.e,{size:"xl"}),u.a.createElement(v.b,{name:"login",onFinish:t},u.a.createElement(g.a,{name:"phoneNumber",component:A,type:"text",prefix:"+91",disabled:p,label:"Your 10 digit mobile number",placeholder:"Your 10 digit mobile number",value:n.phoneNumber}),u.a.createElement(m.e,{size:"xl"}),p&&u.a.createElement(g.a,{name:"otp",component:P,type:"text",label:"Enter Your OTP",placeholder:"Enter Your OTP",value:n.otp,suffix:""}),!p&&u.a.createElement(I,{ghost:!0,style:{borderRadius:"7px"},onClick:f,size:"large",block:!0},"Send Otp"),p&&u.a.createElement(u.a.Fragment,null,u.a.createElement(I,{ghost:!0,style:{borderRadius:"7px"},htmlType:"submit",size:"large",block:!0},"Login"),u.a.createElement(m.e,{size:"xl"}),u.a.createElement(I,{style:{borderRadius:"7px"},onClick:function(){b(!1)},size:"large",block:!0},"Re-enter Phone Number"))))}))),F=t(109),V=t(108);function _(){var e=Object(i.a)(["\n  color: ",";\n  position: relative;\n  bottom:0;\n  height: fit-content;\n  overflow-x:hidden;\n  margin-top: -30px;\n  padding-top:50px;\n  background-color: #4643d3;\n  padding-bottom:40px;\n"]);return _=function(){return e},e}function B(){var e=Object(i.a)(["\n  color: ",";\n  text-align: center;\n  font-weight: bold;\n  font-family: Rubik;\n  /* word-spacing: -3px; */\n  /* font-weight: normal; */\n  font-stretch: normal;\n  font-style: normal;\n  font-size: 22px;\n"]);return B=function(){return e},e}var J=l.b.h2(B(),(function(e){return e.theme.textColor})),H=l.b.div(_(),(function(e){return e.theme.textColor})),W={setAccessTokene:V.b,setRefreshTokene:V.e};n.default=Object(b.b)((function(e){return{accessToken:e.app.accessToken,refreshToken:e.app.refreshToken}}),W)(Object(l.c)((function(e){var n=e.history,t=e.setRefreshTokene,r=e.setAccessTokene,i=(e.accessToken,e.refreshToken,Object(c.useContext)(F.a)),l=Object(p.c)({verb:"POST",path:i+F.b.sendOtp}),b=l.mutate,f=(l.sendOtpLoading,Object(p.c)({verb:"POST",path:i+F.b.verifyOtp})),h=f.mutate,g=(f.verifyOtpLoading,function(){var e=Object(a.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.b.loading({content:"Sending Otp",duration:0}),e.next=4,b({phoneNumber:n});case 4:return t=e.sent,s.b.destroy(),!0===t.status?s.b.success({duration:2,content:"Otp Sent"}):s.b.error({duration:2,content:t.data.message}),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),s.b.destroy(),s.b.error({duration:2,content:e.t0.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()),x=function(){var e=Object(a.a)(o.a.mark((function e(a){var i,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.b.loading({content:"Verifying Otp",duration:0}),e.next=4,h(a);case 4:return i=e.sent,s.b.destroy(),!0===i.status?(s.b.success({duration:2,content:"OTP Verified... Logged In"}),r(i.accessToken),t(i.refreshToken),c=d.a.parse(n.location.search),n.push(c.redirectBack?c.redirectBack:"/")):s.b.error({duration:2,content:i.data.message}),e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),s.b.destroy(),s.b.error({duration:2,content:e.t0.data.message});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();return u.a.createElement("div",{style:{padding:"20px 0 0",width:"100%",minHeight:"100vh",position:"relative",display:"grid",placeItems:"center",background:"white"}},u.a.createElement("div",{style:{maxWidth:"500px",height:"100%",width:"100%",overflowX:"hidden"}},u.a.createElement(J,null,"OnePlace Universe"),u.a.createElement(m.e,{size:"xl"}),u.a.createElement("div",{align:"center"},u.a.createElement("img",{style:{position:"relative",zIndex:"100"},src:"https://onelinkie.s3.ap-south-1.amazonaws.com/76f5d642-2efe-4bc0-8743-df58baf1b740-login_banner_cropped2.png",width:"80%",alt:"login_banner"})),u.a.createElement(m.e,{size:"xl"}),u.a.createElement(H,null,u.a.createElement("div",{style:{height:"390px",width:"100%",position:"absolute",top:"-2px",left:"-5px",right:0,zIndex:"10",overflow:"hidden"}},u.a.createElement("img",{width:"100%",src:"https://onelinkie.s3.ap-south-1.amazonaws.com/7b5e7196-b731-4b2c-a067-9caf4bda0d75-group-219%403x.png",alt:""})),u.a.createElement("div",{style:{position:"relative",background:"transparent",padding:"80px 20px 0",zIndex:"12"}},u.a.createElement(Y,{sendOtp:g,onSubmit:x})))))})))}}]);
//# sourceMappingURL=loginDefault.761b90bb.chunk.js.map