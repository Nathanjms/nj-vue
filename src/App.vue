<script setup>
import './assets/css/index.css';
import Navbar from './components/Navbar.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
</script>

<template>
  <div class="h-screen dark:bg-slate-700 bg-slate-200">

    <Navbar />
    <div id="nav" class="float-right">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="container mx-auto">
      <DarkModeToggle />
      <div class="bg-slate-400 py-5 mx-auto w-11/12 sm:w-4/6 text-center my-5 rounded-lg shadow-lg">
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
