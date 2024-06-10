---
title: "Form and Function: How I Lost My Submit Button & Got It Back"
tags: ["html", "webdev", "beginners"]
authors: nickytonline
slug: form-and-function-how-i-lost-my-submit-button-got-it-back
description: "As web developers, we know that most of the create, read update, and delete (CRUD) actions we perform..."
---

As web developers, we know that most of the create, read update, and delete (CRUD) actions we perform on the web are typically (hopefully?) done using an [HTML form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).

## HTML Forms

HTML Forms are cool because they have plenty of built-in features.

For example, they have native form validation and access to all the inputs in a form, and at some point, because you need to submit the form, there is a mechanism to do that as well. You can use a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), `<button>submit</button>` or an [input of type submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit), `<input type="submit" />`, although the latter isn't used as much these days in new sites, from what I've seen.

Here is a simple form to exhibit this.

<a href="https://codepen.io/nickytonline/pen/JjVOarX">https://codepen.io/nickytonline/pen/JjVOarX</a>

If you fill out the form and click submit, the form will submit and add a paragraph with dark green text client-side that says, "Form submitted".

![Submitting the simple form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rbpoz901yk9s8kewx806.gif)

There are other things in the simple form, like form validation via the [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required) attribute on inputs, but that's not what we're here to discuss.

What we want to touch on is that the form was able to handle the submit event because it had a submit button associated with it, which was defined in HTML within the form element.

_Note: you can press enter in fields to submit a form, but again, not what we're here to discuss._

## How I Broke My Form

This brings us to a new feature that I was working on for OpenSauced for a few months, [workspaces](https://docs.opensauced.pizza/features/workspaces/). I encourage you to create your own, but for now, let's get back to the business of forms.

Here's our beautiful workspaces settings page that I implemented.

![an OpenSauced workspace settings page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bq93z0w7duinhgew6azp.png)

Recently, there were styling changes, which is what you see above.

<a href="https://github.com/open-sauced/app/pull/2982">https://github.com/open-sauced/app/pull/2982</a>

Everything looked great, and I had tested it.

_Narrator: he thought he had tested it, and we shipped things to production._

Once things went live, I decided to do some smoke tests, which I usually do. I went over to the beautiful workspace settings I had worked on, made some changes in the settings, and then clicked <kbd>Update Workspace</kbd> button. Hmm, no toast message saying the settings were updated. I checked the browser dev tools to see if there were any JavaScript errors. Nothing related to the updates. <em>And then it dawned on me</em>. The submit button was outside the form, and I just broke some key functionality in the app.

![Michael Scott telling everybody not to panic.](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2xxdGVubmtuam5rMzM1N2RxNjY4dTJkOTh1cW03NnN4d3FkNDgzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1luXLMeNxsaNFMUuOe/giphy.gif)

Side note, but luckily thanks to Netlify's deployment rollback feature, I was able to revert to the previous production deployment within about a minute of the workspace settings page being broken 😅

## How I Fixed My Form

So how did I fix it? We needed this new styling to fix several other issues related to [z-indexes](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) and layout.

For some context, the OpenSauced application is a Next.js site, so React, but I decided to put on my old school HTML hat and remembered that form elements can be associated to a form via a `form` attribute. What you need to do is give the form an `id` attribute, and the form element that you want to associate the form to needs to have a `form` attribute whose value is the value of the `id` attribute for the form.

Here's another simple form demonstrating a simplified version of my fix.

<a href="https://codepen.io/nickytonline/pen/XWQzPOX">https://codepen.io/nickytonline/pen/XWQzPOX</a>

I encourage you to remove the `form` attribute from the button in the above CodePen to see the issue I caused.

Here's the fix I rolled out to production.

<a href="https://github.com/open-sauced/app/pull/3003">https://github.com/open-sauced/app/pull/3003</a>

## Wrapping Up

Learning a framework is great, and I'm a big proponent of just building something, but as you continue on in your career, it's great to start getting some fundamentals into the mix.

Also, this is a perfect example of why <em>using [semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/) is important!</em> It definitely helped me get out of jam! 😅

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
