import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FDFCF8",
        coral: {
          50: "#FFF5F4",
          100: "#FFE5E2",
          200: "#FFCAC5",
          300: "#FFB7B2", // Base user coral
          400: "#F69690",
          500: "#E2746C",
          600: "#C8554D",
        },
        sage: {
          50: "#F4F7F4",
          100: "#E8EFE8", // Base user sage
          200: "#D4E2D4",
          300: "#B8CEB8",
          400: "#8FA890",
          600: "#547155",
          700: "#3D543E",
        },
        lavender: {
          50: "#F9F8FB",
          100: "#EFEDF4", // Base user lavender
          200: "#DDD9E8",
          300: "#C3BBD5",
          400: "#9E93B7",
          600: "#695D83",
        },
        ink: {
          900: "#1C1B18",
          800: "#2D2B28",
          700: "#45423E",
          600: "#635F59",
          500: "#858077",
          400: "#AAA49A",
          300: "#D3CDC4",
          200: "#E8E4DC",
          100: "#F4F1EB",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "-apple-system", "sans-serif"],
        handwriting: ["'Reenie Beanie'", "cursive"],
        serif: ["'Newsreader'", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(45, 43, 40, 0.05), 0 4px 12px -4px rgba(45, 43, 40, 0.03)",
        card: "0 16px 40px -12px rgba(45, 43, 40, 0.07), 0 0 1px 1px rgba(45, 43, 40, 0.05)",
        floating: "0 24px 50px -12px rgba(45, 43, 40, 0.09)",
        coral: "0 12px 30px -8px rgba(255, 183, 178, 0.45)",
        sage: "0 12px 30px -8px rgba(200, 225, 200, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(0.5deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
      },
      animation: {
        "float-gentle": "floatGentle 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
