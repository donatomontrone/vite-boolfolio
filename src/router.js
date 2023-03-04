import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import AboutUs from './pages/AboutUs.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        }
    ]
});
export { router };