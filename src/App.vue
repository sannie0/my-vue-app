<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Registration from './components/Registration.vue';
import ChatPage from './components/ChatPage.vue';
import Login from './components/Login.vue';

export default {
    components: {
    Registration,
    Login,
    ChatPage
  }
};
</script>
