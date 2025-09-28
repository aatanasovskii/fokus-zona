<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Manage Blog Posts</h1>
      <NuxtLink to="/admin/blog/new" class="btn btn-primary mb-6 inline-block">Add New Blog Post</NuxtLink>

      <div v-if="blogPosts.length > 0" class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="post in blogPosts" :key="post.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ post.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{{ post.title }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ post.date }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <NuxtLink :to="`/admin/blog/${post.id}`" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</NuxtLink>
                <button @click="deletePost(post.id)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="text-center text-gray-600">No blog posts found. Add a new blog post to get started!</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

const blogPosts = ref<BlogPost[]>([]);

const fetchBlogPosts = async () => {
  try {
    const response = await $fetch<BlogPost[]>('/api/admin/blog-posts');
    blogPosts.value = response;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    alert('Failed to load blog posts.');
  }
};

const deletePost = async (id: number) => {
  if (confirm('Are you sure you want to delete this blog post?')) {
    try {
      await $fetch(`/api/admin/blog-posts/${id}`, {
        method: 'DELETE',
      });
      await fetchBlogPosts(); // Refresh the list
      alert('Blog post deleted successfully!');
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('Failed to delete blog post.');
    }
  }
};

onMounted(fetchBlogPosts);
</script>

<style scoped>
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-gray-800 text-white hover:bg-gold hover:text-black;
}
</style>
