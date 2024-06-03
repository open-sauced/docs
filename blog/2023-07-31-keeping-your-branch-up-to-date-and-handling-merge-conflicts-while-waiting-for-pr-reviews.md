---
title: Keeping Your Branch Up to Date and Handling Merge Conflicts While Waiting for PR Reviews
tags: []
authors: BekahHW
slug: keeping-your-branch-up-to-date-and-handling-merge-conflicts-while-waiting-for-pr-reviews
description: " Learn how to keep your branch up to date and to handle Git merge conflicts in this step-by-step guide. "
---

I’ve been running an Intro to Open Source workshop for a couple of months now, and one of the biggest challenges for participants often dealing with is keeping their branch up to date and managing merge conflicts. Listen, if you see that “merge conflicts” message and you panic, you’re not alone. I may or may not have used the strategy of deleting my entire local repository, forking, recloning, and redoing my code to avoid navigating merge conflicts more than once. Luckily, there are much better ways of dealing with updating your branch and merge conflicts than that. If you’ve ever felt that panic and wanted to burn it all down, take a deep breath and read the post below that walks you through the process of keeping your branch up to date while waiting for reviews. Keeping your branch in sync with the main repository helps to avoid conflicts and create a smooth(er) merging process. 

<!-- truncate -->

If you want to follow the steps below, I’ll be focusing on the scenario where you've forked and cloned the [guestbook repository](https://github.com/open-sauced/guestbook) and are adding yourself using a CLI tool, but this is generally applicable to staying up to date.

## Identifying Merge Conflicts
![This is fine burning gif](https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif)
Before making any updates to your branch, it's important to check for merge conflicts. Merge conflicts occur when changes in the branch of the repository that you're asking to merge into conflict with your local changes.
When you create a pull request to merge your changes into a specific branch of the repository, Git will check for conflicts between your changes and the latest changes in that specific branch. If there are conflicting changes, Git will raise a merge conflict, indicating that manual intervention is required to resolve the discrepancies between the two sets of changes.

To identify merge conflicts, follow these steps:

- Ensure you are on your feature branch–the branch you’re trying to merge your changes into:
```
git checkout <your-feature-branch>
```

- Fetch the latest changes from the main repository:
```
git fetch upstream
```

- Compare your branch with the main repository's main branch:
```
git diff <your-feature-branch> upstream/main
```
Any conflicting lines will be highlighted in the output, indicating potential merge conflicts.

For our `guestbook` repository, if you’ve created a PR, you can scroll to the bottom of the PR and see whether or not you have conflicts. If you do, it will look like this if you have conflicts:

![merge conflicts with the all-contributors file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z4ivmzbnnhv5aocfn2lw.png)


## Keeping Your Branch Updated
To keep your branch up to date with the latest changes from the main repository, there are a couple of different approaches. I think GitHub has a really user friendly way to keep it updated.

When you look at your fork, it will let you know if you’re behind. If you are, you can choose to sync your fork with the branch you’ve forked off of like this:


![syncing a fork on GitHub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d1nwr5qki5g4kxmq6c07.gif)

If you want to use git, you can do it like this:
- Stash or commit your local changes (if any):
```
git stash save "Your descriptive stash message"  # Or commit your changes
```

- Pull the latest changes from the main repository's master branch:
```
git pull upstream <branch you’ve forked off of>
```

- Apply your stashed changes (if any) back to your branch:
```
git stash apply
```

> If you want to learn more about Git commands, check out the [previous post](https://dev.to/opensauced/the-power-of-git-a-guide-to-collaborative-version-control-dl6).


### Resolving Merge Conflicts


After pulling the latest changes, Git may detect conflicts between the changes you’ve made and the main repository's changes. I want to emphasize that if you see merge conflicts, don’t feel like you’ve done something wrong. There’s a roadblock, and now you just need to figure out how to unblock it. For example, you might see something like this:

![image of code with conflicts](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qk1yv7g0nctai5oc3ijv.png)


Here are some steps you can use to resolve merge conflicts:
1. Remember, conflicts are a natural part of collaboration. Open the conflicted files using a text editor and look for the conflict markers `(<<<<<<<, =======, and >>>>>>>)` to understand where the conflicting changes are.
2. Edit the conflicting section, removing the conflict markers and deciding which changes to keep. Create a version that incorporates the best of both changes if that aligns with the project's goals.
3. After resolving conflicts, save the file and stage it.
```
git add <conflicted-file>
```
4. Commit the changes.
```
git commit -am "Resolve merge conflicts with upstream"
```
### Preparing Your Pull Request
As you work through the issue and keep your branch updated, your pull request should be in good shape for merging. A couple of things to keep in mind:

1. Test your changes and add relevant documentation.

2. Make your pull request descriptive and provide context for the changes you've made–you can use the [OpenSauced chrome extension](https://opensauced.ai/) to generate the first draft of your PR description!

3. Sync your fork and/or rebase your feature branch on the latest upstream branch before creating the pull request.

```
git fetch upstream
git rebase upstream/main
```

## Submitting Your Pull Request
With your branch up to date and conflicts resolved, it's time to submit your pull request. The maintainers of the repository will review your changes and, if everything looks good, merge them into the main repository.

When you’ve submitted your PR to our repository, you should see all checks passing and no indications of merge conflicts, like this:


![passing tests and no conflicts message](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9wnp2nro83nuj6tovbwd.png)


### Handling Feedback 
Be prepared to receive feedback from the maintainers and community members. This is an opportunity to improve your contribution and to showcase your communication skills. Make the necessary updates based on the feedback and push them to your feature branch. The pull request will automatically update with the new changes.

If you want to learn more about what happens when you submit pull requests, check out:

[https://dev.to/opensauced/what-happens-after-you-submit-a-pr-to-an-open-source-project-4ed1](https://dev.to/opensauced/what-happens-after-you-submit-a-pr-to-an-open-source-project-4ed1)


You might find that you need to update your branch more than once when you’re waiting to get your PR merged. That’s ok. What’s important is that you know how to do it now. By following these steps, you can contribute without that panic of not knowing what to do when you see that merge conflict message. If you still panic a little, that’s ok. And if you try to fix it and you’re still having trouble, reach out to a community, a maintainer, or a mentor. There’s lots of people out there willing to help. You just need to ask for it.
