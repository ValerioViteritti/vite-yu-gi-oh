<script>
// Importa il componente SingleCharacter per visualizzare ogni singolo personaggio
import SingleCharacter from './SingleCharacter.vue';
// Importa il componente ResultsMessage per visualizzare il numero di risultati trovati
import ResultsMessage from './ResultsMessage.vue';

// Importa la gestione dello stato
import { store } from '../store.js';

export default {
    name: 'CharactersList', // Nome del componente
    components: {
        SingleCharacter, // Registra il componente SingleCharacter
        ResultsMessage // Registra il componente ResultsMessage
    },
    data() {
        return {
            store, // Associa lo store ai dati del componente
        }
    },
}
</script>

<template>
    <section class="container">
        <div>
            <!-- Componente che mostra il numero di risultati trovati -->
            <ResultsMessage />
        </div>
        <div class="row" v-if="!store.loading">
            <!-- Ciclo v-for per iterare attraverso la lista dei personaggi nello store -->
            <div v-for="character in store.CharactersList" :key="character.id" class="col-6 mb-5">
                <!-- Componente che mostra le informazioni di un singolo personaggio -->
                <SingleCharacter :info="character" />
            </div>
        </div>
        
        <!-- Componente AppLoader che può essere usato per mostrare un caricamento, commentato per ora -->
        <!-- <AppLoader v-else label="Yu-Gi-Oh" /> -->
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *; // Importa le variabili di stile

.container {
    .row {
        background-color: rgb(255, 255, 255); // Imposta il colore di sfondo della riga
        margin-top: 40px; // Aggiunge un margine superiore alla riga

        div.col-6 {
            margin-top: 20px; // Aggiunge un margine superiore alle colonne
            width: 20%; // Imposta la larghezza delle colonne
            height: 500px; // Imposta l'altezza delle colonne
        }
    }
}
</style>
