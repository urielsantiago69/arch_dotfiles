function o(){location.href=chrome.runtime.getURL("settings.html")}function s(e){if(e.source===window&&e.data&&e.data.direction==="from-public-web")switch(e.data.message){case"login-success":o();break;default:console.log("Unsupported event",e)}}window.addEventListener("message",s);
//# sourceMappingURL=login.js.map
