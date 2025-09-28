<template>
  <div class="container mx-auto py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-textLight">Our Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="article in articles" :key="article.id" class="bg-secondary rounded-lg shadow-md overflow-hidden">
        <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="font-bold text-xl mb-2 text-textLight">{{ article.title }}</h3>
          <p class="text-textLight text-sm mb-4">{{ article.date }}</p>
          <p class="text-textLight">{{ article.excerpt }}</p>
          <NuxtLink :to="`/blog/${article.id}`" class="text-accent hover:underline mt-4 inline-block">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string; // Full content for the detail page
}

// Placeholder for blog articles
const articles: Article[] = [
  {
    id: 1,
    title: 'The Power of Positive Thinking',
    excerpt: 'Discover how a positive mindset can transform your life and help you achieve your goals.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-09-01',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    title: '10 Habits of Highly Productive People',
    excerpt: 'Learn the secrets to boosting your productivity and making the most of your day.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-08-15',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    title: 'Setting Goals for Success',
    excerpt: 'A step-by-step guide to setting effective goals and achieving them.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-07-20',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];
</script>
