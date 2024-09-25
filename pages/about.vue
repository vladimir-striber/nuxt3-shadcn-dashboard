<template>
  <div class="mt-5 ml-5">
    <h1 class="mb-3">This is the 'About' page</h1>
    <AppButton
      :buttonText="'Home'"
      @handleButtonClick="handleButtonClick"
    />
  </div>
</template>

<script setup lang="ts">
import AppButton from "~/components/shared/AppButton.vue";

const router = useRouter();

const handleButtonClick = () => {
  router.push('/');
};

</script>

<style scoped>

</style>