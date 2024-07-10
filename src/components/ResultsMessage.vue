<script>
// Importa archetypeList dallo store per utilizzare v-model
import { archetypeList } from '../store.js';

export default {
  name: 'ResultsMessage', // Nome del componente
  data() {
    return {
      archetypeList, // Aggiungi archetypeList ai dati del componente
    }
  },
  computed: {
    // Computed property per ottenere il numero di risultati trovati
    resultNumber() {
      return this.archetypeList.archetypeArray.length; // Restituisce la lunghezza dell'array archetypeArray
    }
  },
}
</script>

<template>
  <section class="text-center fw-bold">
    <!-- Mostra il numero di risultati trovati -->
    Trovato/i {{resultNumber}} risultato/i
  </section>
</template>

<style lang="scss">
// Importa gli stili generali e le variabili, se necessario
// @use './style/general.scss' as *;
// @use './style/partials/variables' as *;
</style>
