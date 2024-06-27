/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '360px',
      md: '834px',
      lg: '1440px',

    },
    container: {
      padding: {
        sm: '16px',
        md: '40px',
        lg: '80px',
      },
    },
    boxShadow:{
      hd : '0 8px 8px 0 rgba(0, 0, 0, 0.08)',
    },
    colors:{
      orn: '#F27E5A'
    },
    extend: {},
  },
  plugins: [],
};