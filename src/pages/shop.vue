<template>
  <div class="container mx-auto py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-textLight">Our Products</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

// Placeholder for product data
const products: Product[] = [
  {
    id: 1,
    name: 'E-book: Success Habits',
    description: 'Learn the habits of highly successful people.',
    image: 'https://via.placeholder.com/400x300',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Planner: Daily Productivity',
    description: 'Organize your day for maximum efficiency.',
    image: 'https://via.placeholder.com/400x300',
    price: 14.99,
  },
  {
    id: 3,
    name: 'Wallpaper Pack: Gold Quotes',
    description: 'Motivational quotes for your desktop and mobile.',
    image: 'https://via.placeholder.com/400x300',
    price: 9.99,
  },
  {
    id: 4,
    name: 'Audiobook: Mindset Mastery',
    description: 'Transform your thinking for ultimate success.',
    image: 'https://via.placeholder.com/400x300',
    price: 24.99,
  },
  {
    id: 5,
    name: 'Journal: Gratitude & Growth',
    description: 'Cultivate a positive mindset with daily reflections.',
    image: 'https://via.placeholder.com/400x300',
    price: 12.99,
  },
  {
    id: 6,
    name: 'Course: Digital Product Creation',
    description: 'Learn to create and sell your own digital products.',
    image: 'https://via.placeholder.com/400x300',
    price: 99.99,
  },
];
</script>
