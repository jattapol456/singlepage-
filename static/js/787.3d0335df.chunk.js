"use strict";(self.webpackChunkhomepagetest=self.webpackChunkhomepagetest||[]).push([[787],{787:function(e,t,n){n.r(t),n.d(t,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return C},getLCP:function(){return P},getTTFB:function(){return D}});var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var t=e.timeStamp;v=t}),!0)},l=function(){return v<0&&(v=p(),d(),s((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=m(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},h=!1,T=-1,y=function(e,t){h||(g((function(e){T=e.value})),h=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],v=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},p=c("layout-shift",v);p&&(n=m(i,r,t),f((function(){p.takeRecords().map(v),n(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},C=function(e,t){var n,a=l(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),n(!0))},d=c("first-input",p);n=m(e,v,t),d&&f((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&s((function(){var a;v=u("FID"),n=m(e,v,t),o=[],r=-1,i=null,F(addEventListener),a=p,o.push(a),S()}))},k={},P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e),n())},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var v=function(){k[r.id]||(o.takeRecords().map(a),o.disconnect(),k[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),f(v,!0),s((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,k[r.id]=!0,n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}}]);
//# sourceMappingURL=787.3d0335df.chunk.js.map