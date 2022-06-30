<script setup>
defineProps(['link', 'icon', 'newTab']);
</script>
<template>
    <a :href="link" :target="newTab ? '_blank' : null" :rel="newTab ? 'noopener noreferrer' : null">
        <button class="p-2 mx-1 sm:mx-2 mb-1 rounded-xl dark:bg-slate-200 bg-slate-700
                text-white dark:text-gray-700
                w-10 hover:text-purple-400 dark:hover:text-purple-700
                transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <i :class="icon"></i>
        </button>
    </a>
</template>