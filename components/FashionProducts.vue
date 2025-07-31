<template>
  <!-- <div class="relative w-full pl-[calc((100%-1325px)/2)]"> -->
  <UCarousel
    :items="items"
    :ui="{
      item: 'basis-1/3 pr-2',
      dots: 'mt-10  lg:ml-[48%] ml-[35%]  flex justify-center gap-3',
      // giới hạn bên trái ml-157
      dot: 'h-2 w-2 rounded-full bg-gray-400 transition-all data-[state=active]:!bg-black data-[state=active]:!scale-110',
    }"
    :loop="isMobile"
    class="w-full"
    dots
  >
    <template #default="{ item }">
      <div
        class="flex flex-col items-center justify-center overflow-hidden mx-auto relative rounded-4xl z-20 lg:w-[416px] w-[374px]"
      >
        <!-- Ảnh -->
        <NuxtLink :to="item.slug"
          ><img :src="item.img" class="w-full h-full object-cover"
        /></NuxtLink>

        <!-- Nội dung chính -->
        <div
          class="absolute bottom-9 left-0 w-full px-4 flex flex-col items-center justify-end z-20 pointer-events-none"
        >
          <!-- Tiêu đề -->
          <h3
            class="text-white text-xs uppercase px-2 font-bold text-center bg-[#444448] rounded-2xl"
          >
            {{ item.title }}
          </h3>

          <!-- Mô tả -->
          <NuxtLink :to="item.slug"
            ><p
              class="text-white text-3xl uppercase font-bold text-center mt-3 min-h-[72px]"
            >
              {{ item.description }}
            </p></NuxtLink
          >

          <!-- Nút nằm dưới cùng -->
          <MyButton
            :text="buttonText"
            bgColor="white"
            textColor="black"
            class="mt-12"
            :to="item.slug"
          />
        </div>
      </div>
    </template>
  </UCarousel>
  <!-- </div> -->
</template>

<script lang="ts" setup>
defineProps<{
  items: {
    img: string;
    title: string;
    description: string;
    slug: string;
  }[];
  buttonText: string;
}>();
import { ref, onMounted } from "vue";

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 1024;
});
</script>
