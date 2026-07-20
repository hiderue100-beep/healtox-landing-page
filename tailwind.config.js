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
        // Energetic Condition Palette
        energy: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          soft: "#FFFBEB",
          border: "#FDE68A",
        },
        focus: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          soft: "#EFF6FF",
          border: "#BFDBFE",
        },
        balance: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          soft: "#FDF2F8",
          border: "#FBCFE8",
        },
        sleep: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          soft: "#F5F3FF",
          border: "#DDD6FE",
        },
        mint: {
          DEFAULT: "#10B981",
          light: "#34D399",
          soft: "#ECFDF5",
          border: "#A7F3D0",
        },
        botanical: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
        }
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
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-yellow': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-pink': '0 0 25px -5px rgba(236, 72, 153, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
