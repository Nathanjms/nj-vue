import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/main-pages/Home.vue";
import About from "../components/main-pages/About.vue";
import Coding from "../components/main-pages/Coding.vue";
import Music from "../components/main-pages/Music.vue";
import NotFound from "../components/global/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/coding",
    name: "Coding",
    component: Coding,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
