function hookGeo(eventName){const hookedObj={getCurrentPosition:navigator.geolocation.getCurrentPosition.bind(navigator.geolocation),watchPosition:navigator.geolocation.watchPosition.bind(navigator.geolocation),fakeGeo:!0,genLat:38.883333,genLon:-77};function waitGetCurrentPosition(){void 0!==hookedObj.fakeGeo?!0===hookedObj.fakeGeo?hookedObj.tmp_successCallback({coords:{latitude:hookedObj.genLat,longitude:hookedObj.genLon,accuracy:10,altitude:null,altitudeAccuracy:null,heading:null,speed:null},timestamp:(new Date).getTime()}):hookedObj.getCurrentPosition(hookedObj.tmp_successCallback,hookedObj.tmp_errorCallback,hookedObj.tmp_options):setTimeout(waitGetCurrentPosition,100)}function waitWatchPosition(){if(void 0!==hookedObj.fakeGeo){if(!0===hookedObj.fakeGeo)return navigator.geolocation.getCurrentPosition(hookedObj.tmp2_successCallback,hookedObj.tmp2_errorCallback,hookedObj.tmp2_options),Math.floor(1e4*Math.random());hookedObj.watchPosition(hookedObj.tmp2_successCallback,hookedObj.tmp2_errorCallback,hookedObj.tmp2_options)}else setTimeout(waitWatchPosition,100)}Object.getPrototypeOf(navigator.geolocation).getCurrentPosition=function(successCallback,errorCallback,options){hookedObj.tmp_successCallback=successCallback,hookedObj.tmp_errorCallback=errorCallback,hookedObj.tmp_options=options,waitGetCurrentPosition()},Object.getPrototypeOf(navigator.geolocation).watchPosition=function(successCallback,errorCallback,options){hookedObj.tmp2_successCallback=successCallback,hookedObj.tmp2_errorCallback=errorCallback,hookedObj.tmp2_options=options,waitWatchPosition()};function updateHookedObj(response){"object"==typeof response&&"object"==typeof response.coords&&(hookedObj.genLat=response.coords.lat,hookedObj.genLon=response.coords.lon,hookedObj.fakeGeo=response.fakeIt)}Blob=function(_Blob){function secureBlob(...args){const injectableMimeTypes=[{mime:"text/html",useXMLparser:!1},{mime:"application/xhtml+xml",useXMLparser:!0},{mime:"text/xml",useXMLparser:!0},{mime:"application/xml",useXMLparser:!0},{mime:"image/svg+xml",useXMLparser:!0}];let typeEl=args.find((arg=>"object"==typeof arg&&"string"==typeof arg.type&&arg.type));if(void 0!==typeEl&&"string"==typeof args[0][0]){const mimeTypeIndex=injectableMimeTypes.findIndex((mimeType=>mimeType.mime.toLowerCase()===typeEl.type.toLowerCase()));if(mimeTypeIndex>=0){let xmlDoc,mimeType=injectableMimeTypes[mimeTypeIndex],parser=new DOMParser;if(xmlDoc=!0===mimeType.useXMLparser?parser.parseFromString(args[0].join(""),mimeType.mime):parser.parseFromString(args[0][0],mimeType.mime),0===xmlDoc.getElementsByTagName("parsererror").length){if("image/svg+xml"===typeEl.type){const scriptElem=xmlDoc.createElementNS("http://www.w3.org/2000/svg","script");scriptElem.setAttributeNS(null,"type","application/ecmascript"),scriptElem.innerHTML=`(${hookGeo})();`,xmlDoc.documentElement.insertBefore(scriptElem,xmlDoc.documentElement.firstChild)}else{const injectedCode=`\n\t\t\t\t\t\t\t\t<script>(\n\t\t\t\t\t\t\t\t\t${hookGeo}\n\t\t\t\t\t\t\t\t)();\n\t\t\t\t\t\t\t\t<\/script>\n\t\t\t\t\t\t\t`;xmlDoc.documentElement.insertAdjacentHTML("afterbegin",injectedCode)}!0===mimeType.useXMLparser?args[0]=[(new XMLSerializer).serializeToString(xmlDoc)]:args[0][0]=xmlDoc.documentElement.outerHTML}}}return((constructor,args)=>{const bind=Function.bind;return new(bind.bind(bind)(constructor,null).apply(null,args))})(_Blob,args)}let propNames=Object.getOwnPropertyNames(_Blob);for(let i=0;i<propNames.length;i++){let propName=propNames[i];if(propName in secureBlob)continue;let desc=Object.getOwnPropertyDescriptor(_Blob,propName);Object.defineProperty(secureBlob,propName,desc)}return secureBlob.prototype=_Blob.prototype,secureBlob}(Blob),"undefined"!=typeof chrome?setInterval((()=>{chrome.runtime.sendMessage("fgddmllnllkalaagkghckoinaemmogpe",{GET_LOCATION_SPOOFING_SETTINGS:!0},(response=>{updateHookedObj(response)}))}),500):void 0!==eventName&&document.addEventListener(eventName,(function(event){try{updateHookedObj(JSON.parse(event.detail))}catch(ex){}}))}hookGeo();