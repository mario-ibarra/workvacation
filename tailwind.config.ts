import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge:{
    enable:false,
    content:['./app/**/*.tsx'],
  
  },
  theme: {
    extend: {
      colors: {
        brand:{
          light:"#3fbaeb",
          DEFAULT:'#0fa9e6',
          dark:"#0c87b8"
        },
        
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },

  plugins: [],
}
export default config

