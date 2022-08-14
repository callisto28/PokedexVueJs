import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { pokeapi } from "../api/pokeApi";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allPokemon: [],
        // pokemon: {},
    },
    getters: {
        allPokemon: state => {state.allPokemon},
        // pokemon: state => id => state.allPokemon.find(pokemon => pokemon.id === id),
    },
    mutations: {
        setAllPokemon(state, allPokemon) {
            state.allPokemon = allPokemon
        },
        // setPokemon(state, data) {
        //     state.pokemon = data
        // }

    },
    
    actions: {
         getAllPokemon({ commit }) {
            axios.get(`${pokeapi}?limit=200&offset=20`)
                .then(response => response.data)
                .then(allPokemon => {
                    console.log(allPokemon);
                commit('setAllPokemon', allPokemon)
                })
                .catch(error => {
                    console.log(error)
                })
            
        },
        // async getPokemon({ commit }, id) {
        //     try {
        //         const { data } = await axios.get(pokeapi.pokemon + id)
        //         commit('setPokemon', data)
        //         console.log(data)
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }
    },
   
    
})


        
