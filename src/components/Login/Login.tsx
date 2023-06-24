import { FormEvent } from 'react'
import Fire from "../../assets/TypesPokemons/Fire.svg"
import Normal from "../../assets/TypesPokemons/Normal.svg"
import Pokeball from "../../assets/SVGs/Pokeball - Parts.svg"
import { ComponentsTypes } from "../../types/ComponentsType"
import './Login.css'

export const Login = ({ close }: ComponentsTypes) => {
   const login = document.querySelector('#login') as HTMLInputElement
   const password = document.querySelector('#password') as HTMLInputElement

   const handleClear = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      login.value = ''
      password.value = ''
   }

   const handleLogin = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (login.value !== '' && password.value !== '') {
         console.log('Clear')
      }
   }

   const handleRegisterModal = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (close) {
         close()
      }
   }

   return (
      <main className="flex justify-center items-center">
         <span className="border-RBW01Gradient">
            <form className="formLogin bg-Blue01GradientOP p-4">
               <p className='text-pokemon text-center  border-gradient'>Login</p>

               <div className="groupInput"> {/* Login */}
                  <label htmlFor="login" className='text-pokemon w-1/2'>Your Login</label>
                  <input type="text" placeholder='Login' className='text-pokemon w-1/2' id='login' />
               </div>

               <div className="groupInput"> {/* Password */}
                  <label htmlFor="password" className='text-pokemon w-1/2'>Password</label>
                  <input type="password" placeholder='Your Password' className='text-pokemon w-1/2' id='password' />
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
                     onClick={handleLogin}>
                     Login
                     <img src={Pokeball} alt="Pokeball" className='ml-4' />
                  </button>
               </div>

               <div className="groupInput">
                  <button
                     className="btn btn-aqua flex justify-center items-center w-full"
                     onClick={handleRegisterModal}>
                     Register
                     <img src={Fire} alt="Fire" className='ml-4' />
                  </button>
               </div>
            </form>
         </span>
      </main>
   )
}