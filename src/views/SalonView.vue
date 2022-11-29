<script setup>
import { useMaisonStore } from '@/stores/maison.js';
const lumieres = useMaisonStore();
/*
import { ref } from 'vue';
const lumiereAllumee = ref(true);

let toggleLumiere = () => {
    lumiereAllumee.value = !lumiereAllumee.value;
}
*/
</script>

<template>
    <div>
        <h3>Je suis dans le salon</h3>
    </div>
    <button type="button" @click="lumieres.toggleLumiere">Allumer ou éteindre la lumière</button>
    <p>
        <template v-if="lumieres.lumiereSalon">
            La lumière est allumée
        </template>
        <template v-else>
            La lumière est éteinte
        </template>
    </p>
    <div>
        <nav>
            <RouterLink to="/">Revenir à l'entrée</RouterLink>
        </nav>
    </div>
</template>