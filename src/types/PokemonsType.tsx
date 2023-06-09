export type PokemonType= {
   name: string
   id: number
   type: { 
      slot: number; 
      type: {
         name: string;
         url: string;
      }
   }[]
   height: number
   weight: number
   base_experience: number
   image: string
}