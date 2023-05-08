/*! For license information please see 9e91adb1.092bb01c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[70570],{482794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var r=t(824246),o=t(511151);const c={id:"plugin-splunk-on-call.splunkoncallapi.getincidents",title:"SplunkOnCallApi.getIncidents()",description:"API reference for SplunkOnCallApi.getIncidents()"},i=void 0,u={unversionedId:"reference/plugin-splunk-on-call.splunkoncallapi.getincidents",id:"reference/plugin-splunk-on-call.splunkoncallapi.getincidents",title:"SplunkOnCallApi.getIncidents()",description:"API reference for SplunkOnCallApi.getIncidents()",source:"@site/../docs/reference/plugin-splunk-on-call.splunkoncallapi.getincidents.md",sourceDirName:"reference",slug:"/reference/plugin-splunk-on-call.splunkoncallapi.getincidents",permalink:"/docs/reference/plugin-splunk-on-call.splunkoncallapi.getincidents",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-splunk-on-call.splunkoncallapi.getincidents.md",tags:[],version:"current",frontMatter:{id:"plugin-splunk-on-call.splunkoncallapi.getincidents",title:"SplunkOnCallApi.getIncidents()",description:"API reference for SplunkOnCallApi.getIncidents()"}},l={},a=[];function s(e){const n=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-splunk-on-call"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallapi",children:(0,r.jsx)(n.code,{children:"SplunkOnCallApi"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.splunkoncallapi.getincidents",children:(0,r.jsx)(n.code,{children:"getIncidents"})})]}),"\n",(0,r.jsx)(n.p,{children:"Fetches a list of incidents"}),"\n",(0,r.jsx)(n.p,{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"getIncidents(): Promise<Incident[]>;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Returns:"}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-splunk-on-call.incident",children:"Incident"}),"[]>"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var a in c=Object(arguments[l]))t.call(c,a)&&(u[a]=c[a]);if(n){i=n(c);for(var s=0;s<i.length;s++)r.call(c,i[s])&&(u[i[s]]=c[i[s]])}}return u}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,s=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(s=n.ref),n)u.call(n,r)&&!l.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:s,props:c,_owner:i.current}}n.jsx=a,n.jsxs=a},541535:(e,n,t)=>{var r=t(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,u=60110,l=60112;n.Suspense=60113;var a=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),n.Fragment=f("react.fragment"),n.StrictMode=f("react.strict_mode"),n.Profiler=f("react.profiler"),i=f("react.provider"),u=f("react.context"),l=f("react.forward_ref"),n.Suspense=f("react.suspense"),a=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function v(){}function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=m.prototype=new v;k.constructor=m,r(k,g.prototype),k.isPureReactComponent=!0;var _={current:null},b=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,n,t){var r,c={},i=null,u=null;if(null!=n)for(r in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(i=""+n.key),n)b.call(n,r)&&!j.hasOwnProperty(r)&&(c[r]=n[r]);var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];c.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===c[r]&&(c[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:u,props:c,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,t,r,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return i=i(l=e),e=""===r?"."+C(l,0):r,Array.isArray(i)?(t="",null!=e&&(t=e.replace(w,"$&/")+"/"),x(i,n,t,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=r+C(u=e[a],a);l+=x(u,n,t,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),a=0;!(u=e.next()).done;)l+=x(u=u.value,n,t,s=r+C(u,a++),i);else if("object"===u)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function E(e,n,t){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function R(){var e=I.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:E,forEach:function(e,n,t){E(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},n.Component=g,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var c=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,l=_.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)b.call(n,s)&&!j.hasOwnProperty(s)&&(c[s]=void 0===n[s]&&void 0!==a?a[s]:n[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];c.children=a}return{$$typeof:o,type:e.type,key:i,ref:u,props:c,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:u,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=O,n.createFactory=function(e){var n=O.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:a,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>u,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function u({components:e,children:n,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||i:c(e),r.createElement(o.Provider,{value:u},n)}}}]);