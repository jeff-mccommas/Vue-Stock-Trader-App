<template>
  <div id="app">
    <div>
   <md-menu md-direction="bottom-start">
     <md-button md-menu-trigger>Bottom Start</md-button>

     <md-menu-content>
       <md-menu-item><router-link to="/">Home</router-link></md-menu-item>
       <md-menu-item>My Item 2</md-menu-item>
       <md-menu-item>My Item 3</md-menu-item>
     </md-menu-content>
   </md-menu>

   <md-menu md-direction="bottom-end">
     <md-button md-menu-trigger>Bottom End</md-button>

     <md-menu-content>
       <md-menu-item>My Item 1</md-menu-item>
       <md-menu-item>My Item 2</md-menu-item>
       <md-menu-item>My Item 3</md-menu-item>
     </md-menu-content>
   </md-menu>

   <md-menu md-direction="top-start">
     <md-button md-menu-trigger>Top Start</md-button>

     <md-menu-content>
       <md-menu-item>My Item 1</md-menu-item>
       <md-menu-item>My Item 2</md-menu-item>
       <md-menu-item>My Item 3</md-menu-item>
     </md-menu-content>
   </md-menu>

   <md-menu md-direction="top-end">
     <md-button md-menu-trigger>Top End</md-button>

     <md-menu-content>
       <md-menu-item>My Item 1</md-menu-item>
       <md-menu-item>My Item 2</md-menu-item>
       <md-menu-item>My Item 3</md-menu-item>
     </md-menu-content>
   </md-menu>
 </div>
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
