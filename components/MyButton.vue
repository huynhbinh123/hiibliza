<template>
  <UButton
    size="lg"
    color="primary"
    class="bg-white font-medium text-lg rounded-3xl text-black hover:bg-gray-300 transition-colors duration-300 cursor-pointer mt-4 pointer-events-auto"
  >
    {{ text }}
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>
