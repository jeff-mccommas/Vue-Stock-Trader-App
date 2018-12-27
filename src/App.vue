<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";
import Home from "./components/views/Home";
export default {
  components: {
    appHeader: Header,
    Portfolio,
    Stocks,
    Home
  }
};
</script>

<style scoped>
</style>