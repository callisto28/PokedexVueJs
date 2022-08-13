<template>
  <v-card class="mx-auto" max-width="344" >
    <!-- <v-img src="pokemonImage" height="200px" cover></v-img> -->

    <v-card-title>
      {{pokemon}}
    </v-card-title>
  </v-card>
   
</template>

<script lang="js">
import getDataId from "../service/data"

export default { 
  name:"detailsView",
  mounted() {
    const pokemonId = this.$route.params.id;
    console.log(pokemonId,"truc");
    getDataId.getPokemonId( pokemonId).then(data => {       
        this.pokemon = data.results;  
        console.log(this.pokemon, 'bdi');     
      })
  },
  data (){
    return {
      pokemon: [],
      
    }
  },
 
  
  
  // props:{
  //   pokemonName: {
  //     type: String,
  //     required: true
  //   },
  //   pokemonType: {
  //     type: String,
  //     required: true
  //   },
  //   pokemonImage: {
  //     type: String,
  //     required: true
  //   }
  // },
  //  setup() {
  //   return {};
  // },
  
// data: () => ({
//       show: false,
//     }),
//      computed: {
//     background() {
//       if (this.pokemonType === "grass" || this.pokemonType === "bug") {
//         return "#00FFAB";
//       } else if (this.pokemonType === "fire") {
//         return "#F94C66";
//       } else if (this.pokemonType === "water") {
//         return "#00D7FF";
//       }
//       return "#fff";
//     },
//   },
}
</script>

<style>
</style>