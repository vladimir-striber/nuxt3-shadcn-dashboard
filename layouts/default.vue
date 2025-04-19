<template>
  <div>
    <TheHeader />
    <div class="flex">
      <SidebarContainer />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import SidebarContainer from "~/components/Sidebar/SidebarContainer.vue";
</script>

<style scoped></style>
