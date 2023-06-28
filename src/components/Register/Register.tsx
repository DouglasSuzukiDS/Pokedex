import { useState, useEffect, FormEvent } from 'react'
import './Register.css'

import Pokeball from '../../assets/SVGs/Pokeball - Parts.svg'
import Normal from '../../assets/TypesPokemons/Normal.svg'
import Fire from '../../assets/TypesPokemons/Fire.svg'
import { ComponentsTypes } from '../../types/ComponentsType'
import axios from 'axios'

export const Register = ({ close }: ComponentsTypes) => {
   const [name, setName] = useState('')
   const [login, setLogin] = useState('')

   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   const [favoriteType, setFavoriteType] = useState('Default')

   const [gymLeader, setGymLeader] = useState(false)

   const typesPokemons = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']

   const isDefault = favoriteType === 'Default'

   const svgTypePokemonSRC = `/src/assets/TypesPokemons/${favoriteType}.svg`

   const svgTypePokemon = isDefault ? Pokeball : svgTypePokemonSRC

   const imageClasses = [
      isDefault ? "borderInsidePokeballGradient" : "border-RBW01Gradient",
      "flex",
      "justify-center",
      "items-center",
      "imgTypePokemon",
   ].join(" ")

   const [API, setAPI] = useState(`http://localhost:1880`)
   const [find, setFind] = useState('')

   const handleChooseTypeUser = () => {
      setGymLeader(!gymLeader)
      console.log(gymLeader)
   }

   const handleClear = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      setName('')
      setLogin('')

      setPassword('')
      setConfirmPassword('')

      setFavoriteType('Default')

      setGymLeader(false)
   }

   const handleRegister = async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (name !== '' && password !== '' && confirmPassword !== '' && login !== '') {

         if (password === confirmPassword) {

            if (favoriteType !== 'Default') {

               findUser()

               if (find.length === 0) {
                  await axios.post(`${API}/register`, {
                     userName: name,
                     userLogin: login,
                     userPassword: password,
                     userPokemonFavoriteType: favoriteType,
                     userCategory: gymLeader ? 'Gym Leader' : 'Trainer'
                  })
                  .then(res => {
                     if(res.status === 200) {
                        console.log(res.data)
                        alert('Usuário cadastrado com sucesso')

                        handleClear(e)

                        close && close()
                     }
                  })
                  .catch(err => console.log(err.message))
               } else {
                  alert(`The login not available. Please choose other login to register.`)
               }
            } else {
               alert(`Please, choose one type of Pokemons. Choose the type you like best. \n\nIf you don't like any type, you can choose the 'Normal' type Pokemons.`)
            }

         } else {
            alert(`The 'field password' don't match with 'field confirmPassword'. Please insert the same your secret 'password' in these 2 fields.`)
         }
      } else {
         alert('Please, fill all fields.')
      }

   }

   const findUser = async () => {
      await axios.get(`${API}/findUser/${login}`)
         .then(res => setFind(res.data))
         .catch(err => console.log(err.message))
   }

   const handleLoginModal = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (close) {
         close()
      }
   }

   return (
      <main className="flex justify-center items-center">
         {/* <form className="formRegister form-RBW01Gradient bg-Blue01GradientOP p-4"> */}

         <span className="border-RBW01Gradient">
            <form className="formRegister bg-Blue01GradientOP p-4">
               <p className='text-pokemon text-center  border-gradient'>Register</p>

               <div className="groupInput"> {/* Name & Login */}
                  <input type="text"
                     id='name'
                     placeholder='Name'
                     className='text-pokemon'
                     value={name}
                     onChange={e => setName(e.target.value)} />

                  <input
                     type="text"
                     id='login'
                     placeholder='Login'
                     className='text-pokemon'
                     value={login}
                     onChange={e => setLogin(e.target.value)} />
               </div>

               <div className="groupInput"> {/* Password */}
                  <input
                     type="password"
                     id='password'
                     placeholder='Password'
                     className='text-pokemon'
                     value={password}
                     onChange={e => setPassword(e.target.value)} />

                  <input
                     type="password"
                     id='confirmPassword'
                     placeholder='Confirm Password'
                     className='text-pokemon'
                     value={confirmPassword}
                     onChange={e => setConfirmPassword(e.target.value)} />
               </div>

               <div className="groupInput" id='favorite'> {/* Favorite Type */}
                  <select
                     name="TypePokemon"
                     id="TypePokemon"
                     className='text-pokemon'
                     onChange={e => setFavoriteType(e.target.value)}>

                     <option
                        // selected={ favoriteType === 'Default' }
                        value='Default'
                        className='text-pokemon'>
                        Favorite Type
                     </option>
                     {
                        typesPokemons.map((typesPokemon) => (
                           <option value={typesPokemon} key={typesPokemon} className='text-pokemon'>
                              {typesPokemon}
                           </option>
                        ))
                     }
                  </select>

                  <div className={imageClasses} id='imgTypePokemonArea'>
                     <img src={svgTypePokemon} alt={favoriteType} />
                  </div>
               </div>

               <div className="groupInput" id='isGymLeaderDiv' onClick={ handleChooseTypeUser }> {/* Trainer or Gym Leader */}
                  {!gymLeader ?
                     <div className='flex justify-between items-center w-full gap-4 cursor-pointer'>

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='text-pokemon'>Trainer</span>

                           <span className="flex justify-between items-center circleYellowPokemon">
                              <img src={Pokeball} alt="Trainer - Image Pokeball" className='' />
                           </span>

                        </div>

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='circle'></span>

                           <span className='text-pokemon-white'>Gym Leader</span>

                        </div>
                     </div> :
                     <div className='flex justify-between items-center w-full gap-4 cursor-pointer'>

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='text-pokemon-white'>Trainer</span>

                           <span className="flex justify-between items-center circle"></span>

                        </div>

                        <div className='flex justify-between items-center w-1/2'>

                           <span className='circleYellowPokemon'>
                              <img src={Pokeball} alt="Gym Leader - Image Pokeball" className='' />
                           </span>

                           <span className='text-pokemon'>Gym Leader</span>

                        </div>
                     </div>
                  }
               </div>

               <div className="groupInput gap-4">
                  <button
                     className="btn btn-yellow flex justify-center items-center w-1/2"
                     onClick={handleClear}>
                     Clear
                     <img src={Normal} alt="Normal" className='ml-4' />
                  </button>

                  <button
                     className="btn btn-blue flex justify-center items-center w-1/2"
                     onClick={handleRegister}>
                     Register
                     <img src={Pokeball} alt="Pokeball" className='ml-4' />
                  </button>
               </div>

               <div className="groupInput">
                  <button
                     className="btn btn-aqua flex justify-center items-center w-full"
                     onClick={handleLoginModal}>
                     Login
                     <img src={Fire} alt="Fire" className='ml-4' />
                  </button>
               </div>
            </form>
         </span>
      </main>
   )
}