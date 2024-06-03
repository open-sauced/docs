---
title: "Development Tools and Platforms: Create your Dev.to + Pipedream Automation in under 20 minutes"
tags: []
authors: BekahHW
slug: development-tools-and-platforms-create-your-devto-pipedream-automation-in-under-20-minutes
description: "Learn how to use Pipedream to automate a post in Discord when you've created a new Dev post!"
---

*Today is day 6 of my 29 Days of Open Source Alternatives series, where I'll be exploring open source alternatives to proprietary software in the categories of Game Development and Multimedia, Development Tools and Platforms, Productivity and Collaboration Tools, and more. If you'd like to see the list of the open source alternatives I'll be covering this month, head over to my [29 Days of Open Source Alts Page](https://oss.fyi/oss-alts) or check out my bonus lists:  [open source games](https://oss.fyi/oss-games) and [API Development Tools](https://oss.fyi/api-tools).* 

<hr/>

A couple of years ago, I was working with a university doctoral student who was recording oral histories. One of the biggest challenges she faced was taking the videos and transcribing them, which was required by the doctoral committee. We came up with a low-code way to solve her problem: the solution was Pipedream. 

<!-- truncate -->


> Pipedream is the fastest way to automate any process that connects APIs. Build and run workflows with code-level control when you need it, and no code when you don't.

Pipedream and other tools like it automate workflows between different web applications and services, providing both code and no-code solutions for users. You may have heard of Zapier or Automate.io, which are popular proprietary tools similar to the open source Pipedream.  

The solution I came up with for the university doctoral student went something like this. She would drop the video files into a google drive, which would trigger an automation to transcribe the files, and once it was finished, she would get an emailed copy of the files. So, after only a little setup, we found a solution.

## Pipedream's Features

Some key features of `Pipedream` include:

- **Serverless:** Run your code in isolated containers without worrying about managing servers or scaling.
- **Visual Editor:** Create and edit workflows visually using their drag-and-drop editor.
- **Triggers & Actions:** Connect various services and APIs as triggers or actions within your workflow.
- **Webhooks:** Set up custom webhook endpoints for external applications to send data to.
- **Secrets Management:** Securely store sensitive information such as API keys and database credentials.

## Open Source Support

[![Pipedream Insight Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjtwtr2h6ng965hob2zm.png)](https://app.opensauced.pizza/pages/BekahHW/1186/dashboard)

- ⭐ 8,000
- 👀 284
- - Forks: 5,400
- - License: [Pipedream Source Available License Version 1.0](https://github.com/pipedreamhq/pipedream?tab=License-1-ov-file#readme)

Noteworthy: There's a high fork-to-star ratio here, indicating healthy contribution status.

## Creating a Dev + Pipedream Automation

Let's walk through an example that might be useful: Autoposting to Discord when you have a new Dev blog post.

### Create a Trigger

You'll start with a modal that looks like this. Type Dev into the search bar, and then you'll see the option for Dev.to. Click it.

![Pipedream Automation modal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xzl877qycwvnxhbjju7k.png)

Now, it will ask you what you want to trigger the event. There are currently four options, and we're going to choose "New my article."

In the next step, you'll need to identify how often you want the automation to run. Since I'm posting every day this month, I'm going to check daily at 11:00a ET.

Lastly, you'll need to connect your Dev Account. You'll need to generate an API key by going to [https://dev.to/settings/extensions](https://dev.to/settings/extensions). Scroll all the way to the bottom, until you see this:


![dev generate API key](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ersl0jrbk3nvxcwq9ssm.png)

Now, you should be able to test your workflow. Once you've been successful, you can proceed to the next step.

### Send a Message in Discord

Select the plus sign to add a new step. We're going to search for Discord, and select it. From there, we'll be offered three options. Go ahead and select "Send Message." (Now, we're going to keep it simple this time around, but there's more you can do to drop the actual link in Discord.)
![Send Message](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nvnep8gy9pja1x6i3s10.png)

You'll be prompted to connect your Discord account. Once that's activated, you must select a channel to send the message. 

Lastly, you'll need to enter the message you'd like to send. For this example, I wrote "I have a new post on Dev! https://dev.to/opensauced".

Go ahead and test your workflow. This is what it looks like in the discord channel I selected:

![message in discord](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q72udp93hj39b6akx7p3.png)


## Comparison with Zapier and Automate.io

| Feature             | Pipedream                                    | Zapier                                         | Integromat (Make)                              | Automate.io                                   |
|---------------------|----------------------------------------------|------------------------------------------------|------------------------------------------------|-----------------------------------------------|
| **Integration**     | 1,000+ APIs                                  | 3,000+ apps                                    | 1,000+ services                                | 200+ apps                                     |
| **Ease of Use**     | Code & No-code                               | Primarily No-code                              | No-code & some coding capacity                 | No-code                                       |
| **Pricing**         | Generous free tier; paid plans for advanced features | Free tier; paid plans escalate with tasks | Free tier; paid plans based on operations      | Free tier; paid plans based on actions        |
| **Unique Features** | Custom code steps, real-time logs           | Wide range of integrations, Zapier Editor      | Visual scenario builder, operations-based pricing | Simplicity, focuses on essential integrations |

Notes: *integrations refer to the total count of supported third-party applications and APIs.

**ease of use refers to the overall simplicity of setting up and configuring automated processes

***pricing represents the costs associated with utilizing the respective platforms, based on usage tiers and feature availability.

****unique features highlight the aspects where each platform excels or distinguishes itself from competitors.

Pipedream offers a lot for a little. The learning curve might be a little bit steeper than other no-code tools, but that also gives it more power once you know what you're doing with it. 

What automations are you currently using or want to test out? I always like to collect lists of interesting ways to be more efficient. 




