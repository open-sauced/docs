---
title: "Stuck in the Middle with You: An intro to Middleware"
tags: ["webdev", "beginners", "frameworks", "javascript"]
authors: nickytonline
slug: stuck-in-the-middle-with-you-an-intro-to-middleware
description: "Middleware exists in several frameworks like Next.js, Express, Hono and Fresh, and not just in..."
---

Middleware exists in several frameworks like Next.js, Express, Hono and Fresh, and not just in JavaScript land. You can find it in frameworks like ASP.NET core in the .NET ecosystem, or Laravel in PHP. Since I mainly work in JavaScript and TypeScript these days, examples will be from frameworks in those ecosystems.

Middleware is something that happens in the middle of a user or some service interacting with a site or [API](https://en.wikipedia.org/wiki/API) call and happens at the framework level.

It runs before a page loads or an API endpoint is called, or more generally a route. There are many reasons why you might want to do that:

- gate certain content, e.g. a private route
- set and read cookies
- add headers to the response being sent out
- [URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) redirect, e.g. redirecting to another page based on some criteria
- URL rewrites

Let's dig in!

## Gate Content

Authentication and authorization are two great candidates for guarding certain routes, although it’s still good to guard access to privied resources in API endpoints and pages. In this context, think of the middleware as the first line of defense.

![Gandfalf saying, "You shall not pass!"](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzF0MWU4cmEwb3Y3ZnozY25raGJkM2VseTVhMHRpNjY3OHI0cjFobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/njYrp176NQsHS/giphy-downsized-large.gif)

In the OpenSauced application, when a user logs in and the path is `/workspaces` we redirect them to their workspace.

```typescript
{% raw %}
  if (session?.user && req.nextUrl.pathname === "/workspaces") {
    const data = await loadSession(req, session?.access_token);
    const workspaceUrl = getWorkspaceUrl(req.cookies, req.url, data.personal_workspace_id);

    return NextResponse.redirect(`${workspaceUrl}`);
  }
{% endraw %}
```

[Code on GitHub](https://github.com/open-sauced/app/blob/beta/middleware.ts#L63C1-L68C4)

## Setting and Reading cookies

So what is a cookie?

A cookie is a way to set a piece of user-specific data. This could be a session ID for someone who is logged in to a site, or it could be some other user data. Note that the data in a cookie is typically not that large, but according to MDN, there is [no size limit to the name or value of a cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#notes).

![Cookie monster eating cookies](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2dwc2IzcmxrZ2hzMWFmbmYwMWE4Z2NoODh5amdjN3NnbDhhbWtmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BsUORZkF3gBqg/giphy.gif)

Cookies that are [HTTP only](https://owasp.org/www-community/HttpOnly) can be accessed on the server-side, but for cookies that are not HTTP only, they can be accessed server-side and client-side. For example, you wouldn't want someone to tamper with your session ID on the client-side, so this type of cookie is set as HTTP only.

We recently shipped a new feature at OpenSauced, called [Workspaces](https://docs.opensauced.pizza/features/workspaces/). You can read all about it in this great post from my co-worker Bekah (@BekahHW).

<a href="https://dev.to/opensauced/navigating-the-challenges-of-scaling-open-source-projects-11h2">https://dev.to/opensauced/navigating-the-challenges-of-scaling-open-source-projects-11h2</a>

TLDR; a Workspace acts like a workspace in other software you may have used, like Notion. One thing required for this feature is when a user navigates to the `/workspaces` URL, it has to load the last accessed workspace. If a user has never accessed a workspace before, it should default to their personal workspace. This is a perfect use case to leverage using a cookie.

When someone logs in, we check if they have a workspace ID cookie set. If they don’t, we grab their personal workspace ID, a type of workspace every user has.

The code for this was in the code snippet in the last section.

```typescript
{% raw %}
    const workspaceUrl = getWorkspaceUrl(req.cookies, req.url, data.personal_workspace_id);
{% endraw %}
```

Let's take a peek into the `getWorkspaceUrl` function.

```typescript
{% raw %}
export function getWorkspaceUrl(cookies: RequestCookies, baseUrl: string, personalWorkspaceId: string) {
  if (!cookies.has(WORKSPACE_ID_COOKIE_NAME)) {
    cookies.set(WORKSPACE_ID_COOKIE_NAME, personalWorkspaceId);
  }

  // @ts-expect-error the cookie value will be defined
  const workspaceId = cookies.get(WORKSPACE_ID_COOKIE_NAME).value;

  return new URL(`/workspaces/${workspaceId}`, baseUrl);
}
{% endraw %}
```

If there is no workspace cookie set, we create a cookie and set its value to the user's personal workspace ID.

After that, we read the cookie, we build a URL with it and the user is redirected to the workspace.

The other piece of this that doesn't occur in middleware is when a user visits a valid workspace page they have access to, we set the workspace ID cookie. Next time they go to the `/workspaces` link, the cookie will exist, and a URL using `new URL()` will be used to redirect them to the last accessed workspace homepage.

The page will call the OpenSauced app's `setCookie` function.

```typescript
{% raw %}
export function setCookie({
  response,
  name,
  value,
  maxAge = 31536000,
  sameSite = "Lax",
}: {
  response: Response;
  name: string;
  value: string;
  maxAge?: number;
  sameSite?: SameSite;
}) {
  response.setHeader(
    "Set-Cookie",
    `${name}=${value}; Max-Age=${maxAge}; Path=/; HttpOnly; SameSite=${sameSite}; Secure`
  );
}
{% endraw %}
```

[Code on GitHub](https://github.com/open-sauced/app/blob/beta/lib/utils/server/cookies.ts#L18C1-L35C2)

Although cookies are their own thing, you have set them in a header.

## Add Headers

As mentioned in the previous section, you set cookies via a header. So what is a header, more specifically, an HTTP header?

Headers are a set of key value pairs to let a browser know how to behave, for example, should a page be cached? It can also be custom key value pairs that your application or services might need. For example, when I worked at Netlify, for the CDN to work, there would be Netlify-specific headers that once inside the internal network would allow Netlify to do some magic.

If you go to my website, [nickyt.co](https://nickyt.co), and open the network panel in the dev tools of your browser of choice, you'll see some Netlify-specific headers.

![Response headers from nickyt.co's homepage showing some custom Netlify headers being set](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u0yzhri4reu5xv8lvdzr.png)

I recently gave a talk on Fresh, a full-stack framework for Deno at [Node Summit '24](https://www.linkedin.com/feed/update/urn:li:activity:7160791824209498113/). The recording isn't up yet, but here's the [slide deck](https://www.nickyt.co/slides/fresh) and [code from the demo](https://github.com/nickytonline/fresh-demo) for anyone interested.

In Fresh middleware, this is how you could set a header.

```typescript
{% raw %}
export async function handler(
  request: Request,
  ctx: FreshContext<State>
) {
  const response = await ctx.next();
  response.headers.set("x-fresh", "true");

  if (request.url.includes("joke-of-the-day")) {
    response.headers.set("x-joke-page", "true");
  }

  if (request.url.includes("movie/")) {
    response.headers.set("x-movie-page", "true");
  }

  return response;
}
{% endraw %}
```

[Code on GitHub](https://github.com/nickytonline/fresh-demo/blob/main/routes/_middleware.ts#L8C1-L24C2)

In the above code snippet, we're checking to see if a specific route contains a certain string and if it does, we set a custom header, e.g.

```typescript
{% raw %}
response.headers.set("x-joke-page", "true");
{% endraw %}
```

## URL Redirection

Page redirection allows you to have a URL go to another URL. You might do this for a couple of reasons. Maybe a bunch of links on your site changed, and you need to have them go to a new set of links, or you have a URL that needs to redirect to a user-specific page.

![Kermit the frog looking at a map trying to figure out where to go](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdlMThsN3gwbDRxcnZvYnphcTRoMmx4cjd6YjU2Yjk3cXJnMG5jbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjbfyJrICOaKIXBWyG/giphy.gif)

For non-trivial redirects like the workspaces redirect URL mentioned in one of the previous sections, middleware is a great place for handing redirects.

```typescript
{% raw %}
  if (session?.user && req.nextUrl.pathname === "/workspaces") {
    const data = await loadSession(req, session?.access_token);
    const workspaceUrl = getWorkspaceUrl(req.cookies, req.url, data.personal_workspace_id);

    return NextResponse.redirect(`${workspaceUrl}`);
  }
{% endraw %}
```

[Code on GitHub](https://github.com/open-sauced/app/blob/beta/middleware.ts#L63C1-L68C4)

In this case, when someone in the OpenSauced application goes to `/workspaces` we redirect them to a user-specific URL.

```typescript
{% raw %}
return NextResponse.redirect(`${workspaceUrl}`);
{% endraw %}
```

Not a hard and fast rule, but if you have trivial redirects like redirect `/old-blog-path/*` to `/blog/*`, consider using your hosting platform's redirects instead of middleware.

## URL Rewriting

You can also do URL rewrites. It's like a redirect, but the URL never changes. Frameworks like Next.js provide this out of the box in their configuration file, but for more complex handling, you may want to do it in middleware. So what is a [URL rewrite](https://www.smashingmagazine.com/2011/11/introduction-to-url-rewriting/)? A rewrite will preserve the existing URL but will render content from another URL.

![Mr. Burns from the Simpsons saying, "Well, cover it with a rewrite"](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGIzcWZ5dXdjcGxnYnBhd2diNDFraTM0emo4Z2xwMWY3b293aTJqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMuqfAqBIsGs5xK/giphy.gif)

Here's a slightly modified example straight out of the Next.js middleware documentation:

```typescript
{% raw %}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
{% endraw %}
```

[Code in Next.js documenation](https://nextjs.org/docs/app/building-your-application/routing/middleware#conditional-statements)

In the above snippet, all users have a `/dashboard` page they go to, but every user's dashboard is different. In this case, the user will always see the page as `/dashboard` but it loads the specific user's dashboard.

## Resources

Here's the documentation for middleware of the mentioned frameworks:

- [Express middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Hono middleware](https://hono.dev/guides/middleware)
- [Next.js middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Fresh middlewares](https://fresh.deno.dev/docs/concepts/middleware)
- [Laravel middleware](https://laravel.com/docs/10.x/middleware)
- [ASP.NET Core middleware](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0)

## Wrapping Up

Middleware is a great tool and if your framework of choice supports middleware (most do), I encourage you to read up on how to leverage it in that framework.

What use cases have you used middleware for? Please let me know in the comments.

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
