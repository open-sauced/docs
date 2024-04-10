"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[7051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?o.createElement(g,c(c({ref:n},l),{},{components:t})):o.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[m]="string"==typeof e?e:a,c[1]=r;for(var p=2;p<i;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const i={id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["commitizen conventional commit","open source commit standards","how to use @open-sauced/conventional-commit","npm package for conventional commit","open sauced commit guide","conventional commit best practices","Commit Message Standards","Semantic Versioning","Git Commit Conventions","Standardized Commit Messages","Version Control Best Practices"]},c=void 0,r={unversionedId:"opensauced-packages/conventional-commit",id:"opensauced-packages/conventional-commit",title:"@open-sauced/conventional-commit",description:"Description",source:"@site/docs/opensauced-packages/conventional-commit.md",sourceDirName:"opensauced-packages",slug:"/opensauced-packages/conventional-commit",permalink:"/opensauced-packages/conventional-commit",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/opensauced-packages/conventional-commit.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1712780631,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"conventional-commit",title:"@open-sauced/conventional-commit",sidebar_label:"@open-sauced/conventional-commit",keywords:["commitizen conventional commit","open source commit standards","how to use @open-sauced/conventional-commit","npm package for conventional commit","open sauced commit guide","conventional commit best practices","Commit Message Standards","Semantic Versioning","Git Commit Conventions","Standardized Commit Messages","Version Control Best Practices"]},sidebar:"docs",previous:{title:"@open-sauced/check-engines",permalink:"/opensauced-packages/check-engines"},next:{title:"@open-sauced/semantic-release-conventional-config",permalink:"/opensauced-packages/semantic-release"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Contributing",id:"contributing",level:2}],l={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," package ",(0,a.kt)("inlineCode",{parentName:"p"},"@open-sauced/conventional-commit")," is designed to help users ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"commitizen")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits"),"."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"This package uses the following modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-cli"},"cz-cli")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-conventional-changelog"},"cz-conventional-changelog"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @open-sauced/conventional-commit\n")),(0,a.kt)("p",null,"Add the verification scripts to your ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"The reason why we provide ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," section is for the people using this as a development enhancement, interactive configurations, or trimmed dependency trees, where using ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," is preferred over installing all the dependencies at once."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"All you have to do is run the script next to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @open-sauced/conventional-commit\n# or\nnpx conventional-commit\n")),(0,a.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,a.kt)("p",null,"The most common use case for this package is to run it instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," command inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," scripts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx @open-sauced/conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "npx conventional-commit"\n  }\n}\n')),(0,a.kt)("p",null,"If you want to ensure local-only usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "push": "conventional-commit"\n  }\n}\n')),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"We're always happy to onboard people into open source!"),(0,a.kt)("p",null,"Check out the repository at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/conventional-commit"},"@open-sauced/conventional-commit"),". \u2764\ufe0f"))}d.isMDXComponent=!0}}]);