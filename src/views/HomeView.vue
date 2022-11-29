<script setup>
import { useLapinStore } from '../stores/lapin';
const lapin = useLapinStore();
</script>

<template>
  <main>
    Vous êtes dans la maison !
    <div>
      <nav>
        <ul>
          <li>
            <RouterLink to="/chambre">Chambre</RouterLink>
          </li>
          <li>
            <RouterLink to="/cuisine">Cuisine</RouterLink>
          </li>
          <li>
            <router-link to="/salon">Salon</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <template v-if="lapin.lapinTrouve">
      L'objet est caché dans la pièce suivante : {{ lapin.lapinCacheDans }} !
    </template>
  </main>
</template>
