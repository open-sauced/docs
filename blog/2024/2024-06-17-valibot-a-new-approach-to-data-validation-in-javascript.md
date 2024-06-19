---
title: "Valibot: A New Approach to Data Validation in JavaScript"
tags: ["javascript", "typescript", "webdev", "opensource"]
authors: nickytonline
slug: valibot-a-new-approach-to-data-validation-in-javascript
description: "I recently got to hang with the creator of Valibot, Fabian Hiller on a live stream. We discussed its..."
---

I recently got to hang with the creator of [Valibot](https://valibot.dev/), [Fabian Hiller](https://megalink.io/fabian) on a live stream. We discussed its history of the project and did some live coding with Valibot. Let’s dig in.

<!-- truncate -->

## The history of Valibot

If video is your jam, check out this highlight from the live stream that summarizes the history of Valibot.

<a href="https://www.twitch.tv/videos/2172124000">https://www.twitch.tv/videos/2172124000</a>

During [his thesis work](https://valibot.dev/thesis.pdf), developer Fabian Hiller found himself with dedicated time to pursue an idea he'd been mulling over - creating a new modular data validation library for JavaScript. This led to the birth of Valibot.

Fabian had previously worked on [Modular Forms](https://modularforms.dev/), but he wanted to bring that same modular philosophy to data validation. While popular validation libraries like [Zod](https://zod.dev/) offer excellent APIs, Fabian felt there was room to take modularity even further.

> "For Zod, it doesn't make sense to make it extremely modular as Valibot, because most Zod users love Zod for its API", Fabian explained. "This would probably be too big of a breaking change."

Instead of trying to rebuild Zod from the ground up, he decided a fresh start made more sense. Valibot aims for ultimate modularity, allowing developers to compose small, reusable validation units together.

Fabian didn't work in isolation. He reached out to Zod's creator Colin McDonnell, but the timing didn't line up for deeper collaboration initially. Fabian remains in touch with McDonnell and other open source maintainers though.

> "I'm sure improvements I made in Valibot will hopefully improve other libraries, and other libraries will hopefully affect and improve Valibot," he said. "I hope at the end we end up with great open source projects, and the community can choose what they prefer."

With Valibot, Fabian hopes to provide developers a new, composable approach to data validation. And by cross-pollinating with other libraries, he aims to push the entire JavaScript validation ecosystem forward.

## A First Look at Valibot

If you want to experiment with Valibot, I recommend you check out the [Valibot playground](https://valibot.dev/playground/). Fabian actually [made a change to enable prettier support](https://x.com/FabianHiller/status/1801975870917087644) after our live stream! 🤩

Also, [version 0.31.0 was recently released](https://valibot.dev/blog/valibot-v0.31.0-is-finally-available/) with a whole rework of the API.

Let's start of simple. We want to create an e-mail validator. Valibot makes this pretty easy for us.

```typescript
import * as v from "valibot";

const EmailSchema = v.pipe(v.string(), v.email());

const validEmail = v.safeParse(EmailSchema, "jane@example.com");

console.log(validEmail);
```

First, we import the Valibot package. Next, we create a schema for a valid email, `const EmailSchema = v.pipe(v.string(), v.email());`

`v.pipe` is so powerful. It allows us to chain validators. First, we check that the input is a string via `v.string()`, and next, if it's a valid email via `v.email()`.

If you run this in the playground, you'll get the following output.

```bash
[LOG]: {
  typed: true,
  success: true,
  output: "jane@example.com",
  issues: undefined
}
```

You can view the following example in [this Valibot playground](https://valibot.dev/playground/?code=JYWwDg9gTgLgBAKjgQwM5wG5wGZQiOAcg2QBtgAjCGQgbgCh6BjCAO1XgFERlhSBlJgAsApjzgBeTADowwMCIAUGaRyjBWAc0UBKADQyxvUrp0NmbDpjLAAJt2OSZqZNhEAFZFFRKHfQaI8BoQAVsisIgACIgAeyOCkItIsIIRmjCzsEInSpBDaJOT2PHzpQA).

Let's see what happens when we have an invalid email.

```typescript
import * as v from "valibot";

const EmailSchema = v.pipe(v.string(), v.email());

const validEmail = v.safeParse(EmailSchema, "janeexample.com");

console.log(validEmail);
```

If we run the updated playground, it will now output the following:

```bash
[LOG]: {
  typed: true,
  success: false,
  output: "janeexample.com",
  issues: [
    {
      kind: "validation",
      type: "email",
      input: "janeexample.com",
      expected: null,
      received: "\"janeexample.com\"",
      message: "Invalid email: Received \"janeexample.com\"",
      requirement: RegExp,
      path: undefined,
      issues: undefined,
      lang: undefined,
      abortEarly: undefined,
      abortPipeEarly: undefined
    }
  ]
}
```

You can view the updated example in [this Valibot playground](https://valibot.dev/playground/?code=JYWwDg9gTgLgBAKjgQwM5wG5wGZQiOAcg2QBtgAjCGQgbgCh6BjCAO1XgFERlhSBlJgAsApjzgBeTADowwMCIAUGaRyjBWAc0UBKADQyxvUrp0NmbDpjLAAJt2OSZqZNhEAFZFFRKHfQaI8BoQAVsisIiIAHsjgpCLSLCCEZows7BDx0qQQ2iTk9jx8qUA).

You can see an example of valibot in action in a recent pull request of mine.

```typescript
if (context.query.id) {
  try {
    sharedChatId = parseSchema(UuidSchema, context.query.id);
    searchParams.set("id", sharedChatId);
  } catch (error) {
    captureException(
      new Error(`Failed to parse UUID for StarSearch. UUID: ${sharedChatId}`, {
        cause: error,
      })
    );
    throw new Error("Invalid shared Chat ID");
  }
}
```

<a href="https://github.com/open-sauced/app/pull/3563">https://github.com/open-sauced/app/pull/3563</a>

## Contributing to Valibot

Valibot is open source, like many things in the JavaScript ecosystem.

The project has a low [lottery factor](https://opensauced.pizza/blog/Understanding-the-Lottery-Factor), and it also has high [contributor confidence](https://opensauced.pizza/docs/features/repo-pages/#insights-into-contributor-confidence) (many stargazers and forkers come back later on to make a meaningful contribution).

[![Valibot repository page on OpenSauced](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qf7pw9laidwspqzqu59t.png)](https://app.opensauced.pizza/s/fabian-hiller/valibot)

If you're looking to contribute to open source in the JavaScript/TypeScript ecosystem, Valibot might be up your alley.

## Wrapping Up

We only scratched the surface of Valibot, but I encourage you to check it out. Valibot was highlighted in the latest bytes.dev issue, [VALIBOT AND THE CIRCLE OF LIFE](https://bytes.dev/archives/297). You know a library is gaining traction if bytes.dev covers it!

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
