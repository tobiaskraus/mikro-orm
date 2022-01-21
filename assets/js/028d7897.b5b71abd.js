"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48936],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,m=c["".concat(s,".").concat(y)]||c[y]||p[y]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",sidebar_label:"Usage with SQL Drivers"},s=void 0,u={unversionedId:"usage-with-sql",id:"version-2.7/usage-with-sql",title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",description:"To use mikro-orm with MySQL database, do not forget to install mysql2 dependency and set",source:"@site/versioned_docs/version-2.7/usage-with-sql.md",sourceDirName:".",slug:"/usage-with-sql",permalink:"/docs/2.7/usage-with-sql",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-sql.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642756457,formattedLastUpdatedAt:"1/21/2022",frontMatter:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",sidebar_label:"Usage with SQL Drivers"},sidebar:"version-2.7/docs",previous:{title:"Schema generator",permalink:"/docs/2.7/schema-generator"},next:{title:"Usage with MongoDB",permalink:"/docs/2.7/usage-with-mongo"}},d=[{value:"Custom driver",id:"custom-driver",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2},{value:"ManyToMany collections with pivot tables",id:"manytomany-collections-with-pivot-tables",children:[],level:2},{value:"Using QueryBuilder to execute native SQL queries",id:"using-querybuilder-to-execute-native-sql-queries",children:[],level:2},{value:"Transactions",id:"transactions",children:[],level:2},{value:"LIKE queries",id:"like-queries",children:[],level:2},{value:"Native collection methods",id:"native-collection-methods",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with MySQL database, do not forget to install ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql2")," dependency and set\nthe type option to ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," when initializing ORM."),(0,i.kt)("p",null,"Similarly for SQLite install ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlite")," dependency and provide ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlite")," database type. For\nPostgreSQL install ",(0,i.kt)("inlineCode",{parentName:"p"},"pg")," and provide ",(0,i.kt)("inlineCode",{parentName:"p"},"postgresql")," type."),(0,i.kt)("p",null,"Then call ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  type: 'mysql', // or 'sqlite' or 'postgresql'\n});\n")),(0,i.kt)("h2",{id:"custom-driver"},"Custom driver"),(0,i.kt)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nMore information about how to create one can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/custom-driver"},"found here"),". Then provide the\ndriver class via ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," configuration option: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MyCustomDriver } from './MyCustomDriver.ts';\n\nconst orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  driver: MyCustomDriver, // provide the class, not just its name\n});\n")),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"Currently you will need to maintain the database schema yourself. For initial dump, you can\nuse ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/schema-generator"},(0,i.kt)("inlineCode",{parentName:"a"},"SchemaGenerator")," helper"),".  "),(0,i.kt)("h2",{id:"manytomany-collections-with-pivot-tables"},"ManyToMany collections with pivot tables"),(0,i.kt)("p",null,"As opposed to ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoDriver"),", in MySQL we use pivot tables to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `publisher_to_test` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `publisher_id` int(11) DEFAULT NULL,\n  `test_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,i.kt)("p",null,"You can adjust the name of pivot table via ",(0,i.kt)("inlineCode",{parentName:"p"},"pivotTable")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," decorator\ndefined on owning side: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// for unidirectional\n@ManyToMany({ entity: () => Test, owner: true, pivotTable: 'publisher2test' })\ntests = new Collection<Test>(this);\n\n// for bidirectional\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books', pivotTable: 'book2tag' })\ntags = new Collection<BookTag>(this);\n")),(0,i.kt)("h2",{id:"using-querybuilder-to-execute-native-sql-queries"},"Using QueryBuilder to execute native SQL queries"),(0,i.kt)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// 'UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?'\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n\n// or run query without using QueryBuilder\nconst driver = orm.em.getDriver<MySqlDriver>();\nconst res2 = await driver.execute('SELECT ? + ?', [1, 2]);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"QueryBuilder.select(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.insert(data: any): QueryBuilder;\nQueryBuilder.update(data: any): QueryBuilder;\nQueryBuilder.delete(cond: any): QueryBuilder;\nQueryBuilder.count(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.join(field: string, alias?: string): QueryBuilder;\nQueryBuilder.leftJoin(field: string, alias?: string): QueryBuilder;\nQueryBuilder.where(cond: any, operator: '$and' | '$or'): QueryBuilder;\nQueryBuilder.andWhere(cond: any): QueryBuilder;\nQueryBuilder.orWhere(cond: any): QueryBuilder;\nQueryBuilder.groupBy(fields: string | string[]): QueryBuilder;\nQueryBuilder.having(cond: any): QueryBuilder;\nQueryBuilder.populate(populate: string[]): QueryBuilder;\nQueryBuilder.limit(limit: number, offset?: number): QueryBuilder;\nQueryBuilder.offset(offset: number): QueryBuilder;\nQueryBuilder.getQuery(): string;\nQueryBuilder.getParams(): any;\nQueryBuilder.clone(): QueryBuilder;\n")),(0,i.kt)("p",null,"For more examples of how to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", take a look at ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," tests in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/QueryBuilder.test.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"tests/QueryBuilder.test.ts")),"."),(0,i.kt)("h2",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager#flush()"),", all computed changes are queried ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/unit-of-work"},"inside a database\ntransaction")," by default, so you do not have to handle transactions manually. "),(0,i.kt)("p",null,"When you need to explicitly handle the transaction, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"beginTransaction/commit/rollback"),"\nmethods on both ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDriver")," and their shortcuts on ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". "),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.transactional(cb)")," helper to run callback in transaction. It will\nprovide forked ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," as a parameter with clear clear isolated identity map - please use that\nto make changes. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// if an error occurs inside the callback, all db queries from inside the callback will be rolled back\nawait orm.em.transactional(async (em: EntityManager) => {\n  const god = new Author('God', 'hello@heaven.god');\n  await em.persistAndFlush(god);\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityManager.beginTransaction(): Promise<void>;\nEntityManager.commit(): Promise<void>;\nEntityManager.rollback(): Promise<void>;\nEntityManager.transactional(cb: (em: EntityManager) => Promise<any>): Promise<any>;\n")),(0,i.kt)("h2",{id:"like-queries"},"LIKE queries"),(0,i.kt)("p",null,"SQL do support LIKE queries via native JS regular expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const author1 = new Author2('Author 1', 'a1@example.com');\nconst author2 = new Author2('Author 2', 'a2@example.com');\nconst author3 = new Author2('Author 3', 'a3@example.com');\nawait orm.em.persistAndFlush([author1, author2, author3]);\n\n// finds authors with email like '%exa%le.c_m'\nconst authors = await orm.em.find(Author2, { email: /exa.*le\\.c.m$/ }); \nconsole.log(authors); // all 3 authors found\n")),(0,i.kt)("h2",{id:"native-collection-methods"},"Native collection methods"),(0,i.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityManager.nativeInsert<T extends IEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nEntityManager.nativeUpdate<T extends IEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nEntityManager.nativeDelete<T extends IEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,i.kt)("p",null,"Those methods execute native SQL queries generated via ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," based on entity\nmetadata. Keep in mind that they do not hydrate results to entities, and they do not\ntrigger lifecycle hooks. "),(0,i.kt)("p",null,"They are also available as ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,i.kt)("p",null,"Additionally there is ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method that supports executing raw SQL queries or ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),"\ninstances. To create ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," factory method on both\n",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityRepository")," classes: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = em.createQueryBuilder('Author');\nqb.select('*').where({ id: { $in: [...] } });\nconst res = await em.getDriver<MySqlDriver>().execute(qb);\nconsole.log(res); // unprocessed result of underlying database driver\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/#table-of-contents"},"\u2190"," Back to table of contents")))}c.isMDXComponent=!0}}]);