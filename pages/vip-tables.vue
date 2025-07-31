<template>
  <div class="relative w-full max-w-[1325px] mx-auto px-4">
    <!-- SECTION CHỮ -->
    <div
      ref="textRef"
      class="sticky top-[35vh] z-0 flex flex-col items-center transition-opacity"
      :class="{ 'opacity-0 pointer-events-none': isHidden }"
    >
      <div
        class="text-black/80 text-xs uppercase px-2 py-1 font-bold text-center bg-gray-300 rounded-2xl"
      >
        Vip Tables
      </div>

      <div class="text-black text-5xl uppercase font-bold mt-2 text-center">
        <span>For those ready to experience a</span>
        <span class="block">new level of luxury</span>
      </div>
      <MyButton
        text="VIP Tables"
        bgColor="black"
        textColor="white"
        class="hover:bg-white/40 mt-4"
        @click="showModal = true"
      />

      <!-- Modal overlay -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center z-50"
        @click.self="showModal = false"
      >
        <!-- Modal content -->
        <div class="relative bg-white rounded-4xl max-w-4xl">
          <button
            class="absolute top-2 right-3 cursor-pointer text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-30"
            @click="showModal = false"
          >
            ✕
          </button>
          <SelectModalEvent />
        </div>
      </div>
    </div>

    <!-- Swiper ảnh -->
    <div ref="imageRef" class="mt-[700px]">
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
          v-for="(img, index) in vipImageList"
          :key="index"
          class="relative rounded-4xl overflow-hidden"
        >
          <img
            :src="img"
            class="w-full h-full object-cover rounded-4xl relative z-10"
          />
          <div
            class="absolute top-3 left-8 z-20 text-xs uppercase py-1 font-bold text-center bg-[#19191a] text-white rounded-2xl px-3 w-max mt-1"
          >
            The Theatre
          </div>
        </SwiperSlide>
        <div class="swiper-pagination flex justify-center space-x-2 my-3" />
      </Swiper>
    </div>
  </div>
  <div
    class="flex flex-col items-center justify-center min-h-screen max-w-[1325px] mx-auto px-4"
  >
    <!-- desc -->
    <div class="max-w-2xl mx-auto text-left pt-20">
      <p class="lg:text-2xl text-lg font-bold mb-6">
        Our VIP service takes the Hï Ibiza experience to the very top, in every
        sense. Our VIP tables ensure guests have the best views while enjoying
        the immersive electronic shows featuring the biggest DJs on the planet,
        at the best club nights in Ibiza. Do not settle for anything less book a
        VIP table at Hï Ibiza. Embrace the extraordinary.
      </p>
    </div>

    <SectionTitleMid title="Vip Tables" />

    <Subscribe />

    <SectionTitleMid title="The Venue" />

    <div class="grid grid-cols-2 gap-2">
      <div
        class="flex whitespace-wrap"
        v-for="(img, index) in venueImageList"
        :key="index"
      >
        <img :src="img" alt="" class="w-[624px] h-auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useElementBounding } from "@vueuse/core";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";

const showModal = ref(false);

watch(showModal, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

const modules = [EffectCoverflow, Pagination];

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

const vipImageList = [
  "/imgs/viptables1.avif",
  "/imgs/viptables2.avif",
  "/imgs/viptables3.avif",
];

const venueImageList = Array.from(
  { length: 16 },
  (_, i) => `/imgs/venue${i + 1}.avif`
);

const imageList = [...vipImageList, ...venueImageList];
</script>
