import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens:{
        'tablet': '930px',
      },
      colors: {
        menuGray: '#A8A8A8'
      }
    },
  },
  plugins: [],
} satisfies Config