if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const d=e=>s(e,t),o={module:{uri:t},exports:c,require:d};i[t]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3f0649dc.css",revision:null},{url:"assets/index-4350d590.js",revision:null},{url:"icon.png",revision:"3f35863677c7512d95a40ed3c231536f"},{url:"img/paasei.png",revision:"60410e363c5cc59f5e7b2a5b0a63d89b"},{url:"index.html",revision:"1d712f7ca29228e0f866ad2e3aa2cc09"},{url:"registerSW.js",revision:"28d2ed512b508c8d8ca20041fc962fed"},{url:"manifest.webmanifest",revision:"25184a4cd30092861b5c78fcad8d7a4d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
