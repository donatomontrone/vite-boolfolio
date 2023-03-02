<script>
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    MainComponent,
  }
}
</script>

<template>
  <MainComponent />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>

