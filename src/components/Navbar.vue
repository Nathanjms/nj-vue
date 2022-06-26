    <style>
    @import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
    </style>
<script setup>
import NavItem from './NavItem.vue';
const navItems = [
    {
        link: '#',
        name: 'Home',
        icon: 'far fa-home'
    },
    {
        link: '#',
        name: 'About',
        icon: 'far fa-user'
    },
    {
        link: '#',
        name: 'Coding',
        icon: 'far fa-desktop'
    },
    {
        link: '#',
        name: 'Music',
        icon: 'far fa-guitar'
    },
];
</script>
<template>

    <div class="mx-auto fixed z-50 bottom-0 md:top-0 w-full md:w-auto md:flex md:items-center">
        <div class="px-1 bg-white shadow-lg rounded-2xl">
            <div class="flex md:flex-col md:py-1 dark:bg-slate-100">
                <NavItem v-for="navItem in navItems" :link="navItem.link" :name="navItem.name" :icon="navItem.icon" />
            </div>
        </div>
    </div>
</template>