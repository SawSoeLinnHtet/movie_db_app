import { createRouter, createWebHistory} from "vue-router";
import Movies from '../components/Movies/Movies.vue';
import About from '../components/About.vue';
import Details from "../components/Movies/Details.vue";

const routes = [
  {
    path: "/",
    component: Movies,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/details/:movie_id",
    component: Details,
    props: true
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;