"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1340],{3905:function(e,o,n){n.d(o,{Zo:function(){return d},kt:function(){return k}});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function r(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},d=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(s,".").concat(k)]||u[k]||p[k]||a;return n?t.createElement(m,l(l({ref:o},d),{},{components:n})):t.createElement(m,l({ref:o},d))}));function k(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in o)hasOwnProperty.call(o,s)&&(r[s]=o[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66452:function(e,o,n){n.r(o),n.d(o,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var t=n(83117),i=n(80102),a=(n(67294),n(3905)),l=["components"],r={title:"Collections"},s=void 0,c={unversionedId:"collections",id:"version-5.0/collections",title:"Collections",description:"OneToMany and ManyToMany properties are stored in a Collection wrapper.",source:"@site/versioned_docs/version-5.0/collections.md",sourceDirName:".",slug:"/collections",permalink:"/docs/5.0/collections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/collections.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1650099685,formattedLastUpdatedAt:"4/16/2022",frontMatter:{title:"Collections"},sidebar:"docs",previous:{title:"Entity References and Reference<T> Wrapper",permalink:"/docs/5.0/entity-references"},next:{title:"Entity Repository",permalink:"/docs/5.0/repositories"}},d={},p=[{value:"Working with collections",id:"working-with-collections",level:2},{value:"Removing items from collection",id:"removing-items-from-collection",level:3},{value:"OneToMany Collections",id:"onetomany-collections",level:2},{value:"ManyToMany Collections",id:"manytomany-collections",level:2},{value:"Unidirectional",id:"unidirectional",level:3},{value:"Bidirectional",id:"bidirectional",level:3},{value:"Forcing fixed order of collection items",id:"forcing-fixed-order-of-collection-items",level:3},{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",level:2},{value:"Filtering and ordering of collection items",id:"filtering-and-ordering-of-collection-items",level:2},{value:"Filtering Collections",id:"filtering-collections",level:2}],u={toc:p};function k(e){var o=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OneToMany")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToMany")," properties are stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," wrapper."),(0,a.kt)("h2",{id:"working-with-collections"},"Working with collections"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," class implements iterator, so we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it."),(0,a.kt)("p",null,"Another way to access collection items is to use bracket syntax like when we access array items. Keep in mind that this approach will not check if the collection is initialed, while using ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method will throw error in this case."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that array access in ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, we cannot add new items to ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," this way.")),(0,a.kt)("p",null,"To get all entities stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection"),", we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getItems()")," method. It will throw in case the ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," is not initialized. If we want to disable this validation, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getItems(false)"),". This will give us the entity instances managed by the identity map."),(0,a.kt)("p",null,"Alternatively we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"toArray()")," which will serialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," to an array of DTOs. Modifying those will have no effect on the actual entity instances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const author = em.findOne(Author, '...', { populate: ['books'] }); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before we can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectId\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n\n// getting array of the items\nconsole.log(author.books.getItems()); // Book[]\n\n// serializing the collection\nconsole.log(author.books.toArray()); // EntityDTO<Book>[]\n\nconst author = em.findOne(Author, '...'); // books collection has not been populated\nconst count = await author.books.loadCount(); // gets the count of collection items from database instead of counting loaded items\nconsole.log(author.books.getItems()); // throws because the collection has not been initialized\n// initialize collection if not already loaded and return its items as array\nconsole.log(await author.books.loadItems()); // Book[]\n")),(0,a.kt)("h3",{id:"removing-items-from-collection"},"Removing items from collection"),(0,a.kt)("p",null,"Removing item from collection does necessarily imply deleting the target entity, it means we are disconnecting the relation - removing items from collection, not removing entities from database - ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.remove()")," is not the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"em.remove()"),". If we want to delete the entity by removing it from collection, we need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"orphanRemoval: true"),", which tells the ORM we don't want orphaned entities to exist, so we know those should be removed."),(0,a.kt)("h2",{id:"onetomany-collections"},"OneToMany Collections"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",(0,a.kt)("inlineCode",{parentName:"p"},"fk")," attribute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  // or via options object\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books2 = new Collection<Book>(this);\n\n}\n")),(0,a.kt)("h2",{id:"manytomany-collections"},"ManyToMany Collections"),(0,a.kt)("p",null,"For ManyToMany, SQL drivers use pivot table that holds reference to both entities."),(0,a.kt)("p",null,"As opposed to them, with MongoDB we do not need to have join tables for ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations. All references are stored as an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectId"),"s on owning entity."),(0,a.kt)("h3",{id:"unidirectional"},"Unidirectional"),(0,a.kt)("p",null,"Unidirectional ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, if we define only ",(0,a.kt)("inlineCode",{parentName:"p"},"entity")," attribute, then it will be considered the owning side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@ManyToMany(() => Book)\nbooks1 = new Collection<Book>(this);\n\n// or mark it as owner explicitly via options object\n@ManyToMany({ entity: () => Book, owner: true })\nbooks2 = new Collection<Book>(this);\n")),(0,a.kt)("h3",{id:"bidirectional"},"Bidirectional"),(0,a.kt)("p",null,"Bidirectional ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store), marked by ",(0,a.kt)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@ManyToMany(() => BookTag, tag => tag.books, { owner: true })\ntags = new Collection<BookTag>(this);\n\n// or via options object\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),(0,a.kt)("p",null,"And on the inversed side we define it with ",(0,a.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@ManyToMany(() => Book, book => book.tags)\nbooks = new Collection<Book>(this);\n\n// or via options object\n@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),(0,a.kt)("h3",{id:"forcing-fixed-order-of-collection-items"},"Forcing fixed order of collection items"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since v3 many to many collections does not require having auto increment primary key, that\nwas used to ensure fixed order of collection items.")),(0,a.kt)("p",null,"To preserve fixed order of collections, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"fixedOrder: true")," attribute, which will start ordering by ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," column. Schema generator will convert the pivot table to have auto increment primary key ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". We can also change the order column name via ",(0,a.kt)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),"."),(0,a.kt)("p",null,"We can also specify default ordering via ",(0,a.kt)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute. This will be used when we fully populate the collection including its items, as it orders by the referenced entity properties instead of pivot table columns (which ",(0,a.kt)("inlineCode",{parentName:"p"},"fixedOrderColumn")," is). On the other hand, ",(0,a.kt)("inlineCode",{parentName:"p"},"fixedOrder")," is used to maintain the insert order of items instead of ordering by some property."),(0,a.kt)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),(0,a.kt)("p",null,"When we use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection, and this action is also propagated to its counterpart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),(0,a.kt)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, we should always use owning side to manipulate the collection.")),(0,a.kt)("p",null,"Same applies for ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),(0,a.kt)("h2",{id:"filtering-and-ordering-of-collection-items"},"Filtering and ordering of collection items"),(0,a.kt)("p",null,"When initializing collection items via ",(0,a.kt)("inlineCode",{parentName:"p"},"collection.init()"),", we can filter the collection as well as order its items:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await book.tags.init({ where: { active: true }, orderBy: { name: QueryOrder.DESC } });\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We should never modify partially loaded collection.")),(0,a.kt)("h2",{id:"filtering-collections"},"Filtering Collections"),(0,a.kt)("p",null,"Collections have a ",(0,a.kt)("inlineCode",{parentName:"p"},"matching")," method that allows to slice parts of data from a collection. By default, it will return the list of entities based on the query. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," boolean parameter to save this list into the collection items - this will mark the collection as ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly"),", methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"remove")," will throw."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const a = await em.findOneOrFail(Author, 1);\n\n// only loading the list of items\nconst books = await a.books.matching({ limit: 3, offset: 10, orderBy: { title: 'asc' } });\nconsole.log(books); // [Book, Book, Book]\nconsole.log(a.books.isInitialized()); // false\n\n// storing the items in collection\nconst tags = await books[0].tags.matching({\n  limit: 3,\n  offset: 5,\n  orderBy: { name: 'asc' },\n  store: true,\n});\nconsole.log(tags); // [BookTag, BookTag, BookTag]\nconsole.log(books[0].tags.isInitialized()); // true\nconsole.log(books[0].tags.getItems()); // [BookTag, BookTag, BookTag]\n")))}k.isMDXComponent=!0}}]);