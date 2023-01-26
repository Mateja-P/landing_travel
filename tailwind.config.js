/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '440px' },
    },
    extend: {
      colors: {
        green: '#355250',
        orange: '#FDBC82',
        'lg-text': '#A8A8A8',
        overlay: 'rgba(0, 0, 0, 0.34)',
      },
      boxShadow: {
        current: ' 0px 0px 13px 0px rgba(150,150,150,1);',
      },
    },
  },
  plugins: [],
};
