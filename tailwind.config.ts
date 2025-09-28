import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#1F2A30', // Dark background for overall theme
        secondary: '#2a2a2a', // Slightly lighter dark for cards/sections
        accent: '#4FA7C7', // Gold accent
        textLight: '#e0e0e0', // Light text on dark backgrounds
        textDark: '#1F2A30', // Dark text (for contrast on light elements if any)
        gold: '#4FA7C7',
        red: '#FF0000',
      },
    },
  },
  content: [
    './src/**/*.{vue,js,ts}',
    './nuxt.config.ts',
  ],
  plugins: [],
}
