"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[815],{63669:function(n,t,e){e.d(t,{pf:function(){return p},l:function(){return l},gg:function(){return c},Sh:function(){return i},An:function(){return a}});var o=e(66212),r=e(41209),s=e(36594),u=e(46417),i=function(n){return console.log("Pet",!1===n),!0===n?(0,u.jsx)(o.Z,{color:"success",label:"Active"}):!1===n?(0,u.jsx)(o.Z,{color:"error",label:"Inactive"}):void 0},a=function(n){return 0===n?(0,u.jsx)(o.Z,{color:"primary",label:"Admin"}):1===n?(0,u.jsx)(o.Z,{color:"success",label:"User"}):void 0},c=function(n){return new Date(n).toLocaleString()},l=function(n){return"".concat(r.D.mediaURL,"images/").concat(n)},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){};(0,s.hK)().then((function(e){console.log(e),n(e.results),t(e.results)})).catch((function(n){console.log(n)}))}},28815:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var o=e(29439),r=e(47313),s=e(84697),u=[{lat:-6.8107021442746785,lng:39.257743704390535},{lat:-6.8105753662950095,lng:39.25767269193984},{lat:-6.810514826236728,lng:39.25761315624884},{lat:-6.810437192503741,lng:39.25768273410458},{lat:-6.810382350317812,lng:39.25773151033335},{lat:-6.810406566348738,lng:39.257600244894164},{lat:-6.8104493005179565,lng:39.257623915711065}],i=e(9019),a=e(70501),c=e(95823),l=e(18855),p=e(98466),f=e(40621),h=e(63669),d=e(46417),g=function(){var n=(0,r.useState)(),t=(0,o.Z)(n,2),e=t[0],g=t[1],v=(0,r.useState)("Population"),m=(0,o.Z)(v,2),Z=m[0],k=m[1],w=(0,r.useState)([]),x=(0,o.Z)(w,2),P=x[0],j=x[1],S=(0,r.useState)([]),b=(0,o.Z)(S,2),L=b[0],C=b[1],y=(0,r.useState)([]),U=(0,o.Z)(y,2),A=U[0],R=U[1],I=(0,r.useRef)(null),D=(0,r.useRef)(null),z=function(n,t,e){L.forEach((function(n){return n.setMap(null)}));var o=u.map((function(o,r){return new n.maps.Marker({position:o,map:t,title:"Start",icon:{path:e.SymbolPath.CIRCLE,scale:3,fillColor:"#F00",fillOpacity:1,strokeWeight:0}})}));R(o)},O=function(n,t){A.forEach((function(n){return n.setMap(null)}));var e=new n.maps.Polyline({path:u,geodesic:!0,strokeColor:"#FF0000",strokeOpacity:1,strokeWeight:2});e.setMap(t),C([e])};(0,r.useEffect)((function(){(0,h.pf)(j,(function(n){return function(n){if(console.log("Pets",n),I.current){console.log(I.current),console.log("Hello");var t=window.google,e=I.current,o=D.current;"Population"===Z?z(t,e,o):O(t,e)}}(n)}))}),[e,Z]);var F=function(){return(0,d.jsx)(c.C.Group,{children:P.map((function(n,t){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.Z,{title:n.name,placement:"top",children:(0,d.jsx)(c.C,{style:{backgroundColor:"#87d068"},src:(0,h.l)(n.icon),children:n.name.charAt(0).toUpperCase()})},t)})}))})};return(0,d.jsx)(f.Z,{title:(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(i.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,d.jsx)(i.ZP,{item:!0,children:"Pet History"}),(0,d.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,d.jsx)(F,{})}),(0,d.jsx)(i.ZP,{children:(0,d.jsx)(p.Z,{options:["Population","Route"],value:Z,onChange:k})})]})}),children:(0,d.jsx)(a.Z,{children:(0,d.jsx)("div",{style:{height:"70vh",width:"100%"},children:(0,d.jsx)(s.ZP,{bootstrapURLKeys:{key:"AIzaSyDQz72mL0bI2Li-VJ2AAyFl78sB4UbQIMk"},defaultCenter:{lat:-6.810583,lng:39.257459},defaultZoom:20,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(n){var t=n.map,e=n.maps;I.current=t,D.current=e,g(!0)}})})})})}},36594:function(n,t,e){e.d(t,{LD:function(){return P},OP:function(){return d},Qb:function(){return p},Um:function(){return m},Yb:function(){return v},gi:function(){return g},hK:function(){return Z},mL:function(){return w},rW:function(){return h},us:function(){return x},vy:function(){return f},zd:function(){return k}});var o=e(56573),r=e(41209),s=e(78413);function u(n,t){return new Promise((function(e,s){o.Z.post(r.D.apiURL+n,t).then((function(n){n.headers,e(n.data)})).catch((function(n){n.response&&(401===n.response.status||400===n.response.status||500===n.response.status||n.response&&429===n.response.status||console.log("Error occurred, status: "+n.response.status)),console.log(n),s(n)}))}))}function i(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(u,i){o.Z.get(r.D.apiURL+n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response?n.response&&401===n.response.status&&t&&!e||n.response&&n.response.status:s.s&&s.s.enqueueSnackbar("No network available, Please Connect to a Network!",{variant:"warning"}),i(n)}))}))}function a(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(u,i){o.Z.post(r.D.apiURL+n,t,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response&&401===n.response.status&&e&&!s||(n.response&&n.response.status,i(n))}))}))}function c(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(u,i){o.Z.put(r.D.apiURL+n,t,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){u(n.data)})).catch((function(n){n.response&&401===n.response.status&&e&&!s||(n.response&&n.response.status,i(n))}))}))}function l(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(s,u){o.Z.delete(r.D.apiURL+n,{headers:{Authorization:"Token "+JSON.parse(localStorage.getItem("token"))}}).then((function(n){s(n.data)})).catch((function(n){n.response&&401===n.response.status&&t&&!e||(n.response&&n.response.status,u(n))}))}))}function p(n,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o={};return""!==e&&(o.mfaCode=e),u("api/auth/login",{email:n,password:t},!1)}function f(n,t,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return""!==o&&(r.mfaCode=o),a("api/auth/reset-password/"+e,{password:n,confirm_password:t},!1)}function h(){return i("api/v1/users-list/")}function d(n){return a("api/v1/register-user",n)}function g(n){return i("api/v1/user/"+n)}function v(n){return l("api/v1/user/"+n)}function m(n,t){return c("api/v1/user/"+n,t)}function Z(){return i("api/v1/list-pets/")}function k(n){return a("api/v1/pets",n)}function w(n,t){return c("api/v1/pet/"+n,t)}function x(n){return i("api/v1/pet/"+n)}function P(n){return l("api/v1/pet/"+n)}},41209:function(n,t,e){e.d(t,{D:function(){return o}});var o={mediaURL:"http://161.35.210.153:6500/media/v1/",apiURL:"http://161.35.210.153:5500/"}}}]);