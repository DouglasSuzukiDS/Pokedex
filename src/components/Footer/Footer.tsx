import { Info } from '../Info/Info'
import './Footer.css'

export const Footer = () => {
   return(
      <>
         <footer className="container flex items-center justify-end font-bold text-pokemon">
            <span className='border'>
               <Info phase='Made with ❤ by ' children={<a href='https://www.linkedin.com/in/douglas-suzuki-775822219'>Doug</a>}/>
            </span>
         </footer>
      </>
   )
}