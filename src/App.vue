<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- <InstructionsTest /> -->
        <div>
          <Navigate />
          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import InstructionsTest from './components/InstructionsTest.vue';

import Navigate from "./components/Navigate.vue";

export default {
  name: "App",
  components: {
    // InstructionsTest,

    Navigate,
  },
};
</script>
