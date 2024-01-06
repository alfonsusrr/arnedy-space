import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 150deg at 95% 25%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-1': '#050816',
        'dark-2': '#050A24',
        'dark-3': '#363C7D',
        'dark-txt-1': '#7f82c4',
        'dark-txt-2': '#c6c8ff',
        'dark-txt-3': '#4E5170',
        'dark-grad-1': '#273472',
        'dark-grad-2': '#3137B5',
        'dark-grad-3': '#080A46',
        'dark-grad-4': '#070F37',
        'dark-grad-5': '#13133E',
        'dark-comp-1': '#e45b5b',
      },
    },
  },
  plugins: [],
}
export default config
