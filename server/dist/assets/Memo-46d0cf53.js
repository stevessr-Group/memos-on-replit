import{a2 as he,a3 as ee,r as j,j as a,I as M,a4 as F,a as $,u as O,a5 as te,n as k,d as se,x as Q,b as ue,i as G,a6 as Y,C as fe,W as ge,a7 as we,a8 as pe,a9 as xe,aa as oe,ab as ne,ac as Ce,G as X,ad as K,w as Ne,ae as W,a1 as Z,af as Me,k as Ee,a0 as be,ag as ye,ah as je,ai as ve}from"./index-b7fe78e2.js";import{t as Re,s as q}from"./MemoEditorDialog-85474b63.js";function Se(d,o){return o=typeof o=="function"?o:void 0,d&&d.length?he(d,void 0,o):[]}const Ae=d=>{const o=ee(),[c,r]=j.useState([]),g=d.relationList;j.useEffect(()=>{(async()=>{const w=g.map(t=>o.getOrFetchMemoById(t.relatedMemoId)),e=await Promise.all(w);r(e)})()},[g]);const h=u=>{window.open(`/m/${u.id}`,"_blank")};return a.jsx(a.Fragment,{children:c.length>0&&a.jsx("div",{className:"w-full max-w-full overflow-hidden grid grid-cols-1 gap-1 mt-2",children:c.map(u=>a.jsxs("div",{className:"w-auto flex flex-row justify-start items-center hover:bg-gray-100 dark:hover:bg-zinc-800 rounded text-sm p-1 text-gray-500 dark:text-gray-400 cursor-pointer",onClick:()=>h(u),children:[a.jsx("div",{className:"w-5 h-5 flex justify-center items-center shrink-0 bg-gray-100 dark:bg-zinc-800 rounded-full",children:a.jsx(M.Link,{className:"w-3 h-auto"})}),a.jsx("span",{className:"mx-1 w-auto truncate",children:u.content})]},u.id))})})};var Ie=Object.defineProperty,B=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,J=(d,o,c)=>o in d?Ie(d,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[o]=c,ke=(d,o)=>{for(var c in o||(o={}))ae.call(o,c)&&J(d,c,o[c]);if(B)for(var c of B(o))ie.call(o,c)&&J(d,c,o[c]);return d},Le=(d,o)=>{var c={};for(var r in d)ae.call(d,r)&&o.indexOf(r)<0&&(c[r]=d[r]);if(d!=null&&B)for(var r of B(d))o.indexOf(r)<0&&ie.call(d,r)&&(c[r]=d[r]);return c};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var L;(d=>{const o=class{constructor(e,t,s,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let i=[];for(let l=0;l<this.size;l++)i.push(!1);for(let l=0;l<this.size;l++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();const m=this.addEccAndInterleave(s);if(this.drawCodewords(m),n==-1){let l=1e9;for(let p=0;p<8;p++){this.applyMask(p),this.drawFormatBits(p);const f=this.getPenaltyScore();f<l&&(n=p,l=f),this.applyMask(p)}}h(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(e,t){const s=d.QrSegment.makeSegments(e);return o.encodeSegments(s,t)}static encodeBinary(e,t){const s=d.QrSegment.makeBytes(e);return o.encodeSegments([s],t)}static encodeSegments(e,t,s=1,n=40,i=-1,m=!0){if(!(o.MIN_VERSION<=s&&s<=n&&n<=o.MAX_VERSION)||i<-1||i>7)throw new RangeError("Invalid value");let l,p;for(l=s;;l++){const x=o.getNumDataCodewords(l,t)*8,E=w.getTotalBits(e,l);if(E<=x){p=E;break}if(l>=n)throw new RangeError("Data too long")}for(const x of[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH])m&&p<=o.getNumDataCodewords(l,x)*8&&(t=x);let f=[];for(const x of e){r(x.mode.modeBits,4,f),r(x.numChars,x.mode.numCharCountBits(l),f);for(const E of x.getData())f.push(E)}h(f.length==p);const A=o.getNumDataCodewords(l,t)*8;h(f.length<=A),r(0,Math.min(4,A-f.length),f),r(0,(8-f.length%8)%8,f),h(f.length%8==0);for(let x=236;f.length<A;x^=253)r(x,8,f);let y=[];for(;y.length*8<f.length;)y.push(0);return f.forEach((x,E)=>y[E>>>3]|=x<<7-(E&7)),new o(l,t,y,i)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let s=0;s<this.size;s++)this.setFunctionModule(6,s,s%2==0),this.setFunctionModule(s,6,s%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let s=0;s<t;s++)for(let n=0;n<t;n++)s==0&&n==0||s==0&&n==t-1||s==t-1&&n==0||this.drawAlignmentPattern(e[s],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let s=t;for(let i=0;i<10;i++)s=s<<1^(s>>>9)*1335;const n=(t<<10|s)^21522;h(n>>>15==0);for(let i=0;i<=5;i++)this.setFunctionModule(8,i,g(n,i));this.setFunctionModule(8,7,g(n,6)),this.setFunctionModule(8,8,g(n,7)),this.setFunctionModule(7,8,g(n,8));for(let i=9;i<15;i++)this.setFunctionModule(14-i,8,g(n,i));for(let i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,g(n,i));for(let i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,g(n,i));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let s=0;s<12;s++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;h(t>>>18==0);for(let s=0;s<18;s++){const n=g(t,s),i=this.size-11+s%3,m=Math.floor(s/3);this.setFunctionModule(i,m,n),this.setFunctionModule(m,i,n)}}drawFinderPattern(e,t){for(let s=-4;s<=4;s++)for(let n=-4;n<=4;n++){const i=Math.max(Math.abs(n),Math.abs(s)),m=e+n,l=t+s;0<=m&&m<this.size&&0<=l&&l<this.size&&this.setFunctionModule(m,l,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let s=-2;s<=2;s++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+s,Math.max(Math.abs(n),Math.abs(s))!=1)}setFunctionModule(e,t,s){this.modules[t][e]=s,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,s=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(t,s))throw new RangeError("Invalid argument");const n=o.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][t],i=o.ECC_CODEWORDS_PER_BLOCK[s.ordinal][t],m=Math.floor(o.getNumRawDataModules(t)/8),l=n-m%n,p=Math.floor(m/n);let f=[];const A=o.reedSolomonComputeDivisor(i);for(let x=0,E=0;x<n;x++){let R=e.slice(E,E+p-i+(x<l?0:1));E+=R.length;const P=o.reedSolomonComputeRemainder(R,A);x<l&&R.push(0),f.push(R.concat(P))}let y=[];for(let x=0;x<f[0].length;x++)f.forEach((E,R)=>{(x!=p-i||R>=l)&&y.push(E[x])});return h(y.length==m),y}drawCodewords(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let s=this.size-1;s>=1;s-=2){s==6&&(s=5);for(let n=0;n<this.size;n++)for(let i=0;i<2;i++){const m=s-i,p=(s+1&2)==0?this.size-1-n:n;!this.isFunction[p][m]&&t<e.length*8&&(this.modules[p][m]=g(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let s=0;s<this.size;s++){let n;switch(e){case 0:n=(s+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=s%3==0;break;case 3:n=(s+t)%3==0;break;case 4:n=(Math.floor(s/3)+Math.floor(t/2))%2==0;break;case 5:n=s*t%2+s*t%3==0;break;case 6:n=(s*t%2+s*t%3)%2==0;break;case 7:n=((s+t)%2+s*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][s]&&n&&(this.modules[t][s]=!this.modules[t][s])}}getPenaltyScore(){let e=0;for(let i=0;i<this.size;i++){let m=!1,l=0,p=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[i][f]==m?(l++,l==5?e+=o.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,p),m||(e+=this.finderPenaltyCountPatterns(p)*o.PENALTY_N3),m=this.modules[i][f],l=1);e+=this.finderPenaltyTerminateAndCount(m,l,p)*o.PENALTY_N3}for(let i=0;i<this.size;i++){let m=!1,l=0,p=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][i]==m?(l++,l==5?e+=o.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,p),m||(e+=this.finderPenaltyCountPatterns(p)*o.PENALTY_N3),m=this.modules[f][i],l=1);e+=this.finderPenaltyTerminateAndCount(m,l,p)*o.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let m=0;m<this.size-1;m++){const l=this.modules[i][m];l==this.modules[i][m+1]&&l==this.modules[i+1][m]&&l==this.modules[i+1][m+1]&&(e+=o.PENALTY_N2)}let t=0;for(const i of this.modules)t=i.reduce((m,l)=>m+(l?1:0),t);const s=this.size*this.size,n=Math.ceil(Math.abs(t*20-s*10)/s)-1;return h(0<=n&&n<=9),e+=n*o.PENALTY_N4,h(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let s=[6];for(let n=this.size-7;s.length<e;n-=t)s.splice(1,0,n);return s}}static getNumRawDataModules(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const s=Math.floor(e/7)+2;t-=(25*s-10)*s-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let s=1;for(let n=0;n<e;n++){for(let i=0;i<t.length;i++)t[i]=o.reedSolomonMultiply(t[i],s),i+1<t.length&&(t[i]^=t[i+1]);s=o.reedSolomonMultiply(s,2)}return t}static reedSolomonComputeRemainder(e,t){let s=t.map(n=>0);for(const n of e){const i=n^s.shift();s.push(0),t.forEach((m,l)=>s[l]^=o.reedSolomonMultiply(m,i))}return s}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let s=0;for(let n=7;n>=0;n--)s=s<<1^(s>>>7)*285,s^=(t>>>n&1)*e;return h(s>>>8==0),s}finderPenaltyCountPatterns(e){const t=e[1];h(t<=this.size*3);const s=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(s&&e[0]>=t*4&&e[6]>=t?1:0)+(s&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,s){return e&&(this.finderPenaltyAddHistory(t,s),t=0),t+=this.size,this.finderPenaltyAddHistory(t,s),this.finderPenaltyCountPatterns(s)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let c=o;c.MIN_VERSION=1,c.MAX_VERSION=40,c.PENALTY_N1=3,c.PENALTY_N2=3,c.PENALTY_N3=40,c.PENALTY_N4=10,c.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],c.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],d.QrCode=c;function r(e,t,s){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)s.push(e>>>n&1)}function g(e,t){return(e>>>t&1)!=0}function h(e){if(!e)throw new Error("Assertion error")}const u=class{constructor(e,t,s){if(this.mode=e,this.numChars=t,this.bitData=s,t<0)throw new RangeError("Invalid argument");this.bitData=s.slice()}static makeBytes(e){let t=[];for(const s of e)r(s,8,t);return new u(u.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!u.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let s=0;s<e.length;){const n=Math.min(e.length-s,3);r(parseInt(e.substr(s,n),10),n*3+1,t),s+=n}return new u(u.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!u.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],s;for(s=0;s+2<=e.length;s+=2){let n=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(s))*45;n+=u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(s+1)),r(n,11,t)}return s<e.length&&r(u.ALPHANUMERIC_CHARSET.indexOf(e.charAt(s)),6,t),new u(u.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:u.isNumeric(e)?[u.makeNumeric(e)]:u.isAlphanumeric(e)?[u.makeAlphanumeric(e)]:[u.makeBytes(u.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else if(e<1e6)r(6,3,t),r(e,21,t);else throw new RangeError("ECI assignment value out of range");return new u(u.Mode.ECI,0,t)}static isNumeric(e){return u.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return u.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let s=0;for(const n of e){const i=n.mode.numCharCountBits(t);if(n.numChars>=1<<i)return 1/0;s+=4+i+n.bitData.length}return s}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let s=0;s<e.length;s++)e.charAt(s)!="%"?t.push(e.charCodeAt(s)):(t.push(parseInt(e.substr(s+1,2),16)),s+=2);return t}};let w=u;w.NUMERIC_REGEX=/^[0-9]*$/,w.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,w.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",d.QrSegment=w})(L||(L={}));(d=>{(o=>{const c=class{constructor(g,h){this.ordinal=g,this.formatBits=h}};let r=c;r.LOW=new c(0,1),r.MEDIUM=new c(1,0),r.QUARTILE=new c(2,3),r.HIGH=new c(3,2),o.Ecc=r})(d.QrCode||(d.QrCode={}))})(L||(L={}));(d=>{(o=>{const c=class{constructor(g,h){this.modeBits=g,this.numBitsCharCount=h}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};let r=c;r.NUMERIC=new c(1,[10,12,14]),r.ALPHANUMERIC=new c(2,[9,11,13]),r.BYTE=new c(4,[8,16,16]),r.KANJI=new c(8,[8,10,12]),r.ECI=new c(7,[0,0,0]),o.Mode=r})(d.QrSegment||(d.QrSegment={}))})(L||(L={}));var T=L;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var _e={L:T.QrCode.Ecc.LOW,M:T.QrCode.Ecc.MEDIUM,Q:T.QrCode.Ecc.QUARTILE,H:T.QrCode.Ecc.HIGH},Pe=128,De="L",Te="#FFFFFF",Fe="#000000",Be=!1,re=4,Oe=.1;function ze(d,o=0){const c=[];return d.forEach(function(r,g){let h=null;r.forEach(function(u,w){if(!u&&h!==null){c.push(`M${h+o} ${g+o}h${w-h}v1H${h+o}z`),h=null;return}if(w===r.length-1){if(!u)return;h===null?c.push(`M${w+o},${g+o} h1v1H${w+o}z`):c.push(`M${h+o},${g+o} h${w+1-h}v1H${h+o}z`);return}u&&h===null&&(h=w)})}),c.join("")}function Ue(d,o){return d.slice().map((c,r)=>r<o.y||r>=o.y+o.h?c:c.map((g,h)=>h<o.x||h>=o.x+o.w?g:!1))}function $e(d,o,c,r){if(r==null)return null;const g=c?re:0,h=d.length+g*2,u=Math.floor(o*Oe),w=h/o,e=(r.width||u)*w,t=(r.height||u)*w,s=r.x==null?d.length/2-e/2:r.x*w,n=r.y==null?d.length/2-t/2:r.y*w;let i=null;if(r.excavate){let m=Math.floor(s),l=Math.floor(n),p=Math.ceil(e+s-m),f=Math.ceil(t+n-l);i={x:m,y:l,w:p,h:f}}return{x:s,y:n,h:t,w:e,excavation:i}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function Qe(d){const o=d,{value:c,size:r=Pe,level:g=De,bgColor:h=Te,fgColor:u=Fe,includeMargin:w=Be,imageSettings:e}=o,t=Le(o,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let s=T.QrCode.encodeText(c,_e[g]).getModules();const n=w?re:0,i=s.length+n*2,m=$e(s,r,w,e);let l=null;e!=null&&m!=null&&(m.excavation!=null&&(s=Ue(s,m.excavation)),l=F.createElement("image",{xlinkHref:e.src,height:m.h,width:m.w,x:m.x+n,y:m.y+n,preserveAspectRatio:"none"}));const p=ze(s,n);return F.createElement("svg",ke({height:r,width:r,viewBox:`0 0 ${i} ${i}`},t),F.createElement("path",{fill:h,d:`M0,0 h${i}v${i}H0z`,shapeRendering:"crispEdges"}),F.createElement("path",{fill:u,d:p,shapeRendering:"crispEdges"}),l)}const Ve=d=>{const{t:o}=O(),{memoId:c,destroy:r}=d,g=()=>`<iframe style="width:100%;height:auto;min-width:256px;" src="${window.location.origin}/m/${c}/embed" frameBorder="0"></iframe>`,h=()=>{te(g()),k.success("Succeed to copy code to clipboard.")};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dialog-header-container",children:[a.jsx("p",{className:"title-text",children:o("embed-memo.title")}),a.jsx("button",{className:"btn close-btn",onClick:()=>r(),children:a.jsx(M.X,{})})]}),a.jsxs("div",{className:"dialog-content-container !w-80",children:[a.jsx("p",{className:"text-base leading-6 mb-2",children:o("embed-memo.text")}),a.jsx("pre",{className:"w-full font-mono text-sm p-3 border rounded-lg",children:a.jsx("code",{className:"w-full break-all whitespace-pre-wrap",children:g()})}),a.jsxs("p",{className:"w-full text-sm leading-6 flex flex-row justify-between items-center mt-2",children:[a.jsx("span",{className:"italic opacity-80",children:o("embed-memo.only-public-supported")}),a.jsx("span",{className:"btn-primary",onClick:h,children:o("embed-memo.copy")})]})]})]})};function He(d){$({className:"embed-memo-dialog",dialogName:"embed-memo-dialog"},Ve,{memoId:d})}const Ge=d=>{const{memo:o,destroy:c}=d,{t:r}=O(),g=se(),h=Q(),u=ue(),w=g.state.user,{systemStatus:e}=u.state,[t,s]=j.useState({memoAmount:0,memoVisibility:o.visibility,showQRCode:!0}),n=G(!1),i=G(),m=j.useRef(null),l={...o,displayTsStr:Y(o.displayTs)},p=Math.ceil((Date.now()-fe(w.createdTs))/1e3/3600/24);j.useEffect(()=>{ge(w.id).then(({data:N})=>{f({memoAmount:N.length}),i.setFinish()}).catch(N=>{console.error(N)})},[]);const f=N=>{s({...t,...N})},A=()=>{c()},y=()=>{m.current&&(n.setLoading(),Ce(m.current,{pixelRatio:window.devicePixelRatio*2}).then(N=>{const v=document.createElement("a");v.href=N,v.download=`memos-${Y(Date.now())}.png`,v.click(),n.setFinish()}).catch(N=>{console.error(N)}))},x=()=>{He(l.id)},E=()=>{te(`${window.location.origin}/m/${l.id}`),k.success(r("message.succeed-copy-link"))},R=we.map(N=>({value:N.value,text:r(`memo.visibility.${Re(N.value)}`)})),P=async N=>{const v=N;f({memoVisibility:v}),await h.patchMemo({id:l.id,visibility:v})};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dialog-header-container py-3 px-4 !mb-0 rounded-t-lg",children:[a.jsxs("p",{className:"",children:[r("common.share")," Memo"]}),a.jsx("button",{className:"btn close-btn",onClick:A,children:a.jsx(M.X,{className:"icon-img"})})]}),a.jsxs("div",{className:"dialog-content-container w-full flex flex-col justify-start items-start relative",children:[a.jsxs("div",{className:"px-4 pb-3 w-full flex flex-row justify-start items-center",children:[a.jsxs("span",{className:"text-sm mr-2",children:[r("common.visibility"),":"]}),a.jsx(pe,{className:"!min-w-[10rem] w-auto text-sm",value:t.memoVisibility,onChange:(N,v)=>{v&&P(v)},children:R.map(N=>a.jsx(xe,{value:N.value,className:"whitespace-nowrap",children:N.text},N.value))})]}),a.jsxs("div",{className:"px-4 pb-3 w-full flex flex-row justify-start items-center space-x-2",children:[a.jsxs("button",{disabled:n.isLoading,className:"btn-normal h-8",onClick:y,children:[n.isLoading?a.jsx(M.Loader,{className:"w-4 h-auto mr-1 animate-spin"}):a.jsx(M.Download,{className:"w-4 h-auto mr-1"}),r("common.image")]}),a.jsxs("button",{className:"btn-normal h-8",onClick:x,children:[a.jsx(M.Code,{className:"w-4 h-auto mr-1"}),r("memo.embed")]}),a.jsxs("button",{className:"btn-normal h-8",onClick:E,children:[a.jsx(M.Link,{className:"w-4 h-auto mr-1"}),r("common.link")]})]}),a.jsx("div",{className:"w-full rounded-lg border-t overflow-clip",children:a.jsxs("div",{className:"w-full h-auto select-none relative flex flex-col justify-start items-start bg-white dark:bg-zinc-800",ref:m,children:[a.jsx("span",{className:"w-full px-6 pt-5 pb-2 text-sm text-gray-500",children:l.displayTsStr}),a.jsxs("div",{className:"w-full px-6 text-base pb-4",children:[a.jsx(oe,{content:l.content,showFull:!0}),a.jsx(ne,{className:"!grid-cols-2",resourceList:l.resourceList})]}),a.jsxs("div",{className:"flex flex-row justify-between items-center w-full bg-gray-100 dark:bg-zinc-700 py-4 px-6",children:[a.jsx("div",{className:"mr-2",children:a.jsx("img",{className:"h-10 w-auto rounded-lg",src:`${e.customizedProfile.logoUrl||"/logo.webp"}`,alt:""})}),a.jsxs("div",{className:"w-auto grow truncate flex mr-2 flex-col justify-center items-start",children:[a.jsx("span",{className:"w-full text-sm truncate font-bold text-gray-600 dark:text-gray-300",children:w.nickname||w.username}),a.jsxs("span",{className:"text-xs text-gray-400",children:[t.memoAmount," MEMOS / ",p," DAYS"]})]}),a.jsx(Qe,{value:`${window.location.origin}/m/${l.id}`,size:40,bgColor:"#F3F4F6",fgColor:"#4B5563",includeMargin:!1})]})]})})]})]})};function Ye(d){$({className:"share-memo-dialog",dialogName:"share-memo-dialog"},Ge,{memo:d})}const Xe=d=>{const{t:o}=O(),{destroy:c,memoId:r}=d,g=Q(),[h,u]=j.useState(""),w=X();j.useEffect(()=>{g.getMemoById(r).then(n=>{if(n){const i=X(n.createdTs);u(i)}else k.error(o("message.memo-not-found")),c()})},[]);const e=()=>{c()},t=n=>{const i=n.target.value;u(i)},s=async()=>{const n=K(),i=K(h);if(i>n){k.error(o("message.invalid-created-datetime"));return}try{await g.patchMemo({id:r,createdTs:i}),k.success(o("message.memo-updated-datetime")),e()}catch(m){console.error(m),k.error(m.response.data.message)}};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"dialog-header-container",children:[a.jsx("p",{className:"title-text",children:o("message.change-memo-created-time")}),a.jsx("button",{className:"btn close-btn",onClick:e,children:a.jsx(M.X,{})})]}),a.jsxs("div",{className:"flex flex-col justify-start items-start !w-72 max-w-full",children:[a.jsxs("div",{className:"w-full bg-yellow-100 border border-yellow-400 rounded p-2 text-black",children:[a.jsx("p",{className:"uppercase",children:o("message.change-memo-created-time-warning-1")}),a.jsx("p",{children:o("message.change-memo-created-time-warning-2")})]}),a.jsx("input",{className:"input-text mt-2",type:"datetime-local",value:h,max:w,onChange:t}),a.jsxs("div",{className:"flex flex-row justify-end items-center mt-2 w-full",children:[a.jsx("span",{className:"btn-text",onClick:e,children:o("common.cancel")}),a.jsx("span",{className:"btn-primary",onClick:s,children:o("common.save")})]})]})]})};function Ke(d){$({className:"change-memo-created-ts-dialog",dialogName:"change-memo-created-ts-dialog"},Xe,{memoId:d})}const le=d=>{const{memo:o,showCreator:c,showVisibility:r,showRelatedMemos:g}=d,{t:h,i18n:u}=O(),w=Ne(),e=se(),t=Q(),s=ee(),[n,i]=j.useState(W(o.displayTs)),[m,l]=j.useState([]),p=j.useRef(null),f=e.isVisitorMode()||e.getCurrentUserId()!==o.creatorId;j.useEffect(()=>{Promise.allSettled(o.relationList.map(C=>s.getOrFetchMemoById(C.relatedMemoId))).then(C=>{const b=[];for(const I of C)I.status==="fulfilled"&&b.push(I.value);l(Se(b,ve))})},[o.relationList]),j.useEffect(()=>{let C=-1;return Date.now()-o.displayTs<1e3*60*60*24&&(C=setInterval(()=>{i(W(o.displayTs))},1e3*1)),()=>{clearInterval(C)}},[u.language]);const A=async()=>{try{o.pinned?await t.unpinMemo(o.id):await t.pinMemo(o.id)}catch{}},y=()=>{q({memoId:o.id})},x=()=>{q({relationList:[{memoId:be,relatedMemoId:o.id,type:"REFERENCE"}]})},E=async()=>{try{await t.patchMemo({id:o.id,rowStatus:"ARCHIVED"})}catch(C){console.error(C),k.error(C.response.data.message)}},R=async()=>{ye({title:h("memo.delete-memo"),content:h("memo.delete-confirm"),style:"warning",dialogName:"delete-memo-dialog",onConfirm:async()=>{await t.deleteMemoById(o.id)}})},P=()=>{Ye(o)},N=async C=>{var I,V;const b=C.target;if(b.className==="tag-span"){const S=b.innerText.slice(1);w.getState().tag===S?w.setTagFilter(void 0):w.setTagFilter(S)}else if(b.classList.contains("todo-block")){if(f)return;const S=(I=b.dataset)==null?void 0:I.value,z=[...((V=p.current)==null?void 0:V.querySelectorAll(`span.todo-block[data-value=${S}]`))??[]];for(const H of z)if(H===b){const de=z.indexOf(H),U=o.content.split(S==="DONE"?/- \[x\] /:/- \[ \] /);let D="";for(let _=0;_<U.length;_++)_===0?D+=`${U[_]}`:(_===de+1?D+=S==="DONE"?"- [ ] ":"- [x] ":D+=S==="DONE"?"- [x] ":"- [ ] ",D+=`${U[_]}`);await t.patchMemo({id:o.id,content:D})}}else if(b.tagName==="IMG"){const S=b.getAttribute("src");S&&je([S],0)}},v=C=>{if(f)return;const b=e.state.user;if(b&&!b.localSetting.enableDoubleClickEditing)return;const I=C.target;I.className!=="tag-span"&&(I.classList.contains("todo-block")||y())},ce=C=>{C.altKey&&(C.preventDefault(),Ke(o.id))},me=C=>{w.getState().visibility===C?w.setMemoVisibilityFilter(void 0):w.setMemoVisibilityFilter(C)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`memo-wrapper ${"memos-"+o.id} ${o.pinned&&!f?"pinned":""}`,ref:p,children:[a.jsxs("div",{className:"memo-top-wrapper",children:[a.jsxs("div",{className:"status-text-container",children:[a.jsx(Z,{className:"time-text",to:`/m/${o.id}`,onClick:ce,children:n}),c&&a.jsxs(Z,{className:"name-text",to:`/u/${o.creatorId}`,children:["@",o.creatorName]})]}),a.jsxs("div",{className:"btns-container space-x-2",children:[r&&o.visibility!=="PRIVATE"&&a.jsx(Me,{title:h(`memo.visibility.${o.visibility.toLowerCase()}`),placement:"top",children:a.jsx("div",{onClick:()=>me(o.visibility),children:o.visibility==="PUBLIC"?a.jsx(M.Globe2,{className:"w-4 h-auto cursor-pointer rounded text-green-600"}):a.jsx(M.Users,{className:"w-4 h-auto cursor-pointer rounded text-gray-500 dark:text-gray-400"})})}),o.pinned&&a.jsx(M.Bookmark,{className:"w-4 h-auto rounded text-green-600"}),!f&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"btn more-action-btn",children:a.jsx(M.MoreHorizontal,{className:"icon-img"})}),a.jsx("div",{className:"more-action-btns-wrapper",children:a.jsxs("div",{className:"more-action-btns-container min-w-[6em]",children:[a.jsxs("span",{className:"btn",onClick:A,children:[o.pinned?a.jsx(M.BookmarkMinus,{className:"w-4 h-auto mr-2"}):a.jsx(M.BookmarkPlus,{className:"w-4 h-auto mr-2"}),o.pinned?h("common.unpin"):h("common.pin")]}),a.jsxs("span",{className:"btn",onClick:y,children:[a.jsx(M.Edit3,{className:"w-4 h-auto mr-2"}),h("common.edit")]}),a.jsxs("span",{className:"btn",onClick:P,children:[a.jsx(M.Share,{className:"w-4 h-auto mr-2"}),h("common.share")]}),a.jsxs("span",{className:"btn",onClick:x,children:[a.jsx(M.Link,{className:"w-4 h-auto mr-2"}),"Mark"]}),a.jsx(Ee,{className:"!my-1"}),a.jsxs("span",{className:"btn text-orange-500",onClick:E,children:[a.jsx(M.Archive,{className:"w-4 h-auto mr-2"}),h("common.archive")]}),a.jsxs("span",{className:"btn text-red-600",onClick:R,children:[a.jsx(M.Trash,{className:"w-4 h-auto mr-2"}),h("common.delete")]})]})})]})]})]}),a.jsx(oe,{content:o.content,onMemoContentClick:N,onMemoContentDoubleClick:v}),a.jsx(ne,{resourceList:o.resourceList}),!g&&a.jsx(Ae,{relationList:o.relationList})]}),g&&m.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"text-sm dark:text-gray-300 my-2 pl-4 opacity-50 flex flex-row items-center",children:[a.jsx(M.Link,{className:"w-4 h-auto mr-1"}),a.jsx("span",{children:"Related memos"})]}),m.map(C=>a.jsx("div",{className:"w-full",children:a.jsx(le,{memo:C,showCreator:!0})},C.id))]})]})},qe=j.memo(le);export{qe as M};