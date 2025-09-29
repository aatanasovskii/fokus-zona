<template>
  <div class="home-container">

    <section class="hero-section">

      <div class="hero-content">
        <h1 class="hero-title">Unlock Your Potential</h1>
        <p class="hero-subtitle">Daily motivation for a better you.</p>
        <div class="hero-buttons">
          <NuxtLink to="/shop" class="btn btn-secondary">Shop Now</NuxtLink>
          <NuxtLink to="/newsletter" class="btn btn-secondary">Get Free Motivation</NuxtLink>
        </div>
      </div>

    </section>

    <section class="products-section">

      <h2 class="section-title">Latest Products</h2>
      <div class="products-grid">

        <div class="product-card">
          <img src="https://via.placeholder.com/400x300" alt="Product 1" class="product-image">
          <div class="product-content">
            <h3 class="product-title">E-book: Success Habits</h3>
            <p class="product-description">Learn the habits of highly successful people.</p>
            <p class="product-price">€19.99</p>
            <button class="btn btn-primary w-full">View Product</button>
          </div>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/400x300" alt="Product 2" class="product-image">
          <div class="product-content">
            <h3 class="product-title">Planner: Daily Productivity</h3>
            <p class="product-description">Organize your day for maximum efficiency.</p>
            <p class="product-price">€14.99</p>
            <button class="btn btn-primary w-full">View Product</button>
          </div>
        </div>

        <div class="product-card">
          <img src="https://via.placeholder.com/400x300" alt="Product 3" class="product-image">
          <div class="product-content">
            <h3 class="product-title">Wallpaper Pack: Gold Quotes</h3>
            <p class="product-description">Motivational quotes for your desktop and mobile.</p>
            <p class="product-price">€9.99</p>
            <button class="btn btn-primary w-full">View Product</button>
          </div>
        </div>

      </div>
    </section>

    <section class="quotes-section">
      <h2 class="section-title">Inspirational Quotes</h2>
      <div class="quotes-grid">
        <div class="quote-card">
          <p class="quote-text">"Put your heart, mind, and soul into even your smallest acts. This is the secret of success."</p>
          <p class="quote-author">- Swami Sivananda</p>
        </div>

        <div class="quote-card">
          <p class="quote-text">"The only way to do great work is to love what you do."</p>
          <p class="quote-author">- Steve Jobs</p>
        </div>

        <div class="quote-card">
          <p class="quote-text">"Success is not final, failure is not fatal: It is the courage to continue that counts."</p>
          <p class="quote-author">- Winston Churchill</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Component-specific logic can be added here if needed
</script>

<style src="./index.css"></style>
