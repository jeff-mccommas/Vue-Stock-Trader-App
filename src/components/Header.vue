<template>
  <div>
    <div class="menu-wrapper">
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>
          <md-icon class="md-size-1x" routerLinkTo="/home">home</md-icon>
        </md-button>
      </md-menu>

      <md-menu md-direction="bottom-end">
        <md-button md-menu-trigger routerLinkTo="portfolio">Portfolio</md-button>
      </md-menu>

      <md-menu md-direction="top-start">
        <md-button md-menu-trigger outerLinkTo="stocks">Stocks</md-button>
      </md-menu>
      <md-menu md-direction="top-start">
        <md-button md-menu-trigger outerLinkTo="stocks">End Day</md-button>
      </md-menu>

      <md-menu md-direction="top-end">
        <md-button md-menu-trigger>Save and Load</md-button>

        <md-menu-content>
          <md-menu-item>Load Data</md-menu-item>
          <md-menu-item>Save Data</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
.menu-wrapper {
  background-color: #448aff;
  height: 50px;
}
</style>