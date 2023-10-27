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
        pulse2: 'pulse2 1.5s infinite'
      },
      width: {
        '9.6': '2.4rem',
        '10': '2.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '52.5': '13.125rem',
        '55': '13.75rem',
        '66': '16.5rem',
        '84': '21rem',
        '90': '22.5rem',
        '115': '28.75rem',
        '130': '32.5rem',
      },
      height: { 
        '115': '28.75rem',
      }, 
      minWidth: {
        '52.5': '13.125rem',
        '90': '22.5rem',
        '130': '32.5rem',
      },
      text: {
        '4.5xl': '2.625rem',
        '5.5xl': '3.3775rem',
      },
      padding: {
        '0.75': '0.1875rem',
        '1.5': '0.375rem',
        '3.25': '0.8125rem',
        '3.5': '0.875rem',
        '4.2': '1.05rem',
        '6.5': '1.625rem',
        '6.75': '1.6875rem',
        '12.5': '3.125rem',
        '16.25': '4.0625rem',
        '17.5': '4.375rem',
      },
      margin: {
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.125': '0.78125rem',
        '3.75': '0.9375rem',
        '9': '2.25rem',
        '13.75': '3.4375rem',
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
