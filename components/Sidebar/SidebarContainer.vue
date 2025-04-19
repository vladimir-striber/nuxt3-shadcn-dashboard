<template>
  <div class="relative">
    <div class="flex lg:hidden p-6">
      <TheSidebar />
    </div>
    <div class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r">
      <TheSidebar />
    </div>

    <ul class="flex">
      <li class="p-6">Item 1</li>
      <li class="p-6">Item 2</li>
      <li class="p-6">Item 3</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import TheSidebar from "~/components/Sidebar/TheSidebar.vue";
</script>

<style scoped>

</style>