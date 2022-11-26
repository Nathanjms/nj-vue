<script setup>
import { useRoute } from "vue-router";
import NavItem from "./NavItem.vue";
const route = useRoute();

const navItems = [
  {
    link: "/",
    name: "Home",
    icon: "far fa-home",
  },
  {
    link: "/about",
    name: "About",
    icon: "far fa-user",
  },
  {
    link: "/coding",
    name: "Coding",
    icon: "far fa-desktop",
  },
  {
    link: "/music",
    name: "Music",
    icon: "far fa-guitar",
  },
];
</script>
<template>
  <div
    class="fixed bottom-0 z-50 mx-auto my-auto h-16 w-full sm:top-0 sm:ml-2 sm:flex sm:h-fit sm:w-auto sm:items-center"
  >
    <div class="bg-slate-700 px-1 shadow-lg transition ease-in-out dark:bg-slate-200 sm:rounded-2xl">
      <div class="flex sm:flex-col sm:py-1">
        <NavItem
          v-for="navItem in navItems"
          :link="navItem.link"
          :name="navItem.name"
          :icon="navItem.icon"
          :active="route.fullPath === navItem.link"
        />
      </div>
    </div>
  </div>
</template>
