<script>
import { store } from '../store.js'; // Importa l'oggetto store dal file store.js
import { archetypeList } from '../store.js'; // Importa archetypeList dallo store.js

export default {
  name: 'AppSearch', // Nome del componente
  data() {
    return {
      store, // Aggiungi lo store ai dati del componente
      archetypeList: {
        archetypeArray: [], // Array vuoto per memorizzare la lista degli archetipi
        apiURL: "https://db.ygoprodeck.com/api/v7/archetypes.php", // URL dell'API per ottenere gli archetipi
      }
    }
  },    
  created() {
    // Metodo del ciclo di vita di Vue.js chiamato quando il componente viene creato
    // Chiama il metodo fetchArchetypes per riempire l'archetypeArray
    this.fetchArchetypes();
  },
  methods: {
    async fetchArchetypes() {
      try {
        // Effettua una richiesta fetch all'API utilizzando l'URL specificato
        const response = await fetch(this.archetypeList.apiURL);
        // Converte la risposta in formato JSON
        const data = await response.json();
        // Popola l'array archetypeArray con i nomi degli archetipi ottenuti dall'API
        this.archetypeList.archetypeArray = data.map(item => item.archetype_name); // Supponendo che il nome dell'archetipo sia nella proprietà "archetype_name"
      } catch (error) {
        // Gestisce eventuali errori durante la richiesta fetch e li stampa nella console
        console.error('Errore durante il fetch degli archetypes:', error);
      }
    }
  }
}
</script>

<template>
    
  <div>
    <!-- Dropdown per selezionare un archetipo -->
    <select id="archetype" name="archetype" v-model="store.searchSelect" @change="$emit('searchSelect')">
      <option value="">Seleziona un archetipo</option>
      <!-- Ciclo per generare le opzioni del dropdown con i nomi degli archetipi -->
      <option v-for="list in archetypeList.archetypeArray" :key="list" :value="list">
        {{ list }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
// Importa i file SCSS per lo stile generale e le variabili, se necessario
// @use './style/general.scss' as *;
// @use './style/partials/variables' as *;

div{
    display: flex;
    justify-content: start;
    select{
        text-align: center;
        border-radius: 15px;
        font-weight: bold;
        padding: 5px;
        margin-left: 25%;

    }
}
</style>
