<template>
  <div class="py-20 sticky top-2">
    <div
      class="lg:w-full w-[398px] flex justify-center relative whitespace-nowrap"
    >
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
          v-for="(item, index) in visibleTabs"
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
import { ref, onMounted, onUnmounted, nextTick, computed, watch } from "vue";

const props = defineProps<{
  tabs: string[];
  maxMobileTabs?: number; // số tabs tối đa trên mobile, mặc định là 4
}>();

const emit = defineEmits<{
  (e: "update", tab: string): void;
}>();

const selectedIndex = ref(0);
const hoverIndex = ref(0);

// Emit khi tab thay đổi
watch(selectedIndex, (index) => {
  emit("update", visibleTabs.value[index]);
});

// Responsive xử lý mobile
const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);

  nextTick(() => {
    const children = tabListRef.value?.children || [];
    tabRefs.value = Array.from(children).filter(
      (child: any) => child.tagName === "LI"
    ) as HTMLElement[];

    hoverIndex.value = selectedIndex.value;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

// Tabs hiển thị theo màn hình
const visibleTabs = computed(() => {
  return isMobile.value
    ? props.tabs.slice(0, props.maxMobileTabs ?? 4)
    : props.tabs;
});

// Refs
const tabRefs = ref<HTMLElement[]>([]);
const tabListRef = ref<HTMLElement | null>(null);

// Tính toán vị trí và kích thước của indicator
const indicatorStyle = computed(() => {
  const el = tabRefs.value[hoverIndex.value];
  if (!el) return {};
  return {
    left: `${el.offsetLeft}px`,
    width: `${el.offsetWidth}px`,
    height: `${el.offsetHeight}px`,
  };
});
</script>

<style scoped>
ul > div {
  z-index: 1; /* Đảm bảo indicator nằm dưới text */
}
</style>
