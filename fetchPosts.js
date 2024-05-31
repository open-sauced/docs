const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_KEY = 'Teh32QoZGrUTBvNha8euLVBN'; // Replace with your Dev.to API key
const USERNAME = 'bekahhw';
const BLOG_DIR = './blog'; // Directory to save blog posts
const START_DATE = new Date('2023-04-13'); // Start date filter
const END_DATE = new Date('2024-02-27'); // End date filter

if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR);
}

const fetchPosts = async (page = 1) => {
  try {
    const response = await axios.get(`https://dev.to/api/articles`, {
      headers: { 'api-key': API_KEY },
      params: { username: USERNAME, page: page, per_page: 100 }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.response ? error.response.data : error.message);
    return [];
  }
};

const fetchFullPost = async (id) => {
  try {
    const response = await axios.get(`https://dev.to/api/articles/${id}`, {
      headers: { 'api-key': API_KEY }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching full post ${id}:`, error.response ? error.response.data : error.message);
    return null;
  }
};

const convertEmbeds = (content) => {
  return content.replace(/{% embed (.*?) %}/g, (match, p1) => {
    return `[${p1}](${p1})`;
  });
};

const savePostToFile = (post) => {
  const date = new Date(post.published_at);
  const formattedDate = date.toISOString().split('T')[0];
  const titleSlug = post.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
  const fileName = `${formattedDate}-${titleSlug}.md`;
  const filePath = path.join(BLOG_DIR, fileName);

  const tags = Array.isArray(post.tag_list) ? post.tag_list.map(tag => `"${tag}"`).join(', ') : '';
  const title = post.title.includes(':') ? `"${post.title.replace(/"/g, '\\"')}"` : post.title.replace(/"/g, '\\"');
  const frontmatter = `---
title: ${title}
tags: [${tags}]
authors: BekahHW
slug: ${post.slug}
description: "${post.description.replace(/"/g, '\\"')}"
image: ${post.cover_image || post.social_image || ''}
---

`;

  const content = frontmatter + convertEmbeds(post.body_markdown || '');

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
      if (publishedDate >= START_DATE && publishedDate <= END_DATE) {
        const fullPost = await fetchFullPost(post.id);
        if (fullPost) {
          savePostToFile(fullPost);
        }
      }
    }

    page += 1;
  } while (posts.length > 0);

  console.log('All posts have been saved.');
};

main().catch(console.error);