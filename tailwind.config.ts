import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'spin-first': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-first-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-second': {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-second-slow': {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-one': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'spin-first': 'spin-first 1s linear infinite',
        'pulse-one': 'pulse-one 2s ease-in',
        'spin-second': 'spin-second 1s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant('portrait', '@media (orientation: portrait)');
      addVariant('landscape', '@media (orientation: landscape)');
    },
  ],
};
export default config;
