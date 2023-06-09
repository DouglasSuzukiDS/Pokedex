import { PokemonsExternalContext } from "./PokemonsExtenalContext"
import { useState } from 'react'

export const PokemonsExtermalProvider = ({ children }: { children: JSX.Element }) => {
   const [pokemonsExternal, setPokemonsExternal] = useState<any[]>([])

   return(
      <PokemonsExternalContext.Provider value={ { pokemonsExternal, setPokemonsExternal } }>
         { children }
      </PokemonsExternalContext.Provider>
   )
}