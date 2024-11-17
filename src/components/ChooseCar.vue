<script setup lang="ts">
  import YearDropDown from './DropDown/Year.vue';
  import MakesDropDown from './DropDown/Makes.vue';
  import ModelsDropDown from './DropDown/Models.vue';

  import { useYearStore } from '@/stores/year'
  import { useMakeStore } from '@/stores/make'
  import { useModelStore } from '@/stores/model'

  /**
   * Year's store state, getters, actions
   */
  const year = useYearStore()

  /**
   * Make's store state, getters, actions
   */
  const make = useMakeStore()

  /**
   * Model's store state, getters, actions
   */
  const model = useModelStore()

  /**
   * Fires on year selection
   *
   * @param { number } year selected by user
   */
  const onYearSelection = (year: number) => {
    make.getMakes(year)
    make.reset()
    model.reset()
  }

  /**
   * Fires on makes selection
   *
   * @param { string } make selected by user
   */
  const onMakesSelection = (make: string) => {
      model.reset()
      model.getModels(year.selectedYear, make)
  }
</script>

<template>
  <div class="car-chooser-main-wrapper">
    <year-drop-down @select="onYearSelection"/>
    <makes-drop-down :disabled="!year.selectedYear" @select="onMakesSelection" />
    <models-drop-down :disabled="!(year.selectedYear && make.selectedMake)" />
  </div>
</template>

<style scoped>
  .car-chooser-main-wrapper {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 100px auto;
  }
</style>
