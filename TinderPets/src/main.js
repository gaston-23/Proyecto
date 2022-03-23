import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login.vue'
import Register from './components/Register.vue';
import Carousel from './components/Carousel.vue';
import Profile from './components/Profile.vue';
import Matches from './components/Matches.vue';



// Rutas de la aplicacion
const routes = [
    { path: '/', component: Register },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/home', component: Carousel },
    { path: '/profile', component: Profile },
    { path: '/matches', component: Matches }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let app = createApp(App);
app.use(router);
app.mount('#app')