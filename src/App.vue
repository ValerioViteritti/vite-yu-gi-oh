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
    <CharactersList />
  </main>

</template>

<style lang="scss">
@use './style/general.scss';

main {
  padding-top: 20px;
}
</style>
