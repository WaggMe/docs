"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return c}});var o=n(83117),i=(n(67294),n(3905));const a={},l="Certified Collections",r={unversionedId:"programs/token-metadata/certified-collections",id:"programs/token-metadata/certified-collections",title:"Certified Collections",description:"Introduction",source:"@site/docs/01-programs/00-token-metadata/04-certified-collections.md",sourceDirName:"01-programs/00-token-metadata",slug:"/programs/token-metadata/certified-collections",permalink:"/programs/token-metadata/certified-collections",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/00-token-metadata/04-certified-collections.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Token Standard",permalink:"/programs/token-metadata/token-standard"},next:{title:"Using NFTs",permalink:"/programs/token-metadata/using-nfts"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Collection NFTs",id:"collection-nfts",level:2},{value:"Verifying NFTs in Collections",id:"verifying-nfts-in-collections",level:2},{value:"Delegating the Collection Authority",id:"delegating-the-collection-authority",level:2},{value:"Set and verify a collection using collections.metaplex.com",id:"set-and-verify-a-collection-using-collectionsmetaplexcom",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"certified-collections"},"Certified Collections"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Certified Collections enables NFTs \u2013 and tokens in general \u2014 ",(0,i.kt)("strong",{parentName:"p"},"to be grouped together")," and for that information to be ",(0,i.kt)("strong",{parentName:"p"},"verified on-chain"),". Additionally, it makes it easier to manage these collections by allocating data for them on-chain."),(0,i.kt)("p",null,"This feature provides the following advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easy to identify which collection any given NFT belongs to without making additional on-chain calls."),(0,i.kt)("li",{parentName:"ul"},"Possible to find all NFTs that belong to a given collection (",(0,i.kt)("a",{parentName:"li",href:"./faq#how-can-i-filter-metadata-accounts-by-collection-using-getprogramaccounts"},"Check the FAQ to see how"),")."),(0,i.kt)("li",{parentName:"ul"},"Easy to manage the collection metadata such as its name, description and image.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The on-chain Certified Collection feature has been added to the Token Metadata program in ",(0,i.kt)("a",{parentName:"p",href:"./changelog/v1.1"},"version 1.1"),"."),(0,i.kt)("p",{parentName:"admonition"},"It replaces the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," field previously defined in external JSON metadata.")),(0,i.kt)("h2",{id:"collection-nfts"},"Collection NFTs"),(0,i.kt)("p",null,"In order to group NFTs \u2014 or any token \u2014 together, we must first create a Collection NFT whose purpose is to store any metadata related to that collection. That's right, ",(0,i.kt)("strong",{parentName:"p"},"a collection of NFT is itself, an NFT"),". It has the same data layout on-chain as any other NFT."),(0,i.kt)("p",null,"The difference between a Collection NFT and a Regular NFT is that the information provided by the former will be used to define the group of NFTs it contains whereas the latter will be used to define the NFT itself."),(0,i.kt)("p",null,"Collection NFTs and Regular NFTs are ",(0,i.kt)("strong",{parentName:"p"},'linked together using a "Belong To" relationship')," on the Metadata account. The optional ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," field on the Metadata account has been created for that purpose."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," field is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", it means the NFT is not part of a collection."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," field is set, it means the NFT is part of the collection specified within that field.")),(0,i.kt)("p",null,"As such, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," field contains two nested fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key"),": This field points to the Collection NFT the NFT belongs to. More precisely, it points to ",(0,i.kt)("strong",{parentName:"li"},"the public key of the Mint Account")," of the Collection NFT. This Mint Account must be owned by the SPL Token program."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Verified"),": This boolean is very important as it is used to verify that the NFT is truly part of the collection it points to.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3330).Z+"#radius",width:"3000",height:"1752"})),(0,i.kt)("p",null,'Notice that, because Collections and NFTs are linked together via a "Belong To" relationship, it is possible by design to define nested collections.'),(0,i.kt)("p",null,"Also note that there is currently no way to distinguish between a Collection NFT and a Regular NFT that is part of a Collection. This is a limitation we are currently working on as part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-program-library/discussions/444"},"version 1.3"),"."),(0,i.kt)("h2",{id:"verifying-nfts-in-collections"},"Verifying NFTs in Collections"),(0,i.kt)("p",null,"As mentioned above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Collection")," field contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified")," boolean which is used to ",(0,i.kt)("strong",{parentName:"p"},"determine if the NFT is truly part of the collection it points to"),". Without this field, anyone could pretend their NFT to be part of any collection."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17122).Z+"#radius",width:"3000",height:"1800"})),(0,i.kt)("p",null,"In order to flip that ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified")," boolean to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", the Authority of the Collection NFT must sign the NFT to prove that it is allowed to be part of the collection."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"EXTREMELY IMPORTANT")," \ud83d\udea8"),(0,i.kt)("p",{parentName:"admonition"},"Explorers, Wallets and Marketplaces, ",(0,i.kt)("strong",{parentName:"p"},"MUST CHECK")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified")," is true. ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified")," can only be set true if the Authority on the Collection NFT has run the ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyCollection")," instruction over the NFT."),(0,i.kt)("p",{parentName:"admonition"},"This is the same pattern as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Creators")," field where ",(0,i.kt)("inlineCode",{parentName:"p"},"Verified")," must be true to validate the NFT."),(0,i.kt)("p",{parentName:"admonition"},"In Order to check if a collection is valid on an NFT you ",(0,i.kt)("strong",{parentName:"p"},"MUST"),":"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Check that the ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," struct is set."),(0,i.kt)("li",{parentName:"ol"},"Check that the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," struct is owned on chain by the SPL Token program."),(0,i.kt)("li",{parentName:"ol"},"Check that ",(0,i.kt)("inlineCode",{parentName:"li"},"Verified")," is true.")),(0,i.kt)("p",{parentName:"admonition"},"If those 3 steps are not followed you could be exposing fraudulent NFTs on real collections.")),(0,i.kt)("p",null,"The following instructions are available to set, verify or unverify an NFT as part of a collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./instructions#verify-the-collection"},"Verify the collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./instructions#unverify-the-collection"},"Unverify the collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./instructions#set-and-verify-the-collection"},"Set and verify the collection")," (Introduced in version 1.2)")),(0,i.kt)("h2",{id:"delegating-the-collection-authority"},"Delegating the Collection Authority"),(0,i.kt)("p",null,"By default, only ",(0,i.kt)("strong",{parentName:"p"},"the Update Authority of the Collection NFT can verify")," that an NFT is part of that collection."),(0,i.kt)("p",null,"However, the Update Authority can also ",(0,i.kt)("strong",{parentName:"p"},"delegate this responsibility")," to other authorities. This allows us to delegate the ability to add NFTs to our collection to one or several trusted parties. These delegated Collection Authorities can then set, verify and/or unverify NFTs from this collection using the instructions listed in the previous section."),(0,i.kt)("p",null,"The following instructions enable us to approve and reject a Collection Authority:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./instructions#approve-a-new-collection-authority"},"Approve a new Collection Authority")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./instructions#revoke-an-existing-collection-authority"},"Revoke an existing Collection Authority"))),(0,i.kt)("h2",{id:"set-and-verify-a-collection-using-collectionsmetaplexcom"},"Set and verify a collection using collections.metaplex.com"),(0,i.kt)("p",null,"Metaplex provides a helpful ",(0,i.kt)("a",{parentName:"p",href:"https://collections.metaplex.com/"},"web tool")," that allows us to create Collection NFTs and add verified NFTs to them."),(0,i.kt)("p",null,"You may use the following step to get started with that tool:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://collections.metaplex.com/"},"collections.metaplex.com")),(0,i.kt)("li",{parentName:"ol"},"Connect your wallet, but first, verify this wallet is the Update Authority."),(0,i.kt)("li",{parentName:"ol"},"Select the cluster you want to work on \u2014 e.g. devnet, mainnet, etc."),(0,i.kt)("li",{parentName:"ol"},'Click on "',(0,i.kt)("strong",{parentName:"li"},"Create a Collection"),'".'),(0,i.kt)("li",{parentName:"ol"},"Enter the name, symbol, logo, and description of your Collection NFT."),(0,i.kt)("li",{parentName:"ol"},"Choose between these three options:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Individual NFTs"),": Insert the mint address of your NFTs."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"First verified creator"),": Insert the public key of the first creator defined in your NFTs. This can help with Candy Machines as the first creator address is derived from their public key."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"CSV file"),": Upload a CSV file that contains the list of mint addresses. The CSV file should contain all the public keys, separated by commas with no spaces."))),(0,i.kt)("li",{parentName:"ol"},'Click "',(0,i.kt)("strong",{parentName:"li"},"Create Collection"),'" and two transaction approvals will be required.',(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The first transaction approval will allow Metaplex to be the delegate to make the migration."),(0,i.kt)("li",{parentName:"ol"},"The second transaction will create the parent Collection NFT."))),(0,i.kt)("li",{parentName:"ol"},"After the parent Collection NFT is created, ",(0,i.kt)("strong",{parentName:"li"},"the migration will start")," in the background. You may close the tab and come back to it later with the same wallet to see the status.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"For a smoother experience, please consider the following points when using this tool:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Always check Solana's network before you start up a migration. You can check here ",(0,i.kt)("a",{parentName:"li",href:"https://solscan.io"},"https://solscan.io"),"."),(0,i.kt)("li",{parentName:"ul"},'If a "Retry" button appears it could be due to network congestion, so click retry and monitor the network.'),(0,i.kt)("li",{parentName:"ul"},'If a "Fail to Migrate Collection" appears, it is likely because a wrong Update Authority was provided.')),(0,i.kt)("p",{parentName:"admonition"},"For all other issues regarding this tool, please visit our discord for further support.")),(0,i.kt)("p",null,"Note that the Metaplex team has recorded a video tutorial on how Verified Collections work and how to use the web tool mentioned above. You can ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing"},"watch it here"),":"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing"},(0,i.kt)("img",{alt:"Verified Collections Tutorial",src:n(70523).Z+"#radius#shadow",width:"600",height:"338"})))))}d.isMDXComponent=!0},3330:function(e,t,n){t.Z=n.p+"assets/images/Token-Metadata-Collections-Collection-NFT-1618bcb71e909d1d6d4e02e2e4623d1e.png"},17122:function(e,t,n){t.Z=n.p+"assets/images/Token-Metadata-Collections-Verified-Collection-417e4f0c12246f8b0622c0fccdb83db1.png"},70523:function(e,t,n){t.Z=n.p+"assets/images/verified-collections-06e572f2f046615c89e5c5c52a3a7375.gif"}}]);