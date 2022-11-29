import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLapinStore = defineStore('lapin', () => {

    const lapinTrouve = ref(false);
    const lapinCacheDans = ref('');

    function setLapinTrouve(nomdelapiece) {
        lapinTrouve.value = !lapinTrouve.value;
        lapinCacheDans.value = nomdelapiece;
    }
    return { lapinTrouve, lapinCacheDans, setLapinTrouve };
}, {
    persist: true
});