import { ComponentsTypes } from '../../types/ComponentsType'
import { Info } from '../Info/Info'
import './Footer.css'

export const Footer = ({ close }: ComponentsTypes) => {
   const handleLogout = () => {
      const logout = confirm('Deseja fazer o logout do sistema?')

      if(logout) {
         alert('Leaving ... Bye.')

         localStorage.clear()

         close && close()
      }
   }

   return (
      <footer className="flex flex-col font-bold text-pokemon">
         <span>
            <div className="redFooter bg-RedPokeball"></div>

            <div className="blackFooterArea"> </div>

            <div className="blackFooter flex bg-black z-10 justify-center items-center">

               <div className="circleBlackFooter bg-black flex justify-center items-center">

                  <div 
                     className="circleWhiteFooter z-30 flex justify-end bg-white"
                     onClick={ handleLogout }>
                  </div>

               </div>

            </div>

            <div className="whiteFooter bg-white"></div>
         </span>

         <div className='aboutMe pr-4 z-20 flex justify-end'>
            <Info 
               phase='Made with ❤ by ' 
               children={<a href='https://www.linkedin.com/in/douglas-suzuki-775822219'>Doug</a>} 
            />
         </div>
      </footer >
   )
}