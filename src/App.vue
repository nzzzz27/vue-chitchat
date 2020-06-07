<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <div class="l-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
$color-baseLight: #f7f9f9;
$color-baseDeep: #2c3e50;

body, h1 {
  margin: 0;
}

li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $color-baseLight;
  min-height: 100vh;
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

.l-container {
  max-width: 600px;
  margin: auto;
  &__inner {
    padding: 16px;
  }
}
</style>
