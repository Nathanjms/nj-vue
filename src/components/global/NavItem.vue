<script setup>
const props = defineProps(["name", "link", "icon", "active"]);
</script>
<template>
  <div class="group flex-1 hover:scale-110">
    <router-link :to="link">
      <div
        class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-1 pt-1 text-center text-gray-100 group-hover:text-purple-400 dark:text-gray-600 dark:group-hover:text-purple-700"
        :class="{ 'text-purple-400 dark:text-purple-700': active }"
      >
        <span class="block px-1 py-1">
          <i :class="icon" class="text-2xl block`"></i>
          <span class="block text-xs">{{ name }}</span>
          <span class="mx-auto block h-1 w-1 rounded-full group-hover:bg-purple-500"></span>
        </span>
      </div>
    </router-link>
  </div>
</template>
