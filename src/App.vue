<template>
  <div id="app">
    <div id="nav">
      <router-link to="/resister">Resister</router-link>
      |
      <router-link to="/login">Login</router-link>
    </div>
    <div class="l-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  // variables
  $color-baseLight: #f7f9f9;
  $color-baseDeep: #2c3e50;

  //reset
  body {
    margin: 0;
  }
  li {
    list-style: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: $color-baseLight;
    min-height: 100vh;
  }
  #nav {
    text-align: center;
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  //layout
  .mt32 {
    margin-top: 32px;
  }
  .l-container {
    max-width: 600px;
    margin: auto;
    &__inner {
      padding: 16px;
      &.-narrow {
        margin: auto;
        max-width: 400px;
      }
    }
  }
  .l-column {
    margin-top: 80px;
  }

  //title 
  .title {
    &__level1 {
      text-align: center;
      font-size: 32px;
      margin-top: 0;
      margin-bottom: 40px;
    }
  }

  //button
  .btn {
    cursor: pointer;
    margin-top: 16px;
    &:hover {
      opacity: .9;
    }
    &__keyTips {
      display: block;
      font-size: 14px;
      font-weight: normal;
      text-align: right;
    }
    &__send {
      width: 100%;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      background-color: #2c3e50;
    }
    &__add {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: none;
      background-color: #dc0a58;
      position: fixed;
      bottom: 100px;
      left: 80%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        &::before,
        &::after {
          content: '';
          position: absolute;
          background-color: white;
          border-radius: 3px;
        }
        &::before {
          width: 5px;
          height: 40px;
        }
        &::after {
          width: 40px;
          height: 5px;
        }
      }
    }
  }

  //form
  .form {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 5px;
    &:not(:first-of-type) {
      margin-top: 8px;
    }
    &__label {
      display: block;
      text-align: left;
    }
    &__mainarea {
      padding: 32px 16px 48px;
      background-color: white; 
      border-radius: 30px;
    }
    &__subarea {
      padding: 0 16px;
      margin-top: 24px;
    }
  }
</style>
