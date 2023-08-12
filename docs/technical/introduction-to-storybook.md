---
id: introduction-to-storybook
title: Introduction to storybook
sidebar_label: Introduction to storybook
keywords:
  - Introduction to storybook
---
Storybook is an open-source tool for developing and testing UI components in isolation. It can be used to create interactive previews of React components, which can be helpful for documenting components.

Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this [URL](https://sauced-components.netlify.app/).

To run storybook, use this command:

```sh
npm run storybook
```

## UI categories

Storybook is broken into several categories:

<ul>
<li><b>Button:</b> These are the button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons.</li>
<li><b>Cards:</b> These are the main container elements in the project. Each item represents a live component in their current form in the project.</li>
<li><b>Primitives: These are the basic styling of base HTML components.</b></li>
<li><b>Nav:</b> This is the main navigation bar for the project. There are two states, when there is no user logged in and when a user is logged in.</li>
<li><b>Footer:</b> This represents the various footers for the project.</li>
<li><b>Homepage:</b> This is the main component of the project homepage and shows the home page in its current form.</li>
<li><b>Miscellaneous:</b> These are components that currently don't fit neatly into the above categories.</li>
</ul>

## Making changes to storybook
This section details how to make changes to Storybook, mainly by creating new categories or UI elements.

### Adding a new category

1. Create a new file in the ```/stories``` directory. The name of the file should follow the naming convention of ```*Previous File Number + 1*-*Name of Story Capitalized*-stories.js```. For example, if the previous file in the directory is ```1-Button-stories.js```, then the name of the new file should be ```2-NewCategory-stories.js```.

2. In the new file, add the following code:
```
export default {
    title: "*Name of category*"
};
```

### Adding a new UI element

To add a new UI element to an existing category, add the following code to the file of that category:

```
export const *Name of UI Element* = () => (
// code for your new UI element
);
```
