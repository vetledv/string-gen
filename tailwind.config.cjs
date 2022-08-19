/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        jet: '#353535',
        ming: '#3C6E71',
        gainsboro: '#D9D9D9',
        "indigo-dye": '#284B63',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
