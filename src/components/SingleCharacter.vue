<script>
export default {
    name: 'SingleCharacter', // Nome del componente
    props: ['info'], // Proprietà 'info' per ricevere i dati di un singolo personaggio
}
</script>

<template>
    <div class="character text-center">
        <!-- Immagine del personaggio -->
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <!-- Nome del personaggio -->
        <h4>{{ info.name }}</h4>
        <!-- Archetype del personaggio -->
        <div class="font-weight-bold">{{ info.archetype }}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/partials/variables' as *; // Importa le variabili di stile

.character {
    background-color: $primary; // Imposta il colore di sfondo del personaggio usando una variabile
    height: 550px; // Imposta l'altezza del contenitore del personaggio

    img {
        height: 350px; // Imposta l'altezza dell'immagine del personaggio
    }

    h4 {
        margin-top: 20px; // Aggiunge un margine superiore al titolo del personaggio
    }
}
</style>
