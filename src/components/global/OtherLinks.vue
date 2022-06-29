<script setup>
import OtherLinksItem from './OtherLinksItem.vue';
const otherLinks = [
    {
        link: 'https://github.com/nathanjms',
        icon: 'fab fa-github',
        newTab: true
    },
    {
        link: 'https://www.linkedin.com/in/nathan-jms/',
        icon: 'fab fa-linkedin',
        newTab: true
    },
    {
        link: 'mailto:nathan@nathanjms.co.uk',
        icon: 'far fa-envelope',
        newTab: false
    },
];
</script>
<template>
    <OtherLinksItem v-for="otherLink in otherLinks" :link="otherLink.link" :icon="otherLink.icon" :newTab="otherLink.newTab"/>
</template>