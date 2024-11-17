<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useYearStore } from '@/stores/year'

  const year = useYearStore()

  const emit = defineEmits<{
    (e: 'select', selectedYear: number): void
  }>()

  onMounted(() => {
    year.getYears();
  })
</script>

<template>
  <label for="year">{{ !year.selectedYear ? 'Please select year' : 'Year Selected' }}</label>
  <select name="year" id="year" @change="emit('select', year.selectedYear)" v-model="year.selectedYear">
    <option value="">Please select year</option>
    <option :value="year" v-for="year in year.years" :key="year">{{ year }}</option>
  </select>
</template>

<style scoped>

</style>
