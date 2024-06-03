---
title: What is Bluesky Social Network? And why are developers excited about it?
tags: []
authors: BekahHW
slug: what-is-bluesky-social-network-and-why-are-developers-excited-about-it
description: "It seems like my Twitter feed is all about folks joining or asking about invites to Bluesky. Here's what I learned about it."
---

It seems like my Twitter feed is all about folks joining or asking about invites to [Bluesky](https://blueskyweb.xyz/). I was lucky enough to get an invite this week to be able to check it out, and the user experience is a lot like Twitter, but what’s going on behind the scenes is really interesting. 

<!-- truncate -->

## What is Bluesky Social Network
Bluesky Social is a decentralized social media platform with a mission to create an open social media ecosystem where developers can build and innovate, and users have more control over which services they use. Unlike Twitter, Bluesky isn't committed to any stack in its entirety and sees use cases for blockchains, but it's not a blockchain.

> “The biggest and long term goal is to build a durable and open protocol for public conversation. That it not be owned by any one organization but contributed by as many as possible. And that it is born and evolved on the internet with the same principles.” - Jack Dorsey

Bluesky is build upon the AT Protocol, also known as Authenticated Transfer Protocol– a new technology that allows people to transfer digital assets and data between different blockchain networks. Think of a blockchain as a kind of digital ledger that records all the transactions that happen on it. However, each blockchain is like its own separate island with its own ledger, and it can be hard to move things between these islands.

The AT Protocol solves this problem by creating a way for people to securely move things between these different blockchain networks without needing to go through middlemen or other companies that might slow things down or charge extra fees. Instead, the AT Protocol uses special tools to check that everything being transferred is authentic and that it has not been tampered with.

Here’s another way to think about what AT Protocol means: Let's say you live in the United States and you want to send $100 to your friend who lives in Europe. You have a bank account with Bank A in the US, while your friend has a bank account with Bank B in Europe. Normally, you would need to go through an intermediary, such as a wire transfer service, to transfer the money between the two banks. This process can be slow and costly, as the intermediary may charge fees and the exchange rate may not be favorable.

However, with the AT Protocol, you could transfer the $100 directly from your bank account to your friend's bank account, without needing to go through an intermediary.

## Benefits of Bluesky
There’s a lot of buzz around some of the differences between Twitter and Bluesky. There are several benefits of using Bluesky over traditional social media platforms: 
- *User control and privacy*: With a decentralized architecture, users have more control over their own data and can choose to interact with others without relying on a single centralized platform. This approach may also offer better user privacy since user data is distributed across multiple servers and not owned or managed by a single company.

- *Innovation and competition*: By creating an open standard for social media, developers have more opportunities to build new apps and services that can interoperate with existing ones. This could encourage innovation and competition in the social media space, leading to better products and services for users.

- *Reduced risk of censorship*: A decentralized architecture could potentially reduce the risk of censorship since there is no single entity or central point of control. If one server or node is taken down or censored, users can still connect with each other through other servers or nodes.


## What are Devs Building?
There’s already a variety of open source projects being built for Bluesky, including bots, tools, and applications. Here are a few examples:

- RSS feeds. If you’re not on Bluesky yet, but you know the handle of someone who is and you want to know what they’re talking about, there’s a way to do that. Or if you’re on Bluesky and you want to share your content outside of the platform, you can share your content through an RSS reader. You can check out [Bluestream](https://github.com/kawarimidoll/bluestream), a TypeScript + Deno project live [here](https://bluestream.deno.dev/). 

- Liked Posts: Want to see what others like? You can find that all in one place thanks to [Bluesky Liked Posts](https://github.com/handlerug/bluesky-liked-posts), a TypeScript project that allows you to add a username to an input, which then displays all the liked posts in a feed. You can see it in action [here](https://handlerug.github.io/bluesky-liked-posts/).

![gif of my Bluesky feed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xlha68eh6zr3bmek10ya.gif)

- Polling: Sometimes it’s nice to be able to poll your followers. [Poll.blue](https://poll.blue/) provides that feature and prevents duplicate votes by allowing one vote per IP address. Check out this [TypeScript + Deno project](https://github.com/epistemichorse/poll.blue).


![Screenshot of my poll](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylbrcdir97k9prq8coof.png)


- Chrome Extension: Want to post to Bluesky without leaving your browser tab? There’s a chrome extension for that! [OmniATP](https://chrome.google.com/webstore/detail/omniatp/ngfefjjphfmafhmhbpjccedmkbbcmngf) makes it a quicker experience and ensures that you don’t get sucked into the timeline of all your favorite followers. And since it’s an open source project, you can check out [the repo](https://github.com/yshrsmz/omniatp) and contribute to this Vue + TypeScript project.
- And just to spread some positivity to the timeline, there’s the [Hugfairy](https://bsky-hugfairy.vercel.app/) bot that will send hugs to anyone on the platform. 


![Hugfairy image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/asok1sxtd0kpccqa5lfa.png)

If you’re interested in contributing directly to Bluesky, check out their [atproto repo](https://github.com/bluesky-social/atproto). If you want to get started with the Bluesky api, check out [Alice’s starter kit](https://github.com/aliceisjustplaying/atproto-starter-kit/tree/2d499880d3db508627aea089697e436063b58e55) template. And if you’re building with it, submitting PRs, or writing code, amplify your code by [highlighting it on OpenSauced](https://insights.opensauced.pizza/feed) so others can see it! What would you like to see next from Bluesky? Let us know in the comments below, and maybe you’ll see it on our highlights soon.