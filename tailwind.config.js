/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-background': "url('/background.svg')",
      },
      colors: {
        primary: '#102027',
        secondary: '#37474F',
        accent: '#357C38',
      },
      fontFamily: {
        display: ['Roboto Mono'],
        buttons: ['var(--font-rajdhani)'],
      },
    },
  },
  plugins: [],
}
