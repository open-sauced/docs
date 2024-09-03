---
title: "Streamline Your Contributions: Mastering Issue Forms and PR Templates"
tags:
  [
    "open source",
    "issue forms",
    "pull request templates",
    "issue",
    "open source issue",
    "pull request",
    "open source pull request",
    "open source for beginners",
    "tutorial",
    "open source tutorial",
  ]
authors: AdiatiAyu
slug: mastering-issue-forms-and-pr-templates
description: Learn about how to fill issue forms and pull request templates.
---

As an open source maintainer, one of my daily tasks is reminding contributors to complete their pull request (PR) templates or asking them to provide missing information on their issues. Although the [saved replies](https://docs.github.com/en/get-started/writing-on-github/working-with-saved-replies/about-saved-replies) feature on GitHub helps me a lot, it still takes me time to personalize replies based on the case. This is a challenge not only for me but also for most maintainers.

It is very important to take the time to fill out these forms and templates completely and accurately. This not only makes the process smoother and faster for everyone involved but also ensures that your contribution is given the attention and consideration it deserves, benefiting both you as a contributor and us as maintainers.

<!-- truncate -->

So, in this blog post, I will explain why completing them is crucial and how you can do it effectively.

## What are Issue Forms and PR Templates, and Why are They Important?

Issue forms and PR templates are structured questions or guidelines you encounter when creating a new issue or PR in a repository. They serve as a roadmap, guiding you through filling in information and ensuring all details reviewers need are provided.

These forms and templates are essential for several reasons:

1. **Clear Communication:** They ensure you provide all the necessary information for reviewers to understand your changes. This reduces back-and-forth communication and prevents misunderstandings.
2. **Efficient Review Process:** By providing structured information, maintainers can more easily review the contribution and provide feedback. This speeds up the review process, benefiting both contributors and the project.
3. **Consistency:** Using the same forms and templates for all contributions creates consistency across issues and PRs. This makes searching, sorting, and managing contributions easier, ensuring no missing information.

## Filling In the Forms and Templates

When filling in these forms and templates, you should keep these in mind:

- **Follow the Instructions:** Read them carefully, pay attention to the instructions, and fill in all sections that don't say "optional" or "for the staff or core members to fill." If there are specific instructions, make sure to follow them.

- **Be as Detailed as Possible:** Provide a short and clear title and detailed description of your changes or proposal. Include specific examples and steps to reproduce issues or explain the reasons behind your PR.

- **Don't Delete Anything:** Even if you think a section doesn't apply to your contribution, don't delete it. Instead, leave a comment explaining why it's not relevant or provide a brief "N/A" response. If you're unsure what to fill in, you can look at previous issues and PRs. See how other contributors have done that.

### Filling In Issue Forms

Various issue forms can be provided in a project for different purposes, such as bug reports and feature requests. Issue forms are easier to navigate and fill out. Instructions in these forms are usually written right below the input label, as shown in the red boxes below, or as a placeholder.

![Issue form on GitHub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ob4ibqvbr1w5mjigxrrc.png)

Fill in all input with as detailed information as possible. If you, for example, request a new feature, convince the maintainers why they want to add this feature to the project in the description. If you're reporting a bug, describe the bug in detail, such as what you encountered, the expected behavior, and steps to reproduce the bug. Provide visual aids such as screenshots or screen recordings if the bug is a UI-related problem.

### Filling In PR Templates

PR templates are trickier than issues because they are shown and must be filled out in Markdown.

But I have some tips that I hope can help you when filling in PR templates:

- **Preview mode:** Click the "Preview" tab to see the sections you must fill in before you do so. It will be easier for you to notice them in this mode, but note that you cannot edit in the preview mode.
  ![Preview mode GitHub issue form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4ifvzf7w8gb10hii082.png)
- **Headings**: Now that you're back in writing mode, pay attention to the headings with `#` symbols. You need to provide information right under these headings. **Don't skip any heading**.
- **Comments**: The instructions on what information you must provide are usually written in the comments under each heading. Read and follow all instructions thoroughly.

Here is an example of a PR template in Markdown at OpenSauced:

```markdown
## Description

<!--
Please do not leave this blank
This PR [adds/removes/fixes/replaces] the [feature/bug/etc].
-->

## Related Tickets & Documents

<!--
Please use this format link issue numbers: Fixes #123
https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
-->

## Mobile & Desktop Screenshots/Recordings

<!-- Visual changes require screenshots -->

## Steps to QA

<!--
Please provide some steps for the reviewer to test your change. If you have wrote tests, you can mention that here instead.

1. Click a link
2. Do this thing
3. Validate you see the thing working
-->

## Tier (staff will fill in)

- [ ] Tier 1
- [ ] Tier 2
- [ ] Tier 3
- [ ] Tier 4

## [optional] What gif best describes this PR or how it makes you feel?

<!-- note: PRs with deleted sections will be marked invalid -->

<!--
  For Work In Progress Pull Requests, please use the Draft PR feature,
  see https://github.blog/2019-02-14-introducing-draft-pull-requests/ for further details.

  For a timely review/response, please avoid force-pushing additional
  commits if your PR already received reviews or comments.

  Before submitting a Pull Request, please ensure you've done the following:
  - 📖 Read the Open Sauced Contributing Guide: https://github.com/open-sauced/.github/blob/main/CONTRIBUTING.md.
  - 📖 Read the Open Sauced Code of Conduct: https://github.com/open-sauced/.github/blob/main/CODE_OF_CONDUCT.md.
  - 👷‍♀️ Create small PRs. In most cases, this will be possible.
  - ✅ Provide tests for your changes.
  - 📝 Use descriptive commit messages.
  - 📗 Update any related documentation and include any relevant screenshots.
-->
```

---

Here is a mini challenge for you. After looking at the PR template above, try to answer the questions below. You can also share your answers in the comments.

1. How many sections are there in the template that you must fill in?
2. What is the format to link a related issue?
3. An important note is included in this template. If you don't follow it, your PR might not be accepted. What does this note say?

---

Now, let's continue where we left off. When filling in the PR template, you must ensure you provide the following:

- **Short and clear title**. Your title needs to describe the change that you make. For example, "fix: broken link to the About page".
- **Detailed description**. Explain your changes in as much detail as possible. What did you fix? How did you fix it? Did you add a new function or modify a function? Consider using bullet points if there are several changes and link the resources you use to back up your changes. Here is [an example](https://github.com/open-sauced/app/pull/2534): <br/>

  ```markdown
  ## Description

  This PR fixes the long repos' names that are partially stacked at the back of another name in the search input of the Explore tab.

  The changes made here:

  - Add Tailwind className:

    - [`truncate`](https://tailwindcss.com/docs/text-overflow#truncate) to truncate overflowing text.
    - [`tracking-tighter`](https://tailwindcss.com/docs/letter-spacing) to reduce letter spacing for better space.
    - `inline-block` to the `<span>` .

  - Remove Tailwind classNames:
    - `overflow-hidden` as it's [included in the `truncate`](https://tailwindcss.com/docs/text-overflow).
    - `break-all` as we don't want to add line breaks.
  ```

<br/>

- **Related issue(s):** Most open source projects don't receive unsolicited PRs (PRs that are not accompanied by an issue). One reason is to avoid spam PRs that might introduce irrelevant, low-quality, or harmful changes to the project's codebase.

  So, when you create a PR, you want to include the number of the related issue. Add a keyword of "Closes", "Fixes", or "Resolves" in front of the issue number, like "Closes #123". [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) will automatically close the issue once the PR gets merged. You can find the issue number right after the issue's title.

  ![GitHub issue number](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ech5d96dzjnlibowks3c.png)

- **Screenshots or screen recordings:** If your changes relate to UI improvement, consider adding screenshots or screen recordings to show the before-and-after changes.

## Conclusion

Taking the time to fill out issue forms and PR templates thoroughly demonstrates respect for the project and its maintainers. It also ensures that your contributions are well-received, efficiently reviewed, and more likely to be merged. Remember, every project is unique, so always refer to the guidelines and templates the maintainers provide.

If you don't know, May is [Maintainer Month](https://dev.to/opensauced/maintainer-month-enhancing-support-for-open-source-maintainers-36km). You can show your love and appreciation to open source maintainers in many ways, including completing those forms.
