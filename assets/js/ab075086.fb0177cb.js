/*! For license information please see ab075086.fb0177cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[954191],{10202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),a=r(511151);const s={id:"v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0"},o=void 0,i={unversionedId:"releases/v1.6.0",id:"releases/v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0",source:"@site/../docs/releases/v1.6.0.md",sourceDirName:"releases",slug:"/releases/v1.6.0",permalink:"/docs/releases/v1.6.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.6.0.md",tags:[],version:"current",frontMatter:{id:"v1.6.0",title:"v1.6.0",description:"Backstage Release v1.6.0"},sidebar:"releases",previous:{title:"v1.7.0",permalink:"/docs/releases/v1.7.0"},next:{title:"v1.5.0",permalink:"/docs/releases/v1.5.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Moved to <code>swc</code> for transpilation",id:"moved-to-swc-for-transpilation",level:3},{value:"React Router Stable Compatibility",id:"react-router-stable-compatibility",level:3},{value:"Yarn 3 Support",id:"yarn-3-support",level:3},{value:"New plugin: <code>@backstage/plugin-user-settings-backend</code>",id:"new-plugin-backstageplugin-user-settings-backend",level:3},{value:"New plugin: <code>@backstage/plugin-playlist</code>",id:"new-plugin-backstageplugin-playlist",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.6.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsxs)(t.h3,{id:"moved-to-swc-for-transpilation",children:["Moved to ",(0,n.jsx)(t.code,{children:"swc"})," for transpilation"]}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve replaced ",(0,n.jsx)(t.code,{children:"sucrase"})," with ",(0,n.jsx)(t.a,{href:"https://swc.rs/",children:(0,n.jsx)(t.code,{children:"swc"})})," for transpilation in the Backstage CLI. While ",(0,n.jsx)(t.code,{children:"swc"})," has slightly slower transpilation times, it\u2019s a library backed by a larger community, and allows us to take advantage of ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-refresh",children:"React Refresh"})," out of the box. There\u2019s a few things that could possibly break installations of Backstage and compilation, you can read more about it in the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/515aadf8840591860e4bbdcc7d99cef8f9d7ac3c/docs/releases/v1.6.0-changelog.md#patch-changes-1",children:"changelog"})]}),"\n",(0,n.jsx)(t.h3,{id:"react-router-stable-compatibility",children:"React Router Stable Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["Backstage has for a long time been using React Router version ",(0,n.jsx)(t.code,{children:"6.0.0-beta.0"}),". We adopted this unstable version because v6 had some new features that fit really well with Backstage, particularly relative routing. Because we jumped on this early and unstable version, we knew that we would at some point need a breaking migration to the stable version of React Router v6, which is the point we're at now!"]}),"\n",(0,n.jsxs)(t.p,{children:["The migration is controlled by each app, meaning this release will not force you to migrate straight away, you can do so at your own pace. Check out the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/react-router-stable-migration",children:"migration guide"})," for all you need to know!"]}),"\n",(0,n.jsx)(t.h3,{id:"yarn-3-support",children:"Yarn 3 Support"}),"\n",(0,n.jsxs)(t.p,{children:["It is now possible to migrate Backstage projects to use Yarn 3. See the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/tutorials/yarn-migration",children:"migration guide"})," for more information. Migrating to Yarn 3 is optional, and Backstage projects created with ",(0,n.jsx)(t.code,{children:"@backstage/create-app"})," will still use classic Yarn by default."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-user-settings-backend",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-user-settings-backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"user-settings"})," plugin now has an associated backend. This allows for the persistence of settings in your database, essentially in the form of a basic per-user key-value JSON store."]}),"\n",(0,n.jsxs)(t.p,{children:["As this backend was added, ",(0,n.jsx)(t.code,{children:"user-settings"})," also gained a ",(0,n.jsx)(t.code,{children:"UserSettingsStore"})," class that implements the ",(0,n.jsx)(t.code,{children:"storageApiRef"})," Utility API. If you install the backend as well as this frontend API, your starred entities and other storage-API-based features will no longer just be persisted in your browser\u2019s local storage, but centrally so that all your devices can leverage them."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/dschwank",children:"@dschwank"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13570",children:"#13570"})]}),"\n",(0,n.jsxs)(t.h3,{id:"new-plugin-backstageplugin-playlist",children:["New plugin: ",(0,n.jsx)(t.code,{children:"@backstage/plugin-playlist"})]}),"\n",(0,n.jsx)(t.p,{children:"This plugin can be used to create custom collections of Entities that can be shared throughout Backstage or for private usage."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/12870",children:"#12870"})]}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsxs)(t.p,{children:["Be sure to upgrade to the latest version of ",(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"}),", as it contains an explicit bump of a transitive dependency where a vulnerability was discovered. If you subscribe to CVE notifications you will already have received this update."]}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.6.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))r.call(s,l)&&(i[l]=s[l]);if(t){o=t(s);for(var u=0;u<o.length;u++)n.call(s,o[u])&&(i[o[u]]=s[o[u]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),t.Fragment=s("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),a=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;a=d("react.element"),s=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var m=v.prototype=new b;m.constructor=v,n(m,y.prototype),m.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,s={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(s[n]=t[n]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===s[n]&&(s[n]=c[n]);return{$$typeof:a,type:e,key:o,ref:i,props:s,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return o=o(c=e),e=""===n?"."+R(c,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(o,t,r,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+R(i=e[l],l);c+=C(i,t,r,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,r,u=n+R(i,l++),o);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function B(){var e=P.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var s=n({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!w.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:a,type:e.type,key:o,ref:i,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const a=n.createContext({});function s(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||o:s(e),n.createElement(a.Provider,{value:i},t)}}}]);