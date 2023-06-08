import { ComponentProps, useEffect, useState } from 'react'
import './CardContainer.css'
import { PokemonClient } from 'pokenode-ts'

const PokemonAPI = new PokemonClient()

// https://blog.curso-r.com/posts/2021-11-29-api-pokemon/#:~:text=O%20primeiro%20passo%20para%20acessar%20qualquer%20API%20é%20procurar%20uma%20documentação.&text=Isso%20significa%20que%20devemos%20fazer,(que%20chamamos%20de%20endpoint).
// https://github.com/PokeAPI/pokeapi/issues/346
// https://github.com/PokeAPI/sprites
// https://github.com/PokeAPI/pokedex-promise-v2
// https://pokenode-ts.vercel.app
// https://pokemon.fandom.com/wiki/Poison_type
// https://horadecodar.com.br/como-salvar-a-saida-do-console-log-em-arquivo/

import axios from 'axios'

import { Info } from '../Info/Info'
import { ComponentsTypes } from '../../types/ComponentsType'


export const CardContainer = ({ className }: ComponentsTypes ) => {
   const [pokemonsAPI, setPokemonsAPI]: any[] = useState([])
   const [arrayPokemons, setArrayPokemons]: any[] = useState([])

   const pokedex = new PokemonClient()
   
   useEffect(() => {
      getPokemonsAPI() // API Local
      // getPokemonsList()
      // downloadPokemonSVG(pichuAPI)
      // downloadPokemonInfos('pichu')
      findPokemonById(639)
   }, [])

  const getPokemonsAPI = async() => {
    await axios.get('../src/API/Pokemons.json')
      .then(res => {
        //console.log(res.data.pokemon)
        setPokemonsAPI(res.data.pokemon)
      })
      .catch(err => console.log(err))

  }

   const getPokemonsList = async() => { 
      await pokedex.listPokemons()
      .then(res => {
         setArrayPokemons(res.results)
         console.log(res)
        pokedex.listCharacteristics()
         .then(res => console.log(res))
         .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
   }

   const downloadPokemonSVG = async(obj: any) => {

      const svg = obj.sprites.other.dream_world.front_default
      if(svg !== null) {
         // console.log(svg)
         
         await axios.get(svg)
            .then(res => {
               console.log(res)
               const blob = new Blob([res.data], {type: 'image/svg+xml'});
               const link = document.createElement('a');
               link.href = window.URL.createObjectURL(blob);
               link.download =`${obj.id}.svg`;
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
   }

   const downloadPokemonInfos = async(name: string) => {
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
   }

   const findPokemonById  = async(id: number) => {
      await PokemonAPI.getPokemonById(id)
         .then(res => {
            console.log(res)
         })
         .catch(e => console.log(e))
   }

   return (
      <>
         <section className="cardContainer font-bold flex flex-wrap text-pokemon overflow-y-auto">
      
            {
            //console.log(pokemonsAPI)
            pokemonsAPI.map((pkm: any) => (
               <img key={ pkm.id } src={ pkm.image } alt={ pkm.name }  />
            ))
            }

            
         </section>
      </>
   )
}