import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../view/HomeView.vue';
import FavorisView from '../view/FavorisView.vue';
import DetailPokemonView from '../view/DetailPokemonView.vue';
import FivePokemon from '../view/FivePokemon.vue';
import TenPokemon from '../view/TenPokemon.vue';
import FiftyPokemon from '../view/FiftyPokemon.vue';
import TwelvePokemon from '../view/TwelvePokemon.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/fivepokemon",
      name: "FivePokemon",
      component: FivePokemon,
    },
    {
      path: "/tenPokemon",
      name: "tenPokemon",
      component: TenPokemon,
    },
    {
      path: "/fiftypokemon",
      name: "FiftyPokemon",
      component: FiftyPokemon,
    },
    {
      path: "/Twelvepokemon",
      name: "TwelvePokemon",
      component: TwelvePokemon,
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
