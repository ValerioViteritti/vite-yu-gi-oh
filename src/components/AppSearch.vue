<script>
// import store per v-model
import { store } from '../store.js';

export default {
  name: 'AppSearch',
  data() {
    return {
      store,
    }
  },
  methods: {
    restSearch() {
      // svuotiamo il campo
      store.searchSelect = ''; // Reset della selezione

      // facciamo ripartire l'evento che scatena l'evento
      this.$emit('search');
    },
    // triggerSearch() {
    //   this.$emit('search');
    // }
  }
}
</script>

<template>
  

  
  <select id="archetype" name="archetype" v-model="store.searchSelect" @change="$emit('searchSelect')">
    <option value="">Select an archetype</option>
    <option value="Alien">Alien</option>
    <option value="Infernoble Arms">Infernoble Arms</option>
    <option value="Noble Knight">Noble Knight</option>
    <option value="Melodious">Melodious</option>
    <option value="Archfiend">Archfiend</option>
  </select>
</template>


<style lang="scss">
// @use './style/general.scss' as *;
// @use './style/partials/variables' as *;



</style>
