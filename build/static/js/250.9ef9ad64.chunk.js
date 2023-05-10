"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[250],{75697:function(e,n,t){t.d(n,{AB:function(){return c},Rn:function(){return u},ec:function(){return s},gg:function(){return l},oB:function(){return d}});var r=t(61805),i=t(66212),a=t(36594),o=t(46417),s=function(e){return e===r.R2.PENDING?(0,o.jsx)(i.Z,{color:"secondary",label:"Pending"}):e===r.R2.ONPROGRESS?(0,o.jsx)(i.Z,{color:"primary",label:"On Progress"}):e===r.R2.COMPLETE?(0,o.jsx)(i.Z,{color:"success",label:"Complete"}):void 0},c=function(e){return e===r.SU.PENDING?(0,o.jsx)(i.Z,{color:"secondary",label:"Pending"}):e===r.SU.VERIFIED?(0,o.jsx)(i.Z,{color:"warning",label:"Verified"}):e===r.SU.APPROVED?(0,o.jsx)(i.Z,{color:"success",label:"Approved"}):e===r.SU.PAID?(0,o.jsx)(i.Z,{color:"primary",label:"Paid"}):e===r.SU.REJECTED?(0,o.jsx)(i.Z,{color:"error",label:"Rejected"}):void 0},l=function(e){return new Date(e).toLocaleString()},u=function(e){(0,a.nD)().then((function(n){console.log(n),e(n)})).catch((function(e){console.log(e)}))},d=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}},77841:function(e,n,t){var r=t(15671),i=t(43144),a=t(58976),o=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,[{key:"success",value:function(e){a.s&&a.s.enqueueSnackbar(e,{variant:"success"})}},{key:"error",value:function(e){a.s&&a.s.enqueueSnackbar(e,{variant:"error"})}}]),e}();n.Z=new o},22778:function(e,n,t){var r=t(74165),i=t(15861),a=t(29439),o=t(9019),s=t(42832),c=t(23306),l=t(49914),u=t(15480),d=t(88797),p=t(51405),m=t(7410),h=t(28089),f=t(69490),v=t(51406),g=t(47313),b=t(46417);n.Z=function(e){var n=e.onSubmitForm,t=e.role_options,Z=e.loading,x=e.initial_role,j=void 0===x?"":x,y=e.initialValues,S=void 0===y?null:y,P=(0,g.useState)(j),C=(0,a.Z)(P,2),w=C[0],_=C[1],R=(0,g.useState)(!1),E=(0,a.Z)(R,2),k=E[0],N=E[1];return console.log("Initial Values",S),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(m.J9,{initialValues:null===S?{first_name:"",last_name:"",cellphone:"",email:"",role:""}:S,validationSchema:h.Ry().shape({email:h.Z_().email("Must be a valid email").max(255).required("Email is required"),first_name:h.Z_().max(255).required("First Name is required"),last_name:h.Z_().max(255).required("Last Name is required"),cellphone:h.Z_().max(9).min(9).required("Phone Number is required")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setErrors,i.setStatus,i.setSubmitting,""!==w&&(t.role=w,n(t));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,i=e.handleChange,a=e.handleSubmit,m=(e.isSubmitting,e.touched),h=e.values;return(0,b.jsxs)("form",{noValidate:!0,onSubmit:function(e){N(""===w),a(e)},children:[(0,b.jsxs)(o.ZP,{container:!0,spacing:3,mb:3,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{htmlFor:"bootstrap",children:"First Name"}),(0,b.jsx)(l.Z,{id:"email-login",type:"text",value:h.first_name,name:"first_name",onBlur:r,onChange:i,placeholder:"eg. John",fullWidth:!0,error:Boolean(m.first_name&&n.first_name)}),m.first_name&&n.first_name&&(0,b.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.first_name})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{htmlFor:"bootstrap",children:"Last Name"}),(0,b.jsx)(l.Z,{id:"email-login",type:"text",value:h.last_name,name:"last_name",onBlur:r,onChange:i,placeholder:"eg. Doe",fullWidth:!0,error:Boolean(m.last_name&&n.last_name)}),m.last_name&&n.last_name&&(0,b.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.last_name})]})})]}),(0,b.jsxs)(o.ZP,{container:!0,spacing:3,mb:3,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{htmlFor:"bootstrap",children:"Phone Number"}),(0,b.jsx)(l.Z,{id:"email-login",type:"number",value:h.cellphone,name:"cellphone",onBlur:r,onChange:i,placeholder:"eg. 0711111111",fullWidth:!0,error:Boolean(m.cellphone&&n.cellphone)}),m.cellphone&&n.cellphone&&(0,b.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.cellphone})]})}),(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{htmlFor:"bootstrap",children:"Email Address"}),(0,b.jsx)(l.Z,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:r,onChange:i,placeholder:"eg. example@gmail.com",fullWidth:!0,error:Boolean(m.email&&n.email)}),m.email&&n.email&&(0,b.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})})]}),(0,b.jsxs)(o.ZP,{container:!0,spacing:3,mb:3,children:[(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsxs)(s.Z,{spacing:1,children:[(0,b.jsx)(c.Z,{htmlFor:"bootstrap",children:"Role"}),(0,b.jsx)(d.Z,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",value:w,onChange:function(e){N(!1),_(e.target.value)},error:Boolean(k),children:t.map((function(e,n){return(0,b.jsx)(p.Z,{value:e.id,children:e.title},n)}))}),k&&(0,b.jsx)(u.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:"Select Role"})]})}),n.submit&&(0,b.jsx)(o.ZP,{item:!0,xs:12,children:(0,b.jsx)(u.Z,{error:!0,children:n.submit})})]}),(0,b.jsx)(o.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mg:3,children:(0,b.jsx)(o.ZP,{item:!0,xs:6,children:(0,b.jsx)(f.Z,{children:(0,b.jsx)(v.Z,{disableElevation:!0,disabled:Z,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",loading:Z,children:"Submit"})})})})]})}})})}},36594:function(e,n,t){t.d(n,{AG:function(){return _},Bl:function(){return N},Bm:function(){return R},CT:function(){return j},GV:function(){return Z},Gn:function(){return P},HL:function(){return C},JN:function(){return E},OP:function(){return m},PB:function(){return g},Qb:function(){return u},SP:function(){return S},Um:function(){return f},b6:function(){return k},gi:function(){return h},kl:function(){return x},l2:function(){return y},nD:function(){return v},r2:function(){return b},rW:function(){return p},vy:function(){return d},xr:function(){return w}});var r=t(56573),i=t(41209),a=t(58976);function o(e,n){return new Promise((function(t,a){r.Z.post(i.D.apiURL+e,n).then((function(e){e.headers,t(e.data)})).catch((function(e){e.response&&(401===e.response.status||400===e.response.status||500===e.response.status||e.response&&429===e.response.status||console.log("Error occurred, status: "+e.response.status)),console.log(e),a(e)}))}))}function s(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(o,s){r.Z.get(i.D.apiURL+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response?e.response&&401===e.response.status&&n&&!t||e.response&&e.response.status:a.s&&a.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),s(e)}))}))}function c(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,s){r.Z.post(i.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!a||(e.response&&e.response.status,s(e))}))}))}function l(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,s){r.Z.put(i.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!a||(e.response&&e.response.status,s(e))}))}))}function u(e,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),o("api/auth/login",{email:e,password:n},!1)}function d(e,n,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return""!==r&&(i.mfaCode=r),c("api/auth/reset-password/"+t,{password:e,confirm_password:n},!1)}function p(){return s("api/v1/users-list/")}function m(e){return c("api/v1/register-user",e)}function h(e){return s("api/v1/user/"+e)}function f(e,n){return l("api/v1/user/"+e,n)}function v(){return s("api/v1/roles")}function g(e){return c("api/v1/bls",e)}function b(){return s("api/v1/bls-list/")}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[n?"include_charges=".concat("true"):"",t?"include_timeline=".concat("true"):""].filter(Boolean).join("&"),i="api/v1/bl/".concat(e).concat(r?"?".concat(r):"");return s(i)}function x(e){return s("api/v1/bl-attachments?bl_id="+e)}function j(){return s("api/v1/charges-list/")}function y(){return s("api/v1/bl-charges-list/")}function S(e){return c("api/v1/bl-charges",e)}function P(e){return s("api/v1/bl-charge/"+e)}function C(e,n){return l("api/v1/bl-charge/"+e,n)}function w(e){return s("api/v1/bl-charge-attachments?bl_charge_id="+e)}function _(e){return c("api/v1/vouchers",e)}function R(){return s("api/v1/vouchers-list/")}function E(e){return s("api/v1/voucher/"+e)}function k(e,n){return l("api/v1/voucher/"+e,n)}function N(e){return s("api/v1/voucher-attachments?voucher_id="+e)}},41209:function(e,n,t){t.d(n,{D:function(){return r}});var r={socketURL:"ws://127.0.0.1:5500/",mediaURL:"http://161.35.210.153:5000/media/v1/",apiURL:"http://161.35.210.153/"}},61805:function(e,n,t){t.d(n,{R2:function(){return i},SU:function(){return r},sy:function(){return a}});var r={PENDING:0,VERIFIED:1,APPROVED:2,PAID:3,REJECTED:4},i={PENDING:0,ONPROGRESS:1,COMPLETE:2},a={DETAILS:"0",ATTACHMENTS:"1",BL_CHARGES:"2"}},51405:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(4942),i=t(63366),a=t(87462),o=t(47313),s=t(83061),c=t(21921),l=t(17551),u=t(17592),d=t(77342),p=t(51195),m=t(67999),h=t(24993),f=t(86983),v=t(99273),g=t(37363),b=t(11081),Z=t(77430),x=t(32298);function j(e){return(0,x.Z)("MuiMenuItem",e)}var y=(0,Z.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=t(46417),P=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=(0,u.ZP)(m.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.dense&&n.dense,t.divider&&n.divider,!t.disableGutters&&n.gutters]}})((function(e){var n,t=e.theme,i=e.ownerState;return(0,a.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},(n={"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(n,"&.".concat(y.selected),(0,r.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,r.Z)(n,"&.".concat(y.selected,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}),(0,r.Z)(n,"&.".concat(y.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,r.Z)(n,"&.".concat(y.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,r.Z)(n,"& + .".concat(v.Z.root),{marginTop:t.spacing(1),marginBottom:t.spacing(1)}),(0,r.Z)(n,"& + .".concat(v.Z.inset),{marginLeft:52}),(0,r.Z)(n,"& .".concat(b.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(n,"& .".concat(b.Z.inset),{paddingLeft:36}),(0,r.Z)(n,"& .".concat(g.Z.root),{minWidth:36}),n),!i.dense&&(0,r.Z)({},t.breakpoints.up("sm"),{minHeight:"auto"}),i.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,(0,r.Z)({},"& .".concat(g.Z.root," svg"),{fontSize:"1.25rem"})))})),w=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiMenuItem"}),r=t.autoFocus,l=void 0!==r&&r,u=t.component,m=void 0===u?"li":u,v=t.dense,g=void 0!==v&&v,b=t.divider,Z=void 0!==b&&b,x=t.disableGutters,y=void 0!==x&&x,w=t.focusVisibleClassName,_=t.role,R=void 0===_?"menuitem":_,E=t.tabIndex,k=t.className,N=(0,i.Z)(t,P),O=o.useContext(p.Z),D=o.useMemo((function(){return{dense:g||O.dense||!1,disableGutters:y}}),[O.dense,g,y]),I=o.useRef(null);(0,h.Z)((function(){l&&I.current&&I.current.focus()}),[l]);var B,F=(0,a.Z)({},t,{dense:D.dense,divider:Z,disableGutters:y}),L=function(e){var n=e.disabled,t=e.dense,r=e.divider,i=e.disableGutters,o=e.selected,s=e.classes,l={root:["root",t&&"dense",n&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},u=(0,c.Z)(l,j,s);return(0,a.Z)({},s,u)}(t),G=(0,f.Z)(I,n);return t.disabled||(B=void 0!==E?E:-1),(0,S.jsx)(p.Z.Provider,{value:D,children:(0,S.jsx)(C,(0,a.Z)({ref:G,role:R,tabIndex:B,component:m,focusVisibleClassName:(0,s.Z)(L.focusVisible,w),className:(0,s.Z)(L.root,k)},N,{ownerState:F,classes:L}))})}))}}]);