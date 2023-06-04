import { Bug } from '../../assets/Icons/Bug'
import { Dark } from '../../assets/Icons/Dark'
import { Dragon } from '../../assets/Icons/Dragon'
import { Electric } from '../../assets/Icons/Electric'
import { Fairy } from '../../assets/Icons/Fairy'
import { Fighting } from '../../assets/Icons/Fighting'
import { Fire } from '../../assets/Icons/Fire'
import { Flying } from '../../assets/Icons/Flying'
import { Ghost } from '../../assets/Icons/Ghost'
import { Grass } from '../../assets/Icons/Grass'
import { Ground } from '../../assets/Icons/Ground'
import { Ice } from '../../assets/Icons/Ice'
import { Normal } from '../../assets/Icons/Normal'
import { Poison } from '../../assets/Icons/Poison'
import { Pokeball } from '../../assets/Icons/Pokeball'
import { Psychic } from '../../assets/Icons/Psychic'
import { Rock } from '../../assets/Icons/Rock'
import { Steel } from '../../assets/Icons/Steel'
import { Water } from '../../assets/Icons/Water'
import './CardContainer.css'
 
export const CardContainer = () => {
   return (
      <>
         <section className="cardContainer font-bold flex flex-wrap text-pokemon">
            CardContainer
            <Bug w='40' h='40' />
            <Dark w='40' h='40' />
            <Dragon w='40' h='40' />
            <Electric w='40' h='40' />
            <Fairy w='40' h='40' />
            <Fighting w='40' h='40' />
            <Fire w='40' h='40' />
            <Flying w='40' h='40' />
            <Ghost w='40' h='40' />
            <Grass w='40' h='40' />
            <Ground w='40' h='40' />
            <Ice w='40' h='40' />
            <Normal w='40' h='40' />
            <Poison w='40' h='40' />
            <Pokeball w='40' h='40' />
            <Psychic w='40' h='40' />
            <Rock w='40' h='40' />
            <Steel w='40' h='40' />
            <Water w='40' h='40' />
            
         </section>
      </>
   )
}