// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}" // Caso tenha projetos adicionais
  ],
  darkMode: 'class', // Habilita o modo escuro via classe (opcional)
  theme: {
    extend: {
      colors: {
        // Cores principais
        primary: {
          DEFAULT: '#3f51b5', // Material Indigo
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e'
        },
        // Cores secundárias para o blog
        secondary: {
          DEFAULT: '#ff4081', // Material Pink A400
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f'
        },
        // Cores de texto e fundo
        text: {
          primary: '#212121',
          secondary: '#757575'
        },
        background: {
          DEFAULT: '#ffffff',
          paper: '#f5f5f5'
        }
      },
      // Tipografia
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['"Roboto Condensed"', 'sans-serif']
      },
      // Espaçamentos customizados
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      // Bordas
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      }
    },
    // Sobrescreva configurações padrão se necessário
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  plugins: [
    require('@tailwindcss/typography'), // Para estilos de tipografia em conteúdo markdown
    require('@tailwindcss/forms'), // Para estilização de formulários
    require('@tailwindcss/aspect-ratio'), // Para manter proporções de elementos
    require('@tailwindcss/line-clamp') // Para truncar texto com ellipsis
  ],
  // Configurações para purge (otimização de produção)
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ],
    options: {
      safelist: [
        'bg-primary-500',
        'text-primary-500',
        'hover:bg-primary-600',
        'hover:text-primary-600'
      ]
    }
  }
};