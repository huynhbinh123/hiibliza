<template>
  <div>
    <UButton
      size="lg"
      color="primary"
      label="Buy Tickets"
      class="bg-gray-300 font-medium text-lg rounded-3xl relative z-20 text-black hover:bg-gray-400 transition-colors duration-300 cursor-pointer mt-8 pointer-events-auto"
    >
      {{ text }}
    </UButton>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>

<style></style>
