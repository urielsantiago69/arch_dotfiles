togglbutton.render("#item-title-control:not(.toggl)",{observe:!0},function(){const t=$(".item-detail-page-header__item-title"),e=$("#navbar-content > ul > li > a"),n=(t&&t.textContent||"").trim(),o=(e&&e.textContent||"").trim(),i=togglbutton.createTimerLink({className:"rollbar",description:n,projectName:o});$(".item-status-level-area").appendChild(i)});
