<script setup>
import './assets/css/index.css';
import Navbar from './components/global/Navbar.vue';
import DarkModeToggle from './components/global/DarkModeToggle.vue';
</script>

<template>
  <div class="h-screen dark:bg-slate-700 bg-slate-200">
    <Navbar />
    <div class="container mx-auto">
      <DarkModeToggle />
      <router-view />
    </div>
  </div>
</template>
