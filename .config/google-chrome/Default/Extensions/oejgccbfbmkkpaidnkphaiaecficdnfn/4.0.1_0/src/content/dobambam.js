togglbutton.render(".taskScroll:not(.toggl)",{observe:!0},function(e){let t=$(".jQ_taskTitleEl a",e);t||(t=$(".jQ_taskTitleEl",e));const i=$(".txt-gry .jhtmlTicketsTicketViewItem .jQ_trigger",e),o=togglbutton.createTimerLink({className:"dobambam",description:t&&t.textContent.trim(),projectName:i&&i.textContent.trim()});$("section.jQ_taskHeader")&&$("section.jQ_taskHeader").appendChild(o)});
