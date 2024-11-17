import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMakeStore = defineStore('make', () => {
  const makes = ref<Array<object>>([])

  const selectedMake = ref<string|null>(null)

  async function getMakes (year: number) {
    const response = await axios.get(`https://new.api.nexusautotransport.com/api/vehicles/makes?year=${year}`)

    makes.value = response.data.data
  }

  function reset() : void {
      makes.value = [];
      selectedMake.value = null;
  }

  return { makes, selectedMake, getMakes, reset }
})
