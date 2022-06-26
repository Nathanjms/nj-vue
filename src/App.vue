<script setup>
import './assets/css/index.css';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="container mx-auto">
    <div class="bg-slate-400 py-5 mx-auto w-5/6 text-center my-5 rounded-lg shadow-lg">
      <h1 class="text-3xl font-medium pb-4">
        Nathan James
      </h1>
      <img alt="Photo of Nathan James"
        class="mx-auto rounded-full  hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
        src="./assets/images/nathan_square.jpg" />
      <h1 class="text-2xl font-medium py-4 hover:rotate-12 transition-all">
        Website coming soon...
      </h1>
    </div>
  </div>
</template>
