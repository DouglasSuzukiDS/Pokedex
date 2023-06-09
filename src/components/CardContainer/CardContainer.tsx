import { useEffect, useState, useContext } from 'react'
import './CardContainer.css'

import { PokemonClient } from 'pokenode-ts'
import axios from 'axios'

import { PokemonType } from '../../types/PokemonsType'
import { ComponentsTypes } from '../../types/ComponentsType'
import { serviceLocalAPI } from '../../service/Local.service'
import { serviceExternalAPI } from '../../service/External.service'

// https://blog.curso-r.com/posts/2021-11-29-api-pokemon/#:~:text=O%20primeiro%20passo%20para%20acessar%20qualquer%20API%20é%20procurar%20uma%20documentação.&text=Isso%20significa%20que%20devemos%20fazer,(que%20chamamos%20de%20endpoint).
// https://github.com/PokeAPI/pokeapi/issues/346
// https://github.com/PokeAPI/sprites
// https://github.com/PokeAPI/pokedex-promise-v2
// https://pokenode-ts.vercel.app
// https://pokemon.fandom.com/wiki/Poison_type
// https://horadecodar.com.br/como-salvar-a-saida-do-console-log-em-arquivo/

import pichuAPI from '../../datas/pichu.json'
import machumpAPI from '../../datas/machamp.json'

import fs from 'fs'

const pokedex = new PokemonClient()

export const CardContainer = ({ className }: ComponentsTypes ) => {
   const [pokemonsLocal, setPokemonsLocal] = useState<PokemonType[]>([])
   
   useEffect(() => {
      getPokemonsAPI()
      // getPokemonsList()
      // downloadPokemonSVG(pichuAPI)
      // downloadPokemonInfos('pichu')
      // findPokemonById(773)
   }, [])

   // External API
   const findPokemonById = async (id: number) => {
      await pokedex.getPokemonById(id)
         .then(res => {
            console.log(res)
         })
         .catch(e => console.log(e))
   }

   const getPokemonsList = async () => {
      await pokedex.listPokemons()
         .then(res => {
            // setPokemonsExternal(res.results)
            console.log(res)

            pokedex.listCharacteristics()
               .then(res => console.log(res))
               .catch(e => console.log(e))
         })
         .catch(e => console.log(e))
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

   // Local API
   const getPokemonsAPI = async () => {
      await axios.get('../src/API/Pokemons.json')
         .then(res => {
            // console.log(res.data.pokemon)
            setPokemonsLocal(res.data.pokemon)
         })
         .catch(err => console.log(`Err: ${err}`))
   }

   const downloadPokemonSVG = async (obj: any) => {

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
   }

   console.log(pokemonsLocal)
   
   return (
      
      <>
         <section className="cardContainer font-bold flex flex-wrap overflow-y-auto">     

            <div className="card card-Blue01Gradient flex items-center flex-col rounded-lg p-2">
               <div className="card-photo flex justify-center items-center card-RBW01Gradient">
                  <img src={ pokemonsLocal[29].image } alt={ pokemonsLocal[29].name } />
               </div>

               <div className="card-body flex justify-between border w-full mt-2">

                  <div className="card-name flex justify-between w-full">
                     <p className='text-pokemon'>
                        { (pokemonsLocal[29].name).replace(pokemonsLocal[29].name[0], pokemonsLocal[29].name[0].toLocaleUpperCase()) }
                     </p>

                     <p className='text-pokemon'>#{pokemonsLocal[29].id}</p>
                  </div>
               </div>

            </div>

            
         </section>
      </>
   )
}