---
title: What's a Headless CMS?
tags: []
authors: BekahHW
slug: whats-a-headless-cms
description: "Go Headless, Go Open Source! Discover the flexibility, freedom, and community support of choosing the right headless CMS."
---

*Today is day 21 of my 29 Days of Open Source Alternatives series, where I'll be exploring open source alternatives to proprietary software in the categories of Game Development and Multimedia, Development Tools and Platforms, Productivity and Collaboration Tools, and more. If you'd like to see the list of the open source alternatives I'll be covering this month, head over to my [29 Days of Open Source Alts Page](https://oss.fyi/oss-alts) or if you're interested in exploring a longer list of open source headless CMS, check out [this list](https://oss.fyi/headless-cms). This post is in the Content Management and Publishing category.* 

<hr/>

Imagine managing your website's content directly where it lives – on the live site itself, without code or technical jargon. That's the idea of headless CMS. So, what exactly is a headless CMS, and why should you care?

<!-- truncate -->


## What is Headless?

Headless CMS systems separate content (the body) from presentation (the head). This means you store and manage your content in a central hub, but its presentation on your website (or mobile app, or even smartwatch) is flexible. You choose the front-end technology (React, Vue, etc.) that best suits your needs and vision. Let's explore that from a different perspective: legos.

### A Lego Analogy for Headless CMS

Imagine you're an architect, designing your dream building. Traditional CMS would be like working with pre-built Lego sets. You'd be confined to their designs, with limited flexibility. Sure, you could choose from various sets like castles, spaceships, or houses, but customizing them significantly is nearly impossible. Each piece serves a specific purpose, locked into the overall structure.

The world of headless CMS is like a giant box overflowing with different kinds of Legos. The bricks aren't for a specific set; there's a variety of shape, size, and color for you to use as you please. 

#### Bricks Represent Content

Think of each Lego brick as a piece of your website's content – text, images, videos, you name it. Each brick holds its unique value and meaning, just like your content elements. Whether it's a captivating headline brick or a supporting information brick, they all contribute to the overall experience.

#### Flexibility 

The benefit of headless CMS is its separation of content (bricks) from presentation (building instructions). You can assemble these content bricks in any way you see fit, just like building with Legos. Want a modern, minimalist website? Stack the bricks sleekly and efficiently. A whimsical, interactive design? Combine bricks in unexpected ways.

#### Beyond Pre-Defined Templates

Headless CMS doesn't restrict you to pre-designed layouts or templates, just like Legos offer endless building opportunities. You're not limited to pre-fabricated walls or pre-determined room sizes. Instead, you can combine the content bricks (text, images, etc.) to create unique layouts, user flows, and experiences.

#### Collaboration and Adaptability

Headless CMS allows multiple "builders" (developers, content creators) to work on different sections of your website simultaneously. Just like multiple people can contribute to a Lego creation, headless CMS empowers teamwork and efficient content management.

Headless CMS can adapt and evolve with your needs. Want to add a new feature? Incorporate more bricks. Need to tweak the design? Rearrange the existing ones. The flexibility ensures your website stays dynamic and relevant over time.

## Why Go Headless?

Maybe you heard the words "headless CMS" and wondered if this was another tech buzzword or passing trend, but you want to know more. Moving to headless is an opportunity to have more freedom and flexibility that isn't offered with templates, allowing developers to be more creative and have more control over how their content is published, and allowing them to change the design without worrying about content.

## Open Source Options

### WordPress/Gutenberg: The Evolving Canvas

Let's talk about Gutenberg, the new editing experience from WordPress. Gutenberg is more flexible than traditional WordPress, but it has more flexibility as a block editor. Think of it as a hybrid approach: it's not fully headless, but it has more flexibility than classic WordPress. It's like having a pre-built Lego set with some modular sections you can arrange, but the structure still remains somewhat predetermined.

#### Strengths

- **Ease of Use**: The block-based editing experience is generally considered user-friendly, so creators can manage and modify content without a lot of coding knowledge.
- **Headless-Lite Functionality**: While it's not exactly headless, you still have the ability to use APIs to produce content on a variety of front-end applications.
- **Large Community & Resources**: WordPress is known for its large community and there are plugins for additional functionalities and support.
 
#### Cons

- **Flexibility**: Compared to true headless CMS like Strapi and Contentful, you have less control over design and customization.
- **Dependencies**: While it can be user-friendly for content creators, developers might find limitations and require workarounds for specific needs.
- **Not Truly Headless**: Remember, Gutenberg doesn't offer complete separation of content and presentation like true headless CMS.

#### Overall

Gutenberg within WordPress might be a good fit for:

- Small projects or personal websites: It's a platform that's easy for non-developers to use and without extensive customization.
- Existing WordPress users: For users who want to experiment with headless-like functionality and are already familiar with WordPress.
- Content-first projects: If the main focus is on managing and publishing without complex design needs.
#### Open Source Support

The popularity of WordPress isn't lost on Gutenberg, with a great starts to forks ratio, a large number of contributors with a high activity rate. This definitely indicates a strong community supporting the project.

![Gutenburg OpenSauced Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9o36rg63c310hf4zqfd1.png)

### Strapi

 Strapi is one of the most popular headless CMS options among developers. It offers control and customization options, like a huge box of Lego bricks. However, remember, with great power comes great responsibility – you'll need some developer knowledge to utilize Strapi's power.

![with great power comes great responsibility](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnpnbjBmZngwbTB4bmhudDVyeGZtcmFva29hN25yc2Z3cGI3d2VlZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MCZ39lz83o5lC/giphy.gif)

#### Strengths

- **Freedom**: You have control over your vision and customization with APIs, user roles, and more.
- **API-First Approach**: You can use their APIs to integrate Strapi with various front-end frameworks and applications.
- **Self-Hosting Option**: You can have complete control over your data and hosting environment.

#### Cons

- **Learning Curve**: The node.js framework requires some developer knowledge.
- **Limited Pre-Fab Features**: Strapi requires more developer work for functionality.
- **Less Intuitive Interface**: Compared to some drag-and-drop options, Strapi might appear less user-friendly for non-technical users.

#### Overall

- Developers who want complete control and customization options for their website's architecture and functionality.
- Teams who have technical expertise and want to leverage Strapi's open source offerings.
- Projects that prioritize flexibility and need to integrate with a variety of technologies.


#### Open Source Support

Strapi has solid activity supporting the open source project, with a steady cadence of contributors and velocity. The stars to forks ratio indicates a good ratio of outside contributors as well.

![Strapi OpenSauced Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kqpn2iz8jae7fupyn0qn.png)

### Contentful

Contentful caters to both technical and non-technical users. It allows for cross-team collaboration, focuses on scalability, and supports integrations. 

#### Strengths

- **Scalability and Security**: Contentful makes sure your website remains stable and secure as it grows.
- **Pre-Built Components**: If you need to streamline development, you can use their  content models and integrations.
- **Broad Audience**: Contentful is built for every contributor, allowing more users to update and manage content.


#### Cons

- **Limited Flexibility**: While is has customization, it doesn't have the granular control some developers may be used to.
- **Subscription Cost**: The free plan quickly jumps to $300/mo for teams building sites and apps.

#### Ideal Users

- Organizations or enterprises that want to ensure security, scalability, and compliance features.
- Teams that need pre-built components and content management support.

#### Open Source Support
 
![Contentful OpenSauced Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x4hi2nwd4r2up5nddnh9.png)

### Takeaways

If you're interested in their open source support and project sustainability, we see a ton of contributors with Gutenberg and Strapi looks healthy as well. Contentful itself isn't truly open source. It's a proprietary Software-as-a-Service (SaaS) platform, meaning you access it through a paid subscription and don't have direct access to its core code, although they do have some open source components like Contentful.js (their most popular repo). It only has two contributors in the last 30 days.

This is just a taste of open source headless CMS, but remember, it's about finding the right tools that empower your creativity, not just having the most options.
  
Do you use a headless CMS? If so, which one?