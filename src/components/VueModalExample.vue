<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModal = ref(false);
</script>

<template>
  <div class="text-center mt-2">
    <button
      @click="showModal = true"
      class="rounded-xl bg-slate-700 px-2 text-white dark:bg-slate-200 dark:text-gray-700 dark:hover:text-purple-700"
    >
      Click here for a demo!
    </button>
  </div>
  <Vue3TailwindModal
    :showModal="showModal"
    @close="() => (showModal = false)"
    colors="bg-slate-400 dark:bg-slate-700 dark:text-gray-200"
  >
    <template #header><h2 class="text-lg">Vue3 Tailwind Modal</h2></template>
    The header, body and footer can be customised, and change based on whether this site is in dark mode - try toggling
    dark mode and see the modal change!
  </Vue3TailwindModal>
</template>
