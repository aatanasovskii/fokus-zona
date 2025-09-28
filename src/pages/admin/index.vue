<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Products</h2>
          <p class="text-gray-700 mb-4">Manage your digital products: add, edit, or delete items.</p>
          <NuxtLink to="/admin/products" class="btn btn-primary">Go to Products</NuxtLink>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Blog Posts</h2>
          <p class="text-gray-700 mb-4">Create, modify, or remove blog articles for your audience.</p>
          <NuxtLink to="/admin/blog" class="btn btn-primary">Go to Blog Posts</NuxtLink>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold mb-4">Newsletter Subscribers</h2>
          <p class="text-gray-700 mb-4">View and manage your newsletter subscriber list.</p>
          <NuxtLink to="/admin/subscribers" class="btn btn-primary">View Subscribers</NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
// No specific logic needed for the admin dashboard for now.
</script>

<style scoped>
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-gray-800 text-white hover:bg-gold hover:text-black;
}
</style>
