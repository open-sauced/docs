---
title: "Boost productivity with the GitHub CLI"
tags: ["github", "cli", "git", "productivity"]
authors: nickytonline
slug: boost-productivity-with-the-github-cli
description: "The GitHub CLI is an indispensable tool as a project maintainer or contributor on GitHub. It can..."
---

The [GitHub CLI](https://cli.github.com/) is an indispensable tool as a project maintainer or contributor on GitHub. It can boost your productivity when getting things done.

![Someone's head exploding like the exploding head emoji](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xdqnv6j7m6joilp4qdjj.png)

The day my brain exploded was when I discovered (spoilers) that you could create a pull request using the GitHub CLI.

Let's get started!

## Install the GitHub CLI

Head on over to the [installation docs to get the GitHub CLI set up](https://cli.github.com/). There are installers for Linux, Windows, and macOS.

## Log In to GitHub via the GitHub CLI

You're up and running but if you try to run any commands, you're going to be prompted to log in, so let's do that first.

![Trying to execute a GitHub CLI command when not logged in results in the following message, To get started with GitHub CLI, please run: gh auth login
Alternatively, populate the GH_TOKEN environment variable with a GitHub API authentication token.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4b4y1css355bufj5aivp.png)

To log in to GitHub via the GitHub CLI, run `gh auth login`.

![GitHub CLI gh auth login command running](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/chype8akpqm392qfzs3d.png)

You'll be given two options for logging in. GitHub.com or GitHub Enterprise Server. In most cases, unless your company uses GitHub Enterprise Server, you'll select the default, GitHub.com.

Next, you'll be asked which protocol to log in with. The default is HTTPS, but I recommend SSH. To learn more about configuring GitHub with SSH, see [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### Login via SSH

![The GitHub CLI prompting with the following, What is your preferred protocol for Git operations? Use arrows to move, type to filter HTTPS or SSH](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wo07iigwynxvqyuil64w.png)

Next, it will ask you to publish your public key to GitHub. This is safe to do and you can proceed.

![GitHub CLI prompting to upload your public SSH key](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ilooaemam9dgcc756k4k.png)

It will prompt for a title for the key. Using the default value of "GitHub CLI" is fine.

![The GitHub CLI prompting for a title for the SSH public key](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lnappw8c5adv3pf0ic9o.png)

### Login via HTTPS

If you choose HTTPS, you'll be asked to authenticate Git with your GitHub credentials.

![The GitHub CLI prompting to log in with your GitHub credentials](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c4bfodupmj8oba15ocj1.png)

Press <kbd>ENTER</kbd> to continue.

### Finishing Login Process

Next, you'll be prompted to log in via the browser or a token. To be honest, I've never used a token at this step. I always log in via the browser. If you have a token, go for it.

![The GitHub CLI prompting to log in to GitHub via a browser or a token](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fqu5mwmyc0lbl6ckkgr0.png)

You'll be given a code in the CLI that you need to copy (changed to `some code` in my screenshot) and then press <kbd>ENTER</kbd> to log in via the browser.

![The GitHub CLI outputting a code you need to copy to finish the login process](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cgimazlzyobj7kgnwaa6.png)

Paste or type in the code and press the Continue button.

![GitHub.com device activation screen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/acbc8cs604tjtiq8cfmm.png)

Next, you'll be asked to Authorize GitHub. Click the Authorize GitHub button.

![The authorize GitHub CLI screen on github.com](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8wa8xzio1a5f9wsysuw9.png)

At this point, depending on how you have the security of your account set up, you may be asked to log in via the GitHub mobile app.

![Multifactor confirm access screen using GitHub mobile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ieoj4z63o8x071dq6n2u.png)

Log in via the GitHub mobile app or other multifactor authentication methods you have set up.

At this point, you should be all set up.

![GitHub.com confirmation screen that the device was connected successfully](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7i87s3jjk3we0fzwxzv1.png)

And if you go back to the command line, you should see something similar to this.

![GitHub CLI confirming that you are logged in](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/furcqwnfulnyksu9s8gx.png)

## Useful Commands

Let's walk through a couple of commands I use every day, and then we'll check out some other useful ones that I use less frequently.

## Reviewing a Pull Request

As a maintainer of a project, you will definitely be reviewing PRs (for external contributors or team members). Before we had the GitHub CLI, I always had to Google how to get someone's PR on my local machine with Git. I forgot all the time, so, at one point, I made a Git alias for it. The command looks like this, `git fetch origin pull/pr_number/head:name_of_branch`. So if I was going to review pull request 1234, the command would look something like this, `git fetch origin pull/1234/head:pr-1234`. You can call the branch whatever you want. I used to name it `pr-` with the number of the PR.

None of that is necessary these days. With the GitHub CLI, all you need to do is `cd` into the project directory in your terminal and then run `gh co pr-number`, e.g. `gh co 2062`

Here it is in action for a recent pull request I reviewed for the [OpenSauced app repository](https://github.com/open-sauced/app/).

![Running the GitHub CLI checkout command, gh co 2062, to check out pull request 2062 from a repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7zo4ef9ckl76g0dtdd43.gif)

## Creating a Pull Request

Before the GitHub CLI, I used to push my branch to GitHub, and then I would go to the repository's page on GitHub.com and create a pull request from there.

![A repository's main page on github.com with a call to action to create a pull request from a branch pushed to github.com](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mt6fqypoarfmu7er8c3t.png)

Although that works, when I discovered that the GitHub CLI could do this, I was blown away. All you need to do is run [gh pr create](https://cli.github.com/manual/gh_pr_create) from the command line, assuming you're currently on the branch of the repo you want to associate with the pull request. You can provide additional arguments, e.g. `gh pr create --draft` or the shorter version `gh pr create -d`, but typically, when I'm creating a PR, I go through the steps in the CLI and continue the final step in the browser. It's a preference, so do what works best for you.

Here's me creating a new test PR.

![Running the GitHub CLI create pull request command, gh pr create, to create a new pull request for a repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qcmmnrwl2stvg9h5rxuy.gif)

## Creating or Pushing a New Repository to GitHub

In the past, I always used to create a new repository from GitHub.com.

![User menu on GitHub.com open with the menu item New Repository highlighted](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u65e1ghs25onuatof93o.png)

I'm sure there is a way to create a repository on GitHub from the command line, but I never bothered to learn it, and now I don't really need to thanks to the GitHub CLI.

### Create a Repository from Scratch

To create a repository from scratch, run [gh repo create](https://cli.github.com/manual/gh_repo_create) from the command line.

![The GitHub CLI prompting user what to do with Create a new repository from scratch selected](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/57cf58p1s48mzsa743zg.png)

Select `Create a new repository on GitHub from scratch` and press the <kbd>ENTER</kbd> key.

Next, you'll be prompted to name the repository, e.g. `test`.

![The GitHub CLI prompting for a name for the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1wqvv4u62musbve5c8dq.png)

Next, choose the repository owner. If you're a part of one or more GitHub organizations, they will appear in the list. For our example, I will go with my own account, `nickytonline` as the repository owner.

![The GitHub CLI prompting for a repository owner](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tz8knqytjiqvlu5ll974.png)

Add a description for the repository, e.g. `test` or leave it blank. It's not required.

![The GitHub CLI prompting for a description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nbouh9hz8w6gcyzba8sr.png)

Next, set the visibility of the repository. It can be public (default), private, or internal.

![The GitHub CLI prompting for the visibility of the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mfjbrw0o9okqoh7h9rie.png)

Since this is a test repository, I'm going to set it to private.

![The GitHub CLI running with privacy selected for the visibility](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/20lt2a8mwt52qaank5e2.png)

Next, you'll be asked to create a README file. Type `y` and press the <kbd>ENTER</kbd> key.

![The GitHub CLI prompting to create a README](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mtn95z644i4hzvs1ok44.png)

You'll be prompted to add a gitignore file. Type `y` and press the <kbd>ENTER</kbd> key.

![The GitHub CLI prompting for to create a gitignore file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rf7p7j75fyb8qmw543ez.png)

Next, choose the language that will best reflect the contents of the gitignore file. I do a lot of JavaScript, Node.js and TypeScript, so I'm going to choose Node.

![Node selected as the language for the gitignore template](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nxf3ntackdyr2bh0ujfh.png)

You'll be asked to add a license. Type `y` and press the <kbd>ENTER</kbd> key.

![The GitHub CLI prompting to create a license](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufrcfi5oaanzbnyp5d85.png)

Choose the license that makes the most sense for the project you're creating. For the purposes of this blog post, I'll choose the MIT license.

![MIT License selected in the GitHub CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ys75il7rmt51wvm40fk2.png)

A quick check will ask if you want to create the repository on GitHub. Type `y` and press the <kbd>ENTER</kbd> key to proceed.

![The GitHub CLI summarizing all the selections made, prompting the user to create the repository on GitHub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fek4c3bxo06ul695g5v2.png)

Next, you'll be asked if you want to clone the repository locally.

![The GitHub CLI asking the user if they want to clone the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3cu0ea66kzsji32qfh0j.png)

Type `y` and press the <kbd>ENTER</kbd> key to proceed.

The new repository is on GitHub.com now and has been cloned on your machine.

### Push an Existing Local Repository to GitHub

To push an existing local repository to GitHub, run [gh repo create](https://cli.github.com/manual/gh_repo_create) from the command line.

![The GitHub CLI, with the Push an existing local repository to GitHub option selected](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bdglfgwcshd21yk116qn.png)

You'll be prompted for the path to the local repository. It defaults to `.`, the current directory. If, for some reason, you ran the command outside your local git repository folder, specify the folder to your repository.

![The GitHub CLI prompting to enter the path to a local repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aqvhfmobqsk8odltby91.png)

Next, you'll be asked to name the repository. By default, it will use the name of the folder the local repository resides in, e.g. `test`. Change it if it makes sense to.

![The GitHub CLI, prompting a user to enter a repository name](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rhjs3n4xgcznhdy5d303.png)

Next up, you're prompted to select a repository owner. By default, it's your user, e.g. `nickytonlin`, but you can select any organizations you're a part of as well.

![The GitHub CLI prompting for a repository owner](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m5mirrkm3g1ifyzted5n.png)

Next, you'll be asked to add a description. You can add one or leave it blank. It's up to you.

![The GitHub CLI prompting for a description for the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v6pttkuwhk15u8namc96.png)

Next, you'll be asked to set the visibility of the repository. It can be public (default), private, or internal.

![The GitHub CLI prompting to select the visibility of the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/83hk4addzxsefe3osund.png)

Next, you'll be asked if you want to set a remote. Press enter to say yes (the default)

![The GitHub CLI prompting to add a remote for the repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bh42zxnalpa5vcngoi4d.png)

You'll be asked what the new remote should be called. Press the <kbd>ENTER</kbd> to accept the default name of `origin`. The GitHub CLI notifies you that the remote has been added, e.g. `git@github.com:nickytonline/test.git`

![The GitHub CLI prompting to name the remote](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/whiw5y2pjp1yfylug7nt.png)

And finally, you'll be asked if you want to push the commits from the current branch to the `origin` remote. Press the <kbd>ENTER</kbd> key to push the commits, and you're done!

![The GitHub CLI pushing the current branch to the origin remote on GitHub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/unodjzvt3r8shsehhfyu.png)

## Conclusion

For myself, the GitHub CLI has become a game changer in my day-to-day workflow. I literally use it every day, well, work days. 😎

From creating a new repository, to pulling down a pull request (PR) to creating a PR and more, the GitHub CLI has become indispensable to me.

There is a [whole other set of commands](https://cli.github.com/manual/) available in the GitHub CLI that I encourage you to check out and that, to be honest, even I should explore further.

I realize not everyone is comfortable with the command line, but I think that if you give the GitHub CLI a chance, you may grow to love it. As always, though, use the tools that make you the most productive.

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
