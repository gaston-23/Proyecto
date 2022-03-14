import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login.vue'
import Carousel from './components/Carousel.vue';

// Rutas de la aplicacion
const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Carousel }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(App);
app.use(router);

app.mount('#app')