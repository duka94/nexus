import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useModelStore = defineStore('model', () => {
  const models = ref<Array<object>>([])

  const selectedModel = ref<string|null>(null)

  async function getModels (year: number, make: string) {
    const response = await axios.get(`https://new.api.nexusautotransport.com/api/vehicles/models?year=${year}&make=${make}`)

    models.value = response.data.data
  }

  function reset() : void {
      models.value = [];
      selectedModel.value = null;
  }

  return { models, selectedModel, getModels, reset }
})
