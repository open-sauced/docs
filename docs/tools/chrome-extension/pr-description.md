---
id: pr-description
title: "PR Description"
sidebar_label: "PR Description"
keywords: 
- "ai" 
- "pr descriptions" 
- "pull request overview" 
- "pr details" 
- "pr review description" 
- "Description Guidelines" 
- "Contribution etiquette" 
- "Pull Request Insight" 
- "PR Context" 
- "pull request description" 
---

The OpenSauced Chrome extension will help you create a PR based on the configuration you have in the extension. It will enable you to create the summary based on either commit messages, the difference between the files, or both. You can even set the message's length and tone using the same settings.

_**Note**: This feature is not available on private repositories._

![generate pr description](../../../static/gif/pr-description.gif)

You can use these settings to set the strictness and the tone of the generated AI. Below is the explanation of the settings:

- **Description Length**: The output length.
- **Temperature**: The similarity between the input text and the output, higher temperature mean more randomness, lower temperature means more strict to the input.
- **Max Input Length.**
- **Description Language:** Right now, this feature supports: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Korean.
- **Description Tone:** The tone of the output: Exciting, Persuasive, Informative, Humorous, Formal.
- **Description Source:** The source of the description that our AI will use to get the output it can be the next: **Commit Messages** or **The diff between the files** or **both**.

![Setting screenshot](https://user-images.githubusercontent.com/18273833/241760972-aa10eabe-3c01-4921-956a-ab85bada1575.png)

![ezgif-3-43e056fc1f](https://github.com/open-sauced/docs.opensauced.pizza/assets/18273833/fa19fa8e-e652-461c-8df4-6e959c9b9943)

[Example PR](https://github.com/open-sauced/insights/pull/1197), using the next options: both in the description source, 500 for output length and 3900 max input length, temperature 0.7.

**Exciting:** This PR fixes the follow call and adds a `FollowUser` function to the `contributor-highlight-card`. The code has been linted and merged from the `beta` branch. `FollowUser` function allows users to follow/unfollow contributors. Copy link and follow/unfollow options are now available in the dropdown menu.

**Persuasive:** This PR fixes the follow call and linting issues in the `ContributorHighlightCard` component. It also merges the `beta` branch into `fix-follow-check`. A new `FollowUser` function has been added to handle follow/unfollow functionality. This PR ensures a smoother user experience.

**Informative:** This PR fixes the follow call and linting issues in the `ContributorHighlightCard` component. A new function `FollowUser` has been added to handle the follow/unfollow functionality. The `useFollowUser` hook has been moved inside this function. The `FollowUser` function is now used in place of the previous follow/unfollow code block. The code has been tested and reviewed.

**Humorous:** This PR fixes the follow call and also lints the file. We've also added a new `FollowUser` function to make the code more readable. Now you can follow/unfollow contributors with ease. We've also merged the `beta` branch into `fix-follow-check`.

**Formal:** This PR fixes the follow call and linting issues in the `ContributorHighlightCard` component. A new function `FollowUser` has been added to handle the follow/unfollow functionality. The `useFollowUser` hook has been moved inside this function. The `FollowUser` function is now used in place of the previous follow/unfollow code block. This PR also merges the `beta` branch into `fix-follow-check`.
