<script>
// import store per v-model
import {store} from '../store.js';


export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    },
    methods: {
        restSearch(){
            // svuotiamo il campo
            store.searchText = '';

            // facciamo ripartire l'evento che scatena l'evento

            this.$emit('search');
        }
    }
}

</script>

<template>


    <form>
        <div>
            <label for="search character"></label>
            <input type="text" placeholder="Search character"
            v-model="store.searchText" 
            />
        </div>
        <div>
            <div>
                <div>
                    <button type="submit"
                    @click.prevent="$emit('search')">
                    Submit</button>

                    <button type="reset" 
                    @click.prevent="restSearch">
                    Reset</button>

                </div>
            </div>
            
        </div>
        
    </form>
  
    <!-- <label for="archetype"></label>
    <select id="country" name="country">
      <option value="australia">Alien</option>
      <option value="canada">Infernoble Arms</option>
      <option value="usa">Noble Knight</option>
      <option value="usa">Melodious</option>
      <option value="usa">Archfiend</option>
    </select> -->

    <!-- <input type="text" placeholder="Search"
    
    v-model="store.searchText"
    @keyup.enter="$emit('search')";

    > -->

  

</template>

<style lang="scss">
// @use './style/general.scss' as *;
// @use './style/partials/variables' as *;



</style>
