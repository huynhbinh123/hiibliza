<template>
  <UContainer>
    <div class="w-full flex justify-center items-center py-8 relative">
      <!-- Wrapper có kích thước bằng ảnh -->
      <div class="relative z-20 w-[1264px]">
        <!-- Ảnh -->
        <img
          src="/public/img.png"
          alt=""
          class="w-full h-auto object-cover rounded-4xl shadow-lg"
        />

        <!-- Sticky nội dung -->
        <div class="absolute top-6 inset-0 flex items-start justify-center">
          <!-- h2 sticky khi scroll -->
          <div class="sticky top-[50vh] space-y-4 pb-[30px]">
            <h2 class="text-white text-5xl font-bold text-center">
              THE TRILOGY HÏ IBIZA CLOSING PARTY <br />2025
            </h2>
            <div class="flex justify-center space-x-3">
              <UButton
                size="lg"
                color="primary"
                label="Sign Up"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
              <UButton
                size="lg"
                color="primary"
                variant="soft"
                label="VIP Tables"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
    >
      <h1 class="font-black text-8xl font-medium uppercase text-black">
        Residents
      </h1>
    </div>

    <div
      class="w-full flex justify-center items-center py-8 relative mt-[300px]"
    >
      <!-- Wrapper có kích thước bằng ảnh -->
      <div class="relative z-20 w-[1264px]">
        <!-- Ảnh -->
        <img
          src="/public/img.png"
          alt=""
          class="w-full h-auto object-cover rounded-4xl shadow-lg"
        />

        <!-- Sticky nội dung -->
        <div class="absolute top-6 inset-0 flex items-start justify-center">
          <!-- h2 sticky khi scroll -->
          <div class="sticky top-[50vh] space-y-4 pb-[30px]">
            <h2 class="text-white text-5xl font-bold text-center">
              THE TRILOGY HÏ IBIZA CLOSING PARTY <br />2025
            </h2>
            <div class="flex justify-center space-x-3">
              <UButton
                size="lg"
                color="primary"
                label="Sign Up"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
              <UButton
                size="lg"
                color="primary"
                variant="soft"
                label="VIP Tables"
                class="bg-blue-500 font-medium text-lg rounded-3xl text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
