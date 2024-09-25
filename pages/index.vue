<template>
  <div class="mt-5 ml-5">
    <h1 class="mb-3">Hello nuxt </h1>
    <Button>
      <NuxtLink to="/about">About</NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  console.log('Component mounted test !');
});
</script>