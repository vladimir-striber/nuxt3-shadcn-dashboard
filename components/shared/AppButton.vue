<template>
  <Button class="app-button" @click="$emit('handleButtonClick')">
    <slot name="iconLeft" />
    {{ buttonText }}
    <slot name="iconRight" />
  </Button>
</template>

<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});

defineEmits(["handleButtonClick"]);
</script>

<style scoped>
.app-button {
  @apply pl-16 pr-16 bg-lime-400;
  @media (width <= 768px) {
    @apply pl-16 pr-16 bg-lime-900;
  }
}
</style>
