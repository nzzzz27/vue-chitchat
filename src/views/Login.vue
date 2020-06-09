<template>
  <div>
    <main class="l-container__inner -narrow">
      <section class="form__mainarea">
        <h1 class="title__level1">Log in</h1>
        <p class="text-center">test@test.com  / testtest でもログインできます。</p>
        <div class="mt32">
          <input class="form" type="text" name="email" v-model="email" placeholder="メールアドレス">
          <input class="form" type="text" name="password" v-model="password" placeholder="パスワード（6文字以上）">
          <p>
            <button class="btn btn__send" @click="sendAuthData()">ログイン</button>
          </p>
        </div>
        <div class="mt32">
          <span>アカウントをお持ちでないですか？</span>
          <router-link to="/resister">アカウント作成</router-link>
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
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      sendAuthData() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>