"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2975],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,o(o({ref:e},d),{},{components:a})):n.createElement(m,o({ref:e},d))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79879:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={sidebar_position:1},l="Understanding Programs",c={unversionedId:"programs/understanding-programs",id:"programs/understanding-programs",title:"Understanding Programs",description:"This page aims to provide a quick overview of how programs work in Solana and offer additional reading material for those who are interested in learning more about a particular subject.",source:"@site/docs/programs/understanding-programs.md",sourceDirName:"programs",slug:"/programs/understanding-programs",permalink:"/programs/understanding-programs",editUrl:"https://github.com/metaplex/docs/tree/main/docs/programs/understanding-programs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"History",permalink:"/about/history"},next:{title:"Overview",permalink:"/programs/token-metadata/overview"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Accounts",id:"accounts",children:[{value:"Program Derived Addresses (PDA)",id:"program-derived-addresses-pda",children:[],level:3},{value:"Account data",id:"account-data",children:[],level:3},{value:"Discriminators",id:"discriminators",children:[],level:3},{value:"Field types, sizes and offsets",id:"field-types-sizes-and-offsets",children:[],level:3},{value:"Optional fields",id:"optional-fields",children:[],level:3},{value:"Indicative fields",id:"indicative-fields",children:[],level:3}],level:2},{value:"Instructions",id:"instructions",children:[{value:"Signer and/or Writable Accounts",id:"signer-andor-writable-accounts",children:[],level:3},{value:"Cross-Program Invocations (CPI)",id:"cross-program-invocations-cpi",children:[],level:3}],level:2},{value:"Understanding diagrams",id:"understanding-diagrams",children:[{value:"Accounts",id:"accounts-1",children:[],level:3},{value:"PDAs",id:"pdas",children:[],level:3},{value:"Instructions",id:"instructions-1",children:[],level:3}],level:2}],u={toc:d};function h(t){var e=t.components,s=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"understanding-programs"},"Understanding Programs"),(0,i.kt)("p",null,"This page aims to provide a quick overview of how programs work in Solana and offer additional reading material for those who are interested in learning more about a particular subject."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Unlike most blockchains, ",(0,i.kt)("strong",{parentName:"p"},"Solana separates logic and data")," into two separate components. These are, respectively, ",(0,i.kt)("strong",{parentName:"p"},"Programs")," and ",(0,i.kt)("strong",{parentName:"p"},"Accounts"),". What that means is that instead of storing data inside variables internally, Programs interact with external data stored in Accounts with the ability to mutate them."),(0,i.kt)("p",null,"This architecture is great for making Programs more modular since the data they interact with is not bound by the Program itself and can scale to new orders of magnitude. It is also great for making Programs more performant since it allows the blockchain to run the same Program in parallel with different Accounts."),(0,i.kt)("p",null,"To interact with a Program, we must use the ",(0,i.kt)("strong",{parentName:"p"},"Instructions")," defined by that Program. You can think of Instructions as API endpoints exposed by the Program. Each Instruction contains a set of parameters and constraints that must be fulfilled to execute it."),(0,i.kt)("p",null,"To recap: ",(0,i.kt)("strong",{parentName:"p"},"In Solana, Programs define Instructions that can be used to interact with external data stores called Accounts"),"."),(0,i.kt)("p",null,"Note that, technically, Programs are special kinds of Accounts marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"executable"),' whose entire purpose is to store the compiled code of the Program. However, for the sake of simplicity, we will distinguish these definitions and use the term "Account" to refer to non-executable Accounts.'),(0,i.kt)("p",null,"In the rest of this guide, we will talk about Accounts and Instructions in more detail before explaining the visual representation that we will be using in diagrams throughout the documentation."),(0,i.kt)("p",null,"\ud83d\udcda ",(0,i.kt)("strong",{parentName:"p"},"Additional reading"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/on-chain-programs/overview"},"Solana Documentation \u2014 On-chain Programs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/programs.html"},"Solana Cookbook \u2014 Programs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://book.anchor-lang.com/prerequisites/intro_to_solana.html"},"The Anchor Book \u2014 Intro to Programming on Solana"))),(0,i.kt)("h2",{id:"accounts"},"Accounts"),(0,i.kt)("p",null,"In Solana, ",(0,i.kt)("strong",{parentName:"p"},"Accounts are used to store data"),". In essence, they are simple arrays of bytes stored at a particular address. The address of an Account is the ",(0,i.kt)("strong",{parentName:"p"},"public key")," of a cryptographic key pair."),(0,i.kt)("p",null,"Anyone that has access to the ",(0,i.kt)("strong",{parentName:"p"},"private key")," of that key pair, can sign on behalf of that Account which, depending on the program, may give them the ability to mutate the data stored in that Account."),(0,i.kt)("p",null,"Once an Account is created, it is usually immediately initialized by a Program which will be marked as its ",(0,i.kt)("strong",{parentName:"p"},"Owner")," and will define the data structure of the allocated array of bytes. The Program that owns the Account is then responsible for providing Instructions that can be used to interact with it."),(0,i.kt)("p",null,"\ud83d\udcda ",(0,i.kt)("strong",{parentName:"p"},"Additional reading"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/accounts"},"Solana Documentation \u2014 Accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/accounts.html"},"Solana Cookbook \u2014 Accounts"))),(0,i.kt)("h3",{id:"program-derived-addresses-pda"},"Program Derived Addresses (PDA)"),(0,i.kt)("p",null,"There exist another type of Account, called ",(0,i.kt)("strong",{parentName:"p"},"Program Derived Account"),", whose address is not the public key of a cryptographic key pair but instead is algorithmically derived from the public key of the Program that owns the Account. We call that address a ",(0,i.kt)("strong",{parentName:"p"},"Program Derived Address")," or ",(0,i.kt)("strong",{parentName:"p"},"PDA")," for short."),(0,i.kt)("p",null,"Since the address is always derived from the public key of the Program, no other Program can algorithmically derive the same address. On top of that, additional ",(0,i.kt)("strong",{parentName:"p"},"Seeds")," can be provided to the algorithm to add more context to the address."),(0,i.kt)("p",null,"This has a variety of use cases such as enabling programs to sign ",(0,i.kt)("a",{parentName:"p",href:"#cross-program-invokations"},"Cross-Program Invokations")," or enabling the creation of accounts within an address that can be derived deterministically."),(0,i.kt)("p",null,"Note that, by design, Program Derived Addresses will never conflict with cryptographically generated public keys. All cryptographic public keys are part of what we call an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic-curve_cryptography"},"Elliptic-curve"),". If, when generating a PDA, the algorithm generated a key that falls on that curve, a ",(0,i.kt)("strong",{parentName:"p"},"Bump")," is added to the address and is incremented by one until the generated address no longer falls on the curve."),(0,i.kt)("p",null,"\ud83d\udcda ",(0,i.kt)("strong",{parentName:"p"},"Additional reading"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"Solana Documentation \u2014 PDAs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/pdas.html"},"Solana Cookbook \u2014 PDAs"))),(0,i.kt)("h3",{id:"account-data"},"Account data"),(0,i.kt)("p",null,"Whether we are dealing with a regular Account or a Program Derived Account, Accounts store data as a serialized array of bytes. Therefore, it is the responsibility of the Program to define a data structure for each of the Accounts it manages as well as provide a way of differentiating these Accounts so we know which data structure to apply to them."),(0,i.kt)("h3",{id:"discriminators"},"Discriminators"),(0,i.kt)("p",null,"Discriminators are used to differentiating between different types of Accounts within a Program. They can be implemented in many ways but here are the three most common ones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use a shared Enum as the first byte of every account"),". By prefixing every Account with a shared Enum, we can use the first byte of the serialized data to identify the Account. This is a simple and efficient way to implement discriminators. Most of the programs maintained by Metaplex use this approach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use a deterministic hash as the first byte of every account"),". This is very similar to the previous point but it uses a hash instead of an Enum. Programs created using the Anchor framework end up using this approach implicitly because Anchor will automatically generate that hash based on the Account's name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No discriminator, use the size of the Account"),". If all of the accounts managed by a Program are of fixed size and if they all have different sizes, then we can examine the length of that array of bytes to determine which Account we are dealing with. This is a performant approach since we don't need to add extra bytes to the data but it limits how flexible a Program can be with its Accounts. The ",(0,i.kt)("a",{parentName:"li",href:"https://spl.solana.com/token"},"SPL Token Program")," by Solana uses this approach since it only maintains two accounts of different fixed sizes.")),(0,i.kt)("h3",{id:"field-types-sizes-and-offsets"},"Field types, sizes and offsets"),(0,i.kt)("p",null,"Each Account defines its own data structure by using fields of different types. These types will affect the number of bytes required to store the field. For instance, an ",(0,i.kt)("inlineCode",{parentName:"p"},"i8")," is an 8-bit integer that will require 1 byte to store whereas an ",(0,i.kt)("inlineCode",{parentName:"p"},"i64")," is a 64-bit integer which will require 8 bytes to store."),(0,i.kt)("p",null,"Since, in the blockchain, Accounts are just arrays of bytes, it is important to understand the size of each field and where they start in this array, i.e. their offset. This can be useful when fetching multiple accounts from a given program ",(0,i.kt)("a",{parentName:"p",href:"https://solanacookbook.com/guides/get-program-accounts.html#memcmp"},"using a ",(0,i.kt)("inlineCode",{parentName:"a"},"memcpm")," filter"),"."),(0,i.kt)("p",null,"Note that not all fields have a fixed size. For instance, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<i8>")," is a vector of 8-bit integers that may contain none, one or many items. As such, it becomes a lot more complicated to filter accounts based on fields that are located after the first field of variable size."),(0,i.kt)("h3",{id:"optional-fields"},"Optional fields"),(0,i.kt)("p",null,"A field can also be defined as ",(0,i.kt)("strong",{parentName:"p"},"optional"),", meaning there exists a scenario where that field can be empty."),(0,i.kt)("p",null,"This field will use an additional byte as a prefix to indicate whether the field is empty or not."),(0,i.kt)("p",null,"Concretely, the value ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," will be assigned and the program will act accordingly when using that field."),(0,i.kt)("h3",{id:"indicative-fields"},"Indicative fields"),(0,i.kt)("p",null,"Whilst this is not something that is explicitly defined in the data structure, the documentation will mark certain fields as ",(0,i.kt)("strong",{parentName:"p"},"indicative"),"."),(0,i.kt)("p",null,"An indicative field means that the information provided by the field is not used by the program itself. Instead, it ",(0,i.kt)("em",{parentName:"p"},"indicates")," a piece of information to third parties. The program will still enforce the integrity of the data but it will simply not use that information internally."),(0,i.kt)("p",null,"Let\u2019s take the Metadata Account as an example."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Share")," property of each creator in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Creators")," array is indicative. The Token Metadata program will ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Share")," values of all creators add up to 100% but it will not do anything with that information. Instead, it expects NFT marketplaces to use this information when distributing royalties."),(0,i.kt)("p",null,"On the other hand, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Is Mutable")," property is not indicative because the Token Metadata program will use that information internally to prevent immutable Metadata Accounts to be updated."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"One can interact with a Program using the ",(0,i.kt)("strong",{parentName:"p"},"Instructions")," it provides. Multiple Instructions can be packed into a single ",(0,i.kt)("strong",{parentName:"p"},"Transaction")," that will be sent to the blockchain. Each Transaction is atomic meaning if any of its instructions fails, the whole Transaction will be reverted."),(0,i.kt)("p",null,"Similarly to Accounts, Instructions must be serialized into an array of bytes before they can be sent to the network. The data to be serialized must contain the following information for the Program to execute it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Discriminator"),": Similarly to Accounts, Instructions are usually prefixed with a discriminator so the Program can identify which Instruction is being executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accounts"),": An array of Account addresses that are affected by this instruction. This can either be because the Account will be read, mutated or both. Note that the order of this array is important since Programs will identify the type of Account provided based on its position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arguments"),': An array of data fields required by the instruction. It is not uncommon for this array to be empty since Instructions can get most of their information directly from the Accounts. Note that these arguments are comparable to the fields of an Account and, therefore, they can have the same properties mentioned above such as "',(0,i.kt)("a",{parentName:"li",href:"#optional-fields"},"optional"),'" and "',(0,i.kt)("a",{parentName:"li",href:"#indicative-fields"},"indicative"),'".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signers"),": An array of signatures for a sub-set of the Accounts provided. This is only needed for Accounts that are required to sign the Instruction. The next section explains this in a bit more detail.")),(0,i.kt)("p",null,"\ud83d\udcda ",(0,i.kt)("strong",{parentName:"p"},"Additional reading"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/transactions"},"Solana Documentation \u2014 Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/transactions#instructions"},"Solana Documentation \u2014 Instructions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://solanacookbook.com/core-concepts/transactions.html"},"Solana Cookbook \u2014 Transactions"))),(0,i.kt)("h3",{id:"signer-andor-writable-accounts"},"Signer and/or Writable Accounts"),(0,i.kt)("p",null,"A Program may require that the Accounts provided within an Instruction are ",(0,i.kt)("strong",{parentName:"p"},"Signers")," and/or ",(0,i.kt)("strong",{parentName:"p"},"Writable"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signers"),": A Signer Account is required to sign the Transaction for the Instruction to be successful. By attaching a signature, users can prove that they are the owner of the Account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Writable"),": A Writable Account will be mutated by the Instruction. This information is important for the blockchain to know which Transactions can be run in parallel and which ones can't.")),(0,i.kt)("p",null,"Therefore, with these two booleans, we end up with the following four possible scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non-Signer and Non-Writable"),": This Account is only used to read data. We cannot mutate it and we cannot make any assumption about its ownership."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signer and Non-Writable"),": This Account can also not be mutated but we know that the user who sent the Transaction owns its private key. This enables Programs to grant or deny access to certain actions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Signer and Writable"),": This Account has both signed the Transaction ",(0,i.kt)("em",{parentName:"li"},"and")," it can be mutated by the Instruction. This combination is pretty common since Programs will usually require the owner of an Account to prove who they are before mutating that account. Otherwise, anyone could mutate any Account they don't own."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non-Signer and Writable"),": This Account can be mutated but we can't make any assumption about its ownership. That usually means that the Program is using other Signer Accounts to prove they can mutate that one. This is also the case for PDA Accounts since they are owned by the Program and, as such, they require the Program to keep track of Authorities that can mutate them. Also, note that certain actions like crediting lamports to an Account do not require the Account to sign the Transaction.")),(0,i.kt)("h3",{id:"cross-program-invocations-cpi"},"Cross-Program Invocations (CPI)"),(0,i.kt)("p",null,"Cross-Program Invocations allow Programs to execute nested Instructions within their Instructions. They can use Instructions from their own Program and/or from other Programs."),(0,i.kt)("p",null,"\ud83d\udcda ",(0,i.kt)("strong",{parentName:"p"},"Additional reading"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations"},"Solana Documentation \u2014 CPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://book.anchor-lang.com/anchor_in_depth/CPIs.html"},"Using CPIs with Anchor Programs"))),(0,i.kt)("h2",{id:"understanding-diagrams"},"Understanding diagrams"),(0,i.kt)("p",null,"Each Program's documentation contains its fair share of diagrams to provide a visual representation of how their Accounts are structured and how they are affected by Instructions."),(0,i.kt)("p",null,"We try our best to provide a consistent visual language that is documented below."),(0,i.kt)("h3",{id:"accounts-1"},"Accounts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Accounts are represented with blue rectangles"),". Each Account has a smaller grey rectangle below them to indicate which Program owns that Account."),(0,i.kt)("li",{parentName:"ul"},'Accounts belonging to the System Program are represented in purple to differentiate them from other Accounts more easily. These are typically "Wallet Accounts" or Accounts that have not yet been initialized by a Program.'),(0,i.kt)("li",{parentName:"ul"},'Underneath the "Owner" rectangle, additional white rectangles can be used to display the data within the Account.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional data attributes"),' in these "Data" rectangles are written in ',(0,i.kt)("strong",{parentName:"li"},"italic"),"."),(0,i.kt)("li",{parentName:"ul"},"In certain situations, we may use an equal sign ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," to ",(0,i.kt)("strong",{parentName:"li"},"show the value assigned")," to a data attribute."),(0,i.kt)("li",{parentName:"ul"},"In certain situations, we may ",(0,i.kt)("strong",{parentName:"li"},"highlight a data attribute in bold")," to bring more attention to it.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(13517).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Relationships between Accounts are ",(0,i.kt)("strong",{parentName:"li"},"represented with solid grey lines"),"."),(0,i.kt)("li",{parentName:"ul"},"The Account that stores the relationship \u2014 by keeping track of the other Account's address \u2013 has a little triangle at the end of the grey line."),(0,i.kt)("li",{parentName:"ul"},"When Accounts are represented with their data attributes, a dashed grey line is used instead to link the data attribute with the Account it points to.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(30629).Z})),(0,i.kt)("h3",{id:"pdas"},"PDAs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PDA Accounts are represented with brown rectangles")," and PDA Addresses are displayed as brown rounded rectangles."),(0,i.kt)("li",{parentName:"ul"},"PDA Addresses point to the PDA Account that exists at their address."),(0,i.kt)("li",{parentName:"ul"},"Accounts that are used to derive a PDA Address point towards that PDA Address."),(0,i.kt)("li",{parentName:"ul"},"PDA Addresses sometimes list their seeds next to them. PID refers to the Program ID or public key. Seeds that are wrapped in double quotes are literals.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32832).Z})),(0,i.kt)("p",null,"Note that PDA Addresses can sometimes host different types of Accounts. For instance, the Edition PDA of an NFT can either host a Master Edition Account or an Edition Account based on whether the NFT is the original or not. In this case, PDA Addresses in diagrams can point to more than one PDA Account to show any of these Accounts can live at this address."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(51201).Z})),(0,i.kt)("h3",{id:"instructions-1"},"Instructions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions are represented with pink skewed rectangles")," and point to the Accounts that they change."),(0,i.kt)("li",{parentName:"ul"},"Arrows pointing out of Instructions usually explain in what way the Instruction affects the Account."),(0,i.kt)("li",{parentName:"ul"},"Arrows can also point to data attributes inside Accounts to be slightly more specific.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(19350).Z})),(0,i.kt)("p",null,"Showing all Accounts required for an Instruction to be executed in a diagram would make the visual representation too messy and complicated to understand. However, certain diagrams will use arrows from Accounts to Instructions to highlight a subset of the Instruction's required Accounts."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(91886).Z})))}h.isMDXComponent=!0},13517:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-Accounts-e1bb8fede7c5889cae428a43555d5989.png"},91886:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-Instructions-Complex-7ae7d61950bb103f22082abbc909c09c.png"},19350:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-Instructions-ede365eba25680556ee873f44e7b593b.png"},51201:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-PDA-Complex-8e1298f0de2312a6b7349936e8110828.png"},32832:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-PDA-bf90b3d515277be08cb0c1713b5f2754.png"},30629:function(t,e,a){e.Z=a.p+"assets/images/Understanding-Programs-Diagrams-Relationships-771c429edb7d4159590fd4ca1593379d.png"}}]);