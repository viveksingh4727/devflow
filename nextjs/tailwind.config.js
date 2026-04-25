/** @type {import('tailwindcss').Config} */
export default {
  // ✅ Include all relevant folders (important in Next.js 16)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // optional but safe
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          100: "#FFF1E6",
          500: "#FF7000",
        },

        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },

        light: {
          900: "#FFFFFF",
          850: "#FDFDFD",
          800: "#F4F6F8",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
      },

      boxShadow: {
        "light-100":
          "0px 12px 20px rgba(184, 184, 184, 0.03), 0px 6px 12px rgba(184, 184, 184, 0.02), 0px 2px 4px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px rgba(39, 36, 36, 0.04)",
      },

      screens: {
        xs: "420px",
      },
    },
  },

  // Optional but useful later
  plugins: [],
};
