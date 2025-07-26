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
          src="/imgs/trilogy.avif"
          alt=""
          class="w-full h-auto object-cover rounded-4xl shadow-lg relative z-10"
        />

        <!-- Sticky nội dung -->
        <div
          class="absolute z-20 top-6 inset-0 flex items-start justify-center"
        >
          <!-- h2 sticky khi scroll -->
          <div class="sticky top-[50vh] space-y-4 pb-[30px]">
            <h2 class="text-white text-5xl font-bold text-center">
              THE TRILOGY HÏ IBIZA CLOSING PARTY <br />2025
            </h2>
            <div class="flex justify-center space-x-3">
              <UButton
                size="lg"
                color="primary"
                label="Sign Up"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
              <UButton
                size="lg"
                color="primary"
                variant="soft"
                label="VIP Tables"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
    >
      <h1 class="font-bold text-8xl uppercase text-black">Residents</h1>
    </div>

    <!-- list imgs -->
    <UContainer>
      <!-- Carousel -->
      <div
        class="relative z-20 w-full flex flex-col justify-center items-center mt-90"
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
              <MyButton text="Read More" class="mt-4" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination mt-4 flex justify-center space-x-2" />
      </div>
    </UContainer>

    <!--  Show -->
    <div class="flex flex-col items-center justify-center mt-90">
      <div
        class="flex flex-col items-center justify-center overflow-hidden mx-auto relative rounded-4xl z-20 w-[416px] h-[611px]"
      >
        <img :src="Show.img" alt="" class="w-full h-full object-cover" />
        <div
          class="absolute bottom-8 left-0 w-full px-4 flex flex-col items-center justify-end z-20 pointer-events-none"
        >
          <div
            class="text-white text-xs uppercase px-2 py-1 font-bold text-center bg-[#444448] rounded-2xl"
          >
            {{ Show.title }}
          </div>
          <div class="text-white text-3xl uppercase font-bold text-center mt-2">
            {{ Show.description }}
          </div>
          <MyButton text="Read More" class="mt-5" />
        </div>
      </div>
      <ButtonShow text="Show All" />
    </div>

    <!-- giới thiệu  -->
    <div class="mx-auto max-w-6xl px-4 py-29 relative z-20">
      <div class="text-center">
        <h2 class="font-bold text-8xl uppercase text-black mb-4">
          {{ introduce.name }}
        </h2>
      </div>
      <div class="max-w-2xl mx-auto text-left">
        <p class="text-2xl font-bold mb-6">{{ introduce.title }}</p>
        <div
          v-html="formattedDescription"
          class="text-lg text-gray-700 max-w-2xl"
        ></div>
      </div>
    </div>

    <!-- Music List -->
    <div class="mt-135">
      <MusicList :items="musicList" />
      <ButtonShow text="Show All" class="flex justify-center mt-[54px]" />
    </div>

    <!-- Fashion products -->
    <div class="flex justify-center mt-120">
      <FashionProducts :items="fashionProducts" buttonText="Buy Now" />
    </div>

    <!-- subscribe -->
    <div class="flex justify-center mt-132">
      <Subscribe />
    </div>

    <!-- new -->
    <div class="flex justify-center mt-120">
      <FashionProducts :items="News" buttonText="Read More" />
    </div>
    <ButtonShow text="Show All" class="flex justify-center mt-[54px]" />
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
    src: "/imgs/Fridays.avif",
    title: "Joseph Capriati Presents Metamorfosi",
    day: "Fridays",
  },
  { src: "/imgs/Saturdays.avif", title: "Black Coffee", day: "Saturdays" },
  { src: "/imgs/Sundays.avif", title: "Glitterbox", day: "Sundays" },
  {
    src: "/imgs/Mondays.avif",
    title: "MEDUZA And James Hype Present Our House ",
    day: "Mondays",
  },
  {
    src: "/imgs/Tuesdays.avif",
    title: "The Martinez Brothers ",
    day: "Tuesdays",
  },
  { src: "/imgs/Wednesdays.avif", title: "Dom Dolla", day: "Wednesdays" },
  {
    src: "/imgs/Thursdays.avif",
    title: "Hugel Presents Make The Girls Dance ",
    day: "Thursdays",
  },
];

const introduce = {
  name: "HÏ IBIZA",
  title: "Welcome to the future of clubbing.",
  description:
    "Officially the World’s #1 Club, Hï Ibiza is a 360 nightlife experience featuring the world’s best DJs, incredible production, plus so much more. As a multi-room venue, every element has been precision-engineered to deliver a new excellence in clubbing. Our pioneering music program encompasses three state-of-the-art rooms, with cutting-edge artists, surprise special guests and impromptu B2Bs. Arrive early to secure your spot on the dancefloor and take time to explore our variety of different spaces. With breathtaking terraces, luxury bars, and secret parties, discover your new favourite artist as you explore everything our venue has to offer",
};
const formattedDescription = computed(() =>
  introduce.description
    .split(". ")
    .filter(Boolean)
    .map((sentence) => `<p class="mb-2">${sentence.trim()}.</p>`)
    .join("")
);

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

// music list
const musicList = [
  {
    img: "/imgs/offplaylsit.avif",
    title: "Playlist",
    description: "Hï Ibiza Official Playlist",
  },
  {
    img: "/imgs/jonathankaspar.avif",
    title: "Audio",
    description: "Jonathan Kaspar Live At Hï Ibiza 2024",
  },
  {
    img: "/imgs/laylabenitez.avif",
    title: "Playlist",
    description: "Layla Benitez Live At Hï Ibiza 2024",
  },
  {
    img: "/imgs/b2bdan.avif",
    title: "Audio",
    description: "Eats Everything B2B Dan Shake Live At Hï Ibiza",
  },
  {
    img: "/imgs/djminx.avif",
    title: "Audio",
    description: "DJ Minx Live At Hï Ibiza 2024",
  },
  {
    img: "/imgs/ameme.avif",
    title: "Audio",
    description: "AMÉMÉ Live At Hï Ibiza 2024",
  },
];

// SHow
const Show = {
  img: "/imgs/party.avif",
  title: "Saturday, Oct 11, 2025",
  description: "The Trilogy Hï Ibiza Closing Party 2025",
};

// Fashion products
const fashionProducts = [
  {
    img: "/imgs/mascentiontshit.jpg",
    title: "SHOP",
    description: "M ASCENTION T-SHIRT HÏ",
  },
  {
    img: "/imgs/fctop.jpg",
    title: "SHOP",
    description: "HÏ IBIZA FC TOP",
  },
  {
    img: "/imgs/coreblack.jpg",
    title: "SHOP",
    description: "HÏ IBIZA CORE BLACK LOGO T-SHIRT",
  },
  {
    img: "/imgs/connecting.jpg",
    title: "SHOP",
    description: "CONNECTING CULTURES BLACK T-SHIRT",
  },
  {
    img: "/imgs/globaltank.jpg",
    title: "SHOP",
    description: "Hï IBIZA GLOBAL TANK",
  },
  {
    img: "/imgs/babydoll.jpg",
    title: "SHOP",
    description: "HYBRID LOGO BLACK BABYDOLL TEE",
  },
  {
    img: "/imgs/worldtour.jpg",
    title: "SHOP",
    description: "WORLD TOUR STICKER T-SHIRT",
  },
];

// News
const News = [
  {
    img: "/imgs/news1.avif",
    title: "article",
    description: "What’s On This Week",
  },
  {
    img: "/imgs/news2.avif",
    title: "interview",
    description: "James Hype The Road to Now",
  },
  {
    img: "/imgs/news3.avif",
    title: "article",
    description: "The Trilogy Hï Ibiza Closing Party 2025",
  },
  {
    img: "/imgs/news4.avif",
    title: "article",
    description: "Hï Ibiza Announces New Residents for 2025",
  },
  {
    img: "/imgs/news5.avif",
    title: "article",
    description: "Hï Ibiza Announces New Residents for 2025",
  },

  {
    img: "/imgs/news6.avif",
    title: "article",
    description: "Hï Ibiza Announces New Residents for 2025",
  },
];
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
