---
title: "GitHub Actions: A Maintainer's Best Friend"
tags: ["githubactions", "automation", "opensource", "productivity"]
authors: nickytonline
slug: github-actions-a-maintainers-best-friend
description: "As developers, it’s in our best interest to automate things. The less we have to do in a manual way,..."
---

As developers, it’s in our best interest to automate things. The less we have to do in a manual way, the better. As soon as manual intervention is required, there is potential for failure or a mishap. Aside from that, it’s your time as a maintainer that could be spent elsewhere.

If you host your code on GitHub, besides scripts to automate certain actions, you can also leverage the huge ecosystem of [GitHub
Actions](https://github.com/features/actions).

## Practical Examples

Let’s look at some practical examples of GitHub actions helping maintainers.

### peter-evans/create-or-update-comment

If someone opens an issue on your repository, you could respond with a personal message saying thank you, but those keystrokes are probably better suited for other things. Automate a message reply instead, thanking the community member for creating the issue and mentioning you will look into it. An automated message to the issue opener is friendly, even if it’s automated.

A great GitHub action for this is Peter Evans’ [Create or Update Comment](https://github.com/peter-evans/create-or-update-comment) action.

It’s used in the app repository for OpenSauced. Here’s [how we have it configured](https://github.com/open-sauced/app/blob/beta/.github/workflows/issue.yml).

When a new issue is opened, an issue responds with the following:

![Automated comment when an issue is created in the OpenSauced App repository that says "Thanks for the issue, our team will look into it as soon as possible! If you would like to work on this issue, please wait for us to decide if it's ready. The issue will be ready to work on once we remove the "needs triage" label. To claim an issue that does not have the "needs triage" label, please leave a comment that says ".take". If you have any questions, please reach out to us on Discord or follow up on the issue itself. For full info on how to contribute, please check out our contributors guide."](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y9zucj40s8ub6jiacrl3.png)

### bdougie/take-action

My coworker bdougie (@bdougieyo) created the [take Github action](https://github.com/bdougie/take-action). It allows external contributors to self-assign issues by typing `.take` into a comment of an issue. This removes the burden of a bit of back and forth between contributors and maintainers.

[![OpenSauced contributor itskish0re self assigning an issue by using the .take command](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eh9gjzo8aiwleqqr7qhe.png)](https://github.com/open-sauced/app/issues/2017#issuecomment-1785492904)

Of course, we don’t want external contributors self-assigning any issue they want. The take action also has the concept of blocking labels. For example, if an issue has a `👀 needs triage` label, we can add this label to a list of blocking labels.

[![Someone trying to self-assign an issue when there are blocking labels on the issue](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w52j0puh47kpgg27clnd.png)](https://github.com/open-sauced/app/issues/1952#issuecomment-1772176129)

### balazsorban44/nissuer

Another action that came onto my radar a couple of days ago was thanks to [styfle](https://twitter.com/styfle). Although I haven’t used it yet, [nissuer](https://github.com/balazsorban44/nissuer) looks like a great utility belt GitHub action for maintainers. The Next.js repository uses it, so I'm sure it brings lots of value to a maintainer.

I love this note they added in the README.

> NOTE: Developers are coming to your project with all sorts of backgrounds/skill levels or understanding of the open-source world. Show empathy while using this action. 💚 We recommend adding comments that not only dismiss unhelpful issues/comments, but educate the user on how to be more helpful in the future.

### Bespoke Actions

Don’t see a GitHub action for what you need? Create your own. You can even build your own by composing it from existing GitHub actions. Here's an example of a [bespoke workflow I use for pulling in my latest video content from YouTube](https://github.com/nickytonline/www.nickyt.co/blob/main/.github/workflows/get-latest-videos.yml) to my blog.

I'm using some GitHub Actions, a custom script that leverages the [GitHub CLI](https://cli.github.com/) and magic.

```yaml
{% raw %}
name: Get latest videos
on:
  schedule:
    # Everyday at midnight UTC
    - cron: '0 0 * * *'
  workflow_dispatch:

jobs:
  update_profile_data:
    name: Get latest videos
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Get latest videos
        run: |
          npm install
          node bin/udpdateStreamingPage.js
      - name: Setup git config
        run: |
          git config user.name 'token-generator-app[bot]'
          git config user.email '82042599+token-generator-app[bot]@users.noreply.github.com'
      - name: PR for Videos
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          ./bin/pr-videos.sh
{% endraw %}
```

You can see the results on the [streaming page of my site](https://www.nickyt.co/pages/streaming/).

The post is a bit out of date, but I discuss more in depth the automations for my website in

<a href="https://dev.to/nickytonline/my-eleventy-meetup-talk-3b2p">https://dev.to/nickytonline/my-eleventy-meetup-talk-3b2p</a>

## Conclusion

These are just examples of tasks you can automate, and if you’re using GitHub, there is a huge ecosystem of GitHub actions to help with your automation goals.

What are some GitHub actions that you’ve leveraged in your projects? Share them in the comments.

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
