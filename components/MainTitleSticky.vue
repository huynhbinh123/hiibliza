<template>
  <div class="w-full flex justify-center items-center pt-8 relative">
    <!-- MAIN TITLE -->
    <div
      ref="titleRef"
      class="lg:w-full flex flex-col items-center justify-center text-center z-10 transition-all duration-500"
      :class="[
        isFixed
          ? 'fixed top-[28%] lg:top-[33%] -translate-y-[30%] left-1/2 -translate-x-1/2 z-0'
          : 'absolute top-[28%] lg:top-[33%] -translate-y-[30%] left-1/2 -translate-x-1/2',
        isHidden ? 'opacity-0 scale-90' : 'opacity-100 scale-100',
      ]"
    >
      <h1
        class="text-7xl lg:text-[160px] font-extrabold uppercase flex justify-center items-center"
      >
        <span
          v-for="(letter, index) in currentLetters"
          :key="index"
          class="letter"
          :style="{ animationDelay: `${letterDelays[index]}ms` }"
        >
          {{ letter }}
        </span>
      </h1>
    </div>
    <!--  -->
    <div class="relative z-20 lg:pt-[720px] pt-[450px]">
      <div class="relative w-full z-20">
        <!-- Ảnh nền -->
        <img
          ref="firstImage"
          :src="event.img"
          alt=""
          class="w-full lg:h-auto h-[690px] object-cover rounded-4xl shadow-lg"
        />

        <!-- Sticky nội dung -->
        <div
          class="absolute inset-0 top-6 z-20 flex items-start justify-center"
        >
          <div class="sticky top-[50vh] space-y-4 pb-[30px]">
            <h2
              class="max-w-[892px] text-white lg:text-5xl text-4xl font-bold text-center"
            >
              <NuxtLink :to="event.slug">{{ event.name }}</NuxtLink>
            </h2>
            <div class="flex justify-center space-x-3">
              <UButton
                size="lg"
                color="primary"
                label="Sign Up"
                :to="event.slug"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
              <div>
                <UButton
                  size="lg"
                  color="primary"
                  variant="soft"
                  label="VIP Tables"
                  class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                  @click="showModal = true"
                />

                <!-- Modal overlay -->
                <div
                  v-if="showModal"
                  class="fixed inset-0 bg-black/80 bg-opacity-60 flex items-center justify-center z-50"
                  @click.self="showModal = false"
                >
                  <!-- Modal content -->
                  <div class="relative bg-white rounded-4xl">
                    <button
                      class="absolute top-2 right-3 cursor-pointer text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-30"
                      @click="showModal = false"
                    >
                      ✕
                    </button>
                    <Subscribe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
const showModal = ref(false);
watch(showModal, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

defineProps<{
  event: {
    img: string;
    name: string;
    slug: string;
  };
}>();

// main title
const words = ["The", "Future", "of", "Clubbing"];
const currentWord = ref(words[0]);
const currentLetters = ref<string[]>([]);
const letterDelays = ref<number[]>([]);
let intervalId: ReturnType<typeof setInterval>;
function updateCurrentWord(index: number) {
  const word = words[index];
  currentWord.value = word;
  const letters = word.split("");
  const displayOrder: number[] = new Array(letters.length);
  let left = 0;
  let right = letters.length - 1;
  let delay = 0;
  const step = 120;
  while (left < right) {
    displayOrder[left] = delay;
    displayOrder[right] = delay;
    delay += step;
    left++;
    right--;
  }
  if (left === right) {
    displayOrder[left] = delay;
  }
  currentLetters.value = letters;
  letterDelays.value = displayOrder;
}
onMounted(() => {
  updateCurrentWord(0);
  let idx = 1;
  intervalId = setInterval(() => {
    updateCurrentWord(idx);
    idx = (idx + 1) % words.length;
  }, 800);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
// ẩn main title

const isFixed = ref(true);
const firstImage = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const isHidden = ref(false);
const handleScroll = () => {
  if (!firstImage.value || !titleRef.value) return;

  const imgRect = firstImage.value.getBoundingClientRect();
  const titleHeight = titleRef.value.offsetHeight;

  const imageTop = imgRect.top;
  const imageBottom = imgRect.bottom;

  const screenCenter = window.innerHeight * 0.33 + titleHeight * 0.3;

  // fixed khi hình chưa chạm vùng tiêu đề
  if (imageTop + imgRect.height / 2 <= screenCenter) {
    isFixed.value = false;
  } else {
    isFixed.value = true;
  }

  // ẩn nếu ảnh đè lên phần title
  isHidden.value = imageTop < 100 && imageBottom > 100;
};

onMounted(() => {
  updateCurrentWord(0);
  let idx = 1;
  intervalId = setInterval(() => {
    updateCurrentWord(idx);
    idx = (idx + 1) % words.length;
  }, 800);

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // lần đầu để xử lý luôn nếu user load giữa trang
});

onUnmounted(() => {
  clearInterval(intervalId);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>
