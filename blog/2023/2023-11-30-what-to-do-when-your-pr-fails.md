---
title: What to do when your PR fails
tags: []
authors: BekahHW
slug: what-to-do-when-your-pr-fails
description: "So your pull request has failed. What do you do next? This blog post gives insight into steps you can take to get your PR passing."
---

Yesterday, I decided to make some "quick" changes to the OpenSauced docs site. Now, I know that "quick changes" is essentially a bad word in tech. Anytime you say it, it will indeed not be quick. I wrote up a [quick issue](https://github.com/open-sauced/docs/issues/216) that described reorganizing a couple of things and adding a quick intro page. I made the changes, wrote the page, pushed my changes, and made the Pull Request (PR), only to see that I **failed.** Ugh. It was quick, but it wasn't right. Not really having the time to dig into it, I left my PR open and determined to get back to it the next day. Understanding why a project is failing may look different depending on how it is set up. For us, we're going to look at implementation errors, compliance issues, check the deploy log.

<!-- truncate -->


## Checking Locally

The first step to make sure your PR hasn't broken anything is to run the project locally and visually check the pages of the changes you've made. Initially, I had forgotten to include a set of `---` at the top of my markdown file. This is necessary to separate the frontmatter that gives directions to how to display the documentation from the words we want displayed on the page. 

This is what the file **should** look like at the top.
```
---
id: opensauced-intro
title: 'What is OpenSauced?'
sidebar_label: 'What is OpenSauced?'
keywords:
  - OpenSauced
---

# OpenSauced: Your Open Source Partner

OpenSauced is a platform dedicated to nurturing and expanding your open source community, while recognizing every contributor's impact.

````

Notice that the `sidebar_label` is 'What is OpenSauced?' Now, let's take a look at how this rendered when I was missing the `---`:


![broken display of page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m3b40zlqjx8pqaq7cbb2.png)

There are two things that should clue us into the mistake I made here:

1. The sidebar doesn't use the title we designated.
2. We see all the frontmatter at the top, and we shouldn't.

I added the `---` back in and it fixed the first problem.

But even though we ran things locally and double-checked our work visually, made the updates, and pushed them live, we're still seeing errors. 

On to the next check: Compliance.

## Compliance

At OpenSauced, we make sure that each PR follows compliance checks run by a GitHub Action. This [compliance action](https://github.com/open-sauced/hot/blob/beta/.github/workflows/compliance.yml) helps us to maintain the quality and organization of contributions to the repository by ensuring that pull requests follow semantic naming conventions and adhere to contribution guidelines. 

For example, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), which requires a specific naming convention. This means that each PR title should be preceded by a type and colon. For example, `feat: Add User Login`. If you don't follow the conventions, this part of the PR will fail and will be indicated. 


![Image of a failed conventional commit test](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i74mrmgdan7darwrw9vj.png)

Once I made sure that my compliance checks had passed, I moved on to the Netlify deploy logs.

## Netlify Deploy Logs

Even from the list view, we can tell that something isn't working with this PR. 

![failing PR](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g8ynr5iuiizj3g960yh3.png)

When I scroll to the bottom of my PR, I can see more information about where my PR has failed. In this case, we can see the red early. 

![gif of the scroll](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bl4ue1swhjbr1zvg7438.png)

From there, we can click the `details` for more information.

![screen after details](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tqv2w8acizi1e2zx52x.png)

Now, let's click the link in "Please check the logs." 

Next, we'll see this screen:

![Deploy logs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lk211saaqb0p619114mk.png)

We're almost to the information we need. We're failing at the building stage, so open that tab to see the error messages.

![Error messages](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/asxqt1ouk43q6m5qf6c1.png)

Finally! Now, we just need to spend a little time looking through the messages. I'm going to give you a second to look at the error message and see if you can figure it out. 

🤔


🤔


🤔


🤔


🤔

If you said that the links are broken, then you're right! When I reorganized the documentation, I forgot that I also needed to update the links to the new sections. A couple of changes to this, and we're ready to go.

Some of these are things that you might already know, but maybe you've never gone through the process of checking deploy logs or aren't sure how to approach fixing a broken PR. Here's the thing, it used to make me super uncomfortable to see all that red and to feel like I did something wrong. I made some mistakes here, but nothing that isn't fixable. And getting used to the process of not getting it right the first time is an important skill in tech. You refine your process and you get more efficient. So, next time you see that red :x:, don't panic. Think of it as an opportunity to learn and a reminder for what you can do next time.




