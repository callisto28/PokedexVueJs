<template>
<v-container grid-list-md fluid>
	<v-layout wrap>
		<v-flex xs6 sm4 md2 v-for="(pokemon) in favorisPokemon" :key="pokemon">      
			<v-card class="dog-card">
        <v-card-title primary-title class="d-flex justify-center">
          Vos Pokémon Favoris
        </v-card-title>
				<v-img height="150px" :src="pokemon"></v-img>
				<v-card-actions>
					<v-spacer>
           </v-spacer>
					<v-btn icon>
						<v-icon>delete</v-icon>
					</v-btn>
				</v-card-actions>
         <router-link
      class="nes-btn"
      to="/"
    > Retour à l'accueil</router-link>
			</v-card>
      
		</v-flex>
	</v-layout>
  
</v-container>
   





       
</template>

<script lang="js">
import getDataId from "../service/data"


export default { 
  name:"detailsView",  

 async mounted() {
    const pokemonId = this.$route.params.id;   
    await getDataId.getPokemonId( pokemonId).then(data => {       
         this.pokemon = data;            
      })
  },
  data (){
    return {
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
      pokemon: [], 
      favorisPokemon: [],  
    }
  },
  methods : {
    closeDetail() {
        this.$emit('closeDetail');
      }
    
  }, 
  

}
</script>

<style>

</style>