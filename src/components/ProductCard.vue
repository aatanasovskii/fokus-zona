<template>
  <div class="bg-secondary rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-bold text-xl mb-2 text-textLight">{{ product.name }}</h3>
      <p class="text-textLight">{{ product.description }}</p>
      <p class="font-bold text-lg mt-2 text-textLight">€{{ product.price.toFixed(2) }}</p>
      <AppButton variant="primary" full-width @click="viewProduct(product.id)">View Product</AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/AppButton.vue';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const viewProduct = (productId: number) => {
  navigateTo(`/shop/${productId}`);
};
</script>
