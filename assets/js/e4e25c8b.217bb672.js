"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[9708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||s;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const s={id:"community-maintainers-guide",title:"OpenSauced Community Maintainers Guidelines",sidebar_label:"Community Maintainers Guidelines",keywords:["opensauced community maintainers guidelines","opensauced community maintainers","maintainers guidelines","open source maintainers guidelines","open source maintainer","open source project management","community management in open source"]},r=void 0,o={unversionedId:"contributing/opensauced-maintainers-guide/community-maintainers-guide",id:"contributing/opensauced-maintainers-guide/community-maintainers-guide",title:"OpenSauced Community Maintainers Guidelines",description:"Welcome to OpenSauced Community Maintainers guidelines!",source:"@site/docs/contributing/opensauced-maintainers-guide/community-maintainers-guide.md",sourceDirName:"contributing/opensauced-maintainers-guide",slug:"/contributing/opensauced-maintainers-guide/community-maintainers-guide",permalink:"/contributing/opensauced-maintainers-guide/community-maintainers-guide",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/opensauced-maintainers-guide/community-maintainers-guide.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1709062721,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{id:"community-maintainers-guide",title:"OpenSauced Community Maintainers Guidelines",sidebar_label:"Community Maintainers Guidelines",keywords:["opensauced community maintainers guidelines","opensauced community maintainers","maintainers guidelines","open source maintainers guidelines","open source maintainer","open source project management","community management in open source"]},sidebar:"docs",previous:{title:"OpenSauced Maintainers Guide",permalink:"/contributing/opensauced-maintainers-guide/maintainers-guide"},next:{title:"Set Up Authentication",permalink:"/contributing/set-up-authentication"}},u={},l=[{value:"Maintainers Best Practices",id:"maintainers-best-practices",level:2},{value:"Issues Management",id:"issues-management",level:2},{value:"Triaging Issues",id:"triaging-issues",level:3},{value:"Creating Issues",id:"creating-issues",level:3},{value:"Good First Issue",id:"good-first-issue",level:3},{value:"Assigning Issues",id:"assigning-issues",level:3},{value:"Pull Request Management",id:"pull-request-management",level:2},{value:"Timeline",id:"timeline",level:3},{value:"Pull Request Review",id:"pull-request-review",level:3},{value:"Merging Pull Request",id:"merging-pull-request",level:3},{value:"Closing Pull Requests",id:"closing-pull-requests",level:3},{value:"OpenSauced Community Maintainers",id:"opensauced-community-maintainers",level:2},{value:"OpenSauced Community Repositories",id:"opensauced-community-repositories",level:2}],m={toc:l},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to OpenSauced Community Maintainers guidelines!"),(0,a.kt)("p",null,"These guidelines provide expectations and responsibilities for OpenSauced Community Maintainers to foster a welcoming, supportive, and inclusive community and encourage healthy collaboration."),(0,a.kt)("h2",{id:"maintainers-best-practices"},"Maintainers Best Practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Open communication"),": Always communicate everything as much as you can openly on GitHub to keep the community in the loop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Courtesy"),": Always use polite and clear words when asking for changes or giving feedback."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Intention"),": Always tell the reason behind closing an issue or pull request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Take the time needed"),": Maintainers are human. It\u2019s okay to take time to respond.")),(0,a.kt)("h2",{id:"issues-management"},"Issues Management"),(0,a.kt)("h3",{id:"triaging-issues"},"Triaging Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Label issues to classify them. Refer to the "',(0,a.kt)("a",{parentName:"li",href:"/contributing/triage-guide#adding-issue-and-pr-labels"},"Adding Issue and PR Labels"),'" section on the OpenSauced docs.'),(0,a.kt)("li",{parentName:"ul"},"If a feature request needs to be more convincing, ask contributors to convince you why OpenSauced wants to enhance the project with the feature."),(0,a.kt)("li",{parentName:"ul"},"When unsure whether to go on or close the issue, seek the opinions of other maintainers by tagging them in the comment.")),(0,a.kt)("h3",{id:"creating-issues"},"Creating Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an issue whenever there's a necessity for change, even without discussing it first with the team."),(0,a.kt)("li",{parentName:"ul"},'All issues should start with a descriptive title that begins with a verb. For example, "',(0,a.kt)("strong",{parentName:"li"},"Add"),' a section on how to use X feature."'),(0,a.kt)("li",{parentName:"ul"},"Creating several small issues is better than one consisting of big changes. Contributors can work on the issues faster, and it can save time for maintainers to review the pull requests."),(0,a.kt)("li",{parentName:"ul"},"Leave the ",(0,a.kt)("inlineCode",{parentName:"li"},"needs triage")," label and tag other maintainers to triage before releasing it for contributions when in doubt."),(0,a.kt)("li",{parentName:"ul"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"beginner"),' label for low-effort issues requiring less expectation for the maintainers\' time and support. Provide clear and enough information about how you want the change to be. For example, "Add a section about X. Give a brief explanation about it. You can read these resources to help you."')),(0,a.kt)("h3",{id:"good-first-issue"},"Good First Issue"),(0,a.kt)("p",null,"Good first issues mainly aim for complete beginners and someone new to OpenSauced projects. A good first issue has to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Clear description"),": Why do you want to have the change? What do you want to achieve with the change?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proposed solution"),": How can this issue be solved?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Files and code blocks"),": Point to the file and the code blocks causing the issue. Read the instructions on the GitHub documentation to ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet"},"create a permanent link to a code snippet"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tip"),": Add checkboxes to the issue and ask the contributor to check them as they complete them to help create a clear path to completion."),(0,a.kt)("h3",{id:"assigning-issues"},"Assigning Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"good first issue")," can only be assigned ",(0,a.kt)("strong",{parentName:"li"},"once per contributor"),". ",(0,a.kt)("br",null),' Respond with something like, "Hey {username}, we appreciate all the contributions lately! We\'d love to give someone new a chance to take on this good first issue, but keep checking back as we post new issues frequently."'),(0,a.kt)("li",{parentName:"ul"},"Issues outside the ",(0,a.kt)("inlineCode",{parentName:"li"},"good first issue")," can be assigned ",(0,a.kt)("strong",{parentName:"li"},"max. 2 issues per contributor at a time"),". ",(0,a.kt)("br",null)," We love contributions. But we want to equip contributors to succeed by giving them time to complete issues. Through experience, we've found that two issues at a time allows them to focus on completing the issue and supports maintainers by not having issues open for long periods.")),(0,a.kt)("h2",{id:"pull-request-management"},"Pull Request Management"),(0,a.kt)("h3",{id:"timeline"},"Timeline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Small pull requests that don't require updates should be merged in up to one week."),(0,a.kt)("li",{parentName:"ul"},"Take time to review long pull requests to prevent merging incomplete, broken, or unresolved pull requests. Communicate with contributors when more time is needed to review the pull requests."),(0,a.kt)("li",{parentName:"ul"},'Pull requests that have requested updates that are stale after two weeks should be put into draft mode with a note to the contributor that says something like: "We haven\u2019t seen any updates to this PR in the last two weeks, so we\u2019ve put it in draft mode. Please let us know if you\u2019re going to continue to work on it."'),(0,a.kt)("li",{parentName:"ul"},"Stale pull requests should be closed when unresolved or inactive (no commits, comment responses, etc.) in 5 weeks. In these circumstances, communicate with contributors that they may reopen if they want to continue working on it only when no one claims the issue. ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"li"},"Note"),": If you close their pull request, you should also unassign any related issues.")),(0,a.kt)("h3",{id:"pull-request-review"},"Pull Request Review"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure that the pull request form is completed. Ask contributors to provide any missing information before reviewing."),(0,a.kt)("li",{parentName:"ul"},"Always ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally"},"pull the pull request's branch")," and test the changes locally."),(0,a.kt)("li",{parentName:"ul"},"Always provide feedback and suggestions when requesting changes. To give code suggestions, please read the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request"},"GitHub documentation"),"."),(0,a.kt)("li",{parentName:"ul"},"Pull requests should only include what is requested in the issue. If there's another fix that someone (contributor or maintainer) wants to make, it requires another issue and a pull request. If the person has already made the fix in the pull request, politely ask them to remove the update, create a new issue, and wait to be assigned."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/creating-a-saved-reply"},"Creating saved replies")," is helpful when frequently adding the same comment over and over, such as thanking contributors for pull requests or changes made, asking to resolve merge conflicts, etc.")),(0,a.kt)("h3",{id:"merging-pull-request"},"Merging Pull Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Always ",(0,a.kt)("strong",{parentName:"p"},"squash and merge commits")," when merging in a pull request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When two maintainers review and approve a pull request, the first reviewer is the one who merges the pull request if there are no requested changes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When there is a request for changes, the one who requested changes or the last one whose requests got resolved is the one who merges the pull request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refrain from resolving conversations started by other maintainers even if the contributor has verified. When it's necessary to merge the pull request fast, tag the maintainer and ask them to do a final check before merging.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not approve changes or dismiss reviews from a maintainer even if the contributor has completed the change requests. Re-request review instead.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have the time, it's great to encourage contributors with a positive message like these:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"Thanks for contributing, ',"[name of contributor]",". Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/U2peSNf23P"},"Discord"),' community for more updates on OpenSauced and to find more projects."')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A personal message acknowledging their impact.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send a GIF like this one:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2JhdGI5czh4MDlyeWhlNXpicmdrbGZ2Znk0MnM4dnV0ZHMyamNkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFkiFMDg3iFoI/giphy.gif",alt:"git merge"})))))),(0,a.kt)("h3",{id:"closing-pull-requests"},"Closing Pull Requests"),(0,a.kt)("p",null,"Below are the circumstances when you can close pull requests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stand-alone pull requests that don't have issues related to them."),(0,a.kt)("li",{parentName:"ul"},"Pull requests for issues that are not assigned to the contributors."),(0,a.kt)("li",{parentName:"ul"},"Stale pull requests.")),(0,a.kt)("h2",{id:"opensauced-community-maintainers"},"OpenSauced Community Maintainers"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/open-sauced/teams/community"},"@open-sauced/community")," team."),(0,a.kt)("h2",{id:"opensauced-community-repositories"},"OpenSauced Community Repositories"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Repository Name")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/open-sauced/guestbook"},"guestbook"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/open-sauced/pizza-verse"},"pizza-verse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/open-sauced/intro"},"intro"))))))}c.isMDXComponent=!0}}]);