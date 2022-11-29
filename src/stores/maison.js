import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMaisonStore = defineStore('maison', () => {
    const lumiereSalon = ref(false);
    const toggleLumiere = () => {
        lumiereSalon.value = !lumiereSalon.value;
    }

    return { lumiereSalon, toggleLumiere };
}, {
    persist: true
});