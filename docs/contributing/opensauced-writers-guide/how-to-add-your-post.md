---
id: writers-guide
title: "OpenSauced Writers Guide"
sidebar_label: "OpenSauced Writers Guide"
keywords: 
- "writers guide" 
- "open source writers guide" 
- "open source writer" 
---

Welcome to our Writers Contributor Guide. This will walk you through the steps of how to add your blog post to our community resources using the docs repository.

## Repeat Authors: Adding to `authors.yml`

For regular blog post authors, we should declare those authors globally in the configuration file. Below is an example of how to add an author to the `authors.yml` file:

**Location:** `/blog/authors.yml`

**Example:**
```yaml
BekahHW:
  name: Bekah Hawrot Weigel
  title: Developer Experience Lead
  url: https://twitter.com/BekahHW
  image_url: https://github.com/BekahHW.png
  email: Bekah@opensauced.pizza
  twitter: BekahHW

nickytonline:
  name: Nick Taylor
  title: AI Engineer 
  url: https://www.nickyt.co/
  image_url: https://github.com/nickytonline.png
```

### Tips

All authors should include their name and an image URL. The title, URL, and email are optional fields. We do not recommend using your personal email. If you don't currently have a job title, feel free to use a volunteer title or a title that best describes your role in the community. For instance, you could write, "OpenSauced Community Writer."

If you do want to include a URL, you can include your OpenSauced profile, X, LinkedIn, personal website, etc.


## Adding Blog Posts

To publish in the blog, create a Markdown file within the blog directory. Note that we have subdirectories for each year, so writers should add their posts to the folder that corresponds with the year.

**Example Path:** `/blog/2024/06-03-welcome-opensauced.md`


:::info

You'll notice that many of the files include the year. These were created before we started using the year subdirectories. Either way works, but we're moving towards the year subdirectories for organization and omitting the year in the file name.

:::

**Markdown Example:**
```markdown
docs/blog/2024/06-03-welcome-opensauced.md
---
title: Welcome to OpenSauced
description: This is my first post on OpenSauced.
slug: welcome-opensauced
authors: BekahHW
tags: [hello, opensauced]
hide_table_of_contents: false
---

Welcome to this blog. This blog is created with [**OpenSauced**](https://opensauced.pizza).

<!-- truncate -->

This is my first post on OpenSauced.

A whole bunch of exploration to follow.
```

### Front Matter

The front matter is the metadata at the top of the Markdown file. It includes the title, description, slug, authors, tags, and hide_table_of_contents.

- **title:** The title of the blog post.
- **description:** A brief description of the blog post.
- **slug:** The slug is the URL-friendly version of the title. It should be lowercase and hyphenated.
- **authors:** The author of the blog post. If there are multiple authors that appear in the authors.yml, this is what it should look like:

```markdown
---
authors:[BekahHW, nickytonline]
---
```
- **tags:** Tags are used to categorize the blog post. They should be lowercase and separated by commas and highlight the main topics of the blog post.
- **hide_table_of_contents:** This is a boolean value that determines whether the table of contents will be displayed. If you want to hide the table of contents, set it to `true`.

### Blog List

The blog's index page (a custom path for OpenSauced at `/community-resources`) is the blog list page, where all blog posts are collectively displayed.

Use the `<!--truncate-->` marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above `<!--truncate-->` will be part of the summary. Note that the portion above the truncate marker must be standalone renderable Markdown. 

**Markdown Example:**
```markdown
website/blog/my-post.md
---
title: Markdown blog truncation example
---

All these will be part of the blog post summary.

<!-- truncate -->

But anything from here on down will not be.
```

### Image Usage

We are not going to use images in the front matter. The rest of the post should be in markdown format. 

If you want to include images within your post, please use only images that directly relate to the content of the post. If you need to add an image to the repository (rather than linking from somewhere else), you can add it to the `/static` directory in the `gif` or `img` subdirectory.

By following these guidelines, you will ensure consistency and ease of maintenance across our blog posts. Happy writing!