<template>
  <div class="py-20 sticky top-2">
    <div class="w-full flex justify-center relative">
      <ul
        ref="tabListRef"
        class="inline-flex relative items-center gap-2 bg-white text-black rounded-3xl p-1 shadow-md"
      >
        <!-- Indicator -->
        <div
          class="absolute rounded-3xl bg-gray-300 transition-all duration-300 ease-in-out"
          :style="indicatorStyle"
        ></div>

        <!-- Tabs -->
        <li
          v-for="(item, index) in tabs"
          :key="index"
          ref="tabRefs"
          @click="selectedIndex = index"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = selectedIndex"
          :class="[
            'relative py-2 px-4 cursor-pointer text-lg font-semibold rounded-3xl min-w-[72px] flex justify-center items-center z-10',
            selectedIndex === index
              ? 'bg-black text-white'
              : 'hover:bg-gray-300',
          ]"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed, watch } from "vue";

const props = defineProps<{
  tabs: string[];
}>();

const emit = defineEmits<{
  (e: "update", tab: string): void;
}>();

const selectedIndex = ref(0);
const hoverIndex = ref(0);

// Emit khi tab thay đổi
watch(selectedIndex, (index) => {
  emit("update", props.tabs[index]);
});

// Refs
const tabRefs = ref<HTMLElement[]>([]);
const tabListRef = ref<HTMLElement | null>(null);

// Tính toán vị trí và kích thước của indicator
const indicatorStyle = computed(() => {
  const el = tabRefs.value[hoverIndex.value];
  if (!el) return {};

  const offsetLeft = el.offsetLeft;
  const width = el.offsetWidth;
  return {
    left: `${offsetLeft}px`,
    width: `${width}px`,
    height: `${el.offsetHeight}px`,
  };
});

// Khởi tạo danh sách refs cho từng tab
onMounted(() => {
  nextTick(() => {
    const children = tabListRef.value?.children || [];
    tabRefs.value = Array.from(children).filter(
      (child: any) => child.tagName === "LI"
    ) as HTMLElement[];

    // Đặt hoverIndex ban đầu bằng selectedIndex
    hoverIndex.value = selectedIndex.value;
  });
});
</script>

<style scoped>
/* Để indicator không đè text */
ul > div {
  z-index: 1;
}
</style>
