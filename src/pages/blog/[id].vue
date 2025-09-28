<template>
  <div class="container mx-auto py-8">
    <div v-if="article">
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
      <p class="text-gray-600 text-sm mb-6">Published on {{ article.date }}</p>
      <img :src="article.image" :alt="article.title" class="w-full h-96 object-cover rounded-lg shadow-md mb-8" />
      <div class="prose max-w-none" v-html="article.content">
      </div>
      <NuxtLink to="/blog" class="btn btn-secondary mt-8 inline-block">Back to Blog</NuxtLink>
    </div>
    <div v-else class="text-center text-xl text-gray-600">
      <p>Article not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
}

const route = useRoute();
const article = ref<Article | null>(null);

// Placeholder for fetching article details
const fetchArticle = (id: number): Article | undefined => {
  const allArticles: Article[] = [
    {
      id: 1,
      title: 'The Power of Positive Thinking',
      excerpt: 'Discover how a positive mindset can transform your life and help you achieve your goals.',
      image: 'https://via.placeholder.com/800x600',
      date: '2025-09-01',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>'
    },
    {
      id: 2,
      title: '10 Habits of Highly Productive People',
      excerpt: 'Learn the secrets to boosting your productivity and making the most of your day.',
      image: 'https://via.placeholder.com/800x600',
      date: '2025-08-15',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>'
    },
    {
      id: 3,
      title: 'Setting Goals for Success',
      excerpt: 'A step-by-step guide to setting effective goals and achieving them.',
      image: 'https://via.placeholder.com/800x600',
      date: '2025-07-20',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>'
    },
  ];
  return allArticles.find(a => a.id === id);
};

onMounted(() => {
  const articleId = Number(route.params.id);
  if (!isNaN(articleId)) {
    article.value = fetchArticle(articleId) || null;
  }
});
</script>
