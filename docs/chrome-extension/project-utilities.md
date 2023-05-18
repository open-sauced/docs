---
id: project-utilities
title: The utility functions of the project
sidebar_label: Project Utilities
keywords:
  - project utilities
  - helper functions
---

The utility functions used by the OpenSauced Extension project can be found in [src/utils](https://github.com/open-sauced/ai/tree/beta/src/utils). Each utility function serves a single purpose and is intended to be reusable across different parts of the project. The utilities are organized into domain-specific sub-directories within the utils folder, such as [/utils/dom-utils](https://github.com/open-sauced/ai/tree/beta/src/utils/dom-utils) for utilities related to manipulating the DOM.

| NOTE: This page is not meant to be an exhaustive list of all utility functions used in the project, but to highlight a few of the ones that may otherwise be esoteric. |
| :--- |

### [cachedFetch()](https://github.com/open-sauced/ai/blob/beta/src/utils/cache.ts)

Added in PR [#36](https://github.com/open-sauced/ai/pull/36), the function allows you to cache responses from API calls in local storage, reducing the number of network requests and improving performance. It takes a URL and optional options object as arguments, including an option to set the time in seconds before the cache expires and force a refresh. If there is a cached response that has not expired, it returns that instead of making another call. Otherwise, it makes a fetch request and caches the response if it meets certain criteria (status code 200 and content type JSON or text).

### [createHtmlElement()](https://github.com/open-sauced/ai/blob/beta/src/utils/createHtmlElement.ts)

Added in PR [#20](https://github.com/open-sauced/ai/pull/20), the function creates an HTML element of a specified tag name and with optional properties. The properties can include styles, which are applied to the element's inline style attribute. Other non-style properties are also supported and added to the created element using `Object.assign()`. [Orginal implementation](https://gist.github.com/nickytonline/8223b27b19c080c28d9f0d3b7fce1e82).

### [checkAuthentication()](https://github.com/open-sauced/ai/blob/beta/src/utils/checkAuthentication.ts)
Added in PR [#56](https://github.com/open-sauced/ai/pull/56), this function checks if the user is authenticated by retrieving a cookie from Chrome storage and verifying its validity. If the cookie does not exist or is invalid, it removes any saved authentication token from Chrome storage.

### [domUpdateWatch()](https://github.com/open-sauced/ai/blob/beta/src/utils/dom-utils/domUpdateWatcher.ts)
Added in PR [64](https://github.com/open-sauced/ai/pull/64), this function is used to observe changes in the DOM and trigger a callback function when changes occur. The function uses a `MutationObserver` to track changes in the document body, and checks if the page has fully loaded before executing the callback with any specified delay time.
