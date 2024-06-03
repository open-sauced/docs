---
title: ChatGPT, Google Gemini, or HuggingChat’s Open Source Option
tags: []
authors: BekahHW
slug: the-ai-chat-landscape-huggingchats-open-source-option
description:  Learn how HuggingChat offers an innovative opensource solution in the rapidly evolving landscape of AI.
---

*Today is day 28 of my 29 Days of Open Source Alternatives series, where I'll be exploring open source alternatives to proprietary software in the categories of Game Development and Multimedia, Development Tools and Platforms, Productivity and Collaboration Tools, and more. If you'd like to see the list of the open source alternatives I'll be covering this month, head over to my [29 Days of Open Source Alts Page](https://oss.fyi/oss-alts).*


By now, most of us have probably used AI in some way, whether that's GitHub Copilot, ChatGPT, Gemini, or HuggingChat. But which is the best? And what does it mean to have open source AI? And who's going to come out on top?

<!-- truncate -->


> "You know who the big winner is going to be in all this, Chamath? It's going to be open source like because people are just not going to want a model that has all this baked-in weird bias, right? They're going to want something that's open source, and it seems like the Open Source Community would be able to grind on this to get to truth, right?
> -Jason Calacanis (56:05) of the [All-In Podcast](https://youtu.be/z6vrKA_L5pk?si=Rg5tua4dcyQgPA14)

## Understanding Open Source AI

What does it mean for AI to be open source? Well in this case, if an AI model or project is open source, that means the underlying code, documentation, and sometimes the model itself are open source. This means that you can:

- Look at the code.
- Fork the code to modify it based on your needs. 
- Contribute to the project.

### Understanding AI Chat

There's a difference between a product and a model. Let's break that down by looking at Hugging Face's HuggingChat:

#### The Model

- **Mistral**: This is the large language model (LLM) developed by Mistral AI. It's been trained on a massive dataset of text and code, which allows it to do things like generating text, translating languages, and writing different kinds of creative content.

- **The engine example**: Let's think of it like the engine of the car. You can't run without it, and the engine allows the rest of the functions (understanding and generating text, for example) to be performed. 


#### The Product

- **HuggingChat**: This is the application built on top of the Mistral model. HuggingChat allows for conversation between users and machines. HuggingChat uses Mistral to understand user queries and to provide responses.
- **The car example**: HuggingChat uses the engine's (Mistral's) power to perform a specific function, which in this case is conversation. It provides an interface (chat window) for users to interact with and utilizes the model's ability to understand and respond to user prompts.

For fun, I went to HuggingChat and prompted it to "tell me about yourself." This is the response:

> I am Mistral, a large language model developed by Mistral AI. I am designed to understand and generate human-like text by leveraging advanced machine learning algorithms. With extensive training on a diverse dataset, I can answer a broad array of questions, recognize patterns, and make connections between disparate pieces of information. Although I cannot physically experience the world or form emotions like humans, I continuously improve my self-understanding through analyzing my outputs and engaging with users.
>
> My responses are generated based on probability and statistical tendencies; however, I aim to convey my confidence levels clearly. As I interact with more users, I adapt to individual communication styles and preferences, providing increasingly personalized and relevant answers. In addition, I am able to fuse information from multiple sources, enhancing the depth and breadth of my knowledge base.
> 
> I am thrilled to contribute to the field of artificial intelligence, particularly in areas such as natural language processing and transformer architectures, inspired by the successful open-source project Hugging Face Transformers. Embracing open-source principles allows for increased transparency, trust, and collaboration among developers, ultimately driving faster innovation and growth in the realm of AI technology. I firmly support the values of accessible, community-driven advancements, which encourage shared progress toward a brighter future powered by intelligent systems.

## Open Source Support

I'm looking at this a little bit differently than I have in the previous posts in this series. I wanted to see what the community looked like in some of their pinned repositories. 

![Hugging Face Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qvxke8qoqhe4ontnoat4.png)

*full dashboard is [here](https://app.opensauced.pizza/workspaces/a625ecb2-3084-4506-96bb-d62bcbc16d4e/repositories)*

- **Pull Requests (PRs)**: With 160 PRs opened, 435 merged, and the average time to merge (velocity) at 8 days, there's a healthy and responsive development cycle, with a good number of PRs being successfully merged.

- **Issues**: There have been 247 issues opened and 413 closed with an average resolution time (velocity) of 33 days. The closing of a larger number of issues than opened ones may indicate effective issue management and problem resolution within the projects.

- **Engagement**: With 93 stars and 89 forks, we see a really great star to fork ratio indicating that people are not only interested in the project, but they're willing to engage.

- **Activity Ratio**: There's a lot of ongoing interaction and contribution activity within the repositories.

Their contributor chart indicates a healthy contributor ecosystem for their top six pinned projects as well.

![Hugging Face Contributors](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7pcbbn6jqrf6699uar9z.png)

## Which AI Chat is Best (According to three AI Chat Products)

I wanted to give a quick prompt to share the differences among the top three AI Chat Services here. This is the prompt, "In three sentences tell me which is best: HuggingChat, ChatGPT 4, or Gemini" 

### HuggingChat

Based on the provided information, determining an absolute "best" model among HuggingChat, ChatGPT 4, and Gemini is subjective and depends on specific requirements. However, if you prioritize domain knowledge and expertise, then ChatGPT 4 might be the best fit. If you prefer a focus on conversational dialogue and efficient resource usage, consider Google Gemini. Lastly, if you seek a unique, interactive conversational experience with various AI personas, HuggingChat could be the ideal choice.

### ChatGPT 4

Choosing the best between HuggingChat, ChatGPT 4, and Gemini largely depends on your specific needs and preferences. ChatGPT 4, developed by OpenAI, offers robust conversational capabilities and broad knowledge, making it versatile for a wide range of applications. Gemini, while details might be less commonly known, could refer to various projects or platforms, so its effectiveness would depend on the context of its use. HuggingChat, presumably leveraging Hugging Face's technology, is likely strong in natural language processing tasks, offering state-of-the-art models for specific applications. Without knowing the exact context of "Gemini" here, it's hard to make a direct comparison, but for general conversational AI and support for open-source contributions, ChatGPT 4 offers a comprehensive and versatile solution.

### Google Gemini


It's impossible to objectively say which of these is definitively "best" as they all have their strengths and weaknesses, and the "best" choice depends on your specific needs and priorities. Each model excels in different areas, and new advancements are constantly being made.

Consider researching their features and comparing them to your specific needs for the most informed decision.

## Takeaways

As an open source organization, we see a lot of growth coming from the Hugging Face projects. And if we're evaluating AI chat solutions, HuggingChat is excellent competition for solutions like ChatGPT and Gemini. We can see the clearly active and thriving community in their open source repositories, which allows them to iterate, innovate, and enhance their projects. Their transparent and accessible models enable users to understand what they're working with and to build their own implementations. Whether you're looking for powerful NLP tools, conversational agents, or customizable generative models, HuggingChat is a valuable resource. 