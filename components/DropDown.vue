<template>
  <UCarousel
    ref="carouselRef"
    loop
    :items="items"
    :ui="{
      item: 'basis-1/3 pr-2',
      dots: 'mt-10 ml-32 flex justify-center gap-3',
      dot: 'h-2 w-2 rounded-full bg-gray-400 transition-all data-[state=active]:!bg-white data-[state=active]:!scale-110',
    }"
    class="w-full"
    dots
  >
    <template #default="{ item }">
      <div
        class="flex flex-col items-center justify-center overflow-hidden mx-auto relative rounded-4xl z-20 w-[155px] h-[232px]"
      >
        <img :src="item.image" class="rounded-4xl w-full h-full object-cover" />
      </div>
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: { name: string; image: string; slug: string }[];
}>();
</script>
