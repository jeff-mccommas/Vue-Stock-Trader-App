<template>
  <div>
    <app-stock
      v-if="stocks"
      v-for="(stock, index) in stocks"
      :key="`stock-${index}`"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
import { db, stocksRef } from "./../../firebase";

export default {
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  },
  created() {
    let data = [];
  },
  components: {
    appStock: Stock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>