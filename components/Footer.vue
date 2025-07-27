<template>
  <footer
    class="grid grid-cols-2 mt-32 p-17 text-black justify-between max-w-[1325px] mx-auto relative z-20"
  >
    <!-- LEFT -->
    <div class="col-span-1 flex flex-col justify-between">
      <div>
        <p class="text-lg">
          Sign-up now to receive pre sale<br />
          access and 20% off merch.
        </p>
        <UButton
          class="mt-4 px-17 py-2 bg-blue-600 hover:bg-blue-700 text-lg text-white rounded-full cursor-pointer"
          @click="showModal = true"
        >
          Subscribe
        </UButton>
        <!-- Modal overlay -->
        <div
          v-if="showModal"
          class="fixed inset-0 bg-black/80 bg-opacity-60 flex items-center justify-center z-50"
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
            <Subscribe />
          </div>
        </div>
      </div>
      <div class="mt-8 text-sm">
        <p class="mb-1">
          Powered by
          <a
            href="https://www.thenightleague.com/"
            target="_blank"
            class="font-bold"
          >
            TNL
          </a>
        </p>
        <p>© 2017 - 2025 Ushuaïa Entertainment, SL All rights reserved</p>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="col-span-1 flex flex-col">
      <!-- ROW 1 -->
      <div class="grid grid-cols-2 justify-between">
        <div class="col-span-1">
          <h4 class="text-gray-400 font-semibold mb-2">Social</h4>
          <ul v-for="item in Social" key="index" class="font-medium space-y-1">
            <li>
              <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-1 ml-2">
          <h4 class="text-gray-400 font-semibold mb-2">Music</h4>
          <ul v-for="item in Music" class="font-medium space-y-1">
            <li>
              <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- LINE -->
      <div class="border-t border-gray-300 my-6"></div>

      <!-- ROW 2 -->
      <div class="grid grid-cols-2 justify-between">
        <div class="col-span-1">
          <h4 class="text-gray-400 font-semibold mb-2">Legal</h4>
          <ul v-for="item in Legal" class="font-medium space-y-1">
            <li>
              <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-1 ml-2">
          <h4 class="text-gray-400 font-semibold mb-2">Community</h4>
          <ul v-for="item in Community" class="font-medium space-y-1">
            <li>
              <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const showModal = ref(false);

watch(showModal, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

const Social = [
  { name: "Instagram", link: "https://www.instagram.com/hiibizaofficial" },
  { name: "TikTok", link: "https://www.tiktok.com/@hiibiza" },
  { name: "X", link: "https://x.com/hiibizaofficial" },
  { name: "Facebook", link: "https://www.facebook.com/hiibizaofficial" },
  { name: "Pinterest", link: "https://www.pinterest.com/hiibizaofficial" },
  { name: "Snapchat", link: "https://www.snapchat.com/add/hiibiza_offic" },
];

const Music = [
  { name: "Spotify", link: "https://open.spotify.com/user/hiibizaofficial" },
  {
    name: "Apple Music",
    link: "https://music.apple.com/us/artist/h%C3%AF-ibiza/1506468852",
  },
  { name: "Soundcloud", link: "https://soundcloud.com/hiibizaofficial" },
  { name: "YouTube", link: "https://www.youtube.com/@hiibizaofficial" },
];
const Legal = [
  {
    name: "Terms and Conditions",
    link: "https://www.hiibiza.com/terms-and-conditions",
  },
  {
    name: "Protection of Personal Data",
    link: "https://www.hiibiza.com/protection-of-personal-data",
  },
  { name: "Cookies Policy", link: "https://www.hiibiza.com/cookies-policy" },
  {
    name: "Cookie Settings",
    link: "/",
  },
  {
    name: "Privacy Policy",
    link: "https://www.hiibiza.com/privacy-policy",
  },
  { name: "Refund Policy", link: "https://www.hiibiza.com/refund-policy" },
  {
    name: "Integrated Policy",
    link: "https://www.hiibiza.com/integrated-policy",
  },
  {
    name: "Internal Information System",
    link: "https://www.hiibiza.com/internal-information-system",
  },
];

// const Community = ["FAQs / Contact", "About", "VIP Tables", "Store"];

const Community = [
  {
    name: "FAQs / Contact",
    link: "https://www.hiibiza.com/contact-faq",
  },
  { name: "About", link: "https://www.hiibiza.com/about" },
  { name: "VIP Tables", link: "/" },
  { name: "Store", link: "/" },
];
</script>
