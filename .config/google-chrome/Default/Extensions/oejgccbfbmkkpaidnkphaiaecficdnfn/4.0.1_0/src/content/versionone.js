togglbutton.render(".inline-asset-detail .asset-summary:not(.toggl)",{observe:!0},function(t){const i=$(".main-panel .asset-heading #asset-title-mount .title",t).textContent,s=$(".main-panel .main-panel-scroller .fields .text .asset-name-link span",t).textContent,e=$(".toolbar .utility",t),n=togglbutton.createTimerLink({className:"versionone",description:i,projectName:s,buttonType:"minimal"});n.setAttribute("style","margin-right: 10px"),e.insertBefore(n,$(".share",e))});
