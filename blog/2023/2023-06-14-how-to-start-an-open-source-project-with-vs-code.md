---
title: How to Start an Open Source Project with VS Code
tags: []
authors: BekahHW
slug: how-to-start-an-open-source-project-with-vs-code
description: "Learn how to start an open source projects using Visual Studio Code (VS Code). This step-by-step guide covers setting up your development environment, creating a new repository on GitHub, cloning it to your local machine, making commits, and pushing changes. Start your open source journey with VS Code today!"
---

The first time I pair programmed was with one of the founders of the bootcamp I attended. I was super nervous. We talked through some concepts I was working on, and he asked me to open up an editor. *Ok, side note, I had spent the previous years teaching college English. When someone said “editor,” I assumed a text editor.* I opened up google docs. It wasn’t until he said something like, “Do you have notepad or something else that we can use?” that I realized he was talking about a *code* editor. I think I was using the now-sunsetted Integrated Development Environment (IDE) Atom, but since then, I’ve been using Visual Studio Code (VS Code), which we’re going to be talking about in this blog post, as a way to get started with creating an open source repository. 

<!-- truncate -->

In this tutorial, we'll walk through the process of setting up your development environment, creating a new repository on GitHub, cloning it to your local machine, making a commit, and pushing your changes back to GitHub. By the end of this guide, you'll be on your way to making your first contribution to open source projects using VS Code–a free and open source IDE, available on Windows, macOS, and Linux.

<small>If you’d rather watch a video tutorial, you can skip to the end. </small>

## Step 1: Preparing Your Environment

To get started, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- A [GitHub](https://github.com/) account

## Step 2: Creating a New Repository on GitHub
*Fun fact, the first repository I created is `https://github.com/BekahHW/Portfolio`, an html and css project that never went live, but was the start of what would eventually become bekahhw.com.*

1. To create your repository, go to [GitHub.com](https://github.com/) and sign in to your account.
2. Click the "New Repository" button. Alternatively, you can just type `https://github.new` into your address bar.
3. Give your repository a name and description.
4. Select the "Public" checkbox if you want your repository to be visible to everyone.
5. Click the "Create Repository" button.


![gif of the steps to create a repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0w4ifmhawoihtlplc22f.gif)


## Step 3: Cloning the Repository to Your Local Machine

1. Open a terminal window.
2. Navigate to the directory where you want to clone your repository. In this case, I like all of my repositories to be in my Projects folder, so I’ll need to cd into that folder. 
3. Run the following command:

   ```
   git clone https://github.com/[your-username]/[your-repository-name].git
   ```
![gif of cloning the repo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9bhmie2a3uzyz81glwnw.gif)

## Step 4: Opening the Repository in VS Code

1. Open VS Code.
2. Click the "File" menu and select "Open Folder".
3. Navigate to the directory where you cloned your repository.
4. Click the "Open" button.

## Step 5: Making Changes to the Repo & Pushing them to GitHub
*Personally, I like to use the built-in terminal for VS Code, but that’s not a requirement. If you’d like to use the built-in terminal, select the terminal tab and new terminal.*

![New Terminal command](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u84gl3oe0s486s9wniot.png)

1. If you haven’t initialized your project with a `README.md` file, go ahead and create a new file called `README.md`. Then, in the VS Code terminal, type `git add .` and hit Enter to add the file.

> A README.md file is a Markdown file that typically contains documentation about a software project, such as its purpose, installation instructions, contact and contribution information, and usage examples. Markdown is a lightweight markup language that is often thought of as easier to read and write. 

2. Within that file write “Hello World!” and then save your changes.
3. In the VS Code terminal, type in your commit message preceded by your git commit command:

`git commit -am "Add text"`

> The command `git commit -am "Add text"` is used to create a new commit in a Git repository. The `-a` option tells Git to automatically add all modified files to the commit, and the `-m` option tells Git to use the specified message for the commit. In this case, the message is "Add text".

4. Hit “Enter.”

You’ve now committed the changes locally, but we still want to get them to our GitHub repository. To do that, we need to “push” the changes.

5. In the VS Code terminal, type `git push` and hit “Enter.”

Now if you navigate to your GitHub repository, you should see those changes! 

If you want to check out the video version of this post, you can find it below:

[https://www.youtube.com/watch?v=GHHTqz5DmNo](https://www.youtube.com/watch?v=GHHTqz5DmNo)

This video is part of our [Intro to Open Source course](https://github.com/open-sauced/intro) that takes you through the process of contributing to open source to making your first contribution!

It’s worth mentioning that learning new terminology can be tricky. If you’d like an overview of terminology, check out [Open Source Terminology 101: A Primer for New Contributors](https://dev.to/opensauced/open-source-terminology-101-a-primer-for-new-contributors-k46). And if there’s terminology you think should be added, open an issue or a PR for our [course glossary](https://github.com/open-sauced/intro/blob/main/09-glossary.md). Are you a VS Code user? What are your favorite features or packages? Let us know in the comments below!