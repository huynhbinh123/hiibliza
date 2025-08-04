<template>
  <div class="mt-30">
    <div class="w-full max-w-[1200px] p-4">
      <div
        class="flex justify-between items-center w-full overflow-visible relative z-50"
      >
        <!-- NÚT MỞ -->
        <Button
          @click="isOpen = true"
          class="uppercase text-lg text-gray-700 flex items-center gap-2 cursor-pointer"
        >
          Filter
          <UIcon name="material-symbols-light:tune" size="24" />
        </Button>

        <!-- Sort By -->
        <div class="flex items-center gap-2">
          <div class="uppercase text-lg text-gray-700">Sort by:</div>
          <select
            v-model="selectedSort"
            class="border px-3 py-1 rounded text-base uppercase text-gray-800 max-w-[180px]"
          >
            <option value="featured">Featured</option>
            <option value="best_selling">Best Selling</option>
            <option value="az">Alphabetically, A-Z</option>
            <option value="za">Alphabetically, Z-A</option>
            <option value="low_high">Price, Low to High</option>
            <option value="high_low">Price, High to Low</option>
            <option value="old_new">Date, Old to New</option>
            <option value="new_old">Date, New to Old</option>
          </select>
        </div>
      </div>
    </div>

    <div class="px-4">
      <ProductList :products="paginatedProducts" />
    </div>

    <!-- PHÂN TRANG -->
    <div class="flex items-center gap-2 justify-center mt-8">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
      >
        ←
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        class="px-4 py-2 rounded-full cursor-pointer"
        :class="{
          'bg-black text-white': currentPage === page,
          'bg-gray-200 hover:bg-gray-300': currentPage !== page,
        }"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
      >
        →
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "store",
});

const products = ref(
  [
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman22.webp",
      name: "HÏ Ibiza Dance Vest",
      price: "€90,00",
      color: "printed",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€80,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€80,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
    {
      img: "/imgs/woman11.webp",
      name: "DIFFUSE VEST",
      price: "€60,00",
      color: "white",
    },
  ].map((item) => ({
    ...item,
    slug:
      "/products/" +
      item.name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "") // loại bỏ ký tự đặc biệt
        .replace(/\s+/g, "-"), // chuyển khoảng trắng thành dấu -
  }))
);

// pagination

import { ref, computed } from "vue";
const isOpen = ref(false);

const currentPage = ref(1);
const perPage = 6;

const totalPages = computed(() => Math.ceil(products.value.length / perPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return products.value.slice(start, start + perPage);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => goToPage(currentPage.value + 1);
const prevPage = () => goToPage(currentPage.value - 1);

const selectedSort = ref("featured");
</script>

<style></style>
