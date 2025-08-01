<template>
  <div
    class="flex-col items-center justify-center min-h-screen max-w-[1325px] mx-auto px-4"
  >
    <MainTitleEvent />
    <SelectBar
      :tabs="['Next Up', 'July', 'August', 'September', 'October']"
      :maxMobileTabs="4"
      @update="handleTabSelect"
    />

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full">
      <EventCard
        v-for="(item, index) in visibleEvents"
        :key="index"
        :event="item"
      />
    </div>

    <div class="my-6 flex justify-center">
      <MyButton
        v-if="isShowLoadMore"
        text="Load More"
        bgColor="black"
        textColor="white"
        class="hover:bg-white/40"
        @click="visibleCount += 6"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "default" });

import EventCard from "~/components/EventCard.vue";
import SelectBar from "~/components/SelectBar.vue";
import type { EventCard as EventCardType } from "~/types/event";
import { ref, computed } from "vue";

const allEvents = ref<EventCardType[]>(
  [
    {
      date: "Monday, Jul 30, 2025",
      time: "23:30 – End",
      location: "Hï Ibiza",
      title: "MEDUZA AND JAMES HYPE PRESENT OUR HOUSE",
      stages: [
        {
          name: "The Theatre",
          artists: ["MEDUZA³", "James Hype", "Chelina Manuhutu", "Tita Lau"],
        },
        {
          name: "Club Room",
          artists: ["Hannah Laing", "Sim0ne", "David Rust"],
        },
        {
          name: "Wild Corner",
          artists: ["Jason Bye"],
        },
      ],
    },
    {
      date: "Tuesday, Sep 5, 2025",
      time: "22:00 – End",
      location: "Ushuaïa Ibiza",
      title: "FISHER PRESENTS TRIIP",
      stages: [
        {
          name: "Main Stage",
          artists: ["Fisher", "Vintage Culture", "Martin Ikin"],
        },
      ],
    },
    {
      date: "Wednesday, Oct 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Monday, Aug 4, 2025",
      time: "23:30 – End",
      location: "Hï Ibiza",
      title: "MEDUZA AND JAMES HYPE PRESENT OUR HOUSE",
      stages: [
        {
          name: "The Theatre",
          artists: ["MEDUZA³", "James Hype", "Chelina Manuhutu", "Tita Lau"],
        },
        {
          name: "Club Room",
          artists: ["Hannah Laing", "Sim0ne", "David Rust"],
        },
        {
          name: "Wild Corner",
          artists: ["Jason Bye"],
        },
      ],
    },
    {
      date: "Tuesday, Aug 5, 2025",
      time: "22:00 – End",
      location: "Ushuaïa Ibiza",
      title: "FISHER PRESENTS TRIIP",
      stages: [
        {
          name: "Main Stage",
          artists: ["Fisher", "Vintage Culture", "Martin Ikin"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
    {
      date: "Wednesday, Aug 6, 2025",
      time: "00:00 – 06:00",
      location: "Amnesia",
      title: "ELROW IBIZA",
      stages: [
        {
          name: "Terrace",
          artists: ["Paco Osuna", "Bastian Bux", "Fer BR"],
        },
      ],
    },
  ].map((item) => ({
    ...item,
    slug:
      "/event/" +
      item.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-"),
  }))
);
const selectedTab = ref("Next Up");

const handleTabSelect = (tab: string) => {
  selectedTab.value = tab;
  visibleCount.value = 6; // reset lại số lượng hiển thị mỗi lần chọn tab mới
};

// Danh sách lọc theo tháng
const filteredEvents = computed(() => {
  if (selectedTab.value === "Next Up") return allEvents.value;

  const monthAbbr = selectedTab.value.slice(0, 3); // eg: "Jul"
  return allEvents.value.filter((event) => event.date.includes(monthAbbr));
});

// Danh sách hiện trên giao diện
const visibleEvents = computed(() =>
  filteredEvents.value.slice(0, visibleCount.value)
);

// Số lượng hiển thị ban đầu
const visibleCount = ref(6);

// Ẩn nút Load More nếu số lượng ít
const isShowLoadMore = computed(
  () => visibleCount.value < filteredEvents.value.length
);
</script>

<style></style>
