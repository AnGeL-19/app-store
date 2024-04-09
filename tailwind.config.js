/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'white-light': '#E8E8E8',
        'gray-light': '#747474',
        'gray-medium': '#828282',
        'dark-light': '#2E2E2E',
        'dark-semibold': '#202020',
        'dark-bold': '#1D1D1D',
        'dark-red-bold': '#282121',
        'dark': '#000000',
        'yellow-light': '#ECEF67',
        'red-light': '#FFC2C2',
        'red-medium': '#FE8E8E',
        'red-bold': '#FF5858',
        'red-nintendo': '#FF5A5A',
        'blue-steam': '#0A3092',
        'blue-playstation': '#0A73D3',
        'green-xbox': '#009229'
      },
    },
  },
  plugins: [],
}

