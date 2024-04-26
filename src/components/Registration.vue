<template>
  <form @submit.prevent="submitForm(userName, password)">
    <div>
      <input id="username" type="text" v-model="userName" placeholder="Имя пользователя" class="custom-input">
    </div>
    <br><br>
    <div>
      <input id="password" type="password" v-model="password" placeholder="Введите пароль" class="custom-input">
    </div>
    <div>
     <br><router-link style="color: #7d49d1;" to="/login">Авторизация</router-link>
    </div><br>
    <button @mouseover="isHovered = true" @mouseleave="isHovered = false" class="custom-button">Зарегистрироваться</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RegisterUser } from '../api.js';
import Login from './Login.vue';

export default defineComponent({
  setup() {
    const userName = ref('');
    const password = ref('');
    const isHovered = ref(false);
    const router = useRouter();

    const submitForm = async (userName, password) => {
      try {
        const response = await RegisterUser(userName, password);
        localStorage.setItem('username', userName.value);
        router.push('/login');
      } catch (error) {
        alert('Пользователь с таким именем уже зарегистрирован!');
        console.error(error);
        console.error('Пользователь не зарегистрирован!');
      }
    };

    return {
      userName,
      password,
      isHovered,
      submitForm
    };
  }
});
</script>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;

}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

.custom-input {
  width: 300px; 
  height: 40px;
  font-size: 16px; 
  padding: 8px; 
  border: 1px solid #ccc;
  border-radius: 4px; 
  transition: border-color 0.7s ease;
  border-radius: 20px;
  margin-bottom: 10px;
}

.custom-input:focus {
  border-color: #975cf7;
}

.custom-button {
  border: none;
  outline: none;
  background-color: #975cf7;
  color: white;
  margin-bottom: 10px;
}

.custom-button:hover {
  background-color: #7d49d1; 
}

.chat-messages {
  height: 300px;
  overflow-y: auto;
}
.message {
  margin-bottom: 10px;
}

.input-a{
  color: #7d49d1; 
}

.chat-input{}

.chat-window {
  height: 600px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  overflow-y: auto; /* включение вертикальной прокрутки */
}

.message {
  padding: 20px;
  font-size: 20pt;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #1a1a1a;
}

.input-field {
  flex: 1;
  margin-right: 10px;
  border-radius: 20px;
  height: 30px;
  padding: 0 10px;
}

.send-button {
  padding: 5px 10px;
  background-color: #7d49d1;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>