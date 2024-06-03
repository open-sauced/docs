---
title: Strategies for Successful Contributor Onboarding
tags: []
authors: BekahHW
slug: strategies-for-successful-contributor-onboarding
description: "Explore effective strategies for onboarding new contributors in open source projects. Learn how to create a welcoming environment, provide mentorship, and recognize diverse contributions to foster a thriving open source community."
---

Every week at 10:30a ET, I do X/Twitter spaces about open source. I’ve been fortunate enough to learn from some amazing folks in the space, and two conversations really had me thinking about this topic. I chatted with Rachel Nabors of Clerk and Ben Holmes of Astro about open source projects and the contributor’s journey. They both shared their philosophies on how to cultivate a positive contributor journey. As a former educator, it made a lot of sense: If we want to see return contributors, we need to create a space that encourages them to return. Part of this means cultivating a contributor journey that allows your contributors to grow, [receive recognition for their contributions](https://opensauced.pizza/blog/the-need-for-recognition-in-open-source), and provides a positive experience. Creating an impactful contributor journey requires deliberate thought and understanding, listening, and a willingness to grow with your contributors.

<!-- truncate -->


## Identifying Contributors' Entry Points
When you’re creating a contributor’s journey, it’s important to recognize that not every contributor will have the same experience level. In fact, it’s kind of a [choose your own adventure](https://dev.to/opensauced/choose-your-own-adventure-in-open-source-paths-to-success-167p). So in some ways, you’re constructing multiple contributor paths that overlap in some areas. Three categories of contributors you can consider are new, intermediate, and expert:

- New Contributors: New contributors, in this sense, are folks who are new to open source contributions. They might need guidance on basic concepts, like using Git, understanding open source licenses, and making their first pull request. It’s useful to have resources to point them to, especially if you don’t have the capacity to provide that support.
- Intermediate Contributors: Contributors who have some experience but want to deepen their engagement. They might be interested in more complex contributions, growing their network and skills, or becoming maintainers. 
- Expert Contributors: These are seasoned open source contributors who can contribute at a high level and potentially lead projects. Often, at this level, they are making contributions out of a need or because they’re interested in a project they use. For example, if they’re using a technology and identify a bug, they may need to ensure the bug is fixed quickly to implement it in their own project.

At OpenSauced, we’ve been working to curate a contributor journey that allows for contributors to grow. We have repositories made for new contributors, like our [Intro Course](https://github.com/open-sauced/intro), [pizza-verse](https://github.com/open-sauced/docs), and [guestbook](https://github.com/open-sauced/guestbook). We also include `good first issue` labels on some of the issues in our `app`, which is generally geared towards someone leaving the new stage and entering the intermediate stage. In the same way, our [docs](https://github.com/open-sauced/docs) repo has a variety of issues open to different levels. And finally, there’s always space for our expert contributors across the repositories.

## The Importance of Onboarding New Contributors

Onboarding new contributors is an important part of maintaining the health and growth of any open source project. Onboarding is the process of sharing information with new individuals about the project's goals, processes, and codebase. By effectively onboarding new contributors, projects are more likely to have a steady influx of new perspectives, ideas, and skills, while also preventing the burnout and stagnation that can occur when a project relies solely on a small core team.

One of the main challenges faced by open source projects is the lack of new contributors who understand how the project works and who return to contribute. This often leads to a small group of individuals who are responsible for maintaining the project, without being able to pass on their knowledge to others. When we prioritize the onboarding of new contributors, projects can create a sustainable ecosystem where knowledge is shared, responsibilities are distributed, and the project can continue to evolve and grow.

Here are some of the ways you can provide effective onboarding:


1. **Clear Documentation**. I think good onboarding always starts with clear documentation. This includes setup guides, contribution guidelines, code of conduct, and a README file that clearly explains the project's purpose. It’s worth noting that documentation should be written in a way that the largest number of contributors can understand. This means to use simple language, and to use examples that are as universal as possible to include non-native speakers.
2. **Welcoming Environment**. A good way to create a community culture that is welcoming and inclusive is to have a **Code of Conduct** that clearly states the expectations for how to treat other contributors with enforcement details when behavior is deemed inappropriate, have a **CONTRIBUTING.md** file that shares details about how to contribute to the projects in the organization’s ecosystem, and  [acknowledge that contributions come in various forms](https://dev.to/opensauced/how-to-contribute-to-open-source-without-knowing-how-to-code-a-guide-with-project-suggestions-59e5), not just code.
3. **Regular Contributor Meetings**. Hold regular meetings or calls where contributors can discuss ongoing projects, share updates, and ask questions.
This can help new contributors navigate the project and feel more connected to the community. This can come in different forms. At OpenSauced, we answer questions in our [Community](https://github.com/orgs/open-sauced/discussions/1). I’ve seen maintainers also have ten-minute slots open on their calendar for conversations with contributors. What’s important is that there’s a consistent and clear way for contributors to communicate with maintainers.
4. **Labeled Issues**. Labeling issues is a great way to help create a clear contributor path. Tag beginner-friendly issues as "good first issues" to help new contributors identify where they can start. These issues, in particular, should be  well-documented and approachable. If there are issues that are just for the core team, add that as a label to avoid frustration as well. Think about labeling like this: how can I make it easier for contributors to find issues they can work on? 
5. **Regular Communication**. Maintain regular communication channels like Slack, Discord, or forums. Because one of the tenets of open source work is to be open and transparent, encourage open discussions in those spaces as well as on issues and Pull Requests (PR). I’ve found that a lot of new contributors have a tendency to direct message questions, but I try to redirect them to the issue or PR they have a question about to promote open communication. This also decreases communication burdens being placed directly on the maintainer because open communication allows other contributors to respond as well.
6. **Feedback Mechanisms**. Create a system for providing constructive feedback on contributions. This can include code reviews, discussions on issue threads, or during office hours.
7. **Recognition**. Recognize contributions in various forms. Highlighting contributors in newsletters, social media, or on your platform can be a great way to show appreciation.

Effective onboarding is more than just providing documentation and tutorials; It should be a deliberate effort to actively involve new contributors in the project's development and provide them with support. By investing time and resources into onboarding, projects can create a culture that values and encourages the growth and development of new contributors.

## Mentorship for New Contributors.

While there are communities that teach beginners how to get involved in open source, they often lack a clear path for growth and support beyond the entry level. Incorporating mentorship allows new contributors to receive the necessary support and value to develop into contributors and potentially core members of the project.

Mentorship is one of those things that we usually know is valuable, but we have a hard time justifying the time it takes to do it. Maintainers often feel overwhelmed with their responsibilities and feel like they don’t have the time or resources to onboard new people. However, before getting overwhelmed, let’s consider two things: 1. What is mentorship in this day and age? 2. Mentorship is an investment in success and sustainability of open source projects.

> Mentorship is a professional, working alliance in which individuals work together over time to support the personal and professional growth, development, and success of the relational partners through the provision of career and psychosocial support. - [The Science of Effective Mentorship in STEMM.](https://www.ncbi.nlm.nih.gov/books/NBK552775/)

Notice that this definition doesn’t require 1:1 meetings over a period of time. How can you provide support for an early-career contributor without meeting? One practical way is through documentation. If your documentation provides everything a contributor needs to get started, it’s an effective way to provide far more support than 1:1 meetings. It also provides an opportunity for questions and feedback between contributors and mentors in a way that allows everyone and the project to grow. 

In addition to documentation and clear paths of communication, maintainers can identify tasks or features that are important but not urgent, and set them aside for new or early-career contributors. This allows new contributors to work on meaningful contributions while receiving guidance and feedback from the maintainer. Regular code reviews and mentorship sessions can help onboard and develop these contributors, ensuring a smooth transition and knowledge transfer.

## Defining Contribution Paths

Every project will have different contributor needs. When you think about the contributor journey, you’ll need to identify what your current and future needs are and be able to share that with your contributors. This includes:

- Code Contributions: The traditional path of contributing to the codebase, including bug fixes, feature additions, and optimizations.
- Community Contributions: Engaging in community forums, helping other users, and organizing events.
- Documentation: Writing or improving documentation, tutorials, and how-to guides.
- Advocacy and Outreach: Writing blog posts, creating educational content, speaking at conferences, and promoting the project.
- Issue Reporting and Management: Creating, triaging, and managing issues and feature requests.

Creating a journey for each of the three types of contributor paths means utilizing different types of contributions to help curate a journey that works for the most people, and also determining the amount of support you can give for each. So, for example, if you would like help with advocacy and outreach, but you don’t have time to mentor a new speaker, you shouldn’t include it in the path you construct. 

### Identifying Potential Contributors

Waiting for contributors to stumble upon the project and navigate through code and documentation isn’t an efficient strategy. Deliberately investing in onboarding new contributors helps ensure that the project can continue to grow, evolve, and have a healthy legacy, even when maintainers move on to other projects.

Identifying potential contributors who could be mentored into core members can be done in several ways. One approach is to find individuals with specialized skills or interests relevant to the project. For example, if a project is building an animation feature, looking at open source projects that use that feature will allow you to identify community members that have that expertise.

Another way to identify potential contributors is by looking at open source animations projects to see who is actively contributing to the project's documentation. These individuals already have a good understanding of the project and have invested time in it. The ability to contribute to documentation is seen as a strong indicator of being a good enough engineer, as it requires a solid understanding of the project to explain it to others.

Creating a strong contributor journey means that you’ll need to periodically review the paths you’ve created to identify areas for improvement, updates, and to better understand your strengths. It’s worth noting that your contributor community will likely change over time, so being open to the changing needs and industry trends will help you to maintain a strong community. Finally, recognizing your contributors is an important part of the process as well. At OpenSauced, we’re doing a monthly shoutouts livestream, as well as highlighting our contributors' work in our newsletter and on social media. 
