import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { pokeapi } from "../api/pokeApi";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allPokemon: [],  
    },     
    getters: {
        allPokemon: state => {state.allPokemon},        
    },
    mutations: {
        setAllPokemon(state, allPokemon) {
            state.allPokemon = allPokemon
        },        
    },    
    actions: {
         getAllPokemon({ commit }) {
            axios.get(`${pokeapi}?limit=200&offset=20`)
                .then(response => response.data)
                .then(allPokemon => {
                   
                commit('setAllPokemon', allPokemon)
                })
                .catch(error => {
                    console.log(error)
                })            
            }
    }
})
   
    



        
