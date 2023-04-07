"use strict";var e=require("react"),t=require("react-icons/fc"),r=require("appwrite"),n=require("react-icons/ai"),a=require("react-icons/vsc"),c=require("react-icons/md"),i=require("uuid"),l=require("react-icons/fa"),s=require("react-icons/si"),o=require("react-icons/bs"),u=require("react-icons/tb"),f=function(t){var r=t.account,n=t.btnClassName,a=t.authProvider,c=t.successUrl,i=t.failureUrl,l=t.icon,s=t.displayText;return e.createElement("button",{className:n,onClick:function(){r.createOAuth2Session(a,c,i)}},"  ",l,"    ",e.createElement("span",null," ",s))},h=function(n){var a=n.client,c=n.successUrl,i=n.failureUrl,l=new r.Account(a);return e.createElement(f,{account:l,btnClassName:"google-auth-btn",authProvider:"google",successUrl:c,failureUrl:i,icon:e.createElement(t.FcGoogle,{className:"icon"}),displayText:"Sign in with Google"})},m=function(t){var a=t.client,c=t.successUrl,i=t.failureUrl,l=new r.Account(a);return e.createElement(f,{account:l,btnClassName:"facebook-auth-btn",authProvider:"facebook",successUrl:c,failureUrl:i,icon:e.createElement(n.AiFillFacebook,{className:"icon"}),displayText:"Sign in with Facebook"})},p=function(t){var n=t.client,c=t.successUrl,i=t.failureUrl,l=new r.Account(n);return e.createElement(f,{account:l,btnClassName:"github-auth-btn",authProvider:"github",successUrl:c,failureUrl:i,icon:e.createElement(a.VscGithub,{className:"icon"}),displayText:"Sign in with Github"})};function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function o(e,t,r,a){var c=t&&t.prototype instanceof h?t:h,i=Object.create(c.prototype),l=new A(a||[]);return n(i,"_invoke",{value:b(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=o;var f={};function h(){}function m(){}function p(){}var v={};s(v,c,(function(){return this}));var U=Object.getPrototypeOf,E=U&&U(U(P([])));E&&E!==t&&r.call(E,c)&&(v=E);var g=p.prototype=h.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){function a(n,c,i,l){var s=u(e[n],e,c);if("throw"!==s.type){var o=s.arg,f=o.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(f).then((function(e){o.value=e,i(o)}),(function(e){return a("throw",e,i,l)}))}l(s.arg)}var c;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return c=c?c.then(n,n):n()}})}function b(e,t,r){var n="suspendedStart";return function(a,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw c;return C()}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var l=N(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var c=a.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=s(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(y.prototype),s(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,a,c){void 0===c&&(c=Promise);var i=new y(o(t,r,n,a),c);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(g),s(g,l,"Generator"),s(g,c,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var l=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function v(e,t,r,n,a,c,i){try{var l=e[c](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c,i,l=[],s=!0,o=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=c.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){o=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(t){var n=t.client,a=t.successUrl,i=t.failureUrl,l=t.Refresh,s=t.setRefresh,o=t.setLoading,u=U(e.useState(!1),2),f=u[0],h=u[1],m=new r.Account(n);return e.createElement(e.Fragment,null,e.createElement("button",{className:"email-auth-btn",onClick:function(){h(!f)}},e.createElement(c.MdEmail,{className:"icon"}),"   Sign in with Email"),e.createElement(w,{successUrl:a,failureUrl:i,showPopup:f,setshowPopup:h,account:m,Refresh:l,setLoading:o,setRefresh:s}))},w=function(t){var r=t.showPopup,n=t.setshowPopup,a=t.account,c=t.successUrl,l=t.failureUrl,s=t.Refresh,o=t.setRefresh,u=t.setLoading,f=U(e.useState(""),2),h=f[0],m=f[1],p=U(e.useState(""),2),E=p[0],g=p[1],w=U(e.useState(""),2),b=w[0],N=w[1],x=U(e.useState(!1),2),S=x[0],A=x[1],P=U(e.useState(!1),2),C=P[0],k=P[1];return e.useEffect((function(){N(i.v4())}),[S]),e.createElement(e.Fragment,null,e.createElement("div",{className:r?"popup":"popup-closed",onClick:function(){n(!1)}},e.createElement("form",{className:"form",onClick:function(e){e.stopPropagation()}},e.createElement("label",{className:"label"},"Email"),e.createElement("input",{className:"email",type:"email",placeholder:"Email",value:h,onChange:function(e){m(e.target.value)}}),e.createElement("label",{className:"label"},"Password"),e.createElement("input",{className:"password",type:"password",placeholder:"Password",value:E,onChange:function(e){g(e.target.value)}}),e.createElement("button",{className:"submit",type:"submit",onClick:function(){var e,t=(e=d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(!1),k(!0),m(""),g(""),a.create(b,h,E).then((function(e){a.createEmailSession(h,E).then((function(e){a.createVerification(c,l)}))}));case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function i(e){v(c,n,a,i,l,"next",e)}function l(e){v(c,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},"Get Verification Link"))),e.createElement(y,{Refresh:s,setRefresh:o,setLoading:u,changeId:S,setchangeId:A,id:b,showVerificationPopup:C,setshowVerificationPopup:k,account:a}))},y=function(t){var r=t.changeId,n=t.setchangeId;t.id;var a=t.showVerificationPopup,c=t.setshowVerificationPopup,i=t.account,l=t.Refresh,s=t.setRefresh,o=t.setLoading,u=U(e.useState(""),2),f=u[0],h=u[1];return e.createElement(e.Fragment,null,e.createElement("div",{className:a?"popup":"popup-closed",onClick:function(){}},e.createElement("form",{className:"form",onClick:function(e){e.stopPropagation()}},e.createElement("label",{className:"label"},"Verification Link (check your spam inbox too)"),e.createElement("input",{className:"phoneNumber",placeholder:"Paste Verification Link ",value:f,onChange:function(e){h(e.target.value)}}),e.createElement("button",{className:"submit",type:"submit",onClick:function(e){e.preventDefault(),c(!1),i.updateVerification(f.split("?")[1].split("&")[0].split("=")[1],f.split("?")[1].split("&")[1].split("=")[1].toString()).then((function(e){n(!r),h(""),c(!1),s(!l),o(!0)}))}},"Verify"))))},b=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"microsoft-auth-btn",authProvider:"microsoft",successUrl:a,failureUrl:c,icon:e.createElement(N,{className:"icon"}),displayText:"Sign in with Microsoft"})};function N(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 21 21"},e.createElement("title",null,"MS-SymbolLockup"),e.createElement("rect",{x:"1",y:"1",width:"9",height:"9",fill:"#f25022"}),e.createElement("rect",{x:"1",y:"11",width:"9",height:"9",fill:"#00a4ef"}),e.createElement("rect",{x:"11",y:"1",width:"9",height:"9",fill:"#7fba00"}),e.createElement("rect",{x:"11",y:"11",width:"9",height:"9",fill:"#ffb900"}))}var x=function(){return e.createElement(f,{authProvider:"apple",btnClassName:"apple-auth-btn",displayText:"Sign In with Apple",icon:e.createElement(n.AiFillApple,{className:"icon"})})},S=function(t){var n=t.client,a=t.Refresh,c=t.setRefresh,i=t.setLoading,s=U(e.useState(!1),2),o=s[0],u=s[1],f=new r.Account(n);return e.createElement(e.Fragment,null,e.createElement("button",{className:"phone-auth-btn",onClick:function(){u(!o)}},e.createElement(l.FaPhoneAlt,{className:"icon"}),"   Sign in with Phone"),e.createElement(A,{Refresh:a,setRefresh:c,setLoading:i,showPopup:o,setshowPopup:u,account:f}))},A=function(t){var r=t.showPopup,n=t.setshowPopup,a=t.account,c=t.Refresh,l=t.setRefresh,s=t.setLoading,o=U(e.useState(""),2),u=o[0],f=o[1],h=U(e.useState(""),2),m=h[0],p=h[1],d=U(e.useState(!1),2),v=d[0],E=d[1],g=U(e.useState(!1),2),w=g[0],y=g[1];return e.useEffect((function(){p(i.v4())}),[v]),e.createElement(e.Fragment,null,e.createElement("div",{className:r?"popup":"popup-closed",onClick:function(){n(!1)}},e.createElement("form",{className:"form",onClick:function(e){e.stopPropagation()}},e.createElement("label",{className:"label"},"Phone Number"),e.createElement("input",{className:"phoneNumber",placeholder:"Country Code + Phone Number",value:u,onChange:function(e){f(e.target.value)}}),e.createElement("button",{className:"submit",type:"submit",onClick:function(e){e.preventDefault(),f(""),a.createPhoneSession(m,u).then((function(e){y(!0),n(!1)}))}},"Get Verification Code"))),e.createElement(P,{Refresh:c,setRefresh:l,setLoading:s,changeId:v,setchangeId:E,id:m,showVerificationPopup:w,setshowVerificationPopup:y,account:a}))},P=function(t){var r=t.changeId,n=t.setchangeId,a=t.id,c=t.showVerificationPopup,i=t.setshowVerificationPopup,l=t.account,s=t.Refresh,o=t.setRefresh,u=t.setLoading,f=U(e.useState(""),2),h=f[0],m=f[1];return e.createElement(e.Fragment,null,e.createElement("div",{className:c?"popup":"popup-closed",onClick:function(){}},e.createElement("form",{className:"form",onClick:function(e){e.stopPropagation()}},e.createElement("label",{className:"label"},"Verification Code"),e.createElement("input",{className:"phoneNumber",placeholder:"Enter Verification Code",value:h,onChange:function(e){m(e.target.value)}}),e.createElement("button",{className:"submit",type:"submit",onClick:function(e){e.preventDefault(),m(""),l.updatePhoneSession(a,h).then((function(e){n(!r),i(!1),o(!s),u(!0)}))}},"Verify"))))},C=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"amazon-auth-btn",authProvider:"amazon",successUrl:a,failureUrl:c,icon:e.createElement(l.FaAmazon,{className:"icon"}),displayText:"Sign in with Amazon"})},k=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"auth0-auth-btn",authProvider:"auth0",successUrl:a,failureUrl:c,icon:e.createElement(s.SiAuth0,{className:"icon"}),displayText:"Sign in with Auth0"})},L=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"discord-auth-btn",authProvider:"discord",successUrl:a,failureUrl:c,icon:e.createElement(l.FaDiscord,{className:"icon"}),displayText:"Sign in with Discord"})},T=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"spotify-auth-btn",authProvider:"spotify",successUrl:a,failureUrl:c,icon:e.createElement(l.FaSpotify,{className:"icon"}),displayText:"Sign in with Spotify"})},V=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,btnClassName:"twitch-auth-btn",authProvider:"twitch",successUrl:a,failureUrl:c,icon:e.createElement(l.FaTwitch,{className:"icon"}),displayText:"Sign in with Twitch"})},R=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"autodesk",btnClassName:"autodesk-auth-btn",displayText:"Sign In with Autodesk",successUrl:a,failureUrl:c,icon:e.createElement(s.SiAutodesk,{className:"icon"})})},q=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"authentik",btnClassName:"authentik-auth-btn",displayText:"Sign in with Authentik",successUrl:a,failureUrl:c,icon:e.createElement(O,null)})};function O(){return e.createElement("svg",{className:"icon",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{fill:"#fd4b2d"},e.createElement("path",{d:"m535.5 293.4h31.9v91h-31.9z"}),e.createElement("path",{d:"m618.3 289.6h31.9v71.1h-31.9z"}),e.createElement("path",{d:"m154.1 393.8c-42.562 0-81.726 23.16-102.041 60.5h-.059c-42.3 73.8 16.3 173.4 102.1 171.1 66.5 0 121.3-98.5 121.3-116 0-7.7-10.8-31.3-28.5-55-22.3-30.1-55.7-60.6-92.8-60.6zm-6.625 42.9c14.825-.75 29.825 4.4 42.525 17.7 16.8 15.8 30.7 34.4 41.2 54.9-74.4 155.8-205 23-125-55h-.075c11.977-10.24 26.575-16.853 41.35-17.6z"}),e.createElement("path",{d:"m948.1 292.3v411.4c-.2 78.9-64.2 142.8-143.1 142.7h-60.6v-140h-289.7v140h-60.7c-78.8 0-142.7-63.8-142.9-142.7v-129.5h459.3v-247.3h-221.7v138.9h-237.6v-173.5q0-8.3.9-16.5 1.1-9.7 3.6-19.2c.5-2 1.1-4 1.7-6q.2-.8.4-1.5c.4-1.1.7-2 1-2.9.4-1 .7-2 1.1-3 .3-.9.8-2.2 1.2-3.3.5-1 .9-2.1 1.4-3.2 3.5-8.4 7.9-16.4 12.9-24v-.3c1.4-1.8 2.7-3.7 4.1-5.6s2.3-3 3.5-4.5 2.9-3.4 4.3-5c1.4-1.7 2.8-3.2 4.3-4.7q1.1-1.3 2.5-2.4c5.2-5.2 10.9-10 16.9-14.3 1.6-1.1 3.3-2.2 5-3.3 1.7-1.2 3.9-2.5 5.9-3.7q5.6-3.3 11.5-6l3.7-1.7q8.2-3.6 16.7-6c2.3-.7 4.4-1.3 6.7-1.8q1.6-.5 3.3-.7 9.5-2.1 19.3-2.9h432.7q9.8.8 19.4 2.9c1.1 0 2.1.4 3.2.7 2.3.5 4.5 1.1 6.7 1.8q8.5 2.4 16.7 6l3.7 1.7q6 2.7 11.5 6 3 1.8 5.9 3.7c1.8 1.2 3.4 2.2 5 3.3 6.9 5.1 13.5 10.7 19.5 16.8q2.3 2.3 4.4 4.7c1.4 1.6 2.8 3.3 4.2 5l3.5 4.6c1.4 1.8 2.7 3.7 4.1 5.6v.2c5 7.6 9.4 15.7 12.9 24.1l1.4 3.2 1.2 3.2c.4 1 .7 2 1.1 3l1 2.9c0 .5.3 1 .4 1.6.6 1.9 1.2 4 1.7 6q2.5 9.5 3.6 19.2 1.1 8.1 1.3 16.3z"})))}var F=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"bitbucket",btnClassName:"bitbucket-auth-btn",displayText:"Sign in with Bitbucket",failureUrl:c,successUrl:a,icon:e.createElement(l.FaBitbucket,{className:"icon"})})},_=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"box",btnClassName:"box-auth-btn",displayText:"Sign in with Box",successUrl:a,failureUrl:c,icon:e.createElement(s.SiBox,{className:"icon"})})},B=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"dailymotion",btnClassName:"dailymotion-auth-btn",displayText:"Sign In with Dailymotion",successUrl:a,failureUrl:c,icon:e.createElement(s.SiDailymotion,{className:"icon"})})},I=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"disqus",btnClassName:"disqus-auth-btn",displayText:"Sign in with Disqus ",successUrl:a,failureUrl:c,icon:e.createElement(s.SiDisqus,{className:"icon"})})},M=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"dropbox",btnClassName:"dropbox-auth-btn",displayText:"Sign in with Dropbox",successUrl:a,failureUrl:c,icon:e.createElement(o.BsDropbox,{className:"icon"})})},j=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"etsy",btnClassName:"etsy-auth-btn",displayText:"Sign in with Etsy ",successUrl:a,failureUrl:c,icon:e.createElement(s.SiEtsy,{className:"icon"})})},G=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"gitlab",btnClassName:"gitlab-auth-btn",displayText:"Sign in with Gitlab ",successUrl:a,failureUrl:c,icon:e.createElement(s.SiGitlab,{className:"icon"})})},z=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"linkedin",btnClassName:"linkedin-auth-btn",displayText:"Sign in with LinkedIn ",successUrl:a,failureUrl:c,icon:e.createElement(o.BsLinkedin,{className:"icon"})})},D=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"notion",btnClassName:"notion-auth-btn",displayText:"Sign in with Notion ",successUrl:a,failureUrl:c,icon:e.createElement(s.SiNotion,{className:"icon"})})},H=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"okta",btnClassName:"okta-auth-btn",displayText:"Sign in with Okta ",successUrl:a,failureUrl:c,icon:e.createElement(s.SiOkta,{className:"icon"})})},Z=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"paypal",btnClassName:"paypal-auth-btn",displayText:"Sign in with Paypal",successUrl:a,failureUrl:c,icon:e.createElement(o.BsPaypal,{className:"icon"})})},Y=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"podio",btnClassName:"podio-auth-btn",displayText:"Sign in with Podio",successUrl:a,failureUrl:c,icon:e.createElement(W,{className:"icon"})})};function W(){return e.createElement("svg",{className:"icon",width:"2112",height:"2500",viewBox:"0 0 256 303",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},e.createElement("path",{d:"M219.773 37.656c-50.013-50.01-131.28-50.212-181.55-.576l-.59.587c-50.19 50.218-50.174 131.91.03 182.109l77.545 77.531a17.268 17.268 0 0 0 12.254 5.073c4.433 0 8.879-1.686 12.262-5.073 6.761-6.77 6.761-17.748 0-24.515l-77.557-77.538c-36.576-36.57-36.693-96.026-.34-132.75l.354-.347c36.698-36.675 96.399-36.664 133.074.012 30.116 30.118 34.438 81.659 10.034 119.904-5.147 8.064-2.776 18.782 5.288 23.93 8.083 5.164 18.787 2.782 23.93-5.279 33.489-52.474 27.29-121.047-14.734-163.068M188.74 223.752c6.765 6.77 6.773 17.749 0 24.51a17.224 17.224 0 0 1-12.244 5.087 17.322 17.322 0 0 1-12.274-5.078L86.68 170.74c-23.165-23.172-23.165-60.883 0-84.06 11.225-11.214 26.147-17.396 42.02-17.396h.017c15.87 0 30.794 6.19 42.011 17.422a59.397 59.397 0 0 1 14.916 59.06c-2.756 9.173-12.395 14.396-21.572 11.65-9.174-2.735-14.396-12.395-11.663-21.574a24.742 24.742 0 0 0-6.2-24.626c-4.677-4.683-10.885-7.26-17.5-7.263h-.01c-6.616 0-12.824 2.574-17.504 7.246-9.654 9.654-9.654 25.367 0 35.023l77.545 77.529",fill:"#5088AC"}))}var $=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"salesforce",btnClassName:"salesforce-auth-btn",displayText:"Sign in with Salesforce",successUrl:a,failureUrl:c,icon:e.createElement(s.SiSalesforce,{className:"icon"})})},J=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"slack",btnClassName:"slack-auth-btn",displayText:"Sign in with Slack",successUrl:a,failureUrl:c,icon:e.createElement(K,{className:"icon"})})},K=function(){return e.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"59.734",height:"59.852","shape-rendering":"geometricPrecision",viewBox:"0 0 59.734 59.852",id:"slack-logo"},e.createElement("g",{transform:"translate(0 -.148)"},e.createElement("path",{fill:"#36c5f0",d:"m 21.902,0.148 c -3.299,0 -5.973,2.68 -5.973,5.985 a 5.979,5.979 0 0 0 5.973,5.985 h 5.974 V 6.133 A 5.98,5.98 0 0 0 21.902,0.148 m 0,15.96 H 5.973 C 2.674,16.108 0,18.788 0,22.094 c 0,3.305 2.674,5.985 5.973,5.985 h 15.93 c 3.298,0 5.973,-2.68 5.973,-5.985 0,-3.306 -2.675,-5.986 -5.974,-5.986"}),e.createElement("path",{fill:"#2eb67d",d:"m 59.734,22.094 c 0,-3.306 -2.675,-5.986 -5.974,-5.986 -3.299,0 -5.973,2.68 -5.973,5.986 v 5.985 h 5.973 a 5.98,5.98 0 0 0 5.974,-5.985 m -15.929,0 V 6.133 A 5.98,5.98 0 0 0 37.831,0.148 c -3.299,0 -5.973,2.68 -5.973,5.985 v 15.96 c 0,3.307 2.674,5.987 5.973,5.987 a 5.98,5.98 0 0 0 5.974,-5.985"}),e.createElement("path",{fill:"#ecb22e",d:"m 37.831,60 a 5.98,5.98 0 0 0 5.974,-5.985 5.98,5.98 0 0 0 -5.974,-5.985 h -5.973 v 5.985 c 0,3.305 2.674,5.985 5.973,5.985 m 0,-15.96 h 15.93 c 3.298,0 5.973,-2.68 5.973,-5.986 A 5.98,5.98 0 0 0 53.76,32.069 H 37.831 c -3.299,0 -5.973,2.68 -5.973,5.985 a 5.979,5.979 0 0 0 5.973,5.985"}),e.createElement("path",{fill:"#e01e5a",d:"m 0,38.054 a 5.979,5.979 0 0 0 5.973,5.985 5.98,5.98 0 0 0 5.974,-5.985 V 32.069 H 5.973 C 2.674,32.069 0,34.749 0,38.054 m 15.929,0 v 15.96 c 0,3.306 2.674,5.986 5.973,5.986 a 5.98,5.98 0 0 0 5.974,-5.985 V 38.054 a 5.979,5.979 0 0 0 -5.974,-5.985 c -3.299,0 -5.973,2.68 -5.973,5.985"})))},Q=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"tradeshift",btnClassName:"tradeshift-auth-btn",displayText:"Sign in with Tradeshift",successUrl:a,failureUrl:c,icon:e.createElement(X,{className:"icon"})})};function X(){return e.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},e.createElement("path",{d:"M29.063 10.474H.962c-.56 0-.962.32-.962.842v7.216c0 .32.2.64.56.762l.4.12H18.04v33.272c0 .52.4.882.962.882h10.022c.56 0 .962-.36.962-.882v-41.37c.04-.52-.36-.842-.922-.842"}),e.createElement("path",{d:"M63.075 10.434h-28.1c-.56 0-.962.32-.962.842v41.41c0 .52.4.842.962.842h10.022c.56 0 .962-.36.962-.842V19.413h17.077c.16 0 .28-.04.4-.08.36-.12.56-.44.56-.802v-7.216c.04-.52-.36-.882-.922-.882",fill:"#00a1ea"}))}var ee=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"wordpress",btnClassName:"wordpress-auth-btn",displayText:"Sign in with Wordpress",successUrl:a,failureUrl:c,icon:e.createElement(o.BsWordpress,{className:"icon"})})},te=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"yahoo",btnClassName:"yahoo-auth-btn",displayText:"Sign in with Yahoo ",successUrl:a,failureUrl:c,icon:e.createElement(l.FaYahoo,{className:"icon"})})},re=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"yandex",btnClassName:"yandex-auth-btn",displayText:"Sign in with Yandex",successUrl:a,failureUrl:c,icon:e.createElement(l.FaYandexInternational,{className:"icon"})})},ne=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"zoom",btnClassName:"zoom-auth-btn",displayText:"Sign in with Zoom",successUrl:a,failureUrl:c,icon:e.createElement(u.TbBrandZoom,{className:"icon"})})},ae=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"bitly",btnClassName:"bitly-auth-btn",displayText:"Sign in with Bitly",failureUrl:c,successUrl:a,icon:e.createElement(s.SiBitly,{className:"icon"})})},ce=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"stripe",btnClassName:"stripe-auth-btn",displayText:"Sign in with Stripe",successUrl:a,failureUrl:c,icon:e.createElement(o.BsStripe,{className:"icon"})})},ie=function(t){var n=t.client,a=t.successUrl,c=t.failureUrl,i=new r.Account(n);return e.createElement(f,{account:i,authProvider:"yammer",btnClassName:"yammer-auth-btn",displayText:"Sign in with Yammer",successUrl:a,failureUrl:c,icon:e.createElement(le,{className:"icon"})})};function le(){return e.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e.createElement("title",null,"OfficeCore10_32x_24x_20x_16x_01-22-2019"),e.createElement("g",{id:"STYLE_COLOR","data-name":"STYLE = COLOR"},e.createElement("path",{d:"M11.55018,9.71687a.4163.4163,0,0,1-.05679-.49349.41.41,0,0,1,.06324-.08307L20.085.59887a.83408.83408,0,0,1,1.20252.02354,22.62072,22.62072,0,0,1,5.2527,9.54509l0,.00006L21.37806,16,13.701,13.596a9.25859,9.25859,0,0,0-2.15081-3.87913Z",fill:"#28a8ea"}),e.createElement("path",{d:"M30.62719,9.96175A.832.832,0,0,0,29.60149,9.35L13.69967,13.59747a9.37875,9.37875,0,0,1,.00309,4.8345l5.30344,6.60672L26.555,21.88657l3.04229.81775a.832.832,0,0,0,1.02687-.611A26.868,26.868,0,0,0,30.62719,9.96175Z",fill:"#0078d4"}),e.createElement("path",{d:"M13.70282,18.43177a9.26173,9.26173,0,0,1-2.1295,3.87451.417.417,0,0,0,.00614.58365l8.525,8.51191a.8335.8335,0,0,0,1.19983-.02262,22.54982,22.54982,0,0,0,5.2509-9.49281Z",fill:"#0358a7"}),e.createElement("path",{d:"M18,24.66663V8.33331A1.33727,1.33727,0,0,0,16.66663,7h-2.994l-2.116,2.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L14.71539,26h1.95124A1.33732,1.33732,0,0,0,18,24.66663Z",opacity:"0.1"}),e.createElement("path",{d:"M17,25.66663V9.33331A1.33727,1.33727,0,0,0,15.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368l4.13617,4.12982A1.33727,1.33727,0,0,0,17,25.66663Z",opacity:"0.2"}),e.createElement("path",{d:"M17,23.66663V9.33331A1.33727,1.33727,0,0,0,15.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L13.71387,25h1.95276A1.33732,1.33732,0,0,0,17,23.66663Z",opacity:"0.2"}),e.createElement("path",{d:"M16,23.66663V9.33331A1.33727,1.33727,0,0,0,14.66663,8H12.67419L11.55664,9.11926a.40811.40811,0,0,0-.06323.08307.41622.41622,0,0,0,.05676.49347A9.25873,9.25873,0,0,1,13.701,13.575l.00336.00018-.0047.00129a9.38226,9.38226,0,0,1,.00311,4.83447,9.21967,9.21967,0,0,1-.41467,1.20862,9.27745,9.27745,0,0,1-1.71479,2.66571.417.417,0,0,0,.00617.58368L13.71387,25h.95276A1.33732,1.33732,0,0,0,16,23.66663Z",opacity:"0.2"}),e.createElement("path",{id:"Back_Plate","data-name":"Back Plate",d:"M1.33333,8H14.66669A1.33334,1.33334,0,0,1,16,9.33334V22.66666A1.33333,1.33333,0,0,1,14.6667,24H1.33334A1.33334,1.33334,0,0,1,0,22.66666V9.33333A1.33333,1.33333,0,0,1,1.33333,8Z",fill:"#0078d4"}),e.createElement("path",{d:"M7.82588,15.26778a3.361,3.361,0,0,1,.22316.59972H8.07a2.84446,2.84446,0,0,1,.21617-.58577l2.02264-3.8095A.88924.88924,0,0,1,11.09417,11h0a.88924.88924,0,0,1,.771,1.33223L9.06682,17.20292a.88915.88915,0,0,0-.1182.443v2.46485A.88924.88924,0,0,1,8.05938,21H7.8783a.88924.88924,0,0,1-.88924-.88924V17.675a.88928.88928,0,0,0-.11285-.43356L4.12945,12.3228A.88924.88924,0,0,1,4.90583,11h.1748a.88923.88923,0,0,1,.79012.48126Z",fill:"#fff"}),e.createElement("rect",{width:"32",height:"32",fill:"none"})))}exports.AppwriteAuthComponent=function(t){var r=t.authProvider,n=t.client,a=t.successUrl,c=t.failureUrl,i=t.Refresh,l=t.setRefresh,s=t.setLoading;return"google"===r?e.createElement(h,{client:n,successUrl:a,failureUrl:c}):"facebook"===r?e.createElement(m,{client:n,successUrl:a,failureUrl:c}):"github"===r?e.createElement(p,{client:n,successUrl:a,failureUrl:c}):"email"===r?e.createElement(g,{client:n,successUrl:a,failureUrl:c,Refresh:i,setRefresh:l,setLoading:s}):"microsoft"===r?e.createElement(b,{client:n,successUrl:a,failureUrl:c}):"apple"===r?e.createElement(x,{client:n,successUrl:a,failureUrl:c}):"phone"===r?e.createElement(S,{client:n,successUrl:a,failureUrl:c,Refresh:i,setRefresh:l,setLoading:s}):"amazon"===r?e.createElement(C,{client:n,successUrl:a,failureUrl:c}):"auth0"===r?e.createElement(k,{client:n,successUrl:a,failureUrl:c}):"discord"===r?e.createElement(L,{client:n,successUrl:a,failureUrl:c}):"spotify"===r?e.createElement(T,{client:n,successUrl:a,failureUrl:c}):"twitch"===r?e.createElement(V,{client:n,successUrl:a,failureUrl:c}):"autodesk"===r?e.createElement(R,{client:n,successUrl:a,failureUrl:c}):"authentik"===r?e.createElement(q,{client:n,successUrl:a,failureUrl:c}):"bitbucket"===r?e.createElement(F,{client:n,successUrl:a,failureUrl:c}):"box"===r?e.createElement(_,{client:n,successUrl:a,failureUrl:c}):"dailymotion"===r?e.createElement(B,{client:n,successUrl:a,failureUrl:c}):"disqus"===r?e.createElement(I,{client:n,successUrl:a,failureUrl:c}):"dropbox"===r?e.createElement(M,{client:n,successUrl:a,failureUrl:c}):"etsy"===r?e.createElement(j,{client:n,successUrl:a,failureUrl:c}):"gitlab"===r?e.createElement(G,{client:n,successUrl:a,failureUrl:c}):"linkedin"===r?e.createElement(z,{client:n,successUrl:a,failureUrl:c}):"notion"===r?e.createElement(D,{client:n,successUrl:a,failureUrl:c}):"okta"===r?e.createElement(H,{client:n,successUrl:a,failureUrl:c}):"paypal"===r?e.createElement(Z,{client:n,successUrl:a,failureUrl:c}):"podio"===r?e.createElement(Y,{client:n,successUrl:a,failureUrl:c}):"salesforce"===r?e.createElement($,{client:n,successUrl:a,failureUrl:c}):"slack"===r?e.createElement(J,{client:n,successUrl:a,failureUrl:c}):"tradeshift"===r?e.createElement(Q,{client:n,successUrl:a,failureUrl:c}):"wordpress"===r?e.createElement(ee,{client:n,successUrl:a,failureUrl:c}):"yahoo"===r?e.createElement(te,{client:n,successUrl:a,failureUrl:c}):"yandex"===r?e.createElement(re,{client:n,successUrl:a,failureUrl:c}):"zoom"===r?e.createElement(ne,{client:n,successUrl:a,failureUrl:c}):"bitly"===r?e.createElement(ae,{client:n,successUrl:a,failureUrl:c}):"stripe"===r?e.createElement(ce,{client:n,successUrl:a,failureUrl:c}):"yammer"===r?e.createElement(ie,{client:n,successUrl:a,failureUrl:c}):void 0},exports.AuthButton=f,exports.useAuthUser=function(t){var r=U(e.useState({name:!1,email:!1,emailVerification:!1,phone:!1,phoneVerification:!1}),2),n=r[0],a=r[1],c=U(e.useState(!0),2),i=c[0],l=c[1],s=U(e.useState(!1),2),o=s[0],u=s[1];return e.useEffect((function(){t.get().then((function(e){a(e),l(!1)}),(function(e){l(!1)}))}),[o]),{user:n,setUser:a,loading:i,Refresh:o,setRefresh:u,setLoading:l}};
