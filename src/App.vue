<script>
// import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppSearch from './components/AppSearch.vue'
// import state management
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    AppSearch,
    CharactersList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      store.loading = true
      let endPoint = store.apiURl;

      // Se si avvia una ricerca da AppSearch aggiungiamo la query di richiesta
      if(store.searchText !== ''){
        endPoint += `&archetype=${store.searchText}`;

      }
      axios.
        get(endPoint)
        .then(res => {
          console.log(res.data.data);
          store.CharactersList = res.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err.message);
          store.loading = false
          // svuoto l'array
          store.CharactersList = []
        })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <AppSearch @search="getCharacters"/>


    <!-- <label for="archetype"></label>
    <select id="country" name="country">
      <option value="australia">Alien</option>
      <option value="canada">Infernoble Arms</option>
      <option value="usa">Noble Knight</option>
      <option value="usa">Melodious</option>
      <option value="usa">Archfiend</option>
    </select> -->

    <CharactersList />
  </main>

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as *;


main {
  padding-top: 20px;
  background-color: $primary;
  position: relative;

  select{

    position: absolute;
    top: 0.5%;
    left: 16%;
    border-radius: 5px;
    padding: 5px;
    

  }
}
</style>
