import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        pulse2: 'pulse2 1s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main1': '#FFFFFF',
        'main2': '#FFFFFF',
        'main3': '#F0F0F0',
        'pop1': '#0C388F',
        'pop2': '#2652A9',
        'pop-text': '#82A2E2',
        'pop-contrast': '#D68C00',
        'text1': '#483C32'
      },
      keyframes: {
        'pulse2': {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.05)'}
        }
      }
    },
  },
  plugins: [],
}
export default config;
