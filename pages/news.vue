<template>
  <div
    class="flex-col items-center justify-center min-h-screen max-w-[1325px] mx-auto px-4"
  >
    <MainTitleAll title="News" />

    <SelectBar :tabs="['All', 'Article', 'Interview']" @update="onTabChange" />

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mx-auto w-full">
      <!-- music -->
      <MusicItem
        v-for="(item, index) in News"
        :key="index"
        :item="item"
        name="Read More"
        class="w-full"
      />
    </div>
    <div class="my-6 flex justify-center">
      <MyButton
        text="Load More"
        bgColor="black"
        textColor="white"
        class="hover:bg-white/40"
        @click="loadMore"
        v-if="filteredAll.length > visibleCount"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "default" });

import { useNews } from "@/composables/useNews";
import { ref, computed } from "vue";

// Toàn bộ danh sách nhạc
const allNews = useNews();

// Biến đếm số phần tử hiển thị
const visibleCount = ref(6);

const selectedTab = ref("All");

// Cập nhật tab khi người dùng chọn tab mới
const onTabChange = (tab: string) => {
  selectedTab.value = tab;
  visibleCount.value = 6; // reset lại số phần tử khi đổi tab
};

// Danh sách đã lọc theo tab
const filteredAll = computed(() => {
  if (selectedTab.value === "All") return allNews;
  return allNews.filter((item) => item.title === selectedTab.value);
});

// Danh sách hiển thị hiện tại
const News = computed(() => filteredAll.value.slice(0, visibleCount.value));

// Hàm load thêm
const loadMore = () => {
  visibleCount.value += 6;
};
</script>
