/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check
import { fontFamily } from 'tailwindcss/defaultTheme'
import { pink, gray as _gray } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
// @ts-ignore
export const content = [
  './node_modules/pliny/**/*.js',
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,tsx}',
  './components/**/*.{js,ts,tsx}',
  './layouts/**/*.{js,ts,tsx}',
  './data/**/*.mdx',
]
export const darkMode = 'class'
export const theme = {
  extend: {
    // Custom line heights
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },
    // Extend the default font family
    fontFamily: {
      sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
    },
    // Custom colors (using tailwind's built-in colors)
    colors: {
      primary: pink,
      gray: _gray,
    },
    // Custom z-index values
    zIndex: {
      60: '60',
      70: '70',
      80: '80',
    },
    // Custom typography for links and headings
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: theme('colors.primary.600'),
            },
            code: { color: theme('colors.primary.400') },
          },
          'h1,h2': {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
          },
          h3: {
            fontWeight: '600',
          },
          code: {
            color: theme('colors.indigo.500'),
          },
        },
      },
      invert: {
        css: {
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: theme('colors.primary.400'),
            },
            code: { color: theme('colors.primary.400') },
          },
          'h1,h2,h3,h4,h5,h6': {
            color: theme('colors.gray.100'),
          },
        },
      },
    }),
  },
}
export const plugins = [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
