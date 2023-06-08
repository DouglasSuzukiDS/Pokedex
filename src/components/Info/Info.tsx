
import { ComponentsTypes } from '../../types/ComponentsType'
import './Info.css'

export const Info = ({ phase, className, children }: ComponentsTypes) => {
   return(
      <p className={ className }>
         { phase }
         { children }
      </p>
   )
}