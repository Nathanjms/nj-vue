<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
let textArray = [
  "Software Developer...",
  "Musician...",
  "Mathematician...",
  "Web Developer...",
];
let randomTextOrder = textArray.sort(() => Math.random() - 0.5);
</script>

<template>
  <h1 class="text-3xl font-medium">Nathan James</h1>
  <h2 class="break-all">nathan@nathanjms.co.uk</h2>
  <a
    href="https://old.nathanjms.co.uk"
    class="text-sm text-blue-600 underline hover:text-blue-800"
    >Go to Old Website?</a
  >
  <h3 class="py-4 text-2xl font-medium transition-all hover:rotate-3">
    Website Coming soon...
  </h3>

  <AutoTyperVue
    componentTag="h3"
    class="py-4 text-xl font-medium"
    writtenBeginningWord="I'm a "
    :text="randomTextOrder"
  />
</template>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
.auto-typer-vue::after {
  border-color: rgba(0, 0, 0, 0.65);
}
</style>
