<template>
  <div class="flex items-center justify-center mt-22">
    <!-- menu items -->
    <div
      class="flex flex-wrap items-center justify-center text-sm font-bold uppercase gap-2 text-black"
    >
      <template v-for="(item, index) in menuItems" :key="item.link">
        <NuxtLink :to="item.link" class="hover:text-gray-500">
          {{ item.name }}
        </NuxtLink>
        <span v-if="index !== menuItems.length - 1">/</span>
      </template>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center w-full py-8">
    <swiper
      :pagination="{ dynamicBullets: true }"
      loop
      :modules="modules"
      class="mySwiper w-full max-w-[1200px] rounded-3xl"
    >
      <swiper-slide
        v-for="(img, index) in imagesList"
        :key="index"
        class="flex justify-center"
      >
        <NuxtLink :to="img.slug"
          ><img
            :src="img.img"
            alt=""
            class="max-w-full max-h-[808px] object-contain flex justify-center"
        /></NuxtLink>
      </swiper-slide>
    </swiper>
    <!-- CHẾ ĐỘ MOBILE/SM/MD -->
    <div
      class="flex flex-col justify-center items-center mt-10 w-full lg:hidden"
    >
      <div
        v-for="(item, productIndex) in products"
        :key="productIndex"
        class="flex flex-col items-center justify-center border-t py-8 w-full"
      >
        <h1 class="text-black text-3xl mb-3">{{ item.name }}</h1>
        <p class="text-xl uppercase text-black mb-3">{{ item.desc }}</p>

        <!-- Hiển thị ảnh chia 2 hoặc 4 -->
        <div
          v-if="item.img.length > 1"
          class="grid gap-2 w-full"
          :class="[item.img.length > 2 ? 'sm:grid-cols-4' : 'sm:grid-cols-2']"
        >
          <img
            v-for="(imgSrc, imageIndex) in item.img.slice(
              0,
              item.img.length % 2 === 1 ? item.img.length - 1 : item.img.length
            )"
            :key="imageIndex"
            :src="
              hoveredIndex?.productIndex === productIndex &&
              hoveredIndex?.imageIndex === imageIndex
                ? item.img2[imageIndex]
                : imgSrc
            "
            class="object-cover rounded-2xl max-h-[580px] w-full transition-all duration-300 cursor-pointer"
            @mouseenter="hoveredIndex = { productIndex, imageIndex }"
            @mouseleave="hoveredIndex = null"
          />
        </div>

        <!-- Ảnh cuối nếu lẻ -->
        <div v-if="item.img.length % 2 === 1" class="w-full mt-2">
          <img
            :src="item.img[item.img.length - 1]"
            :alt="item.name"
            class="object-cover rounded-2xl max-h-[580px] w-full transition-all duration-300 cursor-pointer"
            @mouseenter="
              hoveredIndex = { productIndex, imageIndex: item.img.length - 1 }
            "
            @mouseleave="hoveredIndex = null"
          />
        </div>
      </div>
    </div>

    <!-- CHẾ ĐỘ LG TRỞ LÊN -->
    <div
      class="hidden lg:flex flex-col items-center justify-center w-full max-w-[1200px] mt-10"
    >
      <div
        v-for="(item, index) in products"
        :key="index"
        class="flex flex-col w-full items-center justify-center border-t py-8"
      >
        <h1 class="text-black text-3xl mb-4">{{ item.name }}</h1>

        <!-- Container giới hạn chiều rộng -->
        <div class="w-full">
          <!-- Grid chia ảnh tự động -->
          <div
            class="grid gap-4"
            :style="`grid-template-columns: repeat(${item.img.length}, minmax(0, 1fr));`"
          >
            <img
              v-for="(imgSrc, i) in item.img"
              :key="i"
              :src="imgSrc"
              alt=""
              class="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "store",
});
import { ref } from "vue";
const hoveredIndex = ref<{ productIndex: number; imageIndex: number } | null>(
  null
);

const menuItems = [
  { name: "Mens", link: "/collections/mens" },
  { name: "Womens", link: "/collections/womens" },
  { name: "T-Shirts", link: "/collections/t-shirts" },
  { name: "Hoodies", link: "/collections/hoodies" },
  { name: "Tanks", link: "/collections/tanks" },
  { name: "Shorts", link: "/collections/shorts" },
  { name: "Accessories", link: "/collections/accessories" },
  { name: "New-Releases", link: "/collections/new-releases" },
  { name: "Archive", link: "/collections/archive" },
];

const products = [
  {
    name: "SPRING SUMMER 2025",
    desc: "CONNECTING CULTURES",
    img: ["/imgs/summer1.webp", "/imgs/summer2.webp", "/imgs/summer3.webp"],
    img2: ["/imgs/summer12.webp", "/imgs/summer22.webp", "/imgs/summer33.webp"],
    slug: "/",
  },
  {
    name: "SESSENTIAL MENSWEAR",
    img: [
      "/imgs/men1.webp",
      "/imgs/men2.webp",
      "/imgs/men3.webp",
      "/imgs/men4.webp",
    ],
    img2: [
      "/imgs/men11.webp",
      "/imgs/men22.webp",
      "/imgs/men33.webp",
      "/imgs/men44.webp",
    ],
    slug: "/",
  },
  {
    name: "SELECTED WOMENSWEAR",
    img: ["/imgs/women1.webp", "/imgs/women2.webp", "/imgs/women3.webp"],
    img2: ["/imgs/woman11.webp", "/imgs/woman22.webp", "/imgs/woman33.webp"],
    slug: "/",
  },
  {
    name: "POPULAR SHORTS",
    img: [
      "/imgs/short1.webp",
      "/imgs/short2.webp",
      "/imgs/short3.webp",
      "/imgs/short4.webp",
    ],
    img2: [
      "/imgs/short11.webp",
      "/imgs/short22.webp",
      "/imgs/short33.webp",
      "/imgs/short44.webp",
    ],
    slug: "/",
  },
];

const imagesList = [
  {
    img: "/imgs/b1.webp",
    slug: "collections/shop-now-man-home",
  },
  {
    img: "/imgs/b2.webp",
    slug: "collections/shop-now-woman-home",
  },
  {
    img: "/imgs/b3.jpg",
    slug: "collections/shop-now-man-home",
  },
  {
    img: "/imgs/b4.jpg",
    slug: "collections/shop-now-woman-home",
  },
  {
    img: "/imgs/b5.webp",
    slug: "collections/shop-now-man-home",
  },
  {
    img: "/imgs/b6.jpg",
    slug: "collections/shop-now-woman-home",
  },
];

// swiper

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>

<style></style>
