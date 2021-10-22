"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[740],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7686:function(e,t,n){n.d(t,{M:function(){return l}});var r=n(7294),a="container_3Maz",o="code_1u2W",i="img_34ER",l=function(e){var t=e.children,n=e.imageUrl,l=e.width,c=e.height;return r.createElement("div",{className:a},r.createElement("div",{className:o},t),r.createElement("img",{className:i,src:n,width:l,height:c,alt:"",loading:"lazy"}))}},9944:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(7686),l=["components"],c={sidebar_position:3},p="Jetpack Compose",m={unversionedId:"main/jetpack-compose",id:"main/jetpack-compose",isDocsHomePage:!1,title:"Jetpack Compose",description:"Examples",source:"@site/docs/main/jetpack-compose.mdx",sourceDirName:"main",slug:"/main/jetpack-compose",permalink:"/docs/main/jetpack-compose",editUrl:"https://github.com/cyberagent-zemi/katalog/edit/main/docs/docs/main/jetpack-compose.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Register and Start",permalink:"/docs/main/register-and-start"},next:{title:"Android View",permalink:"/docs/main/android-view"}},s=[{value:"Examples",id:"examples",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jetpack-compose"},"Jetpack Compose"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.M,{imageUrl:"/img/docs/jetpack-compose.png",width:1080,height:2280,mdxType:"Preview"},(0,o.kt)("p",null,"To add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Composable"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"compose")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'compose("Text") {\n    Text(text = "Hello, World")\n}\n'))),(0,o.kt)(i.M,{imageUrl:"/img/docs/jetpack-compose-state.gif",width:1080,height:2280,mdxType:"Preview"},(0,o.kt)("p",null,"You can use state in the ",(0,o.kt)("inlineCode",{parentName:"p"},"compose"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'compose("MyComponent") {\n    var boolean by remember {\n        mutableStateOf(true)\n    }\n    Column(\n        horizontalAlignment = Alignment.CenterHorizontally\n    ) {\n        Text(\n            text = if (boolean) "Hello" else "World"\n        )\n        Button(\n            onClick = { boolean = !boolean }\n        ) {\n            Text(text = "Toggle")\n        }\n    }\n}\n'))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"name"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The UI Component name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"definition"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Composable function.")))))}d.isMDXComponent=!0}}]);