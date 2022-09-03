<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
</script>

<template>
  <h1 class="text-3xl font-medium">Nathan James</h1>
  <h2 class="break-all">nathan@nathanjms.co.uk</h2>
  <a
    href="https://old.nathanjms.co.uk"
    class="text-sm text-blue-600 underline hover:text-blue-800"
    >Go to Old Website?</a
  >

  <AutoTyperVue
    beginningWord="&nbsp;"
    componentTag="h2"
    class="py-4 text-2xl font-medium transition-all hover:rotate-3"
    text="Website coming soon..."
  />
</template>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
</style>
