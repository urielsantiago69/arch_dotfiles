togglbutton.render("#ticketDetailsContainer:not(.toggl)",{observe:!0},function(c){const t=createTag("li","toggle-container"),e=function(){return document.querySelector("#copyButton1").getAttribute("data-clipboard-text")},n=function(){return $("h1.header-w > span").textContent||""},o=togglbutton.createTimerLink({className:"assembla",description:e,projectName:n});t.appendChild(o),$("ul.menu-submenu").appendChild(t)});
