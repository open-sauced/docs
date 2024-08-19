---
title: "Supercharge Your GitHub Profile: Showcase Your Open Source Contributions"
tags: ["open source", "open source contributor", "open source contributions", "open source for beginners", "open source software"]
authors: nickytonline
slug: supercharge-your-github-profile
description: "Learn how to add OpenSauced Dev Cards to your GitHub Profile using GitHub Actions."
---

Last week, we launched our brand new Dev Cards with the OSCR (Open Source Contributor Rating) highlighted on the front to make it easier for you to showcase your impact in open source. To make it even easier, I've cooked up a little GitHub Action that'll automatically update your Dev Card on your GitHub profile. 

<!-- truncate -->


In this post, we're gonna dive into what Dev Cards are all about, how this new GitHub Action works, and how you can get it set up. 

## OpenSauced Dev Cards

At OpenSauced, we created [dev cards to showcase your open source stats](https://opensauced.pizza/docs/features/dev-card/).

We also [recently introduced the OSCR score](https://opensauced.pizza/blog/introducing-OSCR) which appears prominently on dev cards now.

If you head on over to your OpenSauced profile page, you can see your dev card now. Here's [my OpenSauced profile](https://oss.fyi/nickytonline). There's a little pizza card button you can press to see it.

![An OpenSauced User's avatar with the dev card button to the bottom right of it.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q3faduepn8vdt571w2bg.png)

The card is interactive and can be flipped.

![My OpenSauced dev card](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4vyjcmg41113h3pgd3mh.gif)

## Introducing the OpenSauced Dev Card GitHub Action

To make it easier to showcase your contributions, I've developed a GitHub Action that automates the process of fetching your OpenSauced dev card (static version) and updating it in your GitHub profile README.

You can check it out [here](https://github.com/nickytonline/open-sauced-dev-card-action)

This means you can have an always up-to-date representation of your open source contributions from OpenSauced stats right on your GitHub profile.

Here's mine on [my GitHub profile](https://github.com/nickytonline)

![My GitHub README showcasing my OpenSauced Dev Card](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/359o03keegpkdg9dns8y.png)

### How It Works

1. The action runs on a schedule (default is daily at midnight UTC) or can be triggered manually.
2. It fetches your dev card image from OpenSauced.
3. The image is saved to your profile README repository.
4. Your README is automatically updated with the new image.

### Setting It Up

[View the GitHub action on the GitHub Action Marketplace](https://github.com/marketplace/actions/opensauced-dev-card-action)

To use this action in your own GitHub profile, follow these steps:

1. Create a workflow file (e.g., `.github/workflows/update-open-sauced-dev-card.yml`) in your profile README repository.
2. Add the following content to the file:

    ```yaml
    name: Update OpenSauced Dev Card
    
    on:
      schedule:
        - cron: "0 0 * * *" # Run daily at midnight UTC
      workflow_dispatch: # Allow manual triggering
    
    jobs:
      update-dev-card:
        runs-on: ubuntu-latest
        steps:
          - name: Update Dev Card
            uses: nickytonline/open-sauced-dev-card-action@v1.0.2
            with:
              github-token: ${{ secrets.GITHUB_TOKEN }}
              username: "your_username"
    ```

3. Replace "your_username" with your actual GitHub username.

4. Add the following markdown to your README.md:

    ```markdown
    [![My OpenSauced Dev Card](./dev-card.png)](https://oss.fyi/your_username)
    ```

    Again, replace your_username with your actual GitHub username.

5. Run the GitHub action manually the first time if you want to get an initial image. It's not a big deal if you don't, but it'll mean the image will look broken until the first time the action runs at midnight UTC.

## Making the Most of Your Dev Card: Tips & Tricks

If you want to make the most of your dev card on your GitHub profile? Here are some tips:

- **Prime Real Estate**: Place your card where you think it will be noticed on your README. First impressions count, and you want visitors to see your open source contributions. Maybe place it between your "About Me" and your "Current Projects" for a well-rounded profile.
- **Context is Key**: Don't just leave your card hanging there. Add some text to introduce it. Something like: "Check out my open source contribution snapshot!"

## The Secret Sauce: Understanding Your OSCR Score

Think of the OSCR as your open source score that looks at:
- Your contribution frequency
- The quality of your contributions
- Your ability to start and be a part of open source conversations

Your OSCR score provides a quick snapshot of your open source activity and impact. It gives people an idea of how active and influential you are in the open source community. 

Like any metric, your open source experience is about more than just one number. 

## Conclusion

Open source contributions are a fantastic way to grow as a developer and give back to the community. With this GitHub Action and OpenSauced, you can easily showcase your efforts and inspire others to get involved.

Give it a try and let me know what you think!

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).

