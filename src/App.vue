<template>
  <HeaderComponent />
  <main>
    <SearchBarComponent @filterchar="getCharacters" />
    <CounterCharComponent />
    <CharactersListVue />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './assets/data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersListVue from './components/CharactersListComponent.vue';
import CounterCharComponent from './components/CounterCharComponent.vue';
import SearchBarComponent from './components/SearchBarComponent.vue';

export default {
  components: {
    HeaderComponent,
    CharactersListVue,
    CounterCharComponent,
    SearchBarComponent
  },
  data() {
    return {
      store,
      endPoint: 'character'
    }
  },
  methods: {
    getCharacters() {
      store.errormessage = '';
      //const apiaurl = (status) ? this.apiURL + '?status=' + status : this.apiURL;
      let options = null
      if (store.search.category && store.search.name) {
        options = {
          params: {
            category: store.search.category,
            name: store.search.name
          }
        }
      } else if (store.search.category) {
        options = {
          params: {
            category: store.search.category
          }
        }
      } else if (store.search.name) {
        options = {
          params: {
            name: store.search.name
          }
        }
      }
      // if (store.search.category || store.search.name) {
      //     options = {
      //         params: {
      //             ...store.search
      //         }
      //     }
      // }
      store.loading = true;
      const apiurl = store.apiURL + this.endPoint;
      axios.get(apiurl, options).then(
        (res) => {
          store.characterList = res.data.results;
          console.log(store.characterList);
          store.count = store.characterList.length
          store.loading = false;
        }
      ).catch((error) => {
        store.characterList.length = 0;
        store.loading = false;
        store.errormessage = error.message;
        // console.log(error.message);
        // console.log(error.response.status);
      })
    }
  },
  created() {
    this.getCharacters()
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 1rem 0;
}
</style>



