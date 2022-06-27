<script setup>
import './assets/css/index.css';
import Navbar from './components/Navbar.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
</script>

<template>
  <div class="h-screen dark:bg-slate-700 bg-slate-100">

    <Navbar />
    <div class="container mx-auto">
      <DarkModeToggle />
      <div class="bg-slate-400 py-5 mx-auto w-4/6 text-center my-5 rounded-lg shadow-lg">
        <h1 class="text-3xl font-medium pb-4">
          Nathan James
        </h1>
        <h2 class="text-2xl font-medium py-4 hover:rotate-12 transition-all">
          Website coming soon...
        </h2>
      </div>
    </div>
  </div>
</template>
