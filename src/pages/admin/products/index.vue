<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Manage Products</h1>
      <NuxtLink to="/admin/products/new" class="btn btn-primary mb-6 inline-block">Add New Product</NuxtLink>

      <div v-if="products.length > 0" class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in products" :key="product.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ product.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{{ product.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">€{{ product.price.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <NuxtLink :to="`/admin/products/${product.id}`" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</NuxtLink>
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="text-center text-gray-600">No products found. Add a new product to get started!</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const products = ref<Product[]>([]);

const fetchProducts = async () => {
  try {
    const response = await $fetch<Product[]>('/api/admin/products');
    products.value = response;
  } catch (error) {
    console.error('Error fetching products:', error);
    alert('Failed to load products.');
  }
};

const deleteProduct = async (id: number) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await $fetch(`/api/admin/products/${id}`, {
        method: 'DELETE',
      });
      await fetchProducts(); // Refresh the list
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-gray-800 text-white hover:bg-gold hover:text-black;
}
</style>
