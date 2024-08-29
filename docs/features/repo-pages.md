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
- "lottery factor"
- "Contributor Confidence"
- "Bus factor"
---

Repository Pages allow you to view specific information about a repository hosted on GitHub through a detailed visual and analytical representation of the project.

These pages are designed to help you gain insights into various aspects of project activity, health, and community engagement.

## Accessing a Repository Page

There are a couple of ways to access a repository page:

1. **From Repository Insights Pages**: If you're already on the Repository Insights Page, you can click on the repository name to view the repository page.
2. **From the search bar**: You can search for a repository by entering the repository name in the search bar. Once you find the repository you're looking for, click on the repository name to view the repository page.
3. **Directly from the URL**: You can also access a repository page directly by entering the URL in your web browser: 

    ```text
    https://app.opensauced.pizza/s/{org}/{repo}
    ```

    Replace `{org}` with the name of the organization that owns the repository you want to view. Replace `{repo}` with the name of the specific repository.

    For example, to view the `next.js` repository created by the `Vercel` organization, you would use the following URL:

    [https://app.opensauced.pizza/s/vercel/next.js](https://app.opensauced.pizza/s/vercel/next.js)

:::tip
If you want to keep track of a repository, use the "Add to WorkSpace" button on the Repo page to add it to your [Workspace](https://opensauced.pizza/docs/features/workspaces/).
:::

## Understanding the Repository Page - Overview Dashboard

The charts on our repository pages offer a visual representation of key project metrics:

- **Contributors Overview**: Our bar chart shows contributions by internal, new, and recurring contributors, exibiting the distribution of contributions and the project's ability to attract new contributors.
- **[Lottery Factor](../welcome/glossary.md#lottery-factor)**: This unique metric highlights the dependency on key contributors. A project is considered vulnerable if 2 or fewer contributors account for 50% or more of the project's contributions. This indicates a potential risk if one of these contributors leaves the project.
- **[YOLO Coders](../welcome/glossary.md#yolo-coders)**: This metric identifies contributors who push changes directly to the default branch without creating a pull request or seeking community feedback. 
- **Contributor Confidence**: This metric predicts the likelihood that users who star or fork a repository will return to make contributions. A higher confidence score indicates a greater probability of these users actively engaging with the repository.
- **OSSF Scorecard**: A standardized metric developed by the Open Source Security Foundation to evaluate the security practices of open source projects based on a set of security criteria. These criteria cover various aspects of project maintenance and security practices. The resulting score provides a quick overview of the project's adherence to security best practices.
- **Issue Resolution Trends**: Our line graphs display the number of issues opened versus those closed within specified periods, offering insights into the effectiveness of problem resolution and how issue volume changes over time.
- **Pull Request Dynamics**: Analyze pull request activity by the numbers of pull requests opened, closed, and merged. This provides an overview of collaboration efficiency and code review processes.
- **Stars and Forks Over Time**: The number of stars and forks the project receives over time, illustrating the project's growth in popularity and its spread within the developer community.

You can use the time range filter to view the number of stars and forks over different periods, such as the last 7 days, month, or the last year.


### Insights into Contributor Confidence

<details>
<summary>Contributor Confidence is a new metric that helps us understand the likelihood of someone who interacts with a repository (by starring or forking it) coming back to actually contribute code or other content.</summary>

#### How it Works

We calculate Contributor Confidence as a percentage over a specific time period (usually 30 days). Here’s what we look at:

	- **Starred Repositories**: We check if people who starred a repository have contributed to other repositories during the same timeframe. If they have, we see if they also contributed to the starred repository itself.
	- **Forked Repositories**: Similar to starred repositories, we check if people who forked a repository have contributed elsewhere recently. We then see if they made a pull request or other contribution to the forked repository.

#### Weighting the Score

	- **Forks**: Forking a repository generally indicates a stronger intent to contribute compared to just starring it. So forks tend to have a slightly higher weighting in the confidence score.
	- **Direct Contributions**: If someone actually makes a contribution to the repository in question, their confidence score for that specific repository becomes 100% (the highest weight).

#### Why is it Useful?

Understanding Contributor Confidence can help you gauge the health of a repository and its community. Here are a few ways you can interpret the score:

	- A **high Contributor Confidence score (e.g., 37-50%)** suggests a welcoming and active repository where your contributions are likely to be seen and valued. 
    - A **low score (e.g., 1-3%)** might indicate it’s harder for outside contributors to contribute. 
    - A **score in the range of 30-50%** often indicates a healthy and active project. 
    - An **exceptionally high score (above 40%)** could have different interpretations depending on the project. For very popular repositories, it might still reflect a strong community. For smaller projects, it could suggest a lower barrier to entry that might lead to a high volume of low-quality contributions or unfinished work.

For **Owners/Maintainers**, Contributor Confidence helps understand recent stars and forks in the context of contributors. A higher score suggests more people who have recently contributed elsewhere or within the repository itself, which can be a positive indicator of the overall health of your repository.

</details>

### Insights into the OSSF Scorecard

The Scorecard serves two primary purposes:

- To help open source maintainers improve their security best practices
- To assist open source consumers in assessing the safety of their dependencies

You can find out more about how the OSSF Scorecard works and how to interpret the results on the [OSSF Scorecard website](https://scorecard.dev/#what-is-openssf-scorecard).

## Contributor Dashboard

The Contributor Dashboard offers a comprehensive view of all contributors, showcasing the frequency and size of each person’s contributions. It also includes each active contributors [OSCR](../welcome/glossary.md#oscr).


### The OSCR

<details>
  <summary>The Open Source Contributor Rating (OSCR) is a metric designed to evaluate the quality, confidence, and sway of a contributor's work in open source projects.</summary>

#### How it works:

The OSCR is calculated using a combination of factors, including:

  - **Contributor Confidence**: Assesses how likely a contributor is to continue engaging with projects.
  - **Contributor Quality**: Evaluates the overall quality of contributions.
  - **Sway**: Measures the contributor's ability to engage with and influence the community through conversations.

##### How it can be used:

- **For maintainers**: Identify key contributors and potential collaborators.
- **For contributors**: Gauge your impact and areas for improvement as well as track your progress in open source projects.
- **For collaborators**: Discover talented developers to collaborate with based on their open source contributions.
- **For companies**: Identify impactful contributors to sponsor or engage with based on their open source contributions.

</details>



Currently, only publicly available repositories on GitHub can be viewed through repository pages.

## Create a Workspace from SBOM

This feature allows users to create a [workspace](https://opensauced.pizza/docs/features/workspaces/) based on a Software Bill of Materials (SBOM) for a given repository. An SBOM, or **Software Bill of Materials**, is a detailed list of all the components, libraries, and dependencies that make up a software application. It’s like an inventory or a “recipe” that outlines the different parts that have been used to create the software, and is important for transparency, security, compliance, and managing supply chain risks.

### How to Use the Workspace from SBOM Feature

1. Navigate to a repository page on OpenSauced.
2. Look for the "Workspace from SBOM" button.
3. Click the button to be taken to a page for creating a new workspace.
4. The system will automatically load the SBOM for the repository, populating the tracked repositories with all relevant packages.
5. The workspace name will default to "SBOM for [repository name]", but you can modify it if desired.
6. Create the workspace to start exploring and investigating all the dependencies listed in the SBOM.

:::note
Currently, this feature is only available for projects with a package.json file. We are working on expanding support for more project types in the future.
:::

### Benefits of Using SBOM Workspaces

<details>
<summary>
SBOM Workspaces offer significant benefits for managing and securing software projects by providing a detailed inventory of all software components. By leveraging SBOM workspaces, organizations can enhance their software supply chain security and ensure compliance with industry standards. 
</summary>

Here are the key advantages of using SBOM workspaces:

1. **Dependency Visibility**: Gain a clear overview of all packages and dependencies that make up a project.
2. **Security Analysis**: Easily identify and investigate potential vulnerabilities in your software supply chain.
3. **Compliance**: Assist in meeting regulatory requirements and industry standards that mandate SBOM usage.
4. **Risk Management**: Better understand and mitigate risks associated with third-party components in your software.
5. **Collaboration**: Share SBOM information within your team or organization to improve overall software security practices.

### Why Track SBOMs?

Tracking SBOMs through OpenSauced workspaces offers several advantages:

1. **Transparency**: Gain insights into your open-source usage and dependencies.
2. **Early Detection**: Identify vulnerabilities sooner.
3. **License Compliance**: Easily review and license information for all dependencies.
4. **Audit Support**: Facilitate software audits and compliance checks with readily available SBOM data.
5. **Supply Chain Security**: Enhance your overall software supply chain security by maintaining up-to-date information on all components.

By leveraging the Workspace from SBOM feature, you can streamline your software development process, enhance security, and maintain better control over your project's dependencies.

For a comprehensive understanding of SBOMs and their importance in software security and supply chain risk management, please refer to the following authoritative sources:
- [National Institute of Standards and Technology (NIST)](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-security-supply-chains-software-1)
- [Cybersecurity and Infrastructure Security Agency (CISA)](https://www.cisa.gov/sbom)
</details>