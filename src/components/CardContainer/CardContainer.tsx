import { useEffect, useState, useContext } from 'react'
import './CardContainer.css'

import { PokemonClient } from 'pokenode-ts'
import axios from 'axios'

import { PokemonType } from '../../types/PokemonsType'
import { ComponentsTypes } from '../../types/ComponentsType'
import { serviceLocalAPI } from '../../service/Local.service'
import { serviceExternalAPI } from '../../service/External.service'

import RedPart from '../../assets/SVGs/Red - Part.svg'
import WhitePart from '../../assets/SVGs/White - Part.svg'

// https://blog.curso-r.com/posts/2021-11-29-api-pokemon/#:~:text=O%20primeiro%20passo%20para%20acessar%20qualquer%20API%20é%20procurar%20uma%20documentação.&text=Isso%20significa%20que%20devemos%20fazer,(que%20chamamos%20de%20endpoint).
// https://github.com/PokeAPI/pokeapi/issues/346
// https://github.com/PokeAPI/sprites
// https://github.com/PokeAPI/pokedex-promise-v2
// https://pokenode-ts.vercel.app
// https://pokemon.fandom.com/wiki/Poison_type
// https://horadecodar.com.br/como-salvar-a-saida-do-console-log-em-arquivo/

const pokedex = new PokemonClient()

export const CardContainer = ({ className }: ComponentsTypes ) => {
   const [pokemonsLocal, setPokemonsLocal] = useState<PokemonType[]>([])
   const [showInputSearch, setShowInputSearch] = useState(false)

   const inputSearch = document.querySelector('.search') as HTMLInputElement
   const redPartPokeball = document.querySelector('#redPartPokeball') as HTMLElement
   const whitePartPokeball = document.querySelector('#whitePartPokeball') as HTMLElement

   
   useEffect(() => {
      getPokemonsAPI()
      // getPokemonsList()
      // downloadPokemonSVG(pichuAPI)
      // downloadPokemonInfos('pichu')
      // findPokemonById(773)
      searchArea()
      hoverEffect()
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

   const hoverEffect = () => {
      const cardsBorder = [...document.querySelectorAll('.card')]
      //console.log(cardsBorder)
      cardsBorder.map(card => {
         // console.log('enter')
         card.addEventListener('mouseenter', () => {
            card.classList.add('card-RBW01Gradient')
            card.classList.remove('card-Blue01Gradient')
            card.classList.add('bg-Blue01GradientOP')
            
            const cardImgBorder = card.querySelector('.card-photo')
            cardImgBorder?.classList.remove('card-RBW01Gradient')
            cardImgBorder?.classList.add('card-Blue01Gradient')
         })

         card.addEventListener('mouseleave', () => {
            card.classList.remove('card-RBW01Gradient')
            card.classList.add('card-Blue01Gradient')
            card.classList.remove('bg-Blue01GradientOP')

            const cardImgBorder = card.querySelector('.card-photo')
            cardImgBorder?.classList.remove('card-Blue01Gradient')
            cardImgBorder?.classList.add('card-RBW01Gradient')
         })
      })
   }

   const searchArea = () => {
      pokeballMouseEnter()
      pokeballMouseLeave()
      
      setTimeout(() => {
         // setShowInputSearch(true)
      }, 1500)
   }

   const pokeballMouseEnter = () => {
      inputSearch?.addEventListener('mouseenter', () => {
         redPartPokeball.style.rotate = '-90deg';
         whitePartPokeball.style.rotate = '-90deg';
         console.log(whitePartPokeball)

         //setShowInputSearch(true)
      })
   }

   const pokeballMouseLeave = () => {
      inputSearch?.addEventListener('mouseleave', () => {
         redPartPokeball.style.rotate = '0deg';
         whitePartPokeball.style.rotate = '0deg';
         setShowInputSearch(false)

      // inputSearch.style.flexDirection = 'column'

      })
   }


   return (
      <>
         <div className='search flex flex-col my-6 border hover:cursor-pointer'>
            <img src={ RedPart } alt="Parte de Cima da Pokeball" id='redPartPokeball' />
            
               { showInputSearch &&  <input type="text" placeholder='Make you search' id='inputSearch' /> }
            
            <img src={ WhitePart } alt="Parte de Baixo da Pokeball" id='whitePartPokeball' />
         </div>

         <section className="cardContainer font-bold flex justify-center items-center flex-wrap overflow-y-auto p-2 gap-2">     
         {
            pokemonsLocal.length !== 0 &&

            pokemonsLocal.map(p => (
               <div key={ p.name } className="card card-Blue01Gradient hover:card-RBW01Gradient flex items-center flex-col rounded-lg p-2" onMouseEnter={ hoverEffect }>

                  <div className="card-photo flex justify-center items-center card-RBW01Gradient p-2">
                     <img src={ p.image } alt={ p.name } />
                  </div>

                  <div className="card-body flex justify-between flex-col w-full mt-2 gap-y-2">

                     <div className="card-name flex justify-between w-full">
                        <p className='text-pokemon flex items-center'>
                           { (p.name).replace(p.name[0], p.name[0].toLocaleUpperCase()) }
                        </p>

                        <p className='text01 flex items-center'>#{p.id}</p>
                     </div>

                     <div className="card-infos">
                        <div className="card-type flex justify-between">
                           <p className='text01'>Type:</p>

                           <span className='flex'>
                              {  
                                 p.type.map((t: any) => (

                                    <img key={ t.type.name }
                                       className='cart-pokemon-type ml-2'
                                       src={ t.type.svg } 
                                       alt={ t.type.name }
                                    />
                                 ))
                              }
                           </span>
                        </div>

                        <div className="card-height flex justify-between">
                              <p className='text02'>Height:</p>
                              <p className='text01'>{p.height}</p>

                        </div>

                        <div className="card-weight flex justify-between">
                              <p className='text02'>Weight:</p>
                              <p className='text01'>{p.weight}</p>
                        </div>

                     </div>
                  </div>

               </div>
            ))
         }
         </section>
      </>
   )
}