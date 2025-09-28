<template>
  <div class="container mx-auto py-8">
    <section class="hero bg-cover bg-center h-96 flex items-center justify-center text-textLight rounded-lg shadow-lg"
      style="background-image: url('https://via.placeholder.com/1500x500/000000/FFFFFF?text=Motivational+Background');">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">Unlock Your Potential</h1>
        <p class="text-xl mb-8">Daily motivation for a better you.</p>
        <div class="space-x-4">
          <NuxtLink to="/shop" class="btn btn-secondary">Shop Now</NuxtLink>
          <NuxtLink to="/newsletter" class="btn btn-secondary">Get Free Motivation</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Products Section -->
    <section class="py-12">
      <h2 class="text-3xl font-bold text-center mb-8 text-textLight">Latest Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Product Card 1 -->
        <div class="bg-secondary rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Product 1" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="font-bold text-xl mb-2 text-textLight">E-book: Success Habits</h3>
            <p class="text-textLight">Learn the habits of highly successful people.</p>
            <p class="font-bold text-lg mt-2 text-textLight">€19.99</p>
            <button class="btn btn-primary w-full mt-4">View Product</button>
          </div>
        </div>
        <!-- Product Card 2 -->
        <div class="bg-secondary rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Product 2" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="font-bold text-xl mb-2 text-textLight">Planner: Daily Productivity</h3>
            <p class="text-textLight">Organize your day for maximum efficiency.</p>
            <p class="font-bold text-lg mt-2 text-textLight">€14.99</p>
            <button class="btn btn-primary w-full mt-4">View Product</button>
          </div>
        </div>
        <!-- Product Card 3 -->
        <div class="bg-secondary rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Product 3" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="font-bold text-xl mb-2 text-textLight">Wallpaper Pack: Gold Quotes</h3>
            <p class="text-textLight">Motivational quotes for your desktop and mobile.</p>
            <p class="font-bold text-lg mt-2 text-textLight">€9.99</p>
            <button class="btn btn-primary w-full mt-4">View Product</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Motivational Quotes Preview Section -->
    <section class="py-12 bg-secondary rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center mb-8 text-textLight">Inspirational Quotes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        <!-- Quote Card 1 -->
        <div class="bg-primary p-6 rounded-lg shadow-md text-center">
          <p class="italic text-lg mb-4 text-textLight">"Put your heart, mind, and soul into even your smallest acts. This is the secret of success."</p>
          <p class="font-semibold text-textLight">- Swami Sivananda</p>
        </div>
        <!-- Quote Card 2 -->
        <div class="bg-primary p-6 rounded-lg shadow-md text-center">
          <p class="italic text-lg mb-4 text-textLight">"The only way to do great work is to love what you do."</p>
          <p class="font-semibold text-textLight">- Steve Jobs</p>
        </div>
        <!-- Quote Card 3 -->
        <div class="bg-primary p-6 rounded-lg shadow-md text-center">
          <p class="italic text-lg mb-4 text-textLight">"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
          <p class="font-semibold text-textLight">- Winston Churchill</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add component-specific logic here if needed
</script>

<style scoped>
/* Add any component-specific styles here */
.btn {
  @apply py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out;
}
.btn-primary {
  @apply bg-black text-white hover:bg-gold hover:text-black;
}
.btn-secondary {
  @apply bg-gold text-black hover:bg-black hover:text-white border border-gold;
}
</style>
