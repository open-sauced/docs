---
title: "Pour One Out for create-react-app: What's Next?"
tags: []
authors: BekahHW
slug: pour-one-out-for-create-react-app-whats-next
description: Explore the lifecycle of Facebook's Create React App (CRA) and understand the significance of open-source insights into issues and pull requests.
---

Many open-source projects, like [Facebook's Create React App (CRA)](https://app.opensauced.pizza/s/facebook/create-react-app), experience a familiar arc – a rapid rise followed by a perceived decline. In the last thirty days, CRA hasn’t had any merged pull requests. This begs the question: what happened to CRA?

<!-- truncate -->


[![pour one out for CRA](https://cdn.sanity.io/images/r7m53vrk/production/8b6ba3109f6a8d048e0ee9ac66a7ea93d2db79ca-590x411.png?w=450)](https://x.com/bdougieYO/status/1790796316773335135)

## Do we need Open Source Insights into Issues and Pull Requests?

While GitHub provides a wealth of data on issues and PRs (pull requests), a high-level overview can give us a better understanding of what’s happening. Let’s take a closer look at what’s been happening at CRA.

### Understanding Issues

With a high-level overview of the recent issues, we can get a better idea of how to triage and prioritize. Let’s take CRA, for example. 

[![PR Table](https://cdn.sanity.io/images/r7m53vrk/production/89d84b97c63cb39fe8e17dcbf2103473ac0cf4b4-1011x904.png?w=450)](https://oss.fyi/LVeBSCV)

*A couple of things stand out:*

#### Variety and Volume of Issues

The issues within CRA range from security vulnerabilities to user experience complaints. The recent security issues identified (tagged with CVE identifiers) point to a critical need for security updates, with user experience issues like configuration problems that might be solved by improved documentation.

#### Frequency of Issues

 A high frequency of new issues can be a double-edged sword—it might show an active and thriving community, or it could indicate problems with user experience and documentation. Likewise, a low frequency of issues could indicate a stable project or a dying project. In the last 30 days, CRA has had a total of 9 open issues and 10 closed issues. 

![issues](https://cdn.sanity.io/images/r7m53vrk/production/9cc14b87769ffe7fd0a294b9df73b6084673d971-430x157.png?w=450)

#### Community Interaction

The level of interaction within issue discussions can reveal a lot about the community’s health and the project's transparency. Sure, stars and forks can help us understand the activity level of the project, but they’re not always the most telling.

![engagement](https://cdn.sanity.io/images/r7m53vrk/production/9c946dde5b64f9aa6288d8088e131c3d8ec08eb1-407x138.png?w=450)

How are contributors interacting with the maintainers, and how are maintainers communicating to them? Sometimes the most revealing issues are the ones asking if a project is still supported, like this one from almost a year ago.

[![image](https://cdn.sanity.io/images/r7m53vrk/production/b1bb4b3d4e091ed582cf51494d8625890369d4b4-980x90.png?w=450)](https://app.opensauced.pizza/workspaces/1cb08c8f-1744-4a9a-8078-633fd588a6e0/issues?page=4&limit=50&range=360)

Taking a closer look at the variety and volume of issues, how often they pop up, and how everyone's talking things through really tells us what needs immediate attention and what can wait. This overview can help maintainers figure out the best steps forward—whether it’s jumping on a hot issue, scheduling something for a later fix, or just keeping the lines of communication open with the community on the status of your project. 

### Understanding Pull Requests

Issues don’t tell the whole story though. PRs help us to understand the vision of the project, the maintainers priorities, and the time that’s being put into the project. 

![PR Table](https://cdn.sanity.io/images/r7m53vrk/production/b4d2637cc2d2c23f0e08e0efd33bc98db225d6e1-999x754.png?w=450)

Here are some of the things we learn about CRA:

#### Look at the State

Over the last year, there have been 113 opened PRs and 2 merged.  In fact, to find when the last PR was merged, we have to go back to almost a year ago, with all other PRs "Open" or "Closed" (without merge).

[![PRs](https://cdn.sanity.io/images/r7m53vrk/production/87956af014ca226d593eaddf5dd72ee6b86507d2-310x105.png?w=450)](https://app.opensauced.pizza/workspaces/1cb08c8f-1744-4a9a-8078-633fd588a6e0?range=360)

#### Size and Scope

Pay attention to the number of changed files and the number of lines added/deleted. In healthy open-source projects, large PRs likely introduce new features or substantial changes, while smaller PRs might be bug fixes or documentation updates. Ideally, you’ll have a mix of sizes and give you a sense of the project's priorities and development lifecycle. Recently, with CRA, we see mostly very small fixes with under ten changes. In other words, there’s low activity on the repository when looking at PRs.

#### Freshness

Another indicator of project health is how recently PRs were updated, created or closed. For a hugely popular project like CRA ( 102k stars, 26.6k forks, 1.9k watching), we’d expect a lot of activity, but, instead, we’re seeing little to no changes, even with simple fixes like updating a broken link. 

### Leveraging Open Source Insights for Strategic Decisions

The real power in these insights is that it allows us to be more strategic about our decisions, ultimately increasing our productivity, allowing us to:

- Allocate resources more efficiently, prioritizing high-impact tasks.
- Enhance the community’s involvement by addressing the most pressing concerns promptly.
- Predict potential bottlenecks and prepare solutions in advance.

We've explored how PRs and Issues can unlock a deeper understanding of Create React App. But maybe the real question is: Can this approach be applied to predict future trends in the React ecosystem itself? Think about it. By analyzing the types of feature requests and bug fixes, can we get a glimpse into the challenges and pain points that developers are facing? Can we use what we see in our own projects and compare that to the ecosystem to get a better understanding of how we can succeed? There's no answer yet, but the future is there.

[![CRA - 6 months](https://cdn.sanity.io/images/r7m53vrk/production/0c323088fe3663d37e01c3a6ec06bf6d7c0f2589-1002x468.png?w=450)](https://app.opensauced.pizza/workspaces/1cb08c8f-1744-4a9a-8078-633fd588a6e0?range=180)

I think it’s safe to say we can pour one out for Create React App, but what’s next, then? 

Like most things in tech, I think the answer is *it depends*. The closest replacement might be using Vite with a React Template, but there are more options to consider [on this list](https://oss.fyi/CRA-Alts). None are an exact replacement for CRA, but they are options that can get you up and running for simple single page apps to more complex full-stack projects. 

What would you add to this list? Laravel, maybe 😉

If you are interested in better metrics for measuring open-source success, consider creating [a workspace](http://app.opensauced.pizza/start) or explore the [CRA Workspace](https://oss.fyi/LVeBSCV) I used to write this post.

