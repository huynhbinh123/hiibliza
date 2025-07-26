<template>
  <!-- <div class="relative w-full pl-[calc((100%-1325px)/2)]"> gới hạn bên trái -->
  <UCarousel
    :items="items"
    :ui="{
      item: 'basis-1/3 pr-2',
      dots: 'mt-10 ml-226 flex justify-center gap-3',
      // giới hạn bên trái ml-157
      dot: 'h-2 w-2 rounded-full bg-gray-400 transition-all data-[state=active]:!bg-black data-[state=active]:!scale-110',
    }"
    class="w-full"
    dots
  >
    <template #default="{ item }">
      <div
        class="flex flex-col p-2 w-[416px] h-[643px] bg-[#19191a] rounded-4xl"
      >
        <!-- Ảnh -->
        <img :src="item.img" class="rounded-3xl mb-4" />

        <!-- Nội dung chính -->
        <div class="flex flex-col flex-grow w-full px-4">
          <!-- Tiêu đề -->
          <h3
            class="text-black text-xs uppercase px-2 font-semibold bg-white rounded-3xl w-fit"
          >
            {{ item.title }}
          </h3>

          <!-- Mô tả -->
          <p
            class="text-white text-start text-3xl uppercase font-bold mt-2 min-h-[108px]"
          >
            {{ item.description }}
          </p>

          <!-- Nút nằm dưới cùng -->
          <div class="mt-6">
            <UButton
              size="lg"
              color="primary"
              label="Buy Tickets"
              class="bg-[#1966ff] font-medium text-lg rounded-3xl text-white w-full hover:bg-[#0054d1] transition-colors duration-300 cursor-pointer"
            >
              Listen
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </UCarousel>
</template>

<script lang="ts" setup>
defineProps<{
  items: {
    img: string;
    title: string;
    description: string;
  }[];
}>();
</script>
