<template>
  <UContainer>
    <!-- MainTitleSticky-->
    <MainTitleSticky :event="event" />

    <SectionTitleMid title="Residents" wrapperClass="h-[600px]" />

    <!-- list imgs -->
    <UContainer>
      <!-- Carousel -->
      <div
        class="relative z-20 w-full flex flex-col justify-center items-center"
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
            v-for="(item, index) in imageList"
            :key="index"
            class="w-[600px] h-[100%] rounded-4xl overflow-hidden"
          >
            <img
              :src="item.src"
              class="w-full h-full object-cover rounded-4xl relative z-10"
            />
            <div
              class="absolute bottom-4 left-0 w-full px-4 flex flex-col items-center justify-end z-20 pointer-events-none"
            >
              <div
                class="text-white text-sm uppercase px-2 py-1 font-bold text-center bg-[hsl(280.59,40.48%,16.47%)] rounded-2xl"
              >
                {{ item.day }}
              </div>
              <div
                class="text-white text-3xl uppercase font-bold text-center mt-2"
              >
                {{ item.title }}
              </div>
              <MyButton text="Read More" class="mt-4" :to="item.slug" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination mt-10 flex justify-center space-x-2" />
      </div>
    </UContainer>

    <SectionTitleMid title="SPECIAL EVENTS" wrapperClass="h-[600px]" />

    <!--  Show -->
    <div class="flex flex-col items-center justify-center">
      <NuxtLink
        :to="Show.slug"
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
      </NuxtLink>

      <ButtonShow text="Show All" :to="Show.showAll" />
    </div>

    <!-- giới thiệu  -->
    <div class="mx-auto max-w-6xl px-4 pt-29 relative z-20">
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
    <SectionTitleMid title="Music" wrapperClass="h-[600px]" />
    <!-- Music List -->
    <div>
      <MusicList :items="musicList" />
      <ButtonShow
        text="Show All"
        to="/music"
        class="flex justify-center mt-[54px]"
      />
    </div>

    <SectionTitleMid title="SS25" wrapperClass="h-[600px]" />

    <!-- Fashion products -->
    <div class="flex justify-center">
      <FashionProducts :items="fashionProducts" buttonText="Buy Now" />
    </div>

    <SectionTitleMid title="Subscribe" wrapperClass="h-[600px]" class="mt-12" />

    <!-- subscribe -->
    <div class="flex justify-center">
      <Subscribe />
    </div>

    <SectionTitleMid title="News" wrapperClass="h-[600px]" />

    <!-- new -->
    <div class="flex justify-center">
      <FashionProducts :items="News" buttonText="Read More" />
    </div>
    <ButtonShow
      text="Show All"
      class="flex items-center justify-center mx-auto mt-20"
      to="/new"
    />
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
].map((item) => ({
  ...item,
  slug:
    "/residency/" +
    item.title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
      .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
}));

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

const event = {
  name: "THE TRILOGY HÏ IBIZA CLOSING PARTY 2025",
  img: "/imgs/trilogy.avif",
  slug: "campaing/hi-ibiza-closing-party-2025",
};

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
].map((item) => ({
  ...item,
  slug:
    "/music/" +
    item.description
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
      .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
}));

// SHow
const Show = {
  img: "/imgs/party.avif",
  title: "Saturday, Oct 11, 2025",
  description: "The Trilogy Hï Ibiza Closing Party 2025",
  slug: "/event/the-trilogy-hi-ibiza-closing-party",
  showAll: "/events-calendar",
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
].map((item) => ({
  ...item,
  slug:
    "/products/" +
    item.description
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
      .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
}));

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
].map((item) => ({
  ...item,
  slug:
    "/news/" +
    item.description
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
      .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
}));
</script>
<style>
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  cursor: pointer;
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
