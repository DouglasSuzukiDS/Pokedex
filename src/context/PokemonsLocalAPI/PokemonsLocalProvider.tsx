import { useState } from 'react'
import { PokemonType } from "../../types/PokemonsType"
import { PokemonsLocalContext } from "./PokemonsLocalContext"

export const PokemonsLocalProvider = ({ children }: { children: JSX.Element }) => {
   const [pokemonsLocal, setPokemonsLocal] = useState<PokemonType[]>([])
   
   return(
      <PokemonsLocalContext.Provider value={ { pokemonsLocal, setPokemonsLocal } }>
         { children }
      </PokemonsLocalContext.Provider>
   )
}