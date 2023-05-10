"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[463],{2661:function(n,e,t){var r=t(1413),o=t(79601),i=t(17592),c=t(17551),s=t(46417),u=(0,i.ZP)((function(n){return(0,s.jsx)(o.Z,(0,r.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},n))}))((function(n){var e=n.theme;return{"& .MuiPaper-root":{borderRadius:3,marginTop:e.spacing(1),minWidth:140,backgroundColor:e.palette.grey[100],color:"light"===e.palette.mode?"rgb(55, 65, 81)":e.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 10px 7px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:e.palette.text.secondary,marginRight:e.spacing(1.5)},"&:active":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}}}}));e.Z=u},75697:function(n,e,t){t.d(e,{AB:function(){return u},Rn:function(){return l},ec:function(){return s},gg:function(){return a},oB:function(){return d}});var r=t(61805),o=t(66212),i=t(36594),c=t(46417),s=function(n){return n===r.R2.PENDING?(0,c.jsx)(o.Z,{color:"secondary",label:"Pending"}):n===r.R2.ONPROGRESS?(0,c.jsx)(o.Z,{color:"primary",label:"On Progress"}):n===r.R2.COMPLETE?(0,c.jsx)(o.Z,{color:"success",label:"Complete"}):void 0},u=function(n){return n===r.SU.PENDING?(0,c.jsx)(o.Z,{color:"secondary",label:"Pending"}):n===r.SU.VERIFIED?(0,c.jsx)(o.Z,{color:"warning",label:"Verified"}):n===r.SU.APPROVED?(0,c.jsx)(o.Z,{color:"success",label:"Approved"}):n===r.SU.PAID?(0,c.jsx)(o.Z,{color:"primary",label:"Paid"}):n===r.SU.REJECTED?(0,c.jsx)(o.Z,{color:"error",label:"Rejected"}):void 0},a=function(n){return new Date(n).toLocaleString()},l=function(n){(0,i.nD)().then((function(e){console.log(e),n(e)})).catch((function(n){console.log(n)}))},d=function(n){return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}},29463:function(n,e,t){t.r(e);var r=t(29439),o=t(9019),i=t(69099),c=t(70501),s=t(51629),u=t(66835),a=t(23477),l=t(24076),d=t(67478),f=t(57861),p=t(47131),h=t(51405),v=t(62323),g=t(40621),x=t(75697),m=t(47313),Z=t(58467),j=t(10237),b=t(32499),P=t(17885),S=t(73507),E=t(36594),R=t(2661),C=t(46417);e.default=function(){var n=(0,m.useState)(null),e=(0,r.Z)(n,2),t=e[0],D=e[1],k=(0,m.useState)([]),w=(0,r.Z)(k,2),z=w[0],A=w[1],L=(0,m.useState)(null),y=(0,r.Z)(L,2),I=y[0],N=y[1],O=(0,m.useState)(0),U=(0,r.Z)(O,2),M=U[0],T=U[1],_=(0,m.useState)(10),G=(0,r.Z)(_,2),V=G[0],H=G[1],B=(0,Z.s0)(),F=Boolean(t),J=function(){D(null)};return(0,m.useEffect)((function(){(0,E.rW)().then((function(n){console.log(n),A(n.results)})).catch((function(n){console.log(n)}))}),[]),(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(g.Z,{title:(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(o.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,C.jsx)(o.ZP,{item:!0,children:"All Users"}),(0,C.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,C.jsx)(i.Z,{variant:"contained",endIcon:(0,C.jsx)(S.Z,{}),onClick:function(){B("create-user")},children:"Add User"})})]})}),children:(0,C.jsxs)(c.Z,{children:[(0,C.jsx)(s.Z,{children:(0,C.jsxs)(u.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,C.jsx)(a.Z,{children:(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(d.Z,{children:"Created At"}),(0,C.jsx)(d.Z,{children:"Full Name"}),(0,C.jsx)(d.Z,{children:"Email"}),(0,C.jsx)(d.Z,{children:"Role"}),(0,C.jsx)(d.Z,{children:"Actions"})]})}),(0,C.jsx)(f.Z,{children:z.slice(M*V,M*V+V).map((function(n,e){return(0,C.jsxs)(l.Z,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,C.jsx)(d.Z,{children:(0,x.gg)(n.date_joined)}),(0,C.jsxs)(d.Z,{children:[n.first_name," ",n.last_name]}),(0,C.jsx)(d.Z,{children:n.email}),(0,C.jsx)(d.Z,{children:n.role.title}),(0,C.jsx)(d.Z,{children:(0,C.jsxs)("div",{children:[(0,C.jsx)(p.Z,{"aria-label":"more",id:"long-button","aria-controls":F?"demo-customized-menu":void 0,"aria-expanded":F?"true":void 0,disableElevation:!0,"aria-haspopup":"true",onClick:function(e){return function(n,e){N(e),D(n.currentTarget)}(e,n)},children:(0,C.jsx)(b.Z,{})}),(0,C.jsxs)(R.Z,{id:"demo-customized-menu",anchorEl:t,open:F,onClose:J,MenuListProps:{"aria-labelledby":"demo-customized-menu"},children:[(0,C.jsxs)(h.Z,{onClick:function(){var n;n=I.id,B("edit-user/"+n)},children:[(0,C.jsx)(j.Z,{style:{fontSize:25,color:"green"}}),"Edit"]}),(0,C.jsxs)(h.Z,{onClick:J,disableRipple:!0,children:[(0,C.jsx)(P.Z,{style:{fontSize:25,color:"red"}}),"Delete"]})]})]})})]},e)}))})]})}),(0,C.jsx)(v.Z,{rowsPerPageOptions:[10,15,20],component:"div",count:z.length,rowsPerPage:V,page:M,onPageChange:function(n,e){T(e)},onRowsPerPageChange:function(n){H(+n.target.value),T(0)}})]})})})}},36594:function(n,e,t){t.d(e,{AG:function(){return D},Bl:function(){return A},Bm:function(){return k},CT:function(){return b},GV:function(){return Z},Gn:function(){return E},HL:function(){return R},JN:function(){return w},OP:function(){return p},PB:function(){return x},Qb:function(){return l},SP:function(){return S},Um:function(){return v},b6:function(){return z},gi:function(){return h},kl:function(){return j},l2:function(){return P},nD:function(){return g},r2:function(){return m},rW:function(){return f},vy:function(){return d},xr:function(){return C}});var r=t(56573),o=t(41209),i=t(58976);function c(n,e){return new Promise((function(t,i){r.Z.post(o.D.apiURL+n,e).then((function(n){n.headers,t(n.data)})).catch((function(n){n.response&&(401===n.response.status||400===n.response.status||500===n.response.status||n.response&&429===n.response.status||console.log("Error occurred, status: "+n.response.status)),console.log(n),i(n)}))}))}function s(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(c,s){r.Z.get(o.D.apiURL+n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){c(n.data)})).catch((function(n){n.response?n.response&&401===n.response.status&&e&&!t||n.response&&n.response.status:i.s&&i.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),s(n)}))}))}function u(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,s){r.Z.post(o.D.apiURL+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){c(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!i||(n.response&&n.response.status,s(n))}))}))}function a(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(c,s){r.Z.put(o.D.apiURL+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){c(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!i||(n.response&&n.response.status,s(n))}))}))}function l(n,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),c("api/auth/login",{email:n,password:e},!1)}function d(n,e,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o={};return""!==r&&(o.mfaCode=r),u("api/auth/reset-password/"+t,{password:n,confirm_password:e},!1)}function f(){return s("api/v1/users-list/")}function p(n){return u("api/v1/register-user",n)}function h(n){return s("api/v1/user/"+n)}function v(n,e){return a("api/v1/user/"+n,e)}function g(){return s("api/v1/roles")}function x(n){return u("api/v1/bls",n)}function m(){return s("api/v1/bls-list/")}function Z(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[e?"include_charges=".concat("true"):"",t?"include_timeline=".concat("true"):""].filter(Boolean).join("&"),o="api/v1/bl/".concat(n).concat(r?"?".concat(r):"");return s(o)}function j(n){return s("api/v1/bl-attachments?bl_id="+n)}function b(){return s("api/v1/charges-list/")}function P(){return s("api/v1/bl-charges-list/")}function S(n){return u("api/v1/bl-charges",n)}function E(n){return s("api/v1/bl-charge/"+n)}function R(n,e){return a("api/v1/bl-charge/"+n,e)}function C(n){return s("api/v1/bl-charge-attachments?bl_charge_id="+n)}function D(n){return u("api/v1/vouchers",n)}function k(){return s("api/v1/vouchers-list/")}function w(n){return s("api/v1/voucher/"+n)}function z(n,e){return a("api/v1/voucher/"+n,e)}function A(n){return s("api/v1/voucher-attachments?voucher_id="+n)}},41209:function(n,e,t){t.d(e,{D:function(){return r}});var r={socketURL:"ws://127.0.0.1:5500/",mediaURL:"http://161.35.210.153:5000/media/v1/",apiURL:"http://161.35.210.153/"}},61805:function(n,e,t){t.d(e,{R2:function(){return o},SU:function(){return r},sy:function(){return i}});var r={PENDING:0,VERIFIED:1,APPROVED:2,PAID:3,REJECTED:4},o={PENDING:0,ONPROGRESS:1,COMPLETE:2},i={DETAILS:"0",ATTACHMENTS:"1",BL_CHARGES:"2"}},17885:function(n,e,t){var r=t(64836);e.Z=void 0;var o=r(t(45045)),i=t(46417),c=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");e.Z=c},73507:function(n,e,t){var r=t(64836);e.Z=void 0;var o=r(t(45045)),i=t(46417),c=(0,o.default)((0,i.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined");e.Z=c},10237:function(n,e,t){var r=t(64836);e.Z=void 0;var o=r(t(45045)),i=t(46417),c=(0,o.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=c}}]);