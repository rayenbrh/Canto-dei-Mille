/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0906',
        ink: '#111009',
        carbon: '#1A1814',
        ash: '#2C2A26',
        stone: '#4A4640',
        silk: '#F5F0E8',
        cream: '#FAF7F2',
        ivory: '#FFFDF9',
        gold: {
          dim: '#8C6D2F',
          mid: '#C9A84C',
          bright: '#E2C27D',
          glow: '#F0D48A',
        },
        florence: '#8B3A2A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        /* Spec: decorative italic phrases — use with `italic` utility */
        displayItalic: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      transitionDuration: {
        700: '700ms',
      },
      keyframes: {
        'pulse-line': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'pulse-line': 'pulse-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
