---
title: Setting Up Your First GitHub Action
tags: []
authors: BekahHW
slug: setting-up-your-first-github-action-for-specific-contributions
description: "Discover how to set up a GitHub Action that automatically posts a personalized message to contributors. "
---


A couple of months ago, we launched the [Intro to Open Source Course](https://intro.opensauced.pizza/#/), which connects to another repository called [guestbook](https://github.com/open-sauced/guestbook). When the person taking the course gets to chapter five, they put their new-found knowledge to work and create a pull request on the guestbook.

<!-- truncate -->


For many contributors, this is their first contribution to open source. The problem is that the course isn’t over. There are two more chapters of information in the course, but it feels like the course is over because the contributors have created a PR and navigated away from the initial repo. In an effort to bring them back to the course, I created a GitHub action to remind them that there’s more to learn. Here’s a step-by-step guide to how to create a GitHub action.

## Overview
Below are the steps in order. We’ll go in-depth later in the blog post.

1. Create a file in your repository for a GitHub Action.
2. Name the action. This should be a name that other developers can use to recognize what the action is being used for.
3. Create an event trigger. What happens to trigger when the Action runs?
4. Create jobs. Think of jobs like a workflow: organizing, structuring, and managing tasks in the workflow that are run.
5. Create steps. These are a sequence of tasks that will be executed. This includes a name, if statements, and a run command.

Now, if that seems a little confusing, stick with me. We’ll go into practical application below to help you better understand and apply your knowledge.

## Creating a GitHub Action for Course Contributors
To create an effective action, I needed to guide the contributors who were taking the course back to the course. There needed to be some way to identify these contributors. Now, my solution isn’t perfect, but it’s good enough. At first, I was going to identify first-time contributors to the repository, but then I thought that contributors submitting documentation updates or other PRs that aren’t part of the coursework, would get this notification. 

Since the focus of this part of the chapter was on having contributors add themselves to the repository, finding an indication of those contributors seemed like a better fit. I updated our [README](https://github.com/open-sauced/guestbook) to specifically ask contributors to put this in their PR:


```
Go to your forked repository on GitHub and create a pull request with the title feat: add {GitHub username} as a contributor.
```
This will be our `event trigger`. Once the action is created, if a PR says “as a contributor,” the action will run and leave them a comment directing them back to the course.

Now we’re ready to set up our action.

### Pre-steps for your GitHub Action 
1. In the root of your repository, create a `.github` file if you don’t already have one. (If you’re looking at how our repository works, you’ll notice we have a CODEOWNERS file. If you’re interested in learning more about what that does, check out [this post](https://dev.to/opensauced/supercharge-your-repository-with-code-owners-4clg)t by my teammate.)
2. Within that folder, create a `workflows` folder.
3. In the `workflows` folder, create the file for the action with a `.yml` at the end. In our case, we’re calling it `intro_course_contributor.yml`.

Now, we’re going to get into the main part of the action and break it down piece by piece.

### Creating your GitHub Action
1. First, start with a name for your action. Here’s what ours looks like:

     `name: Intro Course Contributor Action`

2. Create the event trigger. For us, we want this to be run on pull requests. This is what that will look like:
```
	on:
	   pull_request:
    		types: [opened]
```
3. Now, we’ll create jobs. This includes a unique job_id, a designation of the type of machine to run the job on, and then moves on to the steps.

```
jobs:
  first_time_contributor:
    runs-on: ubuntu-latest
    steps:
```
4. The steps are the actions we want to happen. So, if the contributor posts a PR with “as a contributor” in the title, then we want to respond with a comment that directs them back to the course. Here’s how we get that done:


```
 - name: Post comment for course contributors
      if: contains(github.event.pull_request.title, 'as a contributor')
      run: |
        PR_COMMENT="Congratulations on completing Chapter 5 of the Intro to OSS Course with your contribution to this repository! You're almost to the end of the course. Create a [highlight](https://app.opensauced.pizza/feed) of your contribution to our guestbook using the instructions in [chapter 6](https://github.com/open-sauced/intro/blob/main/06-the-secret-sauce.md) and share it with us!"
        curl -s -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" -X POST -d "{\"body\":\"$PR_COMMENT\"}" "https://api.github.com/repos/${{ github.repository }}/issues/${{ github.event.pull_request.number }}/comments"
```

5. At this point, we’ll commit and push the changes:

```bash
 git add .
 git commit -am “Add GitHub Action for course 
 contributors”
 git push
```

After pushing the changes, the GitHub Action will be available in your repository and will automatically run based on the conditions in the workflow.

For this example, every time a new pull request is opened in the `open-sauced/guestbook repository`, the GitHub Action will check if the PR title contains "as a contributor". If the conditions are met, the desired comment will be posted on the PR.

### Understanding GitHub Actions
Maybe you took a look at the last step and wondered what some of the information you were looking at meant. This section provides a closer look at that. 

Let’s break this down:
```
 curl -s -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" -X POST -d "{\"body\":\"$PR_COMMENT\"}" "https://api.github.com/repos/${{ github.repository }}/issues/${{ github.event.pull_request.number }}/comments"
```

- **curl**: A command-line tool used for making HTTP requests.

- **-s**: A flag that makes curl operate in "silent" mode. That means curl won't show progress or error messages.

– **`H "Authorization: token ${{ secrets.GITHUB_TOKEN }}"`**: This part sets an HTTP header for the request. "Authorization: token ..." is the actual header being set. It's used for authentication. `${{ secrets.GITHUB_TOKEN }}` is a placeholder for the GitHub token which authenticates the API request. In GitHub Actions, secrets.GITHUB_TOKEN is an automatically provided secret token that represents the authentication for the running action.

> **GITHUB_TOKENS**
GitHub provides a GITHUB_TOKEN for every repository, which is used to authenticate in  GitHub Actions. It has permissions to perform common tasks, including reading PRs and posting comments. There's no need to create or provide the token manually. GitHub does it automatically for each run of your Actions.


- **-X POST**: The HTTP method to use. In this case, it's POST, which is used for sending data to create or update resources.

- **`-d "{\"body\":\"$PR_COMMENT\"}"`**: The data being sent with the POST request. `-d` specifies the data to send. 
     -`"{\"body\":\"$PR_COMMENT\"}"` is a JSON payload where "body" is a key that represents the content of the comment. `$PR_COMMENT` is a variable that holds the message you want to post as the comment. In this case, our message points contributors back to the course.

- **`"https://api.github.com/repos/${{ github.repository }}/issues/${{ github.event.pull_request.number }}/comments"`**: This is the URL to which the request is sent. It's the endpoint of the GitHub API to post comments. `${{ github.repository }}` is a placeholder that represents the current repository in the format "owner/repo". `${{ github.event.pull_request.number }}` is another placeholder for the number of the pull request on which the comment is being posted.

Now that it’s implemented, you can see it in action on our project. Once the contributor creates a PR with “as a contributor,” they’ll get a message that looks like this:


![GitHub bot with message to course contributor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ok5mz7agn4hjoyxni449.png)


If you have any questions or if you have a cool GitHub Action you want to share, drop them below. 
