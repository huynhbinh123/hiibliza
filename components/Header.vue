<template>
  <div
    class="relative min-h-[75vh] flex justify-center items-start overflow-visible"
  >
    <!-- HEADER -->
    <div
      ref="menuHeader"
      class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center w-[400px] px-1 transition-all duration-300"
      :class="[
        isOpen
          ? 'rounded-t-4xl bg-black text-white'
          : 'rounded-4xl bg-white text-black shadow-md',
      ]"
      style="height: 56px"
    >
      <NuxtLink to="/" class="flex items-center">
        <h1
          class="text-2xl font-black cursor-pointer px-3 py-2 rounded-4xl"
          :class="
            isOpen
              ? 'bg-black text-white hover:bg-[#3b3b3a]'
              : 'bg-white text-black hover:bg-[rgb(194,194,194)]'
          "
        >
          HÏ IBIZA®
        </h1>
      </NuxtLink>
      <button
        class="text-lg font-semibold px-3 py-2 rounded-4xl cursor-pointer transition-colors duration-300 w-[100px] text-center"
        :class="
          isOpen
            ? 'bg-black text-white hover:bg-[#3b3b3a]'
            : 'bg-[#e0e0e0] text-black hover:bg-[rgb(194,194,194)]'
        "
        @click="toggleMenu"
      >
        {{ isOpen ? "Close" : "Menu" }}
      </button>
    </div>

    <!-- DROPDOWN BELOW HEADER -->
    <transition name="dropdown-slide">
      <div
        v-if="isOpen"
        ref="dropdown"
        class="fixed top-[56px] left-1/2 -translate-x-1/2 z-40 w-[400px] h-[90vh] max-h-[90vh] overflow-y-auto max-w-4xl rounded-b-3xl bg-black text-white shadow-lg p-6 text-center space-y-4 rounded-lg"
      >
        <div class="text-xl font-bold uppercase">Events</div>
        <div class="text-xl font-bold uppercase">News</div>
        <div class="text-xl font-bold uppercase">Music</div>
        <div class="text-xl font-bold uppercase">VIP Tables</div>
        <div class="text-xl font-bold uppercase">About</div>
        <div class="text-xl font-bold uppercase">Store</div>
        <div class="pt-4 border-t border-gray-700 text-xs text-gray-400">
          © 2017 - 2025 Ushuaïa Entertainment S.L.<br />
          <span class="underline cursor-pointer">EN</span> / ES ·
          <span class="underline cursor-pointer">FAQs</span> /
          <span class="underline cursor-pointer">Contact</span>
        </div>
      </div>
    </transition>

    <!-- MAIN TITLE -->
    <div
      class="flex flex-col items-center justify-center text-center fixed top-[33%] transform -translate-y-[30%] w-full z-1"
    >
      <h1
        class="text-[160px] font-extrabold uppercase flex justify-center items-center"
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
  </div>
</template>
<script setup lang="ts">
// menu
const isOpen = ref(false);
const menuHeader = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// Click ra ngoài thì đóng menu
function handleClickOutside(event: MouseEvent) {
  if (
    isOpen.value &&
    !menuHeader.value?.contains(event.target as Node) &&
    !dropdown.value?.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  updateCurrentWord(0);
  let idx = 1;

  intervalId = setInterval(() => {
    updateCurrentWord(idx);
    idx = (idx + 1) % words.length;
  }, 800);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  clearInterval(intervalId);
});

// 🔒 Khóa scroll body khi menu mở
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Title animation
const words = ["The", "Future", "of", "Clubbing"];
const currentWord = ref(words[0]);
const currentLetters = ref<string[]>([]);
const letterDelays = ref<number[]>([]);

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

let intervalId: ReturnType<typeof setInterval>;
</script>

<style scoped>
/* menu dropdown */
.dropdown-slide-enter-active,
.dropdown-slide-leave-active {
  transition: all 0.4s ease;
}
.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.dropdown-slide-enter-to,
.dropdown-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* từng chữ xuất hiện */
.letter {
  opacity: 0;
  display: inline-block;
  transform: scale(0.8);
  animation: appearCenter 0.4s ease-out forwards;
}

@keyframes appearCenter {
  from {
    opacity: 0;
    transform: scale(0.6) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
