<template>
    <div>
        <app-stock v-for="(stock, index) in stocks" :key="`stock-${index}`" :stock ="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

 export default {
  name: "Stock",
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 1, name: "Google", price: 200 },
        { id: 1, name: "Apple", price: 1250 },
        { id: 1, name: "Twitter", price: 8 }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {},
  components:{
appStock: Stock
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
