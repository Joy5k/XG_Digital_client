/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
       "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

