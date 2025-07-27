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
    <template #default="{ item, index }">
      <NuxtLink
        :to="item.slug"
        class="flex flex-col items-center justify-center overflow-hidden mx-auto relative rounded-4xl z-20 w-[155px] h-[232px]"
      >
        <img :src="item.image" class="rounded-4xl w-full h-full object-cover" />
        <!-- Container giới hạn vùng hiển thị -->
        <div
          class="bg-[#19191a] text-white w-[120px] absolute top-3 text-[11px] py-1 rounded-2xl font-bold overflow-hidden mx-1 whitespace-nowrap"
        >
          <div class="marquee">
            <div
              class="marquee-content uppercase"
              :style="{ animationDuration: `${durations[index] || 5}s` }"
            >
              <span v-for="i in 4" :key="i" class="mr-4">
                {{ item.name }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="bg-[#19191a] font-medium text-lg py-2 rounded-3xl absolute bottom-3 z-20 text-white hover:bg-[#333335] transition-colors duration-300 cursor-pointer pointer-events-auto w-[130px]"
        >
          {{ item.day }}
        </div>
      </NuxtLink>
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const props = defineProps<{
  items: { name: string; image: string; slug: string; day: string }[];
}>();

// Mỗi item sẽ có duration riêng
const durations = ref<number[]>([]);

onMounted(async () => {
  await nextTick();

  const contents = document.querySelectorAll(".marquee-content");
  const baseSpeed = 50; // pixel per second

  durations.value = Array.from(contents).map((el: any) => {
    const width = el.scrollWidth;
    const duration = width / baseSpeed;
    return duration;
  });
});
</script>

<style scoped>
.marquee {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.marquee-content {
  display: inline-flex;
  animation: scroll-left 5s linear infinite;
  width: max-content;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
