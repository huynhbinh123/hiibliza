<template>
  <div>
    <div class="flex items-center justify-center mt-22">
      <!-- menu items -->
      <div
        class="flex flex-wrap items-center text-sm font-bold uppercase gap-2 text-black"
      >
        <template v-for="(item, index) in menuItems" :key="item.link">
          <NuxtLink :to="item.link" class="hover:underline">
            {{ item.name }}
          </NuxtLink>
          <span v-if="index !== menuItems.length - 1">/</span>
        </template>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-8">
      <swiper
        :pagination="{ dynamicBullets: true }"
        :modules="modules"
        class="mySwiper w-full max-w-[1200px] rounded-3xl"
      >
        <swiper-slide
          v-for="(img, index) in imagesList"
          :key="index"
          class="flex justify-center"
        >
          <img
            :src="img"
            alt=""
            class="max-w-full max-h-[808px] object-contain flex justify-center"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <div
        v-for="(item, index) in products"
        :key="index"
        class="flex flex-col items-center justify-center border-t py-8 max-w-[1200px]"
      >
        <h1 class="text-black text-3xl mb-4">
          {{ item.name }}
        </h1>

        <div class="flex gap-2 flex-wrap justify-center">
          <img
            v-for="(imgSrc, i) in item.img"
            :key="i"
            :src="imgSrc"
            alt=""
            class="w-48 h-auto object-cover rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "store",
});

const menuItems = [
  { name: "Mens", link: "/mens" },
  { name: "Womens", link: "/womens" },
  { name: "T-Shirts", link: "/t-shirts" },
  { name: "Hoodies", link: "/hoodies" },
  { name: "Tanks", link: "/tanks" },
  { name: "Shorts", link: "/shorts" },
  { name: "Accessories", link: "/accessories" },
  { name: "New-Releases", link: "/new-releases" },
  { name: "Archive", link: "/archive" },
];

const products = [
  {
    name: "SPRING SUMMER 2025",
    desc: "CONNECTING CULTURES",
    img: ["/imgs/summer1.webp", "/imgs/summer2.webp", "/imgs/summer3.webp"],
    slug: "/",
  },
  {
    name: "SESSENTIAL MENSWEAR",
    desc: "CONNECTING CULTURES",
    img: [
      "/imgs/men1.webp",
      "/imgs/men2.webp",
      "/imgs/men3.webp",
      "/imgs/men4.webp",
    ],
    slug: "/",
  },
  {
    name: "SELECTED WOMENSWEAR",
    img: ["/imgs/women1.webp", "/imgs/women2.webp", "/imgs/women3.webp"],
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
    slug: "/",
  },
];

const imagesList = [
  "/imgs/b1.webp",
  "/imgs/b2.webp",
  "/imgs/b3.jpg",
  "/imgs/b4.jpg",
  "/imgs/b5.webp",
  "/imgs/b6.jpg",
];

// swiper

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>

<style></style>
