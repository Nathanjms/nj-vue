<script setup>
defineProps(['link', 'icon', 'newTab']);
</script>
<template>
    <a :href="link" :target="newTab ? '_blank' : null" :rel="newTab ? 'noopener noreferrer' : null">
        <button class="mx-1 mb-1 w-10 rounded-xl bg-slate-700 p-2 text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-purple-400 dark:bg-slate-200 dark:text-gray-700 dark:hover:text-purple-700 sm:mx-2">
            <i :class="icon"></i>
        </button>
    </a>
</template>