<template>
  <div>
    <app-stock v-for="(stock, index) in stocks" :key="`stock-${index}`" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "../stocks/Stock.vue";
export default {
  name: "Portfolio",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>