<script setup>
import LinkPartial from "../global/LinkPartial.vue";
import { AutoTyperVue } from "auto-typer-vue3";
import LinkAndBtn from "../global/LinkAndBtn.vue";
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-medium">Coding</h1>
    </div>
    <div class="mb-8">
      Below are some of my personal projects I have (or am currently) working on! If you would like to see more, take a
      look on <LinkPartial href="https://github.com/nathanjms" newTab>GitHub</LinkPartial>.
    </div>
    <div class="text-left">
      <div class="mb-7">
        <div class="flex justify-between mb-1">
          <h2 class="text-xl">GymNotes</h2>
          <LinkAndBtn :items="[{ href: 'https://gymnotes.uk', name: 'Website' }]" />
        </div>
        <p>
          Spending my spare time making GymNotes; an offline-first, web app to track your workouts. This is written in
          Vue.js, with an offline Database (IndexedDB) via
          <LinkPartial href="https://dexie.org/" newTab>Dexie.js</LinkPartial>.
        </p>
      </div>
      <div class="mb-7">
        <div class="flex justify-between mb-1">
          <AutoTyperVue componentTag="h2" class="text-xl" text="Auto Typer Vue3" />
          <LinkAndBtn
            :items="[
              { href: 'https://github.com/Nathanjms/auto-typer-vue3', name: 'GitHub' },
              { href: 'https://www.npmjs.com/package/auto-typer-vue3', name: 'npm' },
            ]"
          />
        </div>
        <p>
          My first attempt at an npm package, Auto Typer Vue3 provides an easy to use, but highly customisable,
          autotyper for websites written in Vue3.
        </p>
      </div>
      <div class="mb-7">
        <div class="flex justify-between mb-1">
          <h2 class="text-xl">NJ Script - Oh My Zsh</h2>
          <LinkAndBtn :items="[{ href: 'https://github.com/Nathanjms/ohmyzsh-nj-script', name: 'GitHub' }]" />
        </div>
        <p>
          A script to install Oh My Zsh with powerlevel10k, zsh-autosuggestions, and zsh-syntax-highlighting
          automatically - for both Linux and Mac.
        </p>
      </div>
      <div class="mb-7">
        <div class="flex justify-between mb-1">
          <h2 class="text-xl">JamesFest 2022</h2>
          <LinkAndBtn
            :items="[
              { href: 'https://jamesfest2022.co.uk', name: 'Website' },
              { href: 'https://github.com/Nathanjms/jamesfest2022', name: 'GitHub' },
            ]"
          />
        </div>
        <p>
          Written in React with <LinkPartial href="https://nextjs.org/" newTab>Next.js</LinkPartial>, this website was
          made to provide information about a wedding. Before the wedding, there was a (basic) login system, which still
          exists on the 'Photos' page.
        </p>
      </div>
      <div class="mb-7">
        <div class="flex justify-between mb-1">
          <h2 class="text-xl">Nathanjms Tools</h2>
          <LinkAndBtn
            :items="[
              { href: 'https://tools.nathanjms.co.uk', name: 'Website' },
              { href: 'https://github.com/Nathanjms/nathanjms-tools', name: 'GitHub' },
            ]"
          />
        </div>
        <p>
          Used as a learning experience to try TypeScript with React, this website contains a few tools to assist in my
          day-to-day development work.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
.auto-typer-vue::after {
  border-color: rgba(0, 0, 0, 0.65);
}
</style>
