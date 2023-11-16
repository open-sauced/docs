---
id: maintainers-guide-to-open-sauced
title: 'Maintainers Guide to OpenSauced'
sidebar_label: Maintainers Guide to OpenSauced
keywords:
  - maintainers
  - guides
---

## Introduction to OpenSauced for Maintainers

OpenSauced is a platform dedicated to empowering maintainers and redefining open source contributions. We offer a GitHub-powered dashboard for tracking contributions and gaining insights into your open source projects. You can customize your Insights Pages and Lists with the repositories you choose and the contributors you want to see.

You can connect with your team and contributors through our platform and invite them to join OpenSauced. We also offer a [GitHub browser extension](../tools/chrome-extension/introduction-to-the-chrome-extension.md) that allows you to view your contributors' OpenSauced profiles and invite them to join OpenSauced with a single click.

## Getting Started

To get started, you will need to create an account on OpenSauced. You can do this by visiting the [app.opensauced.pizza](https://app.opensauced.pizza) and clicking the "Connect with GitHub" button. You will be prompted to sign in with your GitHub account. Once you have signed in, you will be redirected to the OpenSauced dashboard.

## Insights: Connecting Your Repositories

OpenSauced Insights provides maintainers with a visual representation of their project's health and contributor engagement. It offers real-time data and analytics to understand contribution patterns, identify key contributors, and measure the project's growth. Insights can help you assess team activity, understand when bottlenecks occur, identify where resource allocation is needed, plan and identify key contributors, understand contributor churn, or spot emerging trends.

Insights features allow you to:

- track the contributions of a specific team, a specific repository, or a group of repositories,
- view the number of pull requests that are open, closed, in draft, and merged,
- view the average number of days it takes for a pull request to be merged (PR velocity),
- identify the top contributors to your project,
- identify the current activity level and trends in activity of your contributors.

### Creating a New Insight Page

To connect your repositories, click the "Insights" tab on the dashboard. You will be redirected to a page where you can create your new Insight Page.

There are two ways to add repositories to your Insight Page:

1. **Sync GitHub Organization**. Syncing your GitHub organization is a good idea for someone who seeks a comprehensive, unified view of your organization's open source project activities and trends, enabling streamlined management, strategic decision-making, and efficient allocation of resources across multiple repositories.
2. **Connect Individual Repositories**. Connecting individual repositories is a good idea for someone who wants to track the contributions of a specific repository or group of repositories. For example, you might want to track projects you maintain that are not under the same organization, or you may want to track projects that align with your team's objectives.

![sync team gif](../../static/gif/team-sync-insights.gif)

### Using Your Insights Page

Once you have connected your repositories, you will be redirected to your Insight Page. Here, you will see a dashboard with an overview of the repositories and the contributors who have contributed to them.

There are three tabs that provide you with more information on these repositories:

#### Reports

The Reports tab allows paid users to filter for more information about their repositories over the last 30 days and to generate a Downloadable CSV. Filters include: Top 100 Repos, Minimum 5 Contributors, Recent, Most Active, and Spammed.

#### Repositories

The Repositories tab allows you to view more detailed information on each repository, including Activity, PR Overview, PR Velocity, Spam, Contributors, and activity over the last 30 days. To learn more about these features, see [Understanding Insights Data](understanding-insights.md).

![repositories tab](../../static/img/repos-insights.png)

#### Contributors

The Contributors tab allows you to view more detailed information on each contributor, including Activity, Repositories, the date of their last contribution, Time Zone, and the number of contributions.

To learn more about your contributors, you can select them and add them to a list.

![contributors insight list](../../static/img/contributors-insights.png)

There are two ways to add contributors to a list:

1. Create a new list with selected contributors.
2. Add selected contributors to an existing list.

## Lists: Connecting with Contributors

OpenSauced Lists feature allows you to categorize, monitor, and analyze various groups of contributors. You can use Lists to track the contributions of a specific team, a specific repository, or a group of repositories. This feature offers granular insights into each contributor's activities and contributions, helping maintainers to track individual contribution histories, identify active engagement, recognize new or alumni contributors, and compare the performance of different contributors.

The Lists features allow you to:

- track the commits and PRs of the contributors on your list,
- filter your contributors by their activity level, including most active, new, and alumni,
- view the repositories that your contributors have contributed to, the languages they've used for their contributions, and their time zones.

### Why Create a List?

There are many reasons to create a list, but here's some inspiration to get you started:

- **Interacting Contributors**: Keep tabs on contributors actively interacting with your repository.
- **Organization's Developers**: Monitor the contributions and performance of your internal team.
- **VIP Contributors**: Highlight and track at least five developers who are key maintainers or significant contributors.
- **Sales Leads**: Identify contributors whose engagement could potentially be turned into sales opportunities.
- **Potential Hires**: Observe contributors who exhibit skill and commitment, making them prime candidates for hiring.
- **Alumni Contributors**: Keep an eye on contributors who have decreased their engagement or left the project.

### Creating a New List

1. Click the "Lists" tab on the Insights hub to create a new list. You will be redirected to a page where you can create your new list.
2. Click on the "New List" button to start a new list.
3. Give your list a name.
4. Choose your page visibility. You can choose to make your list public or private. By default, it is set to private.
5. Add contributors to your list by searching for their GitHub username, syncing your GitHub Team, or importing your GitHub Following.

![team sync gif](../../static/gif/team-sync.gif)

## Using Your List

Once you have created your list, you will be redirected to your List Page. Here, you will see a dashboard with an overview of the repositories and the contributors who have contributed to them.

There are three tabs that provide you with more information on these repositories:

### Overview

The Overview tab gives you a high-level view of the contributors in your list, including the total number of commits in the last 30 days and the types of contributors on your list: Active, New, and Alumni.

### Activity

The Activity tab gives you a graph view with more detailed information on each contributor, including the type of activity, repositories they've contributed to, and how they compare to each other.

You can filter your list by All Contributors, Active Contributors, New Contributors, and Churned Contributors.

![list graph](../../static/img/list-graph.png)

### Contributors

The Contributors tab gives you the list of the contributors and includes information like activity level, last repository contributed to, the date of their last contribution, time zone, programming languages used, and number of contributions.

To learn more about these features, see [Understanding Lists Data](understanding-lists-data.md).

## Highlights: Connecting and Recognizing Contributions

Leveraging OpenSauced's Highlights feature is a great way for maintainers to recognize and showcase the valuable contributions made to your open source projects, to curate and share key achievements, contributions, and milestones, and bring visibility to the hard work of your community.

Highlights can be used to:

- publicize issues on your repository that you'd like to match with contributors,
- share Dev.to blog posts you've written,
- celebrate PRs for your project.

### Creating a New Highlight

There are two ways to create a new highlight:

1. After clicking the [Highlights tab](https://app.opensauced.pizza/feed) in the top navigation, click the input that says "Post a highlight to show your work!"

2. From your profile, click the input that says "Post a highlight to show your work!"

After you've clicked the input, you'll see a form that allows you to create a new highlight.

There are two ways to create a highlight:

1. Paste the URL to your PR, Issue, or Dev.to blog post (shown in blue below).
2. Choose from a list of suggestions (shown in orange below).

![highlight suggestions](../../static/img/highlights.png)

If you're adding a blog post, you'll need to associate it to a repository by clicking the "Add a repo" button.

Finally, it's time to add the details of your highlight. You can add a description yourself or use the auto-summarize function to generate a description.

![gif of creating a highlight](../../static/gif/highlight.gif)

### Writing an Effective Highlight

Writing an effective highlight is key to attracting contributors to your project. Here are some tips to help you write an effective highlight:

#### Issues

1. **Focus on the Problem Solved**: Begin by briefly describing the problem or challenge the issue addresses. This sets the context for why it was important.
2. **Acknowledge Contributor(s)**: Mention the contributor(s) who reported or worked on the issue, recognizing their effort.
3. **Impact Statement**: Explain how resolving this issue benefits the project, such as improving functionality, user experience, or security.

#### Highlighting PRs

1. **Summarize the Changes**: Start with a clear summary of what the PR achieves. This could be a new feature, bug fix, or enhancement.
2. **Credit the Contributors**: Acknowledge everyone who contributed to the PR, including reviewers.
3. **Highlight the Value**: Explain the value of these changes to the project or its users. For instance, how it improves performance, adds a requested feature, or simplifies the codebase.

#### Highlighting Dev.to Blog Posts

1. **Capture the Essence**: Begin with an interesting blog post summary, capturing the main theme or message.
2. **Discuss the Relevance**: Explain why this blog post is important for your open source project or community. Is it about a major update, a community event, or sharing best practices?
3. **Engage with a Call-to-Action**: Encourage readers to engage with the post, whether by reading, commenting, or sharing their thoughts on the topic.
