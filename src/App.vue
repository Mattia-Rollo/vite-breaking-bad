<template>
  <HeaderComponent />
  <main>
    <SearchBarComponent />
    <CounterCharComponent />
    <CharactersListVue />
  </main>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 1rem 0;
}
</style>



