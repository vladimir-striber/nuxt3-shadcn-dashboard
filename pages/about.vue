<template>
  <div class="mt-5 ml-5 grid-cols-2">
    <h1 class="mb-3">This is the 'About' page</h1>
    <div class="mt-5 ml-5 grid-cols-2">
      <AppButton :buttonText="'Home'" @handleButtonClick="handleButtonClick">
        <template #iconLeft>
          <AppIcon
            :iconName="'uil:github'"
            :stylesString="'color: white'"
            class="mr-2"
          />
        </template>
      </AppButton>
      <AppButton :buttonText="'Home'" @handleButtonClick="handleButtonClick">
        <template #iconLeft>
          <AppIcon
            :iconName="'uil:github'"
            :stylesString="'color: white'"
            class="mr-2"
          />
        </template>
      </AppButton>
      <AppButton :buttonText="'Home'" @handleButtonClick="handleButtonClick">
        <template #iconLeft>
          <AppIcon
            :iconName="'uil:github'"
            :stylesString="'color: white'"
            class="mr-2"
          />
        </template>
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "~/components/shared/AppButton.vue";
import AppIcon from "~/components/shared/AppIcon.vue";

const router = useRouter();

const handleButtonClick = () => {
  router.push("/");
};
</script>

<style scoped></style>
