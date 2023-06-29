import { FormEvent, useState } from 'react'
import Fire from "../../assets/TypesPokemons/Fire.svg"
import Normal from "../../assets/TypesPokemons/Normal.svg"
import Pokeball from "../../assets/SVGs/Pokeball - Parts.svg"
import { ComponentsTypes } from "../../types/ComponentsType"
import './Login.css'
import { UserType } from '../../types/UserType'
import axios from 'axios'

export const Login = ({ close, showCardContainer }: ComponentsTypes) => {
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const API = `http://localhost:1880`

   const handleClear = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      setLogin('')
      setPassword('')
   }

   const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (login !== '' && password !== '') {
         let result: any
         await findUser()
            .then(res => {
               console.log(res)
               result = res
            })

         // console.log(result?.data.length)

         // console.log(login, password)
         if (result?.data.length === 1) {
            await axios.post(`${API}/login`, {
               userLogin: login,
               userPassword: password,
            })
               .then(res => {
                  if (res.status === 200) {
                     console.log(res.data)
                     alert('Sucessfully logged!')

                     handleClear(e)
                     
                     localStorage.setItem('user', JSON.stringify([res.data[0].userName, res.data[0].userPokemonFavoriteType]))

                     showCardContainer && showCardContainer()
                  }
               })
               .catch(err => console.log(err.message))
         } else {
            alert(`Email / Password not found in system.`)
         }
      }
   }

   const handleRegisterModal = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (close) {
         close()
      }
   }

   const findUser = async () => {
      const response: UserType[] = await axios.post(`${API}/login`, {
         userLogin: login,
         userPassword: password
      })
      /*.then(res => {
         setFind(res.data)
         response.push(res.data)
      })
      .catch(err => console.log(err.message))*/

      return response
   }


   return (
      <main className="flex justify-center items-center">
         <span className="border-RBW01Gradient">
            <form className="formLogin bg-Blue01GradientOP p-4">
               <p className='text-pokemon text-center  border-gradient'>Login</p>

               <div className="groupInput"> {/* Login */}
                  <label htmlFor="login" className='text-pokemon w-1/2'>Your Login</label>
                  <input
                     type="text"
                     id='login'
                     placeholder='Login'
                     className='text-pokemon w-1/2'
                     value={login}
                     onChange={e => setLogin(e.target.value)} />
               </div>

               <div className="groupInput"> {/* Password */}
                  <label htmlFor="password" className='text-pokemon w-1/2'>Password</label>
                  <input
                     type="password"
                     id='password'
                     placeholder='Your Password'
                     className='text-pokemon w-1/2'
                     value={password}
                     onChange={e => setPassword(e.target.value)} />
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