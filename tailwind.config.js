/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F2F5F1",
          primary: "#1B2A1C",
          olive: "#4E614D",
          sage: "#7D927B",
          light: "#E3E8E2",
          accent: "#B4C4B2"
        }
      },
      fontFamily: {
        serif: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
