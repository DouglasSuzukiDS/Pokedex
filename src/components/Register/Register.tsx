import { useState, useEffect, FormEvent } from 'react'
import './Register.css'

import Pokeball from '../../assets/SVGs/Pokeball - Parts.svg'
import Normal from '../../assets/TypesPokemons/Normal.svg'
import Fire from '../../assets/TypesPokemons/Fire.svg'
import { ComponentsTypes } from '../../types/ComponentsType'

export const Register = ({ close }: ComponentsTypes) => {
   const [gymLeader, setGymLeader] = useState(false)
   const typesPokemons = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']

   const name = document.querySelector('#name') as HTMLInputElement
   const login = document.querySelector('#login') as HTMLInputElement

   const password = document.querySelector('#password') as HTMLInputElement
   const confirmPassword = document.querySelector('#confirmPassword') as HTMLInputElement

   const selectTypePokemon = document.querySelector('#TypePokemon') as HTMLSelectElement
   const imgTypePokemonArea = document.querySelector('#imgTypePokemonArea') as HTMLDivElement
   const imgTypePokemon = document.querySelector('.imgTypePokemon img') as HTMLImageElement

   // useEffect(() => {
   //    handleShowTypePokemonSVG()
   // }, [])

   const createOptionsTypesPokemon = () => {
      typesPokemons.map((typePokemon, key) => {
         <option key={ key } value={ typePokemon }>
            <img src={`../../assets/TypesPokemons/${typePokemon}.svg`} alt={typePokemon} />
         </option>
      })
   }

   const handleShowTypePokemonSVG = () => {

      selectTypePokemon?.addEventListener('change', () => {
         imgTypePokemon.src = `/src/assets/TypesPokemons/${selectTypePokemon.value}.svg`
         imgTypePokemon.alt = `${selectTypePokemon.value}`
      })

      if(selectTypePokemon.value !== 'Default') {
         imgTypePokemonArea.classList.remove('borderInsidePokeballGradient') 
         imgTypePokemonArea.classList.add('form-RBW01Gradient')
      } else {
         imgTypePokemon.src = `/src/assets/SVGs/Pokeball - Parts.svg`
         imgTypePokemon.alt = `${selectTypePokemon.value}`

         imgTypePokemonArea.classList.remove('form-RBW01Gradient')
         imgTypePokemonArea.classList.add('borderInsidePokeballGradient') 
      }
   }

   const handleChooseTypeUser = () => {
      setGymLeader(!gymLeader)
      console.log(gymLeader)
   }

   const handleClear = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      name.value = ''
      login.value = ''

      password.value = ''
      confirmPassword.value = ''

      selectTypePokemon.value = 'Default'
      imgTypePokemon.src = `/src/assets/SVGs/Pokeball - Parts.svg`
      imgTypePokemon.alt = `${selectTypePokemon.value}`

      setGymLeader(false)
   }

   const handleRegister = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

   }

   const handleLoginModal = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      
      if(close) {
         close()
      }
   }

   return(
      <main className="flex justify-center items-center">
         {/* <form className="formRegister form-RBW01Gradient bg-Blue01GradientOP p-4"> */}

         <span className="border-RBW01Gradient">
            <form  className="formRegister bg-Blue01GradientOP p-4">
               <p className='text-pokemon text-center  border-gradient'>Register</p>

               <div className="groupInput"> {/* Name & Login */}
                  <input type="text" placeholder='Name' className='text-pokemon' id='name' />
                  <input type="text" placeholder='Login' className='text-pokemon' id='login' />
               </div>

               <div className="groupInput"> {/* Password */}
                  <input type="password" placeholder='Password' className='text-pokemon' id='password'/>
                  <input type="password" placeholder='Confirm Password' className='text-pokemon' id='confirmPassword' />
               </div>

               <div className="groupInput" id='favorite' onClick={ handleShowTypePokemonSVG }> {/* Favorite Type */}
                  <select name="TypePokemon" id="TypePokemon" className='text-pokemon'>
                     <option value="Default" className='text-pokemon'>Favorite Type</option>
                     {
                        typesPokemons.map((typesPokemon, key) => (
                           <option value={ typesPokemon } key={ typesPokemon } className='text-pokemon'>
                              { typesPokemon }
                           </option>
                        ))
                     }
                  </select>
                  
                  <div className="borderInsidePokeballGradient flex justify-center items-center imgTypePokemon" id='imgTypePokemonArea'>
                     <img src={ Pokeball } alt="Pokeball" />
                  </div>
               </div>

               <div className="groupInput" id='isGymLeaderDiv' onClick={ handleChooseTypeUser }> {/* Trainer or Gym Leader */}
                  { !gymLeader ?
                     <div className='flex justify-between items-center w-full gap-4 cursor-pointer'> 

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='text-pokemon'>Trainer</span>

                           <span className="flex justify-between items-center circleYellowPokemon">
                              <img src={ Pokeball } alt="Trainer - Image Pokeball" className='' />
                           </span>

                        </div>

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='circle'></span>

                           <span>Gym Leader</span>

                        </div>
                     </div> :
                     <div className='flex justify-between items-center w-full gap-4 cursor-pointer'> 

                     <div className='flex justify-between items-center w-1/2'>

                        <span>Trainer</span>

                        <span className="flex justify-between items-center circle"></span>

                     </div>

                     <div className='flex justify-between items-center w-1/2'>

                        <span className='circleYellowPokemon'>
                           <img src={ Pokeball } alt="Gym Leader - Image Pokeball" className='' />
                        </span>

                        <span className='text-pokemon'>Gym Leader</span>

                     </div>
                  </div>
                  }
               </div>

               <div className="groupInput gap-4">
                  <button 
                     className="btn btn-yellow flex justify-center items-center w-1/2"
                     onClick={ handleClear }>
                     Clear
                     <img src={ Normal } alt="Normal" className='ml-4' />
                  </button>

                  <button 
                     className="btn btn-blue flex justify-center items-center w-1/2"
                     onClick={ handleRegister }>
                     Register
                     <img src={ Pokeball } alt="Pokeball" className='ml-4' />
                  </button>
               </div>

               <div className="groupInput">
                  <button 
                     className="btn btn-aqua flex justify-center items-center w-full"
                     onClick={ handleLoginModal }>
                     Login
                     <img src={ Fire } alt="Fire" className='ml-4' />
                  </button>
               </div>
            </form>
         </span>
      </main>
   )
}