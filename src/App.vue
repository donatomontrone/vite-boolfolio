<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    MainComponent,
    HeaderComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <router-view></router-view>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>

