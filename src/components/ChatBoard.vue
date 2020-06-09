<template>
  <div>
      <article class="l-list" v-for="(post, index) of posts" :key="index">
        <div class="content__sub">
          <span class="user__avatar">
              <img src="../assets/default_user.png" alt="" width="150" height="150">
            </span>
        </div>
        <div class="content__main">
          <p class="user__name">{{ post.fields.name.stringValue }}</p>
          <div class="content__inner balloon">
            <p class="content__comment">{{ post.fields.comment.stringValue }}</p>
<time class="content__time">{{ new Date(post.createTime).toLocaleDateString() }}</time>
          </div>
        </div>
      </article>
  </div>
</template>

<script>
  export default {
    name: 'ChatBoard',
    data() {
      return {
        
      }
    },
    computed: {
      posts() {
        return this.$store.state.posts
      }
    },
    created() {
      this.$store.dispatch('getPosts')
    }
  }
</script>

<style lang="scss" scoped>
  .l-list {
    display: flex;
    align-items: flex-start;
    margin-top: 24px;
  }
  .content {
    &__main {
      width: calc(100% - 80px);
      border-radius: 5px;
      margin-left: 24px;
    }
    &__inner {
      display: flex;
      background-color: white;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 16px 16px 24px;
      box-sizing: border-box;
      height: 100%;
    }
    &__comment {
      text-align: left;
      margin-top: 0;
      letter-spacing: .02em;
    }
    &__time {
      font-size: 14px;
      color: #6d8398;
      text-align: right;
      letter-spacing: .02em;
    }
  }
  .balloon {
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 20px;
      left: -8px;
      width: 16px;
      height: 16px;
      border-top: solid 8px white;
      border-left: solid 8px white;
      background-color: white;
      transform: rotate(-45deg);
    }
  }
  .user {
    &__avatar {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      background-color: rgba(0,0,0,.12);
      margin-top: 20px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(.5);
      }
    }
    &__name {
      text-align: left;
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 2px;
      color: #6d8398;
      letter-spacing: .02em;
    }
  }
</style>