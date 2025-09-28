import { promises as fs } from 'fs';
import path from 'path';

const blogPostsFilePath = path.resolve(process.cwd(), 'blog-posts.json');

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

export default defineEventHandler(async () => {
  let blogPosts: BlogPost[] = [];
  try {
    const data = await fs.readFile(blogPostsFilePath, 'utf8');
    blogPosts = JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      blogPosts = [];
    } else {
      console.error('Error reading blog posts file:', error);
      throw createError({ statusCode: 500, message: 'Failed to read blog post data.' });
    }
  }
  return blogPosts;
});
