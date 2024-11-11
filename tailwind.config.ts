import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'clr-151515': '#151515',
        'clr-4EE1A0': '#4EE1A0',
        'clr-242424': '#242424',
        'clr-D9D9D9': '#D9D9D9',  
        'clr-FF6F5B': '#FF6F5B',    
      },
      maxWidth:{
        'pagewidth': '1110px',
      },
      
    },
    screens: {
      'xs': '481px',
       // => @media (min-width: 481px) { ... }
      'sm': '577px',
      // => @media (min-width: 577px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'xl':'1025px',
      // => @media (min-width: 1025px) { ... }
      '2xl': '1200px',
       // => @media (min-width: 1200px) { ... }
       '3xl': '1400px',
       // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [],
} satisfies Config;
