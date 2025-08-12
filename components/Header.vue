<template>
  <div
    class="relative max-h-[75vh] flex justify-center items-start overflow-visible"
  >
    <!-- HEADER -->
    <div
      ref="menuHeader"
      class="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center lg:w-[400px] w-[358px] px-1 transition-all duration-300"
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
        class="text-base w-[74px] font-semibold px-4 py-3 rounded-4xl cursor-pointer transition-colors duration-300 text-center"
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

    <!-- DROPDOWN -->
    <transition name="dropdown-slide">
      <div
        v-if="isOpen"
        ref="dropdown"
        class="fixed top-[56px] scrollbar-hidden pt-14 left-1/2 -translate-x-1/2 z-40 lg:w-[400px] w-[358px] h-[90vh] max-h-[90vh] overflow-y-auto max-w-4xl rounded-b-3xl bg-black text-white/60 shadow-lg text-center space-y-4 rounded-lg"
      >
        <div
          v-for="item in dropDown"
          :key="item.link"
          class="text-5xl font-bold uppercase hover:text-white transition-colors duration-300 mb-0 cursor-pointer"
          :class="[
            route.path === item.link
              ? 'text-white'
              : 'text-white/60 hover:text-white',
          ]"
          @click="handleSelect(item)"
        >
          {{ item.title }}
        </div>
        <DropDown :items="items" class="mt-14" />

        <div class="border-t border-gray-700 text-xs text-white py-10 mt-22">
          <div
            class="flex items-center justify-center text-lg text-gray-400 font-bold gap-5"
          >
            <p>EN / ES</p>
            <NuxtLink to="/contact-faq"
              ><p class="hover:text-white cursor-pointer">
                FAQs / Contact
              </p></NuxtLink
            >
          </div>

          © 2017 - 2025 Ushuaïa Entertainment S.L. All Rights Reserved. <br />
        </div>
      </div>
    </transition>

    <!-- Page slot (content như main title) -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

type DropDownItem = {
  title: string;
  link: string;
};

type EventItem = {
  name: string;
  image: string;
  day: string;
  slug: string;
};

// State
const isOpen = ref(false);
const menuHeader = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

const dropDown = ref<DropDownItem[]>([]); // <-- khai báo kiểu
const items = ref<EventItem[]>([]); // <-- khai báo kiểu

const router = useRouter();
const route = useRoute();

// Toggle menu
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// Click ngoài để đóng menu
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
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Lấy dữ liệu từ PHP API
onMounted(async () => {
  try {
    const res = await fetch("http://localhost/menu-data.php");
    const data = await res.json();

    dropDown.value = data.dropDown;
    items.value = data.items.map((item: any) => ({
      ...item,
      slug:
        "/residency/" +
        item.name
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-"),
    }));
  } catch (error) {
    console.error("Lỗi tải dữ liệu menu:", error);
  }
});

// Chọn mục menu
function handleSelect(item: DropDownItem) {
  isOpen.value = false;
  router.push(item.link);
}
</script>

<style>
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
.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
body.scrollbar-hidden {
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

body.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
