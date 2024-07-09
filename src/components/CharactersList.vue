<script>
import SingleCharacter from './SingleCharacter.vue'

// import state management
import { store } from '../store.js';

export default {
    name: 'CharactersList',
    components: {
        SingleCharacter,
    },
    data() {
        return {
            store,
        }
    },

}


</script>

<template>
    <section class="container">
        <div class="row" v-if="!store.loading">
            <div v-for="character in store.CharactersList" :key="character.id" class="col-6 mb-5">
                <SingleCharacter :info="character" />
            </div>
        </div>


        <AppLoader v-else label="Yu-Gi-Oh" />
    </section>

</template>

<style scoped lang="scss">
.container{

    .row{

        div.col-6{
            width: 20%;        
            height: 600px;
        }
    }
}
</style>