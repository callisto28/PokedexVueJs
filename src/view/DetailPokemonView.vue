<template>
  <div class="detail" width="100%">
    <div class="detail-view card">
      <div v-if="pokemon" class="image">
        <img
          :src="imageUrl + pokemon.id + '.png'"
          alt="pokemon.name"
          width="250"
        />
      </div>
      <div v-if="pokemon" class="data card-body">
        <h2 class="card-title">{{ pokemon.name }}</h2>

        <div class="property">
          <div class="left destaq">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>

        <div class="property">
          <div class="left destaq">Taille</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left destaq">Poids</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <h3>Types Pokemon</h3>
        <div class="types">
          <div
            class="type"
            v-for="(value, index) in pokemon.types"
            :key="'value' + index"
          >
            <span :class="value.type.name"> {{ value.type.name }} </span>
          </div>
        </div>
        <h3>Abilités</h3>
        <div class="abilities">
          <div
            class="ability"
            v-for="(value, index) in pokemon.abilities"
            :key="'value' + index"
          >
            {{ value.ability.name }}
          </div>
          <div class="like-container">
            <input
              type="checkbox"
              name="checkbox"
              v-bind:for="pokemon.id"              
              :value="pokemon.id"             
              v-model="favorisPokemon"
              
             
            />
            <label v-bind:for="pokemon.id" v-on:click="addToFavoris(pokemon)" >
            
              <i class="fas fa-heart" id="heart" @click="changeColor()" style="color: yellow;"  ></i>
            </label>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <router-link class="close" to="/"> Retour à la liste</router-link>
        <router-link class="favoris" to="/favoris"
          >Voir les Favoris</router-link
        >
        </div>
    </div>
  </div>
</template>

<!--   -->

<script lang="js">
import getDataId from "../service/data"



export default { 
  name:"detailsView",  

  async mounted() {
    const pokemonId = this.$route.params.id;   
     await getDataId.getPokemonId( pokemonId).then(data => {       
         this.pokemon = data; 
         console.log(this.pokemon);          
      })
      if (localStorage.favorisPokemon){
        this.favorisPokemon = JSON.parse(localStorage.favorisPokemon);
      }
  },
  watch:{
    favorisPokemon(newValue){
      localStorage.favorisPokemon = JSON.stringify(newValue);
    }
  },
  
   data (){
    return {
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      pokemon: [], 
      favorisPokemon: [],    
    }
  },

  methods : {
    closeDetail() {
        this.$emit('closeDetail');
      },
      
      addToFavoris(pokemon){        
        this.favorisPokemon.push({
          id: pokemon.id,
          name: pokemon.name,
          Experience: pokemon.base_experience,
          height: pokemon.height,
          weight: pokemon.weight,
          types: pokemon.types,
          abilities: pokemon.abilities,          
          imageUrl: this.imageUrl + pokemon.id + '.png'
        });   
        
      },
      changeColor() {
        document.getElementById("heart").style.color = "red";
      }
          
      
     
  }, 
  computed:{
    
   
  }
 

}
</script>

<style lang="scss" scoped>

.like-container {
  padding-top: 12px;
  input {
    display: none;

    &:checked + label i {
      color: rgb(251, 38, 38);
      animation: heart 1.3s forwards ease;

      @keyframes heart {
        0% {
          filter: hue-rotate(0deg);
          transform: scale(1);
        }
        50% {
          filter: hue-rotate(-270deg);
          transform: scale(1.3);
        }
        100% {
          filter: hue-rotate(0deg);
          transform: scale(1);
        }
      }
    }
  }
}

// .fa-heart:hover {
//   color: rgba(251, 38, 38, 0.5);
// }
// i:hover {
//   color: rgba(74, 72, 72, 0.65);
// }
.type {
  .grass {
    background: rgb(3, 139, 44) !important;
  }
  .poison {
    background: rgb(74, 7, 105) !important;
  }
  .water {
    background: rgb(8, 135, 219) !important;
  }
  .dragon {
    background: rgb(27, 2, 68) !important;
  }
  .ice {
    background: rgb(78, 199, 255) !important;
  }
  .flying {
    background: rgb(145, 215, 255) !important;
  }
  .fire {
    background: rgb(238, 135, 17) !important;
  }
  .ghost {
    background: rgb(74, 52, 87) !important;
  }
  .fighting {
    background: rgb(122, 0, 0) !important;
  }
  .normal {
    background: rgb(104, 104, 104) !important;
  }
  .psychic {
    background: rgb(195, 0, 255) !important;
  }
  .bug {
    background: rgb(52, 87, 6) !important;
  }
  .dark {
    background: rgb(43, 43, 43) !important;
  }
  .steel {
    background: rgb(116, 116, 116) !important;
  }
  .fairy {
    background: rgb(248, 165, 237) !important;
  }
  .electric {
    background: rgb(255, 217, 1) !important;
  }
  .rock {
    background: rgb(88, 95, 100) !important;
  }
  .ground {
    background: rgb(92, 70, 70) !important;
  }
}

i.fa-spinner {
  text-align: center;
}
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  padding: 90px 10px 10px; 
  width: 100%;
  height: 100vh;
  background: rgba(10, 7, 0, 0.562);
}
.detail-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 50px 0 0;
  position: relative;
  max-width: 510px;
  background-color: rgba(246, 238, 238, 0.951);
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60px;
  width: 130px;
  height: 130px;
  background-color: #f6c70d;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  text-transform: capitalize;
  padding-top: 5%;
}

.data {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
}
.property {
  width: 90%;
  max-width: 400px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
}
h3 {
  width: 90%;
  max-width: 400px;
  border-bottom: 1px solid #ccc;
}

.types,
.abilities {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  max-width: 400px;
}
.type {
  margin: 2% 0 10px 0;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  span {
    color: #ffffff !important;
    padding: 10px 14px;
    border-radius: 29px;
  }
}
.ability {
  color: rgb(10, 119, 10);
  margin: 2% 10px 10px 0;
  border-radius: 20px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  word-wrap: none;
  word-break: keep-all;
  background-color: #ffffff;
  border: 3px solid;
}

.favoris,
.close {
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #490eed;
 text-decoration: none;
  color: #efefef;
  padding: 9px;
  margin-left: 15px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  cursor: pointer;
}


i {
  font-size: 2rem;
  color: #817878;
}
.destaq {
  font-weight: bold;
}
.inactive {
  display: none;
}
</style>