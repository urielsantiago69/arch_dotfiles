togglbutton.render(".page-content .widget-toolbox .pull-left:not(.toggl)",{observe:!0},function(t){const e=document.querySelector("td.bug-summary").textContent,o=document.querySelector("td.bug-project").textContent,n=togglbutton.createTimerLink({className:"mantishub",description:e,projectName:o});t.appendChild(n)});togglbutton.render("#view-issue-details:not(.toggl)",{observe:!0},function(t){const e=$("td.bug-summary",t).textContent,o=$("td.bug-project",t).textContent,n=togglbutton.createTimerLink({className:"mantishub",description:e,projectName:o});$(".form-title",t).appendChild(n)});
