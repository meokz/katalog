"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=i,k=u["".concat(d,".").concat(s)]||u[s]||m[s]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7686:function(e,t,n){n.d(t,{M:function(){return l}});var a=n(7294),i="container_3Maz",r="code_1u2W",o="img_34ER",l=function(e){var t=e.children,n=e.imageUrl,l=e.width,d=e.height;return a.createElement("div",{className:i},a.createElement("div",{className:r},t),a.createElement("img",{className:o,src:n,width:l,height:d,alt:"",loading:"lazy"}))}},8294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(7686),l=["components"],d={sidebar_position:4},p="Android View",c={unversionedId:"main/android-view",id:"main/android-view",isDocsHomePage:!1,title:"Android View",description:"Setup",source:"@site/docs/main/android-view.mdx",sourceDirName:"main",slug:"/main/android-view",permalink:"/docs/main/android-view",editUrl:"https://github.com/cyberagent-zemi/katalog/edit/main/docs/docs/main/android-view.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Jetpack Compose",permalink:"/docs/main/jetpack-compose"},next:{title:"DataBinding / ViewBinding",permalink:"/docs/main/binding"}},m=[{value:"Setup",id:"setup",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-view"},"Android View"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"katalog-android-view")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("co.jp.cyberagent.katalog:katalog-android:`LATEST_VERSION`")\n    implementation("co.jp.cyberagent.katalog:katalog-android-view:`LATEST_VERSION`")\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.M,{imageUrl:"/img/docs/android-view.png",width:1080,height:2280,mdxType:"Preview"},(0,r.kt)("p",null,"To add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Android View"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"view")," method.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," is available within the lambda function.\nIf you omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", the class name will be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'view(\n    name = "TextView"\n) {\n    TextView(context).apply {\n        text = "Hello, World"\n    }\n}\n'))),(0,r.kt)(o.M,{imageUrl:"/img/docs/android-view-match.png",width:1080,height:2280,mdxType:"Preview"},(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap_content")," is used for both width and height.\nYou can change the size of the View by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"layoutParams"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'view(\n    name = "TextView",\n    layoutParams = MATCH_WIDTH_MATCH_HEIGHT\n) {\n    TextView(context).apply {\n        setBackgroundColor(Color.RED)\n        text = "Hello, World"\n    }\n}\n')),(0,r.kt)("p",null,"The following four options are available."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WARP_WIDTH_WRAP_HEIGHT")," - It is default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MATCH_WIDTH_WRAP_HEIGHT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WRAP_WIDTH_WRAP_HEIGHT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MATCH_WIDTH_MATCH_HEIGHT")))),(0,r.kt)(o.M,{imageUrl:"/img/docs/android-view-size.png",width:1080,height:2280,mdxType:"Preview"},(0,r.kt)("p",null,"You can also specify a number directly.\nNote that these values \u200b\u200bare in pixels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'view(\n    name = "TextView",\n    layoutParams = ViewGroup.LayoutParams(600, 300)\n) {\n    TextView(context).apply {\n        setBackgroundColor(Color.RED)\n        text = "Hello, World"\n    }\n}\n'))),(0,r.kt)(o.M,{imageUrl:"/img/docs/android-view-livedata.gif",width:1080,height:2280,mdxType:"Preview"},(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LifecycleOwner")," to observe a ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveData")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'view(\n    name = "Counter"\n) {\n    val liveData = MutableLiveData(0)\n    val view = TextView(context)\n    liveData.observe(lifecycleOwner) {\n        view.text = it.toString()\n    }\n    view.setOnClickListener {\n        liveData.value = (liveData.value!! + 1) % 10\n    }\n    view\n}\n'))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The UI Component name. If you omit this, the class name will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"layoutParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the size of the View. By default, ",(0,r.kt)("inlineCode",{parentName:"td"},"wrap_content")," is used for both width and height.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"definition"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create an instance of View. Inside the lambda expression, you can access ",(0,r.kt)("inlineCode",{parentName:"td"},"activity"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"context"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"lifecycleOwner"),".")))))}s.isMDXComponent=!0}}]);