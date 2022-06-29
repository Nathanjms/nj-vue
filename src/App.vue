<script setup>
import './assets/css/index.css';
import Navbar from './components/global/Navbar.vue';
import DarkModeToggle from './components/global/DarkModeToggle.vue';
import OtherLinks from './components/global/OtherLinks.vue';
</script>

<template>
  <div class="h-screen dark:bg-slate-700 bg-slate-200">
    <Navbar />
    <div class="container mx-auto">
      <div class="p-5 flex justify-between text-gray-700 dark:text-white">
        <div>
          <OtherLinks />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>
