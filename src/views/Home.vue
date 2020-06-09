<template>
  <div class="home">
    <div class="l-container__inner">
      <h1 class="title__level1">Chit Chat</h1>
       <main>
         <ChatBoard />
       </main>
    </div>
    <Form />
  </div>
</template>

<script>
import ChatBoard from '@/components/ChatBoard.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    ChatBoard,
    Form
  }
}
</script>
