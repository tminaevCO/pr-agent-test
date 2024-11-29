const { container } = require('webpack');

const sizeValues = {
  1: '0.0625rem',
  2: '0.125rem',
  3: '0.1875rem',
  4: '0.25rem',
  5: '0.3125rem',
  6: '0.375rem',
  7: '0.4375rem',
  8: '0.5rem',
  9: '0.5625rem',
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  26: '1.625rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  36: '2.25rem',
  38: '2.375rem',
  40: '2.5rem',
  42: '2.625rem',
  44: '2.75rem',
  46: '2.875rem',
  48: '3rem',
  50: '3.125rem',
  52: '3.25rem',
  54: '3.375rem',
  56: '3.5rem',
  58: '3.625rem',
  60: '3.75rem',
  62: '3.875rem',
  64: '4rem',
  66: '4.125rem',
  68: '4.25rem',
  70: '4.375rem',
  72: '4.5rem',
  74: '4.625rem',
  76: '4.75rem',
  78: '4.875rem',
  80: '5rem',
  82: '5.125rem',
  84: '5.25rem',
  86: '5.375rem',
  88: '5.5rem',
  90: '5.625rem',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-token-library.js')],
  content: [
    './**/*.liquid',
    './src/scripts/**/*.js',
    './src/styles/**/*.css',
    './src/styles/**/*.scss',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: 'none',
      },
    },
    extend: {
      dropShadow: {
        'custom': '5px 8px 28px rgba(23, 23, 36, 0.1)',
      },
      boxShadow: {
        'dropdown': '5px 8px 28px 0px rgba(23, 23, 36, 0.1)',
      },
      colors: {
        'black': '#000000',
        'black-100': '#17120F',
        'black-200': '#0A0300',
        'white': '#FFFFFF',
        'white-0.2': 'rgba(255, 255, 255, 0.2)',
        'white-0.5': 'rgba(255, 255, 255, 0.5)',
        'white-0.7': 'rgba(255, 255, 255, 0.7)',
        'grey': '#F0F0F0',
        'grey-100': '#E6E6E6',
        'grey-200': '#C2C1C0',
        'grey-300': '#848180',
        'grey-400': '#534F4D',
        'grey-500': '#534F4D',
        'grey-600': '#555555',
        'orange': '#FF6929',
        'orange-100': '#FF4C01',
        'error': '#FF5C49',
        'error-100': '#F82D16',
      },
      fontFamily: {
        regular: ['Inter', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
      },
      lineHeight: sizeValues,
      fontSize: sizeValues,
      spacing: sizeValues,
      borderRadius: sizeValues,
      rounded: sizeValues,
      borderWidth: sizeValues,
      letterSpacing: {
        0: '0',
        0.5: '0.5px',
        1: "1px",
        1.5: "1.5px",
        2: "2px",
      },
      minHeight: {
      },
      maxHeight: {
      },
      height: {
      },
      maxWidth: {
        container: '1376px',
      },
      minWidth: {
      },
      opacity: {
        unset: 'unset',
      },
      width: {
      },
      zIndex: {
      },
      gridTemplateRows: {
      },
      dropShadow: {
      },
      padding: {
      },
      transitionProperty: {
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
