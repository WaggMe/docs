"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[231],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7315:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={sidebar_position:5},d="Token Metadata Standard",s={unversionedId:"nft-standard",id:"nft-standard",isDocsHomePage:!1,title:"Token Metadata Standard",description:"Huge thanks to SolFlare for putting this together!",source:"@site/docs/nft-standard.md",sourceDirName:".",slug:"/nft-standard",permalink:"/docs/docs/nft-standard",editUrl:"https://github.com/metaplex/docs/docs/nft-standard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"update-cm",permalink:"/docs/docs/create-candy/update-cm"},next:{title:"Overview",permalink:"/docs/docs/architecture/overview"}},p=[{value:"Token Metadata Program",id:"token-metadata-program",children:[]},{value:"URI JSON Schema",id:"uri-json-schema",children:[{value:"JSON Structure",id:"json-structure",children:[]},{value:"Additonal suggestions",id:"additonal-suggestions",children:[]}]}],u={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-metadata-standard"},"Token Metadata Standard"),(0,r.kt)("h4",{id:"huge-thanks-to-solflare-for-putting-this-together"},"Huge thanks to SolFlare for putting this together!"),(0,r.kt)("p",null,"SPL wallets should support the displaying of ",(0,r.kt)("em",{parentName:"p"},"metadata")," associated with SPL tokens, in accordance with the standards described by the Metaplex Token Metadata contract. Wallets should pull both the on-chain data and the external JSON provided by the metadata's ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," field and use them to display all relevant data."),(0,r.kt)("p",null,"We recommend following the Metaplex standards and standards defined in this document to ensure your NFT will be correctly displayed in your wallets and to allow usage of all functionalities related to NFTs."),(0,r.kt)("h2",{id:"token-metadata-program"},"Token Metadata Program"),(0,r.kt)("p",null,"The concept of the Token Metadata program is to provide decorator structs to a token mint. Basic info about the SPL token is provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," struct, whose account address is a PDA with a derived key of ",(0,r.kt)("inlineCode",{parentName:"p"},"['metadata', metadata_program_id, mint_id]"),"."),(0,r.kt)("p",null,"Your wallet should be using the following information from the on-chain metadata:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"How do we display it"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the asset"),(0,r.kt)("td",{parentName:"tr",align:null},"grid view and single NFT view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"symbol of the asset"),(0,r.kt)("td",{parentName:"tr",align:null},"not shown currently")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to the external JSON representing the asset"),(0,r.kt)("td",{parentName:"tr",align:null},"linked in the single NFT view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creators"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"public key of each creator"),(0,r.kt)("td",{parentName:"tr",align:null},"shown in the single NFT view, resolved to twitter handles if they are connected via Solana Name Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update_authority"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"public key of the metadata owner"),(0,r.kt)("td",{parentName:"tr",align:null},"shown in the single NFT view, can be updated in the send NFT modal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary_sale_happened"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"flag describing whether the primary sale of the token happened"),(0,r.kt)("td",{parentName:"tr",align:null},"visible in the send NFT modal, can be updated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seller_fee_basis_points"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"royalties percentage awarded to creators"),(0,r.kt)("td",{parentName:"tr",align:null},"shown as a percentage received by each co-creator")))),(0,r.kt)("p",null,"The program also specifies optional structs used for the creation ",(0,r.kt)("inlineCode",{parentName:"p"},"Master Editions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Editions"),". If these accounts exist, your wallet should display the Edition number (in case of a unique edition token) and whether a token is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Master Edition"),"."),(0,r.kt)("p",null,"!!! info\nYou can explore the metadata standard in more detail on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex"},"Metaplex project page")," and in their developer guide."),(0,r.kt)("h2",{id:"uri-json-schema"},"URI JSON Schema"),(0,r.kt)("p",null,"To display off-chain metadata of SPL tokens, the on-chain struct needs to contain a URI as described above, which will allow your wallet to find it."),(0,r.kt)("p",null,"Your wallet should be using the JSON standard as described in the Metaplex Developer Guide. You should also also supports additional optional fields, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," field, as described in the OpenSea NFT Standard."),(0,r.kt)("p",null,"The file below should be used as a reference."),(0,r.kt)("h3",{id:"json-structure"},"JSON Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name": "Solflare X NFT",\n  "symbol": "",\n  "description": "Celebratory Solflare NFT for the Solflare X launch",\n  "seller_fee_basis_points": 0,\n  "image": "https://www.arweave.net/abcd5678?ext=png",\n  "animation_url": "https://www.arweave.net/efgh1234?ext=mp4",\n  "external_url": "https://solflare.com",\n  "attributes": [\n    {\n      "trait_type": "web",\n      "value": "yes"\n    },\n    {\n      "trait_type": "mobile",\n      "value": "yes"\n   },\n   {\n      "trait_type": "extension",\n      "value": "yes"\n    }\n  ],\n  "collection": {\n     "name": "Solflare X NFT",\n     "family": "Solflare"\n  },\n  "properties": {\n    "files": [\n      {\n        "uri": "https://www.arweave.net/abcd5678?ext=png",\n        "type": "image/png"\n      },\n      {\n        "uri": "https://watch.videodelivery.net/9876jkl",\n        "type": "unknown",\n        "cdn": true\n      },\n      {\n        "uri": "https://www.arweave.net/efgh1234?ext=mp4",\n        "type": "video/mp4"\n      }\n    ],\n    "category": "video",\n    "creators": [\n      {\n        "address": "SOLFLR15asd9d21325bsadythp547912501b",\n        "share": 100\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"For the fields that match the on-chain metadata, on-chain information has priority."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," - Human readable description of the asset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image")," - URL to the image of the asset. PNG, GIF and JPG file formats are supported. You may use the ",(0,r.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"animation_url")," - URL to a multi-media attachment of the asset. The supported file formats are MP4 and MOV for video, MP3, FLAC and WAV for audio and GLB for AR/3D assets. You may use the ",(0,r.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external_url")," - URL to an external application or website where users can also view the asset."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"properties.category")," - Supported categories:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"image"')," - PNG, GIF, JPG"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"video"')," - MP4, MOV"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"audio"')," - MP3, FLAC, WAV"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"vr"')," - 3D models; GLB, GLTF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"properties.files")," - Object array, where an object should contain the ",(0,r.kt)("inlineCode",{parentName:"li"},"uri")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," of the file that is part of the asset. The type should match the file extension. The array will also include files specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"animation_url")," fields, and any other that are associated with the asset.\nYou may use the ",(0,r.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attributes")," - Object array, where an object should contain ",(0,r.kt)("inlineCode",{parentName:"li"},"trait_type")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," fields. ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," can be a string or a number.")),(0,r.kt)("h3",{id:"additonal-suggestions"},"Additonal suggestions"),(0,r.kt)("h4",{id:"cdn-hosted-files"},"CDN hosted files"),(0,r.kt)("p",null,"If you wish to provide additional hosting for your files to provide users a better experience (for example hosting your multi-media attachment on a CDN to provide faster loading times, in addition to hosting it on a permanent service), you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cdn")," boolean flag within the objects inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties.files")," array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  "properties": {\n    "files": [\n        ...\n        {\n          "uri": "https://watch.videodelivery.net/52a52c4a261c88f19d267931426c9be6",\n          "type": "unknown",\n          "cdn": true\n        },\n        ...\n    ]\n}\n')),(0,r.kt)("p",null,"If such a flag exists, that file is the primary option when selecting the multimedia-attachment (video, audio or 3D) that will be displayed to owners. If that file is no longer available, you wallet should default to it using the URL in ",(0,r.kt)("inlineCode",{parentName:"p"},"animation_url")," field."),(0,r.kt)("h4",{id:"collections"},"Collections"),(0,r.kt)("p",null,"If the NFT belongs to a group of other unique NFTs, you can mark them with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," field that contains the name of the collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  "collection": {\n        "name": "Pigs on Solana Season #1",\n        "family": "Pigs on Solana"\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"collection.family"),' represents the larger set of NFTs your asset can belong to, in the case you are making multiple variations on a theme. It should always be a unique identifier of your whole project and never a general term like "cars", "art" or similar.'),(0,r.kt)("p",null,"You wallet should be able to group NFTs belonging to the same family and display the collection name on a single NFT view."),(0,r.kt)("h4",{id:"additional-attributes-specification"},"Additional attributes specification"),(0,r.kt)("p",null,"In addition to current fields available for specifying attributes, your wallet should integrate additional fields for describing attributes.\nSome of them are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'display_type: "Date"')," - will display the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," as a date, use a unix timestamp to specify it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_value: Number")," - if the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is also a number, it will be displayed as a bar chart with a maximum value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trait_count: Number")," - if the asset is part of a collection, this number represents the total count of other assets with the same trait type and value")),(0,r.kt)("p",null,"The only mandatory fields to describe an attribute are: ",(0,r.kt)("inlineCode",{parentName:"p"},"trait_type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trait_value"),"."),(0,r.kt)("h4",{id:"order-of-json-fields"},"Order of JSON fields"),(0,r.kt)("p",null,"Since you wallet will give users a direct link to the JSON file, it is recommended to keep the order of fields same as in the reference, so as to maintain good human readability of its contents."),(0,r.kt)("h4",{id:"other-arbitrary-data"},"Other arbitrary data"),(0,r.kt)("p",null,"We suggest using the properties field to store other arbitrary data that will be used by specialized applications."),(0,r.kt)("p",null,"If your project would benefit with the expansion of this standard, do not hesitate to contact us with your suggestions."))}m.isMDXComponent=!0}}]);