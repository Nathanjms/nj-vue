<script setup lang="ts">
import { computed } from "vue";

interface Props {
  href: string;
  newTab?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  newTab: false,
});

const newTabAttrs = computed(() => {
  return props.newTab
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : null;
});
</script>

<template>
  <a class="font-medium text-blue-700 underline hover:text-blue-900" :href="href" v-bind="newTabAttrs"><slot /></a>
</template>
