<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- <InstructionsTest /> -->
        <div>
          <Navigate />
          <div class="d-flex justify-center">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              height="150"
              contain
              class="bg-grey-lighten-2 mb-5"
            ></v-img>
          </div>
          <!-- <div class="d-flex justify-center align-center">
            <h3>Afficher par :</h3>
            <router-link class="favoris" to="/fivePokemon">
              <Pagination :page5="5" class="p-2" />
            </router-link>
            <router-link class="favoris" to="/tenPokemon">
              <Pagination :page10="10" class="p-2" />
            </router-link>
            <router-link class="favoris" to="/fiftypokemon">
              <Pagination :page15="15" class="p-2" />
            </router-link>
            <router-link class="favoris" to="/twelvePokemon">
              <Pagination :page20="20" class="p-2" />
            </router-link>
            <router-link class="favoris" to="/">
              <Pagination :pageAll="100" class="p-2" />
            </router-link>
          </div> -->
          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import InstructionsTest from './components/InstructionsTest.vue';

import Navigate from "./components/Navigate.vue";
// import Pagination from "@/components/Pagination.vue";

export default {
  name: "App",
  components: {
    // InstructionsTest,

    Navigate,
    // Pagination,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#app {
  background: radial-gradient(#FFE082, #01579B);
}
</style>
