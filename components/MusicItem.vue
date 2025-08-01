<!-- components/MusicItem.vue -->
<template>
  <div
    class="flex flex-col justify-center p-2 lg:w-[416px] w-[374px] lg:h-[643px] h-[642px] bg-[#19191a] rounded-4xl cursor-grab active:cursor-grabbing"
  >
    <!-- Ảnh -->
    <NuxtLink :to="item.slug">
      <img
        :src="item.img"
        class="rounded-3xl mb-4 lg:w-[400px] w-full h-[400px] object-cover"
      />
    </NuxtLink>

    <!-- Nội dung chính -->
    <div class="flex flex-col flex-grow w-full px-4">
      <h3
        class="text-black text-xs uppercase px-2 font-semibold bg-white rounded-3xl w-fit"
      >
        {{ item.title }}
      </h3>
      <NuxtLink
        :to="item.slug"
        class="text-white text-start text-3xl uppercase font-bold mt-2 min-h-[108px]"
      >
        {{ item.description }}
      </NuxtLink>

      <NuxtLink :to="item.slug" class="mt-6">
        <UButton
          size="lg"
          color="primary"
          label="Buy Tickets"
          class="bg-[#1966ff] font-medium text-lg rounded-3xl text-white w-full hover:bg-[#0054d1] transition-colors duration-300 cursor-pointer flex justify-center"
        >
          {{ name }}
        </UButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  item: {
    img: string;
    title: string;
    description: string;
    slug: string;
  };
}>();
</script>
