console.log("Toggl Button loaded for kanboard.");function o(t,e,n){const a=$(e,t).textContent,s=togglbutton.createTimerLink({className:"kanboard",description:a});$(n,t).appendChild(s)}togglbutton.render(".sidebar-content .page-header + .table-list .table-list-row:not(.toggl)",{observe:!0},function(t){o(t,".table-list-title a",".table-list-title")});togglbutton.render(".sidebar-content .page-header + .table-list .table-list-row .task-list-subtask:not(.toggl)",{observe:!0},function(t){o(t,".subtask-title a",".subtask-time-tracking")});togglbutton.render(".page > .table-list > .table-list-row:not(.toggl)",{observe:!0},function(t){o(t,".table-list-title a",".table-list-title")});togglbutton.render("#task-summary:not(.toggl)",{observe:!0},function(t){if(!$(".buttons-header",t)){const e=document.createElement("div");e.className="buttons-header",$(".task-summary-container",t).after(e)}o(t,"h2",".buttons-header")});togglbutton.render(".subtasks-table tbody tr:not(.toggl)",{observe:!0},function(t){o(t,".subtask-title a",".subtask-time-tracking")});togglbutton.render(".ui-tooltip tbody tr + tr:not(.toggl)",{observe:!0},function(t){const e=document.createElement("span");e.setAttribute("style","padding-left: 10px"),$(".subtask-title",t).after(e),o(t,".subtask-title a",".subtask-title + span")});
