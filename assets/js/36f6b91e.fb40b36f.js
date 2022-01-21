"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84457],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(a),g=n,k=d["".concat(m,".").concat(g)]||d[g]||c[g]||o;return a?r.createElement(k,l(l({ref:t},i),{},{components:a})):r.createElement(k,l({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82490:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return i},default:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],p={id:"core.logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null,hide_title:!0},m="Class: Logger",s={unversionedId:"api/classes/core.logger",id:"version-4.5/api/classes/core.logger",title:"Class: Logger",description:"core.Logger",source:"@site/versioned_docs/version-4.5/api/classes/core.logger.md",sourceDirName:"api/classes",slug:"/api/classes/core.logger",permalink:"/docs/api/classes/core.logger",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642756457,formattedLastUpdatedAt:"1/21/2022",frontMatter:{id:"core.logger",title:"Class: Logger",sidebar_label:"Logger",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"LockWaitTimeoutException",permalink:"/docs/api/classes/core.lockwaittimeoutexception"},next:{title:"MemoryCacheAdapter",permalink:"/docs/api/classes/core.memorycacheadapter"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"debugMode",id:"debugmode",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"isEnabled",id:"isenabled",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"log",id:"log",children:[{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"setDebugMode",id:"setdebugmode",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3}],level:2}],c={toc:i};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-logger"},"Class: Logger"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Logger"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new Logger"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"logger"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string"),") => ",(0,o.kt)("em",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debugMode?"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"[]): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},(0,o.kt)("em",{parentName:"a"},"Logger"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"logger")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(",(0,o.kt)("inlineCode",{parentName:"td"},"message"),": ",(0,o.kt)("em",{parentName:"td"},"string"),") => ",(0,o.kt)("em",{parentName:"td"},"void")),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"debugMode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"[]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.logger"},(0,o.kt)("em",{parentName:"a"},"Logger"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Logger.ts#L3"},"packages/core/src/utils/Logger.ts:3")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"debugmode"},"debugMode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"debugMode"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"[]= false"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"isenabled"},"isEnabled"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isEnabled"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"): ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"namespace")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Logger.ts#L28"},"packages/core/src/utils/Logger.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"log"},"log"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"log"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"namespace"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string"),"): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Logs a message inside given namespace."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"namespace")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"string"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Logger.ts#L11"},"packages/core/src/utils/Logger.ts:11")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setdebugmode"},"setDebugMode"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"setDebugMode"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"debugMode"),": ",(0,o.kt)("em",{parentName:"p"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"[]): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Sets active namespaces. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to enable all logging."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"debugMode")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"boolean")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/docs/api/modules/core#loggernamespace"},(0,o.kt)("em",{parentName:"a"},"LoggerNamespace")),"[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/Logger.ts#L24"},"packages/core/src/utils/Logger.ts:24")))}d.isMDXComponent=!0}}]);