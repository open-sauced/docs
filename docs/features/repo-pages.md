---
id: repo-pages
title: "Check out Repository Activity"
sidebar_label: "Repository Pages"
keywords: 
- "repository pages" 
- "Repositories" 
- "Open Source" 
- "Open Source Repositories" 
- "Showcase Repositories" 
- "Repository forks" 
- "Repository stars" 
---

Repository Pages allow you to view specific information about a repository hosted on GitHub through a detailed visual and analytical representation of the project.

These pages are designed to help you gain insights into various aspects of project activity, health, and community engagement.

## Accessing a Repository Page

There are a couple of ways to access a repository page:

1. **From the Repository Insights Page**: If you're already on the Repository Insights Page, you can click on the repository name to view the repository page.
2. **From the search bar**: You can search for a repository by entering the repository name in the search bar. Once you find the repository you're looking for, click on the repository name to view the repository page.
3. **Directly from the URL**: You can also access a repository page directly by entering the URL in your web browser: 

    ```text
    https://app.opensauced.pizza/s/{org}/{repo}
    ```

    Replace `{org}` with the name of the organization that owns the repository you want to view. Replace `{repo}` with the name of the specific repository.

    For example, to view the `next.js` repository created by the `Vercel` organization, you would use the following URL:

    [https://app.opensauced.pizza/s/vercel/next.js](https://app.opensauced.pizza/s/vercel/next.js)

    Here's what that will look like:

    [![next.js repository page](../../static/img/vercel-repo-page.png)](https://app.opensauced.pizza/s/vercel/next.js) 

## Understanding the Repository Page

### Overview Dashboard

The charts on our repository pages offer a visual representation of several key metrics:

- **Issue Resolution Trends**: Our line graphs display the number of issues opened versus those closed within specified periods, offering insights into the effectiveness of problem resolution and how issue volume changes over time.
- **Pull Request Dynamics**: Analyze pull request activity by the numbers of pull requests opened, closed, and merged. This provides an overview of collaboration efficiency and code review processes.
- **Stars and Forks Over Time**: The number of stars and forks the project receives over time, illustrating the project's growth in popularity and its spread within the developer community.
- **[Lottery Factor](../welcome/glossary.md#lottery-factor)**: This unique metric highlights the dependency on key contributors. A project is considered vulnerable if 2 or fewer contributors account for 50% or more of the project's contributions. This indicates a potential risk if one of these contributors leaves the project.
- **Contributor Confidence**: This metric predicts the likelihood that users who star or fork a repository will return to make contributions. A higher confidence score indicates a greater probability of these users actively engaging with the repository.

You can use the time range filter to view the number of stars and forks over different periods, such as the last 7 days, month, or the last year.

#### Insights into Contributor Confidence

Contributor Confidence is a new metric that helps us understand the likelihood of someone who interacts with a repository (by starring or forking it) coming back to actually contribute code or other content.

##### How it Works

We calculate Contributor Confidence as a percentage over a specific time period (usually 30 days). Here’s what we look at:

	- **Starred Repositories**: We check if people who starred a repository have contributed to other repositories during the same timeframe. If they have, we see if they also contributed to the starred repository itself.
	- **Forked Repositories**: Similar to starred repositories, we check if people who forked a repository have contributed elsewhere recently. We then see if they made a pull request or other contribution to the forked repository.

##### Weighting the Score

	- **Forks**: Forking a repository generally indicates a stronger intent to contribute compared to just starring it. So forks tend to have a slightly higher weighting in the confidence score.
	- **Direct Contributions**: If someone actually makes a contribution to the repository in question, their confidence score for that specific repository becomes 100% (the highest weight).

##### Why is it Useful?

Understanding Contributor Confidence can help you gauge the health of a repository and its community. Here are a few ways you can interpret the score:

	- A **high Contributor Confidence score (e.g., 37-50%)** suggests a welcoming and active repository where your contributions are likely to be seen and valued. 
    - A **low score (e.g., 1-3%)** might indicate it’s harder for outside contributors to contribute. 
    - A **score in the range of 30-50%** often indicates a healthy and active project. 
    - An **exceptionally high score (above 40%)** could have different interpretations depending on the project. For very popular repositories, it might still reflect a strong community. For smaller projects, it could suggest a lower barrier to entry that might lead to a high volume of low-quality contributions or unfinished work.

For **Owners/Maintainers**, Contributor Confidence helps understand recent stars and forks in the context of contributors. A higher score suggests more people who have recently contributed elsewhere or within the repository itself, which can be a positive indicator of the overall health of your repository.

### Contributor Dashboard

The Contributor Dashboard offers a comprehensive view of all contributors, showcasing the frequency and size of each person’s contributions. 

Currently, only publicly available repositories on GitHub can be viewed through repository pages.

Repository pages provide a way to explore and learn about open source projects on GitHub. While you cannot create or edit them directly on Open Sauced Pizza yet, you can add them to your [Repository Insight pages](https://docs.opensauced.pizza/features/repo-insights/). 