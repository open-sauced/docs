---
title: "The React useRef Hook: Not Just for DOM Elements"
tags: ["react", "javascript", "webdev"]
authors: nickytonline
slug: the-react-useref-hook-not-just-for-html-elements
description: "In this post, we'll cover what the useRef hook is, some examples of how it can be used, and when it..."
---

In this post, we'll cover what the `useRef` hook is, some examples of how it can be used, and when it shouldn't be used.

## What is useRef?

The `useRef` hook creates a reference object that holds a mutable value, stored in its [current](https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref) property. This value can be anything from a DOM element to a plain object. Unlike component state via say the [useState](https://react.dev/reference/react/useState) hook, changes to a reference object via `useRef` won't trigger a re-render of your component, improving performance.

<!-- truncate -->

## Examples

### Referencing a DOM element using the useRef Hook

In React, state manages data that can trigger re-renders. But what if you need a way to directly access [document object model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (DOM) elements that shouldn't cause re-renders? That's where the [useRef](https://react.dev/reference/react/useRef) hook comes in.

Typically, you'd do something like this.

```typescript
import { useEffect, useRef } from "react";

export const SomeComponent = () => {
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  // for plain JavaScript change the above line to
  // const firstNameInputRef = useRef(null);

  useEffect(() => {
    firstNameInputRef.current?.focus();
  }, []);

  return (
    <form>
      <label>
        First Name:
        <input type="text" ref={firstNameInputRef} />
      </label>
    </form>
  );
};
```

1. We create a variable named `firstNameInputRef` using `useRef` to reference the DOM element (initially null) and use `useEffect` to focus the input element on the initial render.
1. Inside `useEffect`, we check if `firstNameInputRef.current` exists (it will be the actual DOM element after the initial render). If it does, we call `focus()` to set focus on the input.

### Referencing a non-DOM element using the useRef Hook

Recently, I was working on OpenSauced's [StarSearch](https://opensauced.pizza/blog/open-source-insights-with-starsearch), a Copilot for git history feature we released at the end of May 2024. You can read more about StarSearch in [We Made a Copilot Tool for you to Unlock the Power of Git History](https://dev.to/bekahhw/introducing-starsearch-unlock-the-copilot-for-git-history-5ddb).

The ask was to be able to start a new StarSearch conversation. To do so, I had to stop the current conversation. If you've worked with the [OpenAI](https://openai.com/index/openai-api/) API or similar APIs, they typically return a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) as a response.

A ReadableStream is a web API that allows data to be read in chunks as it becomes available, enabling efficient processing of large or real-time data sets. In the context of API responses, this means we can start handling the data immediately, without waiting for the entire response to complete.

I initially had this feature working, but ran into issues if the response started to stream. The solution, create a reference to the readable stream via the `useRef` hook and when a new conversation is started, cancel the one in progress. You can see these changes in this pull request (PR), [fix: now a new StarSearch chat can be started if one was in progress](https://github.com/open-sauced/app/pull/3637).

So now, if someone presses the _Create a New Conversation_ button, I cancel the current streaming response from StarSearch, e.g.

```typescript
  const streamRef = useRef<ReadableStreamDefaultReader<string>>();

  // for plain JavaScript change the above line to
  // const streamRef = useRef();
...

  const onNewChat = () => {
    streamRef.current?.cancel();
    ...
  };

...

```

1. We create a variable named `streamRef` using `useRef` to hold a reference to the current [ReadableStreamDefaultReader](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader).
1. The `onNewChat` function checks if `streamRef.current` exists (meaning a stream is ongoing).
1. If a stream exists, we call `cancel()` on `streamRef.current` to stop it before starting a new conversation.

## Wrapping Up

`useRef` was the perfect solution for my use case. Maybe you'll find the `useRef` hook useful for something other than referencing a DOM element as well.

You can store almost anything in a reference object via the `useRef` hook, and it won't cause re-renders in your component. If you're persisting component state, opt for `useState` or other hooks like `useReducer` so that the component does re-render.

For further reading on the `useRef` hook, I highly recommend checking out the React documentation for the [useRef hook](https://react.dev/reference/react/useRef).

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
