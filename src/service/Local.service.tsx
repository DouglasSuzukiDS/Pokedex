import axios from "axios"
import { useContext } from "react"
import { PokemonsLocalContext } from "../context/PokemonsLocalAPI/PokemonsLocalContext"
import { PokemonsExternalContext } from "../context/PokemonsExternalAPI/PokemonsExtenalContext"

export const serviceLocalAPI = {


   getPokemonsAPI: async () => {
      await axios.get('../src/API/Pokemons.json')
         .then(res => {
            console.log(res.data.pokemon)
            // setPokemonsLocal(res.data.pokemon)
         })
         .catch(err => console.log(`Err: ${err}`))
   },

   downloadPokemonSVG: async (obj: any) => {

      const svg = obj.sprites.other.dream_world.front_default

      if (svg !== null) {
         // console.log(svg)

         await axios.get(svg)
            .then(res => {
               console.log(res)
               const blob = new Blob([res.data], { type: 'image/svg+xml' });
               const link = document.createElement('a');
               link.href = window.URL.createObjectURL(blob);
               link.download = `${obj.id}.svg`;
               link.click();
               // console.log(res)
            })
            .catch(e => console.log(e))
      }
      /*else {
         const officialArtwork = obj.sprites.other.home.front_default
         console.log(officialArtwork)
   
         await axios.get(officialArtwork)
            .then(res => {
               console.log(res)
               const blob = new Blob([res], {type: 'image/png'});
               const link = document.createElement('a');
               link.href = window.URL.createObjectURL(blob);
               link.download =`${obj.id}.svg`;
               link.click();
               console.log(res)
            })
            .catch(e => console.log(e))
      }*/
   },

}