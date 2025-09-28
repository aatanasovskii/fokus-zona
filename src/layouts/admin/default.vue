<template>
  <div class="min-h-screen flex flex-col bg-primary text-textLight">
    <header class="bg-primary text-textLight p-4 shadow-md">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <NuxtLink to="/admin" class="text-2xl font-bold text-accent">Admin Dashboard</NuxtLink>
        <ul class="flex flex-wrap justify-center space-x-4 mt-2 md:mt-0">
          <li><NuxtLink to="/admin/products" class="hover:text-accent">Products</NuxtLink></li>
          <li><NuxtLink to="/admin/blog" class="hover:text-accent">Blog Posts</NuxtLink></li>
          <li><NuxtLink to="/" class="hover:text-accent">View Site</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="flex-grow container mx-auto py-8">
      <slot />
    </main>
    <footer class="bg-primary text-textLight p-4 text-center mt-8">
      <p>&copy; 2025 Fokus Zona Admin. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
.text-gold {
  color: #FFD700; /* Gold color */
}
</style>
