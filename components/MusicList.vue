<!-- components/MusicList.vue -->
<template>
  <UCarousel
    :items="items"
    :ui="{
      item: 'basis-1/3 pr-2',
      dots: 'mt-10 lg:ml-[48%] ml-[36%] flex justify-center gap-3',
      dot: 'h-2 w-2 rounded-full bg-gray-400 transition-all data-[state=active]:!bg-black data-[state=active]:!scale-110',
    }"
    class="w-full"
    :loop="isMobile"
    dots
  >
    <template #default="{ item }">
      <MusicItem :name="name" :item="item" />
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MusicItem from "./MusicItem.vue";

defineProps<{
  name: string;
  items: {
    img: string;
    title: string;
    description: string;
    slug: string;
  }[];
}>();

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 1024;
});
</script>
