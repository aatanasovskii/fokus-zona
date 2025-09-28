<template>
  <div class="container mx-auto py-8">
    <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>
    <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <p class="text-lg text-gray-700 mb-6 text-center">
        Have a question or just want to say hello? Fill out the form below or reach out to us on social media.
      </p>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" v-model="formData.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" v-model="formData.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
        </div>
        <div class="mb-6">
          <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" v-model="formData.message" rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <div class="flex items-center justify-between">
          <AppButton type="submit" variant="primary">Send Message</AppButton>
        </div>
      </form>

      <div class="mt-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Find Us On</h2>
        <div class="flex justify-center space-x-6">
          <a href="https://www.instagram.com/focus.zona" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-gold text-4xl">
            <i class="fab fa-instagram"></i> <!-- Placeholder for Instagram icon -->
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-gold text-4xl">
            <i class="fab fa-facebook"></i> <!-- Placeholder for Facebook icon -->
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-gold text-4xl">
            <i class="fab fa-twitter"></i> <!-- Placeholder for Twitter icon -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message! We will get back to you soon.');
  // In a real application, you would send this data to an API endpoint
  // Example: await $fetch('/api/contact', { method: 'POST', body: formData.value });
  formData.value = {
    name: '',
    email: '',
    message: '',
  };
};
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
