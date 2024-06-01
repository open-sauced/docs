---
title: "Development Tools and Platforms: Open Source, SaaS, and BoxyHQ"
tags: []
authors: BekahHW
slug: development-tools-and-platforms-open-source-saas-and-boxyhq
description: "SaaS, open source, and a spotlight on BoxyHQ. How do you decide if open source products are for you?"
---

*Today is day 4 of 29 Days of Open Source Alternatives. You can find the list of most of the projects we're going to cover [here](https://oss.fyi/oss-alts). This part of the series will cover Development Tools and Platforms.*

<hr/>

We've seen a rise in popularity for Software as a Service (SaaS) tools because of their convenience and flexibility,  often handling the management of software distribution, maintenance, and feature development for their users. In fact, you're probably using a SaaS product whether you know it or not. Examples of SaaS dev tools include code editors, project management software, collaboration platforms, and more. 

<!-- truncate -->


Because open source SaaS products allow access to the source code, they offer more opportunities for transparency, control,  to provide feedback, and fix any problems that may come up. If you're thinking about using an open source SaaS v. propriety software, here are some advantages offered by open source:

- **Security and Trust**: With open source code, the community can create bug reports and improve the software, leading to a more secure and reliable product. This also fosters a sense of trust and confidence, especially for organizations handling sensitive data.

- **Customization and Adaptability**: Openness allows users the possibility to tailor the software to their specific needs. Developers can modify the code, integrate with other tools, and even build custom features.

- **Reduced Lock-in**: Proprietary SaaS can lock users into specific ecosystems, which can make it difficult and expensive to switch. Open source SaaS gives users more freedom to move platforms or host the software themselves.

- **Cost-effectiveness**: While some open source SaaS products require subscription fees, many are completely free to use. It's worth noting, though, that often paid options offer more features or support.

- **Fostering Innovation**: Open source fosters a collaborative environment where developers can contribute to the software's improvement. This allows developers to be problem-solvers and figure out ways to adapt software to work for you.

Let's take a look at a specific SaaS product right now and apply some of this knowledge.

## Spotlight: BoxyHQ

You may have heard of Okta or WorkOS, but have you heard of BoxyHQ? [BoxyHQ](https://github.com/boxyhq) is an open source alternative with SSO and user management that offers enterprise-grade security features without the cost and more transparency. 

> BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster. Integrate Single Sign-On (SSO), Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free.

## BoxyHQ's Features

BoxyHQ has a number of different APIs offering security features, including:

- Single Sign-On (SSO): Streamline user access, allowing users to authenticate once and access multiple applications.
- User Management: Granular control over user accounts, including permissions, roles, and authentication methods.
- Audit Trails:  BoxyHQ maintains logs containing crucial event metadata but falls slightly short of being a full audit trail solution since it lacks certain functionalities like automated alert generation upon detecting suspicious activities or anomalous behaviors. However, admins can leverage log entries to trace user actions and assess accountability.

In addition to supporting essential security needs, BoxyHQ offers additional functionality through paid subscription plans. These advanced features include:

- Granular Access Control: Implement precise access control policies for granular data protection.
- OAuth2 Integration: Extend authentication capabilities through seamless integration with popular OAuth2 providers.
- [Customizable Workflows](https://boxyhq.com/guides/jackson/integrations/bubble#setup-workflows): Tailor the platform to your specific needs with custom workflows and integrations.

[![boxyhq dashboard on opensauced](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y8qemva9crux5pg7y4gb.png)](https://app.opensauced.pizza/lists/1162/overview?range=30)

## Open Source Support

BoxyHQ is a little different than the last projects we looked at in this series because they offer different products. We’ll take a look at their top two repositories, [Jackson](https://github.com/boxyhq/jackson)-an open sourced SAML solution that channels the power of SAM L Jackson-and [SaaS Starter Kit](https://github.com/boxyhq/saas-starter-kit). 
- ⭐  2,768
- 👀  36
- **Forks**: 374
- **License**: Apache-2.0

![samuel l jackson gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3J1ZjY0cjEyaDVqODM3cHBmMmEzcHF4MDE1eWZveWVjbjhuOG9rZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Y9Wh0l3FKFQ6hL0L3/giphy.gif) 

### The Open Source Community

BoxyHQ is still a fairly new project, with relatively few contributors at 7 in the last 30 days (at the time of writing).

Of the seven contributors, there are two who are making around 60% of code contributions, with the last 30% split mostly among three more contributors. It's worth noting that 88% of their PRs have been merged in across those two repositories over the last 30 days, so they have a high Pull Request Velocity, which is a sign of a healthy project.

[![boxyhq contributors](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2lc00gvkpo9j9n12mne.png)](https://app.opensauced.pizza/lists/923dc79f-856a-47af-a910-1071cfbcc245/activity)

For more details on how to contribute to BoxyHQ, please check out their official documentation: [https://docs.boxyhq.io/](https://docs.boxyhq.io/).

 
| Feature                    | BoxyHQ (Open Source) | Okta             | WorkOS             |
|----------------------------|----------------------|------------------|--------------------|
| **Cost**                   | Free for some features, self-hosted premium plans, and paid plans for SSO (starting at $49/mo per connection but decreasing with increased user tiers) and directory sync | Starts with Freemium tiers, but scales with usage. SSO starting at $2-$5/mo per connection. $1,500 annual contract minimum. Volume discounts are available for Enterprise customers with 5,000+ users. | Free user management and auth up to 1M users. SSO $125/mo per connection. |
| **Open Source**            | Yes                  | No               | No                 |
| **Community**              | Active & supportive forum and Github repo | Developer-focused community & support | Emerging community and documentation |
| **Features**               | SSO, audits, directory sync | Identity & Access Mgmt., SSO, etc. | User management, SSO, Provisioning, etc. |
| **Security Practices Visibility** | Full transparency | Limited transparency | Whitepapers & Audits |



## Takeaways

When considering development tools and platforms, open source alternatives like BoxyHQ offer numerous benefits such as enhanced security, customizability, reduced vendor lock-in, and cost savings. By choosing open source, you can become an active participant in supporting the open source ecosystem, and can contribute to the success of the projects as well. As always it's important to carefully evaluate each option based on your unique requirements and preferences. 

What's your favorite open source SaaS tool?