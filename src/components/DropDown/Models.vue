<script setup lang="ts">
  import { useModelStore } from '@/stores/model'

  const model = useModelStore()

  const { disabled } = defineProps<{
    disabled?: boolean,
  }>()
</script>

<template>
  <label for="model">{{ !model.selectedModel ? 'Please select model' : 'Model Selected' }}</label>
  <select name="model" id="model" :disabled="disabled" v-model="model.selectedModel">
    <option disabled value="">Please select model</option>
    <option :value="model.model" v-for="model in model.models" :key="model.model">{{ model.model }}</option>
  </select>
</template>

<style scoped>

</style>
