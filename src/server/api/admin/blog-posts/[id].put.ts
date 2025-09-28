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
  const postId = Number(event.context.params?.id);
  const body = await readBody(event);
  const updatedPostData: Partial<BlogPost> = body;

  if (isNaN(postId)) {
    throw createError({ statusCode: 400, message: 'Invalid blog post ID.' });
  }

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

  const postIndex = blogPosts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    throw createError({ statusCode: 404, message: 'Blog post not found.' });
  }

  blogPosts[postIndex] = { ...blogPosts[postIndex], ...updatedPostData };

  try {
    await fs.writeFile(blogPostsFilePath, JSON.stringify(blogPosts, null, 2), 'utf8');
    return blogPosts[postIndex];
  } catch (error) {
    console.error('Error writing blog posts file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save blog post data.' });
  }
});
