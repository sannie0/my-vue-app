<template>
    <form @submit.prevent="submitForm">
      <div>
        <input id="username" type="text" v-model="userName" placeholder="Имя пользователя" class="custom-input">
      </div>
      <br><br>
      <div>
        <input id="password" type="password" v-model="password" placeholder="Введите пароль" class="custom-input">
      </div>
    <div>
      <br><router-link style="color: #7d49d1;" to="/">Зарегистрироваться</router-link>
    </div><br>
      <button @mouseover="isHovered = true" @mouseleave="isHovered = false" class="custom-button">Войти</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { routerKey, useRouter } from 'vue-router';
  import { LoginUser } from '../api.js';
  export default defineComponent({
    setup() {
      const userName = ref('');
      const password = ref('');
      const isHovered = ref(false);
      const router = useRouter();
  
      const submitForm = async () => {
        try {
          const response = await LoginUser(userName.value, password.value);
          localStorage.setItem('username', userName.value);
          console.log('Пользователь успешно зашел в систему', response.data);
          const [token, userId] = response.data.split(' ');
          localStorage.setItem('user_id', userId);
          console.log('Пользователь успешно зашел в систему', userId);
          router.push('/chat');
        } catch (error) {
          router.push('/login');
          alert('Ошибка при вводе данных!');
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