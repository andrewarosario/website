/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^text-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        primary: '#111010',
        secondary: '#2E3038',
        link: '#f72585'
      }
    },
  },
  plugins: [],
}
