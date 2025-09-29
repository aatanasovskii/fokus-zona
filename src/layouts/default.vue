<template>
  <div class="layout-container">
    <header class="layout-header">
      <nav class="layout-nav">
        <NuxtLink to="/" class="layout-logo">
          <img src="/logo.png" alt="Logo" class="layout-logo-img" />
          Focus Zona
        </NuxtLink>

        <ul class="layout-menu">
          <li><NuxtLink to="/shop" class="layout-link">Shop</NuxtLink></li>
          <li><NuxtLink to="/blog" class="layout-link">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" class="layout-link">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="layout-link">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="layout-main">
      <slot />
    </main>

    <footer class="layout-footer">
      <p>&copy; Focus Zona. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No script needed for layout
</script>

<style src="./default.css"></style>
