<template>
  <div class="md-toolbar md-primary md-theme-default md-elevation-4 md-alignment-center-right">
    <router-link tag="a" to="/" activeClass="active">
      <md-button md-fab-top-left>
        <md-icon class="md-size-1x">home</md-icon>
      </md-button>
    </router-link>
    <router-link tag="a" to="/portfolio" activeClass="active">
      <md-button md-menu-trigger>Portfolio</md-button>
    </router-link>
    <router-link tag="a" to="/stocks">
      <md-button md-menu-trigger outerLinkTo="stocks" activeClass="active">Stocks</md-button>
    </router-link>
    <router-link tag="a" to="/stocks">
      <md-button md-menu-trigger outerLinkTo="stocks">End Day</md-button>
    </router-link>
    <md-menu>
      <md-button md-menu-trigger>Save and Load</md-button>

      <md-menu-content>
        <md-menu-item @click="saveData">Save Data</md-menu-item>
        <md-menu-item @click="loadData">Load Data</md-menu-item>
      </md-menu-content>
    </md-menu>
    <md-button class="funds">Funds: {{ funds | currency }}</md-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      vm.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      client.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.md-toolbar.md-primary.md-theme-default.md-elevation-4 {
  background-color: #9c27b0 !important;
}
.funds {
  position: relative;
  float: right;
}
</style>
