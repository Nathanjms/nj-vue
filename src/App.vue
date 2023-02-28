<script setup>
import "./assets/css/index.css";
import Navbar from "./components/global/Navbar.vue";
import DarkModeToggle from "./components/global/DarkModeToggle.vue";
import OtherLinks from "./components/global/OtherLinks.vue";
</script>

<template>
  <div class="min-h-screen w-screen bg-slate-200 transition ease-in-out dark:bg-slate-700 sm:min-h-screen">
    <Navbar />
    <div class="container mx-auto pb-16">
      <div class="flex justify-between p-5 text-gray-700 dark:text-white">
        <div>
          <OtherLinks />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div
        class="mx-auto my-5 min-h-[50vh] w-10/12 max-w-4xl rounded-lg bg-slate-400 py-5 px-5 sm:px-8 text-center shadow-lg sm:min-h-[70vh] sm:w-5/6"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>
