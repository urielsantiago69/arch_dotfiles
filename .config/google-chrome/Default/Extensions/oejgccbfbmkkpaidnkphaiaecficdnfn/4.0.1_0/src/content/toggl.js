var W=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_={exports:{}};(function(a,E){(function(c,b){b(a)})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:W,function(c){var b,S;if(!((S=(b=globalThis.chrome)==null?void 0:b.runtime)!=null&&S.id))throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser=="undefined"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const F="The message port closed before a response was received.",O=x=>{const k={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(k).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class P extends WeakMap{constructor(s,n=void 0){super(n),this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}const j=e=>e&&typeof e=="object"&&typeof e.then=="function",M=(e,s)=>(...n)=>{x.runtime.lastError?e.reject(new Error(x.runtime.lastError.message)):s.singleCallbackArg||n.length<=1&&s.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},h=e=>e==1?"argument":"arguments",B=(e,s)=>function(g,...i){if(i.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${h(s.minArgs)} for ${e}(), got ${i.length}`);if(i.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${h(s.maxArgs)} for ${e}(), got ${i.length}`);return new Promise((m,o)=>{if(s.fallbackToNoCallback)try{g[e](...i,M({resolve:m,reject:o},s))}catch(r){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,r),g[e](...i),s.fallbackToNoCallback=!1,s.noCallback=!0,m()}else s.noCallback?(g[e](...i),m()):g[e](...i,M({resolve:m,reject:o},s))})},N=(e,s,n)=>new Proxy(s,{apply(g,i,m){return n.call(i,e,...m)}});let w=Function.call.bind(Object.prototype.hasOwnProperty);const p=(e,s={},n={})=>{let g=Object.create(null),i={has(o,r){return r in e||r in g},get(o,r,A){if(r in g)return g[r];if(!(r in e))return;let t=e[r];if(typeof t=="function")if(typeof s[r]=="function")t=N(e,e[r],s[r]);else if(w(n,r)){let u=B(r,n[r]);t=N(e,e[r],u)}else t=t.bind(e);else if(typeof t=="object"&&t!==null&&(w(s,r)||w(n,r)))t=p(t,s[r],n[r]);else if(w(n,"*"))t=p(t,s[r],n["*"]);else return Object.defineProperty(g,r,{configurable:!0,enumerable:!0,get(){return e[r]},set(u){e[r]=u}}),t;return g[r]=t,t},set(o,r,A,t){return r in g?g[r]=A:e[r]=A,!0},defineProperty(o,r,A){return Reflect.defineProperty(g,r,A)},deleteProperty(o,r){return Reflect.deleteProperty(g,r)}},m=Object.create(e);return new Proxy(m,i)},T=e=>({addListener(s,n,...g){s.addListener(e.get(n),...g)},hasListener(s,n){return s.hasListener(e.get(n))},removeListener(s,n){s.removeListener(e.get(n))}}),U=new P(e=>typeof e!="function"?e:function(n){const g=p(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)}),R=new P(e=>typeof e!="function"?e:function(n,g,i){let m=!1,o,r=new Promise(d=>{o=function(l){m=!0,d(l)}}),A;try{A=e(n,g,o)}catch(d){A=Promise.reject(d)}const t=A!==!0&&j(A);if(A!==!0&&!t&&!m)return!1;const u=d=>{d.then(l=>{i(l)},l=>{let v;l&&(l instanceof Error||typeof l.message=="string")?v=l.message:v="An unexpected error occurred",i({__mozWebExtensionPolyfillReject__:!0,message:v})}).catch(l=>{console.error("Failed to send onMessage rejected reply",l)})};return u(t?A:r),!0}),D=({reject:e,resolve:s},n)=>{x.runtime.lastError?x.runtime.lastError.message===F?s():e(new Error(x.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):s(n)},L=(e,s,n,...g)=>{if(g.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${h(s.minArgs)} for ${e}(), got ${g.length}`);if(g.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${h(s.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((i,m)=>{const o=D.bind(null,{resolve:i,reject:m});g.push(o),n.sendMessage(...g)})},I={devtools:{network:{onRequestFinished:T(U)}},runtime:{onMessage:T(R),onMessageExternal:T(R),sendMessage:L.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:L.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},C={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return k.privacy={network:{"*":C},services:{"*":C},websites:{"*":C}},p(x,I,k)};c.exports=O(chrome)}else c.exports=globalThis.browser})})(_);const f=_.exports;let y;const $=localStorage.getItem("offline_users");$&&(y=JSON.parse(localStorage.getItem("offline_users-"+$)),y&&y.offlineData&&f.runtime.sendMessage({type:"userToken",apiToken:y.offlineData.api_token}).catch(a=>{throw new Error(a)}));(function(){const E=`window.TogglButton = { version: "${f.runtime.getManifest().version}" }`,c=document.createElement("script");c.textContent=E,document.body.appendChild(c)})();document.addEventListener("webkitvisibilitychange",function(){document.webkitHidden||f.runtime.sendMessage({type:"sync"}).catch(a=>{throw new Error(a)})});f.runtime.sendMessage({type:"sync"}).catch(a=>{throw new Error(a)});function q(){location.href=f.runtime.getURL("html/login.html?source=web-login")}function Z(a){if(a.source===window&&a.data&&a.data.direction==="from-public-web")switch(a.data.message){case"login-success":q();break;default:console.log("Unsupported event",a)}}window.addEventListener("message",Z);
