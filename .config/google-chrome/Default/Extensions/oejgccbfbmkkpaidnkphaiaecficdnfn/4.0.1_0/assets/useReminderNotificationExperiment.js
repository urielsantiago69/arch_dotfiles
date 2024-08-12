import{r as l,a as O}from"./intl.js";import{j as $}from"./queryClient.js";import{a as k,g as p}from"./errorReport.js";function E(r){let t=2166136261;const e=r.length;for(let s=0;s<e;s++)t^=r.charCodeAt(s),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return t>>>0}function v(r){return E(r)%1e3/1e3}function C(r){return r<=0?[]:new Array(r).fill(1/r)}function T(r,t){const e=v(r+"__"+t[0]);return e>=t[1]&&e<t[2]}function P(r,t){for(let e=0;e<t.length;e++)if(r>=t[e][0]&&r<t[e][1])return e;return-1}function S(r){try{const t=r.replace(/([^\\])\//g,"$1\\/");return new RegExp(t)}catch(t){console.error(t);return}}function U(r,t=1,e){t<0?t=0:t>1&&(t=1);const s=C(r);e=e||s,e.length!==r&&(e=s);const n=e.reduce((u,a)=>a+u,0);(n<.99||n>1.01)&&(e=s);let i=0;return e.map(u=>{const a=i;return i+=u,[a,a+t*u]})}function B(r,t,e){if(!t)return null;const s=t.split("?")[1];if(!s)return null;const n=s.replace(/#.*/,"").split("&").map(i=>i.split("=",2)).filter(([i])=>i===r).map(([,i])=>parseInt(i));return n.length>0&&n[0]>=0&&n[0]<e?n[0]:null}function M(r){try{return r()}catch(t){return console.error(t),!1}}const d={};function f(r,t){if("$or"in t)return w(r,t.$or);if("$nor"in t)return!w(r,t.$nor);if("$and"in t)return H(r,t.$and);if("$not"in t)return!f(r,t.$not);for(const[e,s]of Object.entries(t))if(!h(s,N(r,e)))return!1;return!0}function N(r,t){const e=t.split(".");let s=r;for(let n=0;n<e.length;n++)if(s&&typeof s=="object"&&e[n]in s)s=s[e[n]];else return null;return s}function q(r){return d[r]||(d[r]=new RegExp(r.replace(/([^\\])\//g,"$1\\/"))),d[r]}function h(r,t){if(typeof r=="string")return t+""===r;if(typeof r=="number")return t*1===r;if(typeof r=="boolean")return!!t===r;if(Array.isArray(r)||!R(r))return JSON.stringify(t)===JSON.stringify(r);for(const e in r)if(!G(e,t,r[e]))return!1;return!0}function R(r){const t=Object.keys(r);return t.length>0&&t.filter(e=>e[0]==="$").length===t.length}function Q(r){if(r===null)return"null";if(Array.isArray(r))return"array";const t=typeof r;return["string","number","boolean","object","undefined"].includes(t)?t:"unknown"}function m(r,t){if(!Array.isArray(r))return!1;const e=R(t)?s=>h(t,s):s=>f(s,t);for(let s=0;s<r.length;s++)if(r[s]&&e(r[s]))return!0;return!1}function G(r,t,e){switch(r){case"$eq":return t===e;case"$ne":return t!==e;case"$lt":return t<e;case"$lte":return t<=e;case"$gt":return t>e;case"$gte":return t>=e;case"$exists":return e?t!==null:t===null;case"$in":return e.includes(t);case"$nin":return!e.includes(t);case"$not":return!h(e,t);case"$size":return Array.isArray(t)?h(e,t.length):!1;case"$elemMatch":return m(t,e);case"$all":if(!Array.isArray(t))return!1;for(let s=0;s<e.length;s++){let n=!1;for(let i=0;i<t.length;i++)if(h(e[s],t[i])){n=!0;break}if(!n)return!1}return!0;case"$regex":try{return q(e).test(t)}catch{return!1}case"$type":return Q(t)===e;default:return console.error("Unknown operator: "+r),!1}}function w(r,t){if(!t.length)return!0;for(let e=0;e<t.length;e++)if(f(r,t[e]))return!0;return!1}function H(r,t){for(let e=0;e<t.length;e++)if(!f(r,t[e]))return!1;return!0}function o(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}const c=typeof window!="undefined"&&typeof document!="undefined";class J{constructor(t={}){o(this,"_renderer",null),o(this,"_trackedExperiments",new Set),o(this,"_trackedFeatures",{}),o(this,"debug",!1),o(this,"subscriptions",new Set),o(this,"_rtQueue",[]),o(this,"_rtTimer",0),o(this,"assigned",new Map),o(this,"_forcedFeatureValues",new Map),o(this,"_attributeOverrides",{}),this.context=t,c&&!t.disableDevTools&&(window._growthbook=this,document.dispatchEvent(new Event("gbloaded")))}render(){this._renderer&&this._renderer()}setFeatures(t){this.context.features=t,this.render()}setAttributes(t){this.context.attributes=t,this.render()}setAttributeOverrides(t){this._attributeOverrides=t,this.render()}setForcedVariations(t){this.context.forcedVariations=t||{},this.render()}setForcedFeatures(t){this._forcedFeatureValues=t,this.render()}getAttributes(){return{...this.context.attributes,...this._attributeOverrides}}getFeatures(){return this.context.features||{}}subscribe(t){return this.subscriptions.add(t),()=>{this.subscriptions.delete(t)}}getAllResults(){return new Map(this.assigned)}destroy(){this.subscriptions.clear(),this.assigned.clear(),this._trackedExperiments.clear(),this._trackedFeatures={},this._rtQueue=[],this._rtTimer&&clearTimeout(this._rtTimer),c&&window._growthbook===this&&delete window._growthbook}setRenderer(t){this._renderer=t}forceVariation(t,e){this.context.forcedVariations=this.context.forcedVariations||{},this.context.forcedVariations[t]=e,this.render()}run(t){const e=this._run(t,null);return this.fireSubscriptions(t,e),e}fireSubscriptions(t,e){const s=t.key,n=this.assigned.get(s);(!n||n.result.inExperiment!==e.inExperiment||n.result.variationId!==e.variationId)&&(this.assigned.set(s,{experiment:t,result:e}),this.subscriptions.forEach(i=>{try{i(t,e)}catch(u){console.error(u)}}))}trackFeatureUsage(t,e){if(e.source==="override")return;const s=JSON.stringify(e.value);if(this._trackedFeatures[t]!==s){if(this._trackedFeatures[t]=s,this.context.onFeatureUsage)try{this.context.onFeatureUsage(t,e)}catch{}!c||!window.fetch||(this._rtQueue.push({key:t,on:e.on}),this._rtTimer||(this._rtTimer=window.setTimeout(()=>{this._rtTimer=0;const n=[...this._rtQueue];this._rtQueue=[],this.context.realtimeKey&&window.fetch("https://rt.growthbook.io/?key=".concat(this.context.realtimeKey,"&events=").concat(encodeURIComponent(JSON.stringify(n))),{cache:"no-cache",mode:"no-cors"}).catch(()=>{})},this.context.realtimeInterval||2e3)))}}getFeatureResult(t,e,s,n,i=null,u=null){const a={value:e,on:!!e,off:!e,source:s,ruleId:n||""};return i&&(a.experiment=i),u&&(a.experimentResult=u),this.trackFeatureUsage(t,a),a}isOn(t){return this.evalFeature(t).on}isOff(t){return this.evalFeature(t).off}getFeatureValue(t,e){var s;return(s=this.evalFeature(t).value)!==null&&s!==void 0?s:e}feature(t){return this.evalFeature(t)}evalFeature(t){var e;if(this._forcedFeatureValues.has(t))return this.getFeatureResult(t,this._forcedFeatureValues.get(t),"override");if(!this.context.features||!this.context.features[t])return this.getFeatureResult(t,null,"unknownFeature");const s=this.context.features[t];if(s.rules)for(const n of s.rules){if(n.condition&&!this.conditionPasses(n.condition))continue;if("force"in n){if("coverage"in n){const{hashValue:a}=this.getHashAttribute(n.hashAttribute);if(!a||v(a+t)>n.coverage)continue}return this.getFeatureResult(t,n.force,"force",n.id)}if(!n.variations)continue;const i={variations:n.variations,key:n.key||t};"coverage"in n&&(i.coverage=n.coverage),n.weights&&(i.weights=n.weights),n.hashAttribute&&(i.hashAttribute=n.hashAttribute),n.namespace&&(i.namespace=n.namespace);const u=this._run(i,t);if(this.fireSubscriptions(i,u),u.inExperiment)return this.getFeatureResult(t,u.value,"experiment",n.id,i,u)}return this.getFeatureResult(t,(e=s.defaultValue)!==null&&e!==void 0?e:null,"defaultValue")}conditionPasses(t){return f(this.getAttributes(),t)}_run(t,e){const s=t.key,n=t.variations.length;if(n<2)return this.getResult(t,-1,!1,e);if(this.context.enabled===!1)return this.getResult(t,-1,!1,e);t=this.mergeOverrides(t);const i=B(s,this.getContextUrl(),n);if(i!==null)return this.getResult(t,i,!1,e);if(this.context.forcedVariations&&s in this.context.forcedVariations){const V=this.context.forcedVariations[s];return this.getResult(t,V,!1,e)}if(t.status==="draft"||t.active===!1)return this.getResult(t,-1,!1,e);const{hashValue:u}=this.getHashAttribute(t.hashAttribute);if(!u)return this.getResult(t,-1,!1,e);if(t.namespace&&!T(u,t.namespace))return this.getResult(t,-1,!1,e);if(t.include&&!M(t.include))return this.getResult(t,-1,!1,e);if(t.condition&&!this.conditionPasses(t.condition))return this.getResult(t,-1,!1,e);if(t.groups&&!this.hasGroupOverlap(t.groups))return this.getResult(t,-1,!1,e);if(t.url&&!this.urlIsValid(t.url))return this.getResult(t,-1,!1,e);const a=U(n,t.coverage||1,t.weights),b=v(u+s),y=P(b,a);if(y<0)return this.getResult(t,-1,!1,e);if("force"in t){var g;return this.getResult(t,(g=t.force)!==null&&g!==void 0?g:-1,!1,e)}if(this.context.qaMode)return this.getResult(t,-1,!1,e);if(t.status==="stopped")return this.getResult(t,-1,!1,e);const _=this.getResult(t,y,!0,e);return this.track(t,_),_}log(t,e){!this.debug||(this.context.log?this.context.log(t,e):console.log(t,e))}track(t,e){if(!this.context.trackingCallback)return;const s=t.key,n=e.hashAttribute+e.hashValue+s+e.variationId;if(!this._trackedExperiments.has(n)){this._trackedExperiments.add(n);try{this.context.trackingCallback(t,e)}catch(i){console.error(i)}}}mergeOverrides(t){const e=t.key,s=this.context.overrides;return s&&s[e]&&(t=Object.assign({},t,s[e]),typeof t.url=="string"&&(t.url=S(t.url))),t}getHashAttribute(t){const e=t||"id";let s="";return this._attributeOverrides[e]?s=this._attributeOverrides[e]:this.context.attributes?s=this.context.attributes[e]||"":this.context.user&&(s=this.context.user[e]||""),{hashAttribute:e,hashValue:s}}getResult(t,e,s,n){let i=!0;(e<0||e>=t.variations.length)&&(e=0,i=!1);const{hashAttribute:u,hashValue:a}=this.getHashAttribute(t.hashAttribute);return{featureId:n,inExperiment:i,hashUsed:s,variationId:e,value:t.variations[e],hashAttribute:u,hashValue:a}}getContextUrl(){return this.context.url||(c?window.location.href:"")}urlIsValid(t){const e=this.getContextUrl();if(!e)return!1;const s=e.replace(/^https?:\/\//,"").replace(/^[^/]*\//,"/");return!!(t.test(e)||t.test(s))}hasGroupOverlap(t){const e=this.context.groups||{};for(let s=0;s<t.length;s++)if(e[t[s]])return!0;return!1}}const A=l.exports.createContext({}),j=({children:r,growthbook:t})=>{const[e,s]=l.exports.useState(0);return l.exports.useEffect(()=>{if(!(!t||!t.setRenderer))return t.setRenderer(()=>{s(n=>n+1)}),()=>{t.setRenderer(()=>{})}},[t]),l.exports.createElement(A.Provider,{value:{growthbook:t}},r)},D=r=>{const t=new J(r);return{ABTestingProvider:({children:s})=>$(j,{growthbook:t,children:s}),abTester:t}};function F(r){var s;const{growthbook:t}=l.exports.useContext(A),e=l.exports.useRef((s=t==null?void 0:t._run(r))!=null?s:{featureId:null,value:r.variations[0],variationId:0,inExperiment:!1,hashUsed:!1,hashAttribute:r.hashAttribute||"id",hashValue:""});return l.exports.useEffect(()=>{t&&(e.current=t.run(r))}),e.current}const L=()=>F({key:"new-tab-discovery",variations:["control","settings"],active:window.browser===void 0}),{abTester:X,ABTestingProvider:Y}=D({trackingCallback(r,t){window.heap&&window.heap.track("experiment_viewed",{experiment_id:r.key,variation_id:t.value})}}),Z=()=>{const r=F({key:"reminder-notification",variations:["control","variant"],active:!p()});return O.useEffect(()=>{r.value==="variant"&&k.get("reminderManuallyEdited").then(t=>{t||k.set("remindersCheckEnabled",!0)})},[r.value]),r};export{Y as A,Z as a,X as b,L as u};
//# sourceMappingURL=useReminderNotificationExperiment.js.map
