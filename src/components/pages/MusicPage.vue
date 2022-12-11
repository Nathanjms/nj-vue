<script setup>
import LinkPartial from "../global/LinkPartial.vue";
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-medium">Music</h1>
    </div>
    <div class="text-left">
      <p class="mb-4">
        As well as enjoying playing covers, I've got a catalogue of my own songs which are mostly unrecorded and
        unpolished.
      </p>
      <p class="mb-4">
        There are a couple that I have been able to record a little more professionally, and you can listen to one of
        these below.
      </p>
      <p>
        You'll find another one of my songs as the backing to one of my
        <LinkPartial newTab href="https://youtu.be/hqVuyWsSPSs"> YouTube Videos</LinkPartial>, but these are the only
        ones in the wild, for now...
      </p>
      <iframe
        class="w-full mx-auto rounded mt-8"
        height="108"
        scrolling="no"
        title="Happy Right Now"
        frameBorder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/996209464&color=%237b26ad&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      >
      </iframe>
    </div>
  </div>
</template>
