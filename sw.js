if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>s(e,t),l={module:{uri:t},exports:c,require:o};i[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-33358e1f.js",revision:null},{url:"assets/index-bf7d47d6.css",revision:null},{url:"img/paasei.png",revision:"60410e363c5cc59f5e7b2a5b0a63d89b"},{url:"index.html",revision:"32c68c8cd7ecf3c0ac37d1518860ffca"},{url:"registerSW.js",revision:"4324c3595c1111bf4265978b81b8913a"},{url:"manifest.webmanifest",revision:"3615cec5fd230420f4757f71a5635b1b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
