---
title: "Migrating from Jest to Vitest for your React Application"
tags: ["testing", "react", "vitest", "typescript"]
authors: nickytonline
slug: migrating-from-jest-to-vitest-for-your-react-application
description: "Are you looking to migrate from Jest to Vitest for your React application? Look no further.  I..."
---

Are you looking to migrate from [Jest](https://jestjs.io) to [Vitest](https://vitest.dev) for your React application? Look no further.

I recently migrated the OpenSauced app repository to Vitest. Here's the pull request if you're interested.

<a href="https://github.com/open-sauced/app/pull/2296">https://github.com/open-sauced/app/pull/2296</a>

## Why move from Jest to Vitest?

Both Jest and Vitest are great testing frameworks, so why bother switching?

Vitest supports [ECMAScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (ESM), [TypeScript](https://typescriptlang.org) out of the box.

Jest requires additional setup for both, although there is [experimental support for ESM](https://jestjs.io/docs/ecmascript-modules).

Vitest is also fast. Yes, it depends, but in general, it's faster. (See the [Vitest comparison with other test runners](https://vitest.dev/guide/comparisons.html#comparisons-with-other-test-runners))

![Neo fighting an agent in the Matrix movie with one hand](https://media.giphy.com/media/mSXSC0vivvygw/giphy.gif)

If you're already using Vite in your project or the meta-framework you're using is based on Vite, using Vitest is a no-brainer as you're already in the Vite ecosystem.

If your project isn't using Vite, e.g. Next.js, it's still a great move.

Vitest makes it effortless to migrate from Jest. It supports the same [Jasmine](https://jasmine.github.io/) like API.

**TLDR; You don't need to update existing tests, as it’s mostly a drop-in replacement for Jest.**

Some other niceties are a default watch mode care of Vite instant Hot Module Reload (HMR).

## Install Vitest

The first thing you want to do is install Vitest.

<a href="https://github.com/vitest-dev/vitest">https://github.com/vitest-dev/vitest</a>

Run `npm install vitest -D` in the terminal to install Vitest as a dev dependency.

Next up, create a `vitest.config.ts` file in the root of your project. Even if you're not using TypeScript, name it `vitest.config.ts`.

In that file, add the following code and save it.

```javascript
{% raw %}
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // some paths to the files that are test files
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
  },
});
{% endraw %}
```

You can explicitly import `describe`, `it`/`test`, `expect` or you can have it work like in Jest where they're all globals. All you need to do is set `globals` to `true` in the Vitest configuration.

```diff
{% raw %}
 import { defineConfig } from "vite";

 // https://vitejs.dev/config/
 export default defineConfig({
   test: {
     include: ["./**/*.test.ts", "./**/*.test.tsx"],
+    globals: true,
   },
 });
{% endraw %}
```

## Using Vitest with React

At [OpenSauced](https://dev.to/opensauced), we're using Next.js to build out the [main application](https://app.opensauced.pizza).

Vitest is based off Vite which supports React via their plugin ecosystem, so you'll need to install the Vite React plugin to get React support.

Run `npm install @vitejs/plugin-react -D` to install the plugin as a dev dependency.

Update the Vitest configuration to add the React plugin.

```diff
{% raw %}
 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react";

 // https://vitejs.dev/config/
 export default defineConfig({
+  plugins: [react()],
   test: {
     include: ["./**/*.test.ts", "./**/*.test.tsx"],
     globals: true,
   },
 });
{% endraw %}
```

## React Testing Library

If you happen to be using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) in your project, you'll need to keep the [jsdom](https://github.com/jsdom/jsdom) dev dependency installed.

Next, add `jsdom` to your Vitest configuration.

```diff
{% raw %}
 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react";

 // https://vitejs.dev/config/
 export default defineConfig({
   plugins: [react()],
   test: {
     include: ["./**/*.test.ts", "./**/*.test.tsx"],
     globals: true,
+    environment: "jsdom",
   },
 });
{% endraw %}
```

## Aliases

Your project might be using aliases for paths. For example, in the OpenSauced app repository, `components`, `lib`, and `img` are aliases to folders.

If you need to [support aliases](https://vitest.dev/config/#alias), Vitest has you covered.

Here's an example of supporting the above-mentioned aliases.

```diff
{% raw %}
 export default defineConfig({
   plugins: [react()],
+  resolve: {
+    alias: {
+      components: fileURLToPath(new URL("./components", import.meta.url)),
+      lib: fileURLToPath(new URL("./lib", import.meta.url)),
+      img: fileURLToPath(new URL("./img", import.meta.url)),
+    },
+  },
   test: {
     include: ["./**/*.test.ts", "./**/*.test.tsx"],
     globals: true,
     environment: "jsdom",
   },
 });
{% endraw %}
```

## TypeScript Types

If you're using TypeScript, you can add the types for Vitest to the project.

In your tsconfig.json file, add the types in the compiler options section of the TypeScript configuration file.

```json
{% raw %}
 {
   "compilerOptions": {
     // . .. other compiler options in your project
+    "types": ["vitest/globals"]
   }

   // . .. other TypeScript configuration options in your project
 }

{% endraw %}
```

## Running Tests

To run tests using Vitest, you can run `vitest`. By default, it will go into watch mode. If you only want to run the test suite once, e.g. for the CI/CD pipeline, run `vitest run`.

## Removing Jest

If your project is a TypeScript project, you probably have the types for Jest in your project. If you do, run the following to remove the Jest TypeScript types.

```bash
{% raw %}
npm uninstall -D @types/jest
{% endraw %}
```

Uninstall Jest itself.

```bash
{% raw %}
npm uninstall jest jest-environment-jsdom -D
{% endraw %}
```

And that's it! Happy testing!

Stay saucy peeps!

If you would like to know more about my work in open source, [follow me on OpenSauced](https://oss.fyi/nickytonline).
