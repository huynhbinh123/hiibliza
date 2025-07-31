<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen max-w-[1325px] mx-auto px-4"
  >
    <!-- SECTION CHỮ -->
    <div
      ref="textRef"
      class="sticky top-[40vh] flex flex-col items-center z-0 mb-[700px]"
      :class="{ 'opacity-0 pointer-events-none': isHidden }"
    >
      <div class="mt-2">
        <h1
          class="text-7xl lg:text-8xl font-extrabold uppercase flex justify-center items-center"
        >
          About
        </h1>
      </div>
    </div>
    <div
      ref="imageRef"
      class="lg:w-[1264px] w-full lg:h-auto h-[538px] object-cover px-4 relative"
    >
      <img src="/imgs/about1.avif" alt="" class="rounded-4xl" />
      <div
        class="absolute top-3 left-8 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
      >
        Hï Ibiza
      </div>
    </div>
    <div class="max-w-[1052px] mx-auto flex flex-col text-left mt-20">
      <p class="lg:text-2xl text-lg font-bold mb-6">
        Officially the World’s #1 Club, Hï Ibiza is a 360 nightlife experience
        featuring the world’s best DJs, incredible production, plus so much
        more.
      </p>
      <p class="lg:text-2xl text-lg font-bold mb-6">
        Officially the World’s #1 Club, Hï Ibiza is a 360 nightlife experience
        featuring the world’s best DJs, incredible production, plus so much
        more.
      </p>
      <p class="lg:text-2xl text-lg font-bold mb-6">
        Officially the World’s #1 Club, Hï Ibiza is a 360 nightlife experience
        featuring the world’s best DJs, incredible production, plus so much
        more.
      </p>
      <p class="lg:text-2xl text-lg font-bold mb-6">
        Officially the World’s #1 Club, Hï Ibiza is a 360 nightlife experience
        featuring the world’s best DJs, incredible production, plus so much
        more.
      </p>
    </div>
  </div>
  <div class="relative z-20 w-full flex flex-col justify-center items-center">
    <UCarousel
      :items="items"
      :ui="{
        item: 'basis-1/3 pr-2',
        dots: 'mt-10 lg:ml-[48%] ml-[36%] flex justify-center gap-3',
        dot: 'h-2 w-2 rounded-full bg-gray-400 transition-all data-[state=active]:!bg-black data-[state=active]:!scale-110',
      }"
      class="w-full"
      loop
      dots
    >
      <template #default="{ item }">
        <img :src="item" alt="" class="!w-[310px] !h-[310px] object-cover" />
      </template>
    </UCarousel>

    <div
      v-for="(section, index) in sections"
      :key="section.id"
      class="w-full flex flex-col items-center justify-center"
    >
      <SectionTitleMid :title="section.title" />

      <div v-if="section.images.type === 'swiper'">
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
          class="lg:w-[1264px] w-full lg:h-auto h-[538px] object-cover px-4"
        >
          <SwiperSlide
            v-for="(img, i) in section.images.list"
            :key="i"
            class="relative rounded-4xl overflow-hidden"
          >
            <img
              :src="img"
              class="w-full h-full object-cover rounded-4xl relative z-10"
            />
            <div
              class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
            >
              {{ section.title }}
            </div>
          </SwiperSlide>
          <div class="swiper-pagination flex justify-center space-x-2 my-3" />
        </Swiper>
      </div>

      <div v-else-if="section.images.type === 'grid'" class="w-[1264px]">
        <!-- Nếu là secret-garden thì hiển thị 2 ảnh nhỏ trên, 1 ảnh to dưới -->
        <div
          v-if="section.id === 'secret-garden'"
          class="flex flex-col gap-2 relative"
        >
          <div class="grid grid-cols-2 gap-2 relative">
            <div
              v-for="(img, i) in section.images.grid"
              :key="i"
              class="relative"
            >
              <img :src="img" alt="" class="w-full object-cover" />
              <div
                class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
              >
                {{ section.title }}
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              :src="section.images.main"
              alt=""
              class="w-full object-cover"
            />
            <div
              class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
            >
              {{ section.title }}
            </div>
          </div>
        </div>

        <!-- Các section khác giữ layout ảnh to trên, ảnh nhỏ dưới -->
        <div v-else class="relative">
          <img
            :src="section.images.main"
            alt=""
            class="lg:w-[1264px] w-[412px] lg:h-auto h-[412px] mb-2"
          />
          <div
            class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
          >
            {{ section.title }}
          </div>
          <div class="grid grid-cols-2 gap-2 relative">
            <div
              v-for="(img, i) in section.images.grid"
              :key="i"
              class="relative"
            >
              <img alt="" :src="img" class="w-full object-cover" />
              <div
                class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
              >
                {{ section.title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else-if="section.images.type === 'single'"
        class="w-[1264px] relative"
      >
        <img
          :src="section.images.src"
          alt=""
          class="lg:w-[1264px] w-[412px] lg:h-auto h-[412px] mb-2"
        />
        <div
          class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
        >
          {{ section.title }}
        </div>
      </div>

      <div class="max-w-2xl mx-auto flex flex-col text-left mt-20">
        <p class="lg:text-2xl text-lg font-bold mb-6 text-blue-500">
          {{ section.highlight }}
        </p>
        <p class="lg:text-2xl text-lg font-bold mb-6">
          {{ section.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useElementBounding } from "@vueuse/core";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [EffectCoverflow, Pagination];

const vipImageList = ["/imgs/viptables2.avif", "/imgs/viptables3.avif"];

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

// img
const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];

const sections = [
  {
    id: "theatre",
    title: "The Theatre",
    highlight: "The Theatre",
    images: {
      type: "swiper",
      list: ["/imgs/viptables2.avif", "/imgs/viptables3.avif"],
    },
    description:
      "Inspired by classic Italian amphitheatre design, the dancefloor is surrounded by a raised terrace hosting the VIP area. All aspects of this room have been carefully considered to ensure a close connection between artist and audience. We have tailored each residency to have a bespoke look and feel, guaranteeing that no two nights are ever the same.",
  },
  {
    id: "club-room",
    title: "Club Room",
    highlight: "The Club Room",
    images: {
      type: "grid",
      main: "/imgs/clubroom1.avif",
      grid: ["/imgs/clubroom2.avif", "/imgs/clubroom3.avif"],
    },
    description:
      "The underground vibe of the Club Room offers guests a more intimate feel, with a low ceiling boasting incredible lighting installations bathing the darkened room in technicoloured beams of light. With the DJ booth at eye-level clubbers can feel a deeper connection with the artist in an intimate setting.",
  },
  {
    id: "wild-corner",
    title: "Wild Corner",
    highlight: "The Wild Corner",
    images: {
      type: "single",
      src: "/imgs/wild1.avif",
    },
    description:
      "Lose yourself in the madness of the most infamous bathroom in the world. Anything goes in The Wild Corner! Expect the very best house and disco, with big-name guests dropping in for unannounced sets.",
  },
  {
    id: "magic-garden",
    title: "Magic Garden",
    highlight: "Magic Garden",
    images: {
      type: "single",
      src: "/imgs/magic.avif",
    },
    description:
      "Bringing back the original spirit of al fresco ambience to the Ibizan club scene, the Magic Garden is the first of two outdoor terraces, a stunning space to enjoy a drink and refresh after letting loose on the dancefloor.",
  },

  {
    id: "secret-garden",
    title: "Secret Garden",
    highlight: "Secret Garden",
    images: {
      type: "grid",
      grid: ["/imgs/secret2.avif", "/imgs/secret3.avif"],
      main: "/imgs/secret1.avif",
    },
    description:
      "Located behind the Club Room, the Secret Garden is a magical outdoor terrace hosting otherworldly installations and luxurious teepees for clubbers to relax and chill.",
  },
];
</script>

<style></style>
