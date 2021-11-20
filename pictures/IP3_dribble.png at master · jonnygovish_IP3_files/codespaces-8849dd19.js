System.register(["./chunk-vendor.js","./chunk-frameworks.js","./chunk-input-demux.js","./chunk-ref-selector.js"],function(){"use strict";var g,T,y,r,b,k,S,E,_,D;return{setters:[function(c){g=c.a,T=c.r,y=c.o,r=c.t,b=c.c},function(c){k=c.r,S=c.aF,E=c.aG,_=c.y,D=c.e},function(){},function(){}],execute:function(){var c=Object.defineProperty,f=(e,t)=>c(e,"name",{value:t,configurable:!0});g("click",".js-codespaces-branch",e=>{const t=e.currentTarget;if(!t)return;const o=t.getAttribute("data-refname");document.querySelector("input#codespace_ref").setAttribute("value",o);const n=document.querySelector(".js-selected-branch");return n.textContent=o,t.closest("details").open=!1,e.preventDefault(),!1}),g("remote-input-error","#js-codespaces-repository-select",()=>{const e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),T(".js-new-codespace-form",async function(e,t){const o=e.closest("[data-replace-remote-form-target]"),s=o.querySelector(".js-new-codespace-submit-button");s instanceof HTMLInputElement&&(s.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{const n=await t.html();o.replaceWith(n.html)}catch(n){e.classList.remove("is-loading"),e.classList.add("is-error")}});let M=null;function L(e){M=e,e!==null&&document.querySelector(".js-codespace-loading-steps").setAttribute("data-current-state",M)}f(L,"advanceLoadingState"),y(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{const t=e.getAttribute("data-current-state");t&&L(t)}}),y(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{const t=e.getAttribute("data-state");t&&L(t)}});let A=null;function q(e){T(".js-fetch-cascade-token",async function(t,o){try{A=(await o.json()).json.token}catch(s){}}),k(e)}f(q,"fetchCascadeToken");function x(e,t,o){if(document.querySelector(e)){const n=Date.now(),a=setInterval(f(()=>{const z=Date.now()-n;if(A||z>=o){clearInterval(a),t(A||void 0);return}},"checkToken"),50)}}f(x,"waitForCascadeTokenWithTimeout"),y(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:k}),y(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{const t=e.querySelector(".js-cascade-token");B(e,t)}});function B(e,t){if(t.value!==""){const o=e.querySelector("form");k(o)}else{const o=document.querySelector(".js-fetch-cascade-token");q(o),x(".js-workbench-form-container",O,1e4)}}f(B,"resolveCascadeToken");function O(e){const t=document.querySelector(".js-workbench-form-container form");t&&e?(I(t,e),H(t,e),k(t)):L("failed")}f(O,"insertCodespaceTokenIntoShowAuthForm");function I(e,t){const o=e.querySelector(".js-cascade-token");o&&o.setAttribute("value",t)}f(I,"insertCodespaceTokenIntoCascadeField");function H(e,t){const o=e.querySelector(".js-partner-info");if(o){let s=o.getAttribute("value");s&&(s=s.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),o.setAttribute("value",s))}}f(H,"insertCodespaceTokenIntoPartnerInfo");var $=Object.defineProperty,G=Object.getOwnPropertyDescriptor,K=(e,t)=>$(e,"name",{value:t,configurable:!0}),u=(e,t,o,s)=>{for(var n=s>1?void 0:s?G(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(s?a(t,o,n):a(n))||n);return s&&n&&$(t,o,n),n};let l=class extends HTMLElement{async connectedCallback(){if(this.createCodespaceForm){const e=await S(this.createCodespaceForm,!this.vscsLocationList);this.updatePickableLocations(e)}}toggleLoadingVscode(){const e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}pollForVscode(e){this.toggleLoadingVscode();const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}async updatePickableLocations(e){if(!e){const o=this.createCodespaceForm.getAttribute("data-codespace-locations-url");if(!o)return;e=await E(o)}const t=e.available;if(this.vscsLocationList){const o=this.vscsLocationList.querySelectorAll(".SelectMenu-item");for(const n of o)t.includes(n.getAttribute("data-location"))?n.removeAttribute("hidden"):n.setAttribute("hidden","hidden");const s=this.createCodespaceForm.querySelector('[name="codespace[location]"]');if(s&&!t.includes(s.value)){s.value=e.current,this.vscsLocationSummary.textContent=this.vscsLocationSummary.getAttribute("data-blank-title");for(const n of o)n.setAttribute("aria-checked","false")}}}vscsTargetUrlUpdated(e){const t=e.currentTarget;this.vscsTargetUrl.value=t.value}};K(l,"NewCodespaceElement"),u([r],l.prototype,"form",2),u([r],l.prototype,"createCodespaceForm",2),u([r],l.prototype,"createCodespaceWithSkuSelectForm",2),u([r],l.prototype,"vscsTargetUrl",2),u([r],l.prototype,"vscsLocationList",2),u([r],l.prototype,"vscsLocationSummary",2),u([r],l.prototype,"loadingVscode",2),u([r],l.prototype,"vscodePoller",2),l=u([b],l);var Q=Object.defineProperty,P=(e,t)=>Q(e,"name",{value:t,configurable:!0});g("submit",".js-toggle-hidden-codespace-form",function(e){const t=e.currentTarget;m(t)}),g("click",".js-create-codespace-with-sku-button",async function(e){const t=e.currentTarget,o=t.closest("[data-target*='new-codespace.createCodespaceForm']")||t.closest("[data-target*='new-codespace.createCodespaceWithSkuSelectForm']");await S(o),m(o),o.classList.contains("js-open-in-vscode-form")?F(o):o.submit()});function m(e){const t=e.querySelectorAll(".js-toggle-hidden");for(const s of t)s.hidden=!s.hidden;const o=e.querySelectorAll(".js-toggle-disabled");for(const s of o)s.getAttribute("aria-disabled")?s.removeAttribute("aria-disabled"):s.setAttribute("aria-disabled","true")}P(m,"toggleFormSubmissionInFlight");function V(e){return e.closest("[data-replace-remote-form-target]")}P(V,"getFormTarget"),g("submit","form.js-codespaces-delete-form",async function(e){e.preventDefault();const t=e.currentTarget;try{const o=await fetch(t.action,{method:t.method,body:new FormData(t),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(o.ok){const s=_(document,await o.text());V(t).replaceWith(s)}else if(o.status===401)t.submit();else throw new Error(`Unexpected response: ${o.statusText}`)}finally{m(t)}}),g("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();const t=e.currentTarget;await F(t)});async function F(e){const t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){const o=await t.json();o.codespace_url?(window.location.href=o.codespace_url,m(e)):(e.closest("get-repo")||e.closest("new-codespace")?(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("prefetch-pane")&&(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),m(e))}else if(t.status===422){const o=await t.json(),s=e.querySelector(".js-open-in-vscode-error");s&&(s.insertAdjacentHTML("afterbegin",o.error),s.hidden=!1)}}P(F,"createCodespaceIntoVscode");var R=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Z=(e,t)=>R(e,"name",{value:t,configurable:!0}),C=(e,t,o,s)=>{for(var n=s>1?void 0:s?Y(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(s?a(t,o,n):a(n))||n);return s&&n&&R(t,o,n),n};let w=class extends HTMLElement{constructor(){super(...arguments);this.abortPoll=null}connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){var e;(e=this.abortPoll)==null||e.abort()}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1,(await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}})).ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){const e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t)if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{const o=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=o}}async poll(e,t=1e3){var o,s;if((o=this.abortPoll)==null?void 0:o.signal.aborted)return;const n=await fetch(e,{signal:(s=this.abortPoll)==null?void 0:s.signal});return n.status===202?(await new Promise(i=>setTimeout(i,t)),this.poll(e,t*1.5)):n}};Z(w,"ExportBranchElement"),C([r],w.prototype,"form",2),C([r],w.prototype,"loadingIndicator",2),C([r],w.prototype,"viewBranchLink",2),w=C([b],w);var W=Object.defineProperty,J=Object.getOwnPropertyDescriptor,ee=(e,t)=>W(e,"name",{value:t,configurable:!0}),h=(e,t,o,s)=>{for(var n=s>1?void 0:s?J(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(s?a(t,o,n):a(n))||n);return s&&n&&W(t,o,n),n};let d=class extends HTMLElement{reset(e){for(e.preventDefault(),this.dropdownDetails.hidden=!1,this.modalDetails.hidden=!0,this.exportDetails.hidden=!0,this.skuForm.hidden=!1;this.resultMessage.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage.hidden=!0,this.errorMessage.hidden=!0}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1,this.dynamicSkus&&this.dynamicSkus.setAttribute("src",this.dynamicSkus.getAttribute("data-src"))}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails.open=!0,this.exportDetails.hidden=!1,this.insertBranchExportComponent()}async updateSku(){m(this.skuForm);try{const e=await fetch(this.skuForm.action,{method:this.skuForm.method,body:new FormData(this.skuForm),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(e.ok){const t=_(document,await e.text());this.resultMessage.appendChild(t),this.skuForm.hidden=!0,this.resultMessage.hidden=!1}else this.errorMessage.hidden=!1,this.skuForm.hidden=!0}finally{m(this.skuForm)}}async insertBranchExportComponent(){const e=this.querySelector("[data-branch-export-url]");if(!e)return;const t=e.getAttribute("data-branch-export-url");if(!t)return;const o=await D(document,t);!o||(e.innerHTML="",e.appendChild(o))}};ee(d,"OptionsPopoverElement"),h([r],d.prototype,"dropdownDetails",2),h([r],d.prototype,"modalDetails",2),h([r],d.prototype,"settingsModal",2),h([r],d.prototype,"skuForm",2),h([r],d.prototype,"resultMessage",2),h([r],d.prototype,"errorMessage",2),h([r],d.prototype,"exportDetails",2),h([r],d.prototype,"dynamicSkus",2),d=h([b],d);var U=Object.defineProperty,te=Object.getOwnPropertyDescriptor,oe=(e,t)=>U(e,"name",{value:t,configurable:!0}),v=(e,t,o,s)=>{for(var n=s>1?void 0:s?te(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(s?a(t,o,n):a(n))||n);return s&&n&&U(t,o,n),n};let p=class extends HTMLElement{constructor(){super(...arguments);this.prefetching=!1,this.remainingRetries=3}async connectedCallback(){this.openSkuButton&&this.skipSkuButton?this.prefetchLocationAndSkus():this.showOpenSkuButton()}async prefetchLocationAndSkus(){if(this.prefetching)return;const e=document.querySelector("form.js-prefetch-codespace-location")||document.querySelector("form.js-open-in-vscode-form")||document.querySelector("form.js-open-in-web-form");if(e){this.prefetching=!0;const t=await S(e);if(t&&(this.currentLocation=t.current),!this.skuSelect)return;const o=this.skuSelect.getAttribute("data-codespace-skus-url");if(this.currentLocation&&o){const s=await fetch(`${o}&location=${this.currentLocation}`,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/html_fragment"}});if(s.ok){const n=_(document,await s.text()),a=Array.from(n.querySelectorAll("input[name='codespace[sku_name]']")).filter(re=>!re.disabled);a.length===1?(a[0].select(),this.showSkipSkuButton()):this.showOpenSkuButton(),this.skuSelect.replaceWith(n),this.skuSelect.hidden=!1,this.skuError&&(this.skuError.hidden=!0)}else this.showOpenSkuButton(),this.remainingRetries-=1,this.remainingRetries>0&&(this.prefetching=!1),this.skuSelect.hidden=!0,this.skuError&&(this.skuError.hidden=!1)}}}showOpenSkuButton(){var e;this.shownButton===void 0&&this.openSkuButton&&(this.shownButton=this.openSkuButton,this.shownButton.hidden=!1,(e=this.skipSkuButton)==null||e.remove())}showSkipSkuButton(){var e,t;if(this.shownButton===void 0&&this.skipSkuButton){this.shownButton=this.skipSkuButton,this.shownButton.hidden=!1;const o=(e=this.openSkuButton)==null?void 0:e.parentElement;o&&o instanceof HTMLDetailsElement&&(o.hidden=!0),(t=this.openSkuButton)==null||t.remove()}}toggleLoadingVscode(){if(this.loadingVscode){const e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}}pollForVscode(e){if(this.vscodePoller){this.toggleLoadingVscode();const t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}}};oe(p,"PrefetchPaneElement"),v([r],p.prototype,"skuSelect",2),v([r],p.prototype,"skuError",2),v([r],p.prototype,"loadingVscode",2),v([r],p.prototype,"vscodePoller",2),v([r],p.prototype,"openSkuButton",2),v([r],p.prototype,"skipSkuButton",2),p=v([b],p);var X=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ne=(e,t)=>X(e,"name",{value:t,configurable:!0}),N=(e,t,o,s)=>{for(var n=s>1?void 0:s?se(t,o):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(n=(s?a(t,o,n):a(n))||n);return s&&n&&X(t,o,n),n};let j=class extends HTMLElement{async connectedCallback(){const e=this.getAttribute("data-codespace-url");e&&(window.location.href=e)}};ne(j,"VscodeForwarderElement"),N([r],j.prototype,"vscodeLink",2),j=N([b],j)}}});
//# sourceMappingURL=codespaces-0a792d54.js.map
