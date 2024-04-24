function ie(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function v(n){return function(t){if(Array.isArray(t))return b(t)}(n)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,o){if(!!t){if(typeof t=="string")return b(t,o);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,o)}}(n)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}var O,p,d,w,I,S=(O=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],p=function(){function n(e){var i=e.targetModal,r=e.triggers,a=r===void 0?[]:r,u=e.onShow,l=u===void 0?function(){}:u,f=e.onClose,m=f===void 0?function(){}:f,C=e.openTrigger,Q=C===void 0?"data-micromodal-trigger":C,L=e.closeTrigger,V=L===void 0?"data-micromodal-close":L,T=e.openClass,X=T===void 0?"is-open":T,P=e.disableScroll,Y=P!==void 0&&P,F=e.disableFocus,Z=F!==void 0&&F,q=e.awaitCloseAnimation,_=q!==void 0&&q,N=e.awaitOpenAnimation,ee=N!==void 0&&N,B=e.debugMode,te=B!==void 0&&B;(function(ne,oe){if(!(ne instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,n),this.modal=document.getElementById(i),this.config={debugMode:te,disableScroll:Y,openTrigger:Q,closeTrigger:V,openClass:X,onShow:l,onClose:m,awaitCloseAnimation:_,awaitOpenAnimation:ee,disableFocus:Z},a.length>0&&this.registerTriggers.apply(this,v(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,o;return t=n,(o=[{key:"registerTriggers",value:function(){for(var e=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];r.filter(Boolean).forEach(function(u){u.addEventListener("click",function(l){return e.showModal(l)})})}},{key:"showModal",value:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var r=function a(){e.modal.removeEventListener("animationend",a,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",r,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,i)}},{key:"closeModal",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var r=this.config.openClass;this.modal.addEventListener("animationend",function a(){i.classList.remove(r),i.removeEventListener("animationend",a,!1)},!1)}else i.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var i=document.querySelector("body");switch(e){case"enable":Object.assign(i.style,{overflow:""});break;case"disable":Object.assign(i.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){e.keyCode===27&&this.closeModal(e),e.keyCode===9&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(O);return Array.apply(void 0,v(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var i=this.getFocusableNodes();if(i.length!==0){var r=i.filter(function(a){return!a.hasAttribute(e.config.closeTrigger)});r.length>0&&r[0].focus(),r.length===0&&i[0].focus()}}}},{key:"retainFocus",value:function(e){var i=this.getFocusableNodes();if(i.length!==0)if(i=i.filter(function(a){return a.offsetParent!==null}),this.modal.contains(document.activeElement)){var r=i.indexOf(document.activeElement);e.shiftKey&&r===0&&(i[i.length-1].focus(),e.preventDefault()),!e.shiftKey&&i.length>0&&r===i.length-1&&(i[0].focus(),e.preventDefault())}else i[0].focus()}}])&&ie(t.prototype,o),n}(),d=null,w=function(n){if(!document.getElementById(n))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(n,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(n,'"></div>')),!1},I=function(n,t){if(function(e){e.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(n),!t)return!0;for(var o in t)w(o);return!0},{init:function(n){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},n),o=v(document.querySelectorAll("[".concat(t.openTrigger,"]"))),e=function(a,u){var l=[];return a.forEach(function(f){var m=f.attributes[u].value;l[m]===void 0&&(l[m]=[]),l[m].push(f)}),l}(o,t.openTrigger);if(t.debugMode!==!0||I(o,e)!==!1)for(var i in e){var r=e[i];t.targetModal=i,t.triggers=v(r),d=new p(t)}},show:function(n,t){var o=t||{};o.targetModal=n,o.debugMode===!0&&w(n)===!1||(d&&d.removeEventListeners(),(d=new p(o)).showModal())},close:function(n){n?d.closeModalById(n):d.closeModal()}});typeof window<"u"&&(window.MicroModal=S);var re=!0,E="Invariant failed";function s(n,t){if(!n){if(re)throw new Error(E);var o=typeof t=="function"?t():t,e=o?"".concat(E,": ").concat(o):E;throw new Error(e)}}const k=document.querySelectorAll(".nav");if(window.location.href.includes("blog"))for(let n=0;n<k.length;n++)k[n].textContent?.includes("Blog")||k[n].classList.add("hidden");const A="menu-modal",M=document.querySelector("#page-header"),z=document.documentElement,j=document.querySelector(`#${A} ul`),K=document.querySelector("#open-nav-button"),$=document.querySelector("#close-nav-button");s(M,"header should not be null");s(j,"menu should not be null");s(K,"openNavButton should not be null");s($,"closeNavButton should not be null");const ae=()=>{S.show(A,{disableScroll:!0})},D=()=>{S.close(A)};K.addEventListener("click",ae);$.addEventListener("click",D);document.addEventListener("scroll",()=>{const n=z.clientHeight-z.scrollTop-M.offsetHeight;M.classList.toggle("fixed-header",n<0)});j.addEventListener("click",n=>{n.target.tagName==="A"&&D()});const se=800,le=.1;class ce{x;y;z;xPrev;yPrev;constructor(t=0,o=0,e=0){this.x=t,this.y=o,this.z=e,this.xPrev=t,this.yPrev=o}update(t,o,e){this.xPrev=this.x,this.yPrev=this.y,this.z+=e*.0675,this.x+=this.x*(e*.0225)*this.z,this.y+=this.y*(e*.0225)*this.z,(this.x>t/2||this.x<-t/2||this.y>o/2||this.y<-o/2)&&(this.x=Math.random()*t-t/2,this.y=Math.random()*o-o/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(t){t.lineWidth=this.z,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.xPrev,this.yPrev),t.stroke()}}const H=Array.from({length:se},()=>new ce(0,0,0));let g=0;const h=document.querySelector("#starfield-canvas");s(h,"canvas should not be null");const c=h.getContext("2d"),y=document.querySelector("#starfield");s(y,"container should not be null");const de=new ResizeObserver(ue);de.observe(y);function ue(){s(c,"canvas context should not be null"),g>0&&cancelAnimationFrame(g);const{clientWidth:n,clientHeight:t}=y,o=window.devicePixelRatio||1;h.width=n*o,h.height=t*o,h.style.width=`${n}px`,h.style.height=`${t}px`,c.scale(o,o);for(const e of H)e.x=Math.random()*n-n/2,e.y=Math.random()*t-t/2,e.z=2;c.translate(n/2,t/2),c.fillStyle="rgba(0, 0, 0, 0.4)",c.strokeStyle="pink",g=requestAnimationFrame(R)}function R(){s(c,"canvas context should not be null");const{clientWidth:n,clientHeight:t}=y;for(const o of H)o.update(n,t,le),o.draw(c);c.fillRect(-n/2,-t/2,n,t),g=requestAnimationFrame(R)}const he=window.location.href,fe=document.querySelectorAll(".urlAnchor");fe.forEach(n=>{n.href===he&&n.classList.add("hidden")});const x=["light","dark"],W=document.querySelector("#theme-switcher");s(W,"button should not be null");const U=()=>document.documentElement.dataset.theme,G=()=>{const n=U();s(n,"themeCurrent should not be undefined");const t=x.indexOf(n);return x[(t+1)%x.length]},J=()=>{const n=U();document.querySelector(`#icon-theme-${n}`)?.classList.add("hidden");const t=G();document.querySelector(`#icon-theme-${t}`)?.classList.remove("hidden")};W.addEventListener("click",()=>{const n=G();document.documentElement.dataset.theme=n,localStorage.setItem("theme",n),J()});J();
