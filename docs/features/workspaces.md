---
id: workspaces
title: "Share, Collaborate, and Track with Workspaces"
sidebar_label: "Workspaces"
keywords: 
- "contributors" 
- "Monitor Contributors" 
- "Track open source projects" 
- "open source teams" 
- "open source companies" 
- "open source contributors" 
- "open source maintainers" 
---

In the OpenSauced app, your work unfolds within a Workspace: a virtual environment for managing information—whether for individual productivity, team collaboration, or company-wide operations. Workspaces serve as a centralized hub for sharing, collaborating on, and **tracking multiple repositories and organizations and their contributors in one place**. This feature is designed to streamline your open source involvement, making it more efficient and interconnected.

## Understanding Workspaces

You can navigate your Workspaces from the sidebar. Each Workspace has its own dashboard, which includes the repositories you're tracking in the Workspace.

![Workspace Access](../../static/img/workspace-access.png)

By default, all Workspaces are public. This means that anyone with the link to your Workspace can view it, including all of your Insight Pages in the Workspace. If you want to make your Workspace private, you can upgrade your account to a PRO plan.

### The Sidebar

The expandable sidebar includes:

- Options for creating and viewing Workspaces.
- Access to your Contributor and Repository Insights pages.
- Links to support.

![Sidebar](../../static/img/workspace-sidebar.png)

:::info

We recently had a naming change. The [Contributors Insights](contributor-insights.md) feature was previously called Lists, and the [Repositories Insights](./repo-insights.md) feature was previously called Insights.

:::

### Your Workspaces

In your Workspace dashboards, you can create, view, and manage your Workspaces.

#### Repositories Dashboard

![Workspaces](../../static/img/workspace.png)

Within the repositories dashboard, you can view the following metrics, which are over a period of thirty days by default:

- **Pull Requests**: This includes the total opened and merged pull requests for the repositories included in your Workspace, as well as the velocity of pull requests being merged.
- **Issues**: This includes the total opened and closed issues for the repositories included in your Workspace, as well as the velocity of issues being closed.
- **Engagement**: This includes the total stars, forks, and activity ratio for the repositories included in your Workspace.

#### Activity Dashboard

The Activity Dashboard provides a centralized view of recent activity across repositories, including detailed tables for Pull Requests (PRs) and Issues. These tables offer insights into ongoing contributions, bug fixes, feature requests, and more. 

##### Pull Requests Table

The Pull Requests table lists recent PRs across the repositories in your Workspace, providing details to track progress and contributions. It includes information on the current status of the PR, the number of files changed, the number of additions and deletions, and timestamps for updates, creation, closure, and merging.

##### Issues Table

The Issues table displays recent issues from the repositories in your Workspace, helping you identify and track bugs, feature requests, and ongoing discussions. It gives you insight into the current status of the issue, the number of reactions, and timestamps for updates, creation, and closure.

## How to Create or Access a Workspace

To create a Workspace, start by accessing the **Workspace switcher** in the sidebar. From there, you can create a new Workspace or view an existing one.

![Workspace switcher](../../static/img/workspace-switcher.png)

<br/>

:::note

Whenever you select "Home", you'll be taken to the last Workspace you opened.

:::

### How to Add Repositories to a Workspace

If you're creating a new Workspace, you'll have the option to add repositories at the time of creation.

Start by creating a Workspace name, then click "Add repositories." You'll have three options for adding repositories:

1. **Search for Repositories**: Use our search tool by adding an organization name, followed by the repository name, and add them to your Workspace.
2. **Import a GitHub Organization**: Connect to your GitHub organizations to create a Workspace from an organization. (If you're having trouble with this, see the "[Sync Your GitHub Team](../welcome/faqs.md#sync-your-github-team)" section in our FAQs.)
3. **Import Repositories**: Paste a list of repositories to add to your Workspace.

Once your repositories are added, you'll be able to see them in your repository dashboard. You can also edit your Workspace to add or remove repositories anytime.

### Changing Workspaces

Anything you create in a Workspace is specific to that Workspace. When you switch Workspaces, you'll see the Repository and Contributor Insights specific to that Workspace.

## How to Share a Workspace

You can share your Workspace with others by copying the URL and sending it to them. If your Workspace is private (a PRO plan feature), only those with access to the Workspace will be able to view it.

## Team Workspaces

Team Workspaces are part of the PRO plan and are designed to help teams collaborate on and understand open source projects. Team Workspaces are public by default. However, you can switch it to private in your settings so only team members can view the Workspace.

By upgrading to a team Workspace, you'll have unlimited Contributor and Repository Insights, as well as the ability to toggle between private and public visibility. 

:::info

The visibility of your Insights Pages is determined by the visibility of the Workspace. If your Workspace is public, your insights will be public. If your Workspace is private, your insights will be private.

:::

You can add someone to your Workspace by clicking on the "Edit" button located at the top right of the Workspace dashboard and entering the username of the Workspace member you would like to add.

![Add People](../../static/img/add-to-workspace.png)

Once you add a member to a Workspace, they will be able to view the Workspace and its contents. You will also be able to edit their permissions for the Workspace, including owner, editor, or viewer permissions. This Workspace will now appear in their Workspace switcher.
