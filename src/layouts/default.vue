<template>
  <div class="min-h-screen flex flex-col bg-primary text-textLight">
    <header class="bg-primary text-textLight p-4">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <NuxtLink to="/" class="flex items-center text-2xl font-bold text-textLight space-x-2">
          <img src="/logo.png" alt="Logo" class="h-[1em] w-[1em] object-contain" />
          Focus Zona
        </NuxtLink>
        <ul class="flex flex-wrap justify-center space-x-4 mt-2 md:mt-0">
          <li><NuxtLink to="/shop" class="hover:text-accent">Shop</NuxtLink></li>
          <li><NuxtLink to="/blog" class="hover:text-accent">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-accent">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-accent">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-primary text-textLight p-4 text-center">
      <p>&copy; Focus Zona. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
.text-gold {
  color: #FFD700; /* Gold color */
}
</style>
