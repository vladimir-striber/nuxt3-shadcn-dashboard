<template>
  <Icon
    :name="iconName"
    :style="stylesString"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },

  stylesString: {
    type: String,
    required: false,
  }
})

onMounted(() => {
  console.log(props.iconName, 'iconName');
})
</script>

<style scoped>

</style>