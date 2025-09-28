<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Add New Product</h1>
      <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form @submit.prevent="addProduct">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
            <input type="text" id="name" v-model="product.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea id="description" v-model="product.description" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div class="mb-4">
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input type="url" id="image" v-model="product.image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-6">
            <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price (€)</label>
            <input type="number" id="price" v-model.number="product.price" step="0.01" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="flex items-center justify-between">
            <AppButton type="submit" variant="primary" :disabled="loading">
              {{ loading ? 'Adding...' : 'Add Product' }}
            </AppButton>
            <NuxtLink to="/admin/products" class="text-gray-600 hover:text-gray-800">Cancel</NuxtLink>
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

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}

const product = ref<Product>({
  name: '',
  description: '',
  image: '',
  price: 0,
});

const loading = ref(false);
const message = ref('');
const messageType = ref('');

const addProduct = async () => {
  loading.value = true;
  message.value = '';
  messageType.value = '';

  try {
    await $fetch('/api/admin/products', {
      method: 'POST',
      body: product.value,
    });
    message.value = 'Product added successfully!';
    messageType.value = 'success';
    product.value = {
      name: '',
      description: '',
      image: '',
      price: 0,
    };
    navigateTo('/admin/products'); // Redirect to products list
  } catch (error: any) {
    console.error('Error adding product:', error);
    message.value = error.data?.message || 'Failed to add product.';
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
