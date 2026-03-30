/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1814',
          2: '#4a4740',
          3: '#8a877f',
        },
        paper: '#faf8f4',
        surface: '#f2efea',
        accent: {
          DEFAULT: '#c05c2e',
          light: '#fdf0ea',
        },
        good: {
          DEFAULT: '#2a7a5a',
          light: '#eaf5ef',
        },
        bad: {
          DEFAULT: '#c04040',
          light: '#fdeaea',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.2'),
            maxWidth: 'none',
            a: { color: theme('colors.accent.DEFAULT') },
            h1: { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400', color: theme('colors.ink.DEFAULT') },
            h2: { fontFamily: theme('fontFamily.serif').join(', '), fontWeight: '400', color: theme('colors.ink.DEFAULT') },
            h3: { fontWeight: '500', color: theme('colors.ink.DEFAULT') },
            strong: { color: theme('colors.ink.DEFAULT'), fontWeight: '500' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
