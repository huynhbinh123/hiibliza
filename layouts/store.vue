<template>
  <div class="min-h-screen w-full bg-white">
    <div
      class="relative max-h-[75vh] flex justify-center items-start overflow-visible"
    >
      <!-- HEADER -->
      <div
        ref="menuHeader"
        class="fixed top-4 left-1/2 -translate-x-1/2 z-50 border flex justify-between items-center lg:w-[400px] w-[358px] px-1 transition-all duration-300"
        :class="[
          isOpen
            ? 'rounded-t-4xl bg-black text-white border-none'
            : 'rounded-4xl bg-white text-black shadow-md',
        ]"
        style="height: 56px"
      >
        <div class="flex gap-3 ml-3">
          <UIcon
            class="text-[25px] text-black/60 transition-transform duration-200 hover:scale-110 cursor-pointer"
            :class="isOpen ? 'text-white' : 'text-black'"
            name="material-symbols:search-rounded"
          />
          <UIcon
            class="text-[25px] text-black/60 transition-transform duration-200 hover:scale-110 cursor-pointer"
            name="material-symbols:person-2-outline"
            :class="isOpen ? 'text-white' : 'text-black'"
          />
          <UIcon
            class="text-[25px] text-black/60 transition-transform duration-200 hover:scale-110 cursor-pointer"
            name="material-symbols:shopping-bag-outline"
            :class="isOpen ? 'text-white' : 'text-black'"
          />
        </div>

        <NuxtLink to="/" class="flex items-center">
          <h1
            class="text-2xl font-black cursor-pointer px-3 py-2 rounded-4xl"
            :class="isOpen ? 'text-white' : 'text-black'"
          >
            HÏ IBIZA®
          </h1>
        </NuxtLink>
        <button
          class="text-base w-[74px] font-semibold px-4 py-3 rounded-4xl cursor-pointer transition-colors duration-300 text-center"
          :class="
            isOpen
              ? 'bg-black text-white border border-white'
              : 'uppercase text-white bg-black'
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
          class="fixed top-[56px] scrollbar-hidden pt-14 left-1/2 -translate-x-1/2 z-40 lg:w-[400px] w-[358px] h-[90vh] max-h-[90vh] overflow-y-auto max-w-4xl rounded-b-3xl bg-black text-white/60 shadow-lg text-start space-y-4 rounded-lg"
        >
          <!-- Quay lại menu chính -->
          <div v-if="activeSubMenu" class="px-4">
            <div
              class="text-white text-base font-medium flex items-center gap-2 cursor-pointer hover:text-white/80 mb-6"
              @click="activeSubMenu = null"
            >
              <UIcon
                name="material-symbols:arrow-back-rounded"
                class="text-[25px] text-white transition-transform duration-200 hover:scale-140 cursor-pointer"
              />
            </div>
            <!-- Danh sách con -->
            <div
              v-for="(child, index) in activeSubMenu.children"
              :key="index"
              class="text-xl font-bold uppercase text-white transition-colors duration-300 mb-4 ml-1 cursor-pointer"
            >
              <NuxtLink :to="child.link" @click.native="isOpen = false">
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Danh sách chính -->
          <div v-else>
            <div
              v-for="item in dropDown"
              :key="
                typeof item.title === 'string' ? item.title : item.title.name
              "
              class="text-4xl font-bold uppercase text-white transition-colors duration-300 mb-0 cursor-pointer px-4"
              @click="openSubMenu(item)"
            >
              {{
                typeof item.title === "string" ? item.title : item.title.name
              }}
            </div>
          </div>

          <!-- Footer -->
          <div class="border-t border-gray-700 text-xs text-white py-10 mt-22">
            <div
              class="flex items-center justify-center text-lg text-gray-400 font-bold gap-5"
            >
              <p>EN / ES</p>
              <NuxtLink to="/contact-faq">
                <p class="hover:text-white cursor-pointer">FAQs / Contact</p>
              </NuxtLink>
            </div>
            © 2017 - 2025 Ushuaïa Entertainment S.L. All Rights Reserved.
          </div>
        </div>
      </transition>
    </div>
    <div class="w-full lg:max-w-[1325px] mx-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const menuHeader = ref<HTMLElement | null>(null);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

type DropDownItem = {
  title: string | { name: string };
  link: string;
  children?: { name: string; link: string }[];
};

const activeSubMenu = ref<DropDownItem | null>(null);

const router = useRouter();

function openSubMenu(item: any) {
  if (item.children) {
    activeSubMenu.value = item;
  } else {
    router.push(item.link);
    isOpen.value = false;
  }
}

// dropdown
const dropDown = [
  {
    title: {
      name: "Womens",
    },
    link: "/events-calendar",
    children: [
      { name: "T-Shirt", link: "/events-calendar/t-shirt" },
      { name: "Body", link: "/events-calendar/body" },
      { name: "Hoodies", link: "/events-calendar/hoodies" },
      { name: "Jackets", link: "/events-calendar/jackets" },
      { name: "Shorts", link: "/events-calendar/shorts" },
      { name: "Tops", link: "/events-calendar/tops" },
      { name: "See All", link: "/events-calendar" },
    ],
  },
  {
    title: "Mens",
    link: "/news",
    children: [
      { name: "T-Shirt", link: "/events-calendar/t-shirt" },
      { name: "Shirt", link: "/events-calendar/body" },
      { name: "Sweatshirts| Hoodies", link: "/events-calendar/hoodies" },
      { name: "Jackets", link: "/events-calendar/jackets" },
      { name: "Pants", link: "/events-calendar/shorts" },
      { name: "Swimwear", link: "/events-calendar/tops" },
      { name: "Short", link: "/events-calendar/tops" },
      { name: "See All", link: "/events-calendar" },
    ],
  },
  {
    title: "Accessories",
    link: "/music",
    children: [
      { name: "Socks", link: "/events-calendar/t-shirt" },
      { name: "Hats", link: "/events-calendar/body" },
    ],
  },
];
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
