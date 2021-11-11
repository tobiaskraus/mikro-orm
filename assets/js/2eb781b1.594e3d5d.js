"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19084],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return n?o.createElement(k,i(i({ref:t},m),{},{components:n})):o.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Installation & Usage"},s=void 0,p={unversionedId:"installation",id:"version-4.5/installation",isDocsHomePage:!1,title:"Installation & Usage",description:"First install the module via yarn or npm and do not forget to install the",source:"@site/versioned_docs/version-4.5/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/installation.md",tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636660856,formattedLastUpdatedAt:"11/11/2021",frontMatter:{title:"Installation & Usage"},sidebar:"version-4.5/docs",next:{title:"Defining Entities",permalink:"/docs/defining-entities"}},m=[{value:"Possible issues with circular dependencies",id:"possible-issues-with-circular-dependencies",children:[],level:2},{value:"Entity Discovery in TypeScript",id:"entity-discovery-in-typescript",children:[],level:2},{value:"Request Context",id:"request-context",children:[],level:2},{value:"Setting up the Commandline Tool",id:"setting-up-the-commandline-tool",children:[],level:2}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"First install the module via ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the\ndriver package as well:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v4, you should install the driver package, but not the db connector itself,\ne.g. install ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/sqlite"),", but not ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite3")," as that is already included\nin the driver package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @mikro-orm/core @mikro-orm/mongodb     # for mongo\nyarn add @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nyarn add @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -s @mikro-orm/core @mikro-orm/mongodb     # for mongo\nnpm i -s @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nnpm i -s @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,r.kt)("p",null,"Next you will need to enable support for ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"decorators"),"\nas well as ",(0,r.kt)("inlineCode",{parentName:"p"},"esModuleInterop")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"experimentalDecorators": true,\n"emitDecoratorMetadata": true,\n"esModuleInterop": true,\n')),(0,r.kt)("p",null,"Then call ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about all the possible configuration options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration"},"Advanced Configuration")," section.")),(0,r.kt)("p",null,"We can also provide paths where you store your entities via ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," array. Internally\nit uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby"},(0,r.kt)("inlineCode",{parentName:"a"},"globby"))," so we can use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby#globbing-patterns"},"globbing patterns"),",\nincluding negative globs. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: ['./dist/app/**/entities'],\n  // ...\n});\n")),(0,r.kt)("p",null,"If you are experiencing problems with folder based discovery, try using ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm debug"),"\nCLI command to check what paths are actually being used."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since v4, you can also use file globs, like ",(0,r.kt)("inlineCode",{parentName:"p"},"./dist/app/**/entities/*.entity.js"),".")),(0,r.kt)("p",null,"We can also set the configuration via ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration#using-environment-variables"},"environment variables"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can pass additional options to the underlying driver (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql2"),") via ",(0,r.kt)("inlineCode",{parentName:"p"},"driverOptions"),".\nThe object will be deeply merged, overriding all internally used options.")),(0,r.kt)("h2",{id:"possible-issues-with-circular-dependencies"},"Possible issues with circular dependencies"),(0,r.kt)("p",null,"Your entities will most probably contain circular dependencies (e.g. if you use bi-directional\nrelationship). While this is fine, there might be issues caused by wrong order of entities\nduring discovery, especially when you are using the folder based way."),(0,r.kt)("p",null,"The errors caused by circular dependencies are usually similar to this one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TypeError: Cannot read property 'name' of undefined\n    at Function.className (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:253:28)\n    at TsMorphMetadataProvider.extractType (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:37:34)\n    at TsMorphMetadataProvider.initProperties (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:25:31)\n    at TsMorphMetadataProvider.loadEntityMetadata (/path/to/project/node_modules/mikro-orm/dist/metadata/TsMorphMetadataProvider.js:16:9)\n    at MetadataDiscovery.discoverEntity (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:109:9)\n    at MetadataDiscovery.discoverDirectory (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:80:13)\n    at Function.runSerial (/path/to/project/node_modules/mikro-orm/dist/utils/Utils.js:303:22)\n    at MetadataDiscovery.findEntities (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:56:13)\n    at MetadataDiscovery.discover (/path/to/project/node_modules/mikro-orm/dist/metadata/MetadataDiscovery.js:30:9)\n    at Function.init (/path/to/project/node_modules/mikro-orm/dist/MikroORM.js:45:24)\n    at Function.handleSchemaCommand (/path/to/project/node_modules/mikro-orm/dist/cli/SchemaCommandFactory.js:51:21)\n")),(0,r.kt)("p",null,"If you encounter this, you have basically two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use entity references in ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," array to have control over the order of discovery.\nYou might need to play with the actual order you provide here, or possibly with the\norder of import statements."),(0,r.kt)("li",{parentName:"ul"},"Use strings instead of references (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"@OneToMany('Book', 'author')"),"). The downside\nhere is that you will lose the typechecking capabilities of the decorators. ")),(0,r.kt)("h2",{id:"entity-discovery-in-typescript"},"Entity Discovery in TypeScript"),(0,r.kt)("p",null,"In v4 the default metadata provider is ",(0,r.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),". If you want to use\n",(0,r.kt)("inlineCode",{parentName:"p"},"ts-morph")," based discovery (that reads actual TS types via the compiler API), you\nneed to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/reflection"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TsMorphMetadataProvider } from '@mikro-orm/reflection';\n\nconst orm = await MikroORM.init({\n  metadataProvider: TsMorphMetadataProvider,\n  // ...\n});\n")),(0,r.kt)("p",null,"Read more about the differences in ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-providers"},"Metadata Providers section"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: ['./dist/entities/**/*.js'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesTs: ['./src/entities/**/*.ts'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is important that ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," will point to the compiled JS files, and ",(0,r.kt)("inlineCode",{parentName:"p"},"entitiesTs"),"\nwill point to the TS source files. You should not mix those. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-morph")," discovery to work in production, we need to deploy ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," declaration\nfiles. Be sure to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.declaration")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".")),(0,r.kt)("p",null,"You can also use different ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-providers"},"metadata provider")," or even write custom one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReflectMetadataProvider")," that uses ",(0,r.kt)("inlineCode",{parentName:"li"},"reflect-metadata")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ts-morph")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JavaScriptMetadataProvider")," that allows you to manually provide the entity schema (mainly for Vanilla JS)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/entity-schema"},(0,r.kt)("inlineCode",{parentName:"a"},"EntitySchema"))," is another way to define your entities, which is better\nsuited than using ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  // default in v4, so not needed to specify explicitly\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),(0,r.kt)("h2",{id:"request-context"},"Request Context"),(0,r.kt)("p",null,"Then you will need to fork Entity Manager for each request so their identity maps will not\ncollide. To do so, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa),\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext.createAsync()")," instead."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"app.use((ctx, next) => RequestContext.createAsync(orm.em, next));\n"))),(0,r.kt)("p",null,"More info about ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," is described ",(0,r.kt)("a",{parentName:"p",href:"/docs/identity-map#request-context"},"here"),"."),(0,r.kt)("h2",{id:"setting-up-the-commandline-tool"},"Setting up the Commandline Tool"),(0,r.kt)("p",null,"MikroORM ships with a number of command line tools that are very helpful during development,\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGenerator"),". You can call this command from the NPM binary\ndirectory or use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To work with the CLI, first install ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/cli")," package locally.\nThe version needs to be aligned with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# install the CLI package first!\n$ yarn add @mikro-orm/cli\n\n# manually\n$ node node_modules/.bin/mikro-orm\n\n# via npx\n$ npx mikro-orm\n\n# or via yarn\n$ yarn mikro-orm\n")),(0,r.kt)("p",null,"For CLI to be able to access your database, you will need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm.config.js")," file that\nexports your ORM configuration. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Your ORM configuration file can export the Promise, like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"export default Promise.resolve({...});"),".")),(0,r.kt)("p",null,"TypeScript is also supported, just enable ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," flag in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. There you can also set up array of possible paths to ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm.config")," file,\nas well as use different file name:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Do not forget to install ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," when enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," flag.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," is used only when executing the CLI, it is not respected when\nrunning your app.")),(0,r.kt)("p",null,"MikroORM will always try to load the first available config file, based on the\norder in ",(0,r.kt)("inlineCode",{parentName:"p"},"configPaths"),". This means that if you specify the first item as the TS\nconfig, but you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," enabled and installed, it will fail to\nload it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./package.json"',title:'"./package.json"'},'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./src/mikro-orm.config.ts"',title:'"./src/mikro-orm.config.ts"'},"export default {\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  type: 'mongo', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`\n};\n")),(0,r.kt)("p",null,"When we have ",(0,r.kt)("inlineCode",{parentName:"p"},"useTsNode")," disabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node")," is not already registered and detected,\nTS config files will be ignored."),(0,r.kt)("p",null,"Once you have the CLI config properly set up, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()")," options\nparameter, and the CLI config will be automatically used. This process may fail if you\nuse bundlers that use tree shaking. As the config file is not referenced anywhere\nstatically, it would not be compiled - for that the best approach is to provide the config\nexplicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import config from './mikro-orm.config';\nconst orm = await MikroORM.init(config);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use different names for this file, simply rename it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"configPaths")," array\nyour in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_CLI")," environment variable with the path\nto override ",(0,r.kt)("inlineCode",{parentName:"p"},"configPaths")," value.")),(0,r.kt)("p",null,"Now you should be able to start using the CLI. All available commands are listed in the CLI help:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Usage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear             Clear metadata cache\n  mikro-orm cache:generate          Generate metadata cache for production\n  mikro-orm generate-entities       Generate entities based on current database\n                                    schema\n  mikro-orm database:import <file>  Imports the SQL file to the database\n  mikro-orm schema:create           Create database schema based on current\n                                    metadata\n  mikro-orm schema:drop             Drop database schema based on current\n                                    metadata\n  mikro-orm schema:update           Update database schema based on current\n                                    metadata\n  mikro-orm migration:create        Create new migration with current schema\n                                    diff\n  mikro-orm migration:up            Migrate up to the latest version\n  mikro-orm migration:down          Migrate one step down\n  mikro-orm migration:list          List all executed migrations\n  mikro-orm migration:pending       List all pending migrations\n  mikro-orm debug                   Debug CLI configuration\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),(0,r.kt)("p",null,"To verify your setup, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mikro-orm debug")," command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you have CLI config properly set up, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter\nwhen calling ",(0,r.kt)("inlineCode",{parentName:"p"},"MikroORM.init()"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: When importing a dump file you need ",(0,r.kt)("inlineCode",{parentName:"p"},"multipleStatements: true")," in your\nconfiguration. Please check the configuration documentation for more information.")),(0,r.kt)("p",null,"Now you can start ",(0,r.kt)("a",{parentName:"p",href:"/docs/defining-entities"},"defining your entities"),"."))}c.isMDXComponent=!0}}]);