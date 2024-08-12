import"../../../assets/modulepreload-polyfill.js";import{u as I,j as t,n as r,L as He,m as Le,a as W,b as Z,c,d as Ne,e as P,F as C,S as ze,f as Y,g as we,h as X,i as U,D as J,k as Ge,l as se,T as We,P as Fe,o as qe,p as Ve,q as Qe,r as Re,B as ee,s as Ue,t as fe,v as N,C as Je,w as Ke,x as Ye,A as Xe,y as et,z as tt,E as ot,G as nt,R as it,H as rt}from"../../../assets/queryClient.js";import{d as O,r as v,P as lt,i as st}from"../../../assets/intl.js";import{E as at,u as B,c as te,g as oe,s as S,a as dt,r as ct,b as ut,d as pt,D as gt,T as ft,U as ht,S as mt,e as ke,I as Me,f as vt,B as Ct,h as xt,i as bt,j as yt,k as Dt,l as Lt,L as wt,m as Rt}from"../../../assets/Login.js";import{b as z,B as G}from"../../../assets/browser-polyfill.js";import{u as kt,a as Mt,b as St,A as Tt}from"../../../assets/useReminderNotificationExperiment.js";import{e as ne,j as _t,t as ie,D as T,k as $t,a as Se,h as Et}from"../../../assets/errorReport.js";import{b as It}from"../../../assets/timeEntry.js";function Ot({color:e,size:n,...i}){const l=I();return t("svg",{width:n!=null?n:19,height:n!=null?n:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0c1.63 0 3.19.49 4.507 1.39A1 1 0 1 1 11.38 3.04a6 6 0 1 0 2.537 5.96L12.073 9c-.55 0-.734-.361-.415-.807l2.764-3.858c.322-.448.838-.446 1.157 0l2.763 3.858c.32.448.133.807-.415.807h-1.988A8.001 8.001 0 0 1 0 8a8 8 0 0 1 8-8Z",fill:e!=null?e:l.colors.pale_peach.regular})})}const ae=O({openSettings:{id:"header.links.openSettings",defaultMessage:"Open Settings"},sync:{id:"header.links.sync",defaultMessage:"Sync"},goToWebapp:{id:"header.links.goToWebapp",defaultMessage:"Open Toggl"}});function jt(){const e=W(),n=kt(),[i,l]=Z("enableNewTabPage"),[o,p]=Z("newTabPageDiscovered"),h=()=>{setTimeout(()=>{window==null||window.close()},100)};return c(Zt,{children:[t(Ne,{}),c(Pt,{children:[t(C,{...ae.goToWebapp,children:a=>t(Bt,{onClick:h,title:String(a),target:"_blank",tabIndex:-1,href:"https://track.toggl.com/timer?utm_source=toggl-button&utm_medium=referral",rel:"noreferrer",css:P`
                line-height: 0;
              `,children:t(at,{})})}),t(C,{...ae.sync,children:a=>t(he,{onClick:()=>e.refetchQueries(),title:String(a),children:t(Ot,{})})}),t(C,{...ae.openSettings,children:a=>c(he,{onClick:()=>z.exports.tabs.create({url:z.exports.runtime.getURL("settings.html")}),title:String(a),children:[t(ze,{}),n.value==="settings"&&!i&&!o&&t(At,{})]})})]})]})}const Zt=r.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  padding: 0 8px;
  background-color: #2c1338;
  z-index: 10;
`,Pt=r.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  margin-left: auto;
  padding: 8px;
`,Bt=r(He)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background-color: ${Le.light.ui_90.regular};
  }
`,he=r.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  position: relative;

  &:hover {
    background-color: ${Le.light.ui_90.regular};
  }
`,At=r.div`
  position: absolute;
  width: 6px;
  height: 6px;
  top: 6px;
  right: 6px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.error.regular};
`,K=O({doneButton:{id:"editTimeEntry.doneButton",defaultMessage:"Done"},cancelButton:{id:"editTimeEntry.cancelButton",defaultMessage:"Cancel"},deleteButton:{id:"editTimeEntry.cancelButton",defaultMessage:"Delete"},billableText:{id:"editTimeEntry.billableText",defaultMessage:"Billable"}}),Ht=e=>{var pe,ge;const n=I(),i=W(),{user:l}=B(),{editingEntry:o,changeEditingEntry:p,changeView:h,timeEntriesConstraintsEnabled:a}=B(),{mutate:d}=Y(({entry:s,integration:D})=>dt(s,D),{onMutate:async({entry:s})=>{await te(i);const D=oe(i);return S(i,g=>({...g,[s.id]:s})),{previousEntries:D}},onError:(s,D,g)=>{S(i,g==null?void 0:g.previousEntries),ne(s)},onSuccess:(s,D,g)=>{h("default"),p(void 0),e.submitOrCancelCB&&e.submitOrCancelCB(),S(i,{...g==null?void 0:g.previousEntries,[s.id]:s})},onSettled:()=>{x(!1)}}),{mutate:u}=Y(s=>ct(s),{onMutate:async s=>{await te(i);const D=oe(i);return S(i,g=>(g==null||delete g[s.id],g)),{previousEntries:D}},onError:(s,D,g)=>{S(i,g==null?void 0:g.previousEntries),ne(s)},onSuccess:()=>{h("default"),p(void 0),e.submitOrCancelCB&&e.submitOrCancelCB()},onSettled:()=>{H(!1)}}),{data:b}=ut(o==null?void 0:o.workspace_id),{data:k}=we(),{data:f}=pt(),[E,x]=v.exports.useState(!1),[_,H]=v.exports.useState(!1),F=v.exports.useRef(null),[R,M]=v.exports.useState(!1),[y,L]=v.exports.useState(o==null?void 0:o.billable),[m,$]=v.exports.useState((pe=o==null?void 0:o.tag_ids)!=null?pe:[]),[w,re]=v.exports.useState(o==null?void 0:o.project_id),[q,_e]=v.exports.useState(o==null?void 0:o.task_id),[$e,ue]=v.exports.useState(X(o==null?void 0:o.start,o==null?void 0:o.stop)),[V,Ee]=v.exports.useState((ge=o==null?void 0:o.description)!=null?ge:""),Ie=v.exports.useMemo(()=>{var D;const s=k&&w?k[w].workspace_id:l==null?void 0:l.default_workspace_id;return(D=f&&Object.values(f).filter(g=>g.workspace_id===s||m.includes(Number(g.id))).sort((g,A)=>{var Q;return(Q=g==null?void 0:g.name)==null?void 0:Q.localeCompare(A==null?void 0:A.name)}))!=null?D:[]},[k,w,l==null?void 0:l.default_workspace_id,f,m]),Oe=s=>{!o||o.duration<0||p({...o,stop:Ue(o.start,fe(s.target.value).toMillis()/1e3),duration:fe(s.target.value).toMillis()/1e3})},je=(s,D)=>{if(!o||o.duration<0)return;const g=se(s),A=se(D),Q=A.diff(g,"seconds");p({...o,start:g.toISOString(),stop:A.toISOString(),duration:Q})};v.exports.useEffect(()=>{ue(X(o==null?void 0:o.start,o==null?void 0:o.stop))},[o]);const le=v.exports.useMemo(()=>_t(b,{description:V,project_id:w,task_id:q,tag_ids:m}),[b,m,w,q,V]),Ze=s=>{m!=null&&m.includes(s)?$(m.filter(D=>D!==s)):$([s,...m])},Pe=s=>{s.preventDefault(),o&&(x(!0),d({entry:{...o,description:V,billable:!!y,tag_ids:m,project_id:w,task_id:q,start:o.start,stop:o.stop,duration:o.duration},integration:e.fromIntegration}))},Be=s=>{s.preventDefault(),s.stopPropagation(),h("default"),e.submitOrCancelCB&&e.submitOrCancelCB()},Ae=s=>{s.preventDefault(),o&&(H(!0),u(o))};return t(Nt,{id:"homeRoot",children:c(zt,{children:[e.fromIntegration.type==="popup"&&!e.hideDurationInput&&t(U,{children:c(J,{onItemClick:s=>null,children:[t(J.Trigger,{children:t(Ge,{css:P`
                    border: none;
                  `,value:$e,onChange:s=>ue(s.target.value),onBlur:Oe})}),t(J.Overlay,{}),t(J.DateTimeContent,{children:t(gt,{start:o==null?void 0:o.start,stop:(o==null?void 0:o.stop)&&se(o.stop).format("HH:mm"),onDatesChange:je})})]})}),t(U,{children:t(We,{type:"text",placeholder:"What are you doing?",value:V,onKeyDown:s=>{s.stopPropagation()},onChange:s=>Ee(s.target.value)})}),t(Fe,{selectedProjectId:w,selectedTaskId:q,onChange:s=>{re(s.projectId),_e(s.taskId),L(s.billable)},maxHeight:276}),t(ft,{options:Ie,selectedIds:m,onChange:Ze,triggerText:m.length?m.map(s=>{var D;return(D=f==null?void 0:f[s])==null?void 0:D.name}).join(", "):"Add tags",maxHeight:238}),t(U,{children:c(qe,{children:[t(Ve,{children:t(C,{...K.billableText})}),t(Qe,{onChange:()=>L(!y),value:!!y})]})}),c(U,{ref:F,onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:[t(Re,{disabled:le.length>0,loading:E,onClick:Pe,children:t(C,{...K.doneButton})}),a(o.workspace_id)&&b&&le.length&&R?t(ht,{placement:"bottom",anchorRef:F,missingProps:le,onClick:()=>M(!1)}):void 0]}),c(Gt,{children:[t(ee,{onClick:Be,children:t(C,{...K.cancelButton})}),t(ee,{loading:_,css:P`
              color: ${n.colors.error.regular};
            `,onClick:Ae,children:t(C,{...K.deleteButton})})]})]})})},Nt=r.div`
  background-color: ${({theme:e})=>e.colors.surface_primary.regular};
  margin-bottom: 32px;
`,zt=r.div`
  display: flex;
  padding: 64px;
  height: 100vh;
  flex-direction: column;
`,Gt=r.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
`,me=O({today:{id:"summary.today",defaultMessage:"Today"},thisWeek:{id:"summary.thisWeek",defaultMessage:"Week total"}});function Wt({totals:e}){return c(Ft,{children:[c("div",{children:[t(C,{...me.today,tagName:ve}),e.today]}),c("div",{children:[t(C,{...me.thisWeek,tagName:ve}),e.week]})]})}const Ft=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;

  background-color: ${({theme:e})=>e.colors.surface_secondary.regular};
  color: ${({theme:e})=>e.colors.ui.regular};
  font-weight: ${({theme:e})=>e.text.bold};
  font-size: 11px;
`,ve=r.span`
  color: ${({theme:e})=>e.colors.ui_60.regular};
  text-transform: uppercase;
  margin-right: 8px;
`,qt=r.div`
  display: flex;
  align-items: center;

  color: ${({theme:e})=>e.colors.ui_50.regular};
  &:before {
    display: inline-block;
    margin: 0 7px 1px;
    line-height: 1;
    content: '•';
    font-family: ${({theme:e})=>e.font.arial};
    font-weight: ${({theme:e})=>e.text.bold};
    color: ${({theme:e})=>e.colors.ui_10.regular};
  }

  &:before {
    font-size: 26px;
  }

  color: ${({theme:e,color:n})=>n||e.colors.ui_10.regular};

  &:before {
    color: ${({theme:e,color:n})=>n||e.colors.ui_10.regular};
    margin: 0 5px 0 0;
  }
`;r.div`
  display: flex;
  align-items: center;

  color: ${({theme:e})=>e.colors.ui_50.regular};
  &:before {
    display: inline-block;
    margin: 0 7px 1px;
    line-height: 1;
    content: '•';
    font-family: ${({theme:e})=>e.font.arial};
    font-weight: ${({theme:e})=>e.text.bold};
    color: ${({theme:e})=>e.colors.ui_10.regular};
  }

  color: ${({theme:e,color:n})=>n||e.colors.ui_10.regular};

  &:before {
    color: ${({theme:e,color:n})=>n||e.colors.ui_10.regular};
    margin: 0 5px 0 0;
  }
`;function Vt(){const e=I();return t(Qt,{width:12,height:15,viewBox:"0 0.5 12 15",children:t("path",{fill:e.colors.ui.regular,d:"M3.334 7.318h5.334V5.273c0-.752-.26-1.395-.781-1.928a2.54 2.54 0 0 0-1.885-.799c-.737 0-1.366.266-1.885.799a2.653 2.653 0 0 0-.783 1.928v2.045zM12 8.341v6.136a.993.993 0 0 1-.291.725.952.952 0 0 1-.708.297H1a.955.955 0 0 1-.708-.297.998.998 0 0 1-.292-.725V8.341c0-.285.098-.525.292-.725A.96.96 0 0 1 1 7.318h.334V5.273c0-1.306.457-2.429 1.375-3.365C3.625.969 4.724.5 6.002.5c1.277 0 2.374.469 3.292 1.408.916.935 1.375 2.059 1.375 3.365v2.046h.333c.277 0 .513.1.708.297a1 1 0 0 1 .29.725z"})})}const Qt=r.svg`
  margin: 0 12px;
`,Ut=()=>t("div",{css:P`
        display: flex;
        align-self: center;
      `,children:t(Vt,{})});var Jt="/assets/empty_list.svg";const Kt=O({startTimer:{id:"clearerOnboarding.startTimer",defaultMessage:"Start the <i>timer</i>."}}),Yt=()=>{const e=I(),n=W(),{user:i}=B(),[l,o]=v.exports.useState(!1),{mutate:p}=Y(a=>ke(a,{type:"popup"}),{onMutate:async a=>{await te(n);const d=oe(n);return S(n,u=>{const b={};return u&&Object.assign(b,u),b[-1]={...a,id:-1},b}),{previousEntries:d}},onError:(a,d,u)=>{S(n,u==null?void 0:u.previousEntries),ne(a)},onSuccess:(a,d,u)=>{const b={...u==null?void 0:u.previousEntries,[a.id]:a};delete b[-1],S(n,b)}}),h=v.exports.useCallback(a=>{if(a.preventDefault(),!i)return;const d=new Date,u={at:d.toISOString(),billable:!1,description:"",duration:-parseInt((d.getTime()/1e3).toFixed(0),10),start:d.toISOString(),tags:[],tag_ids:[],workspace_id:i.default_workspace_id};ie("start-time-entry",{context:"clearer-onboarding-experiment"}),p(u)},[p,i]);return c(Xt,{children:[t(to,{theme:e,animate:l,onClick:()=>o(!0),onTransitionEnd:a=>l&&h(a),children:t(Me,{size:96})}),t(eo,{animate:l,children:t(C,{...Kt.startTimer,values:{i:a=>t("span",{css:P`
                  font-family: GT Haptik Rotalic, sans-serif;
                  font-weight: 500;
                `,children:a})}})})]})},Xt=r.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`,eo=r.span`
  color: ${({theme:e})=>e.colors.ui.regular};
  font-size: 45px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  ${({animate:e})=>e&&P`
      opacity: 0;
    `}
`,to=r(mt)`
  width: 106px;
  height: 106px;
  transition: all 0.3s ease-in-out;

  ${({animate:e})=>e&&P`
      transform: translate(180%, -155%) scale(0.3);
    `}
`,oo=O({emptyList:{id:"timeEntriesList.emptyList",defaultMessage:"Get ready to track time and boost your productivity!"}}),no="(no description)",io="(no project)",ro=e=>{const n=e.reduce((i,l)=>i.concat(l),[]).reduce((i,{duration:l})=>i+l,0);return X(T.now().minus({seconds:n}).toISO())},lo=e=>[...e].sort((n,i)=>n[0].start>i[0].start?-1:i[0].start>n[0].start?1:0).filter(n=>n.some(i=>i.duration>=0)).reduce((n,i)=>{const l=T.fromISO(i[0].start).toFormat("yyyy-MM-dd");return n[l]=n[l]||[],n[l].push(i),n},{});function so(e){const{timeEntries:n=[],projects:i={}}=e,{runningEntry:l}=B();if(n.length===0)return c(xe,{children:[t("div",{}),l?c(mo,{children:[t("img",{src:Jt,width:"177px",height:"179px"}),t(vo,{children:t(C,{...oo.emptyList})})]}):t(Yt,{})]});const o=lo(n);return t(xe,{children:t(Co,{children:Object.entries(o).map(([p,h],a)=>c(xo,{children:[c(yo,{children:[t("span",{children:T.fromISO(p).toFormat("EEE, d MMM")}),t("span",{children:ro(h)})]},`tegroup-${a}`),h.map((d,u)=>{const b=d[0].project_id&&i[d[0].project_id]||null;return t(ao,{timeEntries:d,project:b},`te-${a}-${u}`)})]},a))})})}function ao({timeEntries:e,project:n}){const{changeEditingEntry:i,changeView:l}=B(),[o,p]=v.exports.useState(!0),h=e[0],a=e.reduce((x,_)=>(_.duration>0&&(x+=_.duration),x),0),d=e.length,u=T.fromISO(e[e.length-1].start).toFormat("HH:mm"),b=d>1&&o,k=v.exports.useCallback(()=>p(x=>!x),[p]),f=(x,_)=>{x.preventDefault(),i(_),l("editEntry")},E=[d>1&&t(Ce,{renderHeader:!0,timeEntry:h,onRowClick:k,project:n,entriesCount:d,earliestStartTime:u,totalDuration:a},`grouped-${h.id}`)].concat((b?[]:e).map(x=>t(Ce,{renderHeader:!1,timeEntry:x,onRowClick:_=>f(_,x),project:n,indent:d>1},x.id)));return t(N,{children:E})}function Ce({timeEntry:e,onRowClick:n,project:i,renderHeader:l,entriesCount:o,earliestStartTime:p,totalDuration:h,indent:a}){const d=W(),u=I(),{workspacePreferences:b}=B(),{mutate:k}=Y(R=>ke(R,{type:"popup"}),{onMutate:async R=>{await te(d);const M=oe(d);return S(d,y=>{const L={};y&&Object.assign(L,y);const m=Object.values(L).find($=>$.duration<0);if(m){const $=new Date,w=new Date(m.start);L[m.id]={...m,stop:$.toISOString(),duration:Math.floor(($.getTime()-w.getTime())/1e3)}}return L[-1]={...R,id:-1},L}),{previousEntries:M}},onError:(R,M,y)=>{S(d,y==null?void 0:y.previousEntries),ne(R)},onSuccess:(R,M,y)=>{var $;const L={...y==null?void 0:y.previousEntries,[R.id]:R},m=Object.values(($=y==null?void 0:y.previousEntries)!=null?$:{}).find(w=>w.duration<0);if(m){const w=new Date,re=new Date(m.start);L[m.id]={...m,stop:w.toISOString(),duration:Math.floor((w.getTime()-re.getTime())/1e3)}}delete L[-1],S(d,L),ie("start-time-entry",{context:"History"})}}),f=b==null?void 0:b.report_locked_at,E=f&&T.fromISO(e.start)<T.fromISO(f),x=e.description,_=!!e.billable,H=e.tags&&e.tags.length>0?e.tags.join(", "):"",F=R=>{var L,m;R.preventDefault(),R.stopPropagation();const M=new Date,y={at:M.toISOString(),billable:e.billable,description:x,duration:-parseInt((M.getTime()/1e3).toFixed(0),10),start:M.toISOString(),tags:(L=e.tags)!=null?L:[],tag_ids:(m=e.tag_ids)!=null?m:[],task_id:e.task_id,project_id:e.project_id,workspace_id:e.workspace_id};k(y)};return c(bo,{onClick:E?void 0:n,indent:a,children:[E?t(Ut,{}):void 0,l&&o&&p&&t(co,{children:t(uo,{title:`${o} entries since ${p}`,children:o})}),c(Do,{children:[t(fo,{title:x&&x,children:x||t(Te,{children:no})}),t(ho,{project:i})]}),c(Lo,{children:[t(go,{duration:h||e.duration}),c(wo,{children:[_&&t(Ct,{}),H&&t(xt,{title:H}),t(po,{theme:u,onClick:F,tabIndex:0,children:t(Me,{})})]})]})]})}const co=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`,uo=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;

  border-radius: ${({theme:e})=>e.borderRadius};

  cursor: pointer;
  transition: background ease-in 0.05s, color ease-in 0.05s;

  border: 1px solid ${({theme:e})=>e.colors.surface_secondary.regular};
  background-color: ${({theme:e})=>e.colors.surface_primary.regular};
  color: ${({theme:e})=>e.colors.ui_60.regular};

  /* Changes from webapp */
  width: 24px;
  height: 24px;
  font-size: 14px;
`,po=r(vt)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  margin-right: 0px;

  cursor: pointer;
  user-select: none;

  border-radius: 50%;
  border: 3px solid transparent;
`;function go({duration:e}){if(typeof e!="number"||e<0)return null;const n=T.now().minus({seconds:e}).toISO();return t("div",{children:X(n)})}const fo=r.div`
  flex: 1;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({theme:e})=>e.colors.ui.regular};
`;function ho({project:e}){return t("div",{style:{overflow:"hidden"},children:e?t(qt,{color:e.color,children:t("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.name})}):t(Te,{children:io})})}const xe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 326px;
  margin-bottom: 16px;
`,mo=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,vo=r.p`
  color: ${({theme:e})=>e.colors.ui.regular};
  margin-top: 25px;
  font-size: 14px;
`,Te=r.span`
  color: ${({theme:e})=>e.colors.ui_60.regular};
`,Co=r.div`
  margin: 0;
`,xo=r.div`
  margin-top: 15px;
  background: ${({theme:e})=>e.colors.surface_primary.regular};
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px 0px;

  &:first-of-type {
    margin-top: 0;
  }
`,bo=r.li`
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  padding: 10px 15px;
  ${({indent:e})=>e?"padding-left: 53px;":""}

  font-size: 14px;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${({theme:e})=>e.colors.surface_secondary.regular};
  }

  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface_secondary.hover};
  }
`,yo=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  height: 25px;
  color: ${({theme:e})=>e.colors.ui.regular};
  font-weight: ${({theme:e})=>e.text.bold};
  font-size: 12px;
`,Do=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  padding-right: 10px;
  overflow: hidden;

  > * {
    display: flex;
    align-items: center;
    height: 22px;
  }
`,Lo=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({theme:e})=>e.colors.ui.regular};

  > * {
    height: 22px;
    display: flex;
    align-items: center;
  }
`,wo=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > * {
    margin: 0 0.25rem;
  }
`,Ro=e=>([n])=>T.fromISO(n.start).hasSame(T.fromISO(e.start),"day")&&n.description===e.description&&n.project_id===e.project_id&&n.task_id===e.task_id&&n.workspace_id===e.workspace_id&&(n.tags||[]).join(",")===(e.tags||[]).join(",")&&n.billable===e.billable,ko=(e,n)=>{const{listEntries:i,projects:l}=[...e].reverse().reduce((o,p)=>{if(p.duration<0)return o;const h=o.listEntries.findIndex(Ro(p));h===-1?o.listEntries.push([p]):(o.listEntries[h].push(p),o.listEntries[h].sort((d,u)=>d.start>u.start?-1:u.start>d.start?1:0));const a=p.project_id?n==null?void 0:n[p.project_id]:null;return a&&(o.projects[a.id]=a),o},{listEntries:[],projects:{}});return{listEntries:i,projects:l}},Mo=1e3;function So(e,n){const[i,l]=v.exports.useState(To(e,n)),o=v.exports.useCallback(()=>{l(Math.max(i-1,0))},[l,i]);return bt(o,Mo),i}function To(e,n){const i=n*60,l=Math.floor(Math.max(T.now().diff(T.fromISO(e),"seconds").seconds,0));return i-l}const _o=({onClick:e,...n})=>{const i=I();return c("svg",{viewBox:"0 0 211 212",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e,...n,children:[t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M118.028 205.17C118 204.906 118.192 204.669 118.456 204.641C118.721 204.614 118.957 204.805 118.985 205.07L119.488 209.857C119.516 210.121 119.324 210.358 119.06 210.386C118.796 210.414 118.559 210.222 118.531 209.957L118.028 205.17Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M143.461 198.725C143.353 198.482 143.462 198.198 143.705 198.09C143.948 197.981 144.232 198.091 144.34 198.334L146.298 202.731C146.406 202.974 146.297 203.258 146.054 203.366C145.811 203.474 145.527 203.365 145.419 203.122L143.461 198.725Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M130.985 202.677C130.926 202.418 131.087 202.16 131.346 202.1C131.605 202.04 131.864 202.202 131.923 202.461L133.006 207.151C133.066 207.41 132.905 207.668 132.646 207.728C132.387 207.788 132.128 207.626 132.068 207.367L130.985 202.677Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M165.871 185.336C165.711 185.124 165.753 184.822 165.965 184.662C166.178 184.502 166.48 184.544 166.64 184.756L169.536 188.601C169.696 188.813 169.654 189.115 169.442 189.275C169.229 189.435 168.928 189.392 168.768 189.18L165.871 185.336Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M184.256 167.136C184.047 166.972 184.01 166.67 184.173 166.46C184.337 166.251 184.639 166.214 184.849 166.378L188.642 169.341C188.851 169.505 188.889 169.807 188.725 170.017C188.561 170.226 188.259 170.263 188.049 170.1L184.256 167.136Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M176.024 177.204C175.839 177.013 175.844 176.708 176.035 176.524C176.227 176.339 176.531 176.344 176.716 176.535L180.06 179.998C180.244 180.189 180.239 180.494 180.048 180.678C179.857 180.863 179.552 180.858 179.367 180.667L176.024 177.204Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M197.799 145.011C197.551 144.915 197.427 144.637 197.522 144.389C197.617 144.14 197.896 144.017 198.144 144.112L202.638 145.837C202.886 145.932 203.01 146.21 202.914 146.459C202.819 146.707 202.541 146.831 202.293 146.736L197.799 145.011Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M204.566 119.442C204.302 119.41 204.114 119.17 204.147 118.906C204.179 118.642 204.419 118.455 204.683 118.487L209.461 119.074C209.725 119.106 209.912 119.346 209.88 119.61C209.848 119.874 209.607 120.061 209.343 120.029L204.566 119.442Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M202.147 131.998C201.89 131.929 201.737 131.665 201.806 131.408C201.875 131.151 202.139 130.999 202.396 131.068L207.045 132.314C207.302 132.382 207.454 132.646 207.385 132.903C207.317 133.16 207.053 133.312 206.796 133.243L202.147 131.998Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M204.699 93.3318C204.436 93.3688 204.192 93.1854 204.155 92.9221C204.118 92.6589 204.302 92.4155 204.565 92.3785L209.331 91.7086C209.595 91.6716 209.838 91.855 209.875 92.1182C209.912 92.3815 209.729 92.6249 209.465 92.6619L204.699 93.3318Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M198.181 68.0327C197.938 68.1408 197.653 68.0316 197.545 67.7887C197.437 67.5459 197.546 67.2613 197.789 67.1532L202.186 65.1954C202.429 65.0873 202.714 65.1965 202.822 65.4394C202.93 65.6822 202.821 65.9667 202.578 66.0749L198.181 68.0327Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M202.381 80.2108C202.124 80.2751 201.862 80.1181 201.798 79.8602C201.734 79.6022 201.891 79.341 202.149 79.2767L206.819 78.1122C207.077 78.0479 207.338 78.2049 207.402 78.4628C207.467 78.7208 207.31 78.982 207.052 79.0463L202.381 80.2108Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M185.291 45.1728C185.07 45.3214 184.771 45.2633 184.623 45.0429C184.474 44.8225 184.532 44.5233 184.752 44.3747L188.743 41.683C188.963 41.5344 189.262 41.5925 189.411 41.8129C189.56 42.0333 189.502 42.3325 189.281 42.4811L185.291 45.1728Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M166.636 26.444C166.472 26.6535 166.17 26.6907 165.96 26.527C165.751 26.3633 165.714 26.0608 165.877 25.8514L168.841 22.0584C169.004 21.8489 169.307 21.8117 169.516 21.9754C169.726 22.1391 169.763 22.4416 169.599 22.651L166.636 26.444Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M176.698 35.1395C176.503 35.3208 176.199 35.3102 176.017 35.1158C175.836 34.9213 175.847 34.6168 176.041 34.4355L179.561 31.1527C179.756 30.9714 180.06 30.9821 180.242 31.1765C180.423 31.3709 180.412 31.6755 180.218 31.8568L176.698 35.1395Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M144.033 13.43C143.925 13.6729 143.641 13.7821 143.398 13.674C143.155 13.5658 143.046 13.2813 143.154 13.0384L145.112 8.64119C145.22 8.39833 145.504 8.28911 145.747 8.39724C145.99 8.50536 146.099 8.78989 145.991 9.03274L144.033 13.43Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M119.453 6.81614C119.435 7.08133 119.205 7.28127 118.939 7.26273C118.674 7.24419 118.474 7.01417 118.493 6.74898L118.829 1.94731C118.847 1.68212 119.077 1.48217 119.342 1.50072C119.608 1.51926 119.808 1.74927 119.789 2.01446L119.453 6.81614Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M131.971 9.24494C131.911 9.50396 131.653 9.66546 131.394 9.60566C131.135 9.54586 130.973 9.28741 131.033 9.02838L132.116 4.33835C132.175 4.07932 132.434 3.91782 132.693 3.97762C132.952 4.03742 133.113 4.29588 133.054 4.5549L131.971 9.24494Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M92.7992 205.17C92.827 204.906 92.6352 204.669 92.3708 204.641C92.1064 204.614 91.8696 204.805 91.8418 205.07L91.3386 209.857C91.3108 210.121 91.5026 210.358 91.767 210.386C92.0314 210.414 92.2682 210.222 92.296 209.957L92.7992 205.17Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M67.3662 198.725C67.4743 198.482 67.3651 198.198 67.1222 198.09C66.8794 197.981 66.5948 198.091 66.4867 198.334L64.5289 202.731C64.4208 202.974 64.53 203.258 64.7729 203.366C65.0157 203.474 65.3002 203.365 65.4084 203.122L67.3662 198.725Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M79.8416 202.677C79.9014 202.418 79.7399 202.16 79.4808 202.1C79.2218 202.04 78.9634 202.202 78.9036 202.461L77.8208 207.151C77.761 207.41 77.9225 207.668 78.1815 207.728C78.4405 207.788 78.699 207.626 78.7588 207.367L79.8416 202.677Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.9564 185.336C45.1164 185.124 45.074 184.822 44.8617 184.662C44.6494 184.502 44.3476 184.544 44.1876 184.756L41.2908 188.601C41.1308 188.813 41.1732 189.115 41.3855 189.275C41.5978 189.435 41.8996 189.392 42.0596 189.18L44.9564 185.336Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5709 167.136C26.7804 166.972 26.8175 166.67 26.6538 166.46C26.4902 166.251 26.1877 166.214 25.9782 166.378L22.1852 169.341C21.9757 169.505 21.9386 169.807 22.1022 170.017C22.2659 170.226 22.5684 170.263 22.7779 170.1L26.5709 167.136Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.8036 177.204C34.9882 177.013 34.9829 176.708 34.7917 176.524C34.6005 176.339 34.2957 176.344 34.1111 176.535L30.7674 179.998C30.5827 180.189 30.5881 180.494 30.7793 180.678C30.9705 180.863 31.2752 180.858 31.4599 180.667L34.8036 177.204Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.0281 145.011C13.2763 144.915 13.4002 144.637 13.3049 144.389C13.2097 144.14 12.9313 144.017 12.6831 144.112L8.18938 145.837C7.9412 145.932 7.81724 146.21 7.91251 146.459C8.00778 146.707 8.2862 146.831 8.53438 146.736L13.0281 145.011Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.26094 119.442C6.5248 119.41 6.71243 119.17 6.68003 118.906C6.64763 118.642 6.40747 118.455 6.14362 118.487L1.3661 119.074C1.10224 119.106 0.914606 119.346 0.947004 119.61C0.979401 119.874 1.21956 120.061 1.48342 120.029L6.26094 119.442Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.68062 131.998C8.9374 131.929 9.08978 131.665 9.02098 131.408C8.95218 131.151 8.68824 130.999 8.43146 131.068L3.78207 132.314C3.52529 132.382 3.37291 132.646 3.44171 132.903C3.51052 133.16 3.77445 133.312 4.03123 133.243L8.68062 131.998Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.12824 93.3318C6.39149 93.3688 6.63488 93.1854 6.67188 92.9221C6.70888 92.6589 6.52546 92.4155 6.26222 92.3785L1.49566 91.7086C1.23241 91.6716 0.989009 91.855 0.952011 92.1182C0.915014 92.3815 1.09843 92.6249 1.36168 92.6619L6.12824 93.3318Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.6462 68.0327C12.8891 68.1408 13.1736 68.0316 13.2817 67.7887C13.3899 67.5459 13.2806 67.2613 13.0378 67.1532L8.64053 65.1954C8.39767 65.0873 8.11315 65.1965 8.00502 65.4394C7.8969 65.6822 8.00612 65.9667 8.24897 66.0749L12.6462 68.0327Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.44543 80.2108C8.70337 80.2751 8.96461 80.1181 9.02892 79.8602C9.09323 79.6022 8.93626 79.341 8.67832 79.2767L4.0079 78.1122C3.74996 78.0479 3.48872 78.2049 3.42441 78.4628C3.3601 78.7208 3.51707 78.982 3.77501 79.0463L8.44543 80.2108Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.5364 45.1728C25.7568 45.3214 26.056 45.2633 26.2046 45.0429C26.3533 44.8225 26.2951 44.5233 26.0748 44.3747L22.0843 41.683C21.8639 41.5344 21.5647 41.5925 21.4161 41.8129C21.2674 42.0333 21.3256 42.3325 21.5459 42.4811L25.5364 45.1728Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.191 26.444C44.3547 26.6535 44.6572 26.6907 44.8667 26.527C45.0761 26.3633 45.1133 26.0608 44.9496 25.8514L41.9862 22.0584C41.8225 21.8489 41.52 21.8117 41.3106 21.9754C41.1011 22.1391 41.0639 22.4416 41.2276 22.651L44.191 26.444Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.1292 35.1395C34.3236 35.3208 34.6282 35.3102 34.8095 35.1158C34.9908 34.9213 34.9802 34.6168 34.7857 34.4355L31.2654 31.1527C31.071 30.9714 30.7664 30.9821 30.5851 31.1765C30.4038 31.3709 30.4145 31.6755 30.6089 31.8568L34.1292 35.1395Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M66.7938 13.43C66.9019 13.6729 67.1865 13.7821 67.4293 13.674C67.6722 13.5658 67.7814 13.2813 67.6733 13.0384L65.7155 8.64119C65.6073 8.39833 65.3228 8.28911 65.08 8.39724C64.8371 8.50536 64.7279 8.78989 64.836 9.03274L66.7938 13.43Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M91.3738 6.81614C91.3924 7.08133 91.6224 7.28127 91.8876 7.26273C92.1528 7.24419 92.3527 7.01417 92.3342 6.74898L91.9984 1.94731C91.9799 1.68212 91.7498 1.48217 91.4847 1.50072C91.2195 1.51926 91.0195 1.74927 91.0381 2.01446L91.3738 6.81614Z",fill:"#D5D0D7"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M78.8562 9.24494C78.916 9.50396 79.1745 9.66546 79.4335 9.60566C79.6925 9.54586 79.854 9.28741 79.7942 9.02838L78.7114 4.33835C78.6516 4.07932 78.3932 3.91782 78.1341 3.97762C77.8751 4.03742 77.7136 4.29588 77.7734 4.5549L78.8562 9.24494Z",fill:"#D5D0D7"}),t("rect",{x:"104.451",y:"0.5",width:"1.92536",height:"5.77608",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.0037 13.9454L51.4265 15.0498L54.7395 19.7813L56.3167 18.6769L53.0037 13.9454Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.7839 52.4847L13.7923 54.1351L18.7434 57.11L19.735 55.4596L14.7839 52.4847Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 104.951L0 106.876H5.77608V104.951H0Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.2537 156.625L18.205 155.01L13.3608 158.156L14.4094 159.771L19.2537 156.625Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.3168 192.555L54.6494 191.592L51.7613 196.594L53.4287 197.557L56.3168 192.555Z",fill:i.colors.ui.regular}),t("rect",{width:"1.92536",height:"5.77608",transform:"matrix(-1 0 0 1 106.376 205.551)",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M154.51 192.555L156.178 191.592L159.066 196.594L157.398 197.557L154.51 192.555Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M191.573 156.625L192.622 155.01L197.466 158.156L196.418 159.771L191.573 156.625Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M210.827 104.951V106.876H205.051V104.951H210.827Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M196.043 52.4847L197.035 54.1351L192.084 57.11L191.092 55.4596L196.043 52.4847Z",fill:i.colors.ui.regular}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M157.823 13.9454L159.4 15.0498L156.087 19.7813L154.51 18.6769L157.823 13.9454Z",fill:i.colors.ui.regular})]})},$o=O({pomodoroSettings:{id:"pomodoro.pomodoroSettings",defaultMessage:"<a>Pomodoro settings</a>"}}),Eo=e=>{const n=Math.floor(e/60),i=e%60,l=n.toString().padStart(2,"0"),o=i.toString().padStart(2,"0");return l+":"+o},be=e=>e*Math.PI/180,ye={r:"142",cx:"150",cy:"150",strokeWidth:16,fill:"transparent",transform:"rotate(-90, 150, 150)"};function Io(e){const[n,i]=v.exports.useState(!1),l=I(),o=So(e.entry.start,e.interval),p=o/(e.interval*60)*892,h=W(),a=u=>{u.preventDefault(),u.stopPropagation(),It(e.entry,null).then(()=>yt(h))},d=270-360*-1*(o/(1-e.interval*60));return c(jo,{children:[t(Oo,{onClick:a,onMouseOver:()=>i(!0),onMouseLeave:()=>i(!1)}),t(Bo,{angle:d}),c(Zo,{hover:n,children:[t(Ho,{x:"50%",y:"50%",children:Eo(o)}),t("circle",{stroke:l.colors.orange.disabled,...ye}),t(Po,{...ye,style:{strokeDashoffset:p}}),t(Ao,{width:"40",height:"40",rx:"6",x:"132",y:"132"})]}),t("div",{children:t(C,{...$o.pomodoroSettings,values:{a:u=>t(No,{onClick:()=>G.tabs.create({url:G.runtime.getURL("settings.html")}),children:u})}})})]})}const Oo=r(_o)`
  position: absolute;
  width: 52%;
  cursor: pointer;
  top: 72px;
  border-radius: 50%;
`,jo=r.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.background.regular};
  margin: 8px;
  padding: 40px;
  border-radius: 8px;
`,Zo=r.svg`
  width: 300px;
  height: 300px;
  background-color: ${({theme:e})=>e.colors.surface_primary.regular};
  border-radius: 50%;
  margin-bottom: 16px;
  z-indes: 1000;

  ${({hover:e})=>e&&P`
      text {
        opacity: 0;
      }

      rect {
        opacity: 100%;
      }
    `}
`,Po=r.circle`
  stroke: ${({theme:e})=>e.colors.orange.regular};
  stroke-dasharray: 892 892;
  animation-iteration-count: 1;
  stroke-linecap: round;
`,Bo=r.circle`
  position: absolute;
  width: 9px;
  top: 186px;
  height: 9px;
  background-color: ${({theme:e})=>e.colors.orange.disabled};
  border-radius: 50%;
  transform: ${({angle:e})=>`translate(
      ${Math.cos(be(e+.9))*142}px,
      ${Math.sin(be(e+.9))*142}px
    )`};
`,Ao=r.rect`
  fill: ${({theme:e})=>e.colors.orange.regular};
  opacity: 0;
  transition: 0.2s opacity ease-in;
  cursor: pointer;
`,Ho=r.text`
  font-size: 48px;
  fill: ${({theme:e})=>e.colors.ui.regular};
  opacity: 100%;
  dominant-baseline: middle;
  text-anchor: middle;
  transition: 0.2s opacity ease-in;
  font-family: GT Haptik, sans-serif;
  font-weight: 700;
`,No=r.a`
  cursor: pointer;
  text-decoration: underline;
  padding-top: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.grape_120.regular};

  &:hover {
    color: ${({theme:e})=>e.colors.grape_120.hover};
  }
`;var zo="/assets/ilustration.svg";const j=O({ilustrationAlt:{id:"tesListOnboarding.ilustrationAlt",defaultMessage:"Puzzle image"},title:{id:"tesListOnboarding.title",defaultMessage:"Psst! One more thing"},great:{id:"tesListOnboarding.great",defaultMessage:"Great!"},description:{id:"tesListOnboarding.description",defaultMessage:"Toggl extension lets you track time in {br} 100+ popular web tools. {br} Would you like to enable all supported tools?"},enableAll:{id:"tesListOnboarding.enableAll",defaultMessage:"Enable all"},enableManually:{id:"tesListOnboarding.enableManually",defaultMessage:"Later"},allEnabled:{id:"tesListOnboarding.allEnabled",defaultMessage:"Now go ahead and try it out in the tools you use \u2013 {br} you\u2019ll see a new control there"},manuallyEnabled:{id:"tesListOnboarding.manuallyEnabled",defaultMessage:"You can enable the tools any time in the {br} <a>Extension settings</a>"}}),Go=({onboardingStep:e,setOnboardingStep:n,...i})=>{const l=I();Z("integrations");const o=()=>{n("enable_manually"),ie("enable-integrations",{context:"Later"})},p=t(C,{tagName:De,...j.title}),h=t(C,{tagName:De,...j.great}),a=c(N,{children:[p,t(C,{tagName:de,...j.description,values:{br:t("br",{})}}),c(Vo,{children:[t(C,{...j.enableAll,children:f=>t(Re,{onClick:()=>b(),children:f})}),t(C,{...j.enableManually,children:f=>t(Qo,{onClick:o,children:f})})]})]}),d=c(N,{children:[h,t(C,{tagName:de,...j.allEnabled,values:{br:t("br",{})}})]}),u=c(N,{children:[h,t(C,{tagName:de,...j.manuallyEnabled,values:{br:t("br",{}),a:f=>t(qo,{onClick:()=>z.exports.tabs.create({url:z.exports.runtime.getURL("settings.html")}),children:f})}})]}),b=()=>{z.exports.permissions.request({origins:["<all_urls>"]}),ie("enable-integrations",{context:"Enable all in-app"})},k={initial:a,all_enabled:d,enable_manually:u,finished:null};return c(Wo,{minimize:!i.showImg&&e!=="initial",children:[!i.showImg&&t(Fo,{color:l.colors.ui_50.regular,onClick:()=>n("finished")}),(e==="initial"||i.showImg)&&t(C,{...j.ilustrationAlt,children:f=>t("img",{src:zo,alt:f})}),k[e]]})},Wo=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({minimize:e})=>e?"8px":"16px"};
  padding: ${({minimize:e})=>e?"16px 40px":"64px 40px 40px 40px"};
  position: relative;
  background-color: ${({theme:e})=>e.colors.surface_secondary.regular};
  color: ${({theme:e})=>e.colors.ui.regular};
`,Fo=r(Je)`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`,De=r.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
`,de=r.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`,qo=r.a`
  cursor: pointer;
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.grape_120.regular};

  &:hover {
    color: ${({theme:e})=>e.colors.grape_120.hover};
  }
`,Vo=r.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;
`,Qo=r(ee)`
  background: transparent;
  border: none;

  &:hover {
    background-color: ${({theme:e})=>e.colors.surface_secondary.hover};
  }
`,Uo=O({surveyCTA:{id:"home.surveyCTA",defaultMessage:"Take a quick survey!"}}),Jo=()=>{const{user:e,runningEntry:n,refetchEntries:i,timeEntries:l}=B(),{data:o}=we(),[p]=Z("pomodoroModeEnabled"),[h]=Z("pomodoroFocusMode"),[a]=Z("pomodoroInterval"),[d,u]=Z("tesListOnboardingStep",!0),[b,k]=Z("surveyTaken"),{listEntries:f,projects:E}=v.exports.useMemo(()=>l?ko(Object.values(l),o):{listEntries:null,projects:null},[l,o]);v.exports.useEffect(()=>{i(),$t({id:String(e==null?void 0:e.id)}),Se.load("tesListOnboardingStep","initial")},[]);const x=Object.values(l!=null?l:{});return c(Ko,{id:"homeRoot",children:[!!x.length&&t(Dt,{}),d!=="finished"&&!!x&&t(Go,{onboardingStep:d,setOnboardingStep:u,showImg:!x.length||d==="initial"}),d!=="initial"&&c(N,{children:[!!(f!=null&&f.length)&&e&&t(Wt,{totals:Ke(x,e.beginning_of_week)}),p&&h&&!!n?t(Io,{entry:n,interval:a}):l&&E&&t(so,{timeEntries:f,projects:E})]}),!b&&!!(f!=null&&f.length)&&t(Yo,{children:t(Xo,{href:"https://toggl.typeform.com/to/sI2cCiTE",target:"_blank",rel:"noreferrer",children:t(en,{onClick:()=>{k(!0)},children:t(C,{...Uo.surveyCTA})})})})]})},Ko=r.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.colors.surface_secondary.regular};
  min-height: 600px;
`,Yo=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`,Xo=r.a`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`,en=r(ee)`
  width: fit-content;
  color: ${({theme:e})=>e.colors.accent.regular};
  border: none;
  font-weight: 500;
  text-decoration: none;
`,tn=()=>{const{view:e}=B();return e==="editEntry"?t(Ht,{fromIntegration:{type:"popup"}}):t(Jo,{})};var on="/assets/large-logo.svg",nn="/assets/illustration.svg";const ce=O({title:{id:"noPermission.title",defaultMessage:"Please enable permissions"},description:{id:"noPermission.description",defaultMessage:`To start using the extension, {br}
    click \u201CAdd Toggl Track\u201D in the link below `},cta:{id:"noPermission.cta",defaultMessage:"Enable permissions here"}}),rn=()=>c(ln,{children:[t("img",{src:on,alt:"Toggl Track Logo",height:38}),t("img",{src:nn,alt:"Clock with a flower",height:143}),c(sn,{children:[t(C,{...ce.title,tagName:an}),t(C,{...ce.description,tagName:dn,values:{br:t("br",{})}}),t(C,{...ce.cta,children:e=>t(cn,{onClick:()=>G.tabs.create({url:G.runtime.getURL("src/pages/requestPermission/index.html")}),children:e})})]})]}),ln=r.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 122px 40px;
  background-color: ${({theme:e})=>e.colors.background.regular};
  color: ${({theme:e})=>e.colors.ui.regular};
  overflow: hidden;
`,sn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`,an=r.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
`,dn=r.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
`,cn=r.a`
  cursor: pointer;
  text-decoration: underline;
  color: ${({theme:e})=>e.colors.grape_120.regular};
  font-size: 14px;

  &:hover {
    color: ${({theme:e})=>e.colors.grape_120.hover};
  }
`,un=()=>{const[e,n]=v.exports.useState(!0),i=Lt(),{refetch:l,data:o}=Ye();return Mt(),v.exports.useEffect(()=>{o&&(window.heap&&window.heap.identify(`${o.id}`),St.setAttributes({id:o.id}))},[o]),v.exports.useEffect(()=>{Et(),i.user||l(),window.browser&&G.permissions.contains({origins:["*://*.toggl.com/*","*://toggl.com/*"]}).then(p=>{n(p)})},[]),t(Xe,{children:t(gn,{children:e?i!=null&&i.loading?t(pn,{}):i!=null&&i.user?c(Rt.Provider,{value:i,children:[t(jt,{}),t(tn,{})]}):t(wt,{}):t(rn,{})})})},pn=()=>{const e=I();return t(fn,{children:t(et,{size:36,color:e.colors.ui_50.regular})})},gn=r.div`
  display: flex;
  flex-direction: column;
  width: 470px;
`,fn=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-color: ${({theme:e})=>e.colors.surface_primary.regular};
`;function hn(){Se.loadAll();const e=document.querySelector("#__root");if(!e)throw new Error("Can't find Popup root element");tt(e).render(t(Tt,{children:c(rt,{client:ot,persistOptions:{persister:nt},children:[t(lt,{value:st,children:t(un,{})}),t(it,{initialIsOpen:!1})]})}))}hn();
//# sourceMappingURL=index.js.map
