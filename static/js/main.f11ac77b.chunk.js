(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={input:"SuperInputText_input__rtV2C",superInput:"SuperInputText_superInput__1Y55M",errorInput:"SuperInputText_errorInput__3B7v8",error:"SuperInputText_error__2beGe"}},15:function(e,t,n){e.exports={default:"SuperButton_default__1kaxV",red:"SuperButton_red__29jGE"}},16:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1N4tn",spanClassName:"SuperCheckbox_spanClassName__1_4FG"}},17:function(e,t,n){e.exports={select:"SuperSelect_select__1APbL",option:"SuperSelect_option__KB0PN"}},18:function(e,t,n){e.exports={radio:"SuperRadio_radio__2OvV4",label:"SuperRadio_label__WgozY"}},20:function(e,t,n){e.exports={App:"App_App__3pXpP"}},28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),s=n.n(r),o=(n(28),n(20)),i=n.n(o),j=n(2),l=n(1),u=function(){return Object(l.jsx)(l.Fragment,{children:"Login"})},p=function(){return Object(l.jsx)(l.Fragment,{children:"Registration"})},d=function(){return Object(l.jsx)(l.Fragment,{children:"Profile"})},b=function(){return Object(l.jsx)(l.Fragment,{children:"RecoveryPassword"})},h=function(){return Object(l.jsx)(l.Fragment,{children:"NewPassword"})},x=function(){return Object(l.jsx)(l.Fragment,{children:"Error404"})},O=n(8),m=n(6),g=n(10),f=n.n(g),v=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(m.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(f.a.error," ").concat(o||""),u="".concat(f.a.input," ").concat(r?f.a.errorInput:f.a.superInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:u},i)),r&&Object(l.jsx)("span",{className:j,children:r})]})},_=n(15),C=n.n(_),N=function(e){var t=e.red,n=e.className,c=Object(m.a)(e,["red","className"]),a="".concat(t?C.a.red:C.a.default," ").concat(n);return Object(l.jsx)("button",Object(O.a)({className:a},c))},y=n(16),w=n.n(y),P=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(m.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(w.a.checkbox," ").concat(c||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(l.jsx)("span",{className:w.a.spanClassName,children:a})]})},S=n(17),k=n.n(S),F=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(m.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(l.jsx)("option",{className:k.a.option,value:e,children:e},t)})):[];return Object(l.jsx)("select",Object(O.a)(Object(O.a)({className:k.a.select,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},T=n(18),I=n.n(T),E=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=(Object(m.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(l.jsxs)("label",{className:I.a.label,children:[Object(l.jsx)("input",{className:I.a.radio,type:"radio",name:t,checked:e===c,value:e,onChange:s}),e]},n)})):[];return Object(l.jsx)(l.Fragment,{children:o})},B=function(){return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100px"},children:[Object(l.jsx)(v,{}),Object(l.jsx)(N,{children:"Click"}),Object(l.jsx)(P,{}),Object(l.jsx)(F,{}),Object(l.jsx)(E,{})]})},W=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{path:"/login",element:Object(l.jsx)(u,{})}),Object(l.jsx)(j.a,{path:"/registration",element:Object(l.jsx)(p,{})}),Object(l.jsx)(j.a,{path:"/profile",element:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{path:"/recoveryPassword",element:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{path:"/newPassword",element:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/superComponents",element:Object(l.jsx)(B,{})}),Object(l.jsx)(j.a,{path:"*",element:Object(l.jsx)(x,{})})]})})},A=n(5),L=n(7),K=n.n(L),R=function(){return Object(l.jsxs)("div",{className:K.a.headerCont,children:[Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/login",children:"Login"})}),Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/registration",children:"registration"})}),Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/profile",children:"profile"})}),Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/recoveryPassword",children:"recoveryPassword"})}),Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/newPassword",children:"newPassword"})}),Object(l.jsx)("div",{className:K.a.item,children:Object(l.jsx)(A.b,{to:"/error404",children:"error404"})}),Object(l.jsx)("div",{className:"".concat(K.a.item," ").concat(K.a.active),children:Object(l.jsx)(A.b,{to:"/superComponents",children:"superComponents"})})]})};var G=function(){return Object(l.jsxs)("div",{className:i.a.App,children:[Object(l.jsx)(R,{}),Object(l.jsx)(W,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},V=n(23),Y=n(13),D=n(22),H={},M={},z={},X={},q={},Q=Object(Y.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return{state:e};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return{state:e};default:return e}},recoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return{state:e};default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return{state:e};default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW":return{state:e};default:return e}}}),U=Object(Y.c)(Q,Object(Y.a)(D.a));window.store=U,s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(A.a,{children:Object(l.jsx)(V.a,{store:U,children:Object(l.jsx)(G,{})})})}),document.getElementById("root")),J()},7:function(e,t,n){e.exports={headerCont:"Header_headerCont__1Tdbl",item:"Header_item__aoYpJ"}}},[[36,1,2]]]);
//# sourceMappingURL=main.f11ac77b.chunk.js.map