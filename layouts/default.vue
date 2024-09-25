<template>
  <div>
    <TheHeader />
    <div class="flex">
      <TheSidebar />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">

import TheSidebar from "~/components/Sidebar/TheSidebar.vue";
</script>

<style scoped>

</style>