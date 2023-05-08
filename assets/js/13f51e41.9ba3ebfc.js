/*! For license information please see 13f51e41.9ba3ebfc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[766998],{584485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(824246),o=t(511151);const c={id:"backend-openapi-utils.internal.componentref",title:"internal.ComponentRef",description:"API reference for internal.ComponentRef"},a=void 0,i={unversionedId:"reference/backend-openapi-utils.internal.componentref",id:"reference/backend-openapi-utils.internal.componentref",title:"internal.ComponentRef",description:"API reference for internal.ComponentRef",source:"@site/../docs/reference/backend-openapi-utils.internal.componentref.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.componentref",permalink:"/docs/reference/backend-openapi-utils.internal.componentref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.componentref.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.componentref",title:"internal.ComponentRef",description:"API reference for internal.ComponentRef"}},u={},s=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,r.jsx)(n.code,{children:"internal"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.componentref",children:(0,r.jsx)(n.code,{children:"ComponentRef"})})]}),"\n",(0,r.jsx)(n.p,{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type ComponentRef<Doc extends RequiredDoc, Type extends ComponentTypes<Doc>, Ref extends ImmutableReferenceObject> = Ref extends {\n    $ref: `#/components/${Type}/${infer Name}`;\n} ? Name extends keyof Doc['components'][Type] ? Doc['components'][Type][Name] extends ImmutableReferenceObject ? ComponentRef<Doc, Type, Doc['components'][Type][Name]> : Doc['components'][Type][Name] : never : never;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["References:"," ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.requireddoc",children:"RequiredDoc"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.componenttypes",children:"ComponentTypes"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.immutablereferenceobject",children:"ImmutableReferenceObject"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.componentref",children:"ComponentRef"})]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))t.call(c,s)&&(i[s]=c[s]);if(n){a=n(c);for(var f=0;f<a.length;f++)r.call(c,a[f])&&(i[a[f]]=c[a[f]])}}return i}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,c={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:a.current}}n.jsx=s,n.jsxs=s},541535:(e,n,t)=>{var r=t(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,i=60110,u=60112;n.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),a=l("react.provider"),i=l("react.context"),u=l("react.forward_ref"),n.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function b(){}function v(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=v.prototype=new b;_.constructor=v,r(_,h.prototype),_.isPureReactComponent=!0;var j={current:null},k=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var r,c={},a=null,i=null;if(null!=n)for(r in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(a=""+n.key),n)k.call(n,r)&&!g.hasOwnProperty(r)&&(c[r]=n[r]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:j.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,t,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===r?"."+O(u,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),w(a,n,t,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=r+O(i=e[s],s);u+=w(i,n,t,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)u+=w(i=i.value,n,t,f=r+O(i,s++),a);else if("object"===i)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function S(e,n,t){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function P(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:S,forEach:function(e,n,t){S(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return S(e,(function(){n++})),n},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(d(143));return e}},n.Component=h,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var c=r({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,u=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in n)k.call(n,f)&&!g.hasOwnProperty(f)&&(c[f]=void 0===n[f]&&void 0!==s?s[f]:n[f])}var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:i,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=R,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return P().useCallback(e,n)},n.useContext=function(e,n){return P().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return P().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return P().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return P().useLayoutEffect(e,n)},n.useMemo=function(e,n){return P().useMemo(e,n)},n.useReducer=function(e,n,t){return P().useReducer(e,n,t)},n.useRef=function(e){return P().useRef(e)},n.useState=function(e){return P().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),r.createElement(o.Provider,{value:i},n)}}}]);