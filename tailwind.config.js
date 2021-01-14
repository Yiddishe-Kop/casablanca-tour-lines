const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
  theme: {
    colors: {
      brand: '#0C3E5A',
      plane: '#EAEBEC',
      transparent: 'transparent',
      white: colors.white,
      gray: colors.blueGray,
      amber: colors.amber,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.emerald,
      blue: colors.indigo,
      purple: colors.fuchsia,
      red: colors.rose,
      pink: colors.pink,
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Cinzel', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        huge: '16rem',
        massive: '20rem'
      }
    },
  },

  plugins: [
    require('tailwindcss-rtl'),
  ]
}
