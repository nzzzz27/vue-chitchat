<template>
  <div>
    <main class="l-container__inner -narrow">
      <section class="form__mainarea">
        <h1 class="title__level1">Resister</h1>
        <div>
          <p><input class="form" type="text" name="email" v-model="email" placeholder="メールアドレス"></p>
          <p><input class="form" type="text" name="password" v-model="password" placeholder="パスワード（6文字以上）"></p>
          <button class="btn btn__send" @click="sendAuthData()">登録</button>
        </div>
        <div class="mt32">
        <span>アカウントをお持ちですか？</span>
        <router-link to="/login">ログイン</router-link>
        </div>
      </section>
      <div class="form__subarea">
      <p>
        <router-link to="/">&lt; HOME</router-link>
      </p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Resister',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      linkToLogin() {
        this.$router.push('/login')
      },
      sendAuthData() {
        this.$store.dispatch('resister', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>