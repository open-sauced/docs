---
title: So What Does a Maintainer Do Anyway?
tags: []
authors: BekahHW
slug: so-what-does-a-maintainer-do-anyway
description: "What are the day-to-day tasks of a maintainer? What are things you need to get started versus things that would be good to implement in the future? "
---

So far in [this series](https://dev.to/bekahhw/series/25520), we’ve explored maintainership from a high level understanding of what’s required, why you should consider it, and how to get started. But what are the day-to-day tasks of a maintainer? 

The first project I actively maintained was something that I hadn’t initially considered for open source contributions. It was open sourced, but I didn’t anticipate anyone contributing but me. When I was encouraged to share it with contributors during Hacktoberfest a couple of years ago, I had to make some updates so people understood what the purpose of the project was, how to run it, and the technology behind it. Looking back at it, there are, of course, things I could have added or done differently. 

<!-- truncate -->

But I think it’s ok to think of putting a Minimum Viable Project (MVP) out there without all the extras that some other projects have. That’s why, in the post below, you’ll see two sets of bullet points for each category. The first is things that are good to have for your project when you start. The second is something you can progress to.

## Code Review and Quality Control
### Basics

- **Understanding Basic Coding Standards**: These are rules or guidelines about how to write code for your project. They can include coding style, best practices, and how to structure code. You communicate these standards to new contributors usually through a document in your project repository, often named CONTRIBUTING.md. At OpenSauced, we have a [Contributing section](https://docs.opensauced.pizza/contributing/introduction-to-contributing/) in our docs to help explain how new contributors can get started.
- **Conducting a PR Review**: When a contributor submits a Pull Request (PR), you need to check if their code follows your project’s standards and if it works well with existing code. This involves reading the code changes, understanding what they do, and testing them in your local environment. If the new code doesn't work well, you provide feedback to the contributor, suggesting necessary changes.  You can find out more about PRs in these blog posts:
     - [How to Get Your Pull Request Reviewed](https://dev.to/opensauced/how-to-get-your-pull-request-reviewed-kgd)
     - [Understanding Why Pull Requests Get Rejected in Open Source Projects](https://dev.to/opensauced/understanding-why-pull-requests-get-rejected-in-open-source-projects-1jd0)

### Progression

- **Using GitHub Actions**: GitHub (GH) Actions are automated tasks that can help you test code, enforce standards, and manage workflows. They are useful because they can automatically perform tasks that you'd otherwise do manually, saving time and reducing errors. Check out [Setting up your first GitHub Action](https://dev.to/opensauced/setting-up-your-first-github-action-for-specific-contributions-33a4) if you want to learn more.

One way to use them is for automated testing. For example, every time someone submits a PR, GitHub Actions could run a series of tests to check if the new code breaks anything. If a test fails, the PR can't be merged until the issue is fixed, ensuring that only working code is added to your project. I recently was able to determine why my PR failed by tracing information in the automated testing. You can check out how in my post [What to do when your PR fails](https://dev.to/opensauced/what-to-do-when-your-pr-fails-bl1). 

## Testing and Stability

### Basics

- **Manual Testing**: You always want to make sure that software is working as intended. You won’t always get it right, but checking is a good start. Manual testing involves you or your contributors running the new features on your local machines to check if they work as intended and don't break existing features. It's a hands-on approach where you interact with the software directly.

- **Writing Basic Tests**: This isn’t necessary, but could be a good practice to ensure your project continues to work. First, you’ll need to decide on a testing framework for your project. Once you’ve done that and set it up, you can encourage contributors to write simple tests for their code. This can be as straightforward as checking if a function returns the right output.

### Progression

- **Automated Testing**: Tools like Travis CI or Jenkins can automatically run tests every time changes are made to the code. This is important for larger projects to ensure everything works together.

- **Understanding Continuous Integration (CI)**: CI is a development practice where code changes are automatically tested and merged into a shared repository frequently. It helps catch issues early and improves software quality.

## Documentation

### Basics

- **Importance of Documentation**: Documentation is like a guidebook for your project. It tells contributors and users how to use or contribute to your project. Keeping it simple yet comprehensive is key.

- **Updating Documentation**: Whenever you make changes to your project, make sure your documentation reflects those changes. This could be as simple as updating a README file or adding comments to your code.

### Progression

- **Advanced Documentation Tools**: You can use GitHub pages and tools like docusaurus or docsify to host your documentation and make it easily accessible. As your project grows, your documentation can include tutorials, FAQs, and more in-depth guides.

## Operational Best Practices

### Basics
- **Using Version Control**: Tools like Git help you track changes to your code. Start by [learning the basics of Git](https://dev.to/opensauced/the-power-of-git-a-guide-to-collaborative-version-control-dl6), like committing changes and creating branches.

### Progression

- **Project Management Tools**: As your project grows, tools like GitHub Projects can help you to manage more tasks and workflows and it provides transparency to your contributors. You can create a roadmap of what you’re implementing in your feature and give an expected timeframe.

## Community Management and Engagement

### Basics

- **Building a Community**: Use platforms like Slack, Discord, or GitHub Discussions to create a space where your project’s users and contributors can interact, share ideas, and ask questions. Personally, I like starting with GitHub Discussions because it’s easier to establish as a knowledge base for answers to questions and doesn’t require the same amount of energy to support as a Slack or Discord.

- **Encouraging Participation**: Regularly engage with your community by answering questions, providing updates, and seeking feedback on the project's direction.

### Progression
- **Organizing Online Events**: As your community grows, consider holding office hours, livestreams, hackathons, or contribution days to increase engagement and collaboration.

Now you have five tasks to complete to get started as a maintainer. Remember, it’s not about being perfect. It’s about learning and growing with your project. If you're enjoying this series and are interested in becoming a maintainer, we're happy to share that we're going to be launching a Becoming a Maintainer Course in the next couple of months. For updates on when and where to find that, you can [sign up for our newsletter](https://news.opensauced.pizza/?v=1701706051337#/portal/signup).
