/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}" ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        // Primary
        Softred: 'hsl(10, 79%, 65%)',
        Cyan: 'hsl(186, 34%, 60%)',
          // ### Neutral
          Darkbrown:'hsl(25, 47%, 15%)',
          Mediumbrown: 'hsl(28, 10%, 53%)',
          Cream: 'hsl(27, 66%, 92%)',
          Verypaleorange: 'hsl(33, 100%, 98%)',
      }
    },
  },
  plugins: [],
}



