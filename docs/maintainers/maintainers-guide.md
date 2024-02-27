---
id: maintainers-guide-to-open-sauced
title: "Maintainers Guide to OpenSauced"
sidebar_label: "Maintainers Guide to OpenSauced"
keywords:
  - "maintainers"
  - "guides"
  - "open source maintainers guide" 
  - "open source maintainer"
  - "Maintainers Guide to OpenSauced"
---

## Introduction to OpenSauced for Maintainers

OpenSauced is a platform dedicated to empowering maintainers and redefining open source contributions. We offer a GitHub-powered dashboard for tracking contributions and gaining insights into your open source projects. You can customize your Insights Pages and Contributor Insights with the repositories you choose and the contributors you want to see.

## Getting Started

To get started, you will need to create an account on OpenSauced. You can do this by visiting the [app.opensauced.pizza](https://app.opensauced.pizza) and clicking the "Connect with GitHub" button. You will be prompted to sign in with your GitHub account. Once you have signed in, you will be redirected to the OpenSauced dashboard.

## Repository Insights: Connecting Your Repositories

OpenSauced Repository Insights provides maintainers with a visual representation of their project's health and contributor engagement. It offers real-time data and analytics to understand contribution patterns, identify key contributors, and measure the project's growth. Repository Insights can help you assess team activity, understand when bottlenecks occur, identify where resource allocation is needed, plan and identify key contributors, understand alumni contributors, or spot emerging trends.

The Repository Insights feature allows you to:

- track the contributions of a specific team, a specific repository, or a group of repositories,
- view the number of pull requests that are open, closed, in draft, and merged,
- view the average number of days it takes for a pull request to be merged (PR velocity),
- identify the top contributors to your project,
- identify the current activity level and trends in activity of your contributors.

### Creating a New Repository Insight Page

To connect your repositories, click the "Insights" tab on the dashboard. You will be redirected to a page where you can create your new Repository Insight Page.

There are two ways to add repositories to your Repository Insight Page:

1. **Sync GitHub organization**. Syncing your GitHub organization is a good idea for someone who seeks a comprehensive, unified view of your organization's open source project activities and trends, enabling streamlined management, strategic decision-making, and efficient allocation of resources across multiple repositories.
2. **Connect individual repositories**. Connecting individual repositories is a good idea for someone who wants to track the contributions of a specific repository or group of repositories. For example, you might want to track projects you maintain that are not under the same organization, or you may want to track projects that align with your team's objectives.

![sync team gif](../../static/gif/team-sync-insights.gif)

### Using Your Repository Insights Page

Once you have connected your repositories, you will be redirected to your Insight Page. Here, you will see a dashboard with an overview of the repositories and the contributors who have contributed to them.

There are three tabs that provide you with more information on these repositories:

#### Reports

The Reports tab allows paid users to filter for more information about their repositories over the last 30 days and to generate a Downloadable CSV. Filters include: Top 100 Repos, Minimum 5 Contributors, Recent, Most Active, and Spammed.

#### Repositories

The Repositories tab allows you to view more detailed information on each repository, including Activity, PR Overview, PR Velocity, Spam, Contributors, and activity over the last 30 days. To learn more about these features, see [Understanding Repository Insights Data](understanding-repo-insights.md).

![repositories tab](../../static/img/repos-insights.png)

#### Contributors

The Contributors tab allows you to view more detailed information on each contributor, including Activity, Repositories, the date of their last contribution, Time Zone, and the number of contributions.

To learn more about your contributors, you can select them and add them to a Contributor Insight Page.

![contributors insight list](../../static/img/contributors-insights.png)

There are two ways to add contributors to a Contributor Insight Page:

1. Create a new Contributor Insight Page with selected contributors.
2. Add selected contributors to an existing Contributor Insight Page.

## Contributor Insights : Connecting with Contributors

OpenSauced Contributor Insights feature allows you to categorize, monitor, and analyze various groups of contributors. You can use Contributor Insights to track the contributions of a specific team, a specific repository, or a group of repositories. This feature offers granular insights into each contributor's activities and contributions, helping maintainers to track individual contribution histories, identify active engagement, recognize new or alumni contributors, and compare the performance of different contributors.

The Contributor Insights features allow you to:

- track the commits and PRs of the contributors on your list,
- filter your contributors by their activity level, including most active, new, and alumni,
- view the repositories that your contributors have contributed to, the top programming languages they've used, and their time zones.

### Why Create a Contributor Insight Page?

There are many reasons to create a Contributor Insight Page, but here's some inspiration to get you started:

- **Interacting contributors**: Keep tabs on contributors actively interacting with your repository.
- **Organization's developers**: Monitor the contributions and performance of your internal team.
- **VIP contributors**: Highlight and track contributors who you've identifies as key maintainers or significant contributors.
- **Sales leads**: Identify contributors whose engagement could potentially be turned into sales opportunities.
- **Potential hires**: Observe contributors who exhibit skill and commitment, making them prime candidates for hiring.
- **Alumni contributors**: Keep an eye on contributors who have decreased their engagement or left the project.

### Creating a New Contributor Insight Page

1. Click the + next to Insights in the sidebar to create a new insight page. You will be redirected to a page where you can create your new insight page.

![New Contributor Insight Page](../../static/img/contrib-insight-new.png)

2. Click on the "New Contributor Insight" to start a new insight page.
3. Give your page a name.
4. Choose your page visibility. You can choose to make your Contributor Insight Page public or private. By default, it is set to public.
5. Add contributors to your page by searching for their GitHub username, syncing your GitHub Team, or importing your GitHub Following.

![team sync gif](../../static/gif/team-sync.gif)

## Using Your Contributor Insight Page

Once you have created your page, you will be redirected to your Contributor Insight Page. Here, you will see a dashboard with an overview of the contributors.

There are three tabs that provide you with more information on these repositories:

### Overview

The Overview tab gives you a high-level view of the contributors in your Contributor Insight Page, including the total number of commits in the last 30 days and the types of contributors: Active, New, and Alumni.

### Activity

The Activity tab gives you a graph view with more detailed information on each contributor, including the type of activity, repositories they've contributed to, and how they compare to each other.

You can filter your Contributor Insight Page by All Contributors, Active Contributors, New Contributors, and Alumni Contributors.

![list graph](../../static/img/list-graph.png)

### Contributors

The Contributors tab gives you the list of the contributors and includes information like activity level, last repository contributed to, the date of their last contribution, time zone, programming languages used, and number of contributions.

To learn more about these features, see [Understanding Contributor Insights Data](understanding-contrib-insights.md).

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

#### Highlighting Issues

1. **Focus on the problem solved**: Begin by briefly describing the problem or challenge the issue addresses. This sets the context for why it was important.
2. **Acknowledge contributor(s)**: Mention the contributor(s) who reported or worked on the issue, recognizing their effort.
3. **Impact statement**: Explain how resolving this issue benefits the project, such as improving functionality, user experience, or security.

#### Highlighting PRs

1. **Summarize the changes**: Start with a clear summary of what the PR achieves. This could be a new feature, bug fix, or enhancement.
2. **Credit the contributors**: Acknowledge everyone who contributed to the PR, including reviewers.
3. **Highlight the value**: Explain the value of these changes to the project or its users. For instance, how it improves performance, adds a requested feature, or simplifies the codebase.

#### Highlighting Dev.to Blog Posts

1. **Capture the essence**: Begin with an interesting blog post summary, capturing the main theme or message.
2. **Discuss the relevance**: Explain why this blog post is important for your open source project or community. Is it about a major update, a community event, or sharing best practices?
3. **Engage with a call-to-action**: Encourage readers to engage with the post, whether by reading, commenting, or sharing their thoughts on the topic.
