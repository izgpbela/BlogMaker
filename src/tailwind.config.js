// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de cores principal
        primary: {
          DEFAULT: '#7E57C2',
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C'
        },
        // Cores secundárias
        secondary: {
          DEFAULT: '#B39DDB',
          50: '#F8F4FF',
          100: '#EDE7F6',
          200: '#D1C4E9',
          300: '#B39DDB',
          400: '#9575CD',
          500: '#7E57C2',
          600: '#673AB7',
          700: '#5E35B1',
          800: '#512DA8',
          900: '#4527A0'
        },
        // Cores de texto
        text: {
          primary: '#2D3748',
          secondary: '#718096'
        },
        // Cores de fundo
        background: {
          DEFAULT: '#FAF5FF',
          paper: '#EDE7F6'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['"Roboto Condensed"', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      }
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  safelist: [
    'bg-primary-500',
    'text-primary-500',
    'hover:bg-primary-600',
    'hover:text-primary-600'
  ]
}