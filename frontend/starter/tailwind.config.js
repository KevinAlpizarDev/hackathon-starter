/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        // Nuevas formas de bordes
        '4xl': '2rem', // Esto es un redondeo grande
        '5xl': '3rem', // Otro redondeo aún mayor
        'full': '9999px', // Para hacer círculos completos, como para un avatar
      },
      // colores personalizados
      colors: {
        'rosa': '#ec4899',
        'blue': '#0057ff'
      },
      spacing: {
        // Se pueden agregar nuevas medidas de espaciado
        // '72': '18rem',
        // '84': '21rem',
        // '96': '24rem',
      },
      fontFamily: {
        // Puedes agregar fuentes personalizadas
        // 'custom': ['"Custom Font"', 'sans-serif'],
      },
      fontSize: {
        // Agregar tamaños de fuente personalizados
        // 'xxs': '0.625rem', // 10px
        // 'xxl': '1.75rem', // 28px
      },
      lineHeight: {
        // Agregar nuevas alturas de línea
        // 'extra-loose': '2.5',
      },
      borderRadius: {
        // Nuevas formas de bordes
        // '4xl': '2rem',
      },
      boxShadow: {
        // Agregar sombras personalizadas
        // 'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        // 'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        // Nuevas capas de z-index
        // '60': '60',
        // '70': '70',
      },
      transitionDuration: {
        // Agregar nuevas duraciones de transición
        // '400': '400ms',
        // '500': '500ms',
      },
      transitionTimingFunction: {
        // Agregar nuevas funciones de tiempo de transición
        // 'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      keyframes: {
        // Nuevas animaciones personalizadas
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulse: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        // Nuevas animaciones personalizadas
        // 'wiggle': 'wiggle 1s ease-in-out infinite',
        // 'pulse': 'pulse 2s infinite',
      },
      screens: {
        // Definir puntos de corte personalizados para el diseño responsivo
        // 'xs': '480px', // Establecer un nuevo punto de corte pequeño
        // '2xl': '1536px', // Establecer un punto de corte grande
      },
      width: {
        // Nuevas anchos personalizados
        // '128': '32rem',
        // '144': '36rem',
      },
      height: {
        // Nuevas alturas personalizadas
        // '128': '32rem',
        // '144': '36rem',
      },
      maxWidth: {
        // Nuevas máximas anchos
        // '1/2': '50%',
        // '3/4': '75%',
      },
      maxHeight: {
        // Nuevas máximas alturas
        // '1/2': '50%',
        // '3/4': '75%',
      },
      minWidth: {
        // Nuevas mínimas anchos
        // '1/2': '50%',
        // '1/4': '25%',
      },
      minHeight: {
        // Nuevas mínimas alturas
        // '1/2': '50%',
        // '1/4': '25%',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
