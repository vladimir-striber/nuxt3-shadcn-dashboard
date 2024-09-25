<template>
  <Button @click="$emit('handleButtonClick')">
    {{ buttonText }}
  </Button>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
})

defineEmits(['handleButtonClick']);

</script>

<style scoped>

</style>