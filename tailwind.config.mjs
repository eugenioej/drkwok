/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        cream: 'var(--cream)',
        paper: 'var(--paper)',
        sage: 'var(--sage)',
        'sage-dark': 'var(--sage-dark)',
        teal: 'var(--teal)',
        coral: 'var(--coral)',
        gold: 'var(--gold)',
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Segoe UI', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
