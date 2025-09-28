<template>
  <div ref="paypalButtonContainer"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  productId: { type: Number, required: true },
  productPrice: { type: Number, required: true },
});

const paypalButtonContainer = ref<HTMLElement | null>(null);

interface PayPalButtonProps {
  createOrder: (data: any, actions: any) => Promise<string>;
  onApprove: (data: any, actions: any) => Promise<void>;
  onError: (err: any) => void;
}

const loadPayPalScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${useRuntimeConfig().public.paypalClientId}&currency=EUR`;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  try {
    await loadPayPalScript();
    if (window.paypal && paypalButtonContainer.value) {
      window.paypal.Buttons({
        createOrder: async (data: any, actions: any) => {
          try {
            const response = await $fetch('/api/paypal/create-order', {
              method: 'POST',
              body: {
                productId: props.productId,
                quantity: 1,
                price: props.productPrice,
              },
            });
            return response.id;
          } catch (error) {
            console.error('Error creating PayPal order:', error);
            alert('Could not create PayPal order. Please try again.');
            return Promise.reject(error);
          }
        },
        onApprove: async (data: any, actions: any) => {
          try {
            const response = await $fetch('/api/paypal/capture-order', {
              method: 'POST',
              body: {
                orderId: data.orderID,
              },
            });

            if (response.success) {
              alert('Payment successful!');
              navigateTo('/shop/success');
            } else {
              alert('Payment not successful. Please try again.');
            }
          } catch (error) {
            console.error('Error capturing PayPal order:', error);
            alert('Error processing PayPal payment. Please try again.');
          }
        },
        onError: (err: any) => {
          console.error('PayPal button error:', err);
          alert('PayPal error. Please try again.');
        },
      }).render(paypalButtonContainer.value);
    }
  } catch (error) {
    console.error('Failed to load PayPal script:', error);
  }
});
</script>
