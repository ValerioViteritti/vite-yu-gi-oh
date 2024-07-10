<script>
// Importa axios per effettuare richieste HTTP
import axios from 'axios';

// Importa i componenti necessari
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppSearch from './components/AppSearch.vue'
// Importa la gestione dello stato
import { store } from './store.js';

export default {
  name: "App", // Nome del componente principale
  components: {
    AppHeader, // Componente per l'intestazione dell'app
    AppSearch, // Componente per la ricerca degli archetipi
    CharactersList // Componente per la lista dei personaggi
  },
  data() {
    return {
      store, // Associa lo store ai dati del componente
    }
  },
  methods: {
    // Metodo per ottenere i personaggi dall'API
    getCharacters() {
      store.loading = true; // Imposta lo stato di caricamento a true
      let endPoint = store.apiURl; // Ottiene l'endpoint API dallo store

      // Se è stata selezionata una ricerca da AppSearch, aggiungi la query di ricerca
      if(store.searchSelect !== '') {
        endPoint += `&archetype=${store.searchSelect}`; // Aggiungi il parametro della query di ricerca
      }
      
      // Effettua una richiesta GET all'API
      axios
        .get(endPoint)
        .then(res => {
          console.log(res.data.data); // Log dei dati della risposta
          store.CharactersList = res.data.data; // Aggiorna la lista dei personaggi nello store
          store.loading = false; // Imposta lo stato di caricamento a false
        })
        .catch(err => {
          console.log(err.message); // Log dell'errore
          store.loading = false; // Imposta lo stato di caricamento a false
          store.CharactersList = []; // Svuota l'array dei personaggi in caso di errore
        })
    }
  },
  created() {
    this.getCharacters(); // Chiama il metodo getCharacters quando il componente è creato
  }
}
</script>

<template>
  <!-- Componente per l'intestazione dell'app con il messaggio -->
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <!-- Componente per la ricerca degli archetipi con eventi di ricerca -->
    <AppSearch @search="getCharacters()" @searchSelect="getCharacters()"/>
    <!-- Componente per la lista dei personaggi -->
    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './style/general.scss' as *; // Importa gli stili generali
@use './style/partials/variables' as *; // Importa le variabili degli stili

main {
  padding-top: 20px; // Aggiunge padding in cima
  background-color: $primary; // Imposta il colore di sfondo usando una variabile

  // select {
  //   top: 0.5%; // Posiziona il select al 0.5% dall'alto
  //   left: 16%; // Posiziona il select al 16% da sinistra
  //   border-radius: 5px; // Arrotonda i bordi del select
  //   padding: 5px; // Aggiunge padding interno al select
  // }
}
</style>
