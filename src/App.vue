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

          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigate from "./components/Navigate.vue";

export default {
  name: "App",
  components: {
    Navigate,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#app {
  background: radial-gradient(#ffe082, #01579b);
}
</style>
