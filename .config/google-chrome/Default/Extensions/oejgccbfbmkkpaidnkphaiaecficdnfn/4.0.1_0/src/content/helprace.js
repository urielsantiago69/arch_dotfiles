togglbutton.render(".b-topic__sidebar_head span.ticket_toggl:not(.toggl)",{observe:!0},function(t){const e=function(){return $("#extension_data").dataset.description},n=function(){return $("#extension_data").dataset.project},o=function(){return($("#extension_data").dataset.tags||"").split(",").map(i=>i.trim())},a=togglbutton.createTimerLink({className:"helprace",description:e,projectName:n,tags:o});t.appendChild(a,t)});
