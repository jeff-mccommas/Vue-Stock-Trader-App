<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <app-header></app-header>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Home from "./components/Home.vue";
import { stocksRef, fundsRef } from './firebase'

export default {
  components: {
    appHeader: Header,
    Portfolio,
    Stocks,
    Home
  },
  created() {
    this.$store.dispatch('setStocksRef', stocksRef)
  }
};
</script>

<style>
body {
  padding: 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
