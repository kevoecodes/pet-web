"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[243],{77841:function(e,n,t){var r=t(15671),s=t(43144),i=t(78413),o=function(){function e(){(0,r.Z)(this,e)}return(0,s.Z)(e,[{key:"success",value:function(e){i.s&&i.s.enqueueSnackbar(e,{variant:"success"})}},{key:"error",value:function(e){i.s&&i.s.enqueueSnackbar(e,{variant:"error"})}}]),e}();n.Z=new o},91905:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(57829),s=t(9019),i=t(1413),o=t(45987),a=t(40621),c=t(46417),u=["children"],l=function(e){var n=e.children,t=(0,o.Z)(e,u);return(0,c.jsx)(a.Z,(0,i.Z)((0,i.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,c.jsx)(r.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},d=t(16406),h=t(24813),p=t(47825),m=t(42832),f=t(61113),x=t(90891),g=function(){var e=(0,h.Z)((function(e){return e.breakpoints.down("sm")}));return(0,c.jsx)(p.Z,{maxWidth:"xl",children:(0,c.jsx)(m.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:(0,c.jsxs)(f.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["\xa9 Pet Tracker System By\xa0",(0,c.jsx)(f.Z,{component:x.Z,variant:"subtitle2",href:"#",target:"_blank",underline:"hover",children:"Abdul Nassir (NIT)"})]})})})},Z=function(e){var n=e.children;return(0,c.jsx)(r.Z,{sx:{minHeight:"100vh"},children:(0,c.jsxs)(s.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,c.jsx)(s.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,c.jsx)(d.Z,{})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,children:(0,c.jsx)(s.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,c.jsx)(s.ZP,{item:!0,children:(0,c.jsx)(l,{children:n})})})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,c.jsx)(g,{})})]})})}},75243:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(9019),s=t(42832),i=t(61113),o=t(74165),a=t(15861),c=t(29439),u=t(47313),l=t(2135),d=t(23306),h=t(37843),p=t(15480),m=t(41727),f=t(47131),x=t(83929),g=t(46330),Z=t(90891),v=t(28089),j=t(7410),w=t(69490),b=t(58467),S=t(36594),k=t(51406),P=t(16067),y=t(44874),C=t(72555),I=t(77841),L=t(95795),N=t(46417),U=function(){var e=(0,u.useState)(!1),n=(0,c.Z)(e,2),t=n[0],U=n[1],z=(0,u.useState)(!1),D=(0,c.Z)(z,2),_=D[0],A=D[1],J=(0,u.useState)(!1),O=(0,c.Z)(J,2),R=O[0],q=O[1],B=(0,b.s0)(),E=function(){A(!_)},T=function(e){e.preventDefault()},W=function(e){q(!0),(0,S.Qb)(e.email,e.password).then((function(e){var n=e.token,t=e.user,r=e.user.id;localStorage.setItem("token",JSON.stringify(n)),localStorage.setItem("user_id",JSON.stringify(r)),localStorage.setItem("user",JSON.stringify(t)),I.Z.success("Signed in successfully"),L.Z.getUser(),console.log(t),t.password_changed||t.is_superuser?B({pathname:"/"},{replace:!0}):B({pathname:"/reset-password/"+t.id},{replace:!0})})).catch((function(e){console.log(e),I.Z.error("Invalid credentials"),q(!1)}))};return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(j.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:v.Ry().shape({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),password:v.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n,t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setErrors,t.setStatus,t.setSubmitting,W(n);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,o=e.handleBlur,a=e.handleChange,c=e.handleSubmit,u=(e.isSubmitting,e.touched),v=e.values;return(0,N.jsx)("form",{noValidate:!0,onSubmit:c,children:(0,N.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsxs)(s.Z,{spacing:1,children:[(0,N.jsx)(d.Z,{htmlFor:"email-login",children:"Email Address"}),(0,N.jsx)(h.Z,{id:"email-login",type:"email",value:v.email,name:"email",onBlur:o,onChange:a,placeholder:"Enter email address",fullWidth:!0,error:Boolean(u.email&&n.email)}),u.email&&n.email&&(0,N.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.email})]})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsxs)(s.Z,{spacing:1,children:[(0,N.jsx)(d.Z,{htmlFor:"password-login",children:"Password"}),(0,N.jsx)(h.Z,{fullWidth:!0,error:Boolean(u.password&&n.password),id:"-password-login",type:_?"text":"password",value:v.password,name:"password",onBlur:o,onChange:a,endAdornment:(0,N.jsx)(m.Z,{position:"end",children:(0,N.jsx)(f.Z,{"aria-label":"toggle password visibility",onClick:E,onMouseDown:T,edge:"end",size:"large",children:_?(0,N.jsx)(P.Z,{}):(0,N.jsx)(y.Z,{})})}),placeholder:"Enter password"}),u.password&&n.password&&(0,N.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:n.password})]})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,N.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,N.jsx)(x.Z,{control:(0,N.jsx)(g.Z,{checked:t,onChange:function(e){return U(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,N.jsx)(i.Z,{variant:"h6",children:"Keep me sign in"})}),(0,N.jsx)(Z.Z,{variant:"h6",component:l.rU,to:"",color:"text.primary",children:"Forgot Password?"})]})}),n.submit&&(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsx)(p.Z,{error:!0,children:n.submit})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsx)(w.Z,{children:(0,N.jsx)(k.Z,{loading:R,disableElevation:!0,disabled:R,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",endIcon:(0,N.jsx)(C.Z,{}),loadingPosition:"end",children:"Login"})})})]})})}})})},z=t(91905),D=function(){return(0,N.jsx)(z.Z,{children:(0,N.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsx)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,N.jsx)(i.Z,{variant:"h3",children:"Login"})})}),(0,N.jsx)(r.ZP,{item:!0,xs:12,children:(0,N.jsx)(U,{})})]})})}},36594:function(e,n,t){t.d(n,{LD:function(){return b},OP:function(){return m},Qb:function(){return d},Um:function(){return g},Yb:function(){return x},gi:function(){return f},hK:function(){return Z},mL:function(){return j},rW:function(){return p},us:function(){return w},vy:function(){return h},zd:function(){return v}});var r=t(56573),s=t(41209),i=t(78413);function o(e,n){return new Promise((function(t,i){r.Z.post(s.D.apiURL+e,n).then((function(e){e.headers,t(e.data)})).catch((function(e){e.response&&(401===e.response.status||400===e.response.status||500===e.response.status||e.response&&429===e.response.status||console.log("Error occurred, status: "+e.response.status)),console.log(e),i(e)}))}))}function a(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(o,a){r.Z.get(s.D.apiURL+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response?e.response&&401===e.response.status&&n&&!t||e.response&&e.response.status:i.s&&i.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),a(e)}))}))}function c(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,a){r.Z.post(s.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!i||(e.response&&e.response.status,a(e))}))}))}function u(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,a){r.Z.put(s.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!i||(e.response&&e.response.status,a(e))}))}))}function l(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(i,o){r.Z.delete(s.D.apiURL+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){i(e.data)})).catch((function(e){e.response&&401===e.response.status&&n&&!t||(e.response&&e.response.status,o(e))}))}))}function d(e,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),o("api/auth/login",{email:e,password:n},!1)}function h(e,n,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s={};return""!==r&&(s.mfaCode=r),c("api/auth/reset-password/"+t,{password:e,confirm_password:n},!1)}function p(){return a("api/v1/users-list/")}function m(e){return c("api/v1/register-user",e)}function f(e){return a("api/v1/user/"+e)}function x(e){return l("api/v1/user/"+e)}function g(e,n){return u("api/v1/user/"+e,n)}function Z(){return a("api/v1/list-pets/")}function v(e){return c("api/v1/pets",e)}function j(e,n){return u("api/v1/pet/"+e,n)}function w(e){return a("api/v1/pet/"+e)}function b(e){return l("api/v1/pet/"+e)}},41209:function(e,n,t){t.d(n,{D:function(){return r}});var r={mediaURL:"http://161.35.210.153:6500/media/v1/",apiURL:"http://161.35.210.153:5500/"}}}]);