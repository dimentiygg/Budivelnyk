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
    boxShadow: {
      hd: '0 8px 8px 0 rgba(0, 0, 0, 0.08)',
    },
    colors: {
      orn: '#F27E5A',
      wht: '#FFF',
      'wht-80': ' rgba(255, 255, 255, 0.8)',
      'wht-30': ' rgba(255, 255, 255, 0.3)',
      'orn2-100': ' #fd9271',
      grd: '#424242',
      grl: '#747474',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      small: '0.08em',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
    extend: {},
  },
  plugins: [],
};
