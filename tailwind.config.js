import image from './public/images/desktop/hero_background_desktop@2x.jpg';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '344px',
      md: '834px',
      lg: '1440px',
      retina: {
        raw: '(min-resolution: 192dpi), (min-resolution: 2dppx), (min-device-pixel-ratio: 2)',
      },
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
    backgroundImage: {
      'hero-bg-m': "url('./public/images/mobile/hero_background_mobile.jpg')",
      'hero-bg-m2x':
        "url('./public/images/mobile/hero_background_mobile@2x.jpg')",
      'hero-bg-t': "url('./public/images/tablet/hero_background_tablet.jpg')",
      'hero-bg-t2x':
        "url('./public/images/tablet/hero_background_tablet@2x.jpg')",
      'hero-bg-d': "url('./public/images/desktop/hero_background_desktop.jpg')",
      'hero-bg-d2x':
        "url('./public/images/desktop/hero_background_desktop@2x.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
