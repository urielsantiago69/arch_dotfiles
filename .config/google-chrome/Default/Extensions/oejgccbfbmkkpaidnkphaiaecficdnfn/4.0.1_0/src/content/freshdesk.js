togglbutton.render("#Pagearea:not(.toggl)",{observe:!0},function(o){const i=createTag("li","ticket-btns"),c=$("h2.subject",o),r=$("#ticket-display-id"),t=$(".logo_text"),e=$(".ticket-actions > ul"),n=r.textContent.trim()+" "+c.textContent.trim(),l=togglbutton.createTimerLink({className:"freshdesk",description:n,projectName:t&&t.textContent.trim(),calculateTotal:!0});i.appendChild(l),e.appendChild(i,e)});togglbutton.render(".page-actions__left:not(.toggl)",{observe:!0},o=>{if(!$(".ticket-subject-heading"))return;const c=()=>{const t=$(".breadcrumb__item.active").textContent.trim(),e=$(".ticket-subject-heading").cloneNode(!0);for(const n of e.children)e.removeChild(n);return`${t} ${e.textContent.trim()}`},r=togglbutton.createTimerLink({className:"freshdesk__mint",description:c,buttonType:"minimal",tags:()=>{const t=$(".ticket-tags ul");return!t||!t.children||!t.children.length?[]:[...t.querySelectorAll("li")].map(e=>{const n=e.querySelector(".tag-options");return(n?n.textContent:"").trim().replace(/[\r\n\t]/ig,"")})}});o.appendChild(r)});
