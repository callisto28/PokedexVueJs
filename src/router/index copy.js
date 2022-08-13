import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import FavorisView from "../view/FavorisView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../view/DetailPokemonView.vue"),
    },
    {
      path: "/favoris",
      name: "favoris",
      component: FavorisView,
    },
  ],
});
export default router;
