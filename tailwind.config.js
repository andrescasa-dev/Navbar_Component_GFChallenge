/** @type {import('tailwindcss').Config} */

import { keyframes } from 'storybook/internal/theming'
import { transform } from 'typescript'

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)',
      },
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'enter': 'enter .35s ease-out forwards',
        'appear': 'appear .2s ease-out forwards'
      },
      keyframes:{
        enter: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        appear: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '100'
          }
        }
      }
  },
  plugins: [],
}}

