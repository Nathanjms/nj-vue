<script setup>
import NavItem from './NavItem.vue';
const navItems = [
    {
        link: '/',
        name: 'Home',
        icon: 'far fa-home'
    },
    {
        link: '/about',
        name: 'About',
        icon: 'far fa-user'
    },
    {
        link: '/coding',
        name: 'Coding',
        icon: 'far fa-desktop'
    },
    {
        link: '/music',
        name: 'Music',
        icon: 'far fa-guitar'
    },
];
</script>
<template>
    <div class="mx-auto fixed z-50 bottom-0 sm:top-0 h-fit my-auto sm:ml-2 w-full sm:w-auto sm:flex sm:items-center">
        <div class="px-1 dark:bg-slate-200 shadow-lg sm:rounded-2xl bg-slate-700 transition ease-in-out">
            <div class="flex sm:flex-col sm:py-1">
                <NavItem v-for="navItem in navItems" :link="navItem.link" :name="navItem.name" :icon="navItem.icon" />
            </div>
        </div>
    </div>
</template>