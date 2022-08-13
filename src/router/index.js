import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../view/HomeView.vue';
import FavorisView from '../view/FavorisView.vue';
import DetailPokemonView from '../view/DetailPokemonView.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/details/:id",
      name: "details",
      component: DetailPokemonView
    },
    {
      path: "/favoris",
      name: "favoris",
      component: FavorisView,
    },
  ];
const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;
