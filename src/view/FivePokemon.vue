<template>
  <div class="container">
    <router-link :to="`/details/${pokemonId}`">
      <div class="list">
        <article
          v-for="pokemon in listPokemon"
          :key="pokemon.name"
          @click="setPokemonId(pokemon.id)"
        >        
          <img
            :src="imgPokemonUrl + pokemon.id + '.png'"
            width="120"
            height="120"
            alt=""
          />
          <h3>{{ pokemon.name }}</h3>
        </article>
      </div>
    </router-link>
   
  </div>
</template>


<script lang="js">
// import getData from "../service/data"
import getDataId from "../service/data";


export default {
    name: "FivePokemon",
    mounted() {
      this.getPokemonInPage(1);

        // getDataId.getPokemon().then(data => {
        //     this.pokemon = data.results;
        //     this.pokemons(this.pokemon);
        // });
    },
    methods: {
        pokemons(pokemons) {
            this.listPokemon = pokemons.map(pokemon => {
                return {
                    name: pokemon.name,
                    url: pokemon.url,
                    id: pokemon.url.split("/")[6]
                };
            });
        },
        setPokemonId(id) {
            this.pokemonId = id;
            console.log(this.pokemonId);
        },
        getPokemonInPage(){
           for(let i =  this.page5; i <= this.page5 * this.pokemonsInPage5; i++){
              getDataId.getPokemon(i).then(data => {
            this.pokemon = data.results;
            this.listPokemon.push(this.pokemon[i]);
            this.pokemons(this.listPokemon);
                  });                
               }            
           }            
        },
    
    data() {
        return {
            listPokemon: [],
            pokemonId: null,
            imgPokemonUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
            pokemonsInPage5: 5,            
            page5: 1,
           
        };
    },
    
};

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: calc(80vh - 20px);
  font-family: "Acme", arial;
  font-size: 1rem;
  font-weight: normal;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 920px;
  :hover{
    background: black;
    transition-delay: 200ms;

    ;
  }
}
article {
  height: 190px;
  background-color: #efefef;
  text-align: center;  
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 30px rgba(11, 117, 239, 0.47),
    0 10px 10px rgba(239, 19, 19, 0.2);
}
h3 {
  font-size: 1.2rem; 
  margin: 0;
}
#scroll-trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  font-size: 2rem;
  color: #efefef;
}
</style>