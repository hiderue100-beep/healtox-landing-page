/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F9FAFB",
          subtle: "#F4F4F5",
          border: "#E4E4E7",
        },
        primary: {
          DEFAULT: "#09090B",
          muted: "#3F3F46",
          subtle: "#71717A",
        },
        // Core Brand Triad Palette (Green + Yellow + Orange)
        brandGreen: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#A7F3D0",
          soft: "#ECFDF5",
        },
        brandYellow: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          soft: "#FFFBEB",
        },
        brandOrange: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FDBA74",
          soft: "#FFF7ED",
        },
        // Energetic Condition Palette
        energy: {
          DEFAULT: "#F59E0B",
          soft: "#FFFBEB",
        },
        focus: {
          DEFAULT: "#3B82F6",
          soft: "#EFF6FF",
        },
        balance: {
          DEFAULT: "#EC4899",
          soft: "#FDF2F8",
        },
        sleep: {
          DEFAULT: "#8B5CF6",
          soft: "#F5F3FF",
        },
        mint: {
          DEFAULT: "#10B981",
          soft: "#ECFDF5",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        full: "9999px",
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-yellow': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
