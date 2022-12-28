import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/pages/AboutPage.vue"),
  },
  {
    path: "/coding",
    name: "Coding",
    component: () => import("../components/pages/CodingPage.vue"),
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../components/pages/MusicPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/pages/AboutPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../components/global/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
