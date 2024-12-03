module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        pastelPurple: "#EBD8FE",
        pastelPink: "#FDE2E2",
        pastelYellow: "#FFF5BA",
        blue: {
          DEFAULT: "#3B82F6",
          dark: "#1E3A8A",
        },
        yellow: {
          light: "#FEF3C7",
        },
        gray: {
          DEFAULT: "#6B7280",
          light: "#F3F4F6",
          dark: "#111827",
        },
      },
      fontFamily: {
        bubble: ["'Baloo Bhaina 2'", "cursive"],
      },
      animation: {
        pulseSlow: "pulse 1s infinite",
      },
    },
  },
  plugins: [],
};
