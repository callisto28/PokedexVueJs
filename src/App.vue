<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <InstructionsTest />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InstructionsTest from './components/InstructionsTest.vue';

export default {
  name: 'App',

  components: {
    InstructionsTest,
  },


};
</script>
