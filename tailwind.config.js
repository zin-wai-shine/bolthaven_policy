/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F7F8FA',
        textPrimary: '#111827',
        textSecondary: '#667085',
        borderSubtle: '#E5E7EB',
        primary: {
          DEFAULT: '#FC5F2A',
          hover: '#E54E1B',
          light: '#FFF4EE',
          subtle: 'rgba(252, 95, 42, 0.08)',
        },
        accent: {
          DEFAULT: '#FC5F2A',
          hover: '#E54E1B',
          light: '#FFF4EE',
          subtle: 'rgba(252, 95, 42, 0.08)',
        },
        dark: {
          DEFAULT: '#111318',
          card: '#181A20',
          border: '#232630',
          muted: '#8B949E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        content: '760px',
      },
    },
  },
  plugins: [],
}
