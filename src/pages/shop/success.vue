<template>
  <div class="container mx-auto py-8 text-center">
    <h1 class="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
    <p class="text-lg text-gray-700 mb-6">Thank you for your purchase. Your digital product download link has been sent to your email address.</p>
    <p class="text-md text-gray-600">If you don't receive the email within a few minutes, please check your spam folder.</p>
    <NuxtLink to="/" class="btn btn-primary mt-8">Continue Shopping</NuxtLink>
  </div>
</template>

<script setup lang="ts">
// You can add logic here to verify the session and deliver the product if needed
// For now, we're assuming the API handles the delivery.
</script>
