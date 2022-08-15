
<template>
  <div class="container" width="100%">
    <div class="d-flex justify-center align-center">
      <h3>Rechercher un Pokemon :</h3>
      <input
        type="search"
        v-model="search"
        placeholder="Rechercher ..."
        id="search"
        autocomplete="off"
      />
      <span v-if="search && filteredPokemon.length >= 1">
        {{ filteredPokemon.length }} résultat<span
          v-if="filteredPokemon.length >= 2"
          >s</span
        >
      </span>
    </div>

    <div class="d-flex justify-center align-center">
      <h3>Afficher par :</h3>

      <button class="round-ball orange" @click="setPokemonPage()">5</button>
      <button class="round-ball orange" @click="setPokemonPage10()">10</button>
      <button class="round-ball orange" @click="setPokemonPage15()">15</button>
      <button class="round-ball orange" @click="setPokemonPage20()">20</button>
      <button class="round-ball orange" @click="setPokemonPageAll()">
        All
      </button>
    </div>

    <router-link :to="`/details/${pokemonId}`" class="router">
      <div class="list">
        <v-card
          class="
            rounded-lg
            shadow-lg
            rounded-bl-0
            d-flex
            flex-column
            justify-center
            align-center
            card-pokemon
          "
          v-for="pokemon in filteredPokemon"
          :key="pokemon.name"
          @click="setPokemonId(pokemon.id)"
        >
          <img
            :src="imgPokemonUrl + pokemon.id + '.png'"
            width="120"
            height="120"
            alt="pokemon.name"
          />
          <v-card-title class="name">{{ pokemon.name }}</v-card-title>
          
        </v-card>

        <div v-if="filteredPokemon.length == []" class="no-result">
          <h3>Désolé aucun résultat</h3>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script lang="js">

import getDataId from "../service/data";

export default {  
    name: "HomeView",
    mounted() {      
         getDataId.getPokemon().then(data => {
            this.pokemon = data.results;
            this.pokemons(this.pokemon);
        });
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
            
        },
        setPokemonPage() {
          this.listPokemon = this.pokemon.slice(0, this.pokemonsInPage5);
          this.pokemons(this.listPokemon);
           
        },
        setPokemonPage10() {
          this.listPokemon = this.pokemon.slice(0, this.page10);
           this.pokemons(this.listPokemon);
           
        },
        setPokemonPage15() {
          this.listPokemon = this.pokemon.slice(0, this.page15);
           this.pokemons(this.listPokemon);
           
        },
        setPokemonPage20() {
           this.listPokemon = this.pokemon.slice(0, this.page20);
           this.pokemons(this.listPokemon);
        },
        setPokemonPageAll() {           
            this.listPokemon = this.pokemon.slice(0, this.pageAll);
           this.pokemons(this.listPokemon);
        },   
        },
    
    data() {
        return {
            search: "",
            listPokemon: [],
            pokemon: [],
            pokemonId: null,
            imgPokemonUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
            pokemonsInPage5: 5,            
            page5: 5,
            page10: 10,
            page15: 15,
            page20: 20,
            pageAll: 50,        
           
        };
    },
    components: {
        
    },
    computed: {
        filteredPokemon() {
            return this.listPokemon.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
    
};

</script>

<style lang="scss" scoped>
#search {
  text-align: center;
  width: 200px;
  height: 30px;
  background: white;
  border-radius: 5px;
  border: 1px solid rgb(13, 13, 13);
  margin-right: 5px;
}
.router{
  text-decoration: none;
}

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
  max-width: 1020px;
   :hover {
    background: rgb(13, 13, 13);
    color: white;
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
  font-size: 1.12rem;
  margin: 0;
  padding: 0 5px 5px 5px;
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
.round-ball {
  margin: 5px 10px 10px 0;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  font-weight: 700;
  border-radius: 100%;
  color: rgb(245, 234, 234);
}


@media screen and (min-width: 350px) and (max-width: 680px) {
  .container {
    
    width: 100%;
    min-height: auto;
  }
   h3{
    font-size: 0.8rem;
  }
  .list {
    .name{font-size: 0.9rem;}  
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: 1.2fr 1.1fr; 
  gap: 10px 6px; 
  grid-template-areas: 
    ". ."
    ". ."; 
  justify-items: stretch; 
  width: 100%;; 
  height: auto; 
  margin: 0 1px 1px 0px;
  }
  
  article {
    
    height: 50px;
    width: 250px;
  }
}
@media screen and (min-width: 641px) and (max-width: 1024px) {
  .container {
    width: calc(100% - 20px);
    min-height: calc(80vh - 20px);
  }
  h3{
    font-size: 1.05rem;
  }
  .list {
     .name{font-size: 0.9rem;}  
   display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  grid-template-rows: 1.2fr 1.1fr; 
  gap: 10px 6px; 
  grid-template-areas: 
    ". ."
    ". ."; 
  justify-items: stretch; 
  width: auto; 
  height: auto; 
  }
  article {
    height: 50px;
    width: 250px;
  }
}

</style>