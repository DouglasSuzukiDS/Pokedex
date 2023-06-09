export type PokemonType= {
   name: string
   id: number
   type: { 
      slot: number; 
      type: {
         name: string;
         url: string;
         svg: string
      }
   }[]
   height: number
   weight: number
   base_experience: number
   image: string
}