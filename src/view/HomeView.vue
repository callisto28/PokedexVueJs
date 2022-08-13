
<template>

  <div class="d-flex flex-column align-center lighten-4">
    
    <div class="d-flex flex-column justify-center">
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        height="150"
        contain
        class="bg-grey-lighten-2"
      ></v-img>
      <!-- <v-text-field
        label="Search Pokemon"
        v-model="search"        
        class="mt-3"
        ></v-text-field> -->
    </div>
    
 <router-link :to="`/details/${pokemonId}`">
  <p @click="setPokemonId(pokemon.id)" v-for="pokemon in listPokemon" :key="pokemon.name">{{pokemon.name}}</p>
 </router-link>

  </div>
</template>


<script lang="js">
import getData from "../service/data"
// import getDataId from "../service/data"

export default {  
    name: "HomeView",
  mounted() {
    getData.getPokemon().then(data => {
        this.pokemon = data.results;
        this.pokemons(this.pokemon)
      })      
    },

    methods : {
       pokemons(michel) { 
        this.listPokemon = michel.map(pokemon => {
          return {
            name: pokemon.name,
            url: pokemon.url,
            id: pokemon.url.split("/")[6]
          }
        })      
       },
       setPokemonId(id) {
        this.pokemonId = id
        console.log(this.pokemonId);
       }
    },
    
   data() {
      return {
        listPokemon:[],
         pokemonId: null,
      }
    },
    
  };

</script>

<style>
</style>