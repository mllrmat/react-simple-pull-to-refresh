(this["webpackJsonpreact-simple-pull-to-refresh-playground"]=this["webpackJsonpreact-simple-pull-to-refresh-playground"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,l=t(0),i=t.n(l),o=t(2),s=t.n(o),a=(t(10),t(3)),c=t(4);t(11);function u(e,n){if(!function(e){var n=getComputedStyle(e).overflowY;return e===document.scrollingElement&&"visible"===n||("scroll"===n||"auto"===n)}(e))return!1;if(n===r.DOWN)return e.scrollTop+e.clientHeight<e.scrollHeight;if(n===r.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function d(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}!function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"}(r||(r={}));d(".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #363636;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n");var p=function(){return i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))},m=function(){return i.a.createElement("div",null,i.a.createElement("p",null,"\u21a7\xa0\xa0Pull To Refresh\xa0\xa0\u21a7"))};d(".ptr,\n.ptr__children {\n  height: 100%;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  position: relative;\n  z-index: 1; }\n\n.ptr__children,\n.ptr__pull-down {\n  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1); }\n\n.ptr__pull-down {\n  position: absolute;\n  overflow: hidden;\n  left: 0;\n  right: 0;\n  top: 0;\n  visibility: 'hidden';\n  text-align: center; }\n  .ptr__pull-down > div {\n    margin: 0 auto; }\n  .ptr__pull-down > .ptr__pull-down--loading {\n    display: none; }\n  .ptr__pull-down > .ptr__pull-down--pull-more {\n    display: none; }\n\n.ptr--dragging.ptr--treshold-breached .ptr__pull-down--pull-more {\n  display: none; }\n\n.ptr--dragging .ptr__pull-down--pull-more {\n  display: block; }\n\n.ptr--treshold-breached .ptr__pull-down {\n  opacity: 1 !important; }\n\n.ptr--treshold-breached .ptr__pull-down--loading {\n  display: block; }\n");var v=function(e){var n=e.refreshingContent,t=void 0===n?i.a.createElement(p,null):n,o=e.pullingContent,s=void 0===o?i.a.createElement(m,null):o,a=e.pullDownThreshold,c=void 0===a?67:a,d=e.maxPullDownDistance,v=void 0===d?95:d,f=e.onRefresh,h=e.backgroundColor,g=e.isPullable,E=void 0===g||g,y=e.children,b=e.className,w=void 0===b?"":b,_=Object(l.useRef)(null),x=Object(l.useRef)(null),L=Object(l.useRef)(null),k=!1,N=!1,O=0,T=0;Object(l.useEffect)((function(){if(E&&x&&x.current)return x.current.addEventListener("touchstart",j,{passive:!0}),x.current.addEventListener("mousedown",j),x.current.addEventListener("touchmove",P,{passive:!1}),x.current.addEventListener("mousemove",P),x.current.addEventListener("touchend",R),x.current.addEventListener("mouseup",R),document.body.addEventListener("mouseleave",R),function(){E&&x&&x.current&&(x.current.removeEventListener("touchstart",j),x.current.removeEventListener("mousedown",j),x.current.removeEventListener("touchmove",P),x.current.removeEventListener("mousemove",P),x.current.removeEventListener("touchend",R),x.current.removeEventListener("mouseup",R),document.body.removeEventListener("mouseleave",R))}}),[E]),Object(l.useEffect)((function(){C()}),[y]);var C=function(){requestAnimationFrame((function(){x.current.style.overflowX="hidden",x.current.style.overflowY="auto",x.current.style.transform="translate(0px, 0px)",L.current.style.opacity="0",_.current.classList.remove("ptr--treshold-breached"),_.current.classList.remove("ptr--dragging")}))},j=function(e){N=!1,e instanceof MouseEvent&&(O=e.pageY),e instanceof TouchEvent&&(O=e.touches[0].pageY),T=O,"touchstart"===e.type&&function e(n,t){return!!u(n,t)||null!=n.parentElement&&e(n.parentElement,t)}(e.target,r.UP)||x.current.getBoundingClientRect().top<0||(N=!0)},P=function(e){e.preventDefault(),N&&(T=e instanceof TouchEvent?e.touches[0].pageY:e.pageY,_.current.classList.add("ptr--dragging"),T<O?N=!1:(T-O>=c&&(N=!0,k=!0,_.current.classList.remove("ptr--dragging"),_.current.classList.add("ptr--treshold-breached")),T-O>v||(L.current.style.opacity=((T-O)/65).toString(),x.current.style.overflow="visible",x.current.style.transform="translate(0px, "+(T-O)+"px)",L.current.style.visibility="visible")))},R=function(){if(N=!1,O=0,T=0,!k)return L.current.style.visibility="hidden",void C();x.current.style.overflow="visible",x.current.style.transform="translate(0px, "+c+"px)",k=!1,f()};return i.a.createElement("div",{className:"ptr "+w,style:{backgroundColor:h},ref:_},i.a.createElement("div",{className:"ptr__pull-down",ref:L},i.a.createElement("div",{className:"ptr__pull-down--loading"},t),i.a.createElement("div",{className:"ptr__pull-down--pull-more"},s)),i.a.createElement("div",{className:"ptr__children",ref:x},y))},f=function(){var e=["foo","bar","baz","foo"],n=Object(l.useState)(e),t=Object(c.a)(n,2),r=t[0],o=t[1];return i.a.createElement("div",{className:"App"},i.a.createElement(v,{onRefresh:function(){setTimeout((function(){o([].concat(Object(a.a)(r),e))}),1500)}},i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"App-header"},"Pull To Refresh"),i.a.createElement("div",{className:"App-container"},i.a.createElement("ul",null,r.map((function(e,n){return i.a.createElement("li",{key:n},e)})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.9bf6d823.chunk.js.map