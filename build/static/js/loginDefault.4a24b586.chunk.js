(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[3],{322:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(69),a=n(126),o=n(127),i=n(128),c=n(129),l=n(0),u=n.n(l),s=n(340),p=n(455),d=n(456),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onChange=function(e,t){console.log("onChange",e,t,r.props);var n=r.props,a=n.formik,o=n.onChange,i=n.type;o&&o(e),"image"===i||"media"===i?a.setFieldValue(r.props.name,e):e._isAMomentObject&&t||Array.isArray(e)&&e[0]._isAMomentObject&&e[1]._isAMomentObject&&t?r.props.formik.setFieldValue(r.props.name,t):Object(d.isString)(e)||Object(d.isNumber)(e)?r.props.formik.setFieldValue(r.props.name,e):e&&e.target&&"radio"==e.target.type?r.props.formik.setFieldValue(e.target.name,e.target.value):e&&e.target&&e.target.checked?r.props.formik.setFieldValue(e.target.name,e.target.checked):e&&e.target&&"number"==e.target.type?r.props.formik.setFieldValue(e.target.name,parseInt(e.target.value)):a.handleChange(e)},r.onBlur=function(e){var t=r.props,n=t.formik,a=t.onBlur,o=t.name;a?a(e):n.setFieldTouched(o,!0)},r.onChangeText=function(e){var t=r.props,n=t.formik,a=t.onChangeText,o=t.onChange,i=t.name;o&&!a?o(e):a?a(e):n.setFieldValue(i,e)},r.props=e,r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.formik,n=e.component,a=e.name,o=e.defaultChecked,i=e.disabled,c=this.props.defaultValue,l=this.props,s=l.value,d=l.checked;s=s||"",d=d||!1;var f={touched:Object(p.get)(t.touched,a),error:Object(p.get)(t.errors,a)},m={onBlur:this.onBlur,name:a,value:s,checked:d,defaultValue:c,defaultChecked:o,disabled:i};return m.onChange=this.onChange,u.a.createElement(n,Object(r.a)(Object(r.a)({},this.props),{},{input:m,meta:f}))}}]),n}(l.Component),m=Object(s.b)(f),b=function(e){return e?void 0:"Field Required"},h=function(e){return function(t){return t&&t.length>e?"Input shouldn't be bigger than ".concat(e," characters"):void 0}},g=function(e){return function(t){return t&&t.length<e?"Input should be bigger than ".concat(e," characters"):void 0}},v=function(e){return e&&!/^(\+)?([ 0-9]){10,16}$/i.test(e)?"Input is not a phone number":void 0},x=function(e,t){var n=function e(t,n,r){return Object.keys(n).filter((function(e){return n.hasOwnProperty(e)})).forEach((function(a){var o=n[a];Array.isArray(o)?o.forEach((function(e){var n=e(t[a],t);n&&(r[a]=n)})):e(t[a],n[a],r)})),r}(e,t,{});return Object.keys(n).length?n:void 0}},371:function(e,t,n){"use strict";n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return S})),n.d(t,"e",(function(){return D}));var r=n(142),a=n(126),o=n(127),i=n(128),c=n(129),l=n(0),u=n.n(l),s=n(757),p=n(758),d=s.a.Item,f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onChangeHandler=function(e){var t=e.file,n=e.fileList;r.props.arrayHelpers;if("uploading"===t.status&&r.props.setload(!0),"done"==t.status){if(r.props.setload(!1),t.response){var a=t.response&&t.response.upload;a&&r.props.input.onChange(a)}}else"removed"==t.status&&(r.props.setload(!1),r.props.input.onChange(""));r.setState({fileList:n})},r.handleCancel=function(){return r.setState({previewVisible:!1})},r.handleChange=function(e){var t=e.fileList;return r.setState({fileList:t})},r.state={previewVisible:!1,previewImage:"",fileList:e.value?[e.value]:[]},r}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.label,a=t.className,o=t.children,i=t.meta,c=t.handleBlur,l=this.state,s=(l.previewVisible,l.previewImage,l.fileList),f=u.a.createElement("div",null,u.a.createElement("div",{className:"ant-upload-text"},n));return console.log("Meta",i),u.a.createElement(d,(e={validateStatus:""},Object(r.a)(e,"validateStatus",i.touched&&i.error&&"error"),Object(r.a)(e,"extra",i.touched&&i.error),e),u.a.createElement("div",{className:"clearfix antd-upload-custom-wrapper ".concat(a)},u.a.createElement(p.a,{onFocus:c,action:"https://onelinkie-server-nestjs.herokuapp.com/upload",listType:"picture-card",fileList:s,onPreview:this.handlePreview,onChange:this.onChangeHandler},s.length>=1?null:f,o))," ")}}]),n}(u.a.Component),m=n(15),b=n(14),h=n(762),g=n(10);function v(){var e=Object(b.a)(["\n  /* display:block; */\n"]);return v=function(){return e},e}var x=Object(g.b)(h.a)(v()),k=Object(g.c)((function(e){var t=e.children,n=Object(m.a)(e,["children"]),r=n.formik,a=r.setFieldValue,o=r.handleBlur,i=n.name,c=n.meta;return u.a.createElement(s.a.Item,{validateStatus:c.touched&&c.error&&"error",extra:c.touched&&c.error},u.a.createElement(x,Object.assign({onBlur:o},n,{onChange:function(e){a(i,e.target.value)}}),t))}));function y(){var e=Object(b.a)(["\n  /* display:block; */\n"]);return y=function(){return e},e}var w=h.a.TextArea,O=Object(g.b)(w)(y()),j=Object(g.c)((function(e){var t=e.children,n=Object(m.a)(e,["children"]),r=n.formik,a=r.setFieldValue,o=r.handleBlur,i=n.name,c=n.meta;return console.log("textarea",n),u.a.createElement(s.a.Item,{validateStatus:c.touched&&c.error&&"error",extra:c.touched&&c.error},u.a.createElement(O,Object.assign({onBlur:o},n,{onChange:function(e){a(i,e.target.value)}}),t))})),E=function(e){var t=e.children,n=Object(m.a)(e,["children"]);return u.a.createElement(s.a,n,t)},C=(n(766),n(503)),S=function(e){var t=e.children,n=e.type,r=Object(m.a)(e,["children","type"]);return u.a.createElement(C.a,Object.assign({type:n},r),t)},z=n(322),T=n(760),I=n(12),F=n(317);function A(){var e=Object(b.a)(["\n  color: white;\n  padding-left: 20px;\n  font-size: 15px;\n  word-spacing:-3px;\n  font-family: Circular Std Medium;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n"]);return A=function(){return e},e}function N(){var e=Object(b.a)(["\n  background: white !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  font-size: 20px;\n  padding: 0 10px;\n  caret-color:#4643D3;\n  color: #4643D3 !important;\n  font-family: Circular Std Medium;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  input {\n    background: transparent !important;\n    caret-color: white;\n    color: #4643D3 !important;\n    font-size: 15px;\n    word-spacing:-3px;\n    font-family: Circular Std Medium;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n  }\n  input:focus {\n    caret-color: #4643D3;\n    color: #4643D3;\n    background-color: transparent !important;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #4643D3;\n    caret-color: #4643D3;\n    color: #4643D3;\n    background-color: transparent !important;\n  }\n"]);return N=function(){return e},e}function V(){var e=Object(b.a)(["\n  position: relative;\n  height: 60px;\n  padding: 0px 0px 0px 10px;\n  overflow: hidden;\n  /* text-align: center; */\n  /* display: grid;\n  place-items: center; */\n\n  background: transparent;\n  border: 1px solid #ebedf0;\n  border-radius: 7px;\n  margin-bottom: 20px;\n  .ant-drawer-mask {\n    background-color: transparent !important;\n  }\n  .ant-drawer-content-wrapper {\n    width: 100% !important;\n    .ant-drawer-content {\n      background: transparent !important;\n      .ant-drawer-wrapper-body {\n        .ant-drawer-body {\n          padding: 0;\n          padding-left: 10px;\n          background: white !important;\n        }\n        .ant-drawer-header {\n          .ant-drawer-title {\n          }\n        }\n      }\n    }\n  }\n"]);return V=function(){return e},e}var R=s.a.Item,L=g.b.div(V()),M=Object(g.b)(k)(N()),B=g.b.div(A()),P=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).showDrawer=function(){r.setState({visible:!0})},r.onClose=function(){r.setState({visible:!1})},r.socialClickHandler=function(e){r.setState({visible:!1}),r.add(e)},r.add=function(e){var t;t={link:"",category:e},r.props.arrayHelpers.push(t)},r.state={visible:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.visible,n=this.props,r=n.socialMediaCategoryList,a=n.name,o=n.values,i=n.arrayHelpers;console.log("renderdynamic",r);var c=null,l=r.filter((function(e){return!o.find((function(t){return t.category===e._id}))})),s=function(e){var t=r&&r.find((function(t){return t._id===e}));return t&&t.image&&t.image.url};return o&&(c=o.map((function(e,t){return u.a.createElement(R,{required:!1,key:t,style:{marginBottom:"0"}},u.a.createElement(z.a,{name:"".concat(a,"[").concat(t,"].link"),component:M,placeholder:"Link",prefix:u.a.createElement("img",{src:s(e.category),alt:"",width:"26px",height:"26px",style:{marginRight:"10px"}}),suffix:u.a.createElement(F.f,{style:{color:"red",fontSize:"30px",width:"40px",marginRight:"-10px"},onClick:function(){return i.remove(t)}}),type:"text",label:"Link",value:e.link,key:t}))}))),u.a.createElement("div",null,u.a.createElement(R,{label:this.props.label},c,l&&0!==l.length&&u.a.createElement(L,null,u.a.createElement("div",{style:{width:"100%",marginTop:"15px"},align:"left",onClick:this.showDrawer},!t&&u.a.createElement(I.c,null,u.a.createElement(I.c.Item,{style:{width:"fit-content",flex:0}},u.a.createElement(F.g,{size:26,style:{color:"white"}})),u.a.createElement(I.c.Item,{style:{flex:4}},u.a.createElement(B,null,"Add Social Media")))),u.a.createElement(T.a,{placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement("div",{style:{width:"100%",overflowX:"scroll"}},u.a.createElement(I.c,{justify:"left",style:{width:"fit-content",marginTop:"13px"}},u.a.createElement(F.c,{onClick:this.onClose,style:{color:"#4643D3",marginRight:"10px"},size:26}),l.map((function(t,n){return u.a.createElement("img",{src:t&&t.image&&t.image.url,alt:"",width:"26px",height:"26px",style:{marginRight:"10px"},onClick:function(n){return e.socialClickHandler(t._id)}})}))))))))}}]),n}(u.a.Component),D=Object(g.c)(P),_=n(761);s.a.Item,_.a.Option},547:function(e,t,n){"use strict";var r=n(548),a=n(96);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e){return Array.isArray(e)?e.sort():"object"===typeof e?i(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!==typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=i(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},548:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},767:function(e,t,n){"use strict";n.r(t);var r=n(92),a=n.n(r),o=n(130),i=n(14),c=n(0),l=n.n(c),u=n(10),s=n(759),p=n(90),d=n(73),f=n(547),m=n.n(f),b=n(35),h=n(131),g=n(322),v=n(340),x=n(371),k=n(317);function y(){var e=Object(i.a)(["\n  background: transparent !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  padding: 0 20px;\n\n  font-family: Circular Std Medium;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  input {\n    background: inherit !important;\n    font-size: 15px;\n    caret-color: white;\n    color: white;\n  }\n  input:focus {\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: white;\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(i.a)(["\n  background-color: transparent !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  font-size: 15px;\n  padding: 0 20px;\n  caret-color: white;\n  color: white;\n  font-family: Circular Std Medium;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  :focus {\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: white;\n    caret-color: white;\n    color: white;\n    background-color: transparent !important;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(i.a)(["\n  font-family: Circular Std Medium;\n  /* font-size: 25px; */\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n"]);return O=function(){return e},e}function j(){var e=Object(i.a)(["\n  font-family: Circular Std Medium;\n  font-size: 30px;\n  font-weight: 1200;\n"]);return j=function(){return e},e}function E(){var e=Object(i.a)(["\n  font-family: Circular Std Medium;\n  font-size: 25px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n"]);return E=function(){return e},e}function C(){var e=Object(i.a)(["\n  border-radius: 20px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.3;\n  backdrop-filter: blur(50px);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);\n  background-color: black;\n"]);return C=function(){return e},e}function S(){var e=Object(i.a)(["\n  color: white;\n  padding: 30px 20px 32px;\n  border-radius: 20px;\n  position: relative;\n  background-color: transparent;\n  .ant-form-item-extra {\n    color: white !important;\n  }\n"]);return S=function(){return e},e}var z=u.b.div(S()),T=u.b.div(C()),I=u.b.h1(E()),F=u.b.div(j()),A=Object(u.b)(x.a)(O()),N=Object(u.b)(x.c)(w()),V=Object(u.b)(x.c)(y()),R={phoneNumber:[g.e,g.d],otp:[g.e,Object(g.c)(6)]},L=Object(v.c)({enableReinitialize:!0,mapPropsToValues:function(){return{phoneNumber:"",otp:""}},handleSubmit:function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props.onSubmit,e.next=3,r(t);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),validate:function(e){return Object(g.f)(e,R)},displayName:"LoginForm"}),M=Object(u.c)(L((function(e){var t=e.values,n=e.handleSubmit,r=e.sendOtp,i=Object(c.useState)(!1),u=Object(h.a)(i,2),p=u[0],d=u[1];console.log("phoneNumber",Object(g.d)(t.phoneNumber));var f=function(){var e=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(g.d)(t.phoneNumber),""===t.phoneNumber||n){e.next=13;break}return e.prev=2,e.next=5,r(t.phoneNumber);case 5:d(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("formerror",e.t0);case 11:e.next=14;break;case 13:s.b.error({duration:5,content:"Please enter a valid phone number"});case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(z,null,l.a.createElement(T,null),l.a.createElement(I,null,"\u201cTime to set up your"," ",l.a.createElement(F,null,"Oneplace Universe\u201d")),l.a.createElement(b.d,{size:"xl"}),l.a.createElement(x.b,{name:"login",onFinish:n},l.a.createElement(g.a,{name:"phoneNumber",component:N,type:"text",disabled:p,label:"Your 10 digit mobile number",placeholder:"Your 10 digit mobile number",value:t.phoneNumber}),l.a.createElement(b.d,{size:"xl"}),p&&l.a.createElement(g.a,{name:"otp",component:V,type:"text",label:"Enter Your OTP",placeholder:"Enter Your OTP",value:t.otp,suffix:l.a.createElement(k.a,{size:"32",style:{color:"#32b264"}})||l.a.createElement(k.d,{size:"20"})}),!p&&l.a.createElement(A,{ghost:!0,style:{borderRadius:"7px"},onClick:f,size:"large",block:!0},"Send Otp"),p&&l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{ghost:!0,style:{borderRadius:"7px"},htmlType:"submit",size:"large",block:!0},"Login"),l.a.createElement(b.d,{size:"xl"}),l.a.createElement(A,{style:{borderRadius:"7px"},onClick:function(){d(!1)},size:"large",block:!0},"Re-enter Phone Number"))))}))),B=n(91),P=n(65);function D(){var e=Object(i.a)(["\n  color: ",";\n  position: relative;\n  height: fit-content;\n  margin-top: 0px;\n  background-color: #4643d3;\n  padding-bottom:20px;\n"]);return D=function(){return e},e}function _(){var e=Object(i.a)(["\n  color: ",";\n  text-align: center;\n  font-weight: bold;\n  font-family: Circular Std Medium;\n  word-spacing: -3px;\n  /* font-weight: normal; */\n  font-stretch: normal;\n  font-style: normal;\n  font-size: 22px;\n"]);return _=function(){return e},e}var H=u.b.h2(_(),(function(e){return e.theme.textColor})),U=u.b.div(D(),(function(e){return e.theme.textColor})),$={setAccessTokene:P.b,setRefreshTokene:P.c};t.default=Object(d.b)((function(e){return console.log("mapstatetoprops",e),{accessToken:e.app.accessToken,refreshToken:e.app.refreshToken}}),$)(Object(u.c)((function(e){var t=e.history,n=e.setRefreshTokene,r=e.setAccessTokene,i=e.accessToken;e.refreshToken;console.log("loginview",i);var u=Object(c.useContext)(B.a),d=Object(p.c)({verb:"POST",path:u+B.b.sendOtp}),f=d.mutate,h=(d.sendOtpLoading,Object(p.c)({verb:"POST",path:u+B.b.verifyOtp})),g=h.mutate,v=(h.verifyOtpLoading,function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.b.loading({content:"Sending Otp",duration:0}),console.log("sentOtp",t),e.next=5,f({phoneNumber:t});case 5:return n=e.sent,console.log(n),s.b.destroy(),!0===n.status?s.b.success({duration:2,content:"Otp Sent"}):s.b.error({duration:2,content:n.data.message}),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),s.b.destroy(),console.log("error",e.t0),s.b.error({duration:2,content:e.t0.data.message});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),x=function(){var e=Object(o.a)(a.a.mark((function e(o){var i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s.b.loading({content:"Verifying Otp",duration:0}),console.log("sentOtp",o),e.next=5,g(o);case 5:return i=e.sent,console.log(i),s.b.destroy(),!0===i.status?(s.b.success({duration:2,content:"OTP Verified... Logged In"}),r(i.accessToken),n(i.refreshToken),c=m.a.parse(t.location.search),t.push(c.redirectBack?c.redirectBack:"/")):s.b.error({duration:2,content:i.data.message}),e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(0),s.b.destroy(),console.log("error",e.t0),s.b.error({duration:2,content:e.t0.data.message});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{style:{padding:"20px 0 0",width:"100%",minHeight:"100vh",position:"relative",display:"grid",placeItems:"center",background:"white"}},l.a.createElement("div",{style:{maxWidth:"500px",height:"100%",width:"100%"}},l.a.createElement(H,null,"OnePlace Universe"),l.a.createElement(b.d,{size:"xl"}),l.a.createElement("div",{align:"center"},l.a.createElement("img",{src:"https://onelinkie.s3.ap-south-1.amazonaws.com/76f5d642-2efe-4bc0-8743-df58baf1b740-login_banner_cropped2.png",width:"80%",alt:"login_banner"})),l.a.createElement(b.d,{size:"xl"}),l.a.createElement(U,null,l.a.createElement("div",{style:{height:"390px",width:"100%",position:"absolute",top:"-14px",left:0,right:0,zIndex:"10",overflow:"hidden"}},l.a.createElement("img",{width:"100%",src:"https://onelinkie.s3.ap-south-1.amazonaws.com/7b5e7196-b731-4b2c-a067-9caf4bda0d75-group-219%403x.png",alt:""})),l.a.createElement("div",{style:{position:"relative",background:"transparent",padding:"80px 20px 0",zIndex:"12"}},l.a.createElement(M,{sendOtp:v,onSubmit:x})))))})))}}]);
//# sourceMappingURL=loginDefault.4a24b586.chunk.js.map