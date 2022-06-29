<script setup>
defineProps(['link', 'icon', 'newTab']);
</script>
<template>
    <a :href="link" :target="newTab ? '_blank' : null" :rel="newTab ? 'noopener noreferrer' : null">
        <span class="p-2 mx-2 rounded-xl dark:bg-slate-200 bg-slate-700
                text-white dark:text-gray-700
                w-2">
            <i :class="icon"></i>
        </span>
    </a>
</template>