function g(t){return t.replace(/\w\S*/g,function(o){return o.charAt(0).toUpperCase()+o.substr(1).toLowerCase()})}togglbutton.render("a.task-list__item:not(.toggl)",{observe:!0},function(t){const o=$(".item__title",t).textContent.trim(),i=$(".layout-column",t),l=$(".task-list__title",t.closest(".task-list__container")).firstElementChild,c=$(".task--undone",t);if(!i||!c)return;const a=l?l.textContent:null;let e=a==="Open tasks"||a===null?$(".dashboard__title").textContent:a;const u=function(){const r=[];if(t.getElementsByClassName("item__meta--minimize").length>0){const n=t.nextElementSibling.getElementsByClassName("tag-item");for(let s=0;typeof n[s]!="undefined";r.push(n[s++].querySelector(".item-name").textContent));}else{const n=t.getElementsByClassName("item__meta--tag");for(let s=0;typeof n[s]!="undefined";r.push(n[s++].getAttribute("aria-label")));}return r};e=e.charAt(0)==="#"?g(e.replace(/^#/,"").replace(/[-_]/g," ")):e;const m=togglbutton.createTimerLink({className:"workast",buttonType:"minimal",description:o,projectName:e,tags:u});i.parentNode.insertBefore(m,i)});
