/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040207',
          900: '#080510',
          850: '#0d0918',
          800: '#130e22',
          700: '#1b1430',
          600: '#281f45',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.15)',
        },
        nocturne: {
          abyss: '#05030a',
          depth: '#0a0614',
          mist: '#110c22',
          glow: '#d946ef',
          violet: '#8b5cf6',
          lavender: '#c084fc',
          cyan: '#38bdf8',
          amber: '#f59e0b',
          crimson: '#e11d48',
          emerald: '#10b981',
          silver: '#e2e8f0'
        }
      },
      fontFamily: {
        spinnenkop: ['Spinnenkop', 'Cinzel', 'serif'],
        display: ['Cinzel', 'Outfit', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'drift-slow': 'drift 12s ease-in-out infinite alternate',
        'pulse-calm': 'pulseCalm 4s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        pulseCalm: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
