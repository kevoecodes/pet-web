"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[412],{31412:function(e,n,t){t.r(n);var o=t(29439),l=t(47313),i=t(37753),s=t(58467),a=t(19768),c=t(77841),r=t(9019),d=t(69099),u=t(70501),g=t(69918),p=t(40621),f=t(83121),h=t(46417);n.default=function(){var e=(0,l.useState)([]),n=(0,o.Z)(e,2),t=(n[0],n[1],(0,l.useState)(null)),Z=(0,o.Z)(t,2),m=Z[0],x=Z[1],v=((0,l.useRef)(null),(0,l.useRef)(null)),j=(0,l.useState)(!1),C=(0,o.Z)(j,2),y=C[0],b=C[1],k=(0,s.s0)(),w=(0,s.UO)(),P=(0,l.useState)(null),S=(0,o.Z)(P,2),F=(S[0],S[1]),_=(0,l.useState)([]),z=(0,o.Z)(_,2),O=z[0];z[1];(0,l.useEffect)((function(){void 0!==w.pet_id||null!==w.pet_id?(0,a.us)(w.pet_id).then((function(e){console.log(e),F(e)})).catch((function(e){console.log(e),c.Z.error("Failed to load pet details"),k("/pets",{replace:!0})})):(c.Z.error("Failed to load pet details"),k("/pets",{replace:!0}))}),[O]);var R={drawingMode:y?"":"polygon",drawingControl:!1,drawingControlOptions:{drawingMode:["Polygon"]},polygonOptions:{fillColor:"#2196F3",strokeColor:"#2196F3",fillOpacity:.5,strokeWeight:2,clickable:!0,editable:!0,draggable:!0,zindex:100}},A=(0,l.useCallback)((function(e){x(e),b(!0)}));return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.Z,{title:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.ZP,{container:!0,spacing:3,alignItems:"center",children:(0,h.jsx)(r.ZP,{item:!0,children:"Adding geofence"})}),y&&(0,h.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,h.jsx)(d.Z,{variant:"contained",endIcon:(0,h.jsx)(f.Z,{}),onClick:function(){var e=m.getPath().getArray().map((function(e,n){return{longitudes:e.lng(),latitudes:e.lat()}}));(0,a.PZ)(w.pet_id,{points:e}).then((function(e){console.log(e),c.Z.success("Successfully added pet geofence"),k("/pets",{replace:!0})})).catch((function(e){console.log(e),c.Z.error("Failed to save pet geofence")}))},children:"Save"})})]}),children:(0,h.jsx)(g.Z,{tip:"Constructing data...",spinning:!1,children:(0,h.jsx)(u.Z,{children:(0,h.jsx)("div",{style:{height:"700px",width:"100%"},children:(0,h.jsx)(i.b6,{mapContainerClassName:"App-map",zoom:12,center:{lat:-6.810583,lng:39.257459},children:(0,h.jsx)(i.j_,{onReady:function(e){console.log("Ready"),v.current=e},options:R,onPolygonComplete:A,onPolygonEdit:function(e){console.log(e)},onOverlayComplete:function(e){console.log(e)}})})})})})})})}},83121:function(e,n,t){var o=t(64836);n.Z=void 0;var l=o(t(45045)),i=t(46417),s=(0,l.default)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");n.Z=s}}]);