/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  presets: [require('./kanoma-preset.js')],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
};
