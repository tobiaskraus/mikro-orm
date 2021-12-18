"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25109],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={id:"core.ForkOptions",title:"Interface: ForkOptions",sidebar_label:"ForkOptions",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/core.ForkOptions",id:"api/interfaces/core.ForkOptions",title:"Interface: ForkOptions",description:"core.ForkOptions",source:"@site/docs/api/interfaces/core.ForkOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.ForkOptions",permalink:"/docs/next/api/interfaces/core.ForkOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.ForkOptions",title:"Interface: ForkOptions",sidebar_label:"ForkOptions",custom_edit_url:null},sidebar:"API",previous:{title:"FlushEventArgs",permalink:"/docs/next/api/interfaces/core.FlushEventArgs"},next:{title:"FormulaOptions",permalink:"/docs/next/api/interfaces/core.FormulaOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"clear",id:"clear",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"flushMode",id:"flushmode",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"freshEventManager",id:"fresheventmanager",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"useContext",id:"usecontext",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".ForkOptions"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"clear"},"clear"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"clear"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"do we want clear identity map? defaults to true"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4ba390d/packages/core/src/EntityManager.ts#L1012"},"packages/core/src/EntityManager.ts:1012")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"flushmode"},"flushMode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"flushMode"),": ",(0,i.kt)("a",{parentName:"p",href:"../enums/core.FlushMode"},(0,i.kt)("inlineCode",{parentName:"a"},"FlushMode"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4ba390d/packages/core/src/EntityManager.ts#L1017"},"packages/core/src/EntityManager.ts:1017")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fresheventmanager"},"freshEventManager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"freshEventManager"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"do we want to use fresh EventManager instance? defaults to false (global instance)"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4ba390d/packages/core/src/EntityManager.ts#L1016"},"packages/core/src/EntityManager.ts:1016")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usecontext"},"useContext"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"useContext"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"use request context? should be used only for top level request scope EM, defaults to false"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/4ba390d/packages/core/src/EntityManager.ts#L1014"},"packages/core/src/EntityManager.ts:1014")))}d.isMDXComponent=!0}}]);