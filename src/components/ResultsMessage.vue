<script>
// import store per v-model
import { store } from '../store.js';


export default {
    name: 'ResultsMessage',
    data() {
        return {
            store,
        }
    },
    computed: {
        resultNumber(){
            return store.charactersList.length
        }
    },
    
}

</script>

<template>
    <section class="text-center fw-bold">
        Trovato/i {{resultNumber}} risultato/i
    </section>


  

</template>

<style lang="scss">
// @use './style/general.scss' as *;
// @use './style/partials/variables' as *;



</style>
