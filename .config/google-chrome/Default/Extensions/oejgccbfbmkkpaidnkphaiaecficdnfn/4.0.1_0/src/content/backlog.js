togglbutton.render("#issueArea:not(.toggl)",{observe:!0},function(t){const e=createTag("span",""),o=$(".ticket__key .ticket__key-number",t),c=$("#summary .title-group__title-text",t),r=$(".project-header .header-icon-set__name"),n=$("#summary *:first-child"),a=function(){return o.textContent+" "+c.textContent},i=togglbutton.createTimerLink({className:"Backlog",description:a,projectName:r.textContent,calculateTotal:!0});e.appendChild(i),n.parentNode.appendChild(e,n)});
