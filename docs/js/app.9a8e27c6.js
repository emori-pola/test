(function(){"use strict";var e={6812:function(e,t,n){var r=n(5130),o=n(6768),i=n(4232);const a={class:"flex z-50 fixed justify-between"},u=(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:"",alt:""})],-1);function l(e,t,n,r,l,s){const c=(0,o.g2)("router-link"),f=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",a,[u,(0,o.Lk)("nav",null,[(0,o.bF)(c,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1}),(0,o.eW)(" | "),(0,o.bF)(c,{to:"/about"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})]),(0,o.Lk)("div",{class:(0,i.C4)(s.currentLangClass)},[(0,o.Lk)("button",{onClick:t[0]||(t[0]=e=>s.switchLanguage("en"))},"English"),(0,o.Lk)("button",{onClick:t[1]||(t[1]=e=>s.switchLanguage("ja"))},"日本語"),(0,o.Lk)("p",null,(0,i.v_)(e.$t("message.hello")),1)],2)]),(0,o.bF)(f)],64)}var s={computed:{currentLangClass(){return"en"===this.$i18n.locale?"font-english":"font-japanese"}},methods:{switchLanguage(e){this.$i18n.locale=e}}},c=n(1241);const f=(0,c.A)(s,[["render",l]]);var p=f,d=n(1387);const g=(0,o.Lk)("section",null,[(0,o.Lk)("h1",{class:"text-header02"},"タイトル")],-1),m={class:"w-[min(1040px,81.25vw)] m-auto"},h=["href"],v={class:""},b=["src","alt"],k={class:"text-left py-gutter-y-0.5"},y={class:"text-header05 mb-gutter-y-0.5"},L={class:"mb-gutter-y-0.5"};function j(e,t,n,r,a,u){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("main",null,[g,(0,o.Lk)("section",m,[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.products,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,class:"mb-gutter-y"},[(0,o.Lk)("a",{href:e.link,class:"grid grid-cols-1 md:grid-cols-custom gap-x-gutter-x"},[(0,o.Lk)("div",v,[(0,o.Lk)("img",{src:e.image,alt:e.title},null,8,b)]),(0,o.Lk)("div",k,[(0,o.Lk)("h2",y,(0,i.v_)(e.title),1),(0,o.Lk)("p",L,(0,i.v_)(e.description),1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.tags,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,class:"bg-BG-tertiary inline-block rounded-full py-1 px-2 mr-2 text-label01"},(0,i.v_)(e),1)))),128))])])],8,h)])))),128))])])])])}var w=n(9896),C={name:"HomeView",components:{},data(){return{products:w.Z}}};const x=(0,c.A)(C,[["render",j]]);var E=x;const O=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(581).then(n.bind(n,4581))},{path:"/oshitimer",name:"oshitimer",component:()=>n.e(673).then(n.bind(n,2673))},{path:"/national-gallery",name:"national-gallery",component:()=>n.e(940).then(n.bind(n,8940))}],A=(0,d.aE)({history:(0,d.LA)("/test/"),routes:O});var _=A,F=n(5931);const P={en:{message:{hello:"This is an English text."}},ja:{message:{hello:"これは日本語のテキストです。"}}},T=(0,F.hU)({locale:"en",fallbackLocale:"en",messages:P});var S=T;(0,r.Ef)(p).use(_).use(S).mount("#app")},9896:function(e,t,n){n.d(t,{Z:function(){return r}});const r=[{title:"推しタイマー",description:"しかしだからお自分に蒙り事は多少横着といなが、その女では並べたてとかいう三つがあるばいるたない。",image:"/images/sample-img.png",link:"/oshitimer",tags:["iOS App"]},{title:"National Gallery",description:"このプロジェクトは...",image:"/images/sample-img.png",link:"/national-gallery",tags:["iOS App","Coursera"]},{title:"Another Project",description:"別のプロジェクトの説明...",image:"/images/sample-img.png",link:"/another-project",tags:["Web App","Design"]},{title:"Another Project",description:"別のプロジェクトの説明...",image:"/images/sample-img.png",link:"/another-project",tags:["Web App","Design"]}]}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{581:"4f37097c",673:"4f6ea175",940:"1717c30d"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/test/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6812)}));r=n.O(r)})();
//# sourceMappingURL=app.9a8e27c6.js.map