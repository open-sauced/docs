---
title: "Challenging the Skeptics: Unveiling the Undeniable Goodness of Tailwind CSS"
tags: ["css", "tailwindcss", "webdev"]
authors: nickytonline
slug: challenging-the-skeptics-unveiling-the-undeniable-goodness-of-tailwind-css
description: "People definitely have opinions about Tailwind. There are staunch supporters and staunch haters, but..."
---

People definitely have opinions about Tailwind. There are staunch supporters and staunch haters, but I really don't want to get into all that. Head on over to Twitter if you want to waste some time.

If you're pretty well versed with Tailwind, this article might not be for you, but who knows? Read on and maybe you'll learn something.

I'm coming in with what, I think, is a fresh perspective. I'm using Tailwind for the first time professionally. Furthermore, I don't consider myself a CSS expert, but I think I have pretty solid CSS skills.

I mention all this, to convey a sentiment, I've seen many people exhibit. You're using Tailwind because you don't understand CSS. I do understand CSS.

So the first thing that I've seen when people say when they do not like Tailwind, is that it's not CSS, or it's inline CSS. This is completely false, even coming in as a newbie to Tailwind, all Tailwind is, at the end of the day, once it's compiled, is CSS utility classes.

## Comparisons

So let's look at some comparisons between Tailwind and "real" CSS. I'm going to put the vanilla CSS in a `style` tag, but you could also put it in a `.css` file and link it in the `head` of your HTML or however your application bundles CSS. This is just for the sake of comparison.

### First Glances of Tailwind

**Vanilla CSS**

```html
{% raw %}
<style>
  .my-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .my-list li {
    border-width: 1px;
  }
</style>
<ul class="my-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
{% endraw %}
```

**Tailwind**

```html
{% raw %}
<ul class="flex flex-col gap-6">
  <li class="border">Item 1</li>
  <li class="border">Item 2</li>
  <li class="border">Item 3</li>
</ul>
{% endraw %}
```

So the first thing someone might say is that Tailwind is repeating the `border` CSS class on a list item, `<li>`, instead of using a selector that can target the `li` DOM elements. This is true, but Tailwind allows you to create the equivalent of `.my-list li`. You can do the following:

```html
{% raw %}
<ul class="flex flex-col gap-6 [&_li]:border">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
{% endraw %}
```

This is probably where someone might say, "Well, now you're just writing inline CSS." This is also false. It will generate a [CSS rule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule) based on the `[&_li]:border` CSS class name. It will compile it to literal CSS that will generate an equivalent CSS rule comparable to the CSS rule for the `.mylist li` selector.

In fact, this is what it compiles to. I've formatted it since it gets minified.

```css
{% raw %}
.\[\&_li\]\:border li {
  border-width: 1px;
}
{% endraw %}
```

You could make an argument that the "real" version looks nicer, but this isn't a strong argument, and you have CSS source maps if you open the browser dev tools.

I'll say it here and repeat it again later. **Tailwind is a utility-first CSS framework. It's not inline CSS.**

If you want to see an example of this in production grade code, check out a recent pull request (PR) of mine to the OpenSauced app repository.

<a href="https://github.com/open-sauced/app/pull/2524">https://github.com/open-sauced/app/pull/2524</a>

### Styling pseudo-elements

What about something more complex like [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)? Let's take the [::before pseudo-element for a spin](https://developer.mozilla.org/en-US/docs/Web/CSS/::before).

**Vanilla CSS**

```html
{% raw %}
<style>
  .pizza-time::before {
    content: attr(data-inset-label);
  }
</style>
<p data-inset-label="🍕" class="pizza-time">OpenSauced is awesome!</p>
{% endraw %}
```

**Tailwind**

```html
{% raw %}
<p data-inset-label="🍕" class="before:content-[attr(data-inset-label)]">
  OpenSauced is awesome!
</p>
{% endraw %}
```

Here's what it generates as CSS when Tailwind compiles that CSS class.

```css
{% raw %}
.before\:content-\[attr\(data-inset-label\)\]:before{
  --tw-content:attr(data-inset-label);
  content:var(--tw-content)
}
{% endraw %}
```

You could complain that that is one hell of a bloated CSS class name, but again, I don't think this is a colossal deal.

If you want to see an example of this in production grade code, check out a recent PR of mine to the OpenSauced app repository.

<a href="https://github.com/open-sauced/app/pull/2552">https://github.com/open-sauced/app/pull/2552</a>

## Animations

If you're looking to add animations, [Tailwind ships with plenty of useful animations](https://tailwindcss.com/docs/animation) and CSS classes to leverage them.

Need a custom animation? You can do that as well. I won't go into it here, but here's a great post about [writing custom animations in Tailwind](https://blog.logrocket.com/creating-custom-animations-tailwind-css/).

## Accessibility

You've got all these cool animations, but what if someone has specified [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)? Tailwind can handle that for you as long as you prefix your animation with `motion-safe:`, e.g.

```html
{% raw %}
<p class="motion-safe:animate-spin">Spinning text</p>
{% endraw %}
```

There's other useful Tailwind classes for accessibility, like [sr-only](https://tailwindcss.com/docs/screen-readers#screen-reader-only-elements), which will remain in the page, but only be visible to screen readers.

I think something that would be interesting to add to the Tailwind a11y story is using Tatiana Mac's (@tatianamac) approach of [taking a no-motion-first approach to animations](https://www.tatianamac.com/posts/prefers-reduced-motion).

## Define some base styles

I'm all for components, and I'm a big fan of [JSX](https://jasonformat.com/wtf-is-jsx/). Tailwind pairs nicely with components, but I do think that it's still good to have some base styles defined, even if you are using components.

For example, a base font size and colour, focus state styles, headings etc. This is what I [ended up doing in the OpenSauced app repository](https://github.com/open-sauced/app/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+focus+author%3Anickytonline).

## Another Complaint: It's like bootstrap

Tailwind CSS on its own is not like bootstrap. It's just CSS utility classes, whereas bootstrap is UI components and CSS.

I've never used it, but maybe you could fall into this trap with [Tailwind UI](https://tailwindui.com/).

## Tradeoffs

Like many things, there are tradeoffs. I think the biggest one is learning the Tailwind CSS classes and naming conventions for building them, but I think the benefits outweigh this. And to be honest, once you start writing the classes frequently, the naming convention just sticks in your head.

And if you have some super complex CSS, for whatever reason, Tailwind can't handle, there's nothing wrong with adding some custom CSS.

## Wrapping Things Up

I literally only started using Tailwind September 18th of 2023 [when I started at OpenSauced](https://twitter.com/nickytonline/status/1703742155351539781).

Tailwind has made me super productive while building out OpenSauced, and I've used it in some other projects since then.

Remember, **Tailwind is a utility-first CSS framework. It's not inline CSS.**

I encourage you to give Tailwind a go. They have outstanding [documentation](https://tailwindcss.com/docs) and [great IDE support](https://tailwindcss.com/docs/editor-setup) to help you along the way.

If you give it a go and say it's not for me, that's OK. Use what makes you the most productive.

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
