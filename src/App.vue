<script setup>
import './assets/css/index.css';
import Navbar from './components/global/Navbar.vue';
import DarkModeToggle from './components/global/DarkModeToggle.vue';
import OtherLinks from './components/global/OtherLinks.vue';
</script>

<template>
  <div class="min-h-screen sm:min-h-screen transition ease-in-out dark:bg-slate-700 bg-slate-200">
    <Navbar />
    <div class="container mx-auto pb-16">
      <div class="p-5 flex justify-between text-gray-700 dark:text-white">
        <div>
          <OtherLinks />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div
        class="bg-slate-400 py-5 px-3 mx-auto w-11/12 sm:w-5/6 min-h-[50vh] sm:min-h-[70vh] text-center my-5 rounded-lg shadow-lg">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>
