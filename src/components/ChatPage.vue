<template>
  <div class="chat-window">
    <ul class="message-container">
      <li v-for="message in messages" :key="message.id">
        <div class="message">{{ message.content }}</div>
      </li>
    </ul>
  </div>
    <div class="chat-input">
      <div style="display: inline-block; margin-right: 10px;">
      <input class="custom-input" type="text" v-model="newMessage" placeholder="Введите сообщение..." @keydown.enter="SendMessage">
      </div>
      <div style="display: inline-block;">
      <button class="custom-button" @click="SendMessage">Отправить</button>
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
    async SendMessage() {
      try {
        const connection = this.$signalRConnection;
        const userId = parseInt(localStorage.getItem('user_id'));
        if (this.newMessage.trim() !== '' && connection) {
          const message = { content: this.newMessage, userId: userId };
          await connection.send("SendMessageAll", message);
          console.log('Отправка выполнена!');
          this.newMessage = '';
        } else {
          alert('Введите сообщение!');
        }
      } catch (error) {
        console.error(error.toString());
      }
    }
  },
  mounted() {
    this.$signalRConnection.on("ReceiveMessage", (newMessage) => {
      console.log(newMessage);
      this.messages.push(newMessage);
      console.log(this.messages);
    });
  }
};
  </script>

<style>
.message {
  font-size: 14pt;
  color: #000000;
  margin-bottom: -15px;
  list-style-type: none;
}
.message-container {
    
    overflow: auto;
    list-style-type: none;
    margin-bottom: 5px;
    margin-top: -40px;

}

.chat-window {
  
  display: flex;
  flex-direction: column;
}

</style>  