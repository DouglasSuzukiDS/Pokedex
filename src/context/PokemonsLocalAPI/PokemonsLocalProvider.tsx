import { useState, useEffect } from 'react'
import { PokemonType } from "../../types/PokemonsType"
import { PokemonsLocalContext } from "./PokemonsLocalContext"
import axios from 'axios'

export const PokemonsLocalProvider = ({ children }: { children: JSX.Element }) => {
   const [pokemonsLocal, setPokemonsLocal] = useState<PokemonType[]>([])

   useEffect(() => {
      getPokemonsAPI()
   }, [])

   const getPokemonsAPI = async () => {
      await axios.get('../../src/API/Pokemons.json')
         .then(res => {
            console.log(res.data.pokemon)
            // setPokemonsLocal(res.data.pokemon)
            setPokemonsLocal(res.data)
         })
         .catch(err => console.log(`Err: ${err}`))
   }
   
   return(
      <PokemonsLocalContext.Provider value={ { pokemonsLocal, setPokemonsLocal } }>
         { children }
      </PokemonsLocalContext.Provider>
   )
}