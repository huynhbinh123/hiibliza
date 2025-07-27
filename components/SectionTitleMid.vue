<template>
  <div ref="wrapperRef" :class="['relative', wrapperClass]">
    <div
      ref="titleRef"
      class="sticky top-[50vh] flex items-center justify-center transition-opacity duration-500"
      :style="{ opacity: titleOpacity }"
    >
      <h1 :class="['font-bold text-8xl uppercase text-black', titleClass]">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  title: string;
  wrapperClass?: string;
  titleClass?: string;
}>();

const wrapperRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const titleOpacity = ref(1);

const handleScroll = () => {
  if (!wrapperRef.value || !titleRef.value) return;

  const wrapperRect = wrapperRef.value.getBoundingClientRect();
  const titleRect = titleRef.value.getBoundingClientRect();

  const wrapperHeight = wrapperRect.height;

  const topThreshold = wrapperRect.top + wrapperHeight * 0.2;
  const bottomThreshold = wrapperRect.bottom - wrapperHeight * 0.2;

  const titleTop = titleRect.top;
  const titleBottom = titleRect.bottom;

  // Check if title is within the fade zones
  if (titleBottom < topThreshold || titleTop > bottomThreshold) {
    titleOpacity.value = 0;
  } else if (titleTop < topThreshold) {
    // approaching top fade zone
    const distance = titleBottom - wrapperRect.top;
    titleOpacity.value = Math.max(0, distance / (wrapperHeight * 0.2));
  } else if (titleBottom > bottomThreshold) {
    // approaching bottom fade zone
    const distance = wrapperRect.bottom - titleTop;
    titleOpacity.value = Math.max(0, distance / (wrapperHeight * 0.2));
  } else {
    // fully visible
    titleOpacity.value = 1;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // ensure initial state
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
