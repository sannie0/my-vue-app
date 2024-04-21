<template>
  <div class="chat-window">
    <div class="chat-messages" ref="chatMessages">
      <!-- Отображение сообщений -->
      <div v-for="message in messages" :key="message.id" class="message">{{ message.text }}</div>
    </div>
    <div class="chat-input">
      <input class="custom-input" type="text" v-model="newMessage" placeholder="Введите сообщение...">
      <button class="custom-button" @click="sendMessage">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [] // Массив для хранения сообщений
    };
  },
  methods: {
    async sendMessage() {
      try {
        const connection = this.$signalRConnection;

        if (this.newMessage.trim() !== '' && connection) {

          
          await connection.send("SendMessages", {content: this.message, user_id: this.userId});
          
          this.messages.push({ id: this.messages.length + 1, text: this.newMessage });
          
          this.newMessage = '';
        } else {
          alert('Введите сообщение!');
        }
      } catch (error) {
        console.error(error.toString());
      }
    }
  }
};
</script>
