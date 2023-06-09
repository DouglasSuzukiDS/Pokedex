/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'RedPokeball': '#FF1C1C',

        'InsidePokeball01': '#5C6579',
        'InsidePokeball02': '#7C9DB9',
        'InsidePokeball03': '#BFD9E7',

        'BluePokemon': '#3E5DB3',
        'DarkBluePokemon': '#273D78',
        'YellowPokemon': '#FAC705',
        'AquaPokemon': '#73CEC0',

        'Bug': '#91C12F',
        'Dark': '#D0C7DF',
        'Dragon': '#0B6DC3',
        'Electric': '#F4D23C',
        'Fairy': '#EC8FE6',
        'Fighting': '#CE416B',
        'Fire': '#FF9D55',
        'Flying': '#89AAE3',
        'Ghost': '#5269AD',
        'Grass': '#63BC5A',
        'Ground': '#D97845',
        'Ice': '#73CEC0',
        'Normal': '#919AA2',
        'Poison': '#B567CE',
        'Psychic': '#FA7179',
        'Rock': '#C5B78C',
        'Steel': '#5A8EA2',
        'Water': '#5090D6',
      },
    },
  },
  plugins: [],
}

