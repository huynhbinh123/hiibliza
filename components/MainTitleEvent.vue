<template>
  <div>
    <!-- SECTION CHỮ -->
    <div
      ref="textRef"
      class="sticky top-[40vh] flex flex-col items-center z-0"
      :class="{ 'opacity-0 pointer-events-none': isHidden }"
    >
      <div
        class="text-black/80 text-xs uppercase px-2 py-1 font-bold text-center bg-gray-300 rounded-2xl"
      >
        Events
      </div>
      <div class="text-black text-start text-5xl uppercase font-bold mt-2">
        Season 2025
      </div>
      <div class="text-black/80 text-start text-lg uppercase font-bold mt-2">
        Jul 29 — Oct 11, 2025
      </div>
    </div>

    <!-- ẢNH -->
    <img
      ref="imageRef"
      src="/imgs/event.avif"
      alt=""
      class="lg:w-[1264px] w-[413px] lg:h-auto h-[621px] rounded-4xl mt-[700px] relative z-30"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useElementBounding } from "@vueuse/core";

const textRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);

// Lấy toạ độ phần tử ảnh và chữ
const imageBounds = useElementBounding(imageRef);
const textBounds = useElementBounding(textRef);

const isHidden = computed(() => {
  return (
    imageBounds.top.value !== null &&
    imageBounds.bottom.value !== null &&
    textBounds.top.value !== null &&
    textBounds.bottom.value !== null &&
    imageBounds.top.value <= textBounds.top.value &&
    imageBounds.bottom.value >= textBounds.bottom.value
  );
});
</script>
