const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_KEY = 'phFNkJfwvYbHrsxY2SRaBJuG'; // Replace with your Dev.to API key
const USERNAME = 'bekahhw';
const BLOG_DIR = './blog'; // Directory to save blog posts
const DATE_FILTER = new Date('2023-04-13'); // Filter for posts after this date

if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR);
}

const fetchPosts = async (page = 1) => {
  const response = await axios.get(`https://dev.to/api/articles`, {
    headers: { 'api-key': API_KEY },
    params: { username: USERNAME, page: page, per_page: 100 }
  });

  return response.data;
};

const fetchFullPost = async (id) => {
  const response = await axios.get(`https://dev.to/api/articles/${id}`, {
    headers: { 'api-key': API_KEY }
  });

  return response.data;
};

const savePostToFile = (post) => {
  const date = new Date(post.published_at);
  const formattedDate = date.toISOString().split('T')[0];
  const titleSlug = post.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
  const fileName = `${formattedDate}-${titleSlug}.md`;
  const filePath = path.join(BLOG_DIR, fileName);
  const tags = Array.isArray(post.tag_list) ? post.tag_list.join(', ') : '';

  const frontmatter = `---
title: ${post.title}
tags: [${tags}]
authors: BekahHW
slug: ${post.slug}
description: ${post.description}
image: ${post.cover_image || post.social_image}
---

`;

  const content = frontmatter + post.body_markdown;

  fs.writeFileSync(filePath, content);
  console.log(`Saved: ${fileName}`);
};

const main = async () => {
  let page = 1;
  let posts;

  do {
    posts = await fetchPosts(page);

    for (const post of posts) {
      const publishedDate = new Date(post.published_at);
      if (publishedDate > DATE_FILTER) {
        const fullPost = await fetchFullPost(post.id);
        savePostToFile(fullPost);
      }
    }

    page += 1;
  } while (posts.length > 0);

  console.log('All posts have been saved.');
};

main().catch(console.error);
