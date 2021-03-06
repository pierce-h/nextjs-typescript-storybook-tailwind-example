module.exports = {
  important: false,
  purge: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages-components/**/*.{ts,tsx}',
    './src/layout/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        100: '28rem',
        104: '32rem',
        108: '36rem',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif', 'system-ui'],
        serif: ['Crimson Text', 'serif'],
      },
      colors: {
        dark: '#112D41',
        blue: {
          100: '#CADFEC',
          200: '#B0CFE3',
          300: '#95BEDA',
          400: '#7BAED1',
          500: '#609EC7',
          600: '#478FBF', // Default https://coolors.co/478fbf
          700: '#3A7AA5',
          800: '#306689',
          900: '#27516E',
        },
        red: {
          100: '#F1CED0',
          200: '#EAB6B9',
          300: '#E39EA1',
          400: '#DC868A',
          500: '#D56D72',
          600: '#CD545B', // Default https://coolors.co/cd545b
          700: '#C1383F',
          800: '#A12F34',
          900: '#81252A',
        },
        yellow: {
          50: '#FEFAF1',
          100: '#FCECC8',
          200: '#FAE3AC',
          300: '#F9D991',
          400: '#F7D075',
          500: '#F5C75A',
          600: '#F4BE3F', // Default https://coolors.co/f4be3f
          700: '#F1AF15',
          800: '#CF940C',
          900: '#A5770A',
        },
        green: {
          100: '#C5E9D4',
          200: '#A8DDBE',
          300: '#8CD2A9',
          400: '#6FC793',
          500: '#52BC7E',
          600: '#3FA469', // Default https://coolors.co/3fa469
          700: '#378E5B',
          800: '#2E764C',
          900: '#255E3D',
        },
        gray: {
          50: '#F3F6F9',
          100: '#D8E1EC',
          200: '#BECBDA',
          300: '#90A4BC',
          400: '#667587', // Default
          500: '#4C5867',
          600: '#323B46',
          700: '#272D35',
          800: '#15181B',
          900: '#0F1215',
        },
      },
    },
  },
  variants: {
    cursor: ['responsive', 'hover', 'focus']
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
  ],
  corePlugins: {
    outline: false,
  }
};
