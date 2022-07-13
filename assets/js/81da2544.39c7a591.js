"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4063],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const i={},a="Init store",s={unversionedId:"guides/archived/storefront/init-store",id:"guides/archived/storefront/init-store",title:"Init store",description:"Setting Up the Store ID",source:"@site/docs/03-guides/08-archived/03-storefront/01-init-store.md",sourceDirName:"03-guides/08-archived/03-storefront",slug:"/guides/archived/storefront/init-store",permalink:"/guides/archived/storefront/init-store",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-guides/08-archived/03-storefront/01-init-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/guides/archived/storefront/installation"},next:{title:"Create NFTs",permalink:"/guides/archived/storefront/create"}},c={},p=[{value:"Setting Up the Store ID",id:"setting-up-the-store-id",level:3}],u={toc:p};function l(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"init-store"},"Init store"),(0,o.kt)("h3",{id:"setting-up-the-store-id"},"Setting Up the Store ID"),(0,o.kt)("p",null,"When opening a store for the first time you will be asked to connect your wallet. Click the ",(0,o.kt)("strong",{parentName:"p"},"Connect")," button and follow the steps to get connected."),(0,o.kt)("p",null,"Once connected, the store will first run some checks to see if you've already set up a store. After a minute or so, a welcome screen is presented with an ",(0,o.kt)("strong",{parentName:"p"},"Init Store")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:n(68057).Z+"#radius#shadow",width:"2710",height:"1772"})),(0,o.kt)("p",null,"From the wallet dropdown (Phantom pictured below), select a network (mainnet for production, testnet or devnet for practice)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select network",src:n(14784).Z+"#radius#shadow",width:"2710",height:"1772"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Before proceeding, you must have some SOL on your wallet to be able to pay the Init Store transaction fee. In the case of using devnet or testnet you can airdrop SOL to yourself via ",(0,o.kt)("a",{parentName:"p",href:"https://solfaucet.com/"},"Sol Faucet"),".")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Init Store")," button. This starts the store initialization process by prompting you to approve a transaction from your wallet. After approval, your store initialization begins which may take 1-2 minutes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve transaction",src:n(27926).Z+"#radius#shadow",width:"472",height:"682"})),(0,o.kt)("p",null,"After store initialization completes, you must save your new store addresses. In the ",(0,o.kt)("strong",{parentName:"p"},"Store configuration")," section on the store page click on the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button and paste in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"js/packages/web"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save env",src:n(4711).Z+"#radius#shadow",width:"2624",height:"1716"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set env",src:n(8431).Z+"#radius#shadow",width:"2726",height:"1728"})),(0,o.kt)("p",null,"Now restart your webserver (",(0,o.kt)("em",{parentName:"p"},"Ctrl + C")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),") for the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," changes to take effect."))}l.isMDXComponent=!0},27926:function(e,t,n){t.Z=n.p+"assets/images/approve-transaction-22bfae825bc87ab87f753cda1e4ddef3.png"},68057:function(e,t,n){t.Z=n.p+"assets/images/init-store-81f85d48f20fbd8de51823fa57c58bc7.png"},4711:function(e,t,n){t.Z=n.p+"assets/images/save-env-779ff7bc440083b9183767d984da70f0.png"},14784:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-ab28292cdc0183e16595d7c0057da183.png"},8431:function(e,t,n){t.Z=n.p+"assets/images/set-env-601f5c84f96f63beef7068cfbcec2e01.png"}}]);