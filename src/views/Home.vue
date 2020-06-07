<template>
  <div class="home">
    <div class="l-container__inner">
       <ChatBoard />
    </div>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
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
