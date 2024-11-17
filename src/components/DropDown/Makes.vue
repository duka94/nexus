<script setup lang="ts">
  import { useMakeStore } from '@/stores/make'

  /**
   * Use make store for make dropdown and make selection
   */
  const make = useMakeStore()

  /**
   * Registered props for the component
   */
  const { disabled } = defineProps<{
    disabled?: boolean,
  }>()

  /**
   * Registered emits for the component
   */
  const emit = defineEmits<{
    (e: 'select', selectedMake: string): void
  }>()
</script>

<template>
  <label for="make">{{ !make.selectedMake ? 'Please select make' : 'Make Selected' }}</label>
  <select name="make" id="make" @change="emit('select', make.selectedMake)" :disabled="disabled" v-model="make.selectedMake">
    <option disabled value="" :selected="!make.selectedMake">Please select make</option>
    <option :value="make.name" v-for="make in make.makes" :key="make.id">{{ make.name }}</option>
  </select>
</template>

<style scoped>

</style>
