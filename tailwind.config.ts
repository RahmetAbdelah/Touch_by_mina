import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1a4d2e',
        'brand-dark-green': '#0B1F1A',
        'brand-surface': '#112A24',
        'brand-gold': '#d4af37',
        'brand-light-gold': '#f4e4b4',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        'surface-dim': 'var(--bg-surface-dim)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      borderColor: {
        DEFAULT: 'var(--border-color)',
        subtle: 'var(--border-subtle)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
