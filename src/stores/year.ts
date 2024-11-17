import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useYearStore = defineStore('year', () => {
  const years = ref<Array<number>>([])

  const selectedYear = ref<number|null>(null)

  async function getYears () {
    const response = await axios.get('https://new.api.nexusautotransport.com/api/vehicles/years')

    years.value = response.data.data
  }

  return { years, selectedYear, getYears }
})
