<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Edit Product</h1>
      <div v-if="product.id" class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form @submit.prevent="updateProduct">
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
              {{ loading ? 'Updating...' : 'Update Product' }}
            </AppButton>
            <NuxtLink to="/admin/products" class="text-gray-600 hover:text-gray-800">Cancel</NuxtLink>
          </div>
          <p v-if="message" :class="[messageType === 'success' ? 'text-green-600' : 'text-red-600', 'mt-4']">{{ message }}</p>
        </form>
      </div>
      <p v-else class="text-center text-gray-600">Loading product details...</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '~/components/AppButton.vue';

interface Product {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const route = useRoute();
const product = ref<Product>({
  name: '',
  description: '',
  image: '',
  price: 0,
});

const loading = ref(false);
const message = ref('');
const messageType = ref('');

const fetchProduct = async (id: number) => {
  try {
    const response = await $fetch<Product>(`/api/admin/products/${id}`);
    product.value = response;
  } catch (error) {
    console.error('Error fetching product:', error);
    alert('Failed to load product details.');
  }
};

const updateProduct = async () => {
  if (!product.value.id) return;

  loading.value = true;
  message.value = '';
  messageType.value = '';

  try {
    await $fetch(`/api/admin/products/${product.value.id}`, {
      method: 'PUT',
      body: product.value,
    });
    message.value = 'Product updated successfully!';
    messageType.value = 'success';
    navigateTo('/admin/products'); // Redirect to products list
  } catch (error: any) {
    console.error('Error updating product:', error);
    message.value = error.data?.message || 'Failed to update product.';
    messageType.value = 'error';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const productId = Number(route.params.id);
  if (!isNaN(productId)) {
    fetchProduct(productId);
  }
});
</script>

<style scoped>
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-gray-800 text-white hover:bg-gold hover:text-black;
}
</style>
