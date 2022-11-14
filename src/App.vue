<template>
  <HeaderComponent />
  <main>
    <CharactersListVue />
    <CounterCharComponent />
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

</style>



