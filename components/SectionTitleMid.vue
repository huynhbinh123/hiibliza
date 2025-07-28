<template>
  <div
    ref="wrapperRef"
    :class="['relative, lg:h-[500px] h-[420px]', wrapperClass]"
  >
    <div
      ref="titleRef"
      class="sticky top-[50vh] flex items-center justify-center transition-opacity duration-500"
      :style="{ opacity: titleOpacity }"
    >
      <h1
        :class="[
          'font-bold lg:text-8xl text-6xl text-center uppercase text-black white',
          titleClass,
        ]"
      >
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

  const fadeZone = wrapperRect.height * 0.2;

  const distanceFromTop = titleRect.top - wrapperRect.top;
  const distanceFromBottom = wrapperRect.bottom - titleRect.bottom;

  if (distanceFromTop < fadeZone) {
    titleOpacity.value = distanceFromTop / fadeZone;
  } else if (distanceFromBottom < fadeZone) {
    titleOpacity.value = distanceFromBottom / fadeZone;
  } else {
    titleOpacity.value = 1;
  }

  titleOpacity.value = Math.max(0, Math.min(1, titleOpacity.value));
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // ensure initial state
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
