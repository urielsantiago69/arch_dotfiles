togglbutton.render("div[data-without-stream-item-materials]",{observe:!0},n=>{if($(".toggl-button",n))return;const t=$("h1",n),r=()=>t?t.textContent.trim():"",e=togglbutton.createTimerLink({className:"google-classroom",description:r});e.style.margin="1rem 1rem 0",e.style.whiteSpace="nowrap",t.nextSibling.appendChild(e)});
