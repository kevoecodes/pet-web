"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[565],{63669:function(n,e,t){t.d(e,{Rn:function(){return s},gg:function(){return r}});var o=t(22098),r=(t(46417),function(n){return new Date(n).toLocaleString()}),s=function(n){(0,o.nD)().then((function(e){console.log(e),n(e)})).catch((function(n){console.log(n)}))}},24565:function(n,e,t){t.r(e);var o=t(70885),r=t(9019),s=t(69099),i=t(70501),a=t(51629),c=t(66835),u=t(23477),l=t(24076),d=t(67478),h=t(57861),f=t(47131),p=t(62323),g=t(40621),v=t(63669),x=t(47313),Z=t(58467),m=t(32499),j=t(41434),w=t(22098),P=t(46417);e.default=function(){var n=(0,x.useState)([]),e=(0,o.Z)(n,2),t=e[0],k=e[1],b=(0,x.useState)(0),S=(0,o.Z)(b,2),C=S[0],A=S[1],O=(0,x.useState)(10),z=(0,o.Z)(O,2),I=z[0],N=z[1],D=(0,Z.s0)();return(0,x.useEffect)((function(){(0,w.nD)().then((function(n){console.log(n),k(n)})).catch((function(n){console.log(n)}))}),[]),(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(g.Z,{title:(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(r.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,P.jsx)(r.ZP,{item:!0,children:"All Roles"}),(0,P.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,P.jsx)(s.Z,{variant:"contained",endIcon:(0,P.jsx)(j.Z,{}),onClick:function(){D("add-role")},children:"Add Role"})})]})}),children:(0,P.jsxs)(i.Z,{children:[(0,P.jsx)(a.Z,{children:(0,P.jsxs)(c.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,P.jsx)(u.Z,{children:(0,P.jsxs)(l.Z,{children:[(0,P.jsx)(d.Z,{children:"Created At"}),(0,P.jsx)(d.Z,{children:"Title"}),(0,P.jsx)(d.Z,{children:"Actions"})]})}),(0,P.jsx)(h.Z,{children:t.slice(C*I,C*I+I).map((function(n,e){return(0,P.jsxs)(l.Z,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,P.jsx)(d.Z,{children:(0,v.gg)(n.created_at)}),(0,P.jsx)(d.Z,{children:n.title}),(0,P.jsx)(d.Z,{children:(0,P.jsx)("div",{children:(0,P.jsx)(f.Z,{"aria-label":"more",id:"long-button","aria-controls":open?"demo-customized-menu":void 0,"aria-expanded":open?"true":void 0,disableElevation:!0,"aria-haspopup":"true",children:(0,P.jsx)(m.Z,{})})})})]},e)}))})]})}),(0,P.jsx)(p.Z,{rowsPerPageOptions:[10,15,20],component:"div",count:t.length,rowsPerPage:I,page:C,onPageChange:function(n,e){A(e)},onRowsPerPageChange:function(n){N(+n.target.value),A(0)}})]})})})}},22098:function(n,e,t){t.d(e,{Um:function(){return g},nD:function(){return v},gi:function(){return p},rW:function(){return h},Qb:function(){return l},OP:function(){return f},vy:function(){return d}});var o=t(56573),r="http://161.35.210.153:8080/",s=t(26660);function i(n,e){return new Promise((function(t,s){o.Z.post(r+n,e).then((function(n){n.headers,t(n.data)})).catch((function(n){n.response&&(401===n.response.status||400===n.response.status||500===n.response.status||n.response&&429===n.response.status||console.log("Error occurred, status: "+n.response.status)),console.log(n),s(n)}))}))}function a(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(i,a){o.Z.get(r+n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){i(n.data)})).catch((function(n){n.response?n.response&&401===n.response.status&&e&&!t||n.response&&n.response.status:s.s&&s.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),a(n)}))}))}function c(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(i,a){o.Z.post(r+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){i(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!s||(n.response&&n.response.status,a(n))}))}))}function u(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(i,a){o.Z.put(r+n,e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){i(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!s||(n.response&&n.response.status,a(n))}))}))}function l(n,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o={};return""!==t&&(o.mfaCode=t),i("api/auth/login",{email:n,password:e},!1)}function d(n,e,t){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return""!==o&&(r.mfaCode=o),c("api/auth/reset-password/"+t,{password:n,confirm_password:e},!1)}function h(){return a("api/v1/users-list/")}function f(n){return c("api/v1/register-user",n)}function p(n){return a("api/v1/user/"+n)}function g(n,e){return u("api/v1/user/"+n,e)}function v(){return a("api/v1/roles")}},41434:function(n,e,t){var o=t(64836);e.Z=void 0;var r=o(t(45045)),s=t(46417),i=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");e.Z=i}}]);