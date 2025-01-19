<script setup lang="ts">
interface LinkBtnItem {
  href: string;
  name: string;
}
defineProps<{
  items: LinkBtnItem[];
}>();
</script>

<template>
  <div class="flex gap-1 flex-col sm:flex-row">
    <a v-for="item in items" :key="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">
      <button
        class="rounded-xl w-full bg-gray-700 px-2 text-white hover:text-purple-400 dark:bg-gray-200 dark:text-gray-700 dark:hover:text-purple-700"
      >
        {{ item.name }}
      </button>
    </a>
  </div>
</template>
