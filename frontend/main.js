import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Home from './components/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Welcome },
        { path: '/home', component: Home },
    ],
})

createApp(App).use(router).mount('#app')