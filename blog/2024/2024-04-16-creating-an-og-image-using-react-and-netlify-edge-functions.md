---
title: "Creating an OG image using React and Netlify Edge Functions"
tags: ["netlify", "typescript", "react"]
authors: nickytonline
slug: creating-an-og-image-using-react-and-netlify-edge-functions
description: "Open Graph (OG) images are a must if you're sharing content on the Internet. From sites like..."
---

[Open Graph](https://ogp.me/) (OG) images are a must if you're sharing content on the Internet. From sites like X/Twitter, to Slack or Discord, a great OG image makes your link share pop.

## Examples

I recently built out a couple of OG images for Open Sauced for a couple of features we've rolled out over the past couple of months, [Workspaces](https://docs.opensauced.pizza/features/workspaces/) and [Repository pages](https://docs.opensauced.pizza/features/repo-pages/). They're great features that I encourage you to check out, and I encourage you to share them on socials so our beautiful OG images pop.

For example, here's an OG image for a [workspace for jsr](https://app.opensauced.pizza/workspaces/760ea8ea-ebd3-4f9a-91ab-780384e3c102). [JSR](https://jsr.io) is the new JavaScript registry from the folks from Deno.

[![OG image for the OpenSauced workspace for jsr](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n9v3aq0eu0lsoxni8b3z.png)](https://app.opensauced.pizza/workspaces/760ea8ea-ebd3-4f9a-91ab-780384e3c102)

And here's the OG image for a repository page for [huggingface/transformers](https://app.opensauced.pizza/s/huggingface/transformers).

[![OG image for the huggingface/transformers repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7wrvyq2qqjwefpeklraf.png)](https://app.opensauced.pizza/s/huggingface/transformers)

Looking at the image for the jsr workspace, there is a template for the image, but there are several dynamic portions to the image.

All the sections denoted by green outlined squares are dynamic.

![OG image for the OpenSauced workspace for jsr with sections outline in green squares denoting dynamic portions of the image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/32npdvf35s50hjl9r9iv.png)

This dynamic info gets pulled in for the most part from the OpenSauced API.

Other parts are pulled in from the URL, like `30` for the day range, and the description comes from the query string in the OG image URL.

![browser dev tools view of the metadata section of the head with OG image URLs outlined by green squares](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f059m9we4gkmb8ixx39v.png)

## React to generate an image

So, how do we use React to generate an image?

We're using og_edge from my old co-worker Matt Kane (@ascorbic), but og_edge is a direct port of [@vercel/og](https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images) that works on Deno and Netlify Edge Functions which run on Deno.

<a href="https://github.com/ascorbic/og-edge">https://github.com/ascorbic/og-edge</a>

Under the hood, og_edge and @vercel/og use the Satori library.

> Satori: Enlightened library to convert HTML and CSS to SVG.

<a href="https://github.com/vercel/satori">https://github.com/vercel/satori</a>

The API for the `og_edge` module is pretty straightforward. It exposes an `ImageResponse` constructor with the following options and that's it.

```typescript
{% raw %}
new ImageResponse(
  element: ReactElement,
  options: {
    width?: number = 1200
    height?: number = 630
    emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' | 'fluent' | 'fluentFlat' = 'twemoji',
    fonts?: {
      name: string,
      data: ArrayBuffer,
      weight: number,
      style: 'normal' | 'italic'
    }[]
    debug?: boolean = false

    // Options that will be passed to the HTTP response
    status?: number = 200
    statusText?: string
    headers?: Record<string, string>
  },
)
{% endraw %}
```

_Code snippet above care of the official [og_edge API reference](https://github.com/ascorbic/og-edge#api-reference)._

To build out these OG images, we have a background image, some icons, like a star and fork icon, and we also pull in the repository organization or user's avatar. With a bit of vanilla CSS, we can position things just right. We also pull in the [Inter font](https://fonts.google.com/specimen/Inter) as that's what we use at OpenSauced.

As far as I know, `og_edge` does not support Tailwind like `@vercel/og` does. Not a dealbreaker at all, but just something to be mindful of.

One other thing we do is set cache headers as these are dynamic images where the data changes over time. Having said that, some social networks cache OG images very aggressively.

```typescript
{% raw %}
      headers: {
        // cache for 2 hours
        "cache-control": "public, s-maxage=7200",
        "content-type": "image/png",
      },
{% endraw %}
```

## Show me the code

Here's the pull requests for the initial work on these two OG images.

<a href="https://github.com/open-sauced/app/pull/2939">https://github.com/open-sauced/app/pull/2939</a>

<a href="https://github.com/open-sauced/app/pull/3117">https://github.com/open-sauced/app/pull/3117</a>

## Wrapping up

Beautiful and dynamic OG images are a must if you're looking to stand out when sharing links on socials, and `og_edge` and `@vercel/og` are great options if you also want to leverage your existing React skill set.

Now go out and build your own OG images! 🖼️

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
