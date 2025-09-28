<template>
  <div class="container mx-auto py-8">
    <div v-if="product" class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <img :src="product.image" :alt="product.name" class="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div class="md:w-1/2">
        <h1 class="text-4xl font-bold mb-4 text-textLight">{{ product.name }}</h1>
        <p class="text-textLight text-lg mb-6">{{ product.description }}</p>
        <p class="font-bold text-3xl text-accent mb-6">€{{ product.price.toFixed(2) }}</p>
        <AppButton variant="primary" @click="buyNow(product.id)">Buy with Stripe</AppButton>
        <div class="mt-4">
          <PayPalButton :product-id="product.id" :product-price="product.price" />
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4 text-textLight">Product Details</h2>
          <ul class="list-disc list-inside text-textLight">
            <li>Digital Product: Instant Download</li>
            <li>File Format: PDF, EPUB, MP3 (depending on product type)</li>
            <li>Delivery: Email with download link after purchase</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-xl text-textLight">
      <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AppButton from '~/components/AppButton.vue';
import PayPalButton from '~/components/PayPalButton.vue';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const route = useRoute();
const product = ref<Product | null>(null);

// Placeholder for fetching product details
const fetchProduct = (id: number): Product | undefined => {
  // In a real application, this would fetch data from an API
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'E-book: Success Habits',
      description: 'This e-book delves into the foundational principles and daily routines that empower individuals to achieve extraordinary success. Discover actionable strategies for goal setting, time management, and cultivating a resilient mindset.',
      image: 'https://via.placeholder.com/600x400',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Planner: Daily Productivity',
      description: 'Master your day with this comprehensive digital planner. Designed to help you prioritize tasks, track progress, and stay focused on your most important goals. Includes daily, weekly, and monthly layouts.',
      image: 'https://via.placeholder.com/600x400',
      price: 14.99,
    },
    {
      id: 3,
      name: 'Wallpaper Pack: Gold Quotes',
      description: 'Adorn your devices with a collection of stunning motivational quotes, beautifully designed with a minimalist black, white, and gold aesthetic. Perfect for keeping inspiration close at hand.',
      image: 'https://via.placeholder.com/600x400',
      price: 9.99,
    },
    {
      id: 4,
      name: 'Audiobook: Mindset Mastery',
      description: 'Transform your subconscious thinking patterns with this powerful audiobook. Learn techniques to overcome limiting beliefs, cultivate a growth mindset, and unlock your full potential. Perfect for on-the-go motivation.',
      image: 'https://via.placeholder.com/600x400',
      price: 24.99,
    },
    {
      id: 5,
      name: 'Journal: Gratitude & Growth',
      description: 'A guided digital journal designed to foster gratitude and personal growth. Prompts and exercises help you reflect on your successes, learn from challenges, and develop a more positive outlook.',
      image: 'https://via.placeholder.com/600x400',
      price: 12.99,
    },
    {
      id: 6,
      name: 'Course: Digital Product Creation',
      description: 'An in-depth video course guiding you through the entire process of creating, launching, and marketing your own digital products. From ideation to sales, learn everything you need to build a successful online business.',
      image: 'https://via.placeholder.com/600x400',
      price: 99.99,
    },
  ];
  return allProducts.find(p => p.id === id);
};

onMounted(() => {
  const productId = Number(route.params.id);
  if (!isNaN(productId)) {
    product.value = fetchProduct(productId) || null;
  }
});

const buyNow = async (productId: number) => {
  try {
    const response = await $fetch('/api/stripe/checkout', {
      method: 'POST',
      body: {
        productId: productId,
        quantity: 1, // For now, assume quantity is 1
      },
    });

    if (response && response.url) {
      window.location.href = response.url;
    }
  } catch (error) {
    console.error('Error during checkout:', error);
    alert('There was an error processing your payment. Please try again.');
  }
};
</script>
