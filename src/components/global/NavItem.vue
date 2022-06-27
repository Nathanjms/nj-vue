<script setup>
defineProps(['name', 'link', 'icon']);
</script>
<template>
    <div class="flex-1 group hover:scale-110">
        <router-link :to="link">
            <a :href="link" class="flex items-end justify-center text-center 
                mx-auto px-2 pt-2 w-full 
                text-gray-200 dark:text-gray-600
                group-hover:text-purple-400  dark:group-hover:text-purple-700
                border-b-2 border-transparent
            ">
                <span class="block px-1 py-1">
                    <i :class="icon" class="text-2xl mb-1 block`"></i>
                    <span class="block text-xs">{{ name }}</span>
                    <span class="block w-1 mx-auto h-1 group-hover:bg-purple-500 rounded-full"></span>
                </span>
            </a>
        </router-link>
    </div>
</template>