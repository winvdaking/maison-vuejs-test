<script setup>
import { useLapinStore } from '@/stores/lapin';

const lapin = useLapinStore();
</script>

<template>
    <div>
        <div class="cuisine">
            Je suis dans la cuisine
        </div>
    </div>
    <div>
        <nav>
            <RouterLink to="/">Revenir à l'entrée</RouterLink>
        </nav>
    </div>
    <button type="button" @click="lapin.setLapinTrouve('Cuisine')">Lapin caché</button>
</template>