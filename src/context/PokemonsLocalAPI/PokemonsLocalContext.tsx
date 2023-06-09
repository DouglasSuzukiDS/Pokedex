import { PokemonType } from '../../types/PokemonsType'
import { createContext } from 'react'

export type PokemonsLocalList = {
   pokemonsLocal: PokemonType[],
   setPokemonsLocal: (newState: PokemonType[]) => void
}

const initialValue = {
   pokemonsLocal: [],
   setPokemonsLocal: () => {''}
}

export const PokemonsLocalContext = createContext<PokemonsLocalList>(initialValue)