const { colors, fontSize } = require('./old-default-theme');

module.exports = {
  prefix: 'tw-',
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['disabled', 'group-focus'],
      opacity: ['disabled'],
    }
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        current: 'currentColor',
        transparent: {
          DEFAULT: 'var(--color-transparent)',
        },
        white: {
          ...colors.white,
          DEFAULT: 'var(--color-white)',
        },
        teal: {
          ...colors.teal,
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          700: 'var(--color-teal-700)',
          900: 'var(--color-teal-900)',
        },
        orange: {
          ...colors.orange,
          DEFAULT: 'var(--color-orange-500)',
        },
        gray: {
          ...colors.gray,
          lighter: 'var(--color-gray-lighter)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          dark: 'var(--color-gray-dark)',
        },
        red: {
          ...colors.red,
          DEFAULT: 'var(--color-red)',
        },
        'cool-gray': {
          100: 'var(--color-cool-gray-100)',
          200: 'var(--color-cool-gray-200)',
          300: 'var(--color-cool-gray-300)',
          400: 'var(--color-cool-gray-400)',
          500: 'var(--color-cool-gray-500)',
          600: 'var(--color-cool-gray-600)',
          700: 'var(--color-cool-gray-700)',
          800: 'var(--color-cool-gray-800)',
          900: 'var(--color-cool-gray-900)',
        },
      },
      fontSize,
    },
  },
};
