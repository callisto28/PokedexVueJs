<template>
  <div class="d-flex flex-column justify-center align-center mt-5">
    <h1 primary-title class="d-flex justify-center">
 Mes Favoris
    </h1>
   
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
         v-for="favoris in favorisPokemon" :key="favoris.id"
          @click="setPokemonId(pokemon.id)"
        >
           <img :src="imageUrl + favoris.id + '.png'" width="180" height="180" alt="pokemon.name" class="img" />
          <h2 class="name">{{ favoris.name }}</h2>
         <div class="property">
          <div class="left destaq">Taille</div>
          <div class="right">{{ favoris.height / 10 }} m</div>
        </div>
          <div class="property">
          <div class="left destaq">Poids</div>
          <div class="right">{{ favoris.weight / 10 }} kg</div>
        </div>
           <div class="property">
          <div class="left destaq">Base Experience</div>
          <div class="right">{{ favoris.Experience}} XP</div>
        </div>
          
          
        </v-card>

      
      </div>
     
      <router-link class="nes-btn" to="/"> Retour à l'accueil</router-link>    
    
  </div>
</template>

<script lang="js">

// import getDataId from "../service/data"
export default { 
  name:"detailsView",  
  mounted() {
    if (localStorage.getItem("favorisPokemon") !== null) {
      this.favorisPokemon = JSON.parse(localStorage.getItem("favorisPokemon"));
      console.log(this.favorisPokemon, 'favoris');
    }
   
      
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

<style lang="scss" scoped>
h2 {
  text-transform: capitalize;
  padding-top: 5%;
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

@media screen and (min-width: 350px) and (max-width: 680px) {
 .name{
    font-size: 1.1rem;
 }
 .property{
    font-size: 0.9rem;
 }
 img{
    width: 100px;
    height: 100px;
 }
}
</style>