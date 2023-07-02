"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[645],{50494:function(e,n,t){var i=t(7655),o=t(46417);n.Z=function(e){var n=e.isModalOpen,t=void 0!==n&&n,r=e.onDelete,l=void 0===r?function(){}:r,s=e.setIsModalOpen,a=e.message,c=void 0===a?"Are you sure you want to delete this content?":a;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Z,{centered:!0,title:"Are you sure",open:t,onOk:function(){l()},onCancel:function(){s(!1)},children:(0,o.jsxs)(o.Fragment,{children:[" ",c," "]})})})}},2661:function(e,n,t){var i=t(1413),o=t(79601),r=t(17592),l=t(17551),s=t(46417),a=(0,r.ZP)((function(e){return(0,s.jsx)(o.Z,(0,i.Z)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var n=e.theme;return{"& .MuiPaper-root":{borderRadius:3,marginTop:n.spacing(1),minWidth:140,backgroundColor:n.palette.grey[100],color:"light"===n.palette.mode?"rgb(55, 65, 81)":n.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 10px 7px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:n.palette.text.secondary,marginRight:n.spacing(1.5)},"&:active":{backgroundColor:(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}}}}));n.Z=a},66645:function(e,n,t){t.r(n);var i=t(29439),o=t(47313),r=t(58467),l=t(19768),s=t(40621),a=t(9019),c=t(69099),d=t(70501),u=t(51629),h=t(66835),x=t(23477),p=t(24076),Z=t(67478),g=t(57861),f=t(47131),j=t(51405),v=t(62323),m=t(63669),b=t(32499),P=t(2661),y=t(10237),C=t(17885),S=t(41434),k=t(94305),M=t(50494),w=t(77841),z=t(46417);n.default=function(){var e=(0,o.useState)(null),n=(0,i.Z)(e,2),t=n[0],O=n[1],A=(0,o.useState)([]),D=(0,i.Z)(A,2),F=D[0],I=D[1],E=(0,o.useState)(null),L=(0,i.Z)(E,2),R=L[0],_=L[1],H=(0,o.useState)(!1),V=(0,i.Z)(H,2),N=V[0],T=V[1],W=(0,o.useState)(0),q=(0,i.Z)(W,2),B=q[0],G=q[1],U=(0,o.useState)(10),J=(0,i.Z)(U,2),K=J[0],Q=J[1],X=(0,r.s0)(),Y=Boolean(t),$=function(){O(null)},ee=function(){O(null),T(!0)};return(0,o.useEffect)((function(){(0,m.pf)(I)}),[]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(s.Z,{title:(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(a.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,z.jsx)(a.ZP,{item:!0,children:"All Users"}),(0,z.jsx)(a.ZP,{item:!0,xs:12,md:6,lg:4,sx:{ml:"auto"},children:(0,z.jsx)(c.Z,{variant:"contained",endIcon:(0,z.jsx)(S.Z,{}),onClick:function(){X("add-pet")},children:"Add Pet"})})]})}),children:(0,z.jsxs)(d.Z,{children:[(0,z.jsx)(u.Z,{children:(0,z.jsxs)(h.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,z.jsx)(x.Z,{children:(0,z.jsxs)(p.Z,{children:[(0,z.jsx)(Z.Z,{children:"Created At"}),(0,z.jsx)(Z.Z,{children:"Pet Name"}),(0,z.jsx)(Z.Z,{children:"Device No"}),(0,z.jsx)(Z.Z,{children:"Status"}),(0,z.jsx)(Z.Z,{children:"Actions"})]})}),(0,z.jsx)(g.Z,{children:F.slice(B*K,B*K+K).map((function(e,n){return(0,z.jsxs)(p.Z,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,z.jsx)(Z.Z,{children:(0,m.gg)(e.created_at)}),(0,z.jsx)(Z.Z,{children:e.name}),(0,z.jsx)(Z.Z,{children:e.device_no}),(0,z.jsx)(Z.Z,{children:(0,m.Sh)(e.active)}),(0,z.jsx)(Z.Z,{children:(0,z.jsxs)("div",{children:[(0,z.jsx)(f.Z,{"aria-label":"more",id:"long-button","aria-controls":Y?"demo-customized-menu":void 0,"aria-expanded":Y?"true":void 0,disableElevation:!0,"aria-haspopup":"true",onClick:function(n){return function(e,n){_(n),O(e.currentTarget)}(n,e)},children:(0,z.jsx)(b.Z,{})}),(0,z.jsxs)(P.Z,{id:"demo-customized-menu",anchorEl:t,open:Y,onClose:$,MenuListProps:{"aria-labelledby":"demo-customized-menu"},children:[(0,z.jsxs)(j.Z,{onClick:function(){var e;e=R.id,X("edit-pet/"+e)},children:[(0,z.jsx)(y.Z,{style:{fontSize:25,color:"green"}}),"Edit"]}),(0,z.jsxs)(j.Z,{onClick:function(){var e;e=R.id,X("/pet-geofence/"+e)},children:[(0,z.jsx)(k.Z,{style:{fontSize:25,color:"green"}}),"Draw Geofence"]}),(0,z.jsxs)(j.Z,{onClick:ee,disableRipple:!0,children:[(0,z.jsx)(C.Z,{style:{fontSize:25,color:"red"}}),"Delete"]})]})]})})]},n)}))})]})}),(0,z.jsx)(v.Z,{rowsPerPageOptions:[10,15,20],component:"div",count:F.length,rowsPerPage:K,page:B,onPageChange:function(e,n){G(n)},onRowsPerPageChange:function(e){Q(+e.target.value),G(0)}})]})}),(0,z.jsx)(M.Z,{isModalOpen:N,setIsModalOpen:T,onDelete:function(){(0,l.LD)(R.id).then((function(e){w.Z.success("Pet deleted successfully"),T(!1),(0,m.pf)(I)})).catch((function(e){console.log(e),w.Z.error("Failed to delete user")}))},message:null!=R&&"Are you sure you want to delete ".concat(R.name)})]})}},41434:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45045)),r=t(46417),l=(0,o.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined");n.Z=l},94305:function(e,n,t){var i=t(64836);n.Z=void 0;var o=i(t(45045)),r=t(46417),l=(0,o.default)((0,r.jsx)("path",{d:"M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z"}),"Polyline");n.Z=l}}]);