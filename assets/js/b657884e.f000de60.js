"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[151],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6385:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},s="Sell NFTs",c={unversionedId:"create-store/sell",id:"create-store/sell",isDocsHomePage:!1,title:"Sell NFTs",description:"Once you have finished minting NFT assets, you will be able to sell them. Click on the Sale button in the header.",source:"@site/docs/create-store/sell.md",sourceDirName:"create-store",slug:"/create-store/sell",permalink:"/docs/docs/create-store/sell",editUrl:"https://github.com/metaplex/docs/docs/create-store/sell.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Create NFTs",permalink:"/docs/docs/create-store/create"},next:{title:"Auction Sale",permalink:"/docs/docs/create-store/auction"}},u=[{value:"Instant Sale",id:"instant-sale",children:[{value:"Select which item to sell",id:"select-which-item-to-sell",children:[]},{value:"Review and list",id:"review-and-list",children:[]}]}],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sell-nfts"},"Sell NFTs"),(0,i.kt)("p",null,"Once you have finished minting NFT assets, you will be able to sell them. Click on the ",(0,i.kt)("strong",{parentName:"p"},"Sale")," button in the header.\nAfter clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Sale")," button, you will be redirected to a Sell section. It's intended for selling NFT assets.\nHere you can select the desired sale type, it may be an instant sale or an auction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Header button",src:n(9594).Z})),(0,i.kt)("h2",{id:"instant-sale"},"Instant Sale"),(0,i.kt)("p",null,"The instant sale allows you to sell a single Master NFT or copies of it at a single price. Other sale types are pretty identical, so you can follow up on this section."),(0,i.kt)("h3",{id:"select-which-item-to-sell"},"Select which item to sell"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Create copies of a Master Edition NFT?")," option allows you to sell copies of a single Master NFT."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select item",src:n(602).Z})),(0,i.kt)("h3",{id:"review-and-list"},"Review and list"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Explore",src:n(7150).Z})),(0,i.kt)("p",null,"After a successful publish you should see your item listed on the home page under ",(0,i.kt)("strong",{parentName:"p"},"Live Auctions")," or in the block below the header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Explore",src:n(9215).Z})))}d.isMDXComponent=!0},9215:function(e,t,n){t.Z=n.p+"assets/images/instant-sale-explore-15ae11526aa535a8329c6d82c4fae68e.png"},7150:function(e,t,n){t.Z=n.p+"assets/images/process-5a16297d1f2f01e291a8688080db736b.gif"},602:function(e,t,n){t.Z=n.p+"assets/images/select-item-b57579dbd79bb17863f7bbafd9133c44.gif"},9594:function(e,t,n){t.Z=n.p+"assets/images/select-type-eed0362a681bc3b398586d72a849c40c.png"}}]);