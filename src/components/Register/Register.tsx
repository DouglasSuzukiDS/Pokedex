import { useState, useEffect } from 'react'
import './Register.css'
import { PokemonsExternalContext } from '../../context/PokemonsExternalAPI/PokemonsExtenalContext'
import { PokemonsLocalContext } from '../../context/PokemonsLocalAPI/PokemonsLocalContext'
import axios from 'axios'

import Pokeball from '../../assets/SVGs/Pokeball - Parts.svg'

export const Register = () => {
   const [gymLeader, setGymLeader] = useState(false)
   const typesPokemons = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']

   const createOptionsTypesPokemon = () => {
      typesPokemons.map((typePokemon, key) => {
         <option key={ key } value={ typePokemon }>
            <img src={`../../assets/TypesPokemons/${typePokemon}.svg`} alt={typePokemon} />
         </option>
      })
   }

   const handleChooseTypeUser = () => {
      setGymLeader(!gymLeader)
      console.log(gymLeader)
   }

   return(
      <main className="flex justify-center items-center">
         {/* <form className="formRegister form-RBW01Gradient bg-Blue01GradientOP p-4"> */}
         <form  className="formRegister bg-Blue01GradientOP p-4">
            <p className='text-pokemon text-center'>Register</p>

            <div className="groupInput">
               <input type="text" placeholder='Name' className='text-pokemon' />
               <input type="text" placeholder='Login' className='text-pokemon' />
            </div>

            <div className="groupInput">
               <input type="password" placeholder='Password' className='text-pokemon' />
               <input type="password" placeholder='Confirm Password' className='text-pokemon' />
            </div>

            <div className="groupInput">
               <select name="TypePokemon" id="TypePokemon" className='text-pokemon' onChange={ () => '' }>
                  <option value="Default">Favorite Type</option>
                  {
                     typesPokemons.map((typesPokemon, key) => (
                        <option value={ typesPokemon } key={ typesPokemon } className='text-pokemon'>
                           { typesPokemon }
                        </option>
                     ))
                  }
               </select>
               
               <div className="borderInsidePokeballGradient flex justify-center items-center" id='imgTypePokemon'>
                  <img src={ Pokeball } alt="Pokeball"  />
               </div>
            </div>

            <div className="groupInput" id='isGymLeaderDiv' onClick={ handleChooseTypeUser }>
               { !gymLeader ?
                  <div className='flex justify-between items-center w-full gap-4'> 

                     <div className='flex justify-between items-center w-1/2 border'>

                        <span className='text-pokemon'>Trainer</span>

                        <span className="flex justify-between items-center circleYellowPokemon">
                           <img src={ Pokeball } alt="Trainer - Image Pokeball" className='' />
                        </span>

                     </div>

                     <div className='flex justify-between items-center w-1/2 border'>

                        <span className='circle'></span>

                        <span>Gym Leader</span>

                     </div>
                  </div> :
                  <div className='flex justify-between items-center w-full gap-4'> 

                  <div className='flex justify-between items-center w-1/2 border'>

                     <span>Trainer</span>

                     <span className="flex justify-between items-center circle"></span>

                  </div>

                  <div className='flex justify-between items-center w-1/2 border'>

                     <span className='circleYellowPokemon'>
                        <img src={ Pokeball } alt="Gym Leader - Image Pokeball" className='' />
                     </span>

                     <span className='text-pokemon'>Gym Leader</span>

                  </div>
               </div>
               }
            </div>
         </form>
      </main>
   )
}