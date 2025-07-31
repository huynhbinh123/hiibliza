<template>
  <div>
    <div
      class="bg-white rounded-4xl p-4 flex flex-col justify-between w-full h-full"
    >
      <!-- Header -->
      <NuxtLink :to="event.slug" class="flex flex-col w-max font-semibold">
        <h1 class="text-black text-lg">{{ event.date }}</h1>
        <h1 class="text-black text-lg">{{ event.time }}</h1>
        <div
          class="text-white text-xs uppercase py-1 font-bold text-center bg-blue-500 rounded-2xl px-3 w-max mt-1"
        >
          {{ event.location }}
        </div>
      </NuxtLink>

      <!-- Lineup -->
      <div class="bg-gray-200 rounded-3xl mt-4 p-4 flex flex-col flex-1">
        <h1 class="text-2xl uppercase font-extrabold leading-tight">
          {{ event.title }}
        </h1>

        <NuxtLink :to="event.slug" v-for="(stage, i) in event.stages" :key="i" class="flex-1 mt-10">
          <h2
            class="text-white text-xs uppercase font-bold bg-black px-3 py-1 rounded-2xl w-max mb-1"
          >
            {{ stage.name }}
          </h2>
          <ul class="text-black text-base font-medium space-y-1">
            <li v-for="(artist, j) in stage.artists" :key="j">{{ artist }}</li>
          </ul>
        </NuxtLink :to="event.slug">

        <!-- Buttons -->
        <div class="flex gap-3 mt-5">
          <button
            class="bg-black/80 text-white text-lg py-2 cursor-pointer hover:bg-black/70 font-bold px-5 rounded-full flex-1"
          >
            Buy Tickets
          </button>
          <button
            class="bg-black/80 text-white text-lg py-2 cursor-pointer hover:bg-black/70 font-bold px-5 rounded-full flex-1"
        @click="showModal = true"
            
          >
            VIP Tables
          </button>
        </div>

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
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { EventCard } from "~/types/event";
import {ref, watch} from 'vue'


const showModal = ref(false);

watch(showModal, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

defineProps<{
  event: EventCard;
}>();
</script>

<style scoped>
.rounded-4xl {
  border-radius: 2rem;
}
</style>
