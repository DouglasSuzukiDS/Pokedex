import { createContext } from "react"

export type PokemonsExternalList = {
   pokemonsExternal: any[]
   setPokemonsExternal: (newStatte: any[]) => void
}

const initialValue = {
   pokemonsExternal: [],
   setPokemonsExternal: () => {''}
}

export const PokemonsExternalContext = createContext<PokemonsExternalList>(initialValue)