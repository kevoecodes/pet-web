"use strict";(self.webpackChunkioms_web=self.webpackChunkioms_web||[]).push([[526],{46330:function(e,o,r){r.d(o,{Z:function(){return M}});var a=r(4942),n=r(63366),t=r(87462),l=r(47313),i=r(83061),c=r(21921),d=r(17551),s=r(29439),u=r(91615),p=r(17592),m=r(53800),b=r(99008),h=r(67999),v=r(77430),f=r(32298);function Z(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=r(46417),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(h.Z)((function(e){var o=e.ownerState;return(0,t.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),P=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=l.forwardRef((function(e,o){var r=e.autoFocus,a=e.checked,l=e.checkedIcon,d=e.className,p=e.defaultChecked,h=e.disabled,v=e.disableFocusRipple,f=void 0!==v&&v,y=e.edge,C=void 0!==y&&y,w=e.icon,R=e.id,F=e.inputProps,S=e.inputRef,z=e.name,B=e.onBlur,I=e.onChange,N=e.onFocus,j=e.readOnly,q=e.required,L=void 0!==q&&q,M=e.tabIndex,O=e.type,E=e.value,H=(0,n.Z)(e,g),T=(0,m.Z)({controlled:a,default:Boolean(p),name:"SwitchBase",state:"checked"}),V=(0,s.Z)(T,2),D=V[0],A=V[1],_=(0,b.Z)(),W=h;_&&"undefined"===typeof W&&(W=_.disabled);var G="checkbox"===O||"radio"===O,J=(0,t.Z)({},e,{checked:D,disabled:W,disableFocusRipple:f,edge:C}),K=function(e){var o=e.classes,r=e.checked,a=e.disabled,n=e.edge,t={root:["root",r&&"checked",a&&"disabled",n&&"edge".concat((0,u.Z)(n))],input:["input"]};return(0,c.Z)(t,Z,o)}(J);return(0,k.jsxs)(x,(0,t.Z)({component:"span",className:(0,i.Z)(K.root,d),centerRipple:!0,focusRipple:!f,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){B&&B(e),_&&_.onBlur&&_.onBlur(e)},ownerState:J,ref:o},H,{children:[(0,k.jsx)(P,(0,t.Z)({autoFocus:r,checked:a,defaultChecked:p,className:K.input,disabled:W,id:G?R:void 0,name:z,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;A(o),I&&I(e,o)}},readOnly:j,ref:S,required:L,ownerState:J,tabIndex:M,type:O},"checkbox"===O&&void 0===E?{}:{value:E},F)),D?l:w]}))})),C=r(81171),w=(0,C.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),R=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),F=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),S=r(77342);function z(e){return(0,f.Z)("MuiCheckbox",e)}var B=(0,v.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=(0,p.ZP)(y,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,r.indeterminate&&o.indeterminate,"default"!==r.color&&o["color".concat((0,u.Z)(r.color))]]}})((function(e){var o,r=e.theme,n=e.ownerState;return(0,t.Z)({color:(r.vars||r).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===n.color?r.vars.palette.action.activeChannel:r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,d.Fq)("default"===n.color?r.palette.action.active:r.palette[n.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(o={},(0,a.Z)(o,"&.".concat(B.checked,", &.").concat(B.indeterminate),{color:(r.vars||r).palette[n.color].main}),(0,a.Z)(o,"&.".concat(B.disabled),{color:(r.vars||r).palette.action.disabled}),o))})),j=(0,k.jsx)(R,{}),q=(0,k.jsx)(w,{}),L=(0,k.jsx)(F,{}),M=l.forwardRef((function(e,o){var r,a,d=(0,S.Z)({props:e,name:"MuiCheckbox"}),s=d.checkedIcon,p=void 0===s?j:s,m=d.color,b=void 0===m?"primary":m,h=d.icon,v=void 0===h?q:h,f=d.indeterminate,Z=void 0!==f&&f,g=d.indeterminateIcon,x=void 0===g?L:g,P=d.inputProps,y=d.size,C=void 0===y?"medium":y,w=d.className,R=(0,n.Z)(d,I),F=Z?x:v,B=Z?x:p,M=(0,t.Z)({},d,{color:b,indeterminate:Z,size:C}),O=function(e){var o=e.classes,r=e.indeterminate,a=e.color,n={root:["root",r&&"indeterminate","color".concat((0,u.Z)(a))]},l=(0,c.Z)(n,z,o);return(0,t.Z)({},o,l)}(M);return(0,k.jsx)(N,(0,t.Z)({type:"checkbox",inputProps:(0,t.Z)({"data-indeterminate":Z},P),icon:l.cloneElement(F,{fontSize:null!=(r=F.props.fontSize)?r:C}),checkedIcon:l.cloneElement(B,{fontSize:null!=(a=B.props.fontSize)?a:C}),ownerState:M,ref:o,className:(0,i.Z)(O.root,w)},R,{classes:O}))}))},83929:function(e,o,r){r.d(o,{Z:function(){return y}});var a=r(4942),n=r(63366),t=r(87462),l=r(47313),i=r(83061),c=r(21921),d=r(99008),s=r(61113),u=r(91615),p=r(17592),m=r(77342),b=r(77430),h=r(32298);function v(e){return(0,h.Z)("MuiFormControlLabel",e)}var f=(0,b.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Z=r(80300),k=r(46417),g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],x=(0,p.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[(0,a.Z)({},"& .".concat(f.label),o.label),o.root,o["labelPlacement".concat((0,u.Z)(r.labelPlacement))]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,t.Z)((0,a.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(f.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,a.Z)({},"& .".concat(f.label),(0,a.Z)({},"&.".concat(f.disabled),{color:(o.vars||o).palette.text.disabled})))})),P=(0,p.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,o){return o.asterisk}})((function(e){var o=e.theme;return(0,a.Z)({},"&.".concat(f.error),{color:(o.vars||o).palette.error.main})})),y=l.forwardRef((function(e,o){var r,a,p=(0,m.Z)({props:e,name:"MuiFormControlLabel"}),b=p.className,h=p.componentsProps,f=void 0===h?{}:h,y=p.control,C=p.disabled,w=p.disableTypography,R=p.label,F=p.labelPlacement,S=void 0===F?"end":F,z=p.required,B=p.slotProps,I=void 0===B?{}:B,N=(0,n.Z)(p,g),j=(0,d.Z)(),q=null!=(r=null!=C?C:y.props.disabled)?r:null==j?void 0:j.disabled,L=null!=z?z:y.props.required,M={disabled:q,required:L};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof y.props[e]&&"undefined"!==typeof p[e]&&(M[e]=p[e])}));var O=(0,Z.Z)({props:p,muiFormControl:j,states:["error"]}),E=(0,t.Z)({},p,{disabled:q,labelPlacement:S,required:L,error:O.error}),H=function(e){var o=e.classes,r=e.disabled,a=e.labelPlacement,n=e.error,t=e.required,l={root:["root",r&&"disabled","labelPlacement".concat((0,u.Z)(a)),n&&"error",t&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",n&&"error"]};return(0,c.Z)(l,v,o)}(E),T=null!=(a=I.typography)?a:f.typography,V=R;return null==V||V.type===s.Z||w||(V=(0,k.jsx)(s.Z,(0,t.Z)({component:"span"},T,{className:(0,i.Z)(H.label,null==T?void 0:T.className),children:V}))),(0,k.jsxs)(x,(0,t.Z)({className:(0,i.Z)(H.root,b),ownerState:E,ref:o},N,{children:[l.cloneElement(y,M),V,L&&(0,k.jsxs)(P,{ownerState:E,"aria-hidden":!0,className:H.asterisk,children:["\u2009","*"]})]}))}))}}]);