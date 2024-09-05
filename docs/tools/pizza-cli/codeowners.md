---
id: codeowners
title: "Pizza CLI Codeowners Command"
sidebar_label: "Codeowners"
keywords: 
- "codeowners" 
- "codeowners automation" 
- "CLI codeowners" 
---

The `codeowners` command in the Pizza CLI is designed to automatically generate and manage CODEOWNERS files for your GitHub repositories. CODEOWNERS files are used to define individuals or teams responsible for code in a repository, which is useful for code review processes and maintaining code quality.

Key benefits of using the codeowners command:

- Automatically determines codeownership based on contribution history
- Simplifies the process of keeping CODEOWNERS files up-to-date
- Ensures that the right people are notified for code reviews
- Helps in identifying subject matter experts for different parts of the codebase
- Facilitates better project management and knowledge distribution

To generate a CODEOWNERS file, you need to [install the Pizza CLI](pizza-cli.md) and run the `pizza generate codeowners` command in your terminal. However, before running the command, it's important to set up proper attribution for committers in a `.sauced.yaml` file.

## Creating a `.sauced.yaml` file

The `.sauced.yaml` file is necessary for mapping commit email addresses to GitHub usernames. However, it's important to be selective about who you include in this file. Not every contributor should be a codeowner.

<details>
<summary>Selecting appropriate codeowners</summary>

When deciding who to include in your `.sauced.yaml` file, consider the following:

1. **Team members**: Include active members of your organization who are responsible for maintaining the codebase.

2. **Expertise**: Prioritize individuals with deep knowledge of specific areas of the codebase.

3. **GitHub team members**: Include members of the GitHub teams associated with the repository.

4. **Long-term contributors**: Consider long-standing contributors who have demonstrated commitment to the project.

:::tip
Be cautious about including external contributors. Only include those who have been vetted and are trusted to review and approve changes.
:::

Codeowners will be automatically requested for review on pull requests that modify code they own.
</details>

### Tips for identifying potential codeowners

1. Review GitHub team memberships:
   ```bash
   gh api /orgs/{org}/teams/{team}/members --jq '.[].login'
   ```
   Replace `{org}` with your organization name and `{team}` with the team name.

3. Review recent active contributors:
   ```bash
   git log --since='6 months ago' --pretty=format:'%an' | sort | uniq -c | sort -nr
   ```
   This lists active contributors in the last 6 months.

### Mapping GitHub usernames to email addresses

Mapping GitHub usernames to their corresponding email addresses is necessary for creating an accurate `.sauced.yaml` file. For contributors to your repository, you can use git log to find their email addresses:

   ```bash
   git log --author="GitHub_Username" --format='%ae' | sort -u
   ```

Replace `GitHub_Username` with the actual GitHub username. This command will show all email addresses used by that user in their commits to your repository.

Alternatively, you can run the following command to get a list of your contributors' email addresses:

   ```bash
   git log --format='%ae' | sort -u
   ```

## Creating the .sauced.yaml file

After identifying appropriate codeowners, create the `.sauced.yaml` file in your repository's root directory with the following structure:

   ```yaml
   attribution:
     githubUsername1:
       - user1@email.com
       - user1@company.com
     githubUsername2:
       - user2@email.com
   ```

Only include the GitHub usernames and email addresses of the individuals you've identified as appropriate codeowners based on the considerations mentioned above.

## Pizza CLI Codeowners Command

To generate the CODEOWNERS file, you need to provide the path to your repository as an argument:

```bash
pizza generate codeowners /path/to/your/repo
```

If you're already in your repository's root directory, you can use:

```bash
pizza generate codeowners .
```
:::info
- Ensure you have the necessary permissions to read the repository and write the CODEOWNERS file.
- The command requires a `.sauced.yaml` file in the repository root for accurate attribution (as described in the previous section).
- If you encounter any errors, double-check that you've provided the correct path to your repository.
:::

The codeowners command will analyze your repository's commit history and generate a CODEOWNERS file based on contributors' activity in the last 90 days.

It is useful to keep this file up-to-date with the most recent codeowners. To automate this process, you can use the `pizza-action`. To learn more about this GitHub action, go to the [pizza-action docs](pizza-action.md) or visit [the repository](https://github.com/open-sauced/pizza-action).