<script setup>
import { AutoTyperVue } from "auto-typer-vue3";
import LinkPartial from "../global/LinkPartial.vue";
let textArray = ["Software Engineer...", "Musician...", "Mathematician...", "Web Developer..."];
let randomTextOrder = textArray.sort(() => Math.random() - 0.5);
</script>

<template>
  <div>
    <div class="mb-1">
      <h1 class="text-3xl font-medium">Nathan James</h1>
      <h2 class="break-all text-sm">nathan@nathanjms.co.uk</h2>
      <AutoTyperVue
        componentTag="h3"
        class="py-2 text-lg font-medium"
        writtenBeginningWord="I'm a "
        :text="randomTextOrder"
      />
    </div>
    <div class="mb-8">
      <p>
        Welcome to my website! To get in touch, drop me an email at
        <LinkPartial href="mailto:nathan@nathanjms.co.uk">nathan@nathanjms.co.uk</LinkPartial>, or use the links below
        to see some of my current/previous projects.
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
