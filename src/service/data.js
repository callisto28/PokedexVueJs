import axios from "axios";
import { pokeapi } from "../api/pokeApi";

class getData {
  getPokemon() {
    return new Promise((resolve) => {
      axios.get(`${pokeapi}`).then((response) => {
        resolve(response.data);
      });
    });
  }
  getPokemonId(id) {
    return new Promise((resolve) => {
      axios.get(`${pokeapi}${id}`).then((response) => {
        resolve(response.data);
        console.log(response.data);
      });
    });
  }
}
export default new getData();
