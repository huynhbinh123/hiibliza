<template>
  <div
    class="flex flex-col lg:flex-row justify-between bg-[#19191a] lg:w-[842px] w-[374px] lg:h-[592px] h-[80vh] rounded-4xl relative z-20 overflow-hidden"
  >
    <!-- LEFT IMAGE -->
    <div
      class="flex flex-1 items-center justify-center lg:w-[405px] w-[374px] lg:h-full h-[50%] p-2"
    >
      <img
        src="/imgs/subscribe.avif"
        alt=""
        class="w-full h-full object-cover rounded-3xl"
      />
    </div>

    <!-- RIGHT FORM -->
    <div class="flex-1 text-white flex flex-col overflow-hidden">
      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto scrollbar-hidden p-1 px-3">
        <h2 class="text-lg text-center font-bold mb-4">
          Sign-up now to receive 20% off at the Hï Ibiza online store
        </h2>

        <div class="flex gap-4 mb-3 text-white">
          <UForm
            :state="state"
            :schema="schema"
            class="gap-4 flex flex-col w-full"
            @submit="onSubmit"
          >
            <!-- Name + Surname -->
            <div class="flex gap-4">
              <UFormField name="name" class="flex-1">
                <UInput
                  v-model="state.name"
                  class="w-full border p-3 rounded-2xl"
                  placeholder="Name"
                />
              </UFormField>

              <UFormField name="surname" class="flex-1">
                <UInput
                  v-model="state.surname"
                  class="w-full border p-3 rounded-2xl"
                  placeholder="Surname"
                />
              </UFormField>
            </div>

            <!-- Email -->
            <UFormField name="email">
              <UInput
                v-model="state.email"
                class="w-full border p-3 rounded-2xl"
                placeholder="john@lennon.com"
              />
            </UFormField>
          </UForm>
        </div>

        <div class="flex gap-4 mb-3">
          <USelect
            :options="countryCodes"
            v-model="selectedCode"
            class="w-24 border p-2 rounded-2xl"
          />
          <UInput placeholder="Phone" class="w-full border p-2 rounded-2xl" />
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
          <!-- Text dài giữ nguyên -->
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

      <!-- Sticky bottom button -->
      <div class="p-2">
        <UButton
          type="submit"
          class="w-full font-medium py-2 justify-center bg-blue-600 text-white text-lg rounded-4xl"
        >
          Subscribe
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const countryCodes = [
  { label: "+44", value: "+44" },
  { label: "+84", value: "+84" },
];
const selectedCode = ref("+44");
const consent2 = ref(false);

import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  email: z.string().email("Email is invalid"),
  news: z.boolean().default(false),
});

type Schema = z.output<typeof schema>;

const nestedSchema = z.object({
  email: z.string().email(),
});

type NestedSchema = z.output<typeof nestedSchema>;

const state = reactive<Partial<Schema & NestedSchema>>({});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<style scoped>
*:focus {
  outline: none;
}
</style>
