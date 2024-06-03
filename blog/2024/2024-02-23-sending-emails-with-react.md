---
title: Sending Emails with React
tags: []
authors: BekahHW
slug: email-campaign-solutions-what-are-you-using
description: "Discover the among different email campaign solutions, including Customer.io, ConvertKit, EmailOctopus, the open-source alternative Resend. Find out which option better suits your needs."
---

*Today is day 23 of my 29 Days of Open Source Alternatives series, where I'll be exploring open source alternatives to proprietary software in the categories of Game Development and Multimedia, Development Tools and Platforms, Productivity and Collaboration Tools, and more. If you'd like to see the list of the open source alternatives I'll be covering this month, head over to my [29 Days of Open Source Alts Page](https://oss.fyi/oss-alts) or if you're interested in some of the top OSS projects of last year, check out [this list](https://app.dub.co/open-sauced). This is the last post in the Content Management and Publishing category.* 

<hr/>

Recently, I’ve gained some experience working on drip campaign emails to help support our new users at [OpenSauced](https://oss.fyi/). So when Vic asked this question on  X, I thought it would make for an interesting blog post in my series. 

<!-- truncate -->


*[Link to post](https://x.com/VicVijayakumar/status/1756162192410341439?s=20)*

There were a lot of responses that you can check out in the thread, but we're going to focus on comparing Customer.io, ConvertKit, EmailOctopus with the open source project, Resend, which we actually use at OpenSauced.

## Customer.io:

*Customer.io is a comprehensive messaging platform designed to help marketers create automated message campaigns.*

- **Features**: Advanced segmentation, automated messaging, direct and third-party integrations, data warehouse synch, detailed analytics.
- **Cost**: Starts at $100/mo 

## ConvertKit

**Create a strong first impression with free email sign up forms.**

- **Features**: Email segmentation, automation, customizable forms and landing pages, digital product sales.
- **Cost**: Free tier available for up to 1000 subscribers; paid plans depend on the number of subscribers but it starts at $9/mo for up to 300 subscribers and the cost increases with features as well as subscribers.

## EmailOctopus

**Email campaigns made easy — Everything you need to build brilliant campaigns, for less – always with a personal touch.**

- **Features**: Customizable forms, email design templates, automation, segmentation, integration with popular apps.
- **Cost**: Free plan available for up to 2,500 subscribers with their branding on your emails; paid plans based on the number of subscribers and features, starting at $8/month for 500 subscribers.

## Resend

**The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.**

- **Features**: Email API focused on integration for developers, offering functionalities like email sending, domain management, webhooks, and reporting.
- **Cost**: Starts free for up to 1000 contacts/mo, increases with contacts.

### Open Source

- Stars: 11.6
- Watching: 36
**Forks**: 516
**Commits**: 879
**Contributors (total)**: 111

It's interesting to look at Resend's Contributor Distribution graph over the last 30 days. You can see that it's decreased recently, but it got me wondering what was going on 25 days ago.

![Contributor Graph](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m962puzv5he76go9mmb3.png)

After a little digging, I could see that the increase corresponded to their launch week.


## Last Thoughts

At OpenSauced, we currently use Resend for our welcome and onboarding emails for new users. Here's a peek at part of our welcome email for new maintainers who sign up. We're using [resend/react-email](https://github.com/resend/react-email). Shoutout to Isa, our amazing designer for making them beautiful!

![Maintainer Welcome Email](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6dih06044bxpzhli3mqu.png)

If you're sending out email campaigns, I'd love to know what you're using. Drop it in the comments below.

### Bonus Section

Over the weekend I learned about [JSXemail](https://jsx.email/), which was built off a fork of react-email. We don't see the same support that Resend has, but they clearly state that they have improved the `react-email` usability. 

[![jsx email dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bbb6a786vk53kpvw4nrx.png)](https://app.opensauced.pizza/pages/BekahHW/1207/dashboard?range=90)

> The goals of this project are to provide an improved focus on Developer Experience, maintenance, fast improvements and fast releases. As such, we feel that jsx-email has a number of improvements and advantages over react-email.

I haven't  dug into it, but I thought it was worth mentioning in case anyone wanted to explore options for creating their emails using `jsx` or `tsx`.


