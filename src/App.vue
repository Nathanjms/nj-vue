<script setup>
import './assets/css/index.css';
import Navbar from './components/Navbar.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import Home from './components/Home.vue';
</script>

<template>
  <div class="h-screen dark:bg-slate-700 bg-slate-200">
    <Navbar />
    <div class="container mx-auto">
      <DarkModeToggle />
      <Home />
    </div>
  </div>
</template>
