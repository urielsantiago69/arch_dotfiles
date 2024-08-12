import"./assets/modulepreload-polyfill.js";import{n as r,j as t,c as u,e as y,a as N,f as F,Q as te,u as S,U as ne,a2 as oe,a3 as re,g as ie,a5 as ae,a7 as se,F as w,v as j,J as X,I as K,r as le,S as ce,a4 as de,C as pe,x as ue,b as ge,y as fe,d as he,z as me,E as xe,G as we,A as ve,R as be,H as ye}from"./assets/queryClient.js";import{r as x,d as C,i as ke,P as Te}from"./assets/intl.js";import{k as $e,u as A,c as B,g as H,s as _,e as W,n as _e,E as Ee,L as Se,l as Ce,m as Me}from"./assets/Login.js";import{e as q,t as D,a as I,D as $,N as U}from"./assets/errorReport.js";import{B as Z}from"./assets/browser-polyfill.js";const Ie=()=>t(Le,{hideSwitcher:!0,heapContext:"ntp-default"}),Le=r($e)`
  border-radius: 12px;
  padding: 10px;
  background-color: #fdece5;
  width: 100%;
`;function Q(e){return u(ze,{children:[t(Oe,{...e}),t("svg",{width:12,height:16,children:t("path",{d:"M0 2C0 0.9 0.8 0.5 1.7 1L11.3 7C12.2 7.5 12.2 8.5 11.3 9L1.7 15C0.8 15.5 0 15.1 0 14L0 2Z"})})]})}const ze=r.span`
  line-height: 0;
  padding-left: 1px;

  & path {
    fill: ${({theme:e})=>e.colors.ui.regular};
    opacity: 0.5;
  }

  &:hover path {
    fill: ${({theme:e})=>e.colors.accent.regular};
    opacity: 1;
  }
`,Oe=r.div`
  position: absolute;
  width: 12px;
  height: 16px;
`;r.span`
  font-weight: 600;
  font-size: 16px;
`;const De=r.div`
  line-height: 20px;
  font-size: 14px;
`,Y=e=>y`
  &::-webkit-scrollbar {
    width: 2px;
    background: ${e.colors.surface_primary.regular};
  }

  /* Turn off the down area up on top, and up area on bottom */
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: none;
  }

  /* The thumb itself */
  &::-webkit-scrollbar-thumb:vertical {
    background: ${e.colors.ui_60.regular};
  }
`;function Re(){const[e,n]=x.exports.useState({}),o=N(),{user:d}=A(),{mutate:g}=F(a=>W(a,{type:"popup"}),{onMutate:async a=>{await B(o);const p=H(o);return _(o,l=>{const c={};return l&&Object.assign(c,l),c[-1]={...a,id:-1},c}),{previousEntries:p}},onError:(a,p,l)=>{_(o,l==null?void 0:l.previousEntries),q(a)},onSuccess:(a,p,l)=>{D("start-time-entry",{context:"ntp-goal"});const c={...l==null?void 0:l.previousEntries,[a.id]:a};delete c[-1],_(o,c)}}),f=(a,p)=>{if(a.preventDefault(),!d)return;const l=new Date,c={at:l.toISOString(),description:p,duration:-parseInt((l.getTime()/1e3).toFixed(0),10),start:l.toISOString(),tags:[],tag_ids:[],workspace_id:d.default_workspace_id};g(c)};x.exports.useEffect(()=>{(async()=>{if(await I.get("newTabsPageOnboarded")){const l=await I.getLocal("newTab-todos"),c=JSON.parse(l),k=Object.values(c).reduce((i,s)=>{const h=$.fromISO(s.created_at);return($.now().diff(h,"days").days<1||!s.complete)&&(i[s.id]=s),i},{});n(k)}else I.setLocal("newTab-todos",JSON.stringify(U)),I.set("newTabsPageOnboarded",!0),n(U)})()},[]),x.exports.useEffect(()=>{Object.keys(e).length>0&&I.setLocal("newTab-todos",JSON.stringify(e))},[e]);const v=a=>n(p=>{const l=Object.keys(p),c=l.length?Number(l.sort()[l.length-1])+1:1;return{...p,[c]:{id:c,text:a,complete:!1,created_at:$.now().toISO()}}}),m=a=>{!e[a].complete&&D("ntp-complete-goal"),n(p=>({...p,[a]:{...p[a],complete:!p[a].complete}}))};return u(je,{children:[t(Ge,{onAddTodo:v}),t("ul",{children:Object.values(e).sort(a=>a.complete?1:-1).map(a=>u("li",{children:[t(te,{checked:a.complete,name:`todo-${a.id}`,onClick:()=>m(a.id)}),t("label",{htmlFor:`todo-${a.id}`,children:a.text}),t(Q,{title:"Track task",onClick:p=>f(p,a.text)})]},`todo-${a.id}`))})]})}function Ge({onAddTodo:e}){const[n,o]=x.exports.useState(""),d=S();return u(Pe,{onSubmit:f=>{f.preventDefault(),D("ntp-add-goal"),e(n),o("")},children:[t(ne,{color:d.colors.ui_50.regular}),t(Ne,{type:"text",placeholder:"Add a goal for today",value:n,onChange:f=>o(f.target.value)})]})}const je=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.ui.regular};

  ul {
    list-style: none;
    padding: 0;
    max-height: 40vh;
    overflow-y: auto;

    ${({theme:e})=>Y(e)};
  }

  li {
    display: flex;
    padding: 12px 4px;
    gap: 8px;
    cursor: pointer;
    align-items: center;

    input:checked + label {
      text-decoration: line-through;
    }

    svg {
      display: none;
    }

    input ~ svg {
      display: flex;
    }

    &:hover {
      svg {
        display: flex;
      }
    }
  }
`,Pe=r.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  padding: 0 15px;
  gap: 4px;
  border: 2px solid ${({theme:e})=>e.colors.ui_40.regular};
  border-radius: 8px;
  color: ${({theme:e})=>e.colors.ui_60.regular};
`,Ne=r.input`
  border: none;
  background: none;
  outline: none;
`;function Fe(){const[e,n]=x.exports.useState($.now());return x.exports.useEffect(()=>{const o=setInterval(()=>n($.now()),1e3);return()=>clearInterval(o)},[]),u(Ae,{children:[u(Be,{children:[t("div",{children:e.toFormat("cccc',' LLLL d")}),t(He,{children:`Week ${e.toFormat("W")}`})]}),t(We,{children:e.toLocaleString($.TIME_SIMPLE)}),t(Re,{})]})}const Ae=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  max-width: 450px;
  padding: 24px;
  gap: 24px;
  border-radius: 12px;
  background: #fae5f7;
  color: ${({theme:e})=>e.colors.ui.regular};
`,Be=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 600px;
  font-size: 14px;
`,He=r.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 11px;
`,We=r.div`
  font-family: GT Haptik, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
`,J=C({title:{id:"newTab.recentlyTracked.title",defaultMessage:"Recently Tracked"},placeholder:{id:"newTab.recentlyTracked.placeholder",defaultMessage:"No time entries yet.{br} Start the timer above \u261D\uFE0F and create {br} your first one!"}}),V=500,qe=(e,n,o)=>o.every(d=>`${e[d]}`.toLowerCase()===`${n[d]}`.toLowerCase()),Qe=(e,n)=>e.filter((o,d,g)=>d===g.findIndex(f=>qe(f,o,n))),Ue=()=>{const{timeEntries:e,workspaces:n,user:o,refetchEntries:d}=A(),[g,f]=x.exports.useState([]),v=N(),{data:m}=ie(),{data:a}=ae(),{data:p}=se(),{mutate:l}=F(i=>W(i,{type:"popup"}),{onMutate:async i=>{await B(v);const s=H(v);return _(v,h=>{const b={};return h&&Object.assign(b,h),b[-1]={...i,id:-1},b}),{previousEntries:s}},onError:(i,s,h)=>{_(v,h==null?void 0:h.previousEntries),q(i)},onSuccess:(i,s,h)=>{D("start-time-entry",{context:"ntp-history"});const b={...h==null?void 0:h.previousEntries,[i.id]:i};delete b[-1],_(v,b)}}),c=(i,s)=>{var T,M;if(i.preventDefault(),!o)return;const h=new Date,b={at:h.toISOString(),billable:s.billable,description:s.description,duration:-parseInt((h.getTime()/1e3).toFixed(0),10),start:h.toISOString(),tags:(T=s.tags)!=null?T:[],tag_ids:(M=s.tag_ids)!=null?M:[],task_id:s.task_id,project_id:s.project_id,workspace_id:s.workspace_id};l(b)};x.exports.useEffect(()=>{if(e){const s=Object.values(e).filter(T=>(T.project_id||T.description)&&T.stop),b=Qe(s,["description"]).filter(T=>{var M;return{...T,project_id:(M=m==null?void 0:m[`${T.project_id}`])!=null&&M.active?T.project_id:null}});f(b.reverse().slice(0,5))}},[p,m,a,e]),x.exports.useEffect(()=>{d()},[d]);const k=(i,s)=>{c(s,i)};return g!=null&&g.length?u(ee,{children:[t(w,{...J.title,tagName:Xe}),!!(g!=null&&g.length)&&t(j,{children:g.map(i=>{var s;return t(Je,{description:i.description,project:m==null?void 0:m[`${i.project_id}`],workspace:n==null?void 0:n[`${i.workspace_id}`],onClick:h=>k(i,h),client:p==null?void 0:p[`${(s=m==null?void 0:m[`${i.project_id}`])==null?void 0:s.client_id}`]},`te-${i.id}`)})})]}):t(Ve,{children:t(w,{...J.placeholder,tagName:De,values:{br:t("br",{})}})})},Je=x.exports.forwardRef(function({description:n,project:o,client:d,showClient:g=!1,workspace:f,onClick:v}){var i;const[m,a]=x.exports.useState(!1),p=x.exports.useRef(null);let l;return u(tt,{children:[u(Ke,{onClick:v,onMouseOver:()=>{l&&clearTimeout(l),l=setTimeout(()=>a(!0),V)},onMouseLeave:()=>{l&&clearTimeout(l),l=setTimeout(()=>a(!1),V/2)},ref:p,bgColor:(i=o&&o.color)!=null?i:void 0,children:[n&&t(Ze,{tooltip:!1,children:n}),o&&t(Ye,{color:o.color,tooltip:!1,children:o.name}),d&&g&&t(et,{tooltip:!1,children:d.name}),t(Q,{title:"Continue entry"})]}),m&&t(nt,{description:n,project:o,client:d,workspace:f,positionRef:p})]})}),ee=r.div`
  min-width: 200px;
  max-width: 370px;
  background-color: #fcf2fb;
  padding: 24px;
  border-radius: 12px;
`,Ve=r(ee)`
  text-align: center;
  gap: 8px;
  padding: 40px;
  color: ${({theme:e})=>e.colors.ui_60.regular};
`,Xe=r.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 11px;
  width: 100%;
  text-align: right;
  margin-bottom: 4px;
`,Ke=r.li`
  height: 36px;
  line-height: 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: pointer;

  padding: 8px 12px;
  margin: 2px 0;

  font-size: 14px;
  color: ${({theme:e})=>e.colors.ui.regular};
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  background-color: ${({bgColor:e,theme:n})=>{if(e){const{hue:o,lightness:d,saturation:g}=oe(e!=null?e:n.colors.surface_secondary.regular);return re({hue:o,saturation:g/1.8,lightness:d*1.8})}else return"#e9e7ea"}};

  svg {
    display: none;
    width: 16px;
    margin-left: 8px;
  }

  &:hover {
    svg {
      display: block;
    }
  }
`,Ze=r.span`
  ${e=>!e.tooltip&&`
  text-overflow: ellipsis;
  overflow: hidden;
`}

  margin-right: 25px;
  white-space: ${e=>e.tooltip?"normal":"nowrap"};
  font-size: ${e=>e.tooltip?"12px":"14px"};
  color: ${({theme:e})=>e.colors.ui.regular};
  font-weight: ${({theme:e})=>e.text.normal};
`,Ye=r.span`
  ${e=>!e.tooltip&&`
  text-overflow: ellipsis;
  overflow: hidden;
  `}

  white-space: ${e=>e.tooltip?"normal":"nowrap"};
  font-size: ${e=>e.tooltip?"12px":"14px"};
  font-weight: ${({theme:e})=>e.text.normal};
  color: ${e=>e.color};

  &:before {
    display: inline-block;
    margin: 0 8px 0px 4px;
    line-height: 1;

    content: '•';
    font-family: Arial, serif;
    font-size: 30px;
    font-weight: bold;
    color: ${e=>e.color};
    vertical-align: middle;
  }
`,et=r.span`
  font-size: ${e=>e.tooltip?"12px":"14px"};
  color: ${({theme:e})=>e.colors.ui_60.regular};
  font-weight: ${({theme:e})=>e.text.normal};
  white-space: ${e=>e.tooltip?"normal":"nowrap"};

  ${e=>!e.tooltip&&`
    text-overflow: ellipsis;
    overflow: hidden;
    padding-left: 15px;
    
    &: before {
    display: inline-block;
    margin: 0px 8px 0px 4px;
    line-height: 1;

    content: '\u2022';
    font-family: Arial, serif;
    font-size: 16px;
    font-weight: bold;
    color: ${({theme:n})=>n.colors.ui_60.regular};
    vertical-align: middle;
  }`}
`,tt=r.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nt=r(_e)`
  max-width: 200px;

  div[data-placement^='right'] {
    left: -10px;
  }
`,ot=()=>K({type:"today-calendar-events",payload:null}),rt=()=>K({type:"fetch-calendars",payload:null}),it=()=>X(["todayCalendarEvents"],ot,{staleTime:0}),at=()=>X(["calendarIntegrations"],rt,{staleTime:0}),O=C({title:{id:"newTab.calendarEvents.title",defaultMessage:"Today's Events"},link:{id:"newTab.calendarEvents.link",defaultMessage:"Open link"},noCalendarIntegrationsTitle:{id:"newTab.calendarEvents.noCalendarIntegrations",defaultMessage:"\u{1F640}\xA0No calendar integration!"},noCalendarIntegrationsDescription:{id:"newTab.calendarEvents.noCalendarIntegrationsDescription",defaultMessage:"Click on the button below to see your Google or Outlook calendar events on Toggl Track!"},noCalendarIntegrationsButton:{id:"newTab.calendarEvents.noCalendarIntegrationsButton",defaultMessage:"Get started!"},placeholder:{id:"newTab.calendarEvents.placeholder",defaultMessage:"\u{1F929} No meetings today! Enjoy the focus time"}});function st(){const e=S(),{data:n}=it(),{data:o}=at();return o!=null&&o.length?n!=null&&n.length?u(P,{children:[t(w,{...O.title,tagName:pt}),t(dt,{children:n.map(d=>t(ct,{event:d},`event-${d.calendar_event_id}`))})]}):t(P,{css:y`
          text-align: center;
          padding: 40px;
          color: ${e.colors.ui_60.regular};
        `,children:t(w,{...O.placeholder})}):t(lt,{})}function lt(){return u(P,{css:y`
        justify-content: center;
        align-items: center;
        font-size: 14px;
      `,children:[t(w,{...O.noCalendarIntegrationsTitle,tagName:ut}),t(w,{...O.noCalendarIntegrationsDescription,tagName:gt}),t(le,{"data-heap-id":"extension:ntp-integrate-cal",onClick:()=>Z.tabs.create({url:"https://track.toggl.com/profile#external-calendars"}),children:t(w,{...O.noCalendarIntegrationsButton})})]})}function ct({event:e}){const n=S(),o=N(),{user:d}=A(),g=$.fromISO(e.start_time),f=$.fromISO(e.end_time).diff(g,["hours","minutes"]).normalize(),v=f.hours&&f.hours>0?`${f.hours}h `:"",m=f.minutes&&f.minutes>0?`${f.minutes}min`:"",a=v+m,{mutate:p}=F(c=>W(c,{type:"popup"}),{onMutate:async c=>{await B(o);const k=H(o);return _(o,i=>{const s={};return i&&Object.assign(s,i),s[-1]={...c,id:-1},s}),{previousEntries:k}},onError:(c,k,i)=>{_(o,i==null?void 0:i.previousEntries),q(c)},onSuccess:(c,k,i)=>{D("start-time-entry",{context:"ntp-calendar"});const s={...i==null?void 0:i.previousEntries,[c.id]:c};delete s[-1],_(o,s)}}),l=(c,k)=>{if(c.preventDefault(),!d)return;const i=new Date,s={at:i.toISOString(),description:k,duration:-parseInt((i.getTime()/1e3).toFixed(0),10),start:i.toISOString(),tags:[],tag_ids:[],workspace_id:d.default_workspace_id};p(s)};return u(ft,{children:[u(ht,{children:[t(vt,{children:g.toLocaleString($.TIME_SIMPLE)}),t(mt,{children:e.title})]}),u(xt,{children:[t(wt,{children:a}),u("div",{children:[t(Q,{title:"Start entry",onClick:c=>l(c,e.title)}),t("a",{target:"_blank",tabIndex:-1,href:e.html_link,rel:"noreferrer",children:t(Ee,{color:n.colors.ui_50.regular})})]})]})]})}const P=r.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
  padding: 24px;
  gap: 24px;
  border-radius: 12px;
  background: #fff8e9;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.ui.regular};
`,dt=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  overflow-y: auto;
  max-height: 41vh;
  ${({theme:e})=>Y(e)}
`,pt=r.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 11px;
  width: 100%;
  text-align: right;
  margin-bottom: 4px;
`,ut=r.span`
  font-weight: 600;
  font-size: 16px;
`,gt=r.div`
  line-height: 20px;
`,ft=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  min-height: 96px;
  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.ui_40.regular};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
`,ht=r.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`,mt=r.div`
  max-width: 220px;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xt=r.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 11px;

  a {
    font-size: 14px;
    color: ${({theme:e})=>e.colors.grape_120.regular};
    line-height: 0;
  }

  & > div {
    display: flex;
    gap: 16px;

    & > * {
      cursor: pointer;

      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.accent.regular};
        }
      }
    }
  }
`,wt=r.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,vt=r.div`
  font-family: GT Haptik, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  white-space: nowrap;
`,R=C({webappLink:{id:"newTab.links.webappLink",defaultMessage:"Go to web app"},reportsLink:{id:"newTab.links.reportsLink",defaultMessage:"Reports"},extensionSettings:{id:"newTab.links.extensionSettings",defaultMessage:"Extension Settings"},kbLink:{id:"newTab.links.kbLink",defaultMessage:"Knowledge Base"}});function bt(){return u(yt,{children:[t(G,{target:"_blank",href:"https://track.toggl.com/timer?utm_source=toggl-button&utm_medium=referral",rel:"noreferrer","data-heap-id":"extension:ntp-to-webapp",children:t(w,{...R.webappLink})}),t(G,{target:"_blank",href:"https://track.toggl.com/reports/summary/",rel:"noreferrer","data-heap-id":"extension:ntp-to-reports",children:t(w,{...R.reportsLink})}),u(G,{target:"_blank",href:Z.runtime.getURL("settings.html"),rel:"noreferrer",children:[t(ce,{}),t(w,{...R.extensionSettings})]}),t(G,{target:"_blank",href:"https://support.toggl.com/en/articles/2206984-toggl-track-browser-extension",rel:"noreferrer",children:t(w,{...R.kbLink})})]})}const yt=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  color: ${({theme:e})=>e.colors.pale_peach.regular};
  font-size: 14px;
  margin-left: auto;
  z-index: 100000;
`,G=r.a`
  display: flex;
  gap: 12px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.pale_peach.regular};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.colors.pale_peach.hover};

    svg path {
      fill: ${({theme:e})=>e.colors.pale_peach.hover};
    }
  }
`;var kt=x.exports.memo(function({className:n}){const o=S();return u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 1440 1024",preserveAspectRatio:"none",className:n,children:[t("clipPath",{id:"a",children:t("path",{d:"M0 0h1440v1024H0z"})}),u("g",{clipPath:"url(#a)",children:[t("path",{fill:o.colors.ui.regular,d:"M0 0h1440v1024H0z"}),u("g",{fill:o.colors.ui_90.regular,children:[t("g",{css:E(),children:t("circle",{cx:151.5,cy:526.5,r:65.5})}),t("path",{css:E(),fillRule:"evenodd",d:"M1502.85 965.691c125.28 0 226.84-101.562 226.84-226.846 0-125.283-101.56-226.845-226.84-226.845C1377.56 512 1276 613.562 1276 738.845c0 125.284 101.56 226.846 226.85 226.846zM239.887 289.214c109.29 0 197.887-88.696 197.887-198.107C437.774-18.305 349.177-107 239.887-107S42-18.305 42 91.107c0 109.411 88.597 198.107 197.887 198.107zm0-100.892c53.631 0 97.107-43.525 97.107-97.215 0-53.691-43.476-97.216-97.107-97.216s-97.108 43.525-97.108 97.216c0 53.69 43.477 97.215 97.108 97.215z",clipRule:"evenodd"}),t("rect",{css:E(),width:203.569,height:199.611,rx:8,transform:"rotate(28.374 583.346 2449.1) skewX(-.025)"}),t("rect",{css:E(),width:89.11,height:89.851,rx:8,transform:"rotate(-13.739 3689.184 -978.733) skewX(-.025)"}),t("path",{css:E(),d:"M788.043 860.6c-7.314-2.403-9.284-11.822-3.546-16.954l232.263-207.758c5.73-5.132 14.87-2.129 16.45 5.406L1097 946.315c1.58 7.535-5.59 13.95-12.9 11.547zm192.971-723.111c-3.565 1.449-7.363-1.504-6.836-5.317l11.449-82.806c.527-3.812 4.984-5.625 8.022-3.262l65.991 51.318c3.04 2.363 2.38 7.129-1.19 8.579z"}),t("path",{css:E(),fillRule:"evenodd",d:"M250.417 846.111c1.673-.645 2.526-2.512 1.88-4.185-30.691-79.429-120.004-119.002-199.488-88.388-79.483 30.613-119.037 119.819-88.346 199.248.68 1.76 2.664 2.611 4.425 1.931l67.016-25.852c1.705-.658 2.51-2.603 1.852-4.308-15.06-38.978 4.35-82.753 43.354-97.776 39.004-15.023 82.832 4.397 97.893 43.374.643 1.664 2.502 2.541 4.167 1.898zM1304.56 444.09c-.31.641-.05 1.413.59 1.721 30.45 14.638 67.03 1.83 81.7-28.609 14.68-30.438 1.89-66.98-28.55-81.618a1.361 1.361 0 0 0-1.81.643l-12.36 25.676c-.31.654-.02 1.435.63 1.749 14.94 7.183 21.22 25.115 14.02 40.052s-25.15 21.222-40.09 14.039c-.64-.307-1.42-.055-1.72.582z",clipRule:"evenodd"})]}),t("g",{css:E(),filter:"url(#a)"})]})]})});const Tt=de`
  0% {
    scale: 1;
    rotate: 0deg;
    translate: 0 0;
  }

  50% {
    scale: 1.4;
    rotate: 20deg;
    translate: 10px 10px;
  }

  100% {
    scale: 1;
    rotate: 0deg;
    translate: 0 0;
  }
`,E=()=>y`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${Tt} ${Math.round(40+Math.random()*100)}s
      ease-in-out infinite;
  }

  animation-delay: ${Math.round(Math.random()*-200)}s;
  animation-direction: ${Math.random()>.5?"alternate":"alternate-reverse"};
  transform-origin: center;
`,L=C({morningGreeting:{id:"newTab.morningGreeting",defaultMessage:"Good morning, <em>{name}</em>"},afternoonGreeting:{id:"newTab.afternoonGreeting",defaultMessage:"Good afternoon, <em>{name}</em>"},eveningGreeting:{id:"newTab.eveningGreeting",defaultMessage:"Good evening, <em>{name}</em>"},nightGreeting:{id:"newTab.nightGreeting",defaultMessage:"Good night, <em>{name}</em>"}}),$t=e=>{const n=e.get("hour");switch(!0){case(n>=5&&n<12):return L.morningGreeting;case(n>=12&&n<18):return L.afternoonGreeting;case(n>=18&&n<22):return L.eveningGreeting;case(n>=22&&n<5):return L.nightGreeting;default:return L.nightGreeting}};function _t({username:e}){const n=$t($.now());return t(Et,{children:t(w,{...n,values:{em:o=>t("em",{children:o}),name:e!=null?e:"Stranger"}})})}const Et=r.div`
  font-family: GT Haptik, sans-serif;
  font-weight: 700;
  font-size: 45px;
  line-height: 160%;
  color: ${({theme:e})=>e.colors.pale_peach.regular};

  em {
    font-family: GT Haptik Rotalic, sans-serif;
    font-style: none;
  }
`,St=C({heading:{id:"newTab.login.heading",defaultMessage:"Click the button below to log in \u2014 so we can put a name to this lovely screen!"}}),Ct=()=>t(Mt,{children:t(Se,{hideSignup:!0,hideHeading:!0,customSubheading:t(w,{...St.heading,tagName:It})})}),Mt=r.div`
  border-radius: 12px;
  padding: 10px;
  background-color: #fdece5;
  width: 100%;

  & > div {
    background-color: #fdece5;
  }
`,It=r.div`
  font-weight: 500;
  font-size: 16px;
`,Lt=C({surveyMessage:{id:"newTab.surveyMessage",defaultMessage:"Help us improve this page. Take a quick survey."}});function zt({onClose:e}){const n=S();return u(Ot,{href:"https://toggl.typeform.com/to/ozhpbHyC",target:"_blank",rel:"noreferrer",children:[t(w,{...Lt.surveyMessage}),t(pe,{color:n.colors.ui_50.regular,onClick:o=>{o.preventDefault(),e()}})]})}const Ot=r.a`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 22px;
  background-color: ${({theme:e})=>e.colors.ui_90.regular};
  color: #fde5dc;

  font-size: 14px;
  text-decoration: none;
`,Dt=()=>{const e=S(),{data:n,refetch:o,isFetching:d,isLoading:g}=ue(),f=Ce(),[v,m]=x.exports.useState(!0),[a,p]=ge("surveyNTPTaken");return x.exports.useEffect(()=>{o()},[]),x.exports.useEffect(()=>{!d&&!g&&m(!1)},[g,d]),t(Me.Provider,{value:f,children:u(Rt,{children:[t(jt,{}),v?t(Pt,{children:t(fe,{size:64,color:e.colors.ui_50.regular})}):u(j,{children:[t(bt,{}),u(Gt,{children:[t("div",{css:y`
                  grid-column: span 3;
                `,children:t(_t,{username:n==null?void 0:n.fullname})}),n?u(j,{children:[t(z,{css:y`
                      grid-row: 2 / span 2;
                    `,children:t(Fe,{})}),t(z,{css:y`
                      grid-column: 2 / span 2;
                      width: 100%;

                      & > div > div,
                      input#timerDescription {
                        background-color: #fdece5;
                        box-shadow: none;
                      }
                    `,children:t(Ie,{})}),t(z,{css:y`
                      grid-row: 3 / span 2;
                    `,children:t(Ue,{})}),t(z,{css:y`
                      grid-row: 3 / span 2;
                    `,children:t(st,{})})]}):t(z,{css:y`
                    grid-column: span 3;
                  `,children:t(Ct,{})})]})]}),!a&&t(Nt,{children:t(zt,{onClose:()=>p(!0)})}),t(he,{css:y`
            position: absolute;
            bottom: 32px;
            left: 32px;
          `})]})})},Rt=r.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 20px 40px;
  color: ${({theme:e})=>e.colors.ui.regular};
  display: flex;
  justify-content: center;
  flex-direction: column;
`,Gt=r.div`
  display: grid;
  grid-template-columns: 350px 350px minmax(350px, 500px);
  grid-template-rows: 72px 130px 200px 1fr;
  gap: 32px;
  overflow: auto;
  width: 100%;
  z-index: 10;
  max-width: 1240px;
  height: 100%;
  padding: 0px 40px;

  @media (min-width: 1460px) {
    align-self: center;
    width: auto;
  }
`,z=r.div`
  height: fit-content;
`,jt=r(kt)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
`,Pt=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.surface_primary.regular};
`,Nt=r.div`
  position: absolute;
  bottom: 32px;
  left: calc(50% - 200px);
  z-index: 99999;
`;function Ft(){const e=document.querySelector("#__root");if(!e)throw new Error("Can't find Popup root element");me(e).render(u(ye,{client:xe,persistOptions:{persister:we},children:[t(Te,{value:ke,children:t(ve,{enforceColorScheme:"light",children:t(Dt,{})})}),t(be,{initialIsOpen:!1})]}))}Ft();
//# sourceMappingURL=newTab.js.map
