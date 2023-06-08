import { CardContainer } from '../CardContainer/CardContainer'
import { Footer } from '../Footer/Footer'
import { Info } from '../Info/Info'

import './Header.css'

export const Header = () => {
   return(
      <>
         <header className='font-bold flex flex-col text-pokemon'>

         <div className="redHeader bg-RedPokeball"></div>

         <div className="blackHeaderArea">

         </div>
         <div className="blackHeader bg-black flex justify-center items-center">
            <div className="circleBlackHeader bg-black flex justify-center items-center">
               <div className="circleWhiteHeader bg-white"></div>
            </div>
         </div> 
         
         <div className="whiteHeader bg-white"></div>

         {/* <div className="container border">
            <Info className='pokedex' phase='PoKeDex' />
         </div>
          */}
         </header>

         <div className="restPage w-full border border-purple-950 hidden">
            <CardContainer />
            <Footer />
         </div>
      </>
   )
}