<template>
  <NuxtLayout name="admin">
    <div class="container mx-auto py-8">
      <h1 class="text-4xl font-bold mb-8">Newsletter Subscribers</h1>

      <div v-if="subscribers.length > 0" class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(subscriber, index) in subscribers" :key="index">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{{ subscriber }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="removeSubscriber(subscriber)" class="text-red-600 hover:text-red-900">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="text-center text-gray-600">No subscribers found.</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const subscribers = ref<string[]>([]);

const fetchSubscribers = async () => {
  try {
    const response = await $fetch<string[]>('/api/admin/subscribers');
    subscribers.value = response;
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    alert('Failed to load subscribers.');
  }
};

const removeSubscriber = async (emailToRemove: string) => {
  if (confirm(`Are you sure you want to remove ${emailToRemove} from subscribers?`)) {
    try {
      await $fetch('/api/admin/subscribers', {
        method: 'DELETE',
        body: { email: emailToRemove },
      });
      await fetchSubscribers(); // Refresh the list
      alert('Subscriber removed successfully!');
    } catch (error) {
      console.error('Error removing subscriber:', error);
      alert('Failed to remove subscriber.');
    }
  }
};

onMounted(fetchSubscribers);
</script>
