(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[1],{522:function(e,t,n){"use strict";n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return F})),n.d(t,"f",(function(){return D})),n.d(t,"e",(function(){return X}));var r=n(211),a=n(178),o=n(179),i=n(180),c=n(181),l=n(0),u=n.n(l),s=n(464),d=n(788),p=s.a.Item,f=(u.a.Component,n(779)),m=s.a.Item,h=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onChangeHandler=function(e){var t=e.file,n=e.fileList;r.props.arrayHelpers;if("uploading"===t.status&&r.props.setload(!0),"done"==t.status){if(r.props.setload(!1),t.response){var a=t.response&&t.response.upload;a&&r.props.input.onChange(a)}}else"removed"==t.status&&(r.props.setload(!1),r.props.input.onChange(""));r.setState({fileList:n})},r.handleCancel=function(){return r.setState({previewVisible:!1})},r.handleChange=function(e){var t=e.fileList;return r.setState({fileList:t})},r.state={previewVisible:!1,previewImage:"",fileList:e.value?[e.value]:[]},r}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.label,a=t.className,o=t.children,i=t.meta,c=t.handleBlur,l=t.aspect,s=this.state,p=(s.previewVisible,s.previewImage,s.fileList),h=u.a.createElement("div",null,u.a.createElement("div",{className:"ant-upload-text"},n));return console.log("Meta",i),u.a.createElement(m,(e={validateStatus:""},Object(r.a)(e,"validateStatus",i.touched&&i.error&&"error"),Object(r.a)(e,"extra",i.touched&&i.error),e),u.a.createElement("div",{className:"clearfix antd-upload-custom-wrapper ".concat(a)},u.a.createElement(f.a,{aspect:l,grid:!0,quality:1,rotate:!0},u.a.createElement(d.a,{onFocus:c,action:"https://onelinkie-server-nestjs.herokuapp.com/upload",listType:"picture-card",fileList:p,onPreview:this.handlePreview,onChange:this.onChangeHandler},p.length>=1?null:h,o)))," ")}}]),n}(u.a.Component),b=n(19),g=n(17),v=n(791),k=n(12);function w(){var e=Object(g.a)(["\n  /* display:block; */\n"]);return w=function(){return e},e}var y=Object(k.b)(v.a)(w()),x=Object(k.c)((function(e){var t=e.children,n=Object(b.a)(e,["children"]),r=n.formik,a=r.setFieldValue,o=r.handleBlur,i=n.name,c=n.meta;return u.a.createElement(s.a.Item,{validateStatus:c.touched&&c.error&&"error",extra:c.touched&&c.error},u.a.createElement(y,Object.assign({onBlur:o},n,{onChange:function(e){a(i,e.target.value)}}),t))}));function j(){var e=Object(g.a)(["\n  /* display:block; */\n"]);return j=function(){return e},e}var O=v.a.TextArea,C=Object(k.b)(O)(j()),E=Object(k.c)((function(e){var t=e.children,n=Object(b.a)(e,["children"]),r=n.formik,a=r.setFieldValue,o=r.handleBlur,i=n.name,c=n.meta;return console.log("textarea",n),u.a.createElement(s.a.Item,{validateStatus:c.touched&&c.error&&"error",extra:c.touched&&c.error},u.a.createElement(C,Object.assign({onBlur:o},n,{onChange:function(e){a(i,e.target.value)}}),t))})),I=function(e){var t=e.children,n=Object(b.a)(e,["children"]);return u.a.createElement(s.a,n,t)},V=(n(793),n(488)),F=function(e){var t=e.children,n=e.type,r=Object(b.a)(e,["children","type"]);return u.a.createElement(V.a,Object.assign({type:n},r),t)},S=n(524),B=n(789),L=n(14),A=n(479);function R(){var e=Object(g.a)(["\n  color: white;\n  padding-left: 20px;\n  font-size: 15px;\n  /* word-spacing:-3px; */\n  font-family: Rubik;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n"]);return R=function(){return e},e}function H(){var e=Object(g.a)(["\n  background: white !important;\n  border-radius: 7px;\n  border: solid 2px #d8d8d8;\n  height: 60px !important;\n  font-size: 20px;\n  padding: 0 10px;\n  caret-color: #4643d3;\n  color: #4643d3 !important;\n  font-family: Rubik;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  input {\n    background: transparent !important;\n    caret-color: white;\n    color: #4643d3 !important;\n    font-size: 15px;\n    /* word-spacing:-3px; */\n    font-family: Rubik;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n  }\n  input:focus {\n    caret-color: #4643d3;\n    color: #4643d3;\n    background-color: transparent !important;\n  }\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus {\n    transition: background-color 5000s ease-in-out 0s;\n    -webkit-text-fill-color: #4643d3;\n    caret-color: #4643d3;\n    color: #4643d3;\n    background-color: transparent !important;\n  }\n"]);return H=function(){return e},e}function T(){var e=Object(g.a)(["\n  position: relative;\n  height: 60px;\n  padding: 0px 0px 0px 10px;\n  overflow: hidden;\n  /* text-align: center; */\n  /* display: grid;\n  place-items: center; */\n\n  background: transparent;\n  border: 1px solid #ebedf0;\n  border-radius: 7px;\n  margin-bottom: 20px;\n  .ant-drawer-mask {\n    background-color: transparent !important;\n  }\n  .ant-drawer-content-wrapper {\n    width: 100% !important;\n    .ant-drawer-content {\n      background: transparent !important;\n      .ant-drawer-wrapper-body {\n        .ant-drawer-body {\n          padding: 0;\n          padding-left: 10px;\n          background: white !important;\n          .social-wrapper {\n            /* background: red; */\n            scrollbar-width: none; /* Firefox */\n            /* -ms-overflow-style: none; */\n            /* width: 0px; */\n            /* background: transparent;  */\n          }\n          /* .social-wrapper::-webkit-scrollbar {\n          } */\n        }\n        .ant-drawer-header {\n          .ant-drawer-title {\n          }\n        }\n      }\n    }\n  }\n"]);return T=function(){return e},e}var z=s.a.Item,M=k.b.div(T()),_=Object(k.b)(x)(H()),N=k.b.div(R()),q=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).showDrawer=function(){r.setState({visible:!0})},r.onClose=function(){r.setState({visible:!1})},r.socialClickHandler=function(e){r.setState({visible:!1}),r.add(e)},r.add=function(e){var t;t={link:"",category:e},r.props.arrayHelpers.push(t)},r.state={visible:!1},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.visible,n=this.props,r=n.socialMediaCategoryList,a=n.name,o=n.values,i=n.arrayHelpers;console.log("renderdynamic",r);var c=null,l=r.filter((function(e){return!o.find((function(t){return t.category===e._id}))})),s=function(e){var t=r&&r.find((function(t){return t._id===e}));return t&&t.image&&t.image.url};return o&&(c=o.map((function(e,t){return u.a.createElement(z,{required:!1,key:t,style:{marginBottom:"0"}},u.a.createElement(S.a,{name:"".concat(a,"[").concat(t,"].link"),component:_,placeholder:"Link",prefix:u.a.createElement("img",{src:s(e.category),alt:"",width:"26px",height:"26px",style:{marginRight:"10px"}}),suffix:u.a.createElement(A.g,{style:{color:"red",fontSize:"30px",width:"40px",marginRight:"-10px"},onClick:function(){return i.remove(t)}}),type:"text",label:"Link",value:e.link,key:t}))}))),u.a.createElement("div",null,u.a.createElement(z,{label:this.props.label},c,l&&0!==l.length&&u.a.createElement(M,null,u.a.createElement("div",{style:{width:"100%",marginTop:"15px"},align:"left",onClick:this.showDrawer},!t&&u.a.createElement(L.c,null,u.a.createElement(L.c.Item,{style:{width:"fit-content",flex:0}},u.a.createElement(A.h,{size:26,style:{color:"white"}})),u.a.createElement(L.c.Item,{style:{flex:4}},u.a.createElement(N,null,"Add Social Media")))),u.a.createElement(B.a,{placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement("div",{className:"social-wrapper",style:{width:"100%",overflowX:"scroll"}},u.a.createElement(L.c,{justify:"left",style:{width:"fit-content",marginTop:"13px"}},u.a.createElement(A.d,{onClick:this.onClose,style:{color:"#4643D3",marginRight:"10px"},size:26}),l.map((function(t,n){return u.a.createElement("img",{src:t&&t.image&&t.image.url,alt:"",width:"26px",height:"26px",style:{marginRight:"10px"},onClick:function(n){return e.socialClickHandler(t._id)}})}))))))))}}]),n}(u.a.Component),D=Object(k.c)(q),P=n(790),J=(s.a.Item,P.a.Option,n(794)),X=function(e){var t=e.children,n=Object(b.a)(e,["children"]);return u.a.createElement(J.a,n,t)}},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return k}));var r=n(94),a=n(178),o=n(179),i=n(180),c=n(181),l=n(0),u=n.n(l),s=n(521),d=n(688),p=n(689),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onChange=function(e,t){console.log("onChange",e,t,r.props);var n=r.props,a=n.formik,o=n.onChange,i=n.type;o&&o(e),"image"===i||"media"===i?a.setFieldValue(r.props.name,e):e._isAMomentObject&&t||Array.isArray(e)&&e[0]._isAMomentObject&&e[1]._isAMomentObject&&t?r.props.formik.setFieldValue(r.props.name,t):Object(p.isString)(e)||Object(p.isNumber)(e)?r.props.formik.setFieldValue(r.props.name,e):e&&e.target&&"radio"==e.target.type?r.props.formik.setFieldValue(e.target.name,e.target.value):e&&e.target&&e.target.checked?r.props.formik.setFieldValue(e.target.name,e.target.checked):e&&e.target&&"number"==e.target.type?r.props.formik.setFieldValue(e.target.name,parseInt(e.target.value)):a.handleChange(e)},r.onBlur=function(e){var t=r.props,n=t.formik,a=t.onBlur,o=t.name;a?a(e):n.setFieldTouched(o,!0)},r.onChangeText=function(e){var t=r.props,n=t.formik,a=t.onChangeText,o=t.onChange,i=t.name;o&&!a?o(e):a?a(e):n.setFieldValue(i,e)},r.props=e,r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.formik,n=e.component,a=e.name,o=e.defaultChecked,i=e.disabled,c=this.props.defaultValue,l=this.props,s=l.value,p=l.checked;s=s||"",p=p||!1;var f={touched:Object(d.get)(t.touched,a),error:Object(d.get)(t.errors,a)},m={onBlur:this.onBlur,name:a,value:s,checked:p,defaultValue:c,defaultChecked:o,disabled:i};return m.onChange=this.onChange,u.a.createElement(n,Object(r.a)(Object(r.a)({},this.props),{},{input:m,meta:f}))}}]),n}(l.Component),m=Object(s.b)(f),h=function(e){return e?void 0:"Field Required"},b=function(e){return function(t){return t&&t.length>e?"Input shouldn't be bigger than ".concat(e," characters"):void 0}},g=function(e){return function(t){return t&&t.length<e?"Input should be bigger than ".concat(e," characters"):void 0}},v=function(e){return e&&!/^(\+)?([ 0-9]){10,16}$/i.test(e)?"Input is not a phone number":void 0},k=function(e,t){var n=function e(t,n,r){return Object.keys(n).filter((function(e){return n.hasOwnProperty(e)})).forEach((function(a){var o=n[a];Array.isArray(o)?o.forEach((function(e){var n=e(t[a],t);n&&(r[a]=n)})):e(t[a],n[a],r)})),r}(e,t,{});return Object.keys(n).length?n:void 0}}}]);
//# sourceMappingURL=1.f74316c8.chunk.js.map