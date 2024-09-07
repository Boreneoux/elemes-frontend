import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BAC3E',
        'primary-light': '#F0FEEB',
        'primary-lighter': '#F9FFF6'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
