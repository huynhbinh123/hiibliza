<template>
  <div>
    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
      <div v-for="(product, index) in products" :key="index" class="">
        <NuxtLink :to="product.slug" class="">
          <img :src="product.img" alt="" class="w-full rounded-3xl" />
          <div class="flex items-center justify-between pt-3">
            <h1
              class="uppercase text-xl font-bold text-black cursor-pointer hover:underline"
            >
              {{ product.name }}
            </h1>
            <span class="text-xl text-black font-bold">{{
              product.price
            }}</span>
          </div>
          <div class="text-lg text-gray-500 font-bold uppercase">
            {{ product.color }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Product = {
  img: string;
  name: string;
  price: string;
  color: string;
  slug: string;
};

defineProps<{
  products: Product[];
}>();
</script>

<style></style>
