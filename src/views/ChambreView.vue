<script setup>
import { useMaisonStore } from '../stores/maison';
const lumieres = useMaisonStore();
</script>

<template>
  <div class="chambre">
    <h1>C'est la chambre</h1>
    <button type="button" @click="lumieres.toggleLumiere">Allumer ou eteindre lumiere du salon</button>
  </div>
  <div>
    <nav>
      <li>
        <router-link to="/grenier">Grenier</router-link>
      </li>
      <li>
        <RouterLink to="/">Revenir à l'entrée</RouterLink>
      </li>
    </nav>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .chambre {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
