"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[1461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={id:"introduction-to-contributing",title:"Introduction to Contributing",sidebar_label:"Introduction to Contributing",keywords:["introduction to contributing","Getting started with contributions","New contributor guide","How to contribute effectively","Contribution essentials","Open source contribution guide","Making your first contribution","Beginner-friendly contributions","Contributing to open source projects","Starting your contribution journey","First time contributor tips"]},r=void 0,l={unversionedId:"contributing/introduction-to-contributing",id:"contributing/introduction-to-contributing",title:"Introduction to Contributing",description:"Contributions are always welcome, no matter how large or small. Before contributing,",source:"@site/docs/contributing/introduction-to-contributing.md",sourceDirName:"contributing",slug:"/contributing/introduction-to-contributing",permalink:"/contributing/introduction-to-contributing",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/introduction-to-contributing.md",tags:[],version:"current",lastUpdatedBy:"Ayu Adiati",lastUpdatedAt:1712255909,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{id:"introduction-to-contributing",title:"Introduction to Contributing",sidebar_label:"Introduction to Contributing",keywords:["introduction to contributing","Getting started with contributions","New contributor guide","How to contribute effectively","Contribution essentials","Open source contribution guide","Making your first contribution","Beginner-friendly contributions","Contributing to open source projects","Starting your contribution journey","First time contributor tips"]},sidebar:"docs",previous:{title:"Insights and Invitations",permalink:"/tools/chrome-extension/viewing-insights-and-invitations"},next:{title:"Code of Conduct",permalink:"/contributing/code-of-conduct"}},s={},u=[{value:"Recommended Communication Style",id:"recommended-communication-style",level:2},{value:"Issues",id:"issues",level:2},{value:"Commits",id:"commits",level:2},{value:"Pull Requests (PR)",id:"pull-requests-pr",level:2},{value:"PR Validation",id:"pr-validation",level:3},{value:"Work in Progress",id:"work-in-progress",level:3},{value:"Additional Resources",id:"additional-resources",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Setting Up Projects Locally",id:"setting-up-projects-locally",level:3},{value:"Additional Information",id:"additional-information",level:4},{value:"Building",id:"building",level:3},{value:"Testing",id:"testing",level:3},{value:"Applying Lint Styleguide",id:"applying-lint-styleguide",level:3},{value:"Coding Tips",id:"coding-tips",level:3},{value:"Community",id:"community",level:2},{value:"Triage Team",id:"triage-team",level:2},{value:"Funding",id:"funding",level:2},{value:"License",id:"license",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contributions are always welcome, no matter how large or small. Before contributing,\nplease read the ",(0,i.kt)("a",{parentName:"p",href:"/contributing/code-of-conduct"},"Code of Conduct")," and follow the directions below:"),(0,i.kt)("h2",{id:"recommended-communication-style"},"Recommended Communication Style"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Always leave screenshots for visual changes."),(0,i.kt)("li",{parentName:"ol"},"Always leave a detailed description in the pull request. Leave nothing ambiguous for the reviewer."),(0,i.kt)("li",{parentName:"ol"},"Always review your code first. Run the project locally and test it before requesting a review."),(0,i.kt)("li",{parentName:"ol"},"Always communicate in the GitHub repository. Whether in the issue or the pull request, keeping the lines of communication open and visible to everyone on the team helps everyone around you.")),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you wish to work on an open issue, please comment on the issue with ",(0,i.kt)("inlineCode",{parentName:"p"},".take"),", and it will be assigned to you."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If an issue is not assigned, it is assumed to be available for anyone to work on. Please assign yourself to an issue ",(0,i.kt)("em",{parentName:"p"},"before")," working on it to avoid conflicts."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Issues with the ",(0,i.kt)("inlineCode",{parentName:"p"},"needs triage")," label are unavailable to ",(0,i.kt)("inlineCode",{parentName:"p"},".take")," until they are triaged and the label is removed. Feel free to check on the issue regularly if you want to work on it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you contribute to the project for the first time, you can search for issues with ",(0,i.kt)("inlineCode",{parentName:"p"},"good first issue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bug")," labels in the repository."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Please only self-assign a ",(0,i.kt)("inlineCode",{parentName:"strong"},"good first issue")," one time"),". ",(0,i.kt)("br",null)," Maintainers may remove you from the assignees and not accept your pull request if you choose to proceed.")))),(0,i.kt)("p",null,"In case you get stuck, feel free to ask for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord")," server or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/open-sauced/discussions"},"GitHub Discussions"),"."),(0,i.kt)("p",null,"Please follow our ",(0,i.kt)("a",{parentName:"p",href:"/contributing/code-of-conduct"},"Code of Conduct")," in all your interactions with the project and its contributors."),(0,i.kt)("h2",{id:"commits"},"Commits"),(0,i.kt)("p",null,"When contributing to OpenSauced projects, use this command to follow our conventional commits:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run push\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run push")," command is an interactive replacement for ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),". It enforces the conventional commit specification for writing commit messages, making it easier for developers and maintainers to understand the changes made in a particular commit."),(0,i.kt)("p",null,"After running this command, you can push your changes to the remote repo."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," for more examples."),(0,i.kt)("h2",{id:"pull-requests-pr"},"Pull Requests (PR)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We actively welcome your pull requests. However, you must ensure that ",(0,i.kt)("strong",{parentName:"p"},"you are assigned")," to an existing issue before working on changes, and you need to ",(0,i.kt)("strong",{parentName:"p"},"link your work to the issue")," in your PR form."),(0,i.kt)("hr",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fork and clone the repo.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Creating a new branch is a must. Before working on your changes, create a new branch from the default (",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beta"),", etc.) branch. Name your branch with something descriptive of your work, i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"add-navbar")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fix/broken-links"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you've added code that should be tested, add tests.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you've changed APIs, update the documentation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you make visual changes, screenshots are required.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure the test suite passes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure you address any lint warnings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you improve the existing code, please let us know in your PR description.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Completing the PR form is required. Make sure to fill in the PR title, description, ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls"},"link to an issue"),", and all the necessary areas."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The title must begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"feat:"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fix:"),", or anything related to your changes. ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"TIP:")," You can follow your chosen option when ",(0,i.kt)("a",{parentName:"p",href:"#commits"},"committing")," your changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unsolicited code is welcomed, but an issue is required to announce your intentions."))),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Note for maintainers:")," All PRs need a label to assist automation. See ",(0,i.kt)("a",{parentName:"em",href:"/contributing/triage-guide#adding-issue-and-pr-labels"},"this guide")," to determine which labels to use."))))),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"PRs will be marked as invalid and may be closed if:")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the issue is not assigned to the contributor who opened the PR"),(0,i.kt)("li",{parentName:"ul"},"no issue is linked to the PR"),(0,i.kt)("li",{parentName:"ul"},"PR form is incomplete, or any section in the form is deleted"),(0,i.kt)("li",{parentName:"ul"},"changes are made directly on the default (",(0,i.kt)("inlineCode",{parentName:"li"},"main"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"beta"),", etc.) branch"))),(0,i.kt)("h3",{id:"pr-validation"},"PR Validation"),(0,i.kt)("p",null,"Examples of valid PR titles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix: Correct typo."),(0,i.kt)("li",{parentName:"ul"},"feat: Add support for Node 12."),(0,i.kt)("li",{parentName:"ul"},"refactor!: Drop support for Node 6.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For any breaking changes, you have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," syntax.")),(0,i.kt)("h3",{id:"work-in-progress"},"Work in Progress"),(0,i.kt)("p",null,"GitHub supports ",(0,i.kt)("a",{parentName:"p",href:"https://github.blog/2019-02-14-introducing-draft-pull-requests/"},"draft pull requests"),", which will disable the merge button until the PR is marked as ready for merge."),(0,i.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"https://youtu.be/cuMeC-eZJJ4"},"3 tips for getting your Pull Request reviewed on GitHub")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"setting-up-projects-locally"},"Setting Up Projects Locally"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Fork")," the repository you're working on from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-sauced"},"github/open-sauced")," to your own GitHub account."),(0,i.kt)("li",{parentName:"ol"},"Clone the forked repository to your local machine."),(0,i.kt)("li",{parentName:"ol"},"Check the project's README to determine how to run the project locally.")),(0,i.kt)("h4",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"For many of our repositories, you'll run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci")," to install the dependencies and set up the project locally."),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v10/commands/npm-ci#description"},"npm official docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci")," is a command that installs a project with a clean slate, skipping certain user-oriented features and being more strict than ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),".")),(0,i.kt)("p",null,"You can also use the shell commands below to get started once you have forked the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git\ncd <REPO_NAME>\nnpm ci\n")),(0,i.kt)("p",null,"Make sure to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<GITHUB_USERNAME>")," with your GitHub username."),(0,i.kt)("h3",{id:"building"},"Building"),(0,i.kt)("p",null,"To generate a production-ready version of your code, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"For running the test suite, use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# the tests will run in watch mode by default\nnpm test\n")),(0,i.kt)("p",null,"Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html"},"install Watchman"),"."),(0,i.kt)("p",null,"Check out this course, ",(0,i.kt)("a",{parentName:"p",href:"https://testingjavascript.com/"},"Testing JavaScript"),", for more info on testing React and JavaScript."),(0,i.kt)("h3",{id:"applying-lint-styleguide"},"Applying Lint Styleguide"),(0,i.kt)("p",null,"To check the code for formatting and linting errors, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run lint\n")),(0,i.kt)("p",null,"These errors will also be displayed during development but won't prevent the code from compiling."),(0,i.kt)("p",null,"To fix the formatting and linting errors, run the following command instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run format\n")),(0,i.kt)("p",null,"These commands use ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to check and fix the code."),(0,i.kt)("p",null,"If you forget to run this command, automated PR checks will also run these commands, but the PR will be blocked if there are any errors."),(0,i.kt)("h3",{id:"coding-tips"},"Coding Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ask questions if you are stuck."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables.")),(0,i.kt)("li",{parentName:"ul"},"Always use ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/external-anchors-use-rel-noopener/"},'rel="noreferrer" on all target="',"_",'blank" links'),".")),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Do you have questions? Join the conversation in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"IMPORTANT")," ",(0,i.kt)("br",null)," Please do not DM Maintainers or contact them outside of GitHub if you want a PR Review. If you haven't received a review within a week, please tag them in the PR comments to ask for an estimated time of review.")),(0,i.kt)("h2",{id:"triage-team"},"Triage Team"),(0,i.kt)("p",null,"The Triage team is inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md"},"expressjs/express"),". This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow the ",(0,i.kt)("a",{parentName:"p",href:"/contributing/triage-guide"},"Triage Guide"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are no minimum requirements to become a member of the Triage Team.")),(0,i.kt)("p",null,"For those interested in getting involved in the project or just open source in general and wanting to join the Triage Team, please leave a comment in the ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83c\udf55opensauced-contributors-chat")," channel on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord"),"."),(0,i.kt)("h2",{id:"funding"},"Funding"),(0,i.kt)("p",null,"OpenSauced is a part of GitHub Sponsors. If you would like to contribute, please note the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sponsors/open-sauced"},"sponsor page")," for details on how funds are distributed. If you have made any contributions to the project directly or indirectly, please consider adding your profile to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/.github/blob/main/FUNDING.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"FUNDING.yml"))," file."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"By contributing to the OpenSauced project, you agree that your contributions will be licensed\nby a specific License. You can find this information in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE")," file of the repo you are contributing to."))}d.isMDXComponent=!0}}]);