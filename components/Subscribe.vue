<template>
  <div
    class="flex justify-between bg-[#19191a] w-[842px] h-[592px] rounded-4xl relative z-20 overflow-hidden"
  >
    <div class="flex items-center justify-center w-[405px] h-full p-2">
      <img
        src="/imgs/subscribe.avif"
        alt=""
        class="w-full h-full object-cover rounded-3xl"
      />
    </div>

    <div class="w-1/2 text-white relative">
      <!-- RIGHT FORM -->
      <div class="flex flex-col justify-center p-8 w-full">
        <h2 class="text-lg text-center font-bold mb-4">
          Sign-up now to receive 20% off at the Hï Ibiza online store
        </h2>

        <div class="flex gap-4 mb-3 text-white" error="This field is required">
          <UInput placeholder="Name" class="border p-3 rounded-2xl" />
          <UInput placeholder="Surname" class="border p-3 rounded-2xl" />
        </div>

        <UFormField error="This field is required">
          <UInput placeholder="Email" class="w-full border p-3 rounded-2xl" />
        </UFormField>

        <div class="flex gap-4 mb-3">
          <USelect
            :options="countryCodes"
            v-model="selectedCode"
            class="w-24 border p-3 rounded-2xl"
          />
          <UInput placeholder="Phone" class="w-full border p-3 rounded-2xl" />
        </div>

        <UCheckbox
          required
          class="text-sm mb-2"
          label="I hereby give my consent to USHUAÏA ENTERTAINMENT SL and THE NIGHT LEAGUE, to process my personal data, according to their Privacy Policy."
        />

        <UCheckbox
          v-model="consent2"
          class="text-sm mb-4"
          label="I hereby agree to their Privacy Policy."
        />

        <p class="text-xs text-white">
          We will keep your data as long as you allow us and we are bound by
          law. Your Data Protection rights are Access, Rectification, Erasure,
          Restriction of processing, Data Portability and Object. You might
          exercise them by written enquiry to USHUAÏA ENTERTAINMENT SL, AVDA.
          BARTOLOMÉ ROSSELLÓ 18, 07800 IBIZA (ISLAS BALEARES) or THE NIGHT
          LEAGUE SL, APDO. CORREOS, 1020, 07817 SANT JORDI DE SES SALINES (ISLAS
          BALEARES) or by email to data.protection@thenightleague.com. In case
          of disagreement, you might make a complaint to the Spanish Data
          Protection Agency (www.aepd.es)
        </p>
      </div>
      <UButton
        class="absolute bottom-3 p-2 w-[97%] justify-center bg-blue-600 text-white text-lg rounded-4xl"
      >
        Subscribe
      </UButton>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const countryCodes = [
  { label: "+44", value: "+44" },
  { label: "+84", value: "+84" },
];
const selectedCode = ref("+44");
const consent1 = ref(false);
const consent2 = ref(false);
</script>
