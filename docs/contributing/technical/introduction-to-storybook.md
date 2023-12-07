---
id: introduction-to-storybook
title: "Introduction to Storybook"
sidebar_label: "Introduction to Storybook"
keywords:
  - "introduction to storybook"
---

Storybook is an open-source tool that helps developers build, test, and document UI components in isolation. It's being leveraged to mock out visual React components. [Follow this link](https://sauced-components.netlify.app/) to find the latest version of the OpenSauced design system.

To run Storybook, use this command:

```shell
npm run storybook
```

## UI Categories

Storybook is broken into several categories:

- **Button**: These are the Button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons.
- **Cards**: These are the main container elements in the project. Each item represents a live component in its current form in the project.
- **Primitives**: These are the basic styling of base HTML components.
- **Nav**: This is the main navigation bar for the project. There are two states:

  - When no user is logged in.
  - When a user is logged in.

- **Footer**: This represents the various footers for the project.
- **Homepage**: This is the main component of the project homepage and shows the home page in its current form.
- **Miscellaneous**: These are components that currently don't fit neatly into the above categories.

## Making Changes to Storybook

This section details how to make changes to Storybook, mainly by creating new categories or UI elements.

### Adding a New Category

To add a new category, a new file needs to be added to the `/stories` directory.

When creating a new file, the file name should be named using the following convention: `*Previous File Number + 1*-*Name of Story Capitalized*-stories.js`. For example, if the last file was `2-SideBar-stories.js`, then the new file should be named `3-NameOfYourFile-stories.js`.

In the file ensure you have this code:

```javascript
export default {
  title: "*Name of category*",
};
```

### Adding a New UI Element

To add a new UI element to an existing category, add the following code to that category's file:

```javascript
export const *Name of UI Element* = () => (
// code for the new element
);
```
