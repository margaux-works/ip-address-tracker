/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 50px 50px -25px rgba(0,0,0, 0.10)',
      },
    },
  },
  plugins: [],
};
