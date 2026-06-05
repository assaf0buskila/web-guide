/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          dark: "#191919",
          medium: "#262625",
          light: "#40403E",
        },
        cloud: {
          dark: "#666663",
          medium: "#91918D",
          light: "#BFBFBA",
        },
        ivory: {
          dark: "#E5E4DF",
          medium: "#F0F0EB",
          light: "#FAFAF7",
        },
        bookcloth: "#CC785C",
        kraft: "#D4A27F",
        manilla: "#EBDBBC",
        focus: "#61AAF2",
        error: "#BF4043",
      },
      fontFamily: {
        display: ['"Rubik"', '"Assistant"', "system-ui", "sans-serif"],
        sans: ['"Assistant"', '"Rubik"', "system-ui", "sans-serif"],
        mono: ['"Space Grotesk"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        reading: "680px",
        layout: "1200px",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%, 1%)" },
        },
      },
    },
  },
  plugins: [],
};
