<script setup>
import './assets/css/index.css';
import Navbar from './components/global/Navbar.vue';
import DarkModeToggle from './components/global/DarkModeToggle.vue';
import OtherLinks from './components/global/OtherLinks.vue';
</script>

<template>
  <div class="min-h-[calc(100vh+4rem)] sm:min-h-screen transition ease-in-out dark:bg-slate-700 bg-slate-200">
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
      <div
        class="bg-slate-400 py-5 mx-auto w-11/12 sm:w-5/6 min-h-[60vh] sm:min-h-[75vh] text-center my-5 rounded-lg shadow-lg">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>
