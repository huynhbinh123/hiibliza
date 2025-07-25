<template>
  <UContainer>
    <div class="w-full flex justify-center items-center py-8 relative">
      <!-- Wrapper có kích thước bằng ảnh -->
      <div class="relative z-20 w-[1264px]">
        <!-- MAIN TITLE -->
        <div
          ref="titleRef"
          class="w-full flex flex-col items-center justify-center text-center z-10 transition-all duration-500"
          :class="
            isFixed
              ? 'fixed top-[33%] -translate-y-[30%] left-1/2 -translate-x-1/2 z-0'
              : 'absolute    -translate-y-[30%] left-1/2 -translate-x-1/2 '
          "
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

        <!-- Ảnh -->
        <img
          ref="firstImage"
          src="/public/img.png"
          alt=""
          class="w-full h-auto object-cover rounded-4xl shadow-lg relative z-10"
        />
      </div>
    </div>
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
    >
      <h1 class="font-black text-8xl font-medium uppercase text-black">
        Residents
      </h1>
    </div>
    <UContainer>
      <!-- Carousel -->
      <div
        class="relative z-20 w-full flex flex-col justify-center items-center pt-90"
      >
        <Swiper
          :modules="modules"
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          class="w-[1028px] h-[620px]"
        >
          <SwiperSlide
            v-for="(img, index) in imageList"
            :key="index"
            class="w-[600px] h-[100%] rounded-4xl overflow-hidden"
          >
            <img
              :src="img.src"
              class="w-full h-full object-cover rounded-4xl relative z-10"
            />
            <div
              class="absolute bottom-4 left-0 w-full px-4 flex flex-col items-center justify-end z-20 pointer-events-none"
            >
              <div
                class="text-white text-sm uppercase px-2 py-1 font-bold text-center bg-[hsl(280.59,40.48%,16.47%)] rounded-2xl"
              >
                {{ img.day }}
              </div>
              <div
                class="text-white text-3xl uppercase font-bold text-center mt-2"
              >
                {{ img.title }}
              </div>
              <UButton
                size="lg"
                color="primary"
                label="Buy Tickets"
                class="bg-white font-medium text-lg rounded-3xl text-black hover:bg-gray-300 transition-colors duration-300 cursor-pointer mt-4 pointer-events-auto"
              >
                Read More
              </UButton>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination mt-4 flex justify-center space-x-2" />
      </div>
    </UContainer>
  </UContainer>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
const modules = [EffectCoverflow, Pagination];
const imageList = [
  {
    src: "/snake.avif",
    title: "Joseph Capriati Presents Metamorfosi",
    day: "Fridays",
  },
  { src: "/blackcf.avif", title: "Black Coffee", day: "Saturdays" },
  { src: "/glitterbox.avif", title: "Glitterbox", day: "Sundays" },
  {
    src: "/present.avif",
    title: "MEDUZA And James Hype Present Our House ",
    day: "Mondays",
  },
  {
    src: "/matinetbrother.avif",
    title: "The Martinez Brothers ",
    day: "Tuesdays",
  },
  { src: "/domdolla.avif", title: "Dom Dolla", day: "Wednesdays" },
  {
    src: "/girldance.avif",
    title: "Hugel Presents Make The Girls Dance ",
    day: "Thursdays",
  },
];
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

const handleScroll = () => {
  if (!firstImage.value || !titleRef.value) return;

  const imgRect = firstImage.value.getBoundingClientRect();
  const titleHeight = titleRef.value.offsetHeight;

  const imageTop = imgRect.top;
  const imageHeight = imgRect.height;

  // Vị trí giữa ảnh trên màn hình
  const imageCenter = imageTop + imageHeight / 2;
  const screenCenter = window.innerHeight * 0.33 + titleHeight * 0.3;

  // Nếu giữa ảnh nằm phía trên vị trí giữa màn hình => title đã nằm trong ảnh
  if (imageCenter <= screenCenter) {
    isFixed.value = false; // Đổi sang absolute
  } else {
    isFixed.value = true; // Giữ fixed
  }
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

// mờ chữ khi gần ảnh
</script>
<style>
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #c4c4c4;
  opacity: 1;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.swiper-pagination-bullet-active {
  background-color: #000; /* màu chấm khi active */
  transform: scale(1.2);
}
/* main title */
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
