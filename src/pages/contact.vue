<template>
  <div class="contact-container">
    <h1 class="contact-title">Contact Us</h1>

    <div class="contact-card">
      <p class="contact-description">
        Have a question or just want to say hello?<br>
        Fill out the form below or reach out to us.
      </p>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>

        <div class="form-actions">
          <AppButton type="submit" variant="primary">Send Message</AppButton>
        </div>
      </form>

      <div class="social-section">

        <h2>Find Us On</h2>

        <div class="social-links">
          <a href="https://www.instagram.com/focus.zona/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="instagram" class="social-link" />
          </a>
          <a href="https://www.tiktok.com/@focus.zona" target="_blank" rel="noopener noreferrer">
            <img src="/tiktok.svg" alt="tiktok" class="social-link" />
          </a>
          <a href="https://x.com/focuszona" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="twitter" class="social-link" />
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from '~/components/AppButton.vue';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message! We will get back to you soon.');
  formData.value = { name: '', email: '', message: '' };
};
</script>

<style src="./contact.css"></style>
