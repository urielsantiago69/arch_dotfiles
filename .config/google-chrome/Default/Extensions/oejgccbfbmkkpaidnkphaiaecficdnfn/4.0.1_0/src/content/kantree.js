togglbutton.render(".card-view:not(.toggl)",{observe:!0},t=>{const r=()=>{const e=$(".card-view-header a.ref",t)||!1;if(!e||!e.innerHTML)return!1;const o=e.innerHTML,d=$(".card-view-header h2",t)&&$(".card-view-header h2",t).textContent;return`${o} ${d}`},a=$(".card-view-attributes-form",t),c=createTag("div","kt-card-toggl-btn"),n=r();if(!a||!n)return;const i=()=>{const e=[],o=document.querySelectorAll(".attribute-type-group-type .group",t);if(!o)return e;for(const d in o)o.hasOwnProperty(d)&&e.push(o[d].textContent.trim());return e},s=togglbutton.createTimerLink({className:"kantree",description:n,projectName:l,calculateTotal:!0,tags:i});c.appendChild(s),a.parentNode.insertBefore(c,a)},"#card-modal-host, .card-modal");togglbutton.render(".card-tile-content:not(.toggl)",{observe:!0},function(t){const r=$(".ref",t)||!1;if(!r)return!1;const a=()=>{let i=!1;try{const s=$(".title",t).textContent.trim(),e=$(".card-view-header a.ref").textContent.trim();i=`Subtask ${c}: ${s} (on task ${e})`}catch{}return i},c=r.textContent.trim(),n=togglbutton.createTimerLink({className:"kantree",buttonType:"minimal",description:a,projectName:l});n.classList.add("kt-checklist-item-toggl-btn"),c?r.parentNode.prepend(n):setTimeout(function(){r.parentNode.prepend(n)},2e3)},".card-view-children .children .card-tile, #card-modal-host, .card-modal");function l(){const t=$(".board-nav-title .title")||$(".project-panel-title");return t?t.textContent.trim():""}
