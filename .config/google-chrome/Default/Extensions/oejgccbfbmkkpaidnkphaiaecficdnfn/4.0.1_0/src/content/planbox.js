togglbutton.render("div.importances:not(.toggl)",{observe:!0},function(){const n=$("#story_name p").textContent,o=$(".project .name").textContent,t=document.createElement("div"),e=$("div.importances"),c=e.parentNode;t.className="fl";const i=togglbutton.createTimerLink({className:"planbox",description:n,projectName:o});t.appendChild(i),c.insertBefore(t,e.nextSibling)});
