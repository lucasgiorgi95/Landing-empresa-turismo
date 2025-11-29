/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'turismo-primary': '#0EA5E9',
        'turismo-secondary': '#0369A1',
        'turismo-bg': '#F0F9FF',
        'turismo-text': '#0F172A',
        'turismo-text-secondary': '#334155',
        'turismo-highlight': '#22D3EE',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'hero-py': '7rem',
        'section-py': '5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in-stagger': 'fadeIn 0.7s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
