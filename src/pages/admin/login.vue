<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your admin account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" name="username" type="text" autocomplete="username" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gold focus:border-gold focus:z-10 sm:text-sm"
              placeholder="Username" v-model="username">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gold focus:border-gold focus:z-10 sm:text-sm"
              placeholder="Password" v-model="password">
          </div>
        </div>

        <div>
          <AppButton type="submit" variant="primary" :full-width="true" :disabled="loading">
            {{ loading ? 'Signing In...' : 'Sign In' }}
          </AppButton>
        </div>
        <p v-if="message" :class="[messageType === 'error' ? 'text-red-600' : 'text-green-600', 'mt-4 text-center']">{{ message }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';

const username = ref('');
const password = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref('');

const login = async () => {
  loading.value = true;
  message.value = '';
  messageType.value = '';

  try {
    const response = await $fetch('/api/admin/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
    });

    if (response.success) {
      message.value = 'Login successful!';
      messageType.value = 'success';
      // In a real app, you'd store a token/session here and redirect
      navigateTo('/admin');
    } else {
      message.value = response.message || 'Login failed.';
      messageType.value = 'error';
    }
  } catch (error: any) {
    console.error('Login error:', error);
    message.value = error.data?.message || 'An error occurred during login.';
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};

// We don't need a layout for the login page, so we can set it to false
definePageMeta({
  layout: false,
});
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
