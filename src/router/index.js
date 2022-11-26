import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import CodingPage from "../components/pages/CodingPage.vue";
import MusicPage from "../components/pages/MusicPage.vue";
import NotFound from "../components/global/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/coding",
    name: "Coding",
    component: CodingPage,
  },
  {
    path: "/music",
    name: "Music",
    component: MusicPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
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
