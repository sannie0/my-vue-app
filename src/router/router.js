import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/Registration.vue';
import ChatPage from './components/ChatPage.vue';
import Login from './components/Login.vue';

const routes = [
  {path: '/start', name: 'start', component: Registration},
  {path: '/login', name: 'login', component: Login},
  {path: '/chat', name: 'chat', component: ChatPage}
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;