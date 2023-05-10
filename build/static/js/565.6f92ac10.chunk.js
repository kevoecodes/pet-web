"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[565],{75697:function(n,e,t){t.d(e,{AB:function(){return s},Rn:function(){return l},ec:function(){return c},gg:function(){return a},oB:function(){return f}});var r=t(61805),o=t(66212),i=t(36594),u=t(46417),c=function(n){return n===r.R2.PENDING?(0,u.jsx)(o.Z,{color:"secondary",label:"Pending"}):n===r.R2.ONPROGRESS?(0,u.jsx)(o.Z,{color:"primary",label:"On Progress"}):n===r.R2.COMPLETE?(0,u.jsx)(o.Z,{color:"success",label:"Complete"}):void 0},s=function(n){return n===r.SU.PENDING?(0,u.jsx)(o.Z,{color:"secondary",label:"Pending"}):n===r.SU.VERIFIED?(0,u.jsx)(o.Z,{color:"warning",label:"Verified"}):n===r.SU.APPROVED?(0,u.jsx)(o.Z,{color:"success",label:"Approved"}):n===r.SU.PAID?(0,u.jsx)(o.Z,{color:"primary",label:"Paid"}):n===r.SU.REJECTED?(0,u.jsx)(o.Z,{color:"error",label:"Rejected"}):void 0},a=function(n){return new Date(n).toLocaleString()},l=function(n){(0,i.nD)().then((function(e){console.log(e),n(e)})).catch((function(n){console.log(n)}))},f=function(n){return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}},24565:function(n,e,t){t.r(e);var r=t(29439),o=t(9019),i=t(69099),u=t(70501),c=t(51629),s=t(66835),a=t(23477),l=t(24076),f=t(67478),d=t(57861),h=t(47131),p=t(62323),v=t(40621),g=t(75697),x=t(47313),m=t(58467),Z=t(32499),j=t(41434),P=t(36594),b=t(46417);e.default=function(){var n=(0,x.useState)([]),e=(0,r.Z)(n,2),t=e[0],E=e[1],S=(0,x.useState)(0),R=(0,r.Z)(S,2),D=R[0],w=R[1],A=(0,x.useState)(10),k=(0,r.Z)(A,2),C=k[0],N=k[1],I=(0,m.s0)();return(0,x.useEffect)((function(){(0,P.nD)().then((function(n){console.log(n),E(n)})).catch((function(n){console.log(n)}))}),[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(v.Z,{title:(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,b.jsx)(o.ZP,{item:!0,children:"All Roles"}),(0,b.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,b.jsx)(i.Z,{variant:"contained",endIcon:(0,b.jsx)(j.Z,{}),onClick:function(){I("add-role")},children:"Add Role"})})]})}),children:(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(c.Z,{children:(0,b.jsxs)(s.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,b.jsx)(a.Z,{children:(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(f.Z,{children:"Created At"}),(0,b.jsx)(f.Z,{children:"Title"}),(0,b.jsx)(f.Z,{children:"Actions"})]})}),(0,b.jsx)(d.Z,{children:t.slice(D*C,D*C+C).map((function(n,e){return(0,b.jsxs)(l.Z,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,b.jsx)(f.Z,{children:(0,g.gg)(n.created_at)}),(0,b.jsx)(f.Z,{children:n.title}),(0,b.jsx)(f.Z,{children:(0,b.jsx)("div",{children:(0,b.jsx)(h.Z,{"aria-label":"more",id:"long-button","aria-controls":open?"demo-customized-menu":void 0,"aria-expanded":open?"true":void 0,disableElevation:!0,"aria-haspopup":"true",children:(0,b.jsx)(Z.Z,{})})})})]},e)}))})]})}),(0,b.jsx)(p.Z,{rowsPerPageOptions:[10,15,20],component:"div",count:t.length,rowsPerPage:C,page:D,onPageChange:function(n,e){w(e)},onRowsPerPageChange:function(n){N(+n.target.value),w(0)}})]})})})}},36594:function(n,e,t){t.d(e,{AG:function(){return w},Bl:function(){return N},Bm:function(){return A},CT:function(){return P},GV:function(){return Z},Gn:function(){return S},HL:function(){return R},JN:function(){return k},OP:function(){return h},PB:function(){return x},Qb:function(){return l},SP:function(){return E},Um:function(){return v},b6:function(){return C},gi:function(){return p},kl:function(){return j},l2:function(){return b},nD:function(){return g},r2:function(){return m},rW:function(){return d},vy:function(){return f},xr:function(){return D}});var r=t(56573),o=t(41209),i=t(58976);function u(n,e){return new Promise((function(t,i){r.Z.post(o.D.apiURL+n,e).then((function(n){n.headers,t(n.data)})).catch((function(n){n.response&&(401===n.response.status||400===n.response.status||500===n.response.status||n.response&&429===n.response.status||console.log("Error occurred, status: "+n.response.status)),console.log(n),i(n)}))}))}function c(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(u,c){r.Z.get(o.D.apiURL+n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response?n.response&&401===n.response.status&&e&&!t||n.response&&n.response.status:i.s&&i.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),c(n)}))}))}function s(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(u,c){r.Z.post(o.D.apiURL+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!i||(n.response&&n.response.status,c(n))}))}))}function a(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(u,c){r.Z.put(o.D.apiURL+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!i||(n.response&&n.response.status,c(n))}))}))}function l(n,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),u("api/auth/login",{email:n,password:e},!1)}function f(n,e,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o={};return""!==r&&(o.mfaCode=r),s("api/auth/reset-password/"+t,{password:n,confirm_password:e},!1)}function d(){return c("api/v1/users-list/")}function h(n){return s("api/v1/register-user",n)}function p(n){return c("api/v1/user/"+n)}function v(n,e){return a("api/v1/user/"+n,e)}function g(){return c("api/v1/roles")}function x(n){return s("api/v1/bls",n)}function m(){return c("api/v1/bls-list/")}function Z(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[e?"include_charges=".concat("true"):"",t?"include_timeline=".concat("true"):""].filter(Boolean).join("&"),o="api/v1/bl/".concat(n).concat(r?"?".concat(r):"");return c(o)}function j(n){return c("api/v1/bl-attachments?bl_id="+n)}function P(){return c("api/v1/charges-list/")}function b(){return c("api/v1/bl-charges-list/")}function E(n){return s("api/v1/bl-charges",n)}function S(n){return c("api/v1/bl-charge/"+n)}function R(n,e){return a("api/v1/bl-charge/"+n,e)}function D(n){return c("api/v1/bl-charge-attachments?bl_charge_id="+n)}function w(n){return s("api/v1/vouchers",n)}function A(){return c("api/v1/vouchers-list/")}function k(n){return c("api/v1/voucher/"+n)}function C(n,e){return a("api/v1/voucher/"+n,e)}function N(n){return c("api/v1/voucher-attachments?voucher_id="+n)}},41209:function(n,e,t){t.d(e,{D:function(){return r}});var r={socketURL:"ws://127.0.0.1:5500/",mediaURL:"http://161.35.210.153:5000/media/v1/",apiURL:"http://161.35.210.153/"}},61805:function(n,e,t){t.d(e,{R2:function(){return o},SU:function(){return r},sy:function(){return i}});var r={PENDING:0,VERIFIED:1,APPROVED:2,PAID:3,REJECTED:4},o={PENDING:0,ONPROGRESS:1,COMPLETE:2},i={DETAILS:"0",ATTACHMENTS:"1",BL_CHARGES:"2"}},41434:function(n,e,t){var r=t(64836);e.Z=void 0;var o=r(t(45045)),i=t(46417),u=(0,o.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");e.Z=u}}]);