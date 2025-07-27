<template>
  <NuxtLink v-if="to" :to="to" class="flex justify-center">
    <UButton
      size="lg"
      color="primary"
      :label="text"
      class="bg-gray-300 font-medium text-lg rounded-3xl relative z-20 text-black hover:bg-gray-400 transition-colors duration-300 cursor-pointer mt-8 pointer-events-auto"
    />
  </NuxtLink>
  <UButton
    v-else
    size="lg"
    color="primary"
    :label="text"
    class="bg-gray-300 font-medium text-lg rounded-3xl relative z-20 text-black hover:bg-gray-400 transition-colors duration-300 cursor-pointer mt-8 pointer-events-auto"
  />
</template>

<script lang="ts" setup>
defineProps<{
  text: string;
  to?: string;
}>();
</script>
