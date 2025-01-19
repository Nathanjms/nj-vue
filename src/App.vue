<script setup>
import "./assets/css/index.css";
import CodingContent from "./components/CodingContent.vue";
import DarkModeToggle from "./components/global/DarkModeToggle.vue";
import OtherLinks from "./components/global/OtherLinks.vue";
import HomePage from "./components/pages/HomePage.vue";
</script>

<template>
  <div class="min-h-screen w-screen bg-gray-200 transition ease-in-out dark:bg-gray-700 sm:min-h-screen">
    <div class="container mx-auto pb-16 px-4">
      <div class="mx-auto flex justify-between max-w-6xl py-4 px-6 text-gray-700 dark:text-white">
        <div>
          <OtherLinks />
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div class="mx-auto mb-4 rounded-2xl max-w-6xl bg-gray-400 py-4 px-6 text-center shadow-lg">
        <HomePage />
      </div>

      <div class="mx-auto rounded-2xl max-w-6xl bg-gray-400 py-4 px-6 text-center shadow-lg">
        <CodingContent />
      </div>
    </div>
  </div>
</template>
