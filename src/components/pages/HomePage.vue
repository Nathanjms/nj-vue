<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
import LinkPartial from "../global/LinkPartial.vue";
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
        <LinkPartial href="https://vuejs.org/" newTab>Vue.js</LinkPartial>.
      </p>
      <p class="mb-2">
        To get in touch, drop me an email at
        <LinkPartial href="mailto:nathan@nathanjms.co.uk">nathan@nathanjms.co.uk</LinkPartial>
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
