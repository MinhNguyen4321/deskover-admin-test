(self.webpackChunkdeskover_admin_test=self.webpackChunkdeskover_admin_test||[]).push([[429],{955:(fe,V,te)=>{"use strict";const se="undefined"!=typeof globalThis&&globalThis,be="undefined"!=typeof window&&window,Ee="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Pe=se||"undefined"!=typeof global&&global||be||Ee,re=function(b,...q){if(re.translate){const C=re.translate(b,q);b=C[0],q=C[1]}let I=K(b[0],b.raw[0]);for(let C=1;C<b.length;C++)I+=q[C-1]+K(b[C],b.raw[C]);return I};function K(b,q){return":"===q.charAt(0)?b.substring(function le(b,q){for(let I=1,C=1;I<b.length;I++,C++)if("\\"===q[C])C++;else if(":"===b[I])return I;throw new Error(`Unterminated $localize metadata block in "${q}".`)}(b,q)+1):b}Pe.$localize=re,te(583);var me=te(736);window.process=me},736:fe=>{var te,se,V=fe.exports={};function be(){throw new Error("setTimeout has not been defined")}function Ee(){throw new Error("clearTimeout has not been defined")}function we(I){if(te===setTimeout)return setTimeout(I,0);if((te===be||!te)&&setTimeout)return te=setTimeout,setTimeout(I,0);try{return te(I,0)}catch(C){try{return te.call(null,I,0)}catch(ge){return te.call(this,I,0)}}}!function(){try{te="function"==typeof setTimeout?setTimeout:be}catch(I){te=be}try{se="function"==typeof clearTimeout?clearTimeout:Ee}catch(I){se=Ee}}();var K,re=[],ee=!1,le=-1;function Ce(){!ee||!K||(ee=!1,K.length?re=K.concat(re):le=-1,re.length&&me())}function me(){if(!ee){var I=we(Ce);ee=!0;for(var C=re.length;C;){for(K=re,re=[];++le<C;)K&&K[le].run();le=-1,C=re.length}K=null,ee=!1,function Pe(I){if(se===clearTimeout)return clearTimeout(I);if((se===Ee||!se)&&clearTimeout)return se=clearTimeout,clearTimeout(I);try{se(I)}catch(C){try{return se.call(null,I)}catch(ge){return se.call(this,I)}}}(I)}}function b(I,C){this.fun=I,this.array=C}function q(){}V.nextTick=function(I){var C=new Array(arguments.length-1);if(arguments.length>1)for(var ge=1;ge<arguments.length;ge++)C[ge-1]=arguments[ge];re.push(new b(I,C)),1===re.length&&!ee&&we(me)},b.prototype.run=function(){this.fun.apply(null,this.array)},V.title="browser",V.browser=!0,V.env={},V.argv=[],V.version="",V.versions={},V.on=q,V.addListener=q,V.once=q,V.off=q,V.removeListener=q,V.removeAllListeners=q,V.emit=q,V.prependListener=q,V.prependOnceListener=q,V.listeners=function(I){return[]},V.binding=function(I){throw new Error("process.binding is not supported")},V.cwd=function(){return"/"},V.chdir=function(I){throw new Error("process.chdir is not supported")},V.umask=function(){return 0}},583:()=>{"use strict";!function(e){const n=e.performance;function i(j){n&&n.mark&&n.mark(j)}function o(j,T){n&&n.measure&&n.measure(j,T)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(j){return c+j}const E=!0===e[a("forceDuplicateZoneCheck")];if(e.Zone){if(E||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class j{constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(e.Promise!==_e.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=j.current;for(;t.parent;)t=t.parent;return t}static get current(){return X.zone}static get currentTask(){return de}static __load_patch(t,r,k=!1){if(_e.hasOwnProperty(t)){if(!k&&E)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const O="Zone:"+t;i(O),_e[t]=r(e,j,Q),o(O,O)}}get parent(){return this._parent}get name(){return this._name}get(t){const r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const k=this._zoneDelegate.intercept(this,t,r),O=this;return function(){return O.runGuarded(k,this,arguments,r)}}run(t,r,k,O){X={parent:X,zone:this};try{return this._zoneDelegate.invoke(this,t,r,k,O)}finally{X=X.parent}}runGuarded(t,r=null,k,O){X={parent:X,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,k,O)}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne}}finally{X=X.parent}}runTask(t,r,k){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||oe).name+"; Execution: "+this.name+")");if(t.state===B&&(t.type===ce||t.type===P))return;const O=t.state!=y;O&&t._transitionTo(y,x),t.runCount++;const ne=de;de=t,X={parent:X,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==B&&t.state!==h&&(t.type==ce||t.data&&t.data.isPeriodic?O&&t._transitionTo(x,y):(t.runCount=0,this._updateTaskCount(t,-1),O&&t._transitionTo(B,y,B))),X=X.parent,de=ne}}scheduleTask(t){if(t.zone&&t.zone!==this){let k=this;for(;k;){if(k===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);k=k.parent}}t._transitionTo(J,B);const r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(k){throw t._transitionTo(h,J,B),this._zoneDelegate.handleError(this,k),k}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==J&&t._transitionTo(x,J),t}scheduleMicroTask(t,r,k,O){return this.scheduleTask(new p(A,t,r,k,O,void 0))}scheduleMacroTask(t,r,k,O,ne){return this.scheduleTask(new p(P,t,r,k,O,ne))}scheduleEventTask(t,r,k,O,ne){return this.scheduleTask(new p(ce,t,r,k,O,ne))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||oe).name+"; Execution: "+this.name+")");t._transitionTo(F,x,y);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,F),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(B,F),t.runCount=0,t}_updateTaskCount(t,r){const k=t._zoneDelegates;-1==r&&(t._zoneDelegates=null);for(let O=0;O<k.length;O++)k[O]._updateTaskCount(t.type,r)}}return j.__symbol__=a,j})();const w={name:"",onHasTask:(j,T,t,r)=>j.hasTask(t,r),onScheduleTask:(j,T,t,r)=>j.scheduleTask(t,r),onInvokeTask:(j,T,t,r,k,O)=>j.invokeTask(t,r,k,O),onCancelTask:(j,T,t,r)=>j.cancelTask(t,r)};class v{constructor(T,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||t&&t._hasTaskZS)&&(this._hasTaskZS=k?r:w,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=w,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=w,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=w,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(T,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,t):new d(T,t)}intercept(T,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,t,r):t}invoke(T,t,r,k,O){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,t,r,k,O):t.apply(r,k)}handleError(T,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,t)}scheduleTask(T,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=A)throw new Error("Task is missing scheduleFn.");S(t)}return r}invokeTask(T,t,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,t,r,k):t.callback.apply(r,k)}cancelTask(T,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(T,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,t)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,t){const r=this._taskCounts,k=r[T],O=r[T]=k+t;if(O<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=O||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class p{constructor(T,t,r,k,O,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=t,this.data=k,this.scheduleFn=O,this.cancelFn=ne,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===ce&&k&&k.useG?p.invokeTask:function(){return p.invokeTask.call(e,l,this,arguments)}}static invokeTask(T,t,r){T||(T=this),ae++;try{return T.runCount++,T.zone.runTask(T,t,r)}finally{1==ae&&_(),ae--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,J)}_transitionTo(T,t,r){if(this._state!==t&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==B&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const H=a("setTimeout"),L=a("Promise"),M=a("then");let ie,z=[],G=!1;function $(j){if(ie||e[L]&&(ie=e[L].resolve(0)),ie){let T=ie[M];T||(T=ie.then),T.call(ie,j)}else e[H](j,0)}function S(j){0===ae&&0===z.length&&$(_),j&&z.push(j)}function _(){if(!G){for(G=!0;z.length;){const j=z;z=[];for(let T=0;T<j.length;T++){const t=j[T];try{t.zone.runTask(t,null,null)}catch(r){Q.onUnhandledError(r)}}}Q.microtaskDrainDone(),G=!1}}const oe={name:"NO ZONE"},B="notScheduled",J="scheduling",x="scheduled",y="running",F="canceling",h="unknown",A="microTask",P="macroTask",ce="eventTask",_e={},Q={symbol:a,currentZoneFrame:()=>X,onUnhandledError:Y,microtaskDrainDone:Y,scheduleMicroTask:S,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Y,patchMethod:()=>Y,bindArguments:()=>[],patchThen:()=>Y,patchMacroTask:()=>Y,patchEventPrototype:()=>Y,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Y,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Y,wrapWithCurrentZone:()=>Y,filterProperties:()=>[],attachOriginToPatched:()=>Y,_redefineProperty:()=>Y,patchCallbacks:()=>Y,nativeScheduleMicroTask:$};let X={parent:null,zone:new d(null,null)},de=null,ae=0;function Y(){}o("Zone","Zone"),e.Zone=d}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const fe=Object.getOwnPropertyDescriptor,V=Object.defineProperty,te=Object.getPrototypeOf,se=Object.create,be=Array.prototype.slice,Ee="addEventListener",we="removeEventListener",Pe=Zone.__symbol__(Ee),re=Zone.__symbol__(we),ee="true",K="false",le=Zone.__symbol__("");function Ce(e,n){return Zone.current.wrap(e,n)}function me(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}const b=Zone.__symbol__,q="undefined"!=typeof window,I=q?window:void 0,C=q&&I||"object"==typeof self&&self||global;function je(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=Ce(e[i],n+"_"+i));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const Ue="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Ie=!("nw"in C)&&void 0!==C.process&&"[object process]"==={}.toString.call(C.process),He=!Ie&&!Ue&&!(!q||!I.HTMLElement),We=void 0!==C.process&&"[object process]"==={}.toString.call(C.process)&&!Ue&&!(!q||!I.HTMLElement),Le={},qe=function(e){if(!(e=e||C.event))return;let n=Le[e.type];n||(n=Le[e.type]=b("ON_PROPERTY"+e.type));const i=this||e.target||C,o=i[n];let c;if(He&&i===I&&"error"===e.type){const a=e;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),!0===c&&e.preventDefault()}else c=o&&o.apply(this,arguments),null!=c&&!c&&e.preventDefault();return c};function ze(e,n,i){let o=fe(e,n);if(!o&&i&&fe(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=b("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;const a=o.get,E=o.set,d=n.substr(2);let w=Le[d];w||(w=Le[d]=b("ON_PROPERTY"+d)),o.set=function(v){let p=this;!p&&e===C&&(p=C),p&&("function"==typeof p[w]&&p.removeEventListener(d,qe),E&&E.call(p,null),p[w]=v,"function"==typeof v&&p.addEventListener(d,qe,!1))},o.get=function(){let v=this;if(!v&&e===C&&(v=C),!v)return null;const p=v[w];if(p)return p;if(a){let H=a.call(this);if(H)return o.set.call(this,H),"function"==typeof v.removeAttribute&&v.removeAttribute(n),H}return null},V(e,n,o),e[c]=!0}function Xe(e,n,i){if(n)for(let o=0;o<n.length;o++)ze(e,"on"+n[o],i);else{const o=[];for(const c in e)"on"==c.substr(0,2)&&o.push(c);for(let c=0;c<o.length;c++)ze(e,o[c],i)}}const he=b("originalInstance");function Ze(e){const n=C[e];if(!n)return;C[b(e)]=n,C[e]=function(){const c=je(arguments,e);switch(c.length){case 0:this[he]=new n;break;case 1:this[he]=new n(c[0]);break;case 2:this[he]=new n(c[0],c[1]);break;case 3:this[he]=new n(c[0],c[1],c[2]);break;case 4:this[he]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},pe(C[e],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(c){"function"==typeof i[c]?C[e].prototype[c]=function(){return this[he][c].apply(this[he],arguments)}:V(C[e].prototype,c,{set:function(a){"function"==typeof a?(this[he][c]=Ce(a,e+"."+c),pe(this[he][c],a)):this[he][c]=a},get:function(){return this[he][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(C[e][o]=n[o])}function ye(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=te(o);!o&&e[n]&&(o=e);const c=b(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&fe(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},pe(o[n],a)}return a}function lt(e,n,i){let o=null;function c(a){const E=a.data;return E.args[E.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(E.target,E.args),a}o=ye(e,n,a=>function(E,d){const w=i(E,d);return w.cbIdx>=0&&"function"==typeof d[w.cbIdx]?me(w.name,d[w.cbIdx],w,c):a.apply(E,d)})}function pe(e,n){e[b("OriginalDelegate")]=n}let Ye=!1,xe=!1;function ft(){if(Ye)return xe;Ye=!0;try{const e=I.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(xe=!0)}catch(e){}return xe}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,E=i.symbol,d=[],w=!0===e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=E("Promise"),p=E("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){M(u)}}};const L=E("unhandledPromiseRejectionHandler");function M(l){i.onUnhandledError(l);try{const u=n[L];"function"==typeof u&&u.call(this,l)}catch(u){}}function z(l){return l&&l.then}function G(l){return l}function ie(l){return t.reject(l)}const $=E("state"),S=E("value"),_=E("finally"),oe=E("parentPromiseValue"),B=E("parentPromiseState"),x=null,y=!0,F=!1;function A(l,u){return s=>{try{Q(l,u,s)}catch(f){Q(l,!1,f)}}}const _e=E("currentTaskTrace");function Q(l,u,s){const f=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}}();if(l===s)throw new TypeError("Promise resolved with itself");if(l[$]===x){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(R){return f(()=>{Q(l,!1,R)})(),l}if(u!==F&&s instanceof t&&s.hasOwnProperty($)&&s.hasOwnProperty(S)&&s[$]!==x)de(s),Q(l,s[$],s[S]);else if(u!==F&&"function"==typeof g)try{g.call(s,f(A(l,u)),f(A(l,!1)))}catch(R){f(()=>{Q(l,!1,R)})()}else{l[$]=u;const R=l[S];if(l[S]=s,l[_]===_&&u===y&&(l[$]=l[B],l[S]=l[oe]),u===F&&s instanceof Error){const m=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;m&&c(s,_e,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<R.length;)ae(l,R[m++],R[m++],R[m++],R[m++]);if(0==R.length&&u==F){l[$]=0;let m=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(D){m=D}w&&(m.throwOriginal=!0),m.rejection=s,m.promise=l,m.zone=n.current,m.task=n.currentTask,d.push(m),i.scheduleMicroTask()}}}return l}const X=E("rejectionHandledHandler");function de(l){if(0===l[$]){try{const u=n[X];u&&"function"==typeof u&&u.call(this,{rejection:l[S],promise:l})}catch(u){}l[$]=F;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ae(l,u,s,f,g){de(l);const R=l[$],m=R?"function"==typeof f?f:G:"function"==typeof g?g:ie;u.scheduleMicroTask("Promise.then",()=>{try{const D=l[S],Z=!!s&&_===s[_];Z&&(s[oe]=D,s[B]=R);const N=u.run(m,void 0,Z&&m!==ie&&m!==G?[]:[D]);Q(s,!0,N)}catch(D){Q(s,!1,D)}},s)}const j=function(){},T=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Q(new this(null),y,u)}static reject(u){return Q(new this(null),F,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let m of u)f++,s.push(t.resolve(m))}catch(m){return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const R=[];return new t((m,D)=>{for(let Z=0;Z<s.length;Z++)s[Z].then(N=>{g||(g=!0,m(N))},N=>{R.push(N),f--,0===f&&(g=!0,D(new T(R,"All promises were rejected")))})})}static race(u){let s,f,g=new this((D,Z)=>{s=D,f=Z});function R(D){s(D)}function m(D){f(D)}for(let D of u)z(D)||(D=this.resolve(D)),D.then(R,m);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,R=new this((N,U)=>{f=N,g=U}),m=2,D=0;const Z=[];for(let N of u){z(N)||(N=this.resolve(N));const U=D;try{N.then(W=>{Z[U]=s?s.thenCallback(W):W,m--,0===m&&f(Z)},W=>{s?(Z[U]=s.errorCallback(W),m--,0===m&&f(Z)):g(W)})}catch(W){g(W)}m++,D++}return m-=2,0===m&&f(Z),R}constructor(u){const s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[$]=x,s[S]=[];try{u&&u(A(s,y),A(s,F))}catch(f){Q(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){let f=this.constructor[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||t);const g=new f(j),R=n.current;return this[$]==x?this[S].push(R,g,u,s):ae(this,R,g,u,s),g}catch(u){return this.then(null,u)}finally(u){let s=this.constructor[Symbol.species];(!s||"function"!=typeof s)&&(s=t);const f=new s(j);f[_]=_;const g=n.current;return this[$]==x?this[S].push(g,f,u,u):ae(this,g,f,u,u),f}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const r=e[v]=e.Promise;e.Promise=t;const k=E("thenPatched");function O(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[p]=f,l.prototype.then=function(g,R){return new t((D,Z)=>{f.call(this,D,Z)}).then(g,R)},l[k]=!0}return i.patchThen=O,r&&(O(r),ye(e,"fetch",l=>function ne(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[k]||O(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=b("OriginalDelegate"),o=b("Promise"),c=b("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const p=e[o];if(p)return n.call(p)}if(this===Error){const p=e[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}});let Se=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){Se=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){Se=!1}const ht={useG:!0},ue={},$e={},Ke=new RegExp("^"+le+"(\\w+)(true|false)$"),Je=b("propagationStopped");function Qe(e,n){const i=(n?n(e):e)+K,o=(n?n(e):e)+ee,c=le+i,a=le+o;ue[e]={},ue[e][K]=c,ue[e][ee]=a}function dt(e,n,i,o){const c=o&&o.add||Ee,a=o&&o.rm||we,E=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",w=b(c),v="."+c+":",L=function(S,_,oe){if(S.isRemoved)return;const B=S.callback;let J;"object"==typeof B&&B.handleEvent&&(S.callback=y=>B.handleEvent(y),S.originalDelegate=B);try{S.invoke(S,_,[oe])}catch(y){J=y}const x=S.options;return x&&"object"==typeof x&&x.once&&_[a].call(_,oe.type,S.originalDelegate?S.originalDelegate:S.callback,x),J};function M(S,_,oe){if(!(_=_||e.event))return;const B=S||_.target||e,J=B[ue[_.type][oe?ee:K]];if(J){const x=[];if(1===J.length){const y=L(J[0],B,_);y&&x.push(y)}else{const y=J.slice();for(let F=0;F<y.length&&(!_||!0!==_[Je]);F++){const h=L(y[F],B,_);h&&x.push(h)}}if(1===x.length)throw x[0];for(let y=0;y<x.length;y++){const F=x[y];n.nativeScheduleMicroTask(()=>{throw F})}}}const z=function(S){return M(this,S,!1)},G=function(S){return M(this,S,!0)};function ie(S,_){if(!S)return!1;let oe=!0;_&&void 0!==_.useG&&(oe=_.useG);const B=_&&_.vh;let J=!0;_&&void 0!==_.chkDup&&(J=_.chkDup);let x=!1;_&&void 0!==_.rt&&(x=_.rt);let y=S;for(;y&&!y.hasOwnProperty(c);)y=te(y);if(!y&&S[c]&&(y=S),!y||y[w])return!1;const F=_&&_.eventNameToString,h={},A=y[w]=y[c],P=y[b(a)]=y[a],ce=y[b(E)]=y[E],_e=y[b(d)]=y[d];let Q;function X(s,f){return!Se&&"object"==typeof s&&s?!!s.capture:Se&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}_&&_.prepend&&(Q=y[b(_.prepend)]=y[_.prepend]);const t=oe?function(s){if(!h.isExisting)return A.call(h.target,h.eventName,h.capture?G:z,h.options)}:function(s){return A.call(h.target,h.eventName,s.invoke,h.options)},r=oe?function(s){if(!s.isRemoved){const f=ue[s.eventName];let g;f&&(g=f[s.capture?ee:K]);const R=g&&s.target[g];if(R)for(let m=0;m<R.length;m++)if(R[m]===s){R.splice(m,1),s.isRemoved=!0,0===R.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?G:z,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},O=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},ne=Zone[b("UNPATCHED_EVENTS")],l=e[b("PASSIVE_EVENTS")],u=function(s,f,g,R,m=!1,D=!1){return function(){const Z=this||e;let N=arguments[0];_&&_.transferEventName&&(N=_.transferEventName(N));let U=arguments[1];if(!U)return s.apply(this,arguments);if(Ie&&"uncaughtException"===N)return s.apply(this,arguments);let W=!1;if("function"!=typeof U){if(!U.handleEvent)return s.apply(this,arguments);W=!0}if(B&&!B(s,U,Z,arguments))return;const ke=Se&&!!l&&-1!==l.indexOf(N),Te=X(arguments[2],ke);if(ne)for(let Re=0;Re<ne.length;Re++)if(N===ne[Re])return ke?s.call(Z,N,U,Te):s.apply(this,arguments);const Ve=!!Te&&("boolean"==typeof Te||Te.capture),rt=!(!Te||"object"!=typeof Te)&&Te.once,gt=Zone.current;let Be=ue[N];Be||(Qe(N,F),Be=ue[N]);const ot=Be[Ve?ee:K];let Ae,De=Z[ot],st=!1;if(De){if(st=!0,J)for(let Re=0;Re<De.length;Re++)if(O(De[Re],U))return}else De=Z[ot]=[];const it=Z.constructor.name,ct=$e[it];ct&&(Ae=ct[N]),Ae||(Ae=it+f+(F?F(N):N)),h.options=Te,rt&&(h.options.once=!1),h.target=Z,h.capture=Ve,h.eventName=N,h.isExisting=st;const Ne=oe?ht:void 0;Ne&&(Ne.taskData=h);const ve=gt.scheduleEventTask(Ae,U,Ne,g,R);return h.target=null,Ne&&(Ne.taskData=null),rt&&(Te.once=!0),!Se&&"boolean"==typeof ve.options||(ve.options=Te),ve.target=Z,ve.capture=Ve,ve.eventName=N,W&&(ve.originalDelegate=U),D?De.unshift(ve):De.push(ve),m?Z:void 0}};return y[c]=u(A,v,t,r,x),Q&&(y.prependListener=u(Q,".prependListener:",function(s){return Q.call(h.target,h.eventName,s.invoke,h.options)},r,x,!0)),y[a]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],R=!!g&&("boolean"==typeof g||g.capture),m=arguments[1];if(!m)return P.apply(this,arguments);if(B&&!B(P,m,s,arguments))return;const D=ue[f];let Z;D&&(Z=D[R?ee:K]);const N=Z&&s[Z];if(N)for(let U=0;U<N.length;U++){const W=N[U];if(O(W,m))return N.splice(U,1),W.isRemoved=!0,0===N.length&&(W.allRemoved=!0,s[Z]=null,"string"==typeof f)&&(s[le+"ON_PROPERTY"+f]=null),W.zone.cancelTask(W),x?s:void 0}return P.apply(this,arguments)},y[E]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],R=et(s,F?F(f):f);for(let m=0;m<R.length;m++){const D=R[m];g.push(D.originalDelegate?D.originalDelegate:D.callback)}return g},y[d]=function(){const s=this||e;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ue[f];if(g){const D=s[g[K]],Z=s[g[ee]];if(D){const N=D.slice();for(let U=0;U<N.length;U++){const W=N[U];this[a].call(this,f,W.originalDelegate?W.originalDelegate:W.callback,W.options)}}if(Z){const N=Z.slice();for(let U=0;U<N.length;U++){const W=N[U];this[a].call(this,f,W.originalDelegate?W.originalDelegate:W.callback,W.options)}}}}else{const g=Object.keys(s);for(let R=0;R<g.length;R++){const D=Ke.exec(g[R]);let Z=D&&D[1];Z&&"removeListener"!==Z&&this[d].call(this,Z)}this[d].call(this,"removeListener")}if(x)return this},pe(y[c],A),pe(y[a],P),_e&&pe(y[d],_e),ce&&pe(y[E],ce),!0}let $=[];for(let S=0;S<i.length;S++)$[S]=ie(i[S],o);return $}function et(e,n){if(!n){const a=[];for(let E in e){const d=Ke.exec(E);let w=d&&d[1];if(w&&(!n||w===n)){const v=e[E];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=ue[n];i||(Qe(n),i=ue[n]);const o=e[i[K]],c=e[i[ee]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Je]=!0,o&&o.apply(c,a)})}function Tt(e,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const E=n[a]=n[o];n[o]=function(d,w,v){return w&&w.prototype&&c.forEach(function(p){const H=`${i}.${o}::`+p,L=w.prototype;if(L.hasOwnProperty(p)){const M=e.ObjectGetOwnPropertyDescriptor(L,p);M&&M.value?(M.value=e.wrapWithCurrentZone(M.value,H),e._redefineProperty(w.prototype,p,M)):L[p]&&(L[p]=e.wrapWithCurrentZone(L[p],H))}else L[p]&&(L[p]=e.wrapWithCurrentZone(L[p],H))}),E.call(n,d,w,v)},e.attachOriginToPatched(n[o],E)}function tt(e,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===e);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function nt(e,n,i,o){e&&Xe(e,tt(e,n,i),o)}function Ge(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,i)=>{const o=Ge(e);i.patchOnProperties=Xe,i.patchMethod=ye,i.bindArguments=je,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=V,i.ObjectGetOwnPropertyDescriptor=fe,i.ObjectCreate=se,i.ArraySlice=be,i.patchClass=Ze,i.wrapWithCurrentZone=Ce,i.filterProperties=tt,i.attachOriginToPatched=pe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Tt,i.getGlobalObjects=()=>({globalSources:$e,zoneSymbolEventNames:ue,eventNames:o,isBrowser:He,isMix:We,isNode:Ie,TRUE_STR:ee,FALSE_STR:K,ZONE_SYMBOL_PREFIX:le,ADD_EVENT_LISTENER_STR:Ee,REMOVE_EVENT_LISTENER_STR:we})});const Me=b("zoneTask");function Oe(e,n,i,o){let c=null,a=null;i+=o;const E={};function d(v){const p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(e,p.args),v}function w(v){return a.call(e,v.data.handleId)}c=ye(e,n+=o,v=>function(p,H){if("function"==typeof H[0]){const L={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?H[1]||0:void 0,args:H},M=H[0];H[0]=function(){try{return M.apply(this,arguments)}finally{L.isPeriodic||("number"==typeof L.handleId?delete E[L.handleId]:L.handleId&&(L.handleId[Me]=null))}};const z=me(n,H[0],L,d,w);if(!z)return z;const G=z.data.handleId;return"number"==typeof G?E[G]=z:G&&(G[Me]=z),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(z.ref=G.ref.bind(G),z.unref=G.unref.bind(G)),"number"==typeof G||G?G:z}return v.apply(e,H)}),a=ye(e,i,v=>function(p,H){const L=H[0];let M;"number"==typeof L?M=E[L]:(M=L&&L[Me],M||(M=L)),M&&"string"==typeof M.type?"notScheduled"!==M.state&&(M.cancelFn&&M.data.isPeriodic||0===M.runCount)&&("number"==typeof L?delete E[L]:L&&(L[Me]=null),M.zone.cancelTask(M)):v.apply(e,H)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";Oe(e,n,i,"Timeout"),Oe(e,n,i,"Interval"),Oe(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Oe(e,"request","cancel","AnimationFrame"),Oe(e,"mozRequest","mozCancel","AnimationFrame"),Oe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ye(e,i[o],(a,E,d)=>function(w,v){return n.current.run(a,e,v,d)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function mt(e,n){n.patchEventPrototype(e,n)})(e,i),function pt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let w=0;w<i.length;w++){const v=i[w],L=E+(v+a),M=E+(v+c);o[v]={},o[v][a]=L,o[v][c]=M}const d=e.EventTarget;d&&d.prototype&&n.patchEventTarget(e,n,[d&&d.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{Ze("MutationObserver"),Ze("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{Ze("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{Ze("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Et(e,n){if(Ie&&!We||Zone[e.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(He){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const e=I.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];nt(c,Ge(c),i&&i.concat(a),te(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&nt(a.prototype,Ge(a.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function yt(e,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function w(v){const p=v.XMLHttpRequest;if(!p)return;const H=p.prototype;let M=H[Pe],z=H[re];if(!M){const h=v.XMLHttpRequestEventTarget;if(h){const A=h.prototype;M=A[Pe],z=A[re]}}const G="readystatechange",ie="scheduled";function $(h){const A=h.data,P=A.target;P[a]=!1,P[d]=!1;const ce=P[c];M||(M=P[Pe],z=P[re]),ce&&z.call(P,G,ce);const _e=P[c]=()=>{if(P.readyState===P.DONE)if(!A.aborted&&P[a]&&h.state===ie){const X=P[n.__symbol__("loadfalse")];if(0!==P.status&&X&&X.length>0){const de=h.invoke;h.invoke=function(){const ae=P[n.__symbol__("loadfalse")];for(let Y=0;Y<ae.length;Y++)ae[Y]===h&&ae.splice(Y,1);!A.aborted&&h.state===ie&&de.call(h)},X.push(h)}else h.invoke()}else!A.aborted&&!1===P[a]&&(P[d]=!0)};return M.call(P,G,_e),P[i]||(P[i]=h),y.apply(P,A.args),P[a]=!0,h}function S(){}function _(h){const A=h.data;return A.aborted=!0,F.apply(A.target,A.args)}const oe=ye(H,"open",()=>function(h,A){return h[o]=0==A[2],h[E]=A[1],oe.apply(h,A)}),J=b("fetchTaskAborting"),x=b("fetchTaskScheduling"),y=ye(H,"send",()=>function(h,A){if(!0===n.current[x]||h[o])return y.apply(h,A);{const P={target:h,url:h[E],isPeriodic:!1,args:A,aborted:!1},ce=me("XMLHttpRequest.send",S,P,$,_);h&&!0===h[d]&&!P.aborted&&ce.state===ie&&ce.invoke()}}),F=ye(H,"abort",()=>function(h,A){const P=function L(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[J])return F.apply(h,A)})}(e);const i=b("xhrTask"),o=b("xhrSync"),c=b("xhrListener"),a=b("xhrScheduled"),E=b("xhrURL"),d=b("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const i=e.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=e[c];if(a){if(!Fe(fe(e,c)))continue;e[c]=(d=>{const w=function(){return d.apply(this,je(arguments,i+"."+c))};return pe(w,d),w})(a)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){et(e,o).forEach(E=>{const d=e.PromiseRejectionEvent;if(d){const w=new d(o,{promise:c.promise,reason:c.rejection});E.invoke(w)}})}}e.PromiseRejectionEvent&&(n[b("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[b("rejectionHandledHandler")]=i("rejectionhandled"))})}},fe=>{fe(fe.s=955)}]);