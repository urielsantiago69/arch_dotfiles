import{b as n,B as p}from"./assets/browser-polyfill.js";import{e as d,D as h,a as l,b as B,d as x,c as H,T as A,i as T,f as V,g as Y,h as R,w as G}from"./assets/errorReport.js";import{a as f,f as M,s as b,c as J,b as L,d as k,l as K,r as Q,u as X,e as Z,g as tt,h as et,i as st,j as U}from"./assets/timeEntry.js";import{i as g,d as N}from"./assets/intl.js";import{c as at}from"./assets/stopTimeAtDayEnd.js";const P=async()=>{try{const s=(await f.me.projects.list(null)).data.reduce((e,a)=>({...e,[a.id]:a}),{});return n.exports.storage.local.set({projects:s}),s}catch(t){throw d(t),t}},nt=async(t,s)=>{try{const e=await n.exports.storage.local.get("projects"),{data:a}=await f.project.create(s,t);return await n.exports.storage.local.set({projects:{...e.projects,[a.id]:a}}),a}catch(e){throw d(e),e}},W=async()=>{try{const s=(await f.me.clients.list(null)).data.reduce((e,a)=>({...e,[a.id]:a}),{});return n.exports.storage.local.set({clients:s}),s}catch(t){throw d(t),t}},q=async()=>{try{const s=(await f.me.tasks.list(null)).data.reduce((e,a)=>({...e,[a.id]:a}),{});return n.exports.storage.local.set({tasks:s}),s}catch(t){throw d(t),t}},z=async()=>{try{const s=(await f.me.tags.list(null)).data.reduce((e,a)=>({...e,[a.id]:a}),{});return n.exports.storage.local.set({tags:s}),s}catch(t){throw d(t),t}},ot=async(t,s)=>{try{const e=await n.exports.storage.local.get("tags"),{data:a}=await f.tag.create(t,s);return await n.exports.storage.local.set({tags:{...e.tags,[a.id]:a}}),a}catch(e){throw d(e),e}},it=async()=>{try{await f.calendar.refreshEvents();const t=h.now().toISODate(),e=(await f.calendar.fetchCalendarIntegrationEvents(t,t)).data.events.sort((a,o)=>h.fromISO(a.start_time).toMillis()-h.fromISO(o.start_time).toMillis());return n.exports.storage.local.set({todayCalendarEvents:e}),e}catch(t){throw d(t),t}},rt=async()=>{try{const s=(await f.calendar.fetchCalendarIntegrations()).data;return n.exports.storage.local.set({calendarIntegrations:s}),s}catch(t){throw d(t),t}},m=N({startTimerWithDescription:{id:"contextMenu.startTimerWithDescription",defaultMessage:"Start timer with description"},startTimer:{id:"contextMenu.startTimer",defaultMessage:"Start timer"},disableTinyButton:{id:"contextMenu.disableTinyButton",defaultMessage:"Disable tiny button on this page"},enableTinyButton:{id:"contextMenu.enableTinyButton",defaultMessage:"Re-enable tiny button on this page"}}),F=(t,s)=>{t.menuItemId==="TrackExtension"||t.menuItemId==="TrackExtensionSelection"?lt(t,s):ct(t,s)},ct=async(t,s)=>{const e=await l.get("tinyButtonBlocklist"),a=B(s.url),o=!e.includes(a);o?await l.set("tinyButtonBlocklist",[...e,a]):await l.set("tinyButtonBlocklist",e.filter(i=>i!==a)),await n.exports.tabs.sendMessage(s.id,{type:o?"hide-tiny-button":"show-tiny-button"}),await n.exports.contextMenus.update("TrackExtensionDisableTinyButton",{title:o?g.formatMessage(m.enableTinyButton):g.formatMessage(m.disableTinyButton)})},lt=(t,s)=>{const e=h.now(),a=(t==null?void 0:t.selectionText)||s.title;M().then(o=>{const i={at:e.toISO(),billable:!1,description:a,duration:-parseInt((e.toMillis()/1e3).toFixed(0),10),start:e.toISO(),tags:[],tag_ids:[],workspace_id:o==null?void 0:o.default_workspace_id};b(i,{type:"contentScript"})})},dt=async t=>{const s=await l.get("showRightClickButton"),a=(await l.get("tinyButtonBlocklist")).includes(B(t.url||""));try{await n.exports.contextMenus.remove("TrackExtension")}catch{}try{await n.exports.contextMenus.remove("TrackExtensionSelection")}catch{}try{await n.exports.contextMenus.remove("TrackExtensionDisableTinyButton")}catch{}s&&(n.exports.contextMenus.create({id:"TrackExtension",title:g.formatMessage(m.startTimer),contexts:["page"]}),n.exports.contextMenus.create({id:"TrackExtensionSelection",title:g.formatMessage(m.startTimerWithDescription)+" '%s'",contexts:["selection"]})),n.exports.contextMenus.create({id:"TrackExtensionDisableTinyButton",title:a?g.formatMessage(m.enableTinyButton):g.formatMessage(m.disableTinyButton),contexts:["page"]}),n.exports.contextMenus.onClicked.removeListener(F),n.exports.contextMenus.onClicked.addListener(F)},ut=t=>{n.exports.scripting.executeScript({target:{tabId:t},files:["./login.js"]})},v=async(t,s)=>{T("adding content scripts"),await n.exports.scripting.insertCSS({target:{tabId:t},files:["src/content/style.css"]}).catch(e=>d(e)),await n.exports.scripting.executeScript({target:{tabId:t},files:["src/content/index.js"]}).catch(e=>d(e)),n.exports.scripting.executeScript({target:{tabId:t},files:[`src/content/${s}`]}).catch(e=>d(e))},pt=async(t,s)=>{var y,w,S,_,D,j,C;if(s.url===void 0)return;try{if((await n.exports.tabs.sendMessage(t,{type:"ping"})).type==="pong")return}catch(u){x(u)}const e=H(s.url);if(e==="toggl.com"||e==="toggl.space")return ut(t);const a=await l.get("integrations"),o=await l.get("customIntegrations"),i=await l.get("customScripts"),r=B(s.url);if((!a||!a[e])&&!(o!=null&&o[r])&&!(i!=null&&i[r]))return;await M().catch(u=>d(u));const c=A[e];if(c){const u=(y=c==null?void 0:c.file)!=null?y:`${c.name.toLocaleLowerCase().replace(" ","-")}.js`;a&&a[e]&&v(t,u)}else if(((w=o==null?void 0:o[r])==null?void 0:w.name)||((S=o==null?void 0:o[r])==null?void 0:S.file)){const u=(D=(_=o==null?void 0:o[r])==null?void 0:_.file)!=null?D:`${o[r].name.toLocaleLowerCase().replace(" ","-")}.js`;u&&v(t,u)}if(i!=null&&i[r]){const u=r,O=(C=(j=i==null?void 0:i[u])==null?void 0:j.file)!=null?C:`${i[u].name.toLocaleLowerCase().replace(" ","-")}.js`;O&&v(t,O)}},gt=async(t,s)=>{if(s.url!==void 0){try{if((await p.tabs.sendMessage(t,{type:"ping-tiny-button"})).type==="pong-tiny-button")return}catch(e){x(e)}p.scripting.executeScript({target:{tabId:t},files:["src/tinyButton.js"]}).catch(e=>d(e))}},ft="toggl-track-icon-change",I=t=>n.exports.action.setIcon({path:t?{19:"images/icon-19.png",38:"images/icon-38.png"}:{19:"images/inactive-19.png",38:"images/inactive-38.png"}});n.exports.alarms.onAlarm.addListener(async t=>{if(t.name===ft){if(!await V.has("user"))return;J().then(e=>I(!!e)).catch(()=>I(!1))}});const yt={type:"popup"},ht=()=>{n.exports.windows.onRemoved.addListener(async function(){!await l.get("stopAutomatically")||n.exports.windows.getAll().then(async s=>{if(s.length<=0){const e=await n.exports.storage.local.get("timeEntries").then(a=>{const o=a.timeEntries;if(!!o)return Object.values(o).find(i=>i.duration<0)});if(!e)return;L(e,null)}})}),n.exports.windows.onCreated.addListener(async()=>{var r;if((await n.exports.windows.getAll()).length>1)return;const s=await k(),a=Object.values(s).pop();if(I(!!a&&a.duration<0),!await l.get("startAutomatically")||!a||a.duration<0)return;const i=h.now();b({...a,start:i,duration:-parseInt((i.toMillis()/1e3).toFixed(0),10),stop:void 0,tag_ids:(r=a.tag_ids)!=null?r:[]},yt)})},E=N({idleFor:{id:"idle.notifications.idleFor",defaultMessage:'You have been idle for {time} minutes while tracking "{description}"'},discardIdleButton:{id:"idle.notifications.discardIdleButton",defaultMessage:"Stop timer and discard idle time"},continue:{id:"idle.notifications.keepIdleButton",defaultMessage:"Discard idle time and continue"},timeEntryConstraints:{id:"idle.notifications.timeEntryConstraints",defaultMessage:"To stop the timer, add required {fields} field(s)."},requiredField:{id:"idle.notifications.requiredFields",defaultMessage:"{field, select, description {description} tag {tag} project {project} task {task} other {Unknown}}"}}),wt=60*5,$="idle-notification";async function mt(t){if(!await l.get("idleDetectionEnabled"))return;const e=await k(),a=Object.values(e).find(i=>(i==null?void 0:i.duration)<0);if(!a){await p.storage.local.set({lastIdleTimeEntry:null});return}const{lastIdleTimeEntry:o}=await p.storage.local.get("lastIdleTimeEntry");if((!o||o.timeEntryId!==a.id)&&p.storage.local.set({lastIdleTimeEntry:{since:h.now().toISO(),timeEntryId:a.id}}),t==="active"){const{lastIdleTimeEntry:i}=await p.storage.local.get("lastIdleTimeEntry");xt(a,i),p.storage.local.set({lastIdleTimeEntry:null})}}function xt(t,s){const e=h.now().diff(h.fromISO(s.since),"minutes").toObject();p.notifications.create($,{type:"basic",iconUrl:"images/icon-128.png",title:"Toggl Track",message:g.formatMessage(E.idleFor,{time:Math.ceil(e.minutes||0),description:t.description}),buttons:t?[{title:g.formatMessage(E.discardIdleButton)},{title:g.formatMessage(E.continue)}]:[]}),p.notifications.onButtonClicked.addListener((a,o)=>{if(a===$){const i=o===1;t&&L(t,s.since).then(()=>{var r,c;if(i){const y=new Date,w={at:y.toISOString(),billable:t.billable,description:t.description,duration:-parseInt((y.getTime()/1e3).toFixed(0),10),start:y.toISOString(),tags:(r=t.tags)!=null?r:[],tag_ids:(c=t.tag_ids)!=null?c:[],task_id:t.task_id,project_id:t.project_id,workspace_id:t.workspace_id};b(w,{type:"contentScript"})}})}})}function bt(){p.idle.setDetectionInterval(wt),p.idle.onStateChanged.addListener(mt)}ht();bt();at();n.exports.permissions.onAdded.addListener(t=>{var s;(s=t.origins)!=null&&s.includes("<all_urls>")&&l.set("integrations",Object.keys(A).reduce((e,a)=>(e[a]=!0,e),{})).then(()=>{l.set("tesListOnboardingStep","all_enabled")})});chrome.tabs.onUpdated.addListener(async(t,s,e)=>{var o,i,r;const a=await l.get("enableNewTabPage");(((o=e.url)==null?void 0:o.includes("chrome://"))||((i=e.url)==null?void 0:i.includes("edge://")))&&((r=e.url)==null?void 0:r.includes("newtab"))&&a&&n.exports.tabs.update(t,{url:n.exports.runtime.getURL("src/pages/newTab/index.html")})});n.exports.tabs.onUpdated.addListener(async(t,s,e)=>{const a=await l.get("enableTinyButton");s.status==="complete"&&(dt(e),pt(t,e),a&&gt(t,e))});n.exports.runtime.onInstalled.addListener(t=>{if(T("Service worker installed"),t.reason==="install")if(Y()){const s=n.exports.runtime.getURL("src/pages/dataConsent/index.html");n.exports.tabs.create({url:s})}else{const s=n.exports.runtime.getURL("src/pages/postInstallLP/index.html");n.exports.tabs.create({url:s})}t.reason==="update"&&l.get("showChangelog").then(s=>{if(s||s===void 0){const e=n.exports.runtime.getURL("settings.html");n.exports.tabs.create({url:e+"?update=true"})}})});n.exports.commands.onCommand.addListener(t=>{R(),G(function(){t==="quick-start-stop-entry"&&k().then(s=>{var a,o,i;const e=Object.values(s).sort((r,c)=>r.start>c.start?-1:c.start>r.start?1:0);if(((a=e[0])==null?void 0:a.duration)<0)L(e[0],null).then(()=>{chrome.runtime.sendMessage({type:"updateTEs"}).catch(r=>x(r))});else{const r=new Date,c=e[0],y={at:r.toISOString(),billable:!1,description:c.description,duration:-parseInt((r.getTime()/1e3).toFixed(0),10),start:r.toISOString(),tags:(o=c.tags)!=null?o:[],tag_ids:(i=c.tag_ids)!=null?i:[],project_id:c.project_id,workspace_id:c.workspace_id};b(y,{type:"contentScript"}).then(()=>{chrome.runtime.sendMessage({type:"updateTEs"}).catch(w=>x(w))})}}).catch(s=>x(s))})});const kt=()=>Promise.all([M(),U(),k(),P(),W(),q(),z()]);n.exports.runtime.onMessage.addListener(t=>{switch(R(),t.type){case"fetch-user":return M();case"fetch-timeEntries":return k();case"fetch-workspaces":return U();case"fetch-workspacePreferences":return st(t.payload.workspaceId);case"fetch-workspaceFeatures":return et();case"fetch-organizationFeatures":return tt();case"fetch-timeEntriesConstraints":return Z(t.payload.workspaceId);case"fetch-projects":return P();case"fetch-clients":return W();case"fetch-tasks":return q();case"fetch-tags":return z();case"create-tag":return ot(t.payload.name,t.payload.workspaceId);case"create-project":return nt(t.payload.project,t.payload.workspaceId);case"start-entry":return b(t.payload.entry,t.payload.from);case"update-entry":return X(t.payload.entry,t.payload.from);case"delete-entry":return Q(t.payload);case"today-calendar-events":return it();case"fetch-calendars":return rt();case"logout":K();break;case"change-action-icon":I(t.payload);break;case"activate":kt();break;case"testing":T("payload: ",t.payload);break;default:T("nothing")}});
//# sourceMappingURL=background.js.map
