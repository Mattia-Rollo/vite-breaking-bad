<template>
  <HeaderComponent />
  <main>
    <CounterCharComponent />
    <CharactersListVue />
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CharactersListVue from './components/CharactersListComponent.vue';
import CounterCharComponent from './components/CounterCharComponent.vue';

export default {
  components: {
    HeaderComponent,
    CharactersListVue,
    CounterCharComponent
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 1rem 0;
}
</style>



