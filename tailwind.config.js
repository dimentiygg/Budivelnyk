/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '360px',
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
      abt: '0 2px 6px 0 rgba(253, 146, 113, 0.17), 0 2px 6px 0 rgba(0, 0, 0, 0.06)',
    },
    border: {
      prbr: '2px solid white ',
      form: '1px solid #d9d9d9;',
    },
    colors: {
      orn: '#F27E5A',
      orn2: '#fd9271',
      wht: '#FFF',
      'wht-80': ' rgba(255, 255, 255, 0.8)',
      'wht-70': ' rgba(255, 255, 255, 0.7)',
      'wht-60': ' rgba(255, 255, 255, 0.6)',
      'wht-30': ' rgba(255, 255, 255, 0.3)',
      'wht-20': 'rgba(255, 255, 255, 0.2)',
      'orn2-100': ' #fd9271',
      grd: '#424242',
      grl: '#747474',
      tr: 'transparent',
      blbg: '#21222d',
      form: 'rgba(66, 66, 66, 0.6)',
      footbr: 'rgba(226, 231, 245, 0.35)',
      footgr: '#e2e7f5',
      footgr2: 'rgba(226, 231, 245, 0.6)',
      footbr2: 'rgba(226, 231, 245, 0.2)',
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
      'hero-bg-m': "url('/public/images/mobile/hero_background_mobile.jpg')",
      'hero-bg-m2x':
        "url('/public/images/mobile/hero_background_mobile@2x.jpg')",
      'hero-bg-t': "url('/public/images/tablet/hero_background_tablet.jpg')",
      'hero-bg-t2x':
        "url('/public/images/tablet/hero_background_tablet@2x.jpg')",
      'hero-bg-d': "url('/public/images/desktop/hero_background_desktop.jpg')",
      'hero-bg-d2x':
        "url('/public/images/desktop/hero_background_desktop@2x.jpg')",
      one: "url('/public/images/desktop/new_catalog_desktop_image.jpg')",
      two: "url('/img/hero-pattern.svg')",
      three: "url('/img/hero-pattern.svg')",
      four: "url('/img/hero-pattern.svg')",
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-decoration-skip-ink-none': {
          'text-decoration-skip-ink': 'none',
        },

        '.visually-hidden': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          margin: '-1px',
          padding: '0',
          border: '0',
          whiteSpace: 'nowrap',
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(100%)',
          overflow: 'hidden',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
