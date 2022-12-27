import { createRouter, createWebHistory} from "vue-router";
import Movies from '../components/Movies/index.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: "/",
    component: Movies 
  },
  {
    path: "/about",
    component: About
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;