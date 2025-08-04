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
      <div class="flex-1 overflow-y-auto scrollbar-hidden p-4">
        <h2 class="text-lg text-center font-bold mb-4">
          Sign-up now to receive 20% off at the Hï Ibiza online store
        </h2>

        <div class="text-white relative">
          <UForm
            :state="state"
            :schema="schema"
            class="flex flex-col w-full"
            @submit="onSubmit"
          >
            <div class="flex-1 overflow-y-auto scrollbar-hidden pt-1 px-3">
              <div class="flex gap-4">
                <!-- NAME -->
                <div class="relative flex-1">
                  <label
                    :class="[
                      'absolute left-4 transition-all duration-300 pointer-events-none text-gray-400 font-medium',
                      state.name || isFocusedName
                        ? 'text-xs top-0 bg-[#19191a] px-1'
                        : 'top-3 text-sm',
                    ]"
                    for="input-name"
                  >
                    Name
                  </label>
                  <UFormField name="name" class="w-full">
                    <UInput
                      id="input-name"
                      v-model="state.name"
                      @focus="isFocusedName = true"
                      @blur="isFocusedName = false"
                      :ui="{
                        base: 'bg-transparent border border-white rounded-2xl pt-6 pb-2 pl-5 text-white placeholder-transparent',
                      }"
                      placeholder="Name"
                    />
                  </UFormField>
                </div>

                <!-- SURNAME -->
                <div class="relative flex-1">
                  <label
                    :class="[
                      'absolute left-4 transition-all duration-300 pointer-events-none text-gray-400 font-medium',
                      state.surname || isFocusedSurname
                        ? 'text-xs top-0 bg-[#19191a] px-1'
                        : 'top-3 text-sm',
                    ]"
                    for="input-surname"
                  >
                    Surname
                  </label>
                  <UFormField name="surname" class="w-full">
                    <UInput
                      id="input-surname"
                      v-model="state.surname"
                      @focus="isFocusedSurname = true"
                      @blur="isFocusedSurname = false"
                      :ui="{
                        base: 'bg-transparent border border-white rounded-2xl pt-6 pb-2 pl-5 text-white placeholder-transparent',
                      }"
                      placeholder="Surname"
                    />
                  </UFormField>
                </div>
              </div>
              <!-- email -->
              <div class="relative w-full">
                <label
                  :class="[
                    'absolute left-4 transition-all duration-300 pointer-events-none text-gray-400 font-medium',
                    state.email || isFocusedEmail
                      ? 'text-xs top-0 bg-[#19191a] px-1'
                      : 'top-3 text-sm',
                  ]"
                  for="input-email"
                >
                  Email
                </label>
                <UFormField name="email" class="w-full">
                  <UInput
                    id="input-email"
                    v-model="state.email"
                    @focus="isFocusedEmail = true"
                    @blur="isFocusedEmail = false"
                    :ui="{
                      base: 'bg-transparent border border-white rounded-2xl pt-6 pb-2 pl-5 text-white placeholder-transparent lg:w-[359px] w-[350px]',
                    }"
                    placeholder="Email"
                  />
                </UFormField>
              </div>

              <!-- // phone -->
              <div class="flex items-start gap-4 w-full relative">
                <div class="w-[90px]">
                  <USelect
                    :options="countryCodes"
                    v-model="selectedCode"
                    class="w-full border p-2 py-4 rounded-2xl"
                  />
                </div>
                <div class="relative flex-1">
                  <label
                    :class="[
                      'absolute left-4 transition-all duration-300 pointer-events-none text-gray-400 font-medium',
                      state.phone || isFocusedPhone
                        ? 'text-xs top-0 bg-[#19191a] px-1'
                        : 'top-3 text-sm',
                    ]"
                    for="input-phone"
                  >
                    Phone
                  </label>
                  <UFormField name="phone" class="w-full">
                    <UInput
                      id="input-phone"
                      v-model="state.phone"
                      @focus="isFocusedPhone = true"
                      @blur="isFocusedPhone = false"
                      :ui="{
                        base: 'bg-transparent border border-white rounded-2xl pt-6 pb-2 pl-5 text-white placeholder-transparent lg:w-[273px] w-[244px]',
                      }"
                      placeholder="Phone"
                    />
                  </UFormField>
                </div>
              </div>

              <UCheckbox
                v-model="consent1"
                required
                :ui="{
                  base: 'flex items-start',
                  label: 'ml-3 text-sm text-white',
                  wrapper: 'items-start',
                  container:
                    'w-4 h-4 border-2 border-white rounded-md bg-transparent checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center',
                  icon: 'text-white w-3 h-3',
                }"
                class="mb-2 cursor-pointer"
                label="I hereby give my consent to USHUAÏA ENTERTAINMENT SL and THE NIGHT LEAGUE, to process my personal data, according to their Privacy Policy."
              />

              <UCheckbox
                v-model="consent2"
                required
                :ui="{
                  base: 'flex items-start',
                  label: 'ml-3 text-sm text-white',
                  wrapper: 'items-start',
                  container:
                    'w-4 h-4 border-2 border-white rounded-md bg-transparent checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center',
                  icon: 'text-white w-3 h-3',
                }"
                class="mb-4 cursor-pointer"
                label="I hereby agree to their Privacy Policy."
              />

              <p class="text-xs text-white">
                <!-- Text dài giữ nguyên -->
                We will keep your data as long as you allow us and we are bound
                by law. Your Data Protection rights are Access, Rectification,
                Erasure, Restriction of processing, Data Portability and Object.
                You might exercise them by written enquiry to USHUAÏA
                ENTERTAINMENT SL, AVDA. BARTOLOMÉ ROSSELLÓ 18, 07800 IBIZA
                (ISLAS BALEARES) or THE NIGHT LEAGUE SL, APDO. CORREOS, 1020,
                07817 SANT JORDI DE SES SALINES (ISLAS BALEARES) or by email to
                data.protection@thenightleague.com. In case of disagreement, you
                might make a complaint to the Spanish Data Protection Agency
                (www.aepd.es)
              </p>
            </div>

            <!-- Sticky bottom button -->
            <div class="sticky -bottom-4 bg-[#19191a] p-3 z-10">
              <UButton
                type="submit"
                class="w-full font-medium py-2 justify-center bg-blue-600 text-white text-lg rounded-4xl cursor-pointer"
              >
                Subscribe
              </UButton>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useToast } from "#imports";

const countryCodes = [
  { label: "+44", value: "+44" },
  { label: "+84", value: "+84" },
];
const selectedCode = ref("+44");

const isFocusedName = ref(false);
const isFocusedSurname = ref(false);
const isFocusedEmail = ref(false);
const isFocusedPhone = ref(false);

import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  email: z.string().email("Email is invalid"),
  news: z.boolean().default(false),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone must be a valid number")
    .min(7, "Phone must be at least 7 digits"),
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

const consent1 = ref(true); // mặc định được check
const consent2 = ref(true); // mặc định được check
</script>

<style scoped>
*:focus {
  outline: none;
}
</style>
