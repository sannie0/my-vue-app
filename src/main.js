import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/Registration.vue';
import ChatPage from './components/ChatPage.vue';
import Login from './components/Login.vue';
import { HubConnectionBuilder } from '@microsoft/signalr';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: "", component: Registration},
        {path: '/start', name: 'start', component: Registration},
        {path: '/chat', name: 'chat', component: ChatPage},
        {path: '/login', name: 'login', component: Login}
    ]
})

const app = createApp(App);
app.use(router).mount('#app');


function connectSignalR() {
    const connection = new HubConnectionBuilder().withUrl("/hub").build();//http://localhost:7115
    
    connection.start()
      .then(() => {
        console.log("SignalR connected!");
        app.config.globalProperties.$signalRConnection = connection; //глобальное подключение
      })
      .catch(error => console.error("Error connecting to SignalR:", error));
  }


//app.use(router).mount('#app');

connectSignalR();
//createApp(App).use(router).mount('#app');



//5173