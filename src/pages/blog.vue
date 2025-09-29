<template>
  <div class="blog-container">
    <h1 class="blog-title">Our Blog</h1>

    <div class="blog-grid">
      <div v-for="article in articles" :key="article.id" class="blog-card">
        <img :src="article.image" :alt="article.title" class="blog-image">
        <div class="blog-content">
          <h3 class="blog-article-title">{{ article.title }}</h3>
          <p class="blog-date">{{ article.date }}</p>
          <p class="blog-excerpt">{{ article.excerpt }}</p>
          <NuxtLink :to="`/blog/${article.id}`" class="blog-readmore">Read More</NuxtLink>
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
  content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Power of Positive Thinking',
    excerpt: 'Discover how a positive mindset can transform your life and help you achieve your goals.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-09-01',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 2,
    title: '10 Habits of Highly Productive People',
    excerpt: 'Learn the secrets to boosting your productivity and making the most of your day.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-08-15',
    content: 'Lorem ipsum dolor sit amet...'
  },
  {
    id: 3,
    title: 'Setting Goals for Success',
    excerpt: 'A step-by-step guide to setting effective goals and achieving them.',
    image: 'https://via.placeholder.com/400x300',
    date: '2025-07-20',
    content: 'Lorem ipsum dolor sit amet...'
  },
];
</script>

<style src="./blog.css"></style>
