import { useEffect, useState } from 'react'
import './CardContainer.css'
import { MainClient, PokemonClient } from 'pokenode-ts'
import fs from 'fs'

//console.log(P)

// https://blog.curso-r.com/posts/2021-11-29-api-pokemon/#:~:text=O%20primeiro%20passo%20para%20acessar%20qualquer%20API%20é%20procurar%20uma%20documentação.&text=Isso%20significa%20que%20devemos%20fazer,(que%20chamamos%20de%20endpoint).
// https://github.com/PokeAPI/pokeapi/issues/346
// https://github.com/PokeAPI/sprites
// https://github.com/PokeAPI/pokedex-promise-v2

import axios from 'axios'

export const CardContainer = () => {
   const [arrayPokemons, setArrayPokemons]: any[] = useState([])
   const [arrayPokemonsSVG, setArrayPokemonsSVG]: any[] = useState([])
   const pokedex = new PokemonClient()
   
   useEffect(() => {
      getPokemonsList()
   }, [])

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

   const pokemonByName = async(name: string) => {
      await pokedex.getPokemonByName(`${name}`)
         .then(res => console.log(res))
         // .then(res => res.json())
         .then(async(res) => {
            await fs.writeFile('../../datas/aa.json', res, (err) => {
               if(err) {
                  console.log('err')
               } else {
                  console.log('ok')
               }
            })
         })
         .catch(e => console.log(e))
   }


   // res.data.sprites.other.dream_world.front_default

   {/* { setArrayPokemonsSVG.map((svg: any) => {
                           <img src={svg} alt={el.name} />
                        }) } */}
                        // { 
                        //    await axios.get(`${ el.url }`)
                        //       .then(res => setArrayPokemonsSVG(res.data.sprites.other.dream_world.front_default))
                        //       .catch(e => console.log(e))
                        // }

   return (
      <>
         <section className="cardContainer font-bold flex flex-wrap text-pokemon overflow-y-auto">
            <ul>    
               { arrayPokemons.map((el:any) => 
                 <li key={ el.name }>
                  <>
                     <p>{ el.name }</p>
                     <p>{ el.url }</p>
                     <br />
                  </>
                  </li>
               ) }
            </ul>
         </section>
      </>
   )
}