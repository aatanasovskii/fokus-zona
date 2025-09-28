<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Add New Blog Post</h1>
      <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form @submit.prevent="addBlogPost">
          <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input type="text" id="title" v-model="blogPost.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="excerpt" class="block text-gray-700 text-sm font-bold mb-2">Excerpt</label>
            <textarea id="excerpt" v-model="blogPost.excerpt" rows="2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div class="mb-4">
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input type="url" id="image" v-model="blogPost.image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="date" class="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="date" id="date" v-model="blogPost.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-6">
            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea id="content" v-model="blogPost.content" rows="8" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div class="flex items-center justify-between">
            <AppButton type="submit" variant="primary" :disabled="loading">
              {{ loading ? 'Adding...' : 'Add Blog Post' }}
            </AppButton>
            <NuxtLink to="/admin/blog" class="text-gray-600 hover:text-gray-800">Cancel</NuxtLink>
          </div>
          <p v-if="message" :class="[messageType === 'success' ? 'text-green-600' : 'text-red-600', 'mt-4']">{{ message }}</p>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

const blogPost = ref<BlogPost>({
  title: '',
  excerpt: '',
  image: '',
  date: '',
  content: '',
});

const loading = ref(false);
const message = ref('');
const messageType = ref('');

const addBlogPost = async () => {
  loading.value = true;
  message.value = '';
  messageType.value = '';

  try {
    await $fetch('/api/admin/blog-posts', {
      method: 'POST',
      body: blogPost.value,
    });
    message.value = 'Blog post added successfully!';
    messageType.value = 'success';
    blogPost.value = {
      title: '',
      excerpt: '',
      image: '',
      date: '',
      content: '',
    };
    navigateTo('/admin/blog'); // Redirect to blog posts list
  } catch (error: any) {
    console.error('Error adding blog post:', error);
    message.value = error.data?.message || 'Failed to add blog post.';
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-gray-800 text-white hover:bg-gold hover:text-black;
}
</style>
