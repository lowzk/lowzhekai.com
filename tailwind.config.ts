import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        background2: '#343434',
        highlight: '#bd7039',
        secondary: "#f2e6d9",
        secondary2: "#c2c2c2"
      },
    },
  },
  plugins: [],
}
export default config