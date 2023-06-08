"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[687],{77841:function(e,n,t){var r=t(15671),i=t(43144),o=t(24181),s=function(){function e(){(0,r.Z)(this,e)}return(0,i.Z)(e,[{key:"success",value:function(e){o.s&&o.s.enqueueSnackbar(e,{variant:"success"})}},{key:"error",value:function(e){o.s&&o.s.enqueueSnackbar(e,{variant:"error"})}}]),e}();n.Z=new s},69687:function(e,n,t){t.r(n);var r=t(29439),i=t(96996),o=t(47313),s=t(58467),a=t(36594),u=t(77841),c=t(40621),l=t(57829),d=t(46417);n.default=function(){var e=(0,o.useState)(null),n=(0,r.Z)(e,2),t=n[0],p=n[1],f=(0,o.useState)(null),h=(0,r.Z)(f,2),m=h[0],v=h[1],g=(0,o.useState)(!0),x=(0,r.Z)(g,2),Z=x[0],j=x[1],b=(0,o.useState)(!1),S=(0,r.Z)(b,2),w=S[0],P=S[1],k=(0,s.UO)(),_=(0,s.s0)();return(0,o.useEffect)((function(){(0,a.us)(k.pet_id).then((function(e){p({name:e.name,device_no:e.device_no}),v(e.icon),j(!1)})).catch((function(e){console.log(e),u.Z.error("Failed to load pet details"),_("/pets",{replace:!0})}))}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.Z,{title:"Editing a pet",content:!1,border:!1,boxShadow:!0,children:(0,d.jsx)(l.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:!Z&&(0,d.jsx)(i.Z,{loading:w,initialValues:t,initialPetIcon:m,onSubmitForm:function(e){return function(e){(0,a.mL)(k.pet_id,e).then((function(e){console.log("Response",e),u.Z.success("Pet was successfully edit"),_("/pets",{replace:!0})})).catch((function(e){P(!1),console.log(e),u.Z.error("Failed to add Pet")}))}(e)}})})})})}},96996:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(74165),i=t(15861),o=t(29439),s=t(57829),a=t(9019),u=t(42832),c=t(23306),l=t(37843),d=t(15480),p=t(19536),f=t(7410),h=t(28089),m=t(77841),v=t(53764),g=t(82138),x=t(1122),Z=t(62686),j=t(47313),b=t(41209),S=t(46417),w=function(e){var n="image/jpeg"===e.type||"image/png"===e.type;n||x.ZP.error("You can only upload JPG/PNG file!").then();var t=e.size/1024/1024<2;return t||x.ZP.error("Image must smaller than 2MB!").then(),n&&t},P=function(e){var n=e.setPetIcon,t=(0,j.useState)(!1),r=(0,o.Z)(t,2),i=r[0],s=r[1],a=(0,j.useState)(),u=(0,o.Z)(a,2),c=u[0],l=u[1],d=(0,S.jsxs)("div",{children:[i?(0,S.jsx)(v.Z,{}):(0,S.jsx)(g.Z,{}),(0,S.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(Z.Z,{name:"image",listType:"picture-circle",className:"avatar-uploader",showUploadList:!1,action:b.D.apiURL+"api/v1/upload-image",beforeUpload:w,onChange:function(e){var t=e.file,r=t.status,i=t.response;"uploading"!==r?"done"===r&&(n(i.name),function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e)}(e.file.originFileObj,(function(e){s(!1),l(e)}))):s(!0)},children:c?(0,S.jsx)("img",{src:c,alt:"avatar",style:{width:"100%"}}):d})})},k=t(69490),_=t(51406),y=function(e){var n=e.onSubmitForm,t=e.loading,v=void 0!==t&&t,g=e.initialValues,x=void 0===g?null:g,Z=e.initialPetIcon,b=void 0===Z?null:Z,w=(0,j.useState)(b),y=(0,o.Z)(w,2),L=y[0],U=y[1];return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(s.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:(0,S.jsx)(f.J9,{initialValues:null!==x?x:{name:"",device_no:"",icon:null,submit:null},validationSchema:h.Ry().shape({name:h.Z_().max(255).required("Pet Name is required"),device_no:h.Z_().max(255).required("Device Number is required")}),onSubmit:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.setErrors,i.setStatus,i.setSubmitting,null===L){e.next=5;break}return t.icon=L,n(t),e.abrupt("return");case 5:m.Z.error("Pet Icon not uploaded");case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,r=e.handleChange,i=e.handleSubmit,o=(e.isSubmitting,e.touched),s=e.values;return(0,S.jsxs)("form",{noValidate:!0,onSubmit:i,children:[(0,S.jsxs)(a.ZP,{container:!0,spacing:3,mb:3,children:[(0,S.jsx)(a.ZP,{item:!0,xs:6,children:(0,S.jsxs)(u.Z,{spacing:1,children:[(0,S.jsx)(c.Z,{htmlFor:"bootstrap",children:"Pet Name"}),(0,S.jsx)(l.Z,{id:"email-login",type:"text",value:s.name,name:"name",onBlur:t,onChange:r,placeholder:"eg. Cat",fullWidth:!0,error:Boolean(o.name&&n.name)}),o.name&&n.name&&(0,S.jsx)(d.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.name})]})}),(0,S.jsx)(a.ZP,{item:!0,xs:6,children:(0,S.jsxs)(u.Z,{spacing:1,children:[(0,S.jsx)(c.Z,{htmlFor:"bootstrap",children:"Device Number"}),(0,S.jsx)(l.Z,{id:"email-login",type:"text",value:s.device_no,name:"device_no",onBlur:t,onChange:r,placeholder:"eg. DEV_0094FGGG",fullWidth:!0,error:Boolean(o.device_no&&n.device_no)}),o.device_no&&n.device_no&&(0,S.jsx)(d.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:n.device_no})]})})]}),(0,S.jsx)(p.Z,{children:"Pet Icon"}),(0,S.jsx)(a.ZP,{container:!0,spacing:3,mt:3,mb:3,alignItems:"center",justifyContent:"center",children:(0,S.jsx)(a.ZP,{children:(0,S.jsx)(P,{setPetIcon:U})})}),(0,S.jsx)(a.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mg:3,children:(0,S.jsx)(a.ZP,{item:!0,xs:6,children:(0,S.jsx)(k.Z,{children:(0,S.jsx)(_.Z,{disableElevation:!0,disabled:v,loading:v,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Submit"})})})})]})}})})})}},36594:function(e,n,t){t.d(n,{LD:function(){return S},OP:function(){return h},Qb:function(){return d},RT:function(){return w},Um:function(){return g},Yb:function(){return v},gi:function(){return m},hK:function(){return x},mL:function(){return j},rW:function(){return f},us:function(){return b},vy:function(){return p},zd:function(){return Z}});var r=t(56573),i=t(41209),o=t(24181);function s(e,n){return new Promise((function(t,o){r.Z.post(i.D.apiURL+e,n).then((function(e){e.headers,t(e.data)})).catch((function(e){e.response&&(401===e.response.status||400===e.response.status||500===e.response.status||e.response&&429===e.response.status||console.log("Error occurred, status: "+e.response.status)),console.log(e),o(e)}))}))}function a(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s,a){r.Z.get(i.D.apiURL+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){s(e.data)})).catch((function(e){e.response?e.response&&401===e.response.status&&n&&!t||e.response&&e.response.status:o.s&&o.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),a(e)}))}))}function u(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(s,a){r.Z.post(i.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){s(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!o||(e.response&&e.response.status,a(e))}))}))}function c(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(s,a){r.Z.put(i.D.apiURL+e,n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){s(e.data)})).catch((function(e){e.response&&401===e.response.status&&t&&!o||(e.response&&e.response.status,a(e))}))}))}function l(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(o,s){r.Z.delete(i.D.apiURL+e,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(e){o(e.data)})).catch((function(e){e.response&&401===e.response.status&&n&&!t||(e.response&&e.response.status,s(e))}))}))}function d(e,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r={};return""!==t&&(r.mfaCode=t),s("api/auth/login",{email:e,password:n},!1)}function p(e,n,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return""!==r&&(i.mfaCode=r),u("api/auth/reset-password/"+t,{password:e,confirm_password:n},!1)}function f(){return a("api/v1/users-list/")}function h(e){return u("api/v1/register-user",e)}function m(e){return a("api/v1/user/"+e)}function v(e){return l("api/v1/user/"+e)}function g(e,n){return c("api/v1/user/"+e,n)}function x(){return a("api/v1/list-pets/")}function Z(e){return u("api/v1/pets",e)}function j(e,n){return c("api/v1/pet/"+e,n)}function b(e){return a("api/v1/pet/"+e)}function S(e){return l("api/v1/pet/"+e)}function w(e){return a("api/v1/list-pet-locations/?pet_id="+e)}},41209:function(e,n,t){t.d(n,{D:function(){return r}});var r={mediaURL:"http://161.35.210.153:6500/media/v1/",apiURL:"http://161.35.210.153:5500/",socketURL:"ws://161.35.210.153:5500/"}}}]);