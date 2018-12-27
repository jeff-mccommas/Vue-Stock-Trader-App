<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
<hr/>
<br /><br /><br />
      <div>
        <h2>This is Vue-material button components</h2>
     <div>
       <small>Flat</small>
       <md-button>Default</md-button>
       <md-button :md-ripple="false">Ripple Off</md-button>
       <md-button class="md-primary">Primary</md-button>
       <md-button class="md-accent">Accent</md-button>
       <md-button disabled>Disabled</md-button>
     </div>

     <div>
       <small>Raised</small>
       <md-button class="md-raised">Default</md-button>
       <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
       <md-button class="md-raised md-primary">Primary</md-button>
       <md-button class="md-raised md-accent">Accent</md-button>
       <md-button class="md-raised" disabled>Disabled</md-button>
     </div>

     <div>
       <small>Dense</small>
       <md-button class="md-dense md-primary">Flat</md-button>
       <md-button class="md-dense md-raised md-primary">Raised</md-button>
     </div>
   </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
