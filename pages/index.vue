<template>
  <div class="mt-5 ml-5">
    <h1 class="mb-3">This is the 'Home' page</h1>
    <AppButton
      class="mb-3"
      :buttonText="'About'"
      @handleButtonClick="handleGoToAboutPage"
    />
    <p class="mb-3">{{ state }}</p>
    <div class="mb-3">
      <AppButton :buttonText="'Prev'" class="mr-3" @handleButtonClick="prev" />
      <AppButton :buttonText="'Next'" @handleButtonClick="next" />
    </div>

    <Input v-model="inputValue" class="mb-3" type="text" />
    <p class="mb-3 text-red-500">{{ errorMessage }}</p>
    <AppButton :buttonText="'Go to item'" @handleButtonClick="go(inputValue)" />
  </div>
</template>

<script setup lang="ts">
import AppButton from "~/components/shared/AppButton.vue";
import { useCycleList } from "~/composables/useCycleList";

const animals = ref(["Dog", "Cat", "Mouse", "Bird", "Lizard"]);
const inputValue = ref(null);

const { state, errorMessage, next, prev, go } = useCycleList(animals.value);
// state.value = "Cat";

const router = useRouter();

const handleGoToAboutPage = () => {
  router.push("/about");
};
</script>
