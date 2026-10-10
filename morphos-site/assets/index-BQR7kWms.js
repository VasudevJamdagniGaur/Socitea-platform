(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var n0={exports:{}},hu={},i0={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ox=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),Wp=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var r0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,o0={};function qo(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}qo.prototype.isReactComponent={};qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a0(){}a0.prototype=qo.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=o0,this.updater=n||r0}var Th=Eh.prototype=new a0;Th.constructor=Eh;s0(Th,qo.prototype);Th.isPureReactComponent=!0;var Xp=Array.isArray,l0=Object.prototype.hasOwnProperty,wh={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)l0.call(e,i)&&!c0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ll,type:t,key:s,ref:o,props:r,_owner:wh.current}}function dx(t,e){return{$$typeof:ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===ll}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function hc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ll:case tx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uu(o,0):i,Xp(r)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),hc(r,e,n,"",function(c){return c})):r!=null&&(Ah(r)&&(r=dx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uu(s,a);o+=hc(s,e,n,l,r)}else if(l=fx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uu(s,a++),o+=hc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var i=[],r=0;return hc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function px(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ri={current:null},pc={transition:null},mx={ReactCurrentDispatcher:ri,ReactCurrentBatchConfig:pc,ReactCurrentOwner:wh};function f0(){throw Error("act(...) is not supported in production builds of React.")}pt.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=qo;pt.Fragment=nx;pt.Profiler=rx;pt.PureComponent=Eh;pt.StrictMode=ix;pt.Suspense=lx;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;pt.act=f0;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=s0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)l0.call(e,l)&&!c0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ll,type:t.type,key:r,ref:s,props:i,_owner:o}};pt.createContext=function(t){return t={$$typeof:ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sx,_context:t},t.Consumer=t};pt.createElement=u0;pt.createFactory=function(t){var e=u0.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:ax,render:t}};pt.isValidElement=Ah;pt.lazy=function(t){return{$$typeof:ux,_payload:{_status:-1,_result:t},_init:px}};pt.memo=function(t,e){return{$$typeof:cx,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=pc.transition;pc.transition={};try{t()}finally{pc.transition=e}};pt.unstable_act=f0;pt.useCallback=function(t,e){return ri.current.useCallback(t,e)};pt.useContext=function(t){return ri.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return ri.current.useDeferredValue(t)};pt.useEffect=function(t,e){return ri.current.useEffect(t,e)};pt.useId=function(){return ri.current.useId()};pt.useImperativeHandle=function(t,e,n){return ri.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return ri.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return ri.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return ri.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return ri.current.useReducer(t,e,n)};pt.useRef=function(t){return ri.current.useRef(t)};pt.useState=function(t){return ri.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return ri.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return ri.current.useTransition()};pt.version="18.3.1";i0.exports=pt;var mr=i0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx=mr,_x=Symbol.for("react.element"),vx=Symbol.for("react.fragment"),xx=Object.prototype.hasOwnProperty,Sx=gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yx={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xx.call(e,i)&&!yx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_x,type:t,key:s,ref:o,props:r,_owner:Sx.current}}hu.Fragment=vx;hu.jsx=d0;hu.jsxs=d0;n0.exports=hu;var _t=n0.exports,h0={exports:{}},Ri={},p0={exports:{}},m0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,U){var W=O.length;O.push(U);e:for(;0<W;){var Y=W-1>>>1,ce=O[Y];if(0<r(ce,U))O[Y]=U,O[W]=ce,W=Y;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var U=O[0],W=O.pop();if(W!==U){O[0]=W;e:for(var Y=0,ce=O.length,Ae=ce>>>1;Y<Ae;){var nt=2*(Y+1)-1,qe=O[nt],Xe=nt+1,K=O[Xe];if(0>r(qe,W))Xe<ce&&0>r(K,qe)?(O[Y]=K,O[Xe]=W,Y=Xe):(O[Y]=qe,O[nt]=W,Y=nt);else if(Xe<ce&&0>r(K,W))O[Y]=K,O[Xe]=W,Y=Xe;else break e}}return U}function r(O,U){var W=O.sortIndex-U.sortIndex;return W!==0?W:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,u=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(O){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=O)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function S(O){if(y=!1,M(O),!g)if(n(l)!==null)g=!0,Z(T);else{var U=n(c);U!==null&&X(S,U.startTime-O)}}function T(O,U){g=!1,y&&(y=!1,f(v),v=-1),p=!0;var W=u;try{for(M(U),h=n(l);h!==null&&(!(h.expirationTime>U)||O&&!P());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,u=h.priorityLevel;var ce=Y(h.expirationTime<=U);U=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&i(l),M(U)}else i(l);h=n(l)}if(h!==null)var Ae=!0;else{var nt=n(c);nt!==null&&X(S,nt.startTime-U),Ae=!1}return Ae}finally{h=null,u=W,p=!1}}var w=!1,A=null,v=-1,C=5,b=-1;function P(){return!(t.unstable_now()-b<C)}function F(){if(A!==null){var O=t.unstable_now();b=O;var U=!0;try{U=A(!0,O)}finally{U?H():(w=!1,A=null)}}else w=!1}var H;if(typeof _=="function")H=function(){_(F)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,k=D.port2;D.port1.onmessage=F,H=function(){k.postMessage(null)}}else H=function(){m(F,0)};function Z(O){A=O,w||(w=!0,H())}function X(O,U){v=m(function(){O(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(u){case 1:case 2:case 3:var U=3;break;default:U=u}var W=u;u=U;try{return O()}finally{u=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=u;u=O;try{return U()}finally{u=W}},t.unstable_scheduleCallback=function(O,U,W){var Y=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Y+W:Y):W=Y,O){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=W+ce,O={id:d++,callback:U,priorityLevel:O,startTime:W,expirationTime:ce,sortIndex:-1},W>Y?(O.sortIndex=W,e(c,O),n(l)===null&&O===n(c)&&(y?(f(v),v=-1):y=!0,X(S,W-Y))):(O.sortIndex=ce,e(l,O),g||p||(g=!0,Z(T))),O},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(O){var U=u;return function(){var W=u;u=U;try{return O.apply(this,arguments)}finally{u=W}}}})(m0);p0.exports=m0;var Mx=p0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=mr,Ci=Mx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g0=new Set,za={};function Ys(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(za[t]=e,t=0;t<e.length;t++)g0.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qp={},$p={};function wx(t){return Gf.call($p,t)?!0:Gf.call(qp,t)?!1:Tx.test(t)?$p[t]=!0:(qp[t]=!0,!1)}function Ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cx(t,e,n,i){if(e===null||typeof e>"u"||Ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function si(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bn[t]=new si(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bn[e]=new si(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bn[t]=new si(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bn[t]=new si(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bn[t]=new si(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bn[t]=new si(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bn[t]=new si(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bn[t]=new si(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bn[t]=new si(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Bn[e]=new si(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Rh);Bn[e]=new si(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Rh);Bn[e]=new si(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bn[t]=new si(t,1,!1,t.toLowerCase(),null,!1,!1)});Bn.xlinkHref=new si("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bn[t]=new si(t,1,!1,t.toLowerCase(),null,!0,!0)});function bh(t,e,n,i){var r=Bn.hasOwnProperty(e)?Bn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,n,r,i)&&(n=null),i||r===null?wx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yr=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),go=Symbol.for("react.portal"),_o=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Yf=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),x0=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function aa(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var hn=Object.assign,Fu;function Ma(t){if(Fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fu=e&&e[1]||""}return`
`+Fu+t}var Ou=!1;function Bu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function Rx(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=Bu(t.type,!1),t;case 11:return t=Bu(t.type.render,!1),t;case 1:return t=Bu(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _o:return"Fragment";case go:return"Portal";case Wf:return"Profiler";case Ph:return"StrictMode";case Xf:return"Suspense";case Yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case es:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Px(t){var e=S0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=Px(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=S0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $f(t,e){var n=e.checked;return hn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gs(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function M0(t,e){e=e.checked,e!=null&&bh(t,"checked",e,!1)}function Kf(t,e){M0(t,e);var n=gs(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zf(t,e.type,gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zf(t,e,n){(e!=="number"||Nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function bo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gs(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return hn({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Ea(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gs(n)}}function E0(t,e){var n=gs(e.value),i=gs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,w0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){Lx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function A0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function C0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=A0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dx=hn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(Dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function Nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,Po=null,Lo=null;function em(t){if(t=fl(t)){if(typeof nd!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=vu(e),nd(t.stateNode,t.type,e))}}function R0(t){Po?Lo?Lo.push(t):Lo=[t]:Po=t}function b0(){if(Po){var t=Po,e=Lo;if(Lo=Po=null,em(t),e)for(t=0;t<e.length;t++)em(e[t])}}function P0(t,e){return t(e)}function L0(){}var ku=!1;function D0(t,e,n){if(ku)return t(e,n);ku=!0;try{return P0(t,e,n)}finally{ku=!1,(Po!==null||Lo!==null)&&(L0(),b0())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=vu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var id=!1;if(Hr)try{var la={};Object.defineProperty(la,"passive",{get:function(){id=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{id=!1}function Nx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ba=!1,Ic=null,Uc=!1,rd=null,Ix={onError:function(t){ba=!0,Ic=t}};function Ux(t,e,n,i,r,s,o,a,l){ba=!1,Ic=null,Nx.apply(Ix,arguments)}function Fx(t,e,n,i,r,s,o,a,l){if(Ux.apply(this,arguments),ba){if(ba){var c=Ic;ba=!1,Ic=null}else throw Error(ae(198));Uc||(Uc=!0,rd=c)}}function qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tm(t){if(qs(t)!==t)throw Error(ae(188))}function Ox(t){var e=t.alternate;if(!e){if(e=qs(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tm(r),t;if(s===i)return tm(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function I0(t){return t=Ox(t),t!==null?U0(t):null}function U0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U0(t);if(e!==null)return e;t=t.sibling}return null}var F0=Ci.unstable_scheduleCallback,nm=Ci.unstable_cancelCallback,Bx=Ci.unstable_shouldYield,kx=Ci.unstable_requestPaint,xn=Ci.unstable_now,zx=Ci.unstable_getCurrentPriorityLevel,Ih=Ci.unstable_ImmediatePriority,O0=Ci.unstable_UserBlockingPriority,Fc=Ci.unstable_NormalPriority,Hx=Ci.unstable_LowPriority,B0=Ci.unstable_IdlePriority,pu=null,Sr=null;function Vx(t){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var tr=Math.clz32?Math.clz32:Xx,Gx=Math.log,Wx=Math.LN2;function Xx(t){return t>>>=0,t===0?32:31-(Gx(t)/Wx|0)|0}var Cl=64,Rl=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=n&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-tr(e),r=1<<n,i|=t[n],e&=~r;return i}function Yx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tr(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Yx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tr(e),t[e]=n}function $x(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-tr(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-tr(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var zt=0;function z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,Fh,V0,G0,W0,od=!1,bl=[],ls=null,cs=null,us=null,Ga=new Map,Wa=new Map,is=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function im(t,e){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fl(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zx(t,e,n,i,r){switch(e){case"focusin":return ls=ca(ls,t,e,n,i,r),!0;case"dragenter":return cs=ca(cs,t,e,n,i,r),!0;case"mouseover":return us=ca(us,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ca(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wa.set(s,ca(Wa.get(s)||null,t,e,n,i,r)),!0}return!1}function X0(t){var e=bs(t.target);if(e!==null){var n=qs(e);if(n!==null){if(e=n.tag,e===13){if(e=N0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);td=i,n.target.dispatchEvent(i),td=null}else return e=fl(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function rm(t,e,n){mc(t)&&n.delete(e)}function Qx(){od=!1,ls!==null&&mc(ls)&&(ls=null),cs!==null&&mc(cs)&&(cs=null),us!==null&&mc(us)&&(us=null),Ga.forEach(rm),Wa.forEach(rm)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Ci.unstable_scheduleCallback(Ci.unstable_NormalPriority,Qx)))}function Xa(t){function e(r){return ua(r,t)}if(0<bl.length){ua(bl[0],t);for(var n=1;n<bl.length;n++){var i=bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ls!==null&&ua(ls,t),cs!==null&&ua(cs,t),us!==null&&ua(us,t),Ga.forEach(e),Wa.forEach(e),n=0;n<is.length;n++)i=is[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<is.length&&(n=is[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&is.shift()}var Do=Yr.ReactCurrentBatchConfig,Bc=!0;function Jx(t,e,n,i){var r=zt,s=Do.transition;Do.transition=null;try{zt=1,Oh(t,e,n,i)}finally{zt=r,Do.transition=s}}function jx(t,e,n,i){var r=zt,s=Do.transition;Do.transition=null;try{zt=4,Oh(t,e,n,i)}finally{zt=r,Do.transition=s}}function Oh(t,e,n,i){if(Bc){var r=ad(t,e,n,i);if(r===null)Zu(t,e,i,kc,n),im(t,i);else if(Zx(r,t,e,n,i))i.stopPropagation();else if(im(t,i),e&4&&-1<Kx.indexOf(t)){for(;r!==null;){var s=fl(r);if(s!==null&&H0(s),s=ad(t,e,n,i),s===null&&Zu(t,e,i,kc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var kc=null;function ad(t,e,n,i){if(kc=null,t=Nh(i),t=bs(t),t!==null)if(e=qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function Y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zx()){case Ih:return 1;case O0:return 4;case Fc:case Hx:return 16;case B0:return 536870912;default:return 16}default:return 16}}var os=null,Bh=null,gc=null;function q0(){if(gc)return gc;var t,e=Bh,n=e.length,i,r="value"in os?os.value:os.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gc=r.slice(t,1<i?1-i:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function sm(){return!1}function bi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:sm,this.isPropagationStopped=sm,this}return hn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kh=bi($o),ul=hn({},$o,{view:0,detail:0}),eS=bi(ul),Hu,Vu,fa,mu=hn({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(Hu=t.screenX-fa.screenX,Vu=t.screenY-fa.screenY):Vu=Hu=0,fa=t),Hu)},movementY:function(t){return"movementY"in t?t.movementY:Vu}}),om=bi(mu),tS=hn({},mu,{dataTransfer:0}),nS=bi(tS),iS=hn({},ul,{relatedTarget:0}),Gu=bi(iS),rS=hn({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=bi(rS),oS=hn({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=bi(oS),lS=hn({},$o,{data:0}),am=bi(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fS[t])?!!e[t]:!1}function zh(){return dS}var hS=hn({},ul,{key:function(t){if(t.key){var e=cS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=bi(hS),mS=hn({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=bi(mS),gS=hn({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),_S=bi(gS),vS=hn({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=bi(vS),SS=hn({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=bi(SS),MS=[9,13,27,32],Hh=Hr&&"CompositionEvent"in window,Pa=null;Hr&&"documentMode"in document&&(Pa=document.documentMode);var ES=Hr&&"TextEvent"in window&&!Pa,$0=Hr&&(!Hh||Pa&&8<Pa&&11>=Pa),cm=" ",um=!1;function K0(t,e){switch(t){case"keyup":return MS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function TS(t,e){switch(t){case"compositionend":return Z0(e);case"keypress":return e.which!==32?null:(um=!0,cm);case"textInput":return t=e.data,t===cm&&um?null:t;default:return null}}function wS(t,e){if(vo)return t==="compositionend"||!Hh&&K0(t,e)?(t=q0(),gc=Bh=os=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $0&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AS[t.type]:e==="textarea"}function Q0(t,e,n,i){R0(i),e=zc(e,"onChange"),0<e.length&&(n=new kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Ya=null;function CS(t){l_(t,0)}function gu(t){var e=yo(t);if(y0(e))return t}function RS(t,e){if(t==="change")return e}var J0=!1;if(Hr){var Wu;if(Hr){var Xu="oninput"in document;if(!Xu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Xu=typeof dm.oninput=="function"}Wu=Xu}else Wu=!1;J0=Wu&&(!document.documentMode||9<document.documentMode)}function hm(){La&&(La.detachEvent("onpropertychange",j0),Ya=La=null)}function j0(t){if(t.propertyName==="value"&&gu(Ya)){var e=[];Q0(e,Ya,t,Nh(t)),D0(CS,e)}}function bS(t,e,n){t==="focusin"?(hm(),La=e,Ya=n,La.attachEvent("onpropertychange",j0)):t==="focusout"&&hm()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Ya)}function LS(t,e){if(t==="click")return gu(e)}function DS(t,e){if(t==="input"||t==="change")return gu(e)}function NS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ir=typeof Object.is=="function"?Object.is:NS;function qa(t,e){if(ir(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gf.call(e,r)||!ir(t[r],e[r]))return!1}return!0}function pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mm(t,e){var n=pm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function e_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?e_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function t_(){for(var t=window,e=Nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nc(t.document)}return e}function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IS(t){var e=t_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&e_(n.ownerDocument.documentElement,n)){if(i!==null&&Vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mm(n,s);var o=mm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var US=Hr&&"documentMode"in document&&11>=document.documentMode,xo=null,ld=null,Da=null,cd=!1;function gm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||xo==null||xo!==Nc(i)||(i=xo,"selectionStart"in i&&Vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&qa(Da,i)||(Da=i,i=zc(ld,"onSelect"),0<i.length&&(e=new kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xo)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var So={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Yu={},n_={};Hr&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function _u(t){if(Yu[t])return Yu[t];if(!So[t])return t;var e=So[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in n_)return Yu[t]=e[n];return t}var i_=_u("animationend"),r_=_u("animationiteration"),s_=_u("animationstart"),o_=_u("transitionend"),a_=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(t,e){a_.set(t,e),Ys(e,[t])}for(var qu=0;qu<_m.length;qu++){var $u=_m[qu],FS=$u.toLowerCase(),OS=$u[0].toUpperCase()+$u.slice(1);vs(FS,"on"+OS)}vs(i_,"onAnimationEnd");vs(r_,"onAnimationIteration");vs(s_,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(o_,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BS=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function vm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Fx(i,e,void 0,t),t.currentTarget=null}function l_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vm(r,a,c),s=l}}}if(Uc)throw t=rd,Uc=!1,rd=null,t}function nn(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var i=t+"__bubble";n.has(i)||(c_(e,t,2,!1),n.add(i))}function Ku(t,e,n){var i=0;e&&(i|=4),c_(n,t,i,e)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Dl]){t[Dl]=!0,g0.forEach(function(n){n!=="selectionchange"&&(BS.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dl]||(e[Dl]=!0,Ku("selectionchange",!1,e))}}function c_(t,e,n,i){switch(Y0(e)){case 1:var r=Jx;break;case 4:r=jx;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=bs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}D0(function(){var c=s,d=Nh(n),h=[];e:{var u=a_.get(t);if(u!==void 0){var p=kh,g=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=pS;break;case"focusin":g="focus",p=Gu;break;case"focusout":g="blur",p=Gu;break;case"beforeblur":case"afterblur":p=Gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_S;break;case i_:case r_:case s_:p=sS;break;case o_:p=xS;break;case"scroll":p=eS;break;case"wheel":p=yS;break;case"copy":case"cut":case"paste":p=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=lm}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?u!==null?u+"Capture":null:u;y=[];for(var _=c,M;_!==null;){M=_;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,f!==null&&(S=Va(_,f),S!=null&&y.push(Ka(_,S,M)))),m)break;_=_.return}0<y.length&&(u=new p(u,g,null,n,d),h.push({event:u,listeners:y}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==td&&(g=n.relatedTarget||n.fromElement)&&(bs(g)||g[Vr]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?bs(g):null,g!==null&&(m=qs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=om,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=lm,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?u:yo(p),M=g==null?u:yo(g),u=new y(S,_+"leave",p,n,d),u.target=m,u.relatedTarget=M,S=null,bs(d)===c&&(y=new y(f,_+"enter",g,n,d),y.target=M,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,f=g,_=0,M=y;M;M=js(M))_++;for(M=0,S=f;S;S=js(S))M++;for(;0<_-M;)y=js(y),_--;for(;0<M-_;)f=js(f),M--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=js(y),f=js(f)}y=null}else y=null;p!==null&&xm(h,u,p,y,!1),g!==null&&m!==null&&xm(h,m,g,y,!0)}}e:{if(u=c?yo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=RS;else if(fm(u))if(J0)T=DS;else{T=PS;var w=bS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=LS);if(T&&(T=T(t,c))){Q0(h,T,n,d);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Zf(u,"number",u.value)}switch(w=c?yo(c):window,t){case"focusin":(fm(w)||w.contentEditable==="true")&&(xo=w,ld=c,Da=null);break;case"focusout":Da=ld=xo=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,gm(h,n,d);break;case"selectionchange":if(US)break;case"keydown":case"keyup":gm(h,n,d)}var A;if(Hh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else vo?K0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&($0&&n.locale!=="ko"&&(vo||v!=="onCompositionStart"?v==="onCompositionEnd"&&vo&&(A=q0()):(os=d,Bh="value"in os?os.value:os.textContent,vo=!0)),w=zc(c,v),0<w.length&&(v=new am(v,t,null,n,d),h.push({event:v,listeners:w}),A?v.data=A:(A=Z0(n),A!==null&&(v.data=A)))),(A=ES?TS(t,n):wS(t,n))&&(c=zc(c,"onBeforeInput"),0<c.length&&(d=new am("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}l_(h,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Va(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Va(n,s),l!=null&&o.unshift(Ka(n,l,a))):r||(l=Va(n,s),l!=null&&o.push(Ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(zS,"")}function Nl(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(ae(425))}function Hc(){}var ud=null,fd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(t){return ym.resolve(null).then(t).catch(GS)}:hd;function GS(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function fs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),_r="__reactFiber$"+Ko,Za="__reactProps$"+Ko,Vr="__reactContainer$"+Ko,pd="__reactEvents$"+Ko,WS="__reactListeners$"+Ko,XS="__reactHandles$"+Ko;function bs(t){var e=t[_r];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vr]||n[_r]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mm(t);t!==null;){if(n=t[_r])return n;t=Mm(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[_r]||t[Vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function vu(t){return t[Za]||null}var md=[],Mo=-1;function xs(t){return{current:t}}function rn(t){0>Mo||(t.current=md[Mo],md[Mo]=null,Mo--)}function Jt(t,e){Mo++,md[Mo]=t.current,t.current=e}var _s={},Yn=xs(_s),di=xs(!1),Os=_s;function Bo(t,e){var n=t.type.contextTypes;if(!n)return _s;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hi(t){return t=t.childContextTypes,t!=null}function Vc(){rn(di),rn(Yn)}function Em(t,e,n){if(Yn.current!==_s)throw Error(ae(168));Jt(Yn,e),Jt(di,n)}function u_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,bx(t)||"Unknown",r));return hn({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_s,Os=Yn.current,Jt(Yn,t),Jt(di,di.current),!0}function Tm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=u_(t,e,Os),i.__reactInternalMemoizedMergedChildContext=t,rn(di),rn(Yn),Jt(Yn,t)):rn(di),Jt(di,n)}var Ir=null,xu=!1,Ju=!1;function f_(t){Ir===null?Ir=[t]:Ir.push(t)}function YS(t){xu=!0,f_(t)}function Ss(){if(!Ju&&Ir!==null){Ju=!0;var t=0,e=zt;try{var n=Ir;for(zt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ir=null,xu=!1}catch(r){throw Ir!==null&&(Ir=Ir.slice(t+1)),F0(Ih,Ss),r}finally{zt=e,Ju=!1}}return null}var Eo=[],To=0,Wc=null,Xc=0,Ii=[],Ui=0,Bs=null,Fr=1,Or="";function Cs(t,e){Eo[To++]=Xc,Eo[To++]=Wc,Wc=t,Xc=e}function d_(t,e,n){Ii[Ui++]=Fr,Ii[Ui++]=Or,Ii[Ui++]=Bs,Bs=t;var i=Fr;t=Or;var r=32-tr(i)-1;i&=~(1<<r),n+=1;var s=32-tr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-tr(e)+r|n<<r|i,Or=s+t}else Fr=1<<s|n<<r|i,Or=t}function Gh(t){t.return!==null&&(Cs(t,1),d_(t,1,0))}function Wh(t){for(;t===Wc;)Wc=Eo[--To],Eo[To]=null,Xc=Eo[--To],Eo[To]=null;for(;t===Bs;)Bs=Ii[--Ui],Ii[Ui]=null,Or=Ii[--Ui],Ii[Ui]=null,Fr=Ii[--Ui],Ii[Ui]=null}var wi=null,Ti=null,an=!1,Ji=null;function h_(t,e){var n=Bi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wi=t,Ti=fs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wi=t,Ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bs!==null?{id:Fr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wi=t,Ti=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(an){var e=Ti;if(e){var n=e;if(!wm(t,e)){if(gd(t))throw Error(ae(418));e=fs(n.nextSibling);var i=wi;e&&wm(t,e)?h_(i,n):(t.flags=t.flags&-4097|2,an=!1,wi=t)}}else{if(gd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,an=!1,wi=t}}}function Am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wi=t}function Il(t){if(t!==wi)return!1;if(!an)return Am(t),an=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=Ti)){if(gd(t))throw p_(),Error(ae(418));for(;e;)h_(t,e),e=fs(e.nextSibling)}if(Am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ti=fs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ti=null}}else Ti=wi?fs(t.stateNode.nextSibling):null;return!0}function p_(){for(var t=Ti;t;)t=fs(t.nextSibling)}function ko(){Ti=wi=null,an=!1}function Xh(t){Ji===null?Ji=[t]:Ji.push(t)}var qS=Yr.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ul(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cm(t){var e=t._init;return e(t._payload)}function m_(t){function e(f,_){if(t){var M=f.deletions;M===null?(f.deletions=[_],f.flags|=16):M.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=ms(f,_),f.index=0,f.sibling=null,f}function s(f,_,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<_?(f.flags|=2,_):M):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,M,S){return _===null||_.tag!==6?(_=of(M,f.mode,S),_.return=f,_):(_=r(_,M),_.return=f,_)}function l(f,_,M,S){var T=M.type;return T===_o?d(f,_,M.props.children,S,M.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===es&&Cm(T)===_.type)?(S=r(_,M.props),S.ref=da(f,_,M),S.return=f,S):(S=Tc(M.type,M.key,M.props,null,f.mode,S),S.ref=da(f,_,M),S.return=f,S)}function c(f,_,M,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=af(M,f.mode,S),_.return=f,_):(_=r(_,M.children||[]),_.return=f,_)}function d(f,_,M,S,T){return _===null||_.tag!==7?(_=Fs(M,f.mode,S,T),_.return=f,_):(_=r(_,M),_.return=f,_)}function h(f,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return _=of(""+_,f.mode,M),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:return M=Tc(_.type,_.key,_.props,null,f.mode,M),M.ref=da(f,null,_),M.return=f,M;case go:return _=af(_,f.mode,M),_.return=f,_;case es:var S=_._init;return h(f,S(_._payload),M)}if(Ea(_)||aa(_))return _=Fs(_,f.mode,M,null),_.return=f,_;Ul(f,_)}return null}function u(f,_,M,S){var T=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:a(f,_,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Tl:return M.key===T?l(f,_,M,S):null;case go:return M.key===T?c(f,_,M,S):null;case es:return T=M._init,u(f,_,T(M._payload),S)}if(Ea(M)||aa(M))return T!==null?null:d(f,_,M,S,null);Ul(f,M)}return null}function p(f,_,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(M)||null,a(_,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Tl:return f=f.get(S.key===null?M:S.key)||null,l(_,f,S,T);case go:return f=f.get(S.key===null?M:S.key)||null,c(_,f,S,T);case es:var w=S._init;return p(f,_,M,w(S._payload),T)}if(Ea(S)||aa(S))return f=f.get(M)||null,d(_,f,S,T,null);Ul(_,S)}return null}function g(f,_,M,S){for(var T=null,w=null,A=_,v=_=0,C=null;A!==null&&v<M.length;v++){A.index>v?(C=A,A=null):C=A.sibling;var b=u(f,A,M[v],S);if(b===null){A===null&&(A=C);break}t&&A&&b.alternate===null&&e(f,A),_=s(b,_,v),w===null?T=b:w.sibling=b,w=b,A=C}if(v===M.length)return n(f,A),an&&Cs(f,v),T;if(A===null){for(;v<M.length;v++)A=h(f,M[v],S),A!==null&&(_=s(A,_,v),w===null?T=A:w.sibling=A,w=A);return an&&Cs(f,v),T}for(A=i(f,A);v<M.length;v++)C=p(A,f,v,M[v],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?v:C.key),_=s(C,_,v),w===null?T=C:w.sibling=C,w=C);return t&&A.forEach(function(P){return e(f,P)}),an&&Cs(f,v),T}function y(f,_,M,S){var T=aa(M);if(typeof T!="function")throw Error(ae(150));if(M=T.call(M),M==null)throw Error(ae(151));for(var w=T=null,A=_,v=_=0,C=null,b=M.next();A!==null&&!b.done;v++,b=M.next()){A.index>v?(C=A,A=null):C=A.sibling;var P=u(f,A,b.value,S);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(f,A),_=s(P,_,v),w===null?T=P:w.sibling=P,w=P,A=C}if(b.done)return n(f,A),an&&Cs(f,v),T;if(A===null){for(;!b.done;v++,b=M.next())b=h(f,b.value,S),b!==null&&(_=s(b,_,v),w===null?T=b:w.sibling=b,w=b);return an&&Cs(f,v),T}for(A=i(f,A);!b.done;v++,b=M.next())b=p(A,f,v,b.value,S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?v:b.key),_=s(b,_,v),w===null?T=b:w.sibling=b,w=b);return t&&A.forEach(function(F){return e(f,F)}),an&&Cs(f,v),T}function m(f,_,M,S){if(typeof M=="object"&&M!==null&&M.type===_o&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Tl:e:{for(var T=M.key,w=_;w!==null;){if(w.key===T){if(T=M.type,T===_o){if(w.tag===7){n(f,w.sibling),_=r(w,M.props.children),_.return=f,f=_;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===es&&Cm(T)===w.type){n(f,w.sibling),_=r(w,M.props),_.ref=da(f,w,M),_.return=f,f=_;break e}n(f,w);break}else e(f,w);w=w.sibling}M.type===_o?(_=Fs(M.props.children,f.mode,S,M.key),_.return=f,f=_):(S=Tc(M.type,M.key,M.props,null,f.mode,S),S.ref=da(f,_,M),S.return=f,f=S)}return o(f);case go:e:{for(w=M.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){n(f,_.sibling),_=r(_,M.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=af(M,f.mode,S),_.return=f,f=_}return o(f);case es:return w=M._init,m(f,_,w(M._payload),S)}if(Ea(M))return g(f,_,M,S);if(aa(M))return y(f,_,M,S);Ul(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,M),_.return=f,f=_):(n(f,_),_=of(M,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var zo=m_(!0),g_=m_(!1),Yc=xs(null),qc=null,wo=null,Yh=null;function qh(){Yh=wo=qc=null}function $h(t){var e=Yc.current;rn(Yc),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function No(t,e){qc=t,Yh=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fi=!0),t.firstContext=null)}function zi(t){var e=t._currentValue;if(Yh!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(qc===null)throw Error(ae(308));wo=t,qc.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var Ps=null;function Kh(t){Ps===null?Ps=[t]:Ps.push(t)}function __(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gr(t,i)}function Gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ts=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ds(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,At&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gr(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gr(t,n)}function vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}function Rm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(u=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,u);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,u=typeof g=="function"?g.call(p,h,u):g,u==null)break e;h=hn({},h,u);break e;case 2:ts=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zs|=o,t.lanes=o,t.memoizedState=h}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var dl={},yr=xs(dl),Qa=xs(dl),Ja=xs(dl);function Ls(t){if(t===dl)throw Error(ae(174));return t}function Qh(t,e){switch(Jt(Ja,e),Jt(Qa,t),Jt(yr,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jf(e,t)}rn(yr),Jt(yr,e)}function Ho(){rn(yr),rn(Qa),rn(Ja)}function x_(t){Ls(Ja.current);var e=Ls(yr.current),n=Jf(e,t.type);e!==n&&(Jt(Qa,t),Jt(yr,n))}function Jh(t){Qa.current===t&&(rn(yr),rn(Qa))}var fn=xs(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ju=[];function jh(){for(var t=0;t<ju.length;t++)ju[t]._workInProgressVersionPrimary=null;ju.length=0}var xc=Yr.ReactCurrentDispatcher,ef=Yr.ReactCurrentBatchConfig,ks=0,dn=null,wn=null,Dn=null,Zc=!1,Na=!1,ja=0,$S=0;function kn(){throw Error(ae(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ir(t[n],e[n]))return!1;return!0}function tp(t,e,n,i,r,s){if(ks=s,dn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xc.current=t===null||t.memoizedState===null?JS:jS,t=n(i,r),Na){s=0;do{if(Na=!1,ja=0,25<=s)throw Error(ae(301));s+=1,Dn=wn=null,e.updateQueue=null,xc.current=ey,t=n(i,r)}while(Na)}if(xc.current=Qc,e=wn!==null&&wn.next!==null,ks=0,Dn=wn=dn=null,Zc=!1,e)throw Error(ae(300));return t}function np(){var t=ja!==0;return ja=0,t}function pr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?dn.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function Hi(){if(wn===null){var t=dn.alternate;t=t!==null?t.memoizedState:null}else t=wn.next;var e=Dn===null?dn.memoizedState:Dn.next;if(e!==null)Dn=e,wn=t;else{if(t===null)throw Error(ae(310));wn=t,t={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Dn===null?dn.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function el(t,e){return typeof e=="function"?e(t):e}function tf(t){var e=Hi(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=wn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ks&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dn.lanes|=d,zs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ir(i,e.memoizedState)||(fi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dn.lanes|=s,zs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nf(t){var e=Hi(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ir(s,e.memoizedState)||(fi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function S_(){}function y_(t,e){var n=dn,i=Hi(),r=e(),s=!ir(i.memoizedState,r);if(s&&(i.memoizedState=r,fi=!0),i=i.queue,ip(T_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dn!==null&&Dn.memoizedState.tag&1){if(n.flags|=2048,tl(9,E_.bind(null,n,i,r,e),void 0,null),Nn===null)throw Error(ae(349));ks&30||M_(n,e,r)}return r}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dn.updateQueue,e===null?(e={lastEffect:null,stores:null},dn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function E_(t,e,n,i){e.value=n,e.getSnapshot=i,w_(e)&&A_(t)}function T_(t,e,n){return n(function(){w_(e)&&A_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ir(t,n)}catch{return!0}}function A_(t){var e=Gr(t,1);e!==null&&nr(e,t,1,-1)}function Pm(t){var e=pr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},e.queue=t,t=t.dispatch=QS.bind(null,dn,t),[e.memoizedState,t]}function tl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dn.updateQueue,e===null?(e={lastEffect:null,stores:null},dn.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function C_(){return Hi().memoizedState}function Sc(t,e,n,i){var r=pr();dn.flags|=t,r.memoizedState=tl(1|e,n,void 0,i===void 0?null:i)}function Su(t,e,n,i){var r=Hi();i=i===void 0?null:i;var s=void 0;if(wn!==null){var o=wn.memoizedState;if(s=o.destroy,i!==null&&ep(i,o.deps)){r.memoizedState=tl(e,n,s,i);return}}dn.flags|=t,r.memoizedState=tl(1|e,n,s,i)}function Lm(t,e){return Sc(8390656,8,t,e)}function ip(t,e){return Su(2048,8,t,e)}function R_(t,e){return Su(4,2,t,e)}function b_(t,e){return Su(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L_(t,e,n){return n=n!=null?n.concat([t]):null,Su(4,4,P_.bind(null,e,t),n)}function rp(){}function D_(t,e){var n=Hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function N_(t,e){var n=Hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return ks&21?(ir(n,e)||(n=k0(),dn.lanes|=n,zs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fi=!0),t.memoizedState=n)}function KS(t,e){var n=zt;zt=n!==0&&4>n?n:4,t(!0);var i=ef.transition;ef.transition={};try{t(!1),e()}finally{zt=n,ef.transition=i}}function U_(){return Hi().memoizedState}function ZS(t,e,n){var i=ps(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},F_(t))O_(e,n);else if(n=__(t,e,n,i),n!==null){var r=ti();nr(n,t,i,r),B_(n,e,i)}}function QS(t,e,n){var i=ps(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(F_(t))O_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ir(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=__(t,e,r,i),n!==null&&(r=ti(),nr(n,t,i,r),B_(n,e,i))}}function F_(t){var e=t.alternate;return t===dn||e!==null&&e===dn}function O_(t,e){Na=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}var Qc={readContext:zi,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},JS={readContext:zi,useCallback:function(t,e){return pr().memoizedState=[t,e===void 0?null:e],t},useContext:zi,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=pr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pr();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZS.bind(null,dn,t),[i.memoizedState,t]},useRef:function(t){var e=pr();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:rp,useDeferredValue:function(t){return pr().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=KS.bind(null,t[1]),pr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dn,r=pr();if(an){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Nn===null)throw Error(ae(349));ks&30||M_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lm(T_.bind(null,i,s,t),[t]),i.flags|=2048,tl(9,E_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pr(),e=Nn.identifierPrefix;if(an){var n=Or,i=Fr;n=(i&~(1<<32-tr(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jS={readContext:zi,useCallback:D_,useContext:zi,useEffect:ip,useImperativeHandle:L_,useInsertionEffect:R_,useLayoutEffect:b_,useMemo:N_,useReducer:tf,useRef:C_,useState:function(){return tf(el)},useDebugValue:rp,useDeferredValue:function(t){var e=Hi();return I_(e,wn.memoizedState,t)},useTransition:function(){var t=tf(el)[0],e=Hi().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1},ey={readContext:zi,useCallback:D_,useContext:zi,useEffect:ip,useImperativeHandle:L_,useInsertionEffect:R_,useLayoutEffect:b_,useMemo:N_,useReducer:nf,useRef:C_,useState:function(){return nf(el)},useDebugValue:rp,useDeferredValue:function(t){var e=Hi();return wn===null?e.memoizedState=t:I_(e,wn.memoizedState,t)},useTransition:function(){var t=nf(el)[0],e=Hi().memoizedState;return[t,e]},useMutableSource:S_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1};function Zi(t,e){if(t&&t.defaultProps){e=hn({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:hn({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ti(),r=ps(t),s=kr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ds(t,s,r),e!==null&&(nr(e,t,r,i),vc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ti(),r=ps(t),s=kr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ds(t,s,r),e!==null&&(nr(e,t,r,i),vc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ti(),i=ps(t),r=kr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ds(t,r,i),e!==null&&(nr(e,t,i,n),vc(e,t,i))}};function Dm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,s):!0}function k_(t,e,n){var i=!1,r=_s,s=e.contextType;return typeof s=="object"&&s!==null?s=zi(s):(r=hi(e)?Os:Yn.current,i=e.contextTypes,s=(i=i!=null)?Bo(t,r):_s),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function Sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zi(s):(s=hi(e)?Os:Yn.current,r.context=Bo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yu.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=Rx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ty=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jc||(jc=!0,Ld=i),yd(t,e)},n}function H_(t,e,n){n=kr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof i!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Im(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ty;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=my.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,ds(n,e,1))),n.lanes|=1),t)}var ny=Yr.ReactCurrentOwner,fi=!1;function ei(t,e,n,i){e.child=t===null?g_(e,null,n,i):zo(e,t.child,n,i)}function Om(t,e,n,i,r){n=n.render;var s=e.ref;return No(e,r),i=tp(t,e,n,i,s,r),n=np(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wr(t,e,r)):(an&&n&&Gh(e),e.flags|=1,ei(t,e,i,r),e.child)}function Bm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,i,r)):(t=Tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,i)&&t.ref===e.ref)return Wr(t,e,r)}return e.flags|=1,t=ms(s,i),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qa(s,i)&&t.ref===e.ref)if(fi=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fi=!0);else return e.lanes=t.lanes,Wr(t,e,r)}return Md(t,e,n,i,r)}function G_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(Co,Ei),Ei|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Jt(Co,Ei),Ei|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Jt(Co,Ei),Ei|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Jt(Co,Ei),Ei|=i;return ei(t,e,r,n),e.child}function W_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,i,r){var s=hi(n)?Os:Yn.current;return s=Bo(e,s),No(e,r),n=tp(t,e,n,i,s,r),i=np(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wr(t,e,r)):(an&&i&&Gh(e),e.flags|=1,ei(t,e,n,r),e.child)}function km(t,e,n,i,r){if(hi(n)){var s=!0;Gc(e)}else s=!1;if(No(e,r),e.stateNode===null)yc(t,e),k_(e,n,i),Sd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zi(c):(c=hi(n)?Os:Yn.current,c=Bo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Nm(e,o,i,c),ts=!1;var u=e.memoizedState;o.state=u,$c(e,i,o,r),l=e.memoizedState,a!==i||u!==l||di.current||ts?(typeof d=="function"&&(xd(e,n,d,i),l=e.memoizedState),(a=ts||Dm(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zi(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zi(l):(l=hi(n)?Os:Yn.current,l=Bo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&Nm(e,o,i,l),ts=!1,u=e.memoizedState,o.state=u,$c(e,i,o,r);var g=e.memoizedState;a!==h||u!==g||di.current||ts?(typeof p=="function"&&(xd(e,n,p,i),g=e.memoizedState),(c=ts||Dm(e,n,c,i,u,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Ed(t,e,n,i,s,r)}function Ed(t,e,n,i,r,s){W_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Tm(e,n,!1),Wr(t,e,s);i=e.stateNode,ny.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zo(e,t.child,null,s),e.child=zo(e,null,a,s)):ei(t,e,a,s),e.memoizedState=i.state,r&&Tm(e,n,!0),e.child}function X_(t){var e=t.stateNode;e.pendingContext?Em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Em(t,e.context,!1),Qh(t,e.containerInfo)}function zm(t,e,n,i,r){return ko(),Xh(r),e.flags|=256,ei(t,e,n,i),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y_(t,e,n){var i=e.pendingProps,r=fn.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Jt(fn,r&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tu(o,i,0,null),t=Fs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wd(n),e.memoizedState=Td,t):sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ms(a,s):(s=Fs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,i}return s=t.child,t=s.sibling,i=ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sp(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fl(t,e,n,i){return i!==null&&Xh(i),zo(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=rf(Error(ae(422))),Fl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tu({mode:"visible",children:i.children},r,0,null),s=Fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zo(e,t.child,null,o),e.child.memoizedState=wd(o),e.memoizedState=Td,s);if(!(e.mode&1))return Fl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=rf(s,i,void 0),Fl(t,e,o,i)}if(a=(o&t.childLanes)!==0,fi||a){if(i=Nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gr(t,r),nr(i,t,r,-1))}return fp(),i=rf(Error(ae(421))),Fl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ti=fs(r.nextSibling),wi=e,an=!0,Ji=null,t!==null&&(Ii[Ui++]=Fr,Ii[Ui++]=Or,Ii[Ui++]=Bs,Fr=t.id,Or=t.overflow,Bs=e),e=sp(e,i.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vd(t.return,e,n)}function sf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function q_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ei(t,e,i.children,n),i=fn.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Jt(fn,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sf(e,!0,n,null,s);break;case"together":sf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=ms(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ms(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ry(t,e,n){switch(e.tag){case 3:X_(e),ko();break;case 5:x_(e);break;case 1:hi(e.type)&&Gc(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Jt(Yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Jt(fn,fn.current&1),e.flags|=128,null):n&e.child.childLanes?Y_(t,e,n):(Jt(fn,fn.current&1),t=Wr(t,e,n),t!==null?t.sibling:null);Jt(fn,fn.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return q_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Jt(fn,fn.current),i)break;return null;case 22:case 23:return e.lanes=0,G_(t,e,n)}return Wr(t,e,n)}var $_,Ad,K_,Z_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};K_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ls(yr.current);var s=null;switch(n){case"input":r=$f(t,r),i=$f(t,i),s=[];break;case"select":r=hn({},r,{value:void 0}),i=hn({},i,{value:void 0}),s=[];break;case"textarea":r=Qf(t,r),i=Qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}jf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nn("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ha(t,e){if(!an)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sy(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return hi(e.type)&&Vc(),zn(e),null;case 3:return i=e.stateNode,Ho(),rn(di),rn(Yn),jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ji!==null&&(Id(Ji),Ji=null))),Ad(t,e),zn(e),null;case 5:Jh(e);var r=Ls(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)K_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return zn(e),null}if(t=Ls(yr.current),Il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_r]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":nn("cancel",i),nn("close",i);break;case"iframe":case"object":case"embed":nn("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)nn(wa[r],i);break;case"source":nn("error",i);break;case"img":case"image":case"link":nn("error",i),nn("load",i);break;case"details":nn("toggle",i);break;case"input":Zp(i,s),nn("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nn("invalid",i);break;case"textarea":Jp(i,s),nn("invalid",i)}jf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nl(i.textContent,a,t),r=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nn("scroll",i)}switch(n){case"input":wl(i),Qp(i,s,!0);break;case"textarea":wl(i),jp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[_r]=e,t[Za]=i,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ed(n,i),n){case"dialog":nn("cancel",t),nn("close",t),r=i;break;case"iframe":case"object":case"embed":nn("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)nn(wa[r],t);r=i;break;case"source":nn("error",t),r=i;break;case"img":case"image":case"link":nn("error",t),nn("load",t),r=i;break;case"details":nn("toggle",t),r=i;break;case"input":Zp(t,i),r=$f(t,i),nn("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=hn({},i,{value:void 0}),nn("invalid",t);break;case"textarea":Jp(t,i),r=Qf(t,i),nn("invalid",t);break;default:r=i}jf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?C0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nn("scroll",t):l!=null&&bh(t,s,l,o))}switch(n){case"input":wl(t),Qp(t,i,!1);break;case"textarea":wl(t),jp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gs(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bo(t,!!i.multiple,s,!1):i.defaultValue!=null&&bo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Ls(Ja.current),Ls(yr.current),Il(e)){if(i=e.stateNode,n=e.memoizedProps,i[_r]=e,(s=i.nodeValue!==n)&&(t=wi,t!==null))switch(t.tag){case 3:Nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_r]=e,e.stateNode=i}return zn(e),null;case 13:if(rn(fn),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(an&&Ti!==null&&e.mode&1&&!(e.flags&128))p_(),ko(),e.flags|=98560,s=!1;else if(s=Il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[_r]=e}else ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),s=!1}else Ji!==null&&(Id(Ji),Ji=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||fn.current&1?An===0&&(An=3):fp())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return Ho(),Ad(t,e),t===null&&$a(e.stateNode.containerInfo),zn(e),null;case 10:return $h(e.type._context),zn(e),null;case 17:return hi(e.type)&&Vc(),zn(e),null;case 19:if(rn(fn),s=e.memoizedState,s===null)return zn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ha(s,!1);else{if(An!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,ha(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Jt(fn,fn.current&1|2),e.child}t=t.sibling}s.tail!==null&&xn()>Go&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!an)return zn(e),null}else 2*xn()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xn(),e.sibling=null,n=fn.current,Jt(fn,i?n&1|2:n&1),e):(zn(e),null);case 22:case 23:return up(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ei&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function oy(t,e){switch(Wh(e),e.tag){case 1:return hi(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),rn(di),rn(Yn),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(rn(fn),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rn(fn),null;case 4:return Ho(),null;case 10:return $h(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var Ol=!1,Gn=!1,ay=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pn(t,e,i)}else n.current=null}function Cd(t,e,n){try{n()}catch(i){pn(t,e,i)}}var Vm=!1;function ly(t,e){if(ud=Bc,t=t_(),Vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},Bc=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zi(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){pn(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return g=Vm,Vm=!1,g}function Ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cd(e,n,s)}r=r.next}while(r!==i)}}function Mu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_r],delete e[Za],delete e[pd],delete e[WS],delete e[XS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function J_(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||J_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var Un=null,Qi=!1;function qr(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:Gn||Ao(n,e);case 6:var i=Un,r=Qi;Un=null,qr(t,e,n),Un=i,Qi=r,Un!==null&&(Qi?(t=Un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Un.removeChild(n.stateNode));break;case 18:Un!==null&&(Qi?(t=Un,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Xa(t)):Qu(Un,n.stateNode));break;case 4:i=Un,r=Qi,Un=n.stateNode.containerInfo,Qi=!0,qr(t,e,n),Un=i,Qi=r;break;case 0:case 11:case 14:case 15:if(!Gn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cd(n,e,o),r=r.next}while(r!==i)}qr(t,e,n);break;case 1:if(!Gn&&(Ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pn(n,e,a)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Gn=(i=Gn)||n.memoizedState!==null,qr(t,e,n),Gn=i):qr(t,e,n);break;default:qr(t,e,n)}}function Wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ay),e.forEach(function(i){var r=_y.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Un=a.stateNode,Qi=!1;break e;case 3:Un=a.stateNode.containerInfo,Qi=!0;break e;case 4:Un=a.stateNode.containerInfo,Qi=!0;break e}a=a.return}if(Un===null)throw Error(ae(160));j_(s,o,r),Un=null,Qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,t),e=e.sibling}function ev(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yi(e,t),ur(t),i&4){try{Ia(3,t,t.return),Mu(3,t)}catch(y){pn(t,t.return,y)}try{Ia(5,t,t.return)}catch(y){pn(t,t.return,y)}}break;case 1:Yi(e,t),ur(t),i&512&&n!==null&&Ao(n,n.return);break;case 5:if(Yi(e,t),ur(t),i&512&&n!==null&&Ao(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(y){pn(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&M0(r,s),ed(a,o);var c=ed(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?C0(r,h):d==="dangerouslySetInnerHTML"?w0(r,h):d==="children"?Ha(r,h):bh(r,d,h,c)}switch(a){case"input":Kf(r,s);break;case"textarea":E0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bo(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?bo(r,!!s.multiple,s.defaultValue,!0):bo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(y){pn(t,t.return,y)}}break;case 6:if(Yi(e,t),ur(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){pn(t,t.return,y)}}break;case 3:if(Yi(e,t),ur(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(y){pn(t,t.return,y)}break;case 4:Yi(e,t),ur(t);break;case 13:Yi(e,t),ur(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lp=xn())),i&4&&Wm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gn=(c=Gn)||d,Yi(e,t),Gn=c):Yi(e,t),ur(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Pe=t,d=t.child;d!==null;){for(h=Pe=d;Pe!==null;){switch(u=Pe,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ia(4,u,u.return);break;case 1:Ao(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){pn(i,n,y)}}break;case 5:Ao(u,u.return);break;case 22:if(u.memoizedState!==null){Ym(h);continue}}p!==null?(p.return=u,Pe=p):Ym(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=A0("display",o))}catch(y){pn(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){pn(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yi(e,t),ur(t),i&4&&Wm(t);break;case 21:break;default:Yi(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(J_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=Gm(t);Pd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gm(t);bd(t,a,o);break;default:throw Error(ae(161))}}catch(l){pn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cy(t,e,n){Pe=t,tv(t)}function tv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gn;a=Ol;var c=Gn;if(Ol=o,(Gn=l)&&!c)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?qm(r):l!==null?(l.return=o,Pe=l):qm(r);for(;s!==null;)Pe=s,tv(s),s=s.sibling;Pe=r,Ol=a,Gn=c}Xm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Xm(t)}}function Xm(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gn||Mu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Gn||e.flags&512&&Rd(e)}catch(u){pn(e,e.return,u)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Ym(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function qm(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mu(4,e)}catch(l){pn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pn(e,r,l)}}var s=e.return;try{Rd(e)}catch(l){pn(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){pn(e,o,l)}}}catch(l){pn(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var uy=Math.ceil,Jc=Yr.ReactCurrentDispatcher,op=Yr.ReactCurrentOwner,ki=Yr.ReactCurrentBatchConfig,At=0,Nn=null,En=null,On=0,Ei=0,Co=xs(0),An=0,nl=null,zs=0,Eu=0,ap=0,Ua=null,ui=null,lp=0,Go=1/0,Nr=null,jc=!1,Ld=null,hs=null,Bl=!1,as=null,eu=0,Fa=0,Dd=null,Mc=-1,Ec=0;function ti(){return At&6?xn():Mc!==-1?Mc:Mc=xn()}function ps(t){return t.mode&1?At&2&&On!==0?On&-On:qS.transition!==null?(Ec===0&&(Ec=k0()),Ec):(t=zt,t!==0||(t=window.event,t=t===void 0?16:Y0(t.type)),t):1}function nr(t,e,n,i){if(50<Fa)throw Fa=0,Dd=null,Error(ae(185));cl(t,n,i),(!(At&2)||t!==Nn)&&(t===Nn&&(!(At&2)&&(Eu|=n),An===4&&rs(t,On)),pi(t,i),n===1&&At===0&&!(e.mode&1)&&(Go=xn()+500,xu&&Ss()))}function pi(t,e){var n=t.callbackNode;qx(t,e);var i=Oc(t,t===Nn?On:0);if(i===0)n!==null&&nm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&nm(n),e===1)t.tag===0?YS($m.bind(null,t)):f_($m.bind(null,t)),VS(function(){!(At&6)&&Ss()}),n=null;else{switch(z0(i)){case 1:n=Ih;break;case 4:n=O0;break;case 16:n=Fc;break;case 536870912:n=B0;break;default:n=Fc}n=cv(n,nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nv(t,e){if(Mc=-1,Ec=0,At&6)throw Error(ae(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var i=Oc(t,t===Nn?On:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=At;At|=2;var s=rv();(Nn!==t||On!==e)&&(Nr=null,Go=xn()+500,Us(t,e));do try{hy();break}catch(a){iv(t,a)}while(!0);qh(),Jc.current=s,At=r,En!==null?e=0:(Nn=null,On=0,e=An)}if(e!==0){if(e===2&&(r=sd(t),r!==0&&(i=r,e=Nd(t,r))),e===1)throw n=nl,Us(t,0),rs(t,i),pi(t,xn()),n;if(e===6)rs(t,i);else{if(r=t.current.alternate,!(i&30)&&!fy(r)&&(e=tu(t,i),e===2&&(s=sd(t),s!==0&&(i=s,e=Nd(t,s))),e===1))throw n=nl,Us(t,0),rs(t,i),pi(t,xn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Rs(t,ui,Nr);break;case 3:if(rs(t,i),(i&130023424)===i&&(e=lp+500-xn(),10<e)){if(Oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ti(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=hd(Rs.bind(null,t,ui,Nr),e);break}Rs(t,ui,Nr);break;case 4:if(rs(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-tr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uy(i/1960))-i,10<i){t.timeoutHandle=hd(Rs.bind(null,t,ui,Nr),i);break}Rs(t,ui,Nr);break;case 5:Rs(t,ui,Nr);break;default:throw Error(ae(329))}}}return pi(t,xn()),t.callbackNode===n?nv.bind(null,t):null}function Nd(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Us(t,e).flags|=256),t=tu(t,e),t!==2&&(e=ui,ui=n,e!==null&&Id(e)),t}function Id(t){ui===null?ui=t:ui.push.apply(ui,t)}function fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ir(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rs(t,e){for(e&=~ap,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tr(e),i=1<<n;t[n]=-1,e&=~i}}function $m(t){if(At&6)throw Error(ae(327));Io();var e=Oc(t,0);if(!(e&1))return pi(t,xn()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=sd(t);i!==0&&(e=i,n=Nd(t,i))}if(n===1)throw n=nl,Us(t,0),rs(t,e),pi(t,xn()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,ui,Nr),pi(t,xn()),null}function cp(t,e){var n=At;At|=1;try{return t(e)}finally{At=n,At===0&&(Go=xn()+500,xu&&Ss())}}function Hs(t){as!==null&&as.tag===0&&!(At&6)&&Io();var e=At;At|=1;var n=ki.transition,i=zt;try{if(ki.transition=null,zt=1,t)return t()}finally{zt=i,ki.transition=n,At=e,!(At&6)&&Ss()}}function up(){Ei=Co.current,rn(Co)}function Us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HS(n)),En!==null)for(n=En.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:Ho(),rn(di),rn(Yn),jh();break;case 5:Jh(i);break;case 4:Ho();break;case 13:rn(fn);break;case 19:rn(fn);break;case 10:$h(i.type._context);break;case 22:case 23:up()}n=n.return}if(Nn=t,En=t=ms(t.current,null),On=Ei=e,An=0,nl=null,ap=Eu=zs=0,ui=Ua=null,Ps!==null){for(e=0;e<Ps.length;e++)if(n=Ps[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ps=null}return t}function iv(t,e){do{var n=En;try{if(qh(),xc.current=Qc,Zc){for(var i=dn.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(ks=0,Dn=wn=dn=null,Na=!1,ja=0,op.current=null,n===null||n.return===null){An=1,nl=e,En=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=On,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Um(o);if(p!==null){p.flags&=-257,Fm(p,o,a,s,e),p.mode&1&&Im(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Im(s,c,e),fp();break e}l=Error(ae(426))}}else if(an&&a.mode&1){var m=Um(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Fm(m,o,a,s,e),Xh(Vo(l,a));break e}}s=l=Vo(l,a),An!==4&&(An=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=z_(s,l,e);Rm(s,f);break e;case 1:a=l;var _=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(hs===null||!hs.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=H_(s,a,e);Rm(s,S);break e}}s=s.return}while(s!==null)}ov(n)}catch(T){e=T,En===n&&n!==null&&(En=n=n.return);continue}break}while(!0)}function rv(){var t=Jc.current;return Jc.current=Qc,t===null?Qc:t}function fp(){(An===0||An===3||An===2)&&(An=4),Nn===null||!(zs&268435455)&&!(Eu&268435455)||rs(Nn,On)}function tu(t,e){var n=At;At|=2;var i=rv();(Nn!==t||On!==e)&&(Nr=null,Us(t,e));do try{dy();break}catch(r){iv(t,r)}while(!0);if(qh(),At=n,Jc.current=i,En!==null)throw Error(ae(261));return Nn=null,On=0,An}function dy(){for(;En!==null;)sv(En)}function hy(){for(;En!==null&&!Bx();)sv(En)}function sv(t){var e=lv(t.alternate,t,Ei);t.memoizedProps=t.pendingProps,e===null?ov(t):En=e,op.current=null}function ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,En=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{An=6,En=null;return}}else if(n=sy(n,e,Ei),n!==null){En=n;return}if(e=e.sibling,e!==null){En=e;return}En=e=t}while(e!==null);An===0&&(An=5)}function Rs(t,e,n){var i=zt,r=ki.transition;try{ki.transition=null,zt=1,py(t,e,n,i)}finally{ki.transition=r,zt=i}return null}function py(t,e,n,i){do Io();while(as!==null);if(At&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($x(t,s),t===Nn&&(En=Nn=null,On=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,cv(Fc,function(){return Io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ki.transition,ki.transition=null;var o=zt;zt=1;var a=At;At|=4,op.current=null,ly(t,n),ev(n,t),IS(fd),Bc=!!ud,fd=ud=null,t.current=n,cy(n),kx(),At=a,zt=o,ki.transition=s}else t.current=n;if(Bl&&(Bl=!1,as=t,eu=r),s=t.pendingLanes,s===0&&(hs=null),Vx(n.stateNode),pi(t,xn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jc)throw jc=!1,t=Ld,Ld=null,t;return eu&1&&t.tag!==0&&Io(),s=t.pendingLanes,s&1?t===Dd?Fa++:(Fa=0,Dd=t):Fa=0,Ss(),null}function Io(){if(as!==null){var t=z0(eu),e=ki.transition,n=zt;try{if(ki.transition=null,zt=16>t?16:t,as===null)var i=!1;else{if(t=as,as=null,eu=0,At&6)throw Error(ae(331));var r=At;for(At|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Pe=c;Pe!==null;){var d=Pe;switch(d.tag){case 0:case 11:case 15:Ia(8,d,s)}var h=d.child;if(h!==null)h.return=d,Pe=h;else for(;Pe!==null;){d=Pe;var u=d.sibling,p=d.return;if(Q_(d),d===c){Pe=null;break}if(u!==null){u.return=p,Pe=u;break}Pe=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Pe=f;break e}Pe=s.return}}var _=t.current;for(Pe=_;Pe!==null;){o=Pe;var M=o.child;if(o.subtreeFlags&2064&&M!==null)M.return=o,Pe=M;else e:for(o=_;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mu(9,a)}}catch(T){pn(a,a.return,T)}if(a===o){Pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Pe=S;break e}Pe=a.return}}if(At=r,Ss(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{zt=n,ki.transition=e}}return!1}function Km(t,e,n){e=Vo(n,e),e=z_(t,e,1),t=ds(t,e,1),e=ti(),t!==null&&(cl(t,1,e),pi(t,e))}function pn(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hs===null||!hs.has(i))){t=Vo(n,t),t=H_(e,t,1),e=ds(e,t,1),t=ti(),e!==null&&(cl(e,1,t),pi(e,t));break}}e=e.return}}function my(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ti(),t.pingedLanes|=t.suspendedLanes&n,Nn===t&&(On&n)===n&&(An===4||An===3&&(On&130023424)===On&&500>xn()-lp?Us(t,0):ap|=n),pi(t,e)}function av(t,e){e===0&&(t.mode&1?(e=Rl,Rl<<=1,!(Rl&130023424)&&(Rl=4194304)):e=1);var n=ti();t=Gr(t,e),t!==null&&(cl(t,e,n),pi(t,n))}function gy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function _y(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),av(t,n)}var lv;lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||di.current)fi=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fi=!1,ry(t,e,n);fi=!!(t.flags&131072)}else fi=!1,an&&e.flags&1048576&&d_(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(t,e),t=e.pendingProps;var r=Bo(e,Yn.current);No(e,n),r=tp(null,e,i,t,r,n);var s=np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hi(i)?(s=!0,Gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=yu,e.stateNode=r,r._reactInternals=e,Sd(e,i,t,n),e=Ed(null,e,i,!0,s,n)):(e.tag=0,an&&s&&Gh(e),ei(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xy(i),t=Zi(i,t),r){case 0:e=Md(null,e,i,t,n);break e;case 1:e=km(null,e,i,t,n);break e;case 11:e=Om(null,e,i,t,n);break e;case 14:e=Bm(null,e,i,Zi(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),km(t,e,i,r,n);case 3:e:{if(X_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(ae(423)),e),e=zm(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(ae(424)),e),e=zm(t,e,i,n,r);break e}else for(Ti=fs(e.stateNode.containerInfo.firstChild),wi=e,an=!0,Ji=null,n=g_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),i===r){e=Wr(t,e,n);break e}ei(t,e,i,n)}e=e.child}return e;case 5:return x_(e),t===null&&_d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,dd(i,r)?o=null:s!==null&&dd(i,s)&&(e.flags|=32),W_(t,e),ei(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return Y_(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zo(e,null,i,n):ei(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),Om(t,e,i,r,n);case 7:return ei(t,e,e.pendingProps,n),e.child;case 8:return ei(t,e,e.pendingProps.children,n),e.child;case 12:return ei(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Jt(Yc,i._currentValue),i._currentValue=o,s!==null)if(ir(s.value,o)){if(s.children===r.children&&!di.current){e=Wr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ei(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,No(e,n),r=zi(r),i=i(r),e.flags|=1,ei(t,e,i,n),e.child;case 14:return i=e.type,r=Zi(i,e.pendingProps),r=Zi(i.type,r),Bm(t,e,i,r,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zi(i,r),yc(t,e),e.tag=1,hi(i)?(t=!0,Gc(e)):t=!1,No(e,n),k_(e,i,r),Sd(e,i,r,n),Ed(null,e,i,!0,t,n);case 19:return q_(t,e,n);case 22:return G_(t,e,n)}throw Error(ae(156,e.tag))};function cv(t,e){return F0(t,e)}function vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bi(t,e,n,i){return new vy(t,e,n,i)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xy(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Dh)return 14}return 2}function ms(t,e){var n=t.alternate;return n===null?(n=Bi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _o:return Fs(n.children,r,s,e);case Ph:o=8,r|=8;break;case Wf:return t=Bi(12,n,e,r|2),t.elementType=Wf,t.lanes=s,t;case Xf:return t=Bi(13,n,e,r),t.elementType=Xf,t.lanes=s,t;case Yf:return t=Bi(19,n,e,r),t.elementType=Yf,t.lanes=s,t;case x0:return Tu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:o=10;break e;case v0:o=9;break e;case Lh:o=11;break e;case Dh:o=14;break e;case es:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Bi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fs(t,e,n,i){return t=Bi(7,t,i,e),t.lanes=n,t}function Tu(t,e,n,i){return t=Bi(22,t,i,e),t.elementType=x0,t.lanes=n,t.stateNode={isHidden:!1},t}function of(t,e,n){return t=Bi(6,t,null,e),t.lanes=n,t}function af(t,e,n){return e=Bi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,i,r,s,o,a,l){return t=new Sy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return _s;t=t._reactInternals;e:{if(qs(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(hi(n))return u_(t,n,e)}return e}function fv(t,e,n,i,r,s,o,a,l){return t=hp(n,i,!0,t,r,s,o,a,l),t.context=uv(null),n=t.current,i=ti(),r=ps(n),s=kr(i,r),s.callback=e??null,ds(n,s,r),t.current.lanes=r,cl(t,r,i),pi(t,i),t}function wu(t,e,n,i){var r=e.current,s=ti(),o=ps(r);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ds(r,e,o),t!==null&&(nr(t,r,o,s),vc(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){Zm(t,e),(t=t.alternate)&&Zm(t,e)}function My(){return null}var dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}Au.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));wu(t,e,null,null)};Au.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hs(function(){wu(null,t,null,null)}),e[Vr]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<is.length&&e!==0&&e<is[n].priority;n++);is.splice(n,0,t),n===0&&X0(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function Ey(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nu(o);s.call(c)}}var o=fv(e,i,t,0,null,!1,!1,"",Qm);return t._reactRootContainer=o,t[Vr]=o.current,$a(t.nodeType===8?t.parentNode:t),Hs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nu(l);a.call(c)}}var l=hp(t,0,!1,null,null,!1,!1,"",Qm);return t._reactRootContainer=l,t[Vr]=l.current,$a(t.nodeType===8?t.parentNode:t),Hs(function(){wu(e,l,n,i)}),l}function Ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}wu(e,o,t,r)}else o=Ey(n,e,t,r,i);return nu(o)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(Uh(e,n|1),pi(e,xn()),!(At&6)&&(Go=xn()+500,Ss()))}break;case 13:Hs(function(){var i=Gr(t,1);if(i!==null){var r=ti();nr(i,t,1,r)}}),pp(t,1)}};Fh=function(t){if(t.tag===13){var e=Gr(t,134217728);if(e!==null){var n=ti();nr(e,t,134217728,n)}pp(t,134217728)}};V0=function(t){if(t.tag===13){var e=ps(t),n=Gr(t,e);if(n!==null){var i=ti();nr(n,t,e,i)}pp(t,e)}};G0=function(){return zt};W0=function(t,e){var n=zt;try{return zt=t,e()}finally{zt=n}};nd=function(t,e,n){switch(e){case"input":if(Kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vu(i);if(!r)throw Error(ae(90));y0(i),Kf(i,r)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&bo(t,!!n.multiple,e,!1)}};P0=cp;L0=Hs;var Ty={usingClientEntryPoint:!1,Events:[fl,yo,vu,R0,b0,cp]},pa={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I0(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||My,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{pu=kl.inject(wy),Sr=kl}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;Ri.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(ae(200));return yy(t,e,null,n)};Ri.createRoot=function(t,e){if(!gp(t))throw Error(ae(299));var n=!1,i="",r=dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,i,r),t[Vr]=e.current,$a(t.nodeType===8?t.parentNode:t),new mp(e)};Ri.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=I0(e),t=t===null?null:t.stateNode,t};Ri.flushSync=function(t){return Hs(t)};Ri.hydrate=function(t,e,n){if(!Cu(e))throw Error(ae(200));return Ru(null,t,e,!0,n)};Ri.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=dv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fv(e,null,t,1,n??null,r,!1,s,o),t[Vr]=e.current,$a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Au(e)};Ri.render=function(t,e,n){if(!Cu(e))throw Error(ae(200));return Ru(null,t,e,!1,n)};Ri.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(ae(40));return t._reactRootContainer?(Hs(function(){Ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Vr]=null})}),!0):!1};Ri.unstable_batchedUpdates=cp;Ri.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Ru(t,e,n,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(t){console.error(t)}}hv(),h0.exports=Ri;var Ay=h0.exports,pv,Jm=Ay;pv=Jm.createRoot,Jm.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="186",Cy=0,jm=1,Ry=2,wc=1,by=2,Aa=3,Vs=0,mi=1,Ur=2,Mr=0,Oa=1,ci=2,eg=3,tg=4,Py=5,po=100,Ly=101,Dy=102,Ny=103,Iy=104,Uy=200,Fy=201,Oy=202,By=203,mv=204,gv=205,ky=206,zy=207,Hy=208,Vy=209,Gy=210,Wy=211,Xy=212,Yy=213,qy=214,Ud=0,Fd=1,Od=2,il=3,Bd=4,kd=5,zd=6,Hd=7,_v=0,$y=1,Ky=2,Er=0,vv=1,xv=2,Sv=3,yv=4,Mv=5,Ev=6,Tv=7,wv=300,Gs=301,Wo=302,lf=303,cf=304,bu=306,Vd=1e3,Br=1001,Gd=1002,Fn=1003,Zy=1004,zl=1005,Tn=1006,uf=1007,Ds=1008,Oi=1009,Av=1010,Cv=1011,rl=1012,vp=1013,Tr=1014,vr=1015,gi=1016,xp=1017,Sp=1018,sl=1020,Rv=35902,bv=35899,Pv=1021,Lv=1022,er=1023,Xr=1026,Ns=1027,Dv=1028,yp=1029,Ws=1030,Mp=1031,Ep=1033,Ac=33776,Cc=33777,Rc=33778,bc=33779,Wd=35840,Xd=35841,Yd=35842,qd=35843,$d=36196,Kd=37492,Zd=37496,Qd=37488,Jd=37489,iu=37490,jd=37491,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,ch=37817,uh=37818,fh=37819,dh=37820,hh=37821,ph=36492,mh=36494,gh=36495,_h=36283,vh=36284,ru=36285,xh=36286,Qy=3200,ng=0,Jy=1,ss="",Ni="srgb",su="srgb-linear",ou="linear",kt="srgb",ff=7680,jy=519,eM=512,tM=513,nM=514,Tp=515,iM=516,rM=517,wp=518,sM=519,oM=35044,ig="300 es",xr=2e3,au=2001;function aM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lM(){const t=lu("canvas");return t.style.display="block",t}const rg={};function sg(...t){const e="THREE."+t.shift();console.log(e,...t)}function Nv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ye(...t){t=Nv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Pt(...t){t=Nv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Uo(...t){const e=t.join(" ");e in rg||(rg[e]=!0,Ye(...t))}function cM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const uM={[Ud]:Fd,[Od]:zd,[Bd]:Hd,[il]:kd,[Fd]:Ud,[zd]:Od,[Hd]:Bd,[kd]:il};class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let og=1234567;const Ba=Math.PI/180,ol=180/Math.PI;function Zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[t&255]+Hn[t>>8&255]+Hn[t>>16&255]+Hn[t>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function vt(t,e,n){return Math.max(e,Math.min(n,t))}function Ap(t,e){return(t%e+e)%e}function fM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function dM(t,e,n){return t!==e?(n-t)/(e-t):0}function ka(t,e,n){return(1-n)*t+n*e}function hM(t,e,n,i){return ka(t,e,1-Math.exp(-n*i))}function pM(t,e=1){return e-Math.abs(Ap(t,e*2)-e)}function mM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function _M(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vM(t,e){return t+Math.random()*(e-t)}function xM(t){return t*(.5-Math.random())}function SM(t){t!==void 0&&(og=t);let e=og+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yM(t){return t*Ba}function MM(t){return t*ol}function EM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function TM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function wM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function AM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*d,l*h,l*u,a*c);break;case"YZY":t.set(l*u,a*d,l*h,a*c);break;case"ZXZ":t.set(l*h,l*u,a*d,a*c);break;case"XZX":t.set(a*d,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*d,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*d,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const df={DEG2RAD:Ba,RAD2DEG:ol,generateUUID:Zo,clamp:vt,euclideanModulo:Ap,mapLinear:fM,inverseLerp:dM,lerp:ka,damp:hM,pingpong:pM,smoothstep:mM,smootherstep:gM,randInt:_M,randFloat:vM,randFloatSpread:xM,seededRandom:SM,degToRad:yM,radToDeg:MM,isPowerOfTwo:EM,ceilPowerOfTwo:TM,floorPowerOfTwo:wM,setQuaternionFromProperEuler:AM,normalize:Jn,denormalize:mo},Lp=class Lp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lp.prototype.isVector2=!0;let st=Lp;class Qo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(h!==y||l!==u||c!==p||d!==g){let m=l*u+c*p+d*g+h*y;m<0&&(u=-u,p=-p,g=-g,y=-y,m=-m);let f=1-a;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);f=Math.sin(f*_)/M,a=Math.sin(a*_)/M,l=l*f+u*a,c=c*f+p*a,d=d*f+g*a,h=h*f+y*a}else{l=l*f+u*a,c=c*f+p*a,d=d*f+g*a,h=h*f+y*a;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+d*h+l*p-c*u,e[n+1]=l*g+d*u+c*h-a*p,e[n+2]=c*g+d*p+a*u-l*h,e[n+3]=d*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dp=class Dp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dp.prototype.isVector3=!0;let z=Dp;const hf=new z,ag=new Qo,Np=class Np{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],_=r[1],M=r[4],S=r[7],T=r[2],w=r[5],A=r[8];return s[0]=o*y+a*_+l*T,s[3]=o*m+a*M+l*w,s[6]=o*f+a*S+l*A,s[1]=c*y+d*_+h*T,s[4]=c*m+d*M+h*w,s[7]=c*f+d*S+h*A,s[2]=u*y+p*_+g*T,s[5]=u*m+p*M+g*w,s[8]=u*f+p*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,p=c*s-o*l,g=n*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pf.makeScale(e,n)),this}rotate(e){return Uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pf.makeRotation(-e)),this}translate(e,n){return Uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;let tt=Np;const pf=new tt,lg=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CM(){const t={enabled:!0,workingColorSpace:su,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===kt&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(r.r=Fo(r.r),r.g=Fo(r.g),r.b=Fo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ss?ou:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[su]:{primaries:e,whitePoint:i,transfer:ou,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),t}const St=CM();function zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let eo;class RM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{eo===void 0&&(eo=lu("canvas")),eo.width=e.width,eo.height=e.height;const r=eo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=eo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zr(n[i]/255)*255):n[i]=zr(n[i]);return{data:n,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bM=0;class Cp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mf(r[o].image)):s.push(mf(r[o]))}else s=mf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let PM=0;const gf=new z;class Xn extends $s{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,i=Br,r=Br,s=Tn,o=Ds,a=er,l=Oi,c=Xn.DEFAULT_ANISOTROPY,d=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Zo(),this.name="",this.source=new Cp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ye(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=wv;Xn.DEFAULT_ANISOTROPY=1;const Ip=class Ip{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(p+1)/2,T=(f+1)/2,w=(d+u)/4,A=(h+y)/4,v=(g+m)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=v/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-y)/_,this.z=(u-d)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ip.prototype.isVector4=!0;let mn=Ip;class LM extends $s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new mn(0,0,e,n),this.scissorTest=!1,this.viewport=new mn(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Xn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Cp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends LM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Iv extends Xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends Xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const du=class du{constructor(e,n,i,r,s,o,a,l,c,d,h,u,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,u,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,u,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=u-y*c,n[9]=-a*l,n[2]=y-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,y=c*h;n[0]=u+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-g,n[6]=y+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,y=c*h;n[0]=u-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*d,n[9]=y-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=g*c-p,n[8]=u*c+y,n[1]=l*h,n[5]=y*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=y-u*h,n[8]=g*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+g,n[10]=u-y*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+y,n[5]=o*d,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*d,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NM,e,IM)}lookAt(e,n,i){const r=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),$r.crossVectors(i,yi),$r.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),$r.crossVectors(i,yi)),$r.normalize(),Hl.crossVectors(yi,$r),r[0]=$r.x,r[4]=Hl.x,r[8]=yi.x,r[1]=$r.y,r[5]=Hl.y,r[9]=yi.y,r[2]=$r.z,r[6]=Hl.z,r[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],_=i[3],M=i[7],S=i[11],T=i[15],w=r[0],A=r[4],v=r[8],C=r[12],b=r[1],P=r[5],F=r[9],H=r[13],D=r[2],k=r[6],Z=r[10],X=r[14],O=r[3],U=r[7],W=r[11],Y=r[15];return s[0]=o*w+a*b+l*D+c*O,s[4]=o*A+a*P+l*k+c*U,s[8]=o*v+a*F+l*Z+c*W,s[12]=o*C+a*H+l*X+c*Y,s[1]=d*w+h*b+u*D+p*O,s[5]=d*A+h*P+u*k+p*U,s[9]=d*v+h*F+u*Z+p*W,s[13]=d*C+h*H+u*X+p*Y,s[2]=g*w+y*b+m*D+f*O,s[6]=g*A+y*P+m*k+f*U,s[10]=g*v+y*F+m*Z+f*W,s[14]=g*C+y*H+m*X+f*Y,s[3]=_*w+M*b+S*D+T*O,s[7]=_*A+M*P+S*k+T*U,s[11]=_*v+M*F+S*Z+T*W,s[15]=_*C+M*H+S*X+T*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],_=l*p-c*u,M=a*p-c*h,S=a*u-l*h,T=o*p-c*d,w=o*u-l*d,A=o*h-a*d;return n*(y*_-m*M+f*S)-i*(g*_-m*T+f*w)+r*(g*M-y*T+f*A)-s*(g*S-y*w+m*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return n*(o*d-a*c)-i*(s*d-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],_=n*a-i*o,M=n*l-r*o,S=n*c-s*o,T=i*l-r*a,w=i*c-s*a,A=r*c-s*l,v=d*y-h*g,C=d*m-u*g,b=d*f-p*g,P=h*m-u*y,F=h*f-p*y,H=u*f-p*m,D=_*H-M*F+S*P+T*b-w*C+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(a*H-l*F+c*P)*k,e[1]=(r*F-i*H-s*P)*k,e[2]=(y*A-m*w+f*T)*k,e[3]=(u*w-h*A-p*T)*k,e[4]=(l*b-o*H-c*C)*k,e[5]=(n*H-r*b+s*C)*k,e[6]=(m*S-g*A-f*M)*k,e[7]=(d*A-u*S+p*M)*k,e[8]=(o*F-a*b+c*v)*k,e[9]=(i*b-n*F-s*v)*k,e[10]=(g*w-y*S+f*_)*k,e[11]=(h*S-d*w-p*_)*k,e[12]=(a*C-o*P-l*v)*k,e[13]=(n*P-i*C+r*v)*k,e[14]=(y*M-g*T-m*_)*k,e[15]=(d*T-h*M+u*_)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,u=s*c,p=s*d,g=s*h,y=o*d,m=o*h,f=a*h,_=l*c,M=l*d,S=l*h,T=i.x,w=i.y,A=i.z;return r[0]=(1-(y+f))*T,r[1]=(p+S)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(u+f))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(g+M)*A,r[9]=(m-_)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=to.set(r[0],r[1],r[2]).length();const a=to.set(r[4],r[5],r[6]).length(),l=to.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qi.copy(this);const c=1/o,d=1/a,h=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=d,qi.elements[5]*=d,qi.elements[6]*=d,qi.elements[8]*=h,qi.elements[9]*=h,qi.elements[10]*=h,n.setFromRotationMatrix(qi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=xr,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===xr)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===au)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xr,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===xr)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===au)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};du.prototype.isMatrix4=!0;let gn=du;const to=new z,qi=new gn,NM=new z(0,0,0),IM=new z(1,1,1),$r=new z,Hl=new z,yi=new z,ug=new gn,fg=new Qo;class Xs{constructor(e=0,n=0,i=0,r=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class Uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UM=0;const dg=new z,no=new Qo,Cr=new gn,Vl=new z,ma=new z,FM=new z,OM=new Qo,hg=new z(1,0,0),pg=new z(0,1,0),mg=new z(0,0,1),gg={type:"added"},BM={type:"removed"},io={type:"childadded",child:null},_f={type:"childremoved",child:null};class ii extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new z,n=new Xs,i=new Qo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gn},normalMatrix:{value:new tt}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,n){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vl.copy(e):Vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(ma,Vl,this.up):Cr.lookAt(Vl,ma,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),no.setFromRotationMatrix(Cr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),io.child=e,this.dispatchEvent(io),io.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BM),_f.child=e,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,OM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ii.DEFAULT_UP=new z(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Is extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class we{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=St.workingColorSpace){return this.r=e,this.g=n,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=St.workingColorSpace){if(e=Ap(e,1),n=vt(n,0,1),i=vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xf(o,s,e+1/3),this.g=xf(o,s,e),this.b=xf(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,n=Ni){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ni){const i=Fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return St.workingToColorSpace(Vn.copy(this),e),Math.round(vt(Vn.r*255,0,255))*65536+Math.round(vt(Vn.g*255,0,255))*256+Math.round(vt(Vn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(Vn.copy(this),n);const i=Vn.r,r=Vn.g,s=Vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(Vn.copy(this),n),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ni){St.workingToColorSpace(Vn.copy(this),e);const n=Vn.r,i=Vn.g,r=Vn.b;return e!==Ni?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+n,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Kr),e.getHSL(Gl);const i=ka(Kr.h,Gl.h,n),r=ka(Kr.s,Gl.s,n),s=ka(Kr.l,Gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new we;we.NAMES=Fv;class zM extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $i=new z,Rr=new z,Sf=new z,br=new z,ro=new z,so=new z,_g=new z,yf=new z,Mf=new z,Ef=new z,Tf=new mn,wf=new mn,Af=new mn;class ji{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$i.subVectors(e,n),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$i.subVectors(r,n),Rr.subVectors(i,n),Sf.subVectors(e,n);const o=$i.dot($i),a=$i.dot(Rr),l=$i.dot(Sf),c=Rr.dot(Rr),d=Rr.dot(Sf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tf.setScalar(0),wf.setScalar(0),Af.setScalar(0),Tf.fromBufferAttribute(e,n),wf.fromBufferAttribute(e,i),Af.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tf,s.x),o.addScaledVector(wf,s.y),o.addScaledVector(Af,s.z),o}static isFrontFacing(e,n,i,r){return $i.subVectors(i,n),Rr.subVectors(e,n),$i.cross(Rr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),$i.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ji.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ji.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ro.subVectors(r,i),so.subVectors(s,i),yf.subVectors(e,i);const l=ro.dot(yf),c=so.dot(yf);if(l<=0&&c<=0)return n.copy(i);Mf.subVectors(e,r);const d=ro.dot(Mf),h=so.dot(Mf);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(ro,o);Ef.subVectors(e,s);const p=ro.dot(Ef),g=so.dot(Ef);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(so,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return _g.subVectors(s,r),a=(h-d)/(h-d+(p-g)),n.copy(r).addScaledVector(_g,a);const f=1/(m+y+u);return o=y*f,a=u*f,n.copy(i).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hl{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Xl.subVectors(this.max,ga),oo.subVectors(e.a,ga),ao.subVectors(e.b,ga),lo.subVectors(e.c,ga),Zr.subVectors(ao,oo),Qr.subVectors(lo,ao),Ms.subVectors(oo,lo);let n=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-Ms.z,Ms.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,Ms.z,0,-Ms.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-Ms.y,Ms.x,0];return!Cf(n,oo,ao,lo,Xl)||(n=[1,0,0,0,1,0,0,0,1],!Cf(n,oo,ao,lo,Xl))?!1:(Yl.crossVectors(Zr,Qr),n=[Yl.x,Yl.y,Yl.z],Cf(n,oo,ao,lo,Xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pr=[new z,new z,new z,new z,new z,new z,new z,new z],Ki=new z,Wl=new hl,oo=new z,ao=new z,lo=new z,Zr=new z,Qr=new z,Ms=new z,ga=new z,Xl=new z,Yl=new z,Es=new z;function Cf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Es.fromArray(t,s);const a=r.x*Math.abs(Es.x)+r.y*Math.abs(Es.y)+r.z*Math.abs(Es.z),l=e.dot(Es),c=n.dot(Es),d=i.dot(Es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Mn=new z,ql=new st;let HM=0;class Dt extends $s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=oM,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ql.fromBufferAttribute(this,n),ql.applyMatrix3(e),this.setXY(n,ql.x,ql.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array),r=Jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array),r=Jn(r,this.array),s=Jn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ov extends Dt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Bv extends Dt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ai extends Dt{constructor(e,n,i){super(new Float32Array(e),n,i)}}const VM=new hl,_a=new z,Rf=new z;class pl{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Rf)),this.expandByPoint(_a.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let GM=0;const Di=new gn,bf=new ii,co=new z,Mi=new hl,va=new hl,Ln=new z;class un extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aM(e)?Bv:Ov)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,i){return Di.makeTranslation(e,n,i),this.applyMatrix4(Di),this}scale(e,n,i){return Di.makeScale(e,n,i),this.applyMatrix4(Di),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(Mi.min,va.min),Mi.expandByPoint(Ln),Ln.addVectors(Mi.max,va.max),Mi.expandByPoint(Ln)):(Mi.expandByPoint(va.min),Mi.expandByPoint(va.max))}Mi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ln));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ln.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(e,c),Ln.add(co)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new z,l[v]=new z;const c=new z,d=new z,h=new z,u=new st,p=new st,g=new st,y=new z,m=new z;function f(v,C,b){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,b),u.fromBufferAttribute(s,v),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,b),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[v].add(y),a[C].add(y),a[b].add(y),l[v].add(m),l[C].add(m),l[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,C=_.length;v<C;++v){const b=_[v],P=b.start,F=b.count;for(let H=P,D=P+F;H<D;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new z,S=new z,T=new z,w=new z;function A(v){T.fromBufferAttribute(r,v),w.copy(T);const C=a[v];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(w,C);const P=S.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,C=_.length;v<C;++v){const b=_[v],P=b.start,F=b.count;for(let H=P,D=P+F;H<D;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Dt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Dt(u,d,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pf=new z,WM=new z,XM=new tt;class ns{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pf.subVectors(i,n).cross(WM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Pf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XM.getNormalMatrix(e),r=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let YM=0;class Jo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Oa,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mv,this.blendDst=gv,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ff,this.stencilZFail=ff,this.stencilZPass=ff,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ye(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ye(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ns().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lr=new z,Lf=new z,$l=new z,Kl=new z;class Rp{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Lr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,n),Lr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lf.copy(e).add(n).multiplyScalar(.5),$l.copy(n).sub(e).normalize(),Kl.copy(this.origin).sub(Lf);const s=e.distanceTo(n)*.5,o=-this.direction.dot($l),a=Kl.dot(this.direction),l=-Kl.dot($l),c=Kl.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=s*d,h>=0)if(u>=-g)if(u<=g){const y=1/d;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Lf).addScaledVector($l,u),p}intersectSphere(e,n){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,h=e.x-o.x,u=e.y-o.y,p=e.z-o.z,g=n.x-o.x,y=n.y-o.y,m=n.z-o.z,f=i.x-o.x,_=i.y-o.y,M=i.z-o.z,S=Math.abs(l),T=Math.abs(c),w=Math.abs(d);let A,v,C,b,P,F,H,D,k,Z,X,O;if(S>=T&&S>=w?(C=l,F=h,k=g,O=f,l>=0?(A=c,v=d,b=u,P=p,H=y,D=m,Z=_,X=M):(A=d,v=c,b=p,P=u,H=m,D=y,Z=M,X=_)):T>=w?(C=c,F=u,k=y,O=_,c>=0?(A=d,v=l,b=p,P=h,H=m,D=g,Z=M,X=f):(A=l,v=d,b=h,P=p,H=g,D=m,Z=f,X=M)):(C=d,F=p,k=m,O=M,d>=0?(A=l,v=c,b=h,P=u,H=g,D=y,Z=f,X=_):(A=c,v=l,b=u,P=h,H=y,D=g,Z=_,X=f)),C===0)return null;const U=A/C,W=v/C,Y=1/C,ce=b-U*F,Ae=P-W*F,nt=H-U*k,qe=D-W*k,Xe=Z-U*O,K=X-W*O,ne=Xe*qe-K*nt,xe=ce*K-Ae*Xe,Te=nt*Ae-qe*ce;if(r){if(ne<0||xe<0||Te<0)return null}else if((ne<0||xe<0||Te<0)&&(ne>0||xe>0||Te>0))return null;const ge=ne+xe+Te;if(ge===0)return null;const it=Y*(ne*F+xe*k+Te*O);return(ge>0?it<0:it>0)?null:this.at(it/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bp extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=_v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vg=new gn,Ts=new Rp,Zl=new pl,xg=new z,Ql=new z,Jl=new z,jl=new z,Df=new z,ec=new z,Sg=new z,tc=new z;class wr extends ii{constructor(e=new un,n=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Df.fromBufferAttribute(h,e),o?ec.addScaledVector(Df,d):ec.addScaledVector(Df.sub(n),d))}n.add(ec)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Ts.copy(e.ray).recast(e.near),!(Zl.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Zl,xg)===null||Ts.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(vg.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(vg),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ts)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,T=M;S<T;S+=3){const w=a.getX(S),A=a.getX(S+1),v=a.getX(S+2);r=nc(this,f,e,i,c,d,h,w,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const _=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);r=nc(this,o,e,i,c,d,h,_,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,T=M;S<T;S+=3){const w=S,A=S+1,v=S+2;r=nc(this,f,e,i,c,d,h,w,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const _=m,M=m+1,S=m+2;r=nc(this,o,e,i,c,d,h,_,M,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qM(t,e,n,i,r,s,o,a){let l;if(e.side===mi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vs,a),l===null)return null;tc.copy(a),tc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(tc);return c<n.near||c>n.far?null:{distance:c,point:tc.clone(),object:t}}function nc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ql),t.getVertexPosition(l,Jl),t.getVertexPosition(c,jl);const d=qM(t,e,n,i,Ql,Jl,jl,Sg);if(d){const h=new z;ji.getBarycoord(Sg,Ql,Jl,jl,h),r&&(d.uv=ji.getInterpolatedAttribute(r,a,l,c,h,new st)),s&&(d.uv1=ji.getInterpolatedAttribute(s,a,l,c,h,new st)),o&&(d.normal=ji.getInterpolatedAttribute(o,a,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new z,materialIndex:0};ji.getNormal(Ql,Jl,jl,u.normal),d.face=u,d.barycoord=h}return d}class $M extends Xn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Fn,d=Fn,h,u){super(null,o,a,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ws=new pl,KM=new st(.5,.5),ic=new z;class kv{constructor(e=new ns,n=new ns,i=new ns,r=new ns,s=new ns,o=new ns){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],g=s[8],y=s[9],m=s[10],f=s[11],_=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-o,p-d,f-g,T-_).normalize(),r[1].setComponents(c+o,p+d,f+g,T+_).normalize(),r[2].setComponents(c+a,p+h,f+y,T+M).normalize(),r[3].setComponents(c-a,p-h,f-y,T-M).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,p-u,f-m,T-S).normalize();else if(r[4].setComponents(c-l,p-u,f-m,T-S).normalize(),n===xr)r[5].setComponents(c+l,p+u,f+m,T+S).normalize();else if(n===au)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const n=KM.distanceTo(e.center);return ws.radius=.7071067811865476+n,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ic.x=r.normal.x>0?e.max.x:e.min.x,ic.y=r.normal.y>0?e.max.y:e.min.y,ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pc extends Jo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new z,uu=new z,yg=new gn,xa=new Rp,rc=new pl,Nf=new z,Mg=new z;class ZM extends ii{constructor(e=new un,n=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)cu.fromBufferAttribute(n,r-1),uu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new Ai(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(r),rc.radius+=s,e.ray.intersectsSphere(rc)===!1)return;yg.copy(r).invert(),xa.copy(e.ray).applyMatrix4(yg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const f=d.getX(y),_=d.getX(y+1),M=sc(this,e,xa,l,f,_,y);M&&n.push(M)}if(this.isLineLoop){const y=d.getX(g-1),m=d.getX(p),f=sc(this,e,xa,l,y,m,g-1);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const f=sc(this,e,xa,l,y,y+1,y);f&&n.push(f)}if(this.isLineLoop){const y=sc(this,e,xa,l,g-1,p,g-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(cu.fromBufferAttribute(a,r),uu.fromBufferAttribute(a,s),n.distanceSqToSegment(cu,uu,Nf,Mg)>i)return;Nf.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Nf);if(!(c<e.near||c>e.far))return{distance:c,point:Mg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Eg=new z,Tg=new z;class If extends ZM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Eg.fromBufferAttribute(n,r),Tg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(Tg);e.setAttribute("lineDistance",new Ai(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dr extends Jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wg=new gn,Sh=new Rp,oc=new pl,ac=new z;class Jr extends ii{constructor(e=new un,n=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(r),oc.radius+=s,e.ray.intersectsSphere(oc)===!1)return;wg.copy(r).invert(),Sh.copy(e.ray).applyMatrix4(wg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,y=p;g<y;g++){const m=c.getX(g);ac.fromBufferAttribute(h,m),Ag(ac,m,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,y=p;g<y;g++)ac.fromBufferAttribute(h,g),Ag(ac,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ag(t,e,n,i,r,s,o){const a=Sh.distanceSqToPoint(t);if(a<n){const l=new z;Sh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zv extends Xn{constructor(e=[],n=Gs,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cg extends Xn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends Xn{constructor(e,n,i=Tr,r,s,o,a=Fn,l=Fn,c,d=Xr,h=1){if(d!==Xr&&d!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class QM extends al{constructor(e,n=Tr,i=Gs,r,s,o=Fn,a=Fn,l,c=Xr){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ml extends un{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(d,3)),this.setAttribute("uv",new Ai(h,2));function g(y,m,f,_,M,S,T,w,A,v,C){const b=S/A,P=T/v,F=S/2,H=T/2,D=w/2,k=A+1,Z=v+1;let X=0,O=0;const U=new z;for(let W=0;W<Z;W++){const Y=W*P-H;for(let ce=0;ce<k;ce++){const Ae=ce*b-F;U[y]=Ae*_,U[m]=Y*M,U[f]=D,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[f]=w>0?1:-1,d.push(U.x,U.y,U.z),h.push(ce/A),h.push(1-W/v),X+=1}}for(let W=0;W<v;W++)for(let Y=0;Y<A;Y++){const ce=u+Y+k*W,Ae=u+Y+k*(W+1),nt=u+(Y+1)+k*(W+1),qe=u+(Y+1)+k*W;l.push(ce,Ae,qe),l.push(Ae,nt,qe),O+=6}a.addGroup(p,O,C),p+=O,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pu extends un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,u=n/l,p=[],g=[],y=[],m=[];for(let f=0;f<d;f++){const _=f*u-o;for(let M=0;M<c;M++){const S=M*h-s;g.push(S,-_,0),y.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const M=_+c*f,S=_+c*(f+1),T=_+1+c*(f+1),w=_+1+c*f;p.push(M,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(y,3)),this.setAttribute("uv",new Ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Rg(r))r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Rg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function jn(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function Rg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function JM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const fu={clone:Xo,merge:jn};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new we().setHex(r.value);break;case"v2":this.uniforms[i].value=new st().fromArray(r.value);break;case"v3":this.uniforms[i].value=new z().fromArray(r.value);break;case"v4":this.uniforms[i].value=new mn().fromArray(r.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new gn().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tE extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nE extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lc=new z,cc=new Qo,fr=new z;class Gv extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lc,cc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,fr.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(lc,cc,fr),fr.x===1&&fr.y===1&&fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new z,bg=new st,Pg=new st;class Fi extends Gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,n){return this.getViewBounds(e,bg,Pg),n.subVectors(Pg,bg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Pp extends Gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=-90,fo=1;class rE extends ii{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fi(uo,fo,e,n);r.layers=this.layers,this.add(r);const s=new Fi(uo,fo,e,n);s.layers=this.layers,this.add(s);const o=new Fi(uo,fo,e,n);o.layers=this.layers,this.add(o);const a=new Fi(uo,fo,e,n);a.layers=this.layers,this.add(a);const l=new Fi(uo,fo,e,n);l.layers=this.layers,this.add(l);const c=new Fi(uo,fo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sE extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=aE.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function aE(){this._document.hidden===!1&&this.reset()}class lE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Up=class Up{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Up.prototype.isMatrix2=!0;let Lg=Up;function Dg(t,e,n,i){const r=cE(i);switch(n){case Pv:return t*e;case Dv:return t*e/r.components*r.byteLength;case yp:return t*e/r.components*r.byteLength;case Ws:return t*e*2/r.components*r.byteLength;case Mp:return t*e*2/r.components*r.byteLength;case Lv:return t*e*3/r.components*r.byteLength;case er:return t*e*4/r.components*r.byteLength;case Ep:return t*e*4/r.components*r.byteLength;case Ac:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:case qd:return Math.max(t,16)*Math.max(e,8)/4;case Wd:case Yd:return Math.max(t,8)*Math.max(e,8)/2;case $d:case Kd:case Qd:case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zd:case iu:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _h:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ru:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cE(t){switch(t){case Oi:case Av:return{byteLength:1,components:1};case rl:case Cv:case gi:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case Tr:case vp:case vr:return{byteLength:4,components:1};case Rv:case bv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wv(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uE(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ST=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:fE,alphahash_pars_fragment:dE,alphamap_fragment:hE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:_E,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:SE,begin_vertex:yE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:wE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:bE,color_fragment:PE,color_pars_fragment:LE,color_pars_vertex:DE,color_vertex:NE,common:IE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:FE,displacementmap_pars_vertex:OE,displacementmap_vertex:BE,emissivemap_fragment:kE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:XE,envmap_pars_vertex:YE,envmap_physical_pars_fragment:i1,envmap_vertex:qE,fog_vertex:$E,fog_pars_vertex:KE,fog_fragment:ZE,fog_pars_fragment:QE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:jE,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:r1,lights_toon_pars_fragment:s1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:d1,lightprobes_pars_fragment:h1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:_1,map_fragment:v1,map_pars_fragment:x1,map_particle_fragment:S1,map_particle_pars_fragment:y1,metalnessmap_fragment:M1,metalnessmap_pars_fragment:E1,morphinstance_vertex:T1,morphcolor_vertex:w1,morphnormal_vertex:A1,morphtarget_pars_vertex:C1,morphtarget_vertex:R1,normal_fragment_begin:b1,normal_fragment_maps:P1,normal_pars_fragment:L1,normal_pars_vertex:D1,normal_vertex:N1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:B1,opaque_fragment:k1,packing:z1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:G1,dithering_pars_fragment:W1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:$1,shadowmap_vertex:K1,shadowmask_pars_fragment:Z1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:j1,skinnormal_vertex:eT,specularmap_fragment:tT,specularmap_pars_fragment:nT,tonemapping_fragment:iT,tonemapping_pars_fragment:rT,transmission_fragment:sT,transmission_pars_fragment:oT,uv_pars_fragment:aT,uv_pars_vertex:lT,uv_vertex:cT,worldpos_vertex:uT,background_vert:fT,background_frag:dT,backgroundCube_vert:hT,backgroundCube_frag:pT,cube_vert:mT,cube_frag:gT,depth_vert:_T,depth_frag:vT,distance_vert:xT,distance_frag:ST,equirect_vert:yT,equirect_frag:MT,linedashed_vert:ET,linedashed_frag:TT,meshbasic_vert:wT,meshbasic_frag:AT,meshlambert_vert:CT,meshlambert_frag:RT,meshmatcap_vert:bT,meshmatcap_frag:PT,meshnormal_vert:LT,meshnormal_frag:DT,meshphong_vert:NT,meshphong_frag:IT,meshphysical_vert:UT,meshphysical_frag:FT,meshtoon_vert:OT,meshtoon_frag:BT,points_vert:kT,points_frag:zT,shadow_vert:HT,shadow_frag:VT,sprite_vert:GT,sprite_frag:WT},ye={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},gr={basic:{uniforms:jn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:jn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:jn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:jn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:jn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new we(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:jn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:jn([ye.points,ye.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:jn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:jn([ye.common,ye.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:jn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:jn([ye.sprite,ye.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:jn([ye.common,ye.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:jn([ye.lights,ye.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};gr.physical={uniforms:jn([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const uc={r:0,b:0,g:0},XT=new gn,Xv=new tt;Xv.set(-1,0,0,0,1,0,0,0,1);function YT(t,e,n,i,r,s){const o=new we(0);let a=r===!0?0:1,l,c,d=null,h=0,u=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const S=_.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(_){let M=!1;const S=p(_);S===null?m(o,a):S&&S.isColor&&(m(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(_,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===bu)?(c===void 0&&(c=new wr(new ml(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Xo(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xv),c.material.toneMapped=St.getTransfer(S.colorSpace)!==kt,(d!==S||h!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,u=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new wr(new Pu(2,2),new Wn({name:"BackgroundMaterial",uniforms:Xo(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=St.getTransfer(S.colorSpace)!==kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(uc,Vv(t)),n.buffers.color.setClear(uc.r,uc.g,uc.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:f}}function qT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(P,F,H,D,k){let Z=!1;const X=h(P,D,H,F);s!==X&&(s=X,c(s.object)),Z=p(P,D,H,k),Z&&g(P,D,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(P,F,H,D),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function h(P,F,H,D){const k=D.wireframe===!0;let Z=i[F.id];Z===void 0&&(Z={},i[F.id]=Z);const X=P.isInstancedMesh===!0?P.id:0;let O=Z[X];O===void 0&&(O={},Z[X]=O);let U=O[H.id];U===void 0&&(U={},O[H.id]=U);let W=U[k];return W===void 0&&(W=u(l()),U[k]=W),W}function u(P){const F=[],H=[],D=[];for(let k=0;k<n;k++)F[k]=0,H[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:D,object:P,attributes:{},index:null}}function p(P,F,H,D){const k=s.attributes,Z=F.attributes;let X=0;const O=H.getAttributes();for(const U in O)if(O[U].location>=0){const Y=k[U];let ce=Z[U];if(ce===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function g(P,F,H,D){const k={},Z=F.attributes;let X=0;const O=H.getAttributes();for(const U in O)if(O[U].location>=0){let Y=Z[U];Y===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),k[U]=ce,X++}s.attributes=k,s.attributesNum=X,s.index=D}function y(){const P=s.newAttributes;for(let F=0,H=P.length;F<H;F++)P[F]=0}function m(P){f(P,0)}function f(P,F){const H=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;H[P]=1,D[P]===0&&(t.enableVertexAttribArray(P),D[P]=1),k[P]!==F&&(t.vertexAttribDivisor(P,F),k[P]=F)}function _(){const P=s.newAttributes,F=s.enabledAttributes;for(let H=0,D=F.length;H<D;H++)F[H]!==P[H]&&(t.disableVertexAttribArray(H),F[H]=0)}function M(P,F,H,D,k,Z,X){X===!0?t.vertexAttribIPointer(P,F,H,k,Z):t.vertexAttribPointer(P,F,H,D,k,Z)}function S(P,F,H,D){y();const k=D.attributes,Z=H.getAttributes(),X=F.defaultAttributeValues;for(const O in Z){const U=Z[O];if(U.location>=0){let W=k[O];if(W===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const Y=W.normalized,ce=W.itemSize,Ae=e.get(W);if(Ae===void 0)continue;const nt=Ae.buffer,qe=Ae.type,Xe=Ae.bytesPerElement,K=qe===t.INT||qe===t.UNSIGNED_INT||W.gpuType===vp;if(W.isInterleavedBufferAttribute){const ne=W.data,xe=ne.stride,Te=W.offset;if(ne.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)f(U.location+ge,ne.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ge=0;ge<U.locationSize;ge++)m(U.location+ge);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ge=0;ge<U.locationSize;ge++)M(U.location+ge,ce/U.locationSize,qe,Y,xe*Xe,(Te+ce/U.locationSize*ge)*Xe,K)}else{if(W.isInstancedBufferAttribute){for(let ne=0;ne<U.locationSize;ne++)f(U.location+ne,W.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ne=0;ne<U.locationSize;ne++)m(U.location+ne);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ne=0;ne<U.locationSize;ne++)M(U.location+ne,ce/U.locationSize,qe,Y,ce*Xe,ce/U.locationSize*ne*Xe,K)}}else if(X!==void 0){const Y=X[O];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(U.location,Y);break;case 3:t.vertexAttrib3fv(U.location,Y);break;case 4:t.vertexAttrib4fv(U.location,Y);break;default:t.vertexAttrib1fv(U.location,Y)}}}}_()}function T(){C();for(const P in i){const F=i[P];for(const H in F){const D=F[H];for(const k in D){const Z=D[k];for(const X in Z)d(Z[X].object),delete Z[X];delete D[k]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const H in F){const D=F[H];for(const k in D){const Z=D[k];for(const X in Z)d(Z[X].object),delete Z[X];delete D[k]}}delete i[P.id]}function A(P){for(const F in i){const H=i[F];for(const D in H){const k=H[D];if(k[P.id]===void 0)continue;const Z=k[P.id];for(const X in Z)d(Z[X].object),delete Z[X];delete k[P.id]}}}function v(P){for(const F in i){const H=i[F],D=P.isInstancedMesh===!0?P.id:0,k=H[D];if(k!==void 0){for(const Z in k){const X=k[Z];for(const O in X)d(X[O].object),delete X[O];delete k[Z]}delete H[D],Object.keys(H).length===0&&delete i[F]}}}function C(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function $T(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function KT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==er&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Oi&&A!==vr&&!v&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:w}}function ZT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ns,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,M=_*4;let S=f.clippingState||null;l.value=S,S=d(g,u,M,p);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==y;++M,S+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Ro=4,QT=6,JT=20,jT=256,Sa=new Pp,Ng=new we;let Uf=null,Ff=0,Of=0,Bf=!1;const ew=new z,As=new z;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ew}=s;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=Bf,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:gi,format:er,colorSpace:su,depthBuffer:!1},r=Ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tw(s)),this._blurMaterial=iw(s,e,n),this._ggxMaterial=nw(s,e,n)}return r}_compileMaterial(e){const n=new wr(new un,e);this._renderer.compile(n,Sa)}_sceneToCubeUV(e,n,i,r,s){const l=new Fi(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ng),h.toneMapping=Er,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wr(new ml,new bp({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let f=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,f=!0):(m.color.copy(Ng),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const T=this._cubeSize;ho(r,S*T,M>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(y,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Og()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=c*1.25,p=h*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Ro?i-g+Ro:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,ho(s,m,f,3*y,2*y),r.setRenderTarget(s),r.render(a,Sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ho(e,m,f,3*y,2*y),r.setRenderTarget(e),r.render(a,Sa)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],h=3*d*(r>this._lodMax-Ro?r-this._lodMax+Ro:0),u=4*(this._cubeSize-d);ho(n,h,u,3*d,2*d),o.setRenderTarget(n),o.render(l,Sa)}}function tw(t){const e=[],n=[];let i=t;const r=t-Ro+1+QT;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,g=new Float32Array(p*u*h),y=new Float32Array(p*u*h);for(let f=0;f<h;f++){const _=f%3*2/3-1,M=f>2?0:-1,S=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(S,p*u*f);for(let T=0;T<u;T++){const w=d[T*2]*2-1,A=d[T*2+1]*2-1;f===0?As.set(1,A,w):f===1?As.set(-w,1,-A):f===2?As.set(-w,A,1):f===3?As.set(-1,A,-w):f===4?As.set(-w,-1,A):As.set(w,A,-1),As.toArray(y,(f*u+T)*p)}}const m=new un;m.setAttribute("position",new Dt(g,p)),m.setAttribute("outputDirection",new Dt(y,p)),n.push(new wr(m,null)),i>Ro&&i--}return{lodMeshes:n,sizeLods:e}}function Ug(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nw(t,e,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function iw(t,e,n){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:JT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Fg(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Og(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yv extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ml(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:Mr});s.uniforms.tEquirect.value=n;const o=new wr(r,s),a=n.minFilter;return n.minFilter===Ds&&(n.minFilter=Tn),new rE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function rw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===lf||p===cf)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new Yv(g.height);return y.fromEquirectangularTexture(t,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===lf||p===cf,y=p===Gs||p===Wo;if(g||y){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Ig(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Ig(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===lf?u.mapping=Gs:p===cf&&(u.mapping=Wo),u}function l(u){let p=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function sw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Uo("WebGLRenderer: "+i+" extension not supported."),r}}}function ow(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const _=p.array;y=p.version;for(let M=0,S=_.length;M<S;M+=3){const T=_[M+0],w=_[M+1],A=_[M+2];u.push(T,w,w,A,A,T)}}else{const _=g.array;y=g.version;for(let M=0,S=_.length/3-1;M<S;M+=3){const T=M+0,w=M+1,A=M+2;u.push(T,w,w,A,A,T)}}const m=new(g.count>=65535?Bv:Ov)(u,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function aw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*o,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function lw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cw(t,e,n){const i=new WeakMap,r=new mn;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let b=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*h),v=new Iv(A,T,w,h);v.type=vr,v.needsUpdate=!0;const C=S*4;for(let P=0;P<h;P++){const F=f[P],H=_[P],D=M[P],k=T*w*4*P;for(let Z=0;Z<F.count;Z++){const X=Z*C;g===!0&&(r.fromBufferAttribute(F,Z),A[k+X+0]=r.x,A[k+X+1]=r.y,A[k+X+2]=r.z,A[k+X+3]=0),y===!0&&(r.fromBufferAttribute(H,Z),A[k+X+4]=r.x,A[k+X+5]=r.y,A[k+X+6]=r.z,A[k+X+7]=0),m===!0&&(r.fromBufferAttribute(D,Z),A[k+X+8]=r.x,A[k+X+9]=r.y,A[k+X+10]=r.z,A[k+X+11]=D.itemSize===4?r.w:1)}}u={count:h,texture:v,size:new st(T,w)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function uw(t,e,n,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:a}}const fw={[vv]:"LINEAR_TONE_MAPPING",[xv]:"REINHARD_TONE_MAPPING",[Sv]:"CINEON_TONE_MAPPING",[yv]:"ACES_FILMIC_TONE_MAPPING",[Ev]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Mv]:"CUSTOM_TONE_MAPPING"};function dw(t,e,n,i,r,s){const o=new ni(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new un;c.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const d=new tE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wr(c,d),u=new Pp(-1,1,1,-1,0,1);let p=null,g=null,y=!1,m,f=null,_=[],M=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let w=0;w<_.length;w++){const A=_[w];A.setSize&&A.setSize(S,T)}},this.setEffects=function(S){_=S,M=_.length>0&&_[0].isRenderPass===!0;const T=o.width,w=o.height;_.length>0&&a===null&&(a=new ni(T,w,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(T,w,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){const v=_[A];v.setSize&&v.setSize(T,w)}},this.begin=function(S,T){if(y||S.toneMapping===Er&&_.length===0)return!1;if(f=T,T!==null){const w=T.width,A=T.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return M===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Er,!0},this.hasRenderPass=function(){return M},this.end=function(S,T){S.toneMapping=m,y=!0;let w=o,A=a;for(let v=0;v<_.length;v++){const C=_[v];C.enabled!==!1&&(C.render(S,A,w,T),C.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(p!==S.outputColorSpace||g!==S.toneMapping){p=S.outputColorSpace,g=S.toneMapping,d.defines={},St.getTransfer(p)===kt&&(d.defines.SRGB_TRANSFER="");const v=fw[g];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(h,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const qv=new Xn,yh=new al(1,1),$v=new Iv,Kv=new DM,Zv=new zv,Bg=[],kg=[],zg=new Float32Array(16),Hg=new Float32Array(9),Vg=new Float32Array(4);function jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bg[r];if(s===void 0&&(s=new Float32Array(r),Bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=kg[e];n===void 0&&(n=new Int32Array(e),kg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2fv(this.addr,e),Rn(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Cn(n,e))return;t.uniform3fv(this.addr,e),Rn(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4fv(this.addr,e),Rn(n,e)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;Vg.set(i),t.uniformMatrix2fv(this.addr,!1,Vg),Rn(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;Hg.set(i),t.uniformMatrix3fv(this.addr,!1,Hg),Rn(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rn(n,e)}else{if(Cn(n,i))return;zg.set(i),t.uniformMatrix4fv(this.addr,!1,zg),Rn(n,i)}}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2iv(this.addr,e),Rn(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;t.uniform3iv(this.addr,e),Rn(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4iv(this.addr,e),Rn(n,e)}}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Cn(n,e))return;t.uniform2uiv(this.addr,e),Rn(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Cn(n,e))return;t.uniform3uiv(this.addr,e),Rn(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Cn(n,e))return;t.uniform4uiv(this.addr,e),Rn(n,e)}}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yh.compareFunction=n.isReversedDepthBuffer()?wp:Tp,s=yh):s=qv,n.setTexture2D(e||s,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kv,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zv,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$v,r)}function Dw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return Sw;case 35667:case 35671:return yw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return Tw;case 36294:return ww;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Nw(t,e){t.uniform1fv(this.addr,e)}function Iw(t,e){const n=jo(e,this.size,2);t.uniform2fv(this.addr,n)}function Uw(t,e){const n=jo(e,this.size,3);t.uniform3fv(this.addr,n)}function Fw(t,e){const n=jo(e,this.size,4);t.uniform4fv(this.addr,n)}function Ow(t,e){const n=jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bw(t,e){const n=jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kw(t,e){const n=jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function Hw(t,e){t.uniform2iv(this.addr,e)}function Vw(t,e){t.uniform3iv(this.addr,e)}function Gw(t,e){t.uniform4iv(this.addr,e)}function Ww(t,e){t.uniform1uiv(this.addr,e)}function Xw(t,e){t.uniform2uiv(this.addr,e)}function Yw(t,e){t.uniform3uiv(this.addr,e)}function qw(t,e){t.uniform4uiv(this.addr,e)}function $w(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=yh:o=qv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Kw(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Kv,s[o])}function Zw(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zv,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=Du(n,r);Cn(i,s)||(t.uniform1iv(this.addr,s),Rn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$v,s[o])}function Jw(t){switch(t){case 5126:return Nw;case 35664:return Iw;case 35665:return Uw;case 35666:return Fw;case 35674:return Ow;case 35675:return Bw;case 35676:return kw;case 5124:case 35670:return zw;case 35667:case 35671:return Hw;case 35668:case 35672:return Vw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return Yw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Zw;case 36289:case 36303:case 36311:case 36292:return Qw}}class jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dw(n.type)}}class eA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jw(n.type)}}class tA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function Gg(t,e){t.seq.push(e),t.map[e.id]=e}function nA(t,e,n){const i=t.name,r=i.length;for(kf.lastIndex=0;;){const s=kf.exec(i),o=kf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gg(n,c===void 0?new jw(a,t,e):new eA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new tA(a),Gg(n,h)),n=h}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);nA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iA=37297;let rA=0;function sA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xg=new tt;function oA(t){St._getMatrix(Xg,St.workingColorSpace,t);const e=`mat3( ${Xg.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+sA(t.getShaderSource(e),a)}else return s}function aA(t,e){const n=oA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const lA={[vv]:"Linear",[xv]:"Reinhard",[Sv]:"Cineon",[yv]:"ACESFilmic",[Ev]:"AgX",[Tv]:"Neutral",[Mv]:"Custom"};function cA(t,e){const n=lA[e];return n===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fc=new z;function uA(){St.getLuminanceCoefficients(fc);const t=fc.x.toFixed(4),e=fc.y.toFixed(4),n=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function dA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ca(t){return t!==""}function qg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(t){return t.replace(pA,gA)}const mA=new Map;function gA(t,e){let n=ut[e];if(n===void 0){const i=mA.get(e);if(i!==void 0)n=ut[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(n)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(t){return t.replace(_A,vA)}function vA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xA={[wc]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function SA(t){return xA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yA={[Gs]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function MA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":yA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const EA={[Wo]:"ENVMAP_MODE_REFRACTION"};function TA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":EA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wA={[_v]:"ENVMAP_BLENDING_MULTIPLY",[$y]:"ENVMAP_BLENDING_MIX",[Ky]:"ENVMAP_BLENDING_ADD"};function AA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":wA[t.combine]||"ENVMAP_BLENDING_NONE"}function CA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=SA(n),c=MA(n),d=TA(n),h=AA(n),u=CA(n),p=fA(n),g=dA(s),y=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),f.length>0&&(f+=`
`)):(m=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),f=[Zg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?ut.tonemapping_pars_fragment:"",n.toneMapping!==Er?cA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,aA("linearToOutputTexel",n.outputColorSpace),uA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),o=Mh(o),o=qg(o,n),o=$g(o,n),a=Mh(a),a=qg(a,n),a=$g(a,n),o=Kg(o),a=Kg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=_+m+o,S=_+f+a,T=Wg(r,r.VERTEX_SHADER,M),w=Wg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,T),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(T)||"",D=r.getShaderInfoLog(w)||"",k=F.trim(),Z=H.trim(),X=D.trim();let O=!0,U=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,w);else{const W=Yg(r,T,"vertex"),Y=Yg(r,w,"fragment");Pt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+W+`
`+Y)}else k!==""?Ye("WebGLProgram: Program Info Log:",k):(Z===""||X==="")&&(U=!1);U&&(P.diagnostics={runnable:O,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(T),r.deleteShader(w),v=new Lc(r,y),C=hA(r,y)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(y,iA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}let bA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LA(e),n.set(e,i)),i}}class LA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function DA(t){return t===Ws||t===iu||t===ru}function NA(t,e,n,i,r,s){const o=new Uv,a=new PA,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,C,b,P,F,H){const D=P.fog,k=F.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||Z,X),U=O&&O.mapping===bu?O.image.height:null,W=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ye("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const Y=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=Y!==void 0?Y.length:0;let Ae=0;k.morphAttributes.position!==void 0&&(Ae=1),k.morphAttributes.normal!==void 0&&(Ae=2),k.morphAttributes.color!==void 0&&(Ae=3);let nt,qe,Xe,K;if(W){const Tt=gr[W];nt=Tt.vertexShader,qe=Tt.fragmentShader}else{nt=v.vertexShader,qe=v.fragmentShader;const Tt=a.getVertexShaderStage(v),yt=a.getFragmentShaderStage(v);a.update(v,Tt,yt),Xe=Tt.id,K=yt.id}const ne=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Te=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,it=!!v.map,sn=!!v.matcap,Ze=!!O,mt=!!v.aoMap,Ht=!!v.lightMap,ot=!!v.bumpMap&&v.wireframe===!1,It=!!v.normalMap,jt=!!v.displacementMap,bn=!!v.emissiveMap,Zt=!!v.metalnessMap,Nt=!!v.roughnessMap,I=v.anisotropy>0,on=v.clearcoat>0,ht=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,q=v.transmission>0,Q=I&&!!v.anisotropyMap,oe=on&&!!v.clearcoatMap,fe=on&&!!v.clearcoatNormalMap,j=on&&!!v.clearcoatRoughnessMap,ie=x&&!!v.iridescenceMap,de=x&&!!v.iridescenceThicknessMap,Le=B&&!!v.sheenColorMap,me=B&&!!v.sheenRoughnessMap,pe=!!v.specularMap,Be=!!v.specularColorMap,Ve=!!v.specularIntensityMap,Qe=q&&!!v.transmissionMap,N=q&&!!v.thicknessMap,he=!!v.gradientMap,ee=!!v.alphaMap,ue=v.alphaTest>0,Ee=!!v.alphaHash,se=!!v.extensions;let ke=Er;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ke=t.toneMapping);const Fe={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:qe,defines:v.defines,customVertexShaderID:Xe,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Te,instancingColor:Te&&F.instanceColor!==null,instancingMorph:Te&&F.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:sn,envMap:Ze,envMapMode:Ze&&O.mapping,envMapCubeUVHeight:U,aoMap:mt,lightMap:Ht,bumpMap:ot,normalMap:It,displacementMap:jt,emissiveMap:bn,normalMapObjectSpace:It&&v.normalMapType===Jy,normalMapTangentSpace:It&&v.normalMapType===ng,packedNormalMap:It&&v.normalMapType===ng&&DA(v.normalMap.format),metalnessMap:Zt,roughnessMap:Nt,anisotropy:I,anisotropyMap:Q,clearcoat:on,clearcoatMap:oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:j,dispersion:ht,retroreflection:R,iridescence:x,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:B,sheenColorMap:Le,sheenRoughnessMap:me,specularMap:pe,specularColorMap:Be,specularIntensityMap:Ve,transmission:q,transmissionMap:Qe,thicknessMap:N,gradientMap:he,opaque:v.transparent===!1&&v.blending===Oa&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:Ee,combine:v.combine,mapUv:it&&g(v.map.channel),aoMapUv:mt&&g(v.aoMap.channel),lightMapUv:Ht&&g(v.lightMap.channel),bumpMapUv:ot&&g(v.bumpMap.channel),normalMapUv:It&&g(v.normalMap.channel),displacementMapUv:jt&&g(v.displacementMap.channel),emissiveMapUv:bn&&g(v.emissiveMap.channel),metalnessMapUv:Zt&&g(v.metalnessMap.channel),roughnessMapUv:Nt&&g(v.roughnessMap.channel),anisotropyMapUv:Q&&g(v.anisotropyMap.channel),clearcoatMapUv:oe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(v.sheenRoughnessMap.channel),specularMapUv:pe&&g(v.specularMap.channel),specularColorMapUv:Be&&g(v.specularColorMap.channel),specularIntensityMapUv:Ve&&g(v.specularIntensityMap.channel),transmissionMapUv:Qe&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:ee&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(It||I),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(it||ee),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&It===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&St.getTransfer(v.map.colorSpace)===kt,decodeVideoTextureEmissive:bn&&v.emissiveMap.isVideoTexture===!0&&St.getTransfer(v.emissiveMap.colorSpace)===kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ur,flipSided:v.side===mi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const b in v.defines)C.push(b),C.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(f(C,v),_(C,v),C.push(t.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function f(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function _(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const C=p[v.type];let b;if(C){const P=gr[C];b=fu.clone(P.uniforms)}else b=v.uniforms;return b}function S(v,C){let b=d.get(C);return b!==void 0?++b.usedTimes:(b=new RA(t,C,v,r),c.push(b),d.set(C,b)),b}function T(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function IA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function UA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,y,m,f){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},t[e]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=g,_.materialVariant=o(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=m,_.group=f),e++,_}function l(u,p,g,y,m,f,_){_.reversedDepth===!0&&(m=-m);const M=a(u,p,g,y,m,f);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(u,p,g,y,m,f){const _=a(u,p,g,y,m,f);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function d(u,p){n.length>1&&n.sort(u||UA),i.length>1&&i.sort(p||Qg),r.length>1&&r.sort(p||Qg)}function h(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function FA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jg,t.set(i,[o])):r>=s.length?(o=new Jg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new z,color:new we};break;case"SpotLight":n={position:new z,direction:new z,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kA=0;function zA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HA(t){const e=new OA,n=BA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new gn,o=new gn;function a(c){let d=0,h=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,_=0,M=0,S=0,T=0,w=0,A=0,v=0,C=0,b=0;c.sort(zA);for(let F=0,H=c.length;F<H;F++){const D=c[F],k=D.color,Z=D.intensity,X=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ws?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=k.r*Z,h+=k.g*Z,u+=k.b*Z;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],Z);b++}else if(D.isSunLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,Y=n.get(D);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[g]=Y,i.sunShadowMap[g]=O;const ce=W.getViewportCount();for(let Ae=0;Ae<ce;Ae++)i.sunShadowMatrix[y+Ae]=W.getMatrix(Ae),i.sunShadowCascade[y+Ae]=W._cascadeData[Ae];y+=ce,g++}i.sun[p]=U,p++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,Y=n.get(D);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=O,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=U,m++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(k).multiplyScalar(Z),U.distance=X,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[_]=U;const W=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,W.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=W.matrix,D.castShadow){const Y=n.get(D);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=O,A++}_++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(k).multiplyScalar(Z),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=U,M++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const W=D.shadow,Y=n.get(D);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=O,i.pointShadowMatrix[f]=D.shadow.matrix,w++}i.point[f]=U,f++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(Z),U.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[S]=U,S++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const P=i.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==S||P.numSunShadows!==g||P.numDirectionalShadows!==T||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==b)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=f,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=S,P.numSunShadows=g,P.numDirectionalShadows=T,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=b,i.version=kA++)}function l(c,d){let h=0,u=0,p=0,g=0,y=0,m=0;const f=d.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const S=c[_];if(S.isSunLight){const T=i.sun[h];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),h++}else if(S.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),u++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),o.identity(),s.copy(S.matrixWorld),s.premultiply(f),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function jg(t){const e=new HA(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function VA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jg(t),e.set(r,[a])):s>=o.length?(a=new jg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const GA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XA=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],YA=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],e0=new gn,ya=new z,zf=new z;function qA(t,e,n){let i=new kv;const r=new st,s=new st,o=new mn,a=new nE,l=new iE,c={},d=n.maxTextureSize,h={[Vs]:mi,[mi]:Vs,[Ur]:Ur},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:GA,fragmentShader:WA}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new wr(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let f=this.type;this.render=function(w,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===by&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wc);const C=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Mr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==this.type;H&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=w.length;D<k;D++){const Z=w[D],X=Z.shadow;if(X===void 0){Ye("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const O=X.getFrameExtents();r.multiply(O),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,X.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(X.camera._reversedDepth=U,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Aa){if(Z.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ni(r.x,r.y,{format:Ws,type:gi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new al(r.x,r.y,vr),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=Xr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn}else Z.isPointLight?(X.map=new Yv(r.x),X.map.depthTexture=new QM(r.x,Tr)):(X.map=new ni(r.x,r.y),X.map.depthTexture=new al(r.x,r.y,Tr)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=Xr,this.type===wc?(X.map.depthTexture.compareFunction=U?wp:Tp,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const W=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,v);for(let Y=0;Y<W;Y++){const ce=X.getCamera(Y);if(Z.isPointLight){const Ae=X.camera,nt=X.matrix,qe=Z.distance||Ae.far;qe!==Ae.far&&(Ae.far=qe,Ae.updateProjectionMatrix()),ya.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(ya),zf.copy(Ae.position),zf.add(XA[Y]),Ae.up.copy(YA[Y]),Ae.lookAt(zf),Ae.updateMatrixWorld(),nt.makeTranslation(-ya.x,-ya.y,-ya.z),e0.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),X._frustum.setFromProjectionMatrix(e0,Ae.coordinateSystem,Ae.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(X.map),t.clear());const Ae=X.getViewport(Y);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),F.viewport(o)}i=X.getFrustum(Y),S(A,v,ce,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Aa&&_(X,v),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(C,b,P)};function _(w,A){const v=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ni(r.x,r.y,{format:Ws,type:gi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,v,u,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,v,p,y,null)}function M(w,A,v,C){let b=null;const P=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=v.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=b.uuid,H=A.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let k=D[H];k===void 0&&(k=b.clone(),D[H]=k,A.addEventListener("dispose",T)),b=k}if(b.visible=A.visible,b.wireframe=A.wireframe,C===Aa?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=t.properties.get(b);F.light=v}return b}function S(w,A,v,C,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Aa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const H=e.update(w),D=w.material;if(Array.isArray(D)){const k=H.groups;for(let Z=0,X=k.length;Z<X;Z++){const O=k[Z],U=D[O.materialIndex];if(U&&U.visible){const W=M(w,U,C,b);w.onBeforeShadow(t,w,A,v,H,W,O),t.renderBufferDirect(v,null,H,W,w,O),w.onAfterShadow(t,w,A,v,H,W,O)}}}else if(D.visible){const k=M(w,D,C,b);w.onBeforeShadow(t,w,A,v,H,k,null),t.renderBufferDirect(v,null,H,k,w,null),w.onAfterShadow(t,w,A,v,H,k,null)}}const F=w.children;for(let H=0,D=F.length;H<D;H++)S(F[H],A,v,C,b)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const C=c[v],b=w.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}function $A(t,e){function n(){let N=!1;const he=new mn;let ee=null;const ue=new mn(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!N&&(t.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,se,ke,Fe,Tt){Tt===!0&&(Ee*=Fe,se*=Fe,ke*=Fe),he.set(Ee,se,ke,Fe),ue.equals(he)===!1&&(t.clearColor(Ee,se,ke,Fe),ue.copy(he))},reset:function(){N=!1,ee=null,ue.set(-1,0,0,0)}}}function i(){let N=!1,he=!1,ee=null,ue=null,Ee=null;return{setReversed:function(se){if(he!==se){const ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Fe=Ee;Ee=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(se){se?ne(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(se){ee!==se&&!N&&(t.depthMask(se),ee=se)},setFunc:function(se){if(he&&(se=uM[se]),ue!==se){switch(se){case Ud:t.depthFunc(t.NEVER);break;case Fd:t.depthFunc(t.ALWAYS);break;case Od:t.depthFunc(t.LESS);break;case il:t.depthFunc(t.LEQUAL);break;case Bd:t.depthFunc(t.EQUAL);break;case kd:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=se}},setLocked:function(se){N=se},setClear:function(se){Ee!==se&&(Ee=se,he&&(se=1-se),t.clearDepth(se))},reset:function(){N=!1,ee=null,ue=null,Ee=null,he=!1}}}function r(){let N=!1,he=null,ee=null,ue=null,Ee=null,se=null,ke=null,Fe=null,Tt=null;return{setTest:function(yt){N||(yt?ne(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(yt){he!==yt&&!N&&(t.stencilMask(yt),he=yt)},setFunc:function(yt,oi,_i){(ee!==yt||ue!==oi||Ee!==_i)&&(t.stencilFunc(yt,oi,_i),ee=yt,ue=oi,Ee=_i)},setOp:function(yt,oi,_i){(se!==yt||ke!==oi||Fe!==_i)&&(t.stencilOp(yt,oi,_i),se=yt,ke=oi,Fe=_i)},setLocked:function(yt){N=yt},setClear:function(yt){Tt!==yt&&(t.clearStencil(yt),Tt=yt)},reset:function(){N=!1,he=null,ee=null,ue=null,Ee=null,se=null,ke=null,Fe=null,Tt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,M=null,S=null,T=null,w=null,A=null,v=new we(0,0,0),C=0,b=!1,P=null,F=null,H=null,D=null,k=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=O>=2);let W=null,Y={};const ce=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),nt=new mn().fromArray(ce),qe=new mn().fromArray(Ae);function Xe(N,he,ee,ue){const Ee=new Uint8Array(4),se=t.createTexture();t.bindTexture(N,se),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ee;ke++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(he+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return se}const K={};K[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(il),ot(!1),It(jm),ne(t.CULL_FACE),mt(Mr);function ne(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function xe(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Te(N,he){return u[N]!==he?(t.bindFramebuffer(N,he),u[N]=he,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(N,he){let ee=g,ue=!1;if(N){ee=p.get(he),ee===void 0&&(ee=[],p.set(he,ee));const Ee=N.textures;if(ee.length!==Ee.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let se=0,ke=Ee.length;se<ke;se++)ee[se]=t.COLOR_ATTACHMENT0+se;ee.length=Ee.length,ue=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ue=!0);ue&&t.drawBuffers(ee)}function it(N){return y!==N?(t.useProgram(N),y=N,!0):!1}const sn={[po]:t.FUNC_ADD,[Ly]:t.FUNC_SUBTRACT,[Dy]:t.FUNC_REVERSE_SUBTRACT};sn[Ny]=t.MIN,sn[Iy]=t.MAX;const Ze={[Uy]:t.ZERO,[Fy]:t.ONE,[Oy]:t.SRC_COLOR,[mv]:t.SRC_ALPHA,[Gy]:t.SRC_ALPHA_SATURATE,[Hy]:t.DST_COLOR,[ky]:t.DST_ALPHA,[By]:t.ONE_MINUS_SRC_COLOR,[gv]:t.ONE_MINUS_SRC_ALPHA,[Vy]:t.ONE_MINUS_DST_COLOR,[zy]:t.ONE_MINUS_DST_ALPHA,[Wy]:t.CONSTANT_COLOR,[Xy]:t.ONE_MINUS_CONSTANT_COLOR,[Yy]:t.CONSTANT_ALPHA,[qy]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(N,he,ee,ue,Ee,se,ke,Fe,Tt,yt){if(N===Mr){m===!0&&(xe(t.BLEND),m=!1);return}if(m===!1&&(ne(t.BLEND),m=!0),N!==Py){if(N!==f||yt!==b){if((_!==po||T!==po)&&(t.blendEquation(t.FUNC_ADD),_=po,T=po),yt)switch(N){case Oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ci:t.blendFunc(t.ONE,t.ONE);break;case eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Pt("WebGLState: Invalid blending: ",N);break}else switch(N){case Oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ci:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case eg:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tg:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",N);break}M=null,S=null,w=null,A=null,v.set(0,0,0),C=0,f=N,b=yt}return}Ee=Ee||he,se=se||ee,ke=ke||ue,(he!==_||Ee!==T)&&(t.blendEquationSeparate(sn[he],sn[Ee]),_=he,T=Ee),(ee!==M||ue!==S||se!==w||ke!==A)&&(t.blendFuncSeparate(Ze[ee],Ze[ue],Ze[se],Ze[ke]),M=ee,S=ue,w=se,A=ke),(Fe.equals(v)===!1||Tt!==C)&&(t.blendColor(Fe.r,Fe.g,Fe.b,Tt),v.copy(Fe),C=Tt),f=N,b=!1}function Ht(N,he){N.side===Ur?xe(t.CULL_FACE):ne(t.CULL_FACE);let ee=N.side===mi;he&&(ee=!ee),ot(ee),N.blending===Oa&&N.transparent===!1?mt(Mr):mt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ue=N.stencilWrite;a.setTest(ue),ue&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),bn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ot(N){P!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),P=N)}function It(N){N!==Cy?(ne(t.CULL_FACE),N!==F&&(N===jm?t.cullFace(t.BACK):N===Ry?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),F=N}function jt(N){N!==H&&(X&&t.lineWidth(N),H=N)}function bn(N,he,ee){N?(ne(t.POLYGON_OFFSET_FILL),(D!==he||k!==ee)&&(D=he,k=ee,o.getReversed()&&(he=-he),t.polygonOffset(he,ee))):xe(t.POLYGON_OFFSET_FILL)}function Zt(N){N?ne(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function Nt(N){N===void 0&&(N=t.TEXTURE0+Z-1),W!==N&&(t.activeTexture(N),W=N)}function I(N,he,ee){ee===void 0&&(W===null?ee=t.TEXTURE0+Z-1:ee=W);let ue=Y[ee];ue===void 0&&(ue={type:void 0,texture:void 0},Y[ee]=ue),(ue.type!==N||ue.texture!==he)&&(W!==ee&&(t.activeTexture(ee),W=ee),t.bindTexture(N,he||K[N]),ue.type=N,ue.texture=he)}function on(){const N=Y[W];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ht(){try{t.compressedTexImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function x(){try{t.texSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function B(){try{t.texSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function fe(){try{t.texStorage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function j(){try{t.texImage2D(...arguments)}catch(N){Pt("WebGLState:",N)}}function ie(){try{t.texImage3D(...arguments)}catch(N){Pt("WebGLState:",N)}}function de(N){return h[N]!==void 0?h[N]:t.getParameter(N)}function Le(N,he){h[N]!==he&&(t.pixelStorei(N,he),h[N]=he)}function me(N){nt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function pe(N){qe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),qe.copy(N))}function Be(N,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let ue=ee.get(N);ue===void 0&&(ue=t.getUniformBlockIndex(he,N.name),ee.set(N,ue))}function Ve(N,he){const ue=c.get(he).get(N);l.get(he)!==ue&&(t.uniformBlockBinding(he,ue,N.__bindingPointIndex),l.set(he,ue))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},W=null,Y={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,M=null,S=null,T=null,w=null,A=null,v=new we(0,0,0),C=0,b=!1,P=null,F=null,H=null,D=null,k=null,nt.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:xe,bindFramebuffer:Te,drawBuffers:ge,useProgram:it,setBlending:mt,setMaterial:Ht,setFlipSided:ot,setCullFace:It,setLineWidth:jt,setPolygonOffset:bn,setScissorTest:Zt,activeTexture:Nt,bindTexture:I,unbindTexture:on,compressedTexImage2D:ht,compressedTexImage3D:R,texImage2D:j,texImage3D:ie,pixelStorei:Le,getParameter:de,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:fe,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:me,viewport:pe,reset:Qe}}function KA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,x){return g?new OffscreenCanvas(R,x):lu("canvas")}function m(R,x,B){let q=1;const Q=ht(R);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);u===void 0&&(u=y(oe,fe));const j=x?y(oe,fe):u;return j.width=oe,j.height=fe,j.getContext("2d").drawImage(R,0,0,oe,fe),Ye("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+fe+")."),j}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function f(R){return R.generateMipmaps}function _(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,x,B,q,Q,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===t.RED&&(B===t.FLOAT&&(j=t.R32F),B===t.HALF_FLOAT&&(j=t.R16F),B===t.UNSIGNED_BYTE&&(j=t.R8),B===t.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),B===t.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.R8UI),B===t.UNSIGNED_SHORT&&(j=t.R16UI),B===t.UNSIGNED_INT&&(j=t.R32UI),B===t.BYTE&&(j=t.R8I),B===t.SHORT&&(j=t.R16I),B===t.INT&&(j=t.R32I)),x===t.RG&&(B===t.FLOAT&&(j=t.RG32F),B===t.HALF_FLOAT&&(j=t.RG16F),B===t.UNSIGNED_BYTE&&(j=t.RG8),B===t.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),B===t.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RG8UI),B===t.UNSIGNED_SHORT&&(j=t.RG16UI),B===t.UNSIGNED_INT&&(j=t.RG32UI),B===t.BYTE&&(j=t.RG8I),B===t.SHORT&&(j=t.RG16I),B===t.INT&&(j=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGB8UI),B===t.UNSIGNED_SHORT&&(j=t.RGB16UI),B===t.UNSIGNED_INT&&(j=t.RGB32UI),B===t.BYTE&&(j=t.RGB8I),B===t.SHORT&&(j=t.RGB16I),B===t.INT&&(j=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),B===t.UNSIGNED_INT&&(j=t.RGBA32UI),B===t.BYTE&&(j=t.RGBA8I),B===t.SHORT&&(j=t.RGBA16I),B===t.INT&&(j=t.RGBA32I)),x===t.RGB&&(B===t.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),B===t.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),x===t.RGBA){const ie=oe?ou:St.getTransfer(Q);B===t.FLOAT&&(j=t.RGBA32F),B===t.HALF_FLOAT&&(j=t.RGBA16F),B===t.UNSIGNED_BYTE&&(j=ie===kt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),B===t.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(R,x){let B;return R?x===null||x===Tr||x===sl?B=t.DEPTH24_STENCIL8:x===vr?B=t.DEPTH32F_STENCIL8:x===rl&&(B=t.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Tr||x===sl?B=t.DEPTH_COMPONENT24:x===vr?B=t.DEPTH_COMPONENT32F:x===rl&&(B=t.DEPTH_COMPONENT16),B}function w(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),C(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),P(x)}function C(R){const x=i.get(R);if(x.__webglInit===void 0)return;const B=R.source,q=p.get(B);if(q){const Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys(q).length===0&&p.delete(B)}i.remove(R)}function b(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const B=R.source,q=p.get(B);delete q[x.__cacheKey],o.memory.textures--}function P(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Q=0;Q<x.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(x.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)t.deleteFramebuffer(x.__webglFramebuffer[q]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,Q=B.length;q<Q;q++){const oe=i.get(B[q]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(R)}let F=0;function H(){F=0}function D(){return F}function k(R){F=R}function Z(){const R=F;return R>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function X(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function O(R,x){const B=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,R,x);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function U(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,x);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function W(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function Y(R,x){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Te(B,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}const ce={[Vd]:t.REPEAT,[Br]:t.CLAMP_TO_EDGE,[Gd]:t.MIRRORED_REPEAT},Ae={[Fn]:t.NEAREST,[Zy]:t.NEAREST_MIPMAP_NEAREST,[zl]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[uf]:t.LINEAR_MIPMAP_NEAREST,[Ds]:t.LINEAR_MIPMAP_LINEAR},nt={[eM]:t.NEVER,[sM]:t.ALWAYS,[tM]:t.LESS,[Tp]:t.LEQUAL,[nM]:t.EQUAL,[wp]:t.GEQUAL,[iM]:t.GREATER,[rM]:t.NOTEQUAL};function qe(R,x){if(x.type===vr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===uf||x.magFilter===zl||x.magFilter===Ds||x.minFilter===Tn||x.minFilter===uf||x.minFilter===zl||x.minFilter===Ds)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ce[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ae[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fn||x.minFilter!==zl&&x.minFilter!==Ds||x.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const oe=X(x);if(oe!==R.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[oe].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&b(x)),R.__cacheKey=oe,R.__webglTexture=Q[oe].texture}return B}function K(R,x,B){return Math.floor(Math.floor(R/B)/x)}function ne(R,x,B,q){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{oe.sort((Le,me)=>Le.start-me.start);let fe=0;for(let Le=1;Le<oe.length;Le++){const me=oe[fe],pe=oe[Le],Be=me.start+me.count,Ve=K(pe.start,x.width,4),Qe=K(me.start,x.width,4);pe.start<=Be+1&&Ve===Qe&&K(pe.start+pe.count-1,x.width,4)===Ve?me.count=Math.max(me.count,pe.start+pe.count-me.start):(++fe,oe[fe]=pe)}oe.length=fe+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Le=0,me=oe.length;Le<me;Le++){const pe=oe[Le],Be=Math.floor(pe.start/4),Ve=Math.ceil(pe.count/4),Qe=Be%x.width,N=Math.floor(Be/x.width),he=Ve,ee=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Qe,N,he,ee,B,q,x.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function xe(R,x,B){let q=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=t.TEXTURE_3D);const Q=Xe(R,x),oe=x.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+B);const fe=i.get(oe);if(oe.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=St.getPrimaries(St.workingColorSpace),ue=x.colorSpace===ss?null:St.getPrimaries(x.colorSpace),Ee=x.colorSpace===ss||ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=m(x.image,!1,r.maxTextureSize);ie=on(x,ie);const de=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let me=S(x.internalFormat,de,Le,x.normalized,x.colorSpace,x.isVideoTexture);qe(q,x);let pe;const Be=x.mipmaps,Ve=x.isVideoTexture!==!0,Qe=fe.__version===void 0||Q===!0,N=oe.dataReady,he=w(x,ie);if(x.isDepthTexture)me=T(x.format===Ns,x.type),Qe&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,de,Le,null));else if(x.isDataTexture)if(Be.length>0){Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,he,me,Be[0].width,Be[0].height);for(let ee=0,ue=Be.length;ee<ue;ee++)pe=Be[ee],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,de,Le,pe.data):n.texImage2D(t.TEXTURE_2D,ee,me,pe.width,pe.height,0,de,Le,pe.data);x.generateMipmaps=!1}else Ve?(Qe&&n.texStorage2D(t.TEXTURE_2D,he,me,ie.width,ie.height),N&&ne(x,ie,de,Le)):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,de,Le,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,Be[0].width,Be[0].height,ie.depth);for(let ee=0,ue=Be.length;ee<ue;ee++)if(pe=Be[ee],x.format!==er)if(de!==null)if(Ve){if(N)if(x.layerUpdates.size>0){const Ee=Dg(pe.width,pe.height,x.format,x.type);for(const se of x.layerUpdates){const ke=pe.data.subarray(se*Ee/pe.data.BYTES_PER_ELEMENT,(se+1)*Ee/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,se,pe.width,pe.height,1,de,ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ie.depth,de,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ie.depth,0,pe.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ie.depth,de,Le,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,me,pe.width,pe.height,ie.depth,0,de,Le,pe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ve&&Qe&&n.texStorage2D(t.TEXTURE_2D,he,me,Be[0].width,Be[0].height);for(let ee=0,ue=Be.length;ee<ue;ee++)pe=Be[ee],x.format!==er?de!==null?Ve?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,de,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,me,pe.width,pe.height,0,pe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,de,Le,pe.data):n.texImage2D(t.TEXTURE_2D,ee,me,pe.width,pe.height,0,de,Le,pe.data)}else if(x.isDataArrayTexture)if(Ve){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,me,ie.width,ie.height,ie.depth),N)if(x.layerUpdates.size>0){const ee=Dg(ie.width,ie.height,x.format,x.type);for(const ue of x.layerUpdates){const Ee=ie.data.subarray(ue*ee/ie.data.BYTES_PER_ELEMENT,(ue+1)*ee/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,ie.width,ie.height,1,de,Le,Ee)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(x.isData3DTexture)Ve?(Qe&&n.texStorage3D(t.TEXTURE_3D,he,me,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(x.isFramebufferTexture){if(Qe)if(Ve)n.texStorage2D(t.TEXTURE_2D,he,me,ie.width,ie.height);else{let ee=ie.width,ue=ie.height;for(let Ee=0;Ee<he;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,me,ee,ue,0,de,Le,null),ee>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ee=t.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ie.parentNode!==ee){ee.appendChild(ie),h.add(x),ee.onpaint=ue=>{const Ee=ue.changedElements;for(const se of h)Ee.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Ee=t.RGBA,se=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ee,se,ke,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ve&&Qe){const ee=ht(Be[0]);n.texStorage2D(t.TEXTURE_2D,he,me,ee.width,ee.height)}for(let ee=0,ue=Be.length;ee<ue;ee++)pe=Be[ee],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,de,Le,pe):n.texImage2D(t.TEXTURE_2D,ee,me,de,Le,pe);x.generateMipmaps=!1}else if(Ve){if(Qe){const ee=ht(ie);n.texStorage2D(t.TEXTURE_2D,he,me,ee.width,ee.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Le,ie)}else n.texImage2D(t.TEXTURE_2D,0,me,de,Le,ie);f(x)&&_(q),fe.__version=oe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Te(R,x,B){if(x.image.length!==6)return;const q=Xe(R,x),Q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const oe=i.get(Q);if(Q.version!==oe.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const fe=St.getPrimaries(St.workingColorSpace),j=x.colorSpace===ss?null:St.getPrimaries(x.colorSpace),ie=x.colorSpace===ss||fe===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,me=[];for(let se=0;se<6;se++)!de&&!Le?me[se]=m(x.image[se],!0,r.maxCubemapSize):me[se]=Le?x.image[se].image:x.image[se],me[se]=on(x,me[se]);const pe=me[0],Be=s.convert(x.format,x.colorSpace),Ve=s.convert(x.type),Qe=S(x.internalFormat,Be,Ve,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,he=oe.__version===void 0||q===!0,ee=Q.dataReady;let ue=w(x,pe);qe(t.TEXTURE_CUBE_MAP,x);let Ee;if(de){N&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Qe,pe.width,pe.height);for(let se=0;se<6;se++){Ee=me[se].mipmaps;for(let ke=0;ke<Ee.length;ke++){const Fe=Ee[ke];x.format!==er?Be!==null?N?ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Fe.width,Fe.height,Be,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Qe,Fe.width,Fe.height,0,Fe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Fe.width,Fe.height,Be,Ve,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Qe,Fe.width,Fe.height,0,Be,Ve,Fe.data)}}}else{if(Ee=x.mipmaps,N&&he){Ee.length>0&&ue++;const se=ht(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(Le){N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me[se].width,me[se].height,Be,Ve,me[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,me[se].width,me[se].height,0,Be,Ve,me[se].data);for(let ke=0;ke<Ee.length;ke++){const Tt=Ee[ke].image[se].image;N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Tt.width,Tt.height,Be,Ve,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Qe,Tt.width,Tt.height,0,Be,Ve,Tt.data)}}else{N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Ve,me[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Be,Ve,me[se]);for(let ke=0;ke<Ee.length;ke++){const Fe=Ee[ke];N?ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Be,Ve,Fe.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Qe,Be,Ve,Fe.image[se])}}}f(x)&&_(t.TEXTURE_CUBE_MAP),oe.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ge(R,x,B,q,Q,oe){const fe=s.convert(B.format,B.colorSpace),j=s.convert(B.type),ie=S(B.internalFormat,fe,j,B.normalized,B.colorSpace),de=i.get(x),Le=i.get(B);if(Le.__renderTarget=x,!de.__hasExternalTextures){const me=Math.max(1,x.width>>oe),pe=Math.max(1,x.height>>oe);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,oe,ie,me,pe,x.depth,0,fe,j,null):n.texImage2D(Q,oe,ie,me,pe,0,fe,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Nt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Le.__webglTexture,0,Zt(x)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Le.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(R,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const q=x.depthTexture,Q=q&&q.isDepthTexture?q.type:null,oe=T(x.stencilBuffer,Q),fe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Nt(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Zt(x),oe,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Zt(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=x.textures;for(let Q=0;Q<q.length;Q++){const oe=q[Q],fe=s.convert(oe.format,oe.colorSpace),j=s.convert(oe.type),ie=S(oe.internalFormat,fe,j,oe.normalized,oe.colorSpace);Nt(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Zt(x),ie,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Zt(x),ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function sn(R,x,B){const q=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(t.TEXTURE_CUBE_MAP,x.depthTexture);const de=s.convert(x.depthTexture.format),Le=s.convert(x.depthTexture.type);let me;x.depthTexture.format===Xr?me=t.DEPTH_COMPONENT24:x.depthTexture.format===Ns&&(me=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,me,x.width,x.height,0,de,Le,null)}}else O(x.depthTexture,0);const oe=Q.__webglTexture,fe=Zt(x),j=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ie=x.depthTexture.format===Ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xr)Nt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,j,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,j,oe,0);else if(x.depthTexture.format===Ns)Nt(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,j,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,j,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(R){const x=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)sn(x.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?sn(x.__webglFramebuffer[0],R,0):sn(x.__webglFramebuffer,R,0)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=t.createRenderbuffer(),it(x.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),it(x.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(R,x,B){const q=i.get(R);x!==void 0&&ge(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ze(R)}function Ht(R){const x=R.texture,B=i.get(R),q=i.get(x);R.addEventListener("dispose",v);const Q=R.textures,oe=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=x.version,o.memory.textures++),oe){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let ie=0;ie<x.mipmaps.length;ie++)B.__webglFramebuffer[j][ie]=t.createFramebuffer()}else B.__webglFramebuffer[j]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[j]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(fe)for(let j=0,ie=Q.length;j<ie;j++){const de=i.get(Q[j]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Nt(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const ie=Q[j];B.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[j]);const de=s.convert(ie.format,ie.colorSpace),Le=s.convert(ie.type),me=S(ie.internalFormat,de,Le,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),pe=Zt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,B.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),it(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),qe(t.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ge(B.__webglFramebuffer[j][ie],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else ge(B.__webglFramebuffer[j],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(x)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let j=0,ie=Q.length;j<ie;j++){const de=Q[j],Le=i.get(de);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Le.__webglTexture),qe(me,de),ge(B.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+j,me,0),f(de)&&_(me)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,q.__webglTexture),qe(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)ge(B.__webglFramebuffer[ie],R,x,t.COLOR_ATTACHMENT0,j,ie);else ge(B.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,j,0);f(x)&&_(j),n.unbindTexture()}R.depthBuffer&&Ze(R)}function ot(R){const x=R.textures;for(let B=0,q=x.length;B<q;B++){const Q=x[B];if(f(Q)){const oe=M(R),fe=i.get(Q).__webglTexture;n.bindTexture(oe,fe),_(oe),n.unbindTexture()}}}const It=[],jt=[];function bn(R){if(R.samples>0){if(Nt(R)===!1){const x=R.textures,B=R.width,q=R.height;let Q=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),j=x.length>1;if(j)for(let de=0;de<x.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<x.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(x[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,Q,t.NEAREST),l===!0&&(It.length=0,jt.length=0,It.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(It.push(oe),jt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,jt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<x.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(x[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Zt(R){return Math.min(r.maxSamples,R.samples)}function Nt(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(R){const x=o.render.frame;d.get(R)!==x&&(d.set(R,x),R.update())}function on(R,x){const B=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==su&&B!==ss&&(St.getTransfer(B)===kt?(q!==er||Q!==Oi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",B)),x}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=mt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ZA(t,e){function n(i,r=ss){let s;const o=St.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===xp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Av)return t.BYTE;if(i===Cv)return t.SHORT;if(i===rl)return t.UNSIGNED_SHORT;if(i===vp)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===vr)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===Pv)return t.ALPHA;if(i===Lv)return t.RGB;if(i===er)return t.RGBA;if(i===Xr)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Dv)return t.RED;if(i===yp)return t.RED_INTEGER;if(i===Ws)return t.RG;if(i===Mp)return t.RG_INTEGER;if(i===Ep)return t.RGBA_INTEGER;if(i===Ac||i===Cc||i===Rc||i===bc)if(o===kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wd||i===Xd||i===Yd||i===qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$d||i===Kd||i===Zd||i===Qd||i===Jd||i===iu||i===jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$d||i===Kd)return o===kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qd)return s.COMPRESSED_R11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===iu)return s.COMPRESSED_RG11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ph||i===mh||i===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ph)return o===kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===vh||i===ru||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_h)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Hv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wn({vertexShader:QA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wr(new Pu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",m=new jA,f={},_=n.getContextAttributes();let M=null,S=null;const T=[],w=[],A=new st;let v=null,C=null;const b=new Fi;b.viewport=new mn;const P=new Fi;P.viewport=new mn;const F=[b,P],H=new sE;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=T[K];return ne===void 0&&(ne=new vf,T[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=T[K];return ne===void 0&&(ne=new vf,T[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=T[K];return ne===void 0&&(ne=new vf,T[K]=ne),ne.getHandSpace()};function Z(K){const ne=w.indexOf(K.inputSource);if(ne===-1)return;const xe=T[ne];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",O);for(let K=0;K<T.length;K++){const ne=w[K];ne!==null&&(w[K]=null,T[K].disconnect(ne))}D=null,k=null,m.reset();for(const K in f)delete f[K];if(e.setRenderTarget(M),p=null,u=null,h=null,r=null,S=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),C!==null){const K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,ge=null;_.depth&&(ge=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=_.stencil?Ns:Xr,Te=_.stencil?sl:Tr);const it={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(it),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ni(u.textureWidth,u.textureHeight,{format:er,type:Oi,depthTexture:new al(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ni(p.framebufferWidth,p.framebufferHeight,{format:er,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let ne=0;ne<K.removed.length;ne++){const xe=K.removed[ne],Te=w.indexOf(xe);Te>=0&&(w[Te]=null,T[Te].disconnect(xe))}for(let ne=0;ne<K.added.length;ne++){const xe=K.added[ne];let Te=w.indexOf(xe);if(Te===-1){for(let it=0;it<T.length;it++)if(it>=w.length){w.push(xe),Te=it;break}else if(w[it]===null){w[it]=xe,Te=it;break}if(Te===-1)break}const ge=T[Te];ge&&ge.connect(xe)}}const U=new z,W=new z;function Y(K,ne,xe){U.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(xe.matrixWorld);const Te=U.distanceTo(W),ge=ne.projectionMatrix.elements,it=xe.projectionMatrix.elements,sn=ge[14]/(ge[10]-1),Ze=ge[14]/(ge[10]+1),mt=(ge[9]+1)/ge[5],Ht=(ge[9]-1)/ge[5],ot=(ge[8]-1)/ge[0],It=(it[8]+1)/it[0],jt=sn*ot,bn=sn*It,Zt=Te/(-ot+It),Nt=Zt*-ot;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(Zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const I=sn+Zt,on=Ze+Zt,ht=jt-Nt,R=bn+(Te-Nt),x=mt*Ze/on*I,B=Ht*Ze/on*I;K.projectionMatrix.makePerspective(ht,R,x,B,I,on),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,xe=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),H.near=P.near=b.near=ne,H.far=P.far=b.far=xe,(D!==H.near||k!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,k=H.far),H.layers.mask=K.layers.mask|6,b.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;const Te=K.parent,ge=H.cameras;ce(H,Te);for(let it=0;it<ge.length;it++)ce(ge[it],Te);ge.length===2?Y(H,b,P):H.projectionMatrix.copy(b.projectionMatrix),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),Ae(K,H,Te)};function Ae(K,ne,xe){xe===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ol*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(K){return f[K]};let nt=null;function qe(K,ne){if(d=ne.getViewerPose(c||o),g=ne,d!==null){const xe=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Te=!1;xe.length!==H.cameras.length&&(H.cameras.length=0,Te=!0);for(let Ze=0;Ze<xe.length;Ze++){const mt=xe[Ze];let Ht=null;if(p!==null)Ht=p.getViewport(mt);else{const It=h.getViewSubImage(u,mt);Ht=It.viewport,Ze===0&&(e.setRenderTargetTextures(S,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(S))}let ot=F[Ze];ot===void 0&&(ot=new Fi,ot.layers.enable(Ze),ot.viewport=new mn,F[Ze]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Ze===0&&(H.matrix.copy(ot.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Te===!0&&H.cameras.push(ot)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ze=h.getDepthInformation(xe[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,r.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ze=0;Ze<xe.length;Ze++){const mt=xe[Ze].camera;if(mt){let Ht=f[mt];Ht||(Ht=new Hv,f[mt]=Ht);const ot=h.getCameraImage(mt);Ht.sourceTexture=ot}}}}for(let xe=0;xe<T.length;xe++){const Te=w[xe],ge=T[xe];Te!==null&&ge!==void 0&&ge.update(Te,ne,c||o)}nt&&nt(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Xe=new Wv;Xe.setAnimationLoop(qe),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}}const tC=new gn,Qv=new tt;Qv.set(-1,0,0,0,1,0,0,0,1);function nC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mi&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mi&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),M=_.envMap,S=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qv),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mi&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function c(S,T){let w=r[S.id];w===void 0&&(m(S),w=d(S),r[S.id]=w,S.addEventListener("dispose",_));const A=T.program;i.updateUBOMapping(S,A);const v=e.render.frame;s[S.id]!==v&&(u(S),s[S.id]=v)}function d(S){const T=h();S.__bindingPointIndex=T;const w=t.createBuffer(),A=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const T=r[S.id],w=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,C=w.length;v<C;v++){const b=w[v];if(Array.isArray(b))for(let P=0,F=b.length;P<F;P++)p(b[P],v,P,A);else p(b,v,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,w,A){if(y(S,T,w,A)===!0){const v=S.__offset,C=S.value;if(Array.isArray(C)){let b=0;for(let P=0;P<C.length;P++){const F=C[P],H=f(F);g(F,S.__data,b),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(b+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function g(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function y(S,T,w,A){const v=S.value,C=T+"_"+w;if(A[C]===void 0)return typeof v=="number"||typeof v=="boolean"?A[C]=v:ArrayBuffer.isView(v)?A[C]=v.slice():A[C]=v.clone(),!0;{const b=A[C];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return A[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function m(S){const T=S.uniforms;let w=0;const A=16;for(let C=0,b=T.length;C<b;C++){const P=Array.isArray(T[C])?T[C]:[T[C]];for(let F=0,H=P.length;F<H;F++){const D=P[F],k=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,X=k.length;Z<X;Z++){const O=k[Z],U=f(O),W=w%A,Y=W%U.boundary,ce=W+Y;w+=Y,ce!==0&&A-ce<U.storage&&(w+=A-ce),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=U.storage}}}const v=w%A;return v>0&&(w+=A-v),S.__size=w,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",S),T}function _(S){const T=S.target;T.removeEventListener("dispose",_);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}const rC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dr=null;function sC(){return dr===null&&(dr=new $M(rC,16,16,Ws,gi),dr.name="DFG_LUT",dr.minFilter=Tn,dr.magFilter=Tn,dr.wrapS=Br,dr.wrapT=Br,dr.generateMipmaps=!1,dr.needsUpdate=!0),dr}class oC{constructor(e={}){const{canvas:n=lM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Oi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,m=new Set([Ep,Mp,yp]),f=new Set([Oi,Tr,rl,sl,xp,Sp]),_=new Uint32Array(4),M=new Int32Array(4),S=new z;let T=null,w=null;const A=[],v=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,F=null,H=null,D=null,k=null;this._outputColorSpace=Ni;let Z=0,X=0,O=null,U=-1,W=null;const Y=new mn,ce=new mn;let Ae=null;const nt=new we(0);let qe=0,Xe=n.width,K=n.height,ne=1,xe=null,Te=null;const ge=new mn(0,0,Xe,K),it=new mn(0,0,Xe,K);let sn=!1;const Ze=new kv;let mt=!1,Ht=!1;const ot=new gn,It=new z,jt=new mn,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Nt(){return O===null?ne:1}let I=i;function on(E,L){return n.getContext(E,L)}let ht,R,x,B,q,Q,oe,fe,j,ie,de,Le,me,pe,Be,Ve,Qe,N,he,ee,ue,Ee,se;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",oi,!1),I===null){const L="webgl2";if(I=on(L,E),I===null)throw on(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",oi,!1),Pt("WebGLRenderer: "+E.message),E}function ke(){ht=new sw(I),ht.init(),ue=new ZA(I,ht),R=new KT(I,ht,e,ue),x=new $A(I,ht),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),H=I.createFramebuffer(),D=I.createFramebuffer(),k=I.createFramebuffer(),B=new lw(I),q=new IA,Q=new KA(I,ht,x,q,R,ue,B),oe=new rw(b),fe=new uE(I),Ee=new qT(I,fe),j=new ow(I,fe,B,Ee),ie=new uw(I,j,fe,Ee,B),N=new cw(I,R,Q),Be=new ZT(q),de=new NA(b,oe,ht,R,Ee,Be),Le=new nC(b,q),me=new FA,pe=new VA(ht),Qe=new YT(b,oe,x,ie,g,l),Ve=new qA(b,ie,R),se=new iC(I,B,R,x),he=new $T(I,ht,B),ee=new aw(I,ht,B),B.programs=de.programs,b.capabilities=R,b.extensions=ht,b.properties=q,b.renderLists=me,b.shadowMap=Ve,b.state=x,b.info=B}y!==Oi&&(C=new dw(y,n.width,n.height,a,r,s));const Fe=new eC(b,I);this.xr=Fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(Xe,K,!1))},this.getSize=function(E){return E.set(Xe,K)},this.setSize=function(E,L,$=!0){if(Fe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=E,K=L,n.width=Math.floor(E*ne),n.height=Math.floor(L*ne),$===!0&&(n.style.width=E+"px",n.style.height=L+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Xe*ne,K*ne).floor()},this.setDrawingBufferSize=function(E,L,$){Xe=E,K=L,ne=$,n.width=Math.floor(E*$),n.height=Math.floor(L*$),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(y===Oi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Y)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,L,$,G){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,L,$,G),x.viewport(Y.copy(ge).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(it)},this.setScissor=function(E,L,$,G){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,L,$,G),x.scissor(ce.copy(it).multiplyScalar(ne).round())},this.getScissorTest=function(){return sn},this.setScissorTest=function(E){x.setScissorTest(sn=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,$=!0){let G=0;if(E){let V=!1;if(O!==null){const _e=O.texture.format;V=m.has(_e)}if(V){const _e=O.texture.type,Ce=f.has(_e),ve=Qe.getClearColor(),De=Qe.getClearAlpha(),Ie=ve.r,at=ve.g,je=ve.b;Ce?(_[0]=Ie,_[1]=at,_[2]=je,_[3]=De,I.clearBufferuiv(I.COLOR,0,_)):(M[0]=Ie,M[1]=at,M[2]=je,M[3]=De,I.clearBufferiv(I.COLOR,0,M))}else G|=I.COLOR_BUFFER_BIT}L&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",oi,!1),Qe.dispose(),me.dispose(),pe.dispose(),q.dispose(),oe.dispose(),ie.dispose(),Ee.dispose(),se.dispose(),de.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",vl),Fe.removeEventListener("sessionend",qn),sr.stop()};function Tt(E){E.preventDefault(),sg("WebGLRenderer: Context Lost."),P=!0}function yt(){sg("WebGLRenderer: Context Restored."),P=!1;const E=B.autoReset,L=Ve.enabled,$=Ve.autoUpdate,G=Ve.needsUpdate,V=Ve.type;ke(),B.autoReset=E,Ve.enabled=L,Ve.autoUpdate=$,Ve.needsUpdate=G,Ve.type=V}function oi(E){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _i(E){const L=E.target;L.removeEventListener("dispose",_i),Nu(L)}function Nu(E){ea(E),q.remove(E)}function ea(E){const L=q.get(E).programs;L!==void 0&&(L.forEach(function($){de.releaseProgram($)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,$,G,V,_e){L===null&&(L=bn);const Ce=V.isMesh&&V.matrixWorld.determinantAffine()<0,ve=yl(E,L,$,G,V);x.setMaterial(G,Ce);let De=$.index,Ie=1;if(G.wireframe===!0){if(De=j.getWireframeAttribute($),De===void 0)return;Ie=2}const at=$.drawRange,je=$.attributes.position;let Re=at.start*Ie,Ct=(at.start+at.count)*Ie;_e!==null&&(Re=Math.max(Re,_e.start*Ie),Ct=Math.min(Ct,(_e.start+_e.count)*Ie)),De!==null?(Re=Math.max(Re,0),Ct=Math.min(Ct,De.count)):je!=null&&(Re=Math.max(Re,0),Ct=Math.min(Ct,je.count));const wt=Ct-Re;if(wt<0||wt===1/0)return;Ee.setup(V,G,ve,$,De);let gt,Mt=he;if(De!==null&&(gt=fe.get(De),Mt=ee,Mt.setIndex(gt)),V.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Nt()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(V.isLine){let _n=G.linewidth;_n===void 0&&(_n=1),x.setLineWidth(_n*Nt()),V.isLineSegments?Mt.setMode(I.LINES):V.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else V.isPoints?Mt.setMode(I.POINTS):V.isSprite&&Mt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const _n=V._multiDrawStarts,Me=V._multiDrawCounts,ln=V._multiDrawCount,ct=De?fe.get(De).bytesPerElement:1,Sn=q.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<ln;Pn++)Sn.setValue(I,"_gl_DrawID",Pn),Mt.render(_n[Pn]/ct,Me[Pn])}else if(V.isInstancedMesh)Mt.renderInstances(Re,wt,V.count);else if($.isInstancedBufferGeometry){const _n=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,_n);Mt.renderInstances(Re,wt,Me)}else Mt.render(Re,wt)};function _l(E,L,$,G){F!==null&&E.isNodeMaterial&&F.setObject(G,E),mt===!0&&Be.setState(E,$,!1),E.transparent===!0&&E.side===Ur&&E.forceSinglePass===!1?(E.side=mi,E.needsUpdate=!0,Qs(E,L,G),E.side=Vs,E.needsUpdate=!0,Qs(E,L,G),E.side=Ur):Qs(E,L,G)}this.compile=function(E,L,$=null){$===null&&($=E),F!==null&&F.renderStart(E,L,$),w=pe.get($),w.init(L),v.push(w),$.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==$&&E.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Ht=this.localClippingEnabled,mt=Be.init(this.clippingPlanes,Ht),mt===!0&&Be.setGlobalState(this.clippingPlanes,L),F!==null&&Ve.render(w.state.shadowsArray,$,L);const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const ve=_e[Ce];_l(ve,$,L,V),G.add(ve)}else _l(_e,$,L,V),G.add(_e)}),w=v.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(E,L,$=null){const G=this.compile(E,L,$);return new Promise(V=>{function _e(){if(G.forEach(function(Ce){const De=q.get(Ce).currentProgram;(De===void 0||De.isReady())&&G.delete(Ce)}),G.size===0){V(E);return}setTimeout(_e,10)}ht.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let rr=null;function ta(E){rr&&rr(E)}function vl(){sr.stop()}function qn(){sr.start()}const sr=new Wv;sr.setAnimationLoop(ta),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(E){rr=E,Fe.setAnimationLoop(E),E===null?sr.stop():sr.start()},Fe.addEventListener("sessionstart",vl),Fe.addEventListener("sessionend",qn),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(E,L);const $=Fe.enabled===!0&&Fe.isPresenting===!0,G=C!==null&&(O===null||$)&&C.begin(b,O);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(L),L=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,L,O),w=pe.get(E,v.length),w.init(L),w.state.textureUnits=Q.getTextureUnits(),v.push(w),ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ze.setFromProjectionMatrix(ot,xr,L.reversedDepth),Ht=this.localClippingEnabled,mt=Be.init(this.clippingPlanes,Ht),T=me.get(E,A.length),T.init(),A.push(T),Fe.enabled===!0&&Fe.isPresenting===!0){const Ce=b.xr.getDepthSensingMesh();Ce!==null&&Ks(Ce,L,-1/0,b.sortObjects)}Ks(E,L,0,b.sortObjects),T.finish(),F!==null&&F.updateLights(w.state.lightsArray),b.sortObjects===!0&&T.sort(xe,Te),Zt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Zt&&Qe.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Be.beginShadows();const V=w.state.shadowsArray;if(Ve.render(V,E,L),mt===!0&&Be.endShadows(),(G&&C.hasRenderPass())===!1){const Ce=T.opaque,ve=T.transmissive;if(w.setupLights(),L.isArrayCamera){const De=L.cameras;if(ve.length>0)for(let Ie=0,at=De.length;Ie<at;Ie++){const je=De[Ie];Zs(Ce,ve,E,je)}Zt&&Qe.render(E);for(let Ie=0,at=De.length;Ie<at;Ie++){const je=De[Ie];xl(T,E,je,je.viewport)}}else ve.length>0&&Zs(Ce,ve,E,L),Zt&&Qe.render(E),xl(T,E,L)}O!==null&&X===0&&(Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O)),G&&C.end(b),E.isScene===!0&&E.onAfterRender(b,E,L),Ee.resetDefaultState(),U=-1,W=null,v.pop(),v.length>0?(w=v[v.length-1],Q.setTextureUnits(w.state.textureUnits),mt===!0&&Be.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,F!==null&&F.renderEnd()};function Ks(E,L,$,G){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ze)){G&&jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);const Ce=ie.update(E),ve=E.material;ve.visible&&T.push(E,Ce,ve,$,jt.z,null,L)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ze))){const Ce=ie.update(E),ve=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),jt.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),jt.copy(Ce.boundingSphere.center)),jt.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(ve)){const De=Ce.groups;for(let Ie=0,at=De.length;Ie<at;Ie++){const je=De[Ie],Re=ve[je.materialIndex];Re&&Re.visible&&T.push(E,Ce,Re,$,jt.z,je,L)}}else ve.visible&&T.push(E,Ce,ve,$,jt.z,null,L)}}const _e=E.children;for(let Ce=0,ve=_e.length;Ce<ve;Ce++)Ks(_e[Ce],L,$,G)}function xl(E,L,$,G){const{opaque:V,transmissive:_e,transparent:Ce}=E;w.setupLightsView($),mt===!0&&Be.setGlobalState(b.clippingPlanes,$),G&&x.viewport(Y.copy(G)),V.length>0&&Vi(V,L,$),_e.length>0&&Vi(_e,L,$),Ce.length>0&&Vi(Ce,L,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Zs(E,L,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Re=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new ni(1,1,{generateMipmaps:!0,type:Re?gi:Oi,minFilter:Ds,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:St.workingColorSpace})}const _e=w.state.transmissionRenderTarget[G.id],Ce=G.viewport||Y;_e.setSize(Ce.z*b.transmissionResolutionScale,Ce.w*b.transmissionResolutionScale);const ve=b.getRenderTarget(),De=b.getActiveCubeFace(),Ie=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(nt),qe=b.getClearAlpha(),qe<1&&b.setClearColor(16777215,.5),b.clear(),Zt&&Qe.render($);const at=b.toneMapping;b.toneMapping=Er;const je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),mt===!0&&Be.setGlobalState(b.clippingPlanes,G),Vi(E,$,G),Q.updateMultisampleRenderTarget(_e),Q.updateRenderTargetMipmap(_e),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ct=0,wt=L.length;Ct<wt;Ct++){const gt=L[Ct],{object:Mt,geometry:_n,material:Me,group:ln}=gt;if(Me.side===Ur&&Mt.layers.test(G.layers)){const ct=Me.side;Me.side=mi,Me.needsUpdate=!0,na(Mt,$,G,_n,Me,ln),Me.side=ct,Me.needsUpdate=!0,Re=!0}}Re===!0&&(Q.updateMultisampleRenderTarget(_e),Q.updateRenderTargetMipmap(_e))}b.setRenderTarget(ve,De,Ie),b.setClearColor(nt,qe),je!==void 0&&(G.viewport=je),b.toneMapping=at}function Vi(E,L,$){const G=L.isScene===!0?L.overrideMaterial:null;for(let V=0,_e=E.length;V<_e;V++){const Ce=E[V],{object:ve,geometry:De,group:Ie}=Ce;let at=Ce.material;at.allowOverride===!0&&G!==null&&(at=G),ve.layers.test($.layers)&&na(ve,L,$,De,at,Ie)}}function na(E,L,$,G,V,_e){F!==null&&V.isNodeMaterial&&F.setObject(E,V),E.onBeforeRender(b,L,$,G,V,_e),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,L,$,G,E,_e),V.transparent===!0&&V.side===Ur&&V.forceSinglePass===!1?(V.side=mi,V.needsUpdate=!0,b.renderBufferDirect($,L,G,V,E,_e),V.side=Vs,V.needsUpdate=!0,b.renderBufferDirect($,L,G,V,E,_e),V.side=Ur):b.renderBufferDirect($,L,G,V,E,_e),E.onAfterRender(b,L,$,G,V,_e)}function Qs(E,L,$){L.isScene!==!0&&(L=bn);const G=q.get(E),V=w.state.lights,_e=w.state.shadowsArray,Ce=V.state.version,ve=de.getParameters(E,V.state,_e,L,$,w.state.lightProbeGridArray),De=de.getProgramCacheKey(ve);let Ie=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const at=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=oe.get(E.envMap||G.environment,at),G.envMapRotation=G.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",_i),Ie=new Map,G.programs=Ie);let je=Ie.get(De);if(je!==void 0){if(G.currentProgram===je&&G.lightsStateVersion===Ce)return Sl(E,ve),je}else ve.uniforms=de.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,$,ve),E.onBeforeCompile(ve,b),je=de.acquireProgram(ve,De),Ie.set(De,je),G.uniforms=ve.uniforms;const Re=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Be.uniform),Sl(E,ve),G.needsLights=Gi(E),G.lightsStateVersion=Ce,G.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.sunLights.value=V.state.sun,Re.sunLightShadows.value=V.state.sunShadow,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.sunShadowMatrix.value=V.state.sunShadowMatrix,Re.sunShadowCascade.value=V.state.sunShadowCascade,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=je,G.uniformsList=null,je}function ia(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=Lc.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Sl(E,L){const $=q.get(E);$.outputColorSpace=L.outputColorSpace,$.batching=L.batching,$.batchingColor=L.batchingColor,$.instancing=L.instancing,$.instancingColor=L.instancingColor,$.instancingMorph=L.instancingMorph,$.skinning=L.skinning,$.morphTargets=L.morphTargets,$.morphNormals=L.morphNormals,$.morphColors=L.morphColors,$.morphTargetsCount=L.morphTargetsCount,$.numClippingPlanes=L.numClippingPlanes,$.numIntersection=L.numClipIntersection,$.vertexAlphas=L.vertexAlphas,$.vertexTangents=L.vertexTangents,$.toneMapping=L.toneMapping}function ra(E,L){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let $=0,G=E.length;$<G;$++){const V=E[$];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function yl(E,L,$,G,V){L.isScene!==!0&&(L=bn),Q.resetTextureUnits();const _e=L.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,ve=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:St.workingColorSpace,De=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ie=oe.get(G.envMap||Ce,De),at=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,je=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!$.morphAttributes.position,Ct=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let gt=Er;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(gt=b.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_n=Mt!==void 0?Mt.length:0,Me=q.get(G),ln=w.state.lights;if(mt===!0&&(Ht===!0||E!==W)){const Ut=E===W&&G.id===U;Be.setState(G,E,Ut)}let ct=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==ln.state.version||Me.outputColorSpace!==ve||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==Ie||G.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Be.numPlanes||Me.numIntersection!==Be.numIntersection)||Me.vertexAlphas!==at||Me.vertexTangents!==je||Me.morphTargets!==Re||Me.morphNormals!==Ct||Me.morphColors!==wt||Me.toneMapping!==gt||Me.morphTargetsCount!==_n||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Me.__version=G.version);let Sn=Me.currentProgram;ct===!0&&(Sn=Qs(G,L,V),F&&G.isNodeMaterial&&F.onUpdateProgram(G,Sn,Me));let Pn=!1,ai=!1,or=!1;const Rt=Sn.getUniforms(),en=Me.uniforms;if(x.useProgram(Sn.program)&&(Pn=!0,ai=!0,or=!0),G.id!==U&&(U=G.id,ai=!0),Me.needsLights){const Ut=ra(w.state.lightProbeGridArray,V);Me.lightProbeGrid!==Ut&&(Me.lightProbeGrid=Ut,ai=!0)}if(Pn||W!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Rt.setValue(I,"projectionMatrix",E.projectionMatrix),Rt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Li=Rt.map.cameraPosition;Li!==void 0&&Li.setValue(I,It.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,ai=!0,or=!0)}if(Me.needsLights&&(ln.state.sunShadowMap.length>0&&Rt.setValue(I,"sunShadowMap",ln.state.sunShadowMap,Q),ln.state.directionalShadowMap.length>0&&Rt.setValue(I,"directionalShadowMap",ln.state.directionalShadowMap,Q),ln.state.spotShadowMap.length>0&&Rt.setValue(I,"spotShadowMap",ln.state.spotShadowMap,Q),ln.state.pointShadowMap.length>0&&Rt.setValue(I,"pointShadowMap",ln.state.pointShadowMap,Q)),V.isSkinnedMesh){Rt.setOptional(I,V,"bindMatrix"),Rt.setOptional(I,V,"bindMatrixInverse");const Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Rt.setValue(I,"boneTexture",Ut.boneTexture,Q))}V.isBatchedMesh&&(Rt.setOptional(I,V,"batchingTexture"),Rt.setValue(I,"batchingTexture",V._matricesTexture,Q),Rt.setOptional(I,V,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",V._indirectTexture,Q),Rt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",V._colorsTexture,Q));const Pi=$.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&N.update(V,$,Sn),(ai||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,Rt.setValue(I,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(en.envMapIntensity.value=L.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=sC()),ai){if(Rt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&sa(en,or),_e&&G.fog===!0&&Le.refreshFogUniforms(en,_e),Le.refreshMaterialUniforms(en,G,ne,K,w.state.transmissionRenderTarget[E.id]),Me.needsLights&&Me.lightProbeGrid){const Ut=Me.lightProbeGrid;en.probesSH.value=Ut.texture,en.probesMin.value.copy(Ut.boundingBox.min),en.probesMax.value.copy(Ut.boundingBox.max),en.probesResolution.value.copy(Ut.resolution)}Lc.upload(I,ia(Me),en,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Lc.upload(I,ia(Me),en,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(I,"center",V.center),Rt.setValue(I,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(I,"normalMatrix",V.normalMatrix),Rt.setValue(I,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const Ut=G.uniformsGroups;for(let Li=0,yn=Ut.length;Li<yn;Li++){const vi=Ut[Li];se.update(vi,Sn),se.bind(vi,Sn)}}return Sn}function sa(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Gi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,L,$){const G=q.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=L,q.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){const $=q.get(E);$.__webglFramebuffer=L,$.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,$=0){O=E,Z=L,X=$;let G=null,V=!1,_e=!1;if(E){const ve=q.get(E);if(ve.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,ve.__webglFramebuffer),Y.copy(E.viewport),ce.copy(E.scissor),Ae=E.scissorTest,x.viewport(Y),x.scissor(ce),x.setScissorTest(Ae),U=-1;return}else if(ve.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(ve.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const at=E.depthTexture;if(ve.__boundDepthTexture!==at){if(at!==null&&q.has(at)&&(E.width!==at.image.width||E.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);const Ie=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[L])?G=Ie[L][$]:G=Ie[L],V=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?G=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[$]:G=Ie,Y.copy(E.viewport),ce.copy(E.scissor),Ae=E.scissorTest}else Y.copy(ge).multiplyScalar(ne).floor(),ce.copy(it).multiplyScalar(ne).floor(),Ae=sn;if($!==0&&(G=H),x.bindFramebuffer(I.FRAMEBUFFER,G)&&x.drawBuffers(E,G),x.viewport(Y),x.scissor(ce),x.setScissorTest(Ae),V){const ve=q.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,$)}else if(_e){const ve=L;for(let De=0;De<E.textures.length;De++){const Ie=q.get(E.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,Ie.__webglTexture,$,ve)}}else if(E!==null&&$!==0){const ve=q.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ve.__webglTexture,$)}U=-1};function ys(E){const L=q.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=R.textureFormatReadable(E.format),L.__typeReadable=R.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,$,G,V,_e,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){x.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ie=E.textures[ve],at=Ie.format,je=Ie.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);const Re=ys(Ie);if(Re.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-G&&$>=0&&$<=E.height-V&&I.readPixels(L,$,G,V,ue.convert(at),ue.convert(je),_e)}finally{const Ie=O!==null?q.get(O).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,L,$,G,V,_e,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(L>=0&&L<=E.width-G&&$>=0&&$<=E.height-V){x.bindFramebuffer(I.FRAMEBUFFER,De);const Ie=E.textures[ve],at=Ie.format,je=Ie.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve);const Re=ys(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(L,$,G,V,ue.convert(at),ue.convert(je),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const wt=O!==null?q.get(O).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,wt);const gt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cM(I,gt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Ct),I.deleteSync(gt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,$=0){const G=Math.pow(2,-$),V=Math.floor(E.image.width*G),_e=Math.floor(E.image.height*G),Ce=L!==null?L.x:0,ve=L!==null?L.y:0;Q.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Ce,ve,V,_e),x.unbindTexture()},this.copyTextureToTexture=function(E,L,$=null,G=null,V=0,_e=0){let Ce,ve,De,Ie,at,je,Re,Ct,wt;const gt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if($!==null)Ce=$.max.x-$.min.x,ve=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,at=$.min.y,je=$.isBox3?$.min.z:0;else{const en=Math.pow(2,-V);Ce=Math.floor(gt.width*en),ve=Math.floor(gt.height*en),E.isDataArrayTexture?De=gt.depth:E.isData3DTexture?De=Math.floor(gt.depth*en):De=1,Ie=0,at=0,je=0}G!==null?(Re=G.x,Ct=G.y,wt=G.z):(Re=0,Ct=0,wt=0);const Mt=ue.convert(L.format),_n=ue.convert(L.type);let Me;L.isData3DTexture?(Q.setTexture3D(L,0),Me=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Q.setTexture2DArray(L,0),Me=I.TEXTURE_2D_ARRAY):(Q.setTexture2D(L,0),Me=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const ln=x.getParameter(I.UNPACK_ROW_LENGTH),ct=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=x.getParameter(I.UNPACK_SKIP_PIXELS),Pn=x.getParameter(I.UNPACK_SKIP_ROWS),ai=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),x.pixelStorei(I.UNPACK_SKIP_ROWS,at),x.pixelStorei(I.UNPACK_SKIP_IMAGES,je);const or=E.isDataArrayTexture||E.isData3DTexture,Rt=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const en=q.get(E),Pi=q.get(L),Ut=q.get(en.__renderTarget),Li=q.get(Pi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,Ut.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let yn=0;yn<De;yn++)or&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,q.get(E).__webglTexture,V,je+yn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,q.get(L).__webglTexture,_e,wt+yn)),I.blitFramebuffer(Ie,at,Ce,ve,Re,Ct,Ce,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||q.has(E)){const en=q.get(E),Pi=q.get(L);x.bindFramebuffer(I.READ_FRAMEBUFFER,D),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let Ut=0;Ut<De;Ut++)or?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,V,je+Ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,V),Rt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pi.__webglTexture,_e,wt+Ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pi.__webglTexture,_e),V!==0?I.blitFramebuffer(Ie,at,Ce,ve,Re,Ct,Ce,ve,I.COLOR_BUFFER_BIT,I.NEAREST):Rt?I.copyTexSubImage3D(Me,_e,Re,Ct,wt+Ut,Ie,at,Ce,ve):I.copyTexSubImage2D(Me,_e,Re,Ct,Ie,at,Ce,ve);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Me,_e,Re,Ct,wt,Ce,ve,De,Mt,_n,gt.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,_e,Re,Ct,wt,Ce,ve,De,Mt,gt.data):I.texSubImage3D(Me,_e,Re,Ct,wt,Ce,ve,De,Mt,_n,gt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Re,Ct,Ce,ve,Mt,_n,gt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Re,Ct,gt.width,gt.height,Mt,gt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Re,Ct,Ce,ve,Mt,_n,gt);x.pixelStorei(I.UNPACK_ROW_LENGTH,ln),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),x.pixelStorei(I.UNPACK_SKIP_ROWS,Pn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ai),_e===0&&L.generateMipmaps&&I.generateMipmap(Me),x.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){Z=0,X=0,O=null,x.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}const Dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aC=new Pp(-1,1,1,-1,0,1);class lC extends un{constructor(){super(),this.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ai([0,2,0,0,2,0],2))}}const cC=new lC;class Jv{constructor(e){this._mesh=new wr(cC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uC extends gl{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fu.clone(e.uniforms),this.material=new Wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Jv(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class t0 extends gl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class fC extends gl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new st);this._width=i.width,this._height=i.height,n=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uC(Dc),this.copyPass.material.blending=Mr,this.timer=new oE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}t0!==void 0&&(o instanceof t0?i=!0:o instanceof fC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hC extends gl{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const pC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Yo extends gl{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new st(e.x,e.y):new st(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(s,o,{type:gi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new ni(s,o,{type:gi,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const u=new ni(s,o,{type:gi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+d,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}const a=pC;this.highPassUniforms=fu.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fu.clone(Dc.uniforms),this.blendMaterial=new Wn({uniforms:this.copyUniforms,vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,premultipliedAlpha:!0,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new bp,this._fsQuad=new Jv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(i*i))/i);const r=[],s=[];for(let o=1;o<e;o+=2){const a=n[o],l=o+1<e?n[o+1]:0,c=a+l;r.push((o*a+(o+1)*l)/c),s.push(c)}return new Wn({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Wn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Yo.BlurDirectionX=new st(1,0);Yo.BlurDirectionY=new st(0,1);const mC=1/3,hr=1/6,Hf=t=>Math.floor(t)|0,Vf=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function dc(t=Math.random){const e=gC(t),n=new Float64Array(e).map(s=>Vf[s%12*3]),i=new Float64Array(e).map(s=>Vf[s%12*3+1]),r=new Float64Array(e).map(s=>Vf[s%12*3+2]);return function(o,a,l){let c,d,h,u;const p=(o+a+l)*mC,g=Hf(o+p),y=Hf(a+p),m=Hf(l+p),f=(g+y+m)*hr,_=g-f,M=y-f,S=m-f,T=o-_,w=a-M,A=l-S;let v,C,b,P,F,H;T>=w?w>=A?(v=1,C=0,b=0,P=1,F=1,H=0):T>=A?(v=1,C=0,b=0,P=1,F=0,H=1):(v=0,C=0,b=1,P=1,F=0,H=1):w<A?(v=0,C=0,b=1,P=0,F=1,H=1):T<A?(v=0,C=1,b=0,P=0,F=1,H=1):(v=0,C=1,b=0,P=1,F=1,H=0);const D=T-v+hr,k=w-C+hr,Z=A-b+hr,X=T-P+2*hr,O=w-F+2*hr,U=A-H+2*hr,W=T-1+3*hr,Y=w-1+3*hr,ce=A-1+3*hr,Ae=g&255,nt=y&255,qe=m&255;let Xe=.6-T*T-w*w-A*A;if(Xe<0)c=0;else{const Te=Ae+e[nt+e[qe]];Xe*=Xe,c=Xe*Xe*(n[Te]*T+i[Te]*w+r[Te]*A)}let K=.6-D*D-k*k-Z*Z;if(K<0)d=0;else{const Te=Ae+v+e[nt+C+e[qe+b]];K*=K,d=K*K*(n[Te]*D+i[Te]*k+r[Te]*Z)}let ne=.6-X*X-O*O-U*U;if(ne<0)h=0;else{const Te=Ae+P+e[nt+F+e[qe+H]];ne*=ne,h=ne*ne*(n[Te]*X+i[Te]*O+r[Te]*U)}let xe=.6-W*W-Y*Y-ce*ce;if(xe<0)u=0;else{const Te=Ae+1+e[nt+1+e[qe+1]];xe*=xe,u=xe*xe*(n[Te]*W+i[Te]*Y+r[Te]*ce)}return 32*(c+d+h+u)}}function gC(t){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(t()*(256-i)),s=n[i];n[i]=n[r],n[r]=s}for(let i=256;i<512;i++)n[i]=n[i-256];return n}function _C(t){const e=[],n=[],i=[],r=t();function s(c,d,h){const u=Math.max(h-Math.abs(c-d),0)/h;return Math.min(c,d)-u*u*u*h*(1/6)}function o(c,d,h){const u=Math.abs(d),p=.48+.12*Math.pow(u/3.8,2)+.3*Math.pow(u/3.8,6),y=-3.8+Math.max(0,Math.min(1,(d+3.8)/7.6))*7.6,m=c,f=d-y,_=h,S=Math.sqrt(m*m+f*f+_*_)-p,T=c- -.6,w=d-3.7,A=h,v=Math.sqrt(T*T+w*w+A*A)-.78,C=c-.6,b=d-3.7,P=h,F=Math.sqrt(C*C+b*b+P*P)-.78,H=c- -.6,D=d- -3.7,k=h,Z=Math.sqrt(H*H+D*D+k*k)-.78,X=c-.6,O=d- -3.7,U=h,W=Math.sqrt(X*X+O*O+U*U)-.78;let Y=S;return Y=s(Y,v,.65),Y=s(Y,F,.65),Y=s(Y,Z,.65),Y=s(Y,W,.65),Y}function a(c,d,h,u){const p=o(c,d,h),g=-.12+u*.18,y=.005,m=o(c+y,d,h),f=o(c-y,d,h),_=o(c,d+y,h),M=o(c,d-y,h),S=o(c,d,h+y),T=o(c,d,h-y);let w=(m-f)/(2*y),A=(_-M)/(2*y),v=(S-T)/(2*y);const C=Math.sqrt(w*w+A*A+v*v);C>1e-4?(w/=C,A/=C,v/=C):(w=0,A=1,v=0);const b=p-g;return{x:c-w*b,y:d-A*b,z:h-v*b}}const l=12e3;for(let c=0;c<l;c++){let d=0,h=0,u=0;const p=Math.random();if(p<.5){h=-3.4+Math.random()*6.8;const m=Math.random()*Math.PI*2,f=.48+.12*Math.pow(Math.abs(h)/3.8,2);d=f*Math.cos(m),u=f*Math.sin(m)}else if(p<.75){const f=Math.random()<.5?-.6:.6,_=3.7,M=0,S=Math.acos(1-2*Math.random()),T=Math.random()*Math.PI*2,w=.78;d=f+w*Math.sin(S)*Math.cos(T),h=_+w*Math.cos(S),u=M+w*Math.sin(S)*Math.sin(T)}else{const f=Math.random()<.5?-.6:.6,_=-3.7,M=0,S=Math.acos(1-2*Math.random()),T=Math.random()*Math.PI*2,w=.78;d=f+w*Math.sin(S)*Math.cos(T),h=_+w*Math.cos(S),u=M+w*Math.sin(S)*Math.sin(T)}const g=r(d,h,u),y=a(d,h,u,g);e.push(y.x,y.y,y.z)}for(let c=0;c<l;c++){const d=new we,h=new we,u=Math.random();u<.4?d.set("#fe1b40"):u<.8?d.set("#ff002d"):d.set("#fe4c6c");const p=Math.random();p<.5?h.set("#ff0123"):p<.8?h.set("#fe3354"):h.set("#fffeff"),n.push(d.r,d.g,d.b),i.push(h.r,h.g,h.b)}return{tempBonePositions:e,tempBoneColors:n,tempBoneAmberColors:i,totalBonePoints:l}}function vC(t,e){const i=new Float32Array(540),r=new Float32Array(180*3),s=new Float32Array(180*3),o=[],a=new Set;for(;a.size<180;){const c=Math.floor(Math.random()*e);a.add(c)}const l=Array.from(a);for(let c=0;c<180;c++){const d=l[c],h=t[d*3],u=t[d*3+1],p=t[d*3+2];o.push({x:h,y:u,z:p,ox:h,oy:u,oz:p,rx:0,ry:0,rz:0}),i[c*3]=h,i[c*3+1]=u,i[c*3+2]=p;const g=new we("#fe1b40");r[c*3]=g.r,r[c*3+1]=g.g,r[c*3+2]=g.b;const y=new we,m=Math.random();m<.5?y.set("#fffeff"):m<.85?y.set("#fe1b40"):y.set("#fe8192"),s[c*3]=y.r,s[c*3+1]=y.g,s[c*3+2]=y.b}return{boneSynapses:o,boneSynapsePositions:i,originalBoneSynapseColors:r,amberBoneSynapseColors:s,numBoneSynapses:180}}function xC(t){const e=[],i=t.length;for(let a=0;a<i;a++){const l=t[a],c=t.map((h,u)=>({idx:u,dist:Math.sqrt((l.ox-h.ox)**2+(l.oy-h.oy)**2+(l.oz-h.oz)**2)})).filter(h=>h.idx!==a);c.sort((h,u)=>h.dist-u.dist);const d=Math.min(3,c.length);for(let h=0;h<d;h++)c[h].dist<2.4&&e.push({a,b:c[h].idx})}const r=new Float32Array(e.length*6),s=new Float32Array(e.length*6),o=new Float32Array(e.length*6);for(let a=0;a<e.length;a++){const l=e[a],c=t[l.a],d=t[l.b];r[a*6]=c.x,r[a*6+1]=c.y,r[a*6+2]=c.z,r[a*6+3]=d.x,r[a*6+4]=d.y,r[a*6+5]=d.z;const h=new we("#ff002d"),u=new we("#fe3354");s[a*6]=h.r,s[a*6+1]=h.g,s[a*6+2]=h.b,s[a*6+3]=u.r,s[a*6+4]=u.g,s[a*6+5]=u.b;const p=new we,g=new we;Math.random()<.5?(p.set("#fffeff"),g.set("#ff0000")):(p.set("#fe1b40"),g.set("#fe8192")),o[a*6]=p.r,o[a*6+1]=p.g,o[a*6+2]=p.b,o[a*6+3]=g.r,o[a*6+4]=g.g,o[a*6+5]=g.b}return{boneConnections:e,boneLinePositions:r,originalBoneLineColors:s,amberBoneLineColors:o}}function SC(t){const e=t(),n=[],i=[],r=[];function s(h,u,p){const g=Math.max(p-Math.abs(h-u),0)/p;return Math.min(h,u)-g*g*g*p*(1/6)}function o(h,u,p){const g=Math.max(p-Math.abs(h-u),0)/p;return Math.max(h,u)+g*g*g*p*(1/6)}function a(h,u,p){const m=h*1.15,f=u-1.25,_=p*.95,M=Math.sqrt(m*m+f*f+_*_)-3.25,S=h*1.35,T=u+.15,w=p-.95,A=Math.sqrt(S*S+T*T+w*w)-1.95,v=1-Math.max(0,(-u-.8)*.18),C=h*1.4/v,b=u+1.85,P=p-.65,F=Math.sqrt(C*C+b*b+P*P)-1.6,H=h- -1.8,D=u-.05,k=p-.7,Z=Math.sqrt(H*H+D*D+k*k)-.75,X=h-1.8,O=u-.05,U=p-.7,W=Math.sqrt(X*X+O*O+U*U)-.75;let Y=s(M,A,.8);Y=s(Y,F,.85),Y=s(Y,Z,.55),Y=s(Y,W,.55);const ce=Math.sqrt(Math.pow(h+1.1,2)*1.1+Math.pow(u-.55,2)*1.35+Math.pow(p-1.8,2))-.85,Ae=Math.sqrt(Math.pow(h-1.1,2)*1.1+Math.pow(u-.55,2)*1.35+Math.pow(p-1.8,2))-.85,nt=Math.sqrt(Math.pow(h,2)*2.1+Math.pow(u+.35,2)*1.25+Math.pow(p-1.9,2))-.55;if(Y=o(Y,-ce,.25),Y=o(Y,-Ae,.25),Y=o(Y,-nt,.18),p>1&&u>-1.75&&u<-.9){const qe=1.7-h*h*.45,Xe=Math.abs(p-qe);if(Xe<.45&&Math.abs(h)<1.35){const K=Math.atan2(h,p-.3),xe=Math.sin(K*14)*.12,Te=Math.abs(u+1.35)-.05,ge=-Math.max(0,.15-Xe)*(Math.abs(xe)+Math.max(0,.08-Te)*1.8);Y+=ge}}return Y}function l(h,u,p,g){let y=h,m=u,f=p;const _=-.12+g*.16,M=.005;for(let S=0;S<4;S++){const T=a(y,m,f),w=a(y+M,m,f),A=a(y-M,m,f),v=a(y,m+M,f),C=a(y,m-M,f),b=a(y,m,f+M),P=a(y,m,f-M),F=(w-A)/(2*M),H=(v-C)/(2*M),D=(b-P)/(2*M),k=Math.sqrt(F*F+H*H+D*D);if(k<1e-4)break;const Z=F/k,X=H/k,O=D/k,U=T-_;y-=Z*U*.85,m-=X*U*.85,f-=O*U*.85}return{x:y,y:m,z:f}}const c=12e3;let d=0;for(;d<c;){let h=(Math.random()-.5)*7.5,u=-3.2+Math.random()*7.4,p=(Math.random()-.5)*6.5;const g=Math.sqrt(Math.pow(h+1.05,2)+Math.pow(u-.6,2)*1.3+Math.pow(p-1.8,2)),y=Math.sqrt(Math.pow(h-1.05,2)+Math.pow(u-.6,2)*1.3+Math.pow(p-1.8,2));if(g<.82||y<.82||Math.sqrt(Math.pow(h,2)*1.8+Math.pow(u+.35,2)*1.1+Math.pow(p-1.9,2))<.52||p>1.2&&u>-1.7&&u<-1.4&&Math.abs(h)<1.3&&Math.random()<.6)continue;if(a(h,u,p)<.85){const _=e(h,u,p),M=l(h,u,p,_),S=Math.sqrt(Math.pow(M.x+1.05,2)+Math.pow(M.y-.6,2)*1.3+Math.pow(M.z-1.8,2)),T=Math.sqrt(Math.pow(M.x-1.05,2)+Math.pow(M.y-.6,2)*1.3+Math.pow(M.z-1.8,2)),w=Math.sqrt(Math.pow(M.x,2)*1.8+Math.pow(M.y+.35,2)*1.1+Math.pow(M.z-1.9,2));if(S<.55||T<.55||w<.35)continue;n.push(M.x,M.y,M.z),d++;const A=new we,v=new we;if(M.z>1.25&&M.y>-1.75&&M.y<-.95&&Math.abs(M.x)<1.35)A.set("#f0ebdd"),v.set("#fffeff");else{const b=Math.random();b<.45?A.set("#B380DD"):b<.8?A.set("#B380DD"):A.set("#B380DD");const P=Math.random();P<.5?v.set("#B380DD"):P<.85?v.set("#fe5c8b"):v.set("#fffeff")}i.push(A.r,A.g,A.b),r.push(v.r,v.g,v.b)}}return{tempSkullPositions:n,tempSkullColors:i,tempSkullAmberColors:r,totalSkullPoints:d}}function yC(t,e){const i=new Float32Array(660),r=new Float32Array(220*3),s=new Float32Array(220*3),o=[],a=new Set;for(;a.size<220;){const c=Math.floor(Math.random()*e);a.add(c)}const l=Array.from(a);for(let c=0;c<220;c++){const d=l[c],h=t[d*3],u=t[d*3+1],p=t[d*3+2];o.push({x:h,y:u,z:p,ox:h,oy:u,oz:p,rx:0,ry:0,rz:0}),i[c*3]=h,i[c*3+1]=u,i[c*3+2]=p;const g=new we("#B380DD");r[c*3]=g.r,r[c*3+1]=g.g,r[c*3+2]=g.b;const y=new we,m=Math.random();m<.5?y.set("#fffeff"):m<.85?y.set("#ff017e"):y.set("#B380DD"),s[c*3]=y.r,s[c*3+1]=y.g,s[c*3+2]=y.b}return{skullSynapses:o,skullSynapsePositions:i,originalSkullSynapseColors:r,amberSkullSynapseColors:s,numSkullSynapses:220}}function MC(t){const e=[];for(let o=0;o<t.length;o++){const a=t[o],l=t.map((d,h)=>({idx:h,dist:Math.sqrt((a.ox-d.ox)**2+(a.oy-d.oy)**2+(a.oz-d.oz)**2)})).filter(d=>d.idx!==o);l.sort((d,h)=>d.dist-h.dist);const c=Math.min(2,l.length);for(let d=0;d<c;d++)l[d].dist<1.95&&e.push({a:o,b:l[d].idx})}const i=new Float32Array(e.length*6),r=new Float32Array(e.length*6),s=new Float32Array(e.length*6);for(let o=0;o<e.length;o++){const a=e[o],l=t[a.a],c=t[a.b];i[o*6]=l.x,i[o*6+1]=l.y,i[o*6+2]=l.z,i[o*6+3]=c.x,i[o*6+4]=c.y,i[o*6+5]=c.z;const d=new we("#B380DD"),h=new we("#B380DD");r[o*6]=d.r,r[o*6+1]=d.g,r[o*6+2]=d.b,r[o*6+3]=h.r,r[o*6+4]=h.g,r[o*6+5]=h.b;const u=new we,p=new we;Math.random()<.5?(u.set("#fffeff"),p.set("#ff017e")):(u.set("#B380DD"),p.set("#fe5c8b")),s[o*6]=u.r,s[o*6+1]=u.g,s[o*6+2]=u.b,s[o*6+3]=p.r,s[o*6+4]=p.g,s[o*6+5]=p.b}return{skullConnections:e,skullLinePositions:i,originalSkullLineColors:r,amberSkullLineColors:s}}function EC(){const t=mr.useRef(null),e=mr.useRef(null),n=mr.useRef(null),i=mr.useRef(null),r=mr.useRef(null),s=mr.useRef(null);return mr.useEffect(()=>{if(!t.current)return;const o=t.current.clientWidth,a=t.current.clientHeight,l=new zM;l.background=new we("#010001");const c=new Fi(60,o/a,.1,100);c.position.z=24;const d=new oC({antialias:!0,powerPreference:"high-performance"});d.setSize(o,a),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(d.domElement);const h=new hC(l,c),u=new Yo(new st(o,a),.55,.18,.35),p=new dC(d);p.addPass(h),p.addPass(u);const g=()=>{const re=document.createElement("canvas");re.width=64,re.height=64;const le=re.getContext("2d");if(le){le.fillStyle="rgba(0, 0, 0, 0)",le.fillRect(0,0,64,64);const be=le.createRadialGradient(32,32,0,32,32,32);be.addColorStop(0,"rgba(255, 255, 255, 1.0)"),be.addColorStop(.25,"rgba(255, 255, 255, 0.95)"),be.addColorStop(.5,"rgba(0, 255, 230, 0.6)"),be.addColorStop(.8,"rgba(0, 100, 255, 0.2)"),be.addColorStop(1,"rgba(0, 0, 0, 0)"),le.fillStyle=be,le.beginPath(),le.moveTo(32,4),le.lineTo(60,32),le.lineTo(32,60),le.lineTo(4,32),le.closePath(),le.fill()}const $e=new Cg(re);return $e.minFilter=Tn,$e.magFilter=Tn,$e},y=()=>{const re=document.createElement("canvas");re.width=64,re.height=64;const le=re.getContext("2d");if(le){le.fillStyle="rgba(0, 0, 0, 0)",le.fillRect(0,0,64,64);const be=le.createRadialGradient(32,32,0,32,32,32);be.addColorStop(0,"rgba(255, 255, 255, 1.0)"),be.addColorStop(.3,"rgba(0, 255, 240, 0.8)"),be.addColorStop(.7,"rgba(0, 150, 255, 0.35)"),be.addColorStop(1,"rgba(0, 0, 0, 0)"),le.fillStyle=be,le.beginPath(),le.moveTo(32,6),le.lineTo(58,32),le.lineTo(32,58),le.lineTo(6,32),le.closePath(),le.fill(),le.strokeStyle="rgba(255, 255, 255, 0.9)",le.lineWidth=1.5,le.beginPath(),le.moveTo(32,14),le.lineTo(50,32),le.lineTo(32,50),le.lineTo(14,32),le.closePath(),le.stroke()}const $e=new Cg(re);return $e.minFilter=Tn,$e.magFilter=Tn,$e},m=4,f=90,_=90,M=[],S=[];for(let re=0;re<_;re++){const le=re/(_-1)*2-1;for(let $e=0;$e<f;$e++){const be=$e/(f-1)*2-1,We=be*(Math.PI/2.6),Je=le*(Math.PI/2.8),Oe=m*(1.05-.12*le*le);let He=Oe*Math.sin(We),Ke=m*1.25*Math.sin(Je),Ft=Oe*Math.cos(We)*.72;if(le<-.2){const Si=1-Math.abs(le+.2)*.45;He*=Si}const Lt=Math.abs(We);let Xt=!1;if(Lt<.26&&le>-.25&&le<.45){const Si=1-Lt/.26,Js=Math.cos((le-.1)/.35*(Math.PI/2));Js>0&&(Ft+=1.15*Si*Js,Xt=!0)}if(le>.5){const Si=Math.pow((le-.5)/.5,2)*.45;Ft-=Si}const bt=-.42,Ot=.42,xt=.22,Vt=.22,In=.14,ar=Math.sqrt(Math.pow((be-bt)/Vt,2)+Math.pow((le-xt)/In,2)),lr=Math.sqrt(Math.pow((be-Ot)/Vt,2)+Math.pow((le-xt)/In,2));if(ar<.85||lr<.85||Math.sqrt(Math.pow((be-0)/.34,2)+Math.pow((le- -.42)/.06,2))<.7)continue;if(le>-.55&&le<-.3&&Lt<.4){const Si=(1-Lt/.4)*.25*Math.sin((le+.42)*10);Ft+=Si}const $n=.015;He+=(Math.random()-.5)*$n,Ke+=(Math.random()-.5)*$n,Ft+=(Math.random()-.5)*$n,M.push(He,Ke,Ft);const li=new we,oa=Math.abs(ar-1),Xi=Math.abs(lr-1);if(oa<.18||Xi<.18)li.set("#fffeff");else if(Xt)li.set("#B380DD");else if(Math.abs(be)>.85||Math.abs(le)>.85)li.set("#B380DD");else{const Si=Math.random();Si<.35?li.set("#B380DD"):Si<.7?li.set("#B380DD"):li.set("#B380DD")}S.push(li.r,li.g,li.b)}}const T=M.length/3,w=new un,A=new Float32Array(M),v=new Float32Array(S);w.setAttribute("position",new Dt(A,3)),w.setAttribute("color",new Dt(v,3));const C=new Dr({size:.16,map:y(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:.9}),b=new Jr(w,C);l.add(b);const P=new Float32Array(A),F=new Float32Array(T*3),H=15e3,D=[],k=[],Z=[],X=dc(),O=(re,le,$e)=>{let be=re*.95,We=le,Je=$e*.95;const Oe=We/3;let He=1;if(Oe<0?He=1+Oe*.42:He=1-Oe*Oe*.12,be*=He,$e>0){const Ke=Math.abs(be);if(Ke<.65&&We>-.4&&We<.8){const Vt=Math.cos(Ke/.65*Math.PI/2),In=Math.cos((We-.2)/.6*Math.PI/2);In>0&&(Je+=1.85*Vt*In)}const Ft=Math.sqrt(Math.pow(be+.85,2)+Math.pow(We-.9,2)*1.5),Lt=Math.sqrt(Math.pow(be-.85,2)+Math.pow(We-.9,2)*1.5);Ft<.7&&(Je-=.55*Math.cos(Ft/.7*Math.PI/2)),Lt<.7&&(Je-=.55*Math.cos(Lt/.7*Math.PI/2));const Xt=Math.sqrt(be*be+Math.pow(We+.5,2)*3.5);if(Xt<.72){const Vt=Math.cos(Xt/.72*Math.PI/2)*Math.sin((We+.5)/.36*Math.PI);Je+=.45*Vt}const bt=Math.sqrt(be*be+Math.pow(We+1.5,2)*2.5);bt<.65&&(Je+=.65*Math.cos(bt/.65*Math.PI/2));const Ot=Math.sqrt(Math.pow(be+1.25,2)+Math.pow(We+.1,2)*2),xt=Math.sqrt(Math.pow(be-1.25,2)+Math.pow(We+.1,2)*2);Ot<.9&&(Je+=.35*Math.cos(Ot/.9*Math.PI/2)),xt<.9&&(Je+=.35*Math.cos(xt/.9*Math.PI/2))}return{x:be,y:We,z:Je}};for(let re=0;re<H;re++){const le=Math.acos(1-2*(re/H)),$e=Math.PI*(1+Math.sqrt(5))*re,be=Math.sin(le)*Math.cos($e),We=Math.cos(le),Je=Math.sin(le)*Math.sin($e);let Oe=be*3.3,He=We*2.4+.35,Ke=Je*3.8;if(Ke>0){const $n=1-Ke/3.8*.14;Oe*=$n,He*=1-Ke/3.8*.08}if(Ke<-.3&&He<.4){const li=Math.min(1,(Ke+.3)/-2.5)*.95;He+=li}if(Math.abs(Oe)>.8&&He>-.6&&He<.8&&Ke>-.8&&Ke<1.4){const $n=.12*Math.exp(-2*Math.pow(He-.1,2));Oe-=(Oe>0?1:-1)*$n}const Lt=1-.28*Math.exp(-6*Oe*Oe);Oe*=Lt;const Xt=O(Oe,He,Ke);Oe=Xt.x,He=Xt.y,Ke=Xt.z;const bt=X(Oe*.55,He*.55,Ke*.55),Ot=X(Oe*1.5,He*1.5,Ke*1.5),xt=Math.sin(bt*13+Ot*4.5)*.28,Vt=Math.sqrt(Oe*Oe+He*He+Ke*Ke),In=Oe/Vt,ar=He/Vt,lr=Ke/Vt;Oe+=In*xt,He+=ar*xt,Ke+=lr*xt,Oe+=(Math.random()-.5)*.02,He+=(Math.random()-.5)*.02,Ke+=(Math.random()-.5)*.02,D.push(Oe,He,Ke);const xi=new we,vn=new we,cr=Math.random();xt>.08?(Math.random()<.6?xi.set("#B380DD"):xi.set("#B380DD"),cr<.7?vn.set("#fffeff"):vn.set("#B380DD")):xt>-.05?(Math.random()<.5?xi.set("#B380DD"):xi.set("#B380DD"),cr<.5?vn.set("#B380DD"):vn.set("#B380DD")):(Math.random()<.6?xi.set("#B380DD"):xi.set("#B380DD"),cr<.5?vn.set("#B380DD"):cr<.8?vn.set("#B380DD"):vn.set("#B380DD")),k.push(xi.r,xi.g,xi.b),Z.push(vn.r,vn.g,vn.b)}const U=4e3;for(let re=0;re<U;re++){const le=Math.acos(1-2*(re/U)),$e=Math.PI*(1+Math.sqrt(5))*re,be=Math.sin(le)*Math.cos($e),We=Math.cos(le),Je=Math.sin(le)*Math.sin($e);let Oe=be*1.85,He=We*.95-.7,Ke=Je*1.45-1.4;const Ft=O(Oe,He,Ke);Oe=Ft.x,He=Ft.y,Ke=Ft.z;const Lt=X(Oe*1.5,He*3.5,Ke*1.5),Xt=Math.sin(He*45+Lt*1.8)*.08,bt=Math.sqrt(Oe*Oe+He*He+Ke*Ke);Oe+=Oe/bt*Xt,He+=He/bt*Xt,Ke+=Ke/bt*Xt,Oe+=(Math.random()-.5)*.02,He+=(Math.random()-.5)*.02,Ke+=(Math.random()-.5)*.02,D.push(Oe,He,Ke);const Ot=new we,xt=new we,Vt=Math.random();Xt>.02?(Ot.set("#B380DD"),Vt<.6?xt.set("#fffeff"):xt.set("#B380DD")):(Ot.set("#B380DD"),Vt<.5?xt.set("#B380DD"):xt.set("#B380DD")),k.push(Ot.r,Ot.g,Ot.b),Z.push(xt.r,xt.g,xt.b)}const W=2e3;for(let re=0;re<W;re++){const le=re/W,$e=-.9-le*2.2,be=Math.random()*Math.PI*2,We=6,Je=Math.round(be/(Math.PI*2/We))*(Math.PI*2/We),Oe=be+(Je-be)*.85,He=.45*(1-le*.95),Ke=Math.sin(be*6)*.04,Ft=He+Ke,Lt=Ft*Math.cos(Oe),Xt=Ft*Math.sin(Oe)-le*.15;D.push(Lt,$e,Xt);const bt=new we,Ot=new we,xt=Math.random();xt<.4?bt.set("#B380DD"):xt<.8?bt.set("#B380DD"):bt.set("#B380DD");const Vt=Math.random();Vt<.4?Ot.set("#fffeff"):Vt<.8?Ot.set("#B380DD"):Ot.set("#B380DD"),k.push(bt.r,bt.g,bt.b),Z.push(Ot.r,Ot.g,Ot.b)}const Y=D.length/3,ce=new un,Ae=new Float32Array(D),nt=new Float32Array(k),qe=new Float32Array(k),Xe=new Float32Array(Z);ce.setAttribute("position",new Dt(Ae,3)),ce.setAttribute("color",new Dt(nt,3));const K=new Dr({size:.09,map:y(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),ne=new Jr(ce,K),xe=new Float32Array(Ae),Te=new Float32Array(Y*3),ge=280,it=new Float32Array(ge*3),sn=new Float32Array(ge*3),Ze=[],mt=new Set;for(;mt.size<ge;){const re=Math.floor(Math.random()*H);mt.add(re)}const Ht=Array.from(mt),ot=new Float32Array(ge*3),It=new Float32Array(ge*3);for(let re=0;re<ge;re++){const le=Ht[re],$e=D[le*3],be=D[le*3+1],We=D[le*3+2];Ze.push({x:$e,y:be,z:We,ox:$e,oy:be,oz:We,rx:0,ry:0,rz:0}),it[re*3]=$e,it[re*3+1]=be,it[re*3+2]=We;const Je=new we("#fffeff");sn[re*3]=Je.r,sn[re*3+1]=Je.g,sn[re*3+2]=Je.b,ot[re*3]=Je.r,ot[re*3+1]=Je.g,ot[re*3+2]=Je.b;const Oe=new we,He=Math.random();He<.6?Oe.set("#fffeff"):He<.8?Oe.set("#B380DD"):Oe.set("#B380DD"),It[re*3]=Oe.r,It[re*3+1]=Oe.g,It[re*3+2]=Oe.b}const jt=new un;jt.setAttribute("position",new Dt(it,3)),jt.setAttribute("color",new Dt(sn,3));const bn=new Dr({size:.42,map:g(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),Zt=new Jr(jt,bn),Nt=[],I=2.1;for(let re=0;re<ge;re++){const le=Ze[re],$e=Ze.map((We,Je)=>({idx:Je,dist:Math.sqrt((le.ox-We.ox)**2+(le.oy-We.oy)**2+(le.oz-We.oz)**2)})).filter(We=>We.idx!==re);$e.sort((We,Je)=>We.dist-Je.dist);const be=Math.min(3,$e.length);for(let We=0;We<be;We++)$e[We].dist<I&&Nt.push({a:re,b:$e[We].idx})}const on=new Float32Array(Nt.length*6),ht=new Float32Array(Nt.length*6),R=new Float32Array(Nt.length*6),x=new Float32Array(Nt.length*6);for(let re=0;re<Nt.length;re++){const le=Nt[re],$e=Ze[le.a],be=Ze[le.b];on[re*6]=$e.x,on[re*6+1]=$e.y,on[re*6+2]=$e.z,on[re*6+3]=be.x,on[re*6+4]=be.y,on[re*6+5]=be.z;const We=new we("#B380DD"),Je=new we("#B380DD");ht[re*6]=We.r,ht[re*6+1]=We.g,ht[re*6+2]=We.b,ht[re*6+3]=Je.r,ht[re*6+4]=Je.g,ht[re*6+5]=Je.b,R[re*6]=We.r,R[re*6+1]=We.g,R[re*6+2]=We.b,R[re*6+3]=Je.r,R[re*6+4]=Je.g,R[re*6+5]=Je.b;const Oe=new we,He=new we,Ke=Math.random();Ke<.4?(Oe.set("#fffeff"),He.set("#B380DD")):Ke<.7?(Oe.set("#B380DD"),He.set("#B380DD")):(Oe.set("#B380DD"),He.set("#fffeff")),x[re*6]=Oe.r,x[re*6+1]=Oe.g,x[re*6+2]=Oe.b,x[re*6+3]=He.r,x[re*6+4]=He.g,x[re*6+5]=He.b}const B=new un;B.setAttribute("position",new Dt(on,3)),B.setAttribute("color",new Dt(ht,3));const q=new Pc({vertexColors:!0,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),Q=new If(B,q),oe=new Is;oe.add(ne),oe.add(Zt),oe.add(Q),oe.rotation.y=Math.PI/4.5,oe.rotation.x=.15,oe.scale.setScalar(.1),l.add(oe);const{tempBonePositions:fe,tempBoneColors:j,tempBoneAmberColors:ie,totalBonePoints:de}=_C(dc),Le=new un,me=new Float32Array(fe),pe=new Float32Array(j),Be=new Float32Array(j),Ve=new Float32Array(ie);Le.setAttribute("position",new Dt(me,3)),Le.setAttribute("color",new Dt(pe,3));const Qe=new Dr({size:.11,map:y(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),N=new Jr(Le,Qe),he=new Float32Array(me),ee=new Float32Array(de*3),{boneSynapses:ue,boneSynapsePositions:Ee,originalBoneSynapseColors:se,amberBoneSynapseColors:ke,numBoneSynapses:Fe}=vC(fe,de),Tt=new un;Tt.setAttribute("position",new Dt(Ee,3)),Tt.setAttribute("color",new Dt(new Float32Array(se),3));const yt=new Dr({size:.42,map:g(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),oi=new Jr(Tt,yt),{boneConnections:_i,boneLinePositions:Nu,originalBoneLineColors:ea,amberBoneLineColors:_l}=xC(ue),rr=new un;rr.setAttribute("position",new Dt(Nu,3)),rr.setAttribute("color",new Dt(new Float32Array(ea),3));const ta=new Pc({vertexColors:!0,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),vl=new If(rr,ta),qn=new Is;qn.add(N),qn.add(oi),qn.add(vl),qn.rotation.y=Math.PI/6,qn.rotation.x=.1,qn.scale.setScalar(.1),l.add(qn);const{tempSkullPositions:sr,tempSkullColors:Ks,tempSkullAmberColors:xl,totalSkullPoints:Zs}=SC(dc),Vi=new un,na=new Float32Array(sr),Qs=new Float32Array(Ks),ia=new Float32Array(Ks),Sl=new Float32Array(xl);Vi.setAttribute("position",new Dt(na,3)),Vi.setAttribute("color",new Dt(Qs,3));const ra=new Dr({size:.11,map:y(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),yl=new Jr(Vi,ra),sa=new Float32Array(na),Gi=new Float32Array(Zs*3),{skullSynapses:ys,skullSynapsePositions:E,originalSkullSynapseColors:L,amberSkullSynapseColors:$,numSkullSynapses:G}=yC(sr,Zs),V=new un;V.setAttribute("position",new Dt(E,3)),V.setAttribute("color",new Dt(new Float32Array(L),3));const _e=new Dr({size:.42,map:g(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:0}),Ce=new Jr(V,_e),{skullConnections:ve,skullLinePositions:De,originalSkullLineColors:Ie,amberSkullLineColors:at}=MC(ys),je=new un;je.setAttribute("position",new Dt(De,3)),je.setAttribute("color",new Dt(new Float32Array(Ie),3));const Re=new Pc({vertexColors:!0,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),Ct=new If(je,Re),wt=new Is;wt.add(yl),wt.add(Ce),wt.add(Ct),wt.rotation.y=-Math.PI/6,wt.rotation.x=.05,wt.scale.setScalar(.1),l.add(wt);const gt=14e3,Mt=new un,_n=new Float32Array(gt*3),Me=new Float32Array(gt*3),ln=new Float32Array(gt*3),ct=new Float32Array(gt*3),Sn=new Float32Array(gt*3),Pn=new Float32Array(gt*3),ai=new Float32Array(gt*3),or=new we("#B380DD"),Rt=new we("#1a0b2e"),en=15,Pi=3.5+1.4;for(let re=0;re<gt;re++){const le=Math.random()*Math.PI*2,$e=Math.acos(Math.random()*2-1);let be=0;if(Math.random()<.55){const In=Math.random()||1e-4,ar=Math.random(),lr=Math.sqrt(-2*Math.log(In))*Math.sin(2*Math.PI*ar);be=en*(.55+lr*.08)}else be=Pi+(en-Pi)*Math.pow(Math.random(),1.5);be=Math.max(be,Pi);const Je=be*Math.sin($e)*Math.cos(le),Oe=be*Math.sin($e)*Math.sin(le),He=be*Math.cos($e),Ke=Math.min(be/en,1),Ft=new we;if(Ke<.45){const In=Ke/.45;Ft.lerpColors(or,or.clone().lerp(Rt,.45),In)}else{const In=(Ke-.45)/.55;Ft.lerpColors(or.clone().lerp(Rt,.45),Rt,In)}Ft.r+=(Math.random()-.5)*.03,Ft.g+=(Math.random()-.5)*.03,Ft.b+=(Math.random()-.5)*.03,_n[re*3]=Je,_n[re*3+1]=Oe,_n[re*3+2]=He,Me[re*3]=Je,Me[re*3+1]=Oe,Me[re*3+2]=He,ln[re*3]=df.clamp(Ft.r,0,1),ln[re*3+1]=df.clamp(Ft.g,0,1),ln[re*3+2]=df.clamp(Ft.b,0,1),ct[re*3]=ln[re*3],ct[re*3+1]=ln[re*3+1],ct[re*3+2]=ln[re*3+2];const Lt=new we,Xt=Math.random();Xt<.1?Lt.set("#fffeff"):Xt<.4?Lt.set("#B380DD"):Xt<.7?Lt.set("#B380DD"):Xt<.85?Lt.set("#B380DD"):Lt.set("#140824"),Sn[re*3]=Lt.r,Sn[re*3+1]=Lt.g,Sn[re*3+2]=Lt.b;const bt=new we,Ot=Math.random();Ot<.1?bt.set("#fffeff"):Ot<.4?bt.set("#fe4c6c"):Ot<.7?bt.set("#fe003c"):Ot<.85?bt.set("#cd0101"):bt.set("#1a0102"),Pn[re*3]=bt.r,Pn[re*3+1]=bt.g,Pn[re*3+2]=bt.b;const xt=new we,Vt=Math.random();Vt<.1?xt.set("#fffeff"):Vt<.4?xt.set("#B380DD"):Vt<.7?xt.set("#B380DD"):Vt<.85?xt.set("#B380DD"):xt.set("#10011a"),ai[re*3]=xt.r,ai[re*3+1]=xt.g,ai[re*3+2]=xt.b}Mt.setAttribute("position",new Dt(_n,3)),Mt.setAttribute("color",new Dt(ln,3));const Ut=new Dr({size:.26,map:g(),vertexColors:!0,blending:ci,depthWrite:!1,transparent:!0,opacity:.95}),Li=new Jr(Mt,Ut);l.add(Li);const yn=new st(-9999,-9999),vi=new z(-9999,-9999,-9999);let Wi=!1;const Fp=re=>{const le=d.domElement.getBoundingClientRect();yn.x=(re.clientX-le.left)/le.width*2-1,yn.y=-((re.clientY-le.top)/le.height)*2+1,Wi=!0},Op=()=>{Wi=!1,yn.set(-9999,-9999)};window.addEventListener("mousemove",Fp),d.domElement.addEventListener("mouseleave",Op);let Bp=0,Ne=0;const kp=()=>{const re=document.documentElement.scrollHeight-window.innerHeight;re>0&&(Bp=window.scrollY/re)};window.addEventListener("scroll",kp,{passive:!0});const Ar=new Float32Array(gt*3),Iu=dc(),jv=new lE;let zp,Hp=-1;const Vp=()=>{zp=requestAnimationFrame(Vp),Ne+=(Bp-Ne)*.08;const le=1+Math.min(1,Ne/.2)*6.5;b.scale.setScalar(le);let $e=0;Ne<.26&&($e=.9*(1-Math.min(1,Math.max(0,(Ne-.1)/.14)))),C.opacity=$e;let be=1,We=0;if(Ne>=.1){const Se=Math.min(1,(Ne-.1)/.14);be=Math.max(0,1-Se*1.5),We=-Se*600}n.current&&(n.current.style.opacity=be.toString(),n.current.style.transform=`translateY(${We}px)`,be>.1?n.current.style.pointerEvents="auto":n.current.style.pointerEvents="none");let Je=0,Oe=0,He=.1;if(Ne>=.26&&Ne<.44){const Se=(Ne-.26)/.18;Je=Se,Oe=.9*Se,He=.1+Se*1.65}else if(Ne>=.44&&Ne<.52)Je=1,Oe=.9,He=1.75;else if(Ne>=.52&&Ne<.64){const Se=(Ne-.52)/.12;Je=1-Se,Oe=.9*(1-Se),He=1.75+Se*4.5}else Ne>=.64&&(Je=0,Oe=0,He=6.25);oe.scale.setScalar(He),K.opacity=Oe,bn.opacity=Je,q.opacity=.55*Je;let Ke=0,Ft=40;if(Ne>=.26&&Ne<.52){const Se=Math.min(1,(Ne-.26)/.18);Ke=Se,Ft=40*(1-Se)}else if(Ne>=.52&&Ne<.64){const Se=Math.min(1,(Ne-.52)/.12);Ke=Math.max(0,1-Se*1.5),Ft=-Se*600}i.current&&(i.current.style.opacity=Ke.toString(),i.current.style.transform=`translateY(${Ft}px)`,Ke>.1?i.current.style.pointerEvents="auto":i.current.style.pointerEvents="none");let Lt=0,Xt=0,bt=.1;if(Ne>=.62&&Ne<.78){const Se=(Ne-.62)/.16;Lt=Se,Xt=.95*Se,bt=.1+Se*1.55}else if(Ne>=.78&&Ne<.84)Lt=1,Xt=.95,bt=1.65;else if(Ne>=.84&&Ne<.92){const Se=(Ne-.84)/.08;Lt=1-Se,Xt=.95*(1-Se),bt=1.65+Se*4.5}else Ne>=.92&&(Lt=0,Xt=0,bt=6.15);qn.scale.setScalar(bt),Qe.opacity=Xt,yt.opacity=Lt,ta.opacity=.55*Lt;let Ot=0,xt=40;if(Ne>=.62&&Ne<.84){const Se=Math.min(1,(Ne-.62)/.16);Ot=Se,xt=40*(1-Se)}else if(Ne>=.84&&Ne<.92){const Se=Math.min(1,(Ne-.84)/.08);Ot=Math.max(0,1-Se*1.5),xt=-Se*600}r.current&&(r.current.style.opacity=Ot.toString(),r.current.style.transform=`translateY(${xt}px)`,Ot>.1?r.current.style.pointerEvents="auto":r.current.style.pointerEvents="none");let Vt=0,In=0,ar=.1;if(Ne>=.9&&Ne<.98){const Se=(Ne-.9)/.08;Vt=Se,In=.95*Se,ar=.1+Se*1.6}else Ne>=.98&&(Vt=1,In=.95,ar=1.7);wt.scale.setScalar(ar),ra.opacity=In,_e.opacity=Vt,Re.opacity=.55*Vt;let lr=0,xi=40;if(Ne>=.9){const Se=Math.min(1,(Ne-.9)/.08);lr=Se,xi=40*(1-Se)}if(s.current&&(s.current.style.opacity=lr.toString(),s.current.style.transform=`translateY(${xi}px)`,lr>.1?s.current.style.pointerEvents="auto":s.current.style.pointerEvents="none"),Math.abs(Ne-Hp)>.001){Hp=Ne;const Se=Mt.attributes.color,Ge=Se.array;if(Ne<.3)for(let Ue=0;Ue<Ge.length;Ue++)Ge[Ue]=ct[Ue];else if(Ne<.45){const Ue=(Ne-.3)/.15;for(let ze=0;ze<Ge.length;ze++)Ge[ze]=ct[ze]+(Sn[ze]-ct[ze])*Ue}else if(Ne<.62)for(let Ue=0;Ue<Ge.length;Ue++)Ge[Ue]=Sn[Ue];else if(Ne<.82){const Ue=(Ne-.62)/.2;for(let ze=0;ze<Ge.length;ze++)Ge[ze]=Sn[ze]+(Pn[ze]-Sn[ze])*Ue}else if(Ne<.9)for(let Ue=0;Ue<Ge.length;Ue++)Ge[Ue]=Pn[Ue];else if(Ne<.98){const Ue=(Ne-.9)/.08;for(let ze=0;ze<Ge.length;ze++)Ge[ze]=Pn[ze]+(ai[ze]-Pn[ze])*Ue}else for(let Ue=0;Ue<Ge.length;Ue++)Ge[Ue]=ai[Ue];if(Se.needsUpdate=!0,Ne>=.26&&Ne<.44){const Ue=Math.min(1,(Ne-.26)/.18),ze=ce.attributes.color,Bt=ze.array;for(let J=0;J<Bt.length;J++)Bt[J]=qe[J]+(Xe[J]-qe[J])*Ue;ze.needsUpdate=!0;const dt=jt.attributes.color,Gt=dt.array;for(let J=0;J<Gt.length;J++)Gt[J]=ot[J]+(It[J]-ot[J])*Ue;dt.needsUpdate=!0;const tn=B.attributes.color,Et=tn.array;for(let J=0;J<Et.length;J++)Et[J]=R[J]+(x[J]-R[J])*Ue;tn.needsUpdate=!0}if(Ne>=.62&&Ne<.78){const Ue=Math.min(1,(Ne-.62)/.16),ze=Le.attributes.color,Bt=ze.array;for(let J=0;J<Bt.length;J++)Bt[J]=Be[J]+(Ve[J]-Be[J])*Ue;ze.needsUpdate=!0;const dt=Tt.attributes.color,Gt=dt.array;for(let J=0;J<Gt.length;J++)Gt[J]=se[J]+(ke[J]-se[J])*Ue;dt.needsUpdate=!0;const tn=rr.attributes.color,Et=tn.array;for(let J=0;J<Et.length;J++)Et[J]=ea[J]+(_l[J]-ea[J])*Ue;tn.needsUpdate=!0}if(Ne>=.9&&Ne<.98){const Ue=Math.min(1,(Ne-.9)/.08),ze=Vi.attributes.color,Bt=ze.array;for(let J=0;J<Bt.length;J++)Bt[J]=ia[J]+(Sl[J]-ia[J])*Ue;ze.needsUpdate=!0;const dt=V.attributes.color,Gt=dt.array;for(let J=0;J<Gt.length;J++)Gt[J]=L[J]+($[J]-L[J])*Ue;dt.needsUpdate=!0;const tn=je.attributes.color,Et=tn.array;for(let J=0;J<Et.length;J++)Et[J]=Ie[J]+(at[J]-Ie[J])*Ue;tn.needsUpdate=!0}}if(Li.rotation.y+=.001,$e>.01){const Se=Wi?yn.x*.22:0,Ge=Wi?-yn.y*.22:0;b.rotation.y+=(Se-b.rotation.y)*.06,b.rotation.x+=(Ge-b.rotation.x)*.06,b.rotation.z+=(0-b.rotation.z)*.06}if(Je>.01){const Se=-Math.PI/4.5,Ge=.08,Ue=Se+(Wi?yn.x*.3:0),ze=Ge+(Wi?-yn.y*.3:0);oe.rotation.y+=(Ue-oe.rotation.y)*.06,oe.rotation.x+=(ze-oe.rotation.x)*.06}if(Lt>.01){const Se=Math.PI/6,Ge=.1,Ue=Se+(Wi?yn.x*.35:0),ze=Ge+(Wi?-yn.y*.35:0);qn.rotation.y+=(Ue-qn.rotation.y)*.06,qn.rotation.x+=(ze-qn.rotation.x)*.06}if(Vt>.01){const Se=-Math.PI/6,Ge=.05,Ue=Se+(Wi?yn.x*.35:0),ze=Ge+(Wi?-yn.y*.35:0);wt.rotation.y+=(Ue-wt.rotation.y)*.06,wt.rotation.x+=(ze-wt.rotation.x)*.06}if(Wi){const Se=new z(yn.x,yn.y,.5);Se.unproject(c);const Ge=Se.sub(c.position).normalize(),Ue=-c.position.z/Ge.z,ze=c.position.clone().add(Ge.multiplyScalar(Ue));vi.lerp(ze,.1)}else vi.lerp(new z(-9999,-9999,-9999),.1);const vn=jv.getElapsedTime();if($e>.01){const Se=new z().copy(vi);b.worldToLocal(Se);const Ge=w.attributes.position,Ue=Ge.array,ze=6;for(let Bt=0;Bt<T;Bt++){const dt=Bt*3,Gt=P[dt],tn=P[dt+1],Et=P[dt+2],J=Gt-Se.x,te=tn-Se.y,ft=Et-Se.z,rt=Math.sqrt(J*J+te*te+ft*ft);let Qt=0,lt=0,Yt=0;if(rt<ze&&rt>.01){const et=1-rt/ze,qt=et*et*3.2,$t=Math.sin(vn*7.5+rt*4)*.35*et;Qt=J/rt*(qt+$t),lt=te/rt*(qt+$t),Yt=ft/rt*(qt+$t)}const Wt=.12;F[dt]+=(Qt-F[dt])*Wt,F[dt+1]+=(lt-F[dt+1])*Wt,F[dt+2]+=(Yt-F[dt+2])*Wt,Ue[dt]=Gt+F[dt],Ue[dt+1]=tn+F[dt+1],Ue[dt+2]=Et+F[dt+2]}Ge.needsUpdate=!0}if(Je>.01){const Se=new z().copy(vi);ne.worldToLocal(Se);const Ge=ce.attributes.position,Ue=Ge.array,ze=6;for(let J=0;J<Y;J++){const te=J*3,ft=xe[te],rt=xe[te+1],Qt=xe[te+2],lt=ft-Se.x,Yt=rt-Se.y,Wt=Qt-Se.z,et=Math.sqrt(lt*lt+Yt*Yt+Wt*Wt);let qt=0,$t=0,cn=0;if(et<ze&&et>.01){const Kn=1-et/ze,Zn=Kn*Kn*3.2,Qn=Math.sin(vn*7.5+et*4)*.35*Kn;qt=lt/et*(Zn+Qn),$t=Yt/et*(Zn+Qn),cn=Wt/et*(Zn+Qn)}const Kt=.12;Te[te]+=(qt-Te[te])*Kt,Te[te+1]+=($t-Te[te+1])*Kt,Te[te+2]+=(cn-Te[te+2])*Kt,Ue[te]=ft+Te[te],Ue[te+1]=rt+Te[te+1],Ue[te+2]=Qt+Te[te+2]}Ge.needsUpdate=!0;const Bt=new z().copy(vi);Zt.worldToLocal(Bt);const dt=jt.attributes.position,Gt=dt.array,tn=B.attributes.position,Et=tn.array;for(let J=0;J<ge;J++){const te=Ze[J],ft=te.ox-Bt.x,rt=te.oy-Bt.y,Qt=te.oz-Bt.z,lt=Math.sqrt(ft*ft+rt*rt+Qt*Qt);let Yt=0,Wt=0,et=0;if(lt<ze&&lt>.01){const $t=1-lt/ze,cn=$t*$t*3.2,Kt=Math.sin(vn*7.5+lt*4)*.35*$t;Yt=ft/lt*(cn+Kt),Wt=rt/lt*(cn+Kt),et=Qt/lt*(cn+Kt)}const qt=.12;te.rx+=(Yt-te.rx)*qt,te.ry+=(Wt-te.ry)*qt,te.rz+=(et-te.rz)*qt,te.x=te.ox+te.rx,te.y=te.oy+te.ry,te.z=te.oz+te.rz,Gt[J*3]=te.x,Gt[J*3+1]=te.y,Gt[J*3+2]=te.z}dt.needsUpdate=!0;for(let J=0;J<Nt.length;J++){const te=Nt[J],ft=Ze[te.a],rt=Ze[te.b];Et[J*6]=ft.x,Et[J*6+1]=ft.y,Et[J*6+2]=ft.z,Et[J*6+3]=rt.x,Et[J*6+4]=rt.y,Et[J*6+5]=rt.z}tn.needsUpdate=!0}if(Lt>.01){const Se=new z().copy(vi);N.worldToLocal(Se);const Ge=Le.attributes.position,Ue=Ge.array,ze=6;for(let J=0;J<de;J++){const te=J*3,ft=he[te],rt=he[te+1],Qt=he[te+2],lt=ft-Se.x,Yt=rt-Se.y,Wt=Qt-Se.z,et=Math.sqrt(lt*lt+Yt*Yt+Wt*Wt);let qt=0,$t=0,cn=0;if(et<ze&&et>.01){const Kn=1-et/ze,Zn=Kn*Kn*3.2,Qn=Math.sin(vn*7.5+et*4)*.35*Kn;qt=lt/et*(Zn+Qn),$t=Yt/et*(Zn+Qn),cn=Wt/et*(Zn+Qn)}const Kt=.12;ee[te]+=(qt-ee[te])*Kt,ee[te+1]+=($t-ee[te+1])*Kt,ee[te+2]+=(cn-ee[te+2])*Kt,Ue[te]=ft+ee[te],Ue[te+1]=rt+ee[te+1],Ue[te+2]=Qt+ee[te+2]}Ge.needsUpdate=!0;const Bt=new z().copy(vi);oi.worldToLocal(Bt);const dt=Tt.attributes.position,Gt=dt.array,tn=rr.attributes.position,Et=tn.array;for(let J=0;J<Fe;J++){const te=ue[J],ft=te.ox-Bt.x,rt=te.oy-Bt.y,Qt=te.oz-Bt.z,lt=Math.sqrt(ft*ft+rt*rt+Qt*Qt);let Yt=0,Wt=0,et=0;if(lt<ze&&lt>.01){const $t=1-lt/ze,cn=$t*$t*3.2,Kt=Math.sin(vn*7.5+lt*4)*.35*$t;Yt=ft/lt*(cn+Kt),Wt=rt/lt*(cn+Kt),et=Qt/lt*(cn+Kt)}const qt=.12;te.rx+=(Yt-te.rx)*qt,te.ry+=(Wt-te.ry)*qt,te.rz+=(et-te.rz)*qt,te.x=te.ox+te.rx,te.y=te.oy+te.ry,te.z=te.oz+te.rz,Gt[J*3]=te.x,Gt[J*3+1]=te.y,Gt[J*3+2]=te.z}dt.needsUpdate=!0;for(let J=0;J<_i.length;J++){const te=_i[J],ft=ue[te.a],rt=ue[te.b];Et[J*6]=ft.x,Et[J*6+1]=ft.y,Et[J*6+2]=ft.z,Et[J*6+3]=rt.x,Et[J*6+4]=rt.y,Et[J*6+5]=rt.z}tn.needsUpdate=!0}if(Vt>.01){const Se=new z().copy(vi);yl.worldToLocal(Se);const Ge=Vi.attributes.position,Ue=Ge.array,ze=6;for(let J=0;J<Zs;J++){const te=J*3,ft=sa[te],rt=sa[te+1],Qt=sa[te+2],lt=ft-Se.x,Yt=rt-Se.y,Wt=Qt-Se.z,et=Math.sqrt(lt*lt+Yt*Yt+Wt*Wt);let qt=0,$t=0,cn=0;if(et<ze&&et>.01){const Kn=1-et/ze,Zn=Kn*Kn*3.2,Qn=Math.sin(vn*7.5+et*4)*.35*Kn;qt=lt/et*(Zn+Qn),$t=Yt/et*(Zn+Qn),cn=Wt/et*(Zn+Qn)}const Kt=.12;Gi[te]+=(qt-Gi[te])*Kt,Gi[te+1]+=($t-Gi[te+1])*Kt,Gi[te+2]+=(cn-Gi[te+2])*Kt,Ue[te]=ft+Gi[te],Ue[te+1]=rt+Gi[te+1],Ue[te+2]=Qt+Gi[te+2]}Ge.needsUpdate=!0;const Bt=new z().copy(vi);Ce.worldToLocal(Bt);const dt=V.attributes.position,Gt=dt.array,tn=je.attributes.position,Et=tn.array;for(let J=0;J<G;J++){const te=ys[J],ft=te.ox-Bt.x,rt=te.oy-Bt.y,Qt=te.oz-Bt.z,lt=Math.sqrt(ft*ft+rt*rt+Qt*Qt);let Yt=0,Wt=0,et=0;if(lt<ze&&lt>.01){const $t=1-lt/ze,cn=$t*$t*3.2,Kt=Math.sin(vn*7.5+lt*4)*.35*$t;Yt=ft/lt*(cn+Kt),Wt=rt/lt*(cn+Kt),et=Qt/lt*(cn+Kt)}const qt=.12;te.rx+=(Yt-te.rx)*qt,te.ry+=(Wt-te.ry)*qt,te.rz+=(et-te.rz)*qt,te.x=te.ox+te.rx,te.y=te.oy+te.ry,te.z=te.oz+te.rz,Gt[J*3]=te.x,Gt[J*3+1]=te.y,Gt[J*3+2]=te.z}dt.needsUpdate=!0;for(let J=0;J<ve.length;J++){const te=ve[J],ft=ys[te.a],rt=ys[te.b];Et[J*6]=ft.x,Et[J*6+1]=ft.y,Et[J*6+2]=ft.z,Et[J*6+3]=rt.x,Et[J*6+4]=rt.y,Et[J*6+5]=rt.z}tn.needsUpdate=!0}const cr=new z().copy(vi);Li.worldToLocal(cr);const $n=vn*.25,li=Mt.attributes.position,oa=li.array,Xi=.085,Ml=.35,Si=9,Js=1+Ne*1.6;for(let Se=0;Se<gt;Se++){const Ge=Se*3,Ue=Me[Ge],ze=Me[Ge+1],Bt=Me[Ge+2],dt=Ue*Js,Gt=ze*Js,tn=Bt*Js,Et=Iu(dt*Xi,Gt*Xi,tn*Xi+$n)*Ml,J=Iu(Gt*Xi,tn*Xi,dt*Xi+$n*1.15)*Ml,te=Iu(tn*Xi,dt*Xi,Gt*Xi+$n*.9)*Ml,ft=dt+Et,rt=Gt+J,Qt=tn+te,lt=ft-cr.x,Yt=rt-cr.y,Wt=Qt-cr.z,et=Math.sqrt(lt*lt+Yt*Yt+Wt*Wt);let qt=0,$t=0,cn=0;if(et<Si&&et>.01){const Kn=1-et/Si,Zn=Kn*Kn*7.5,Qn=Math.sin(vn*5+et*3)*.55*Kn;qt=lt/et*(Zn+Qn),$t=Yt/et*(Zn+Qn),cn=Wt/et*(Zn+Qn)}const Kt=.08;Ar[Ge]+=(qt-Ar[Ge])*Kt,Ar[Ge+1]+=($t-Ar[Ge+1])*Kt,Ar[Ge+2]+=(cn-Ar[Ge+2])*Kt,oa[Ge]=ft+Ar[Ge],oa[Ge+1]=rt+Ar[Ge+1],oa[Ge+2]=Qt+Ar[Ge+2]}li.needsUpdate=!0,p.render()};Vp();const ex=re=>{for(const le of re){const{width:$e,height:be}=le.contentRect;c.aspect=$e/be,c.updateProjectionMatrix(),d.setSize($e,be),p.setSize($e,be)}},Gp=new ResizeObserver(re=>{window.requestAnimationFrame(()=>ex(re))});return Gp.observe(t.current),()=>{cancelAnimationFrame(zp),Gp.disconnect(),window.removeEventListener("mousemove",Fp),d.domElement.removeEventListener("mouseleave",Op),window.removeEventListener("scroll",kp),d.domElement&&d.domElement.remove(),Mt.dispose(),Ut.dispose(),w.dispose(),C.dispose(),ce.dispose(),K.dispose(),jt.dispose(),bn.dispose(),B.dispose(),q.dispose(),Le.dispose(),Qe.dispose(),Tt.dispose(),yt.dispose(),rr.dispose(),ta.dispose(),Vi.dispose(),ra.dispose(),V.dispose(),_e.dispose(),je.dispose(),Re.dispose()}},[]),_t.jsx("div",{className:"relative w-screen h-[750vh] bg-[#010001] select-none",children:_t.jsxs("div",{className:"fixed top-0 left-0 w-full h-screen overflow-hidden",children:[_t.jsx("div",{ref:t,className:"w-full h-full"}),_t.jsxs("div",{ref:e,className:"absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12 md:p-16 pointer-events-none select-none transition-opacity duration-150",style:{opacity:1},children:[_t.jsxs("div",{className:"flex justify-between items-start w-full mt-4 sm:mt-0",children:[_t.jsx("div",{style:{color:"#FFF",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:600,fontSize:"30px",lineHeight:"30px",textTransform:"capitalize"},className:"text-[30px] leading-[30px] tracking-tight",children:"SociTea"}),_t.jsx("div",{style:{color:"#FFF",textAlign:"center",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:400,lineHeight:"normal",textTransform:"uppercase"},className:"flex flex-col items-end space-y-2 sm:space-y-4 md:space-y-5 text-right text-[14px] sm:text-[18px] md:text-[22px]",children:["Features","Discover","Create","Extension","Download"].map(o=>_t.jsxs("div",{className:"flex items-center space-x-2 md:space-x-3 justify-end hover:text-[#B380DD] transition-colors cursor-pointer pointer-events-auto",onClick:()=>{const r={Features:"/features",Discover:"/discover",Create:"/create",Extension:"/extension",Download:"/download"};(window.top||window).location.assign(r[o]||"/")},children:[_t.jsx("span",{children:o}),_t.jsx("span",{className:"text-[#B380DD] font-bold",children:"•"})]},o))})]}),_t.jsx("div",{ref:n,className:"absolute bottom-6 sm:bottom-12 md:bottom-16 left-6 sm:left-12 md:left-16 right-6 sm:right-12 md:right-16 flex justify-start items-end mb-4 sm:mb-0 transition-opacity duration-150",style:{opacity:0},children:_t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full",children:[_t.jsx("div",{className:"max-w-xl",children:_t.jsxs("h1",{style:{color:"#FFF",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:600,textTransform:"capitalize"},className:"text-[52px] sm:text-[96px] md:text-[135px] leading-[50px] sm:leading-[92px] md:leading-[128px] whitespace-pre-line tracking-tight pointer-events-auto",children:["Discover.",`
`,"Create. Share."]})}),_t.jsx("div",{className:"max-w-md md:ml-auto",children:_t.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontFamily:"Anybody, sans-serif",fontWeight:300},className:"text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] tracking-normal pointer-events-auto",children:"SociTea is your AI-powered creative companion. Discover interesting ideas, turn them into engaging social content, and keep your drafts organized in one place."})})]})}),_t.jsx("div",{ref:i,className:"absolute bottom-6 sm:bottom-12 md:bottom-16 left-6 sm:left-12 md:left-16 right-6 sm:right-12 md:right-16 flex justify-start items-end mb-4 sm:mb-0 transition-opacity duration-150",style:{opacity:0,transform:"translateY(40px)",pointerEvents:"none"},children:_t.jsxs("h1",{style:{width:"1050px",maxWidth:"100%",color:"#FFF",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:600,textTransform:"capitalize"},className:"text-[42px] sm:text-[72px] md:text-[105px] leading-[44px] sm:leading-[72px] md:leading-[100px] whitespace-pre-line tracking-tighter pointer-events-auto",children:["Discover Ideas",`
`,"Worth Sharing"]})}),_t.jsx("div",{ref:r,className:"absolute bottom-6 sm:bottom-12 md:bottom-16 left-6 sm:left-12 md:left-16 right-6 sm:right-12 md:right-16 flex justify-start items-end mb-4 sm:mb-0 transition-opacity duration-150",style:{opacity:0,transform:"translateY(40px)",pointerEvents:"none"},children:_t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full",children:[_t.jsx("div",{className:"max-w-xl",children:_t.jsxs("h1",{style:{color:"#FFF",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:600,textTransform:"capitalize"},className:"text-[42px] sm:text-[72px] md:text-[105px] leading-[44px] sm:leading-[72px] md:leading-[100px] whitespace-pre-line tracking-tighter pointer-events-auto",children:["Turn Your Ideas",`
`,"Into Content"]})}),_t.jsx("div",{className:"max-w-md md:ml-auto",children:_t.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontFamily:"Anybody, sans-serif",fontWeight:300},className:"text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] tracking-normal pointer-events-auto",children:"Use AI-assisted content creation to transform rough thoughts and inspiration into engaging posts, captions, and other social content."})})]})}),_t.jsx("div",{ref:s,className:"absolute bottom-6 sm:bottom-12 md:bottom-16 left-6 sm:left-12 md:left-16 right-6 sm:right-12 md:left-16 flex justify-start items-end mb-4 sm:mb-0 transition-opacity duration-150",style:{opacity:0,transform:"translateY(40px)",pointerEvents:"none"},children:_t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full",children:[_t.jsxs("div",{className:"max-w-xl",children:[_t.jsxs("h1",{style:{color:"#FFF",fontFamily:"Anybody, sans-serif",fontStyle:"normal",fontWeight:600,textTransform:"capitalize"},className:"text-[42px] sm:text-[72px] md:text-[105px] leading-[44px] sm:leading-[72px] md:leading-[100px] whitespace-pre-line tracking-tighter pointer-events-auto",children:["Your Ideas.",`
`,"Your Voice."]}),_t.jsx("span",{className:"block text-xs uppercase tracking-[0.3em] text-[#B380DD] mt-4 font-mono font-semibold pointer-events-auto",children:"SociTea"})]}),_t.jsx("div",{className:"max-w-md md:ml-auto",children:_t.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontFamily:"Anybody, sans-serif",fontWeight:300},className:"text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px] tracking-normal pointer-events-auto",children:"Discover something interesting, create something meaningful, and bring your ideas to life with SociTea."})})]})})]})]})})}function TC(){return _t.jsx(_t.Fragment,{children:_t.jsx(EC,{})})}pv(document.getElementById("root")).render(_t.jsx(mr.StrictMode,{children:_t.jsx(TC,{})}));
