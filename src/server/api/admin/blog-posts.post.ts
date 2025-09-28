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

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newBlogPost: Omit<BlogPost, 'id'> = body;

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

  const lastId = blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) : 0;
  const postToAdd = { ...newBlogPost, id: lastId + 1 };
  blogPosts.push(postToAdd);

  try {
    await fs.writeFile(blogPostsFilePath, JSON.stringify(blogPosts, null, 2), 'utf8');
    return postToAdd;
  } catch (error) {
    console.error('Error writing blog posts file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save blog post data.' });
  }
});
