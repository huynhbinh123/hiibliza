<template>
  <div class="mt-45">
    <h1
      class="text-7xl lg:text-8xl font-extrabold uppercase flex justify-center items-center"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<style></style>
