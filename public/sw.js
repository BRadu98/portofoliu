if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};a[t]=Promise.all(s.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/coding.ed3fb6cf.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/crawl-thumb.d7b32672.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/documentation-thumb.f8c19369.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/face-thumb.a86bdd93.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/landing-thumb.f00968cf.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/lesperance-kp.621296b4.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/lesperance-thumb.85f6aacb.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/med-thumb.e83ad19d.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/portofolioV1-thumb.a157a1a7.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/portofolioV2-kp.1aac147b.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/portofolioV2-thumb.df14cd91.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next//static/media/survey-thumb.ddaf4e2b.png",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/O-XwhaF7BfO0a7TahkVm2/_buildManifest.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/O-XwhaF7BfO0a7TahkVm2/_middlewareManifest.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/O-XwhaF7BfO0a7TahkVm2/_ssgManifest.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/316-3238504895903330.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/main-857fbf388abd6aa9.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/pages/_app-df75d2d9e368aa60.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/pages/index-25c60211aa20aea2.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/pages/resume-cce5519a3666b4c4.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"O-XwhaF7BfO0a7TahkVm2"},{url:"/coding.png",revision:"2380583faf92b951fd2ec2bea6ba87b7"},{url:"/crawl-thumb.png",revision:"9aa47ad6f8ac77877cd6756c1f0fc6ea"},{url:"/documentation-thumb.png",revision:"74f08cfe8c7a28c7a47fc7d53d5607f3"},{url:"/face-thumb.png",revision:"46d01220c0411dc4df367f16cde19919"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"a1429b2c9112e49d5e8c66d1c4b8622a"},{url:"/icon-256x256.png",revision:"7520cd9bc240e3c0d16ac050ea75d572"},{url:"/icon-384x384.png",revision:"8d9642399c753de1a7b1fac58526164b"},{url:"/icon-512x512.png",revision:"5272fc9888c02477439a3ee0adb5aafb"},{url:"/landing-thumb.png",revision:"ee3525866378cbdbfd126fe57c3933d6"},{url:"/lesperance-kp.png",revision:"b56e2505415a9c3f51dae423afcc9500"},{url:"/lesperance-thumb.png",revision:"b44408da8a3913798038c8f70e282332"},{url:"/manifest.json",revision:"25e7855fbf08a03b76a736e3fc6c4b07"},{url:"/med-thumb.png",revision:"96b6e533fd3c0c49230f8a9e0e51b0ce"},{url:"/portofolioV1-thumb.png",revision:"7b7aba56e488ab448d1175f5137e6597"},{url:"/portofolioV2-kp.png",revision:"6c60e554a42f84a0224410091bf62510"},{url:"/portofolioV2-thumb.png",revision:"0e7b4d0ced24cefc90c13911d785b065"},{url:"/survey-thumb.png",revision:"8fed24d2bd1234091d2b3276728fe664"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));