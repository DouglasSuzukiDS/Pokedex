import { useContext } from "react"
import { PokemonClient } from 'pokenode-ts'
import { PokemonsExternalContext } from '../context/PokemonsExternalAPI/PokemonsExtenalContext'

const pokedex = new PokemonClient()


export const serviceExternalAPI = {

   findPokemonById: async (id: number) => {
      await pokedex.getPokemonById(id)
         .then(res => {
            console.log(res)
         })
         .catch(e => console.log(e))
   },

   getPokemonsList: async () => {
      await pokedex.listPokemons()
         .then(res => {
            // setPokemonsExternal(res.results)
            console.log(res)

            pokedex.listCharacteristics()
               .then(res => console.log(res))
               .catch(e => console.log(e))
         })
         .catch(e => console.log(e))
   },

   downloadPokemonInfos: async(name: string) => {
      await pokedex.getPokemonByName(`${name}`)
         // .then(res => console.log(res))
         .then(res => {
            const data = {
               name: res.name,
               id: res.id,
               type: res.types,
               height: res.height,
               weight: res.weight,
               base_experience: res.base_experience,
               sprites: res.sprites
            }
   
            const blob = new Blob([JSON.stringify(data)], {type: "application/json"});
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download =`${name}.json`;
            link.click();
         })
   
         .catch(e => console.log(e))
   }, 
   
}