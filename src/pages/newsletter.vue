<template>
  <div class="container mx-auto py-8 text-center">
    <h1 class="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
    <p class="text-lg text-gray-700 mb-6">
      Get free motivation, exclusive offers, and updates directly to your inbox!
    </p>
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form @submit.prevent="subscribe">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input type="email" id="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your@email.com" required>
        </div>
        <AppButton type="submit" variant="primary" :disabled="loading">
          {{ loading ? 'Subscribing...' : 'Subscribe' }}
        </AppButton>
        <p v-if="message" :class="[messageType === 'success' ? 'text-green-600' : 'text-red-600', 'mt-4']">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';

const email = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('');

const subscribe = async () => {
  loading.value = true;
  message.value = '';
  messageType.value = '';

  try {
    const response = await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value },
    });
    message.value = response.message;
    messageType.value = 'success';
    email.value = '';
  } catch (error: any) {
    console.error('Subscription error:', error);
    message.value = error.data?.message || 'An error occurred. Please try again.';
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};
</script>
