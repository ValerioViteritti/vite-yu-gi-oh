<script>
// import di axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'

// import state management
import { store } from './store.js';

export default {
  name: "App",
  components: {
    AppHeader,
    CharactersList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios.
        get(store.apiURl)
        .then(res => {
          console.log(res.data.data);
          store.CharactersList = res.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh" />
  <main>
    <label for="archetype"></label>
    <select id="country" name="country">
      <option value="australia">Alien</option>
      <option value="canada">Infernoble Arms</option>
      <option value="usa">Noble Knight</option>
      <option value="usa">Melodious</option>
      <option value="usa">Archfiend</option>
    </select>

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
