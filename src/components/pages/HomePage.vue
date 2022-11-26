<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
let textArray = ["Software Developer...", "Musician...", "Mathematician...", "Web Developer..."];
let randomTextOrder = textArray.sort(() => Math.random() - 0.5);
</script>

<template>
  <div class="grid grid-rows-3">
    <div class="mb-4">
      <h1 class="text-3xl font-medium">Nathan James</h1>
      <h2 class="break-all text-sm">nathan@nathanjms.co.uk</h2>
      <AutoTyperVue
        componentTag="h3"
        class="py-2 text-lg font-medium"
        writtenBeginningWord="I'm a "
        :text="randomTextOrder"
      />
    </div>
    <div class="self-center">
      <p class="mb-4">
        Welcome to my website, written in
        <a
          class="font-medium text-blue-700 underline hover:text-blue-900"
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Vue.js</a
        >.
      </p>
      <p class="mb-2">
        To get in touch, drop me an email at
        <a class="font-medium text-blue-700 underline hover:text-blue-900" href="mailto:nathan@nathanjms.co.uk"
          >nathan@nathanjms.co.uk</a
        >.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
.auto-typer-vue::after {
  border-color: rgba(0, 0, 0, 0.65);
}
</style>
