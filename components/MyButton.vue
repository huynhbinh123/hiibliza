<template>
  <UButton
    size="lg"
    color="primary"
    class="font-medium text-lg rounded-3xl hover:bg-gray-300 transition-colors duration-300 cursor-pointer mt-4 pointer-events-auto"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
    }"
  >
    {{ text }}
  </UButton>
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
  bgColor?: string;
  textColor?: string;
}>();
</script>
