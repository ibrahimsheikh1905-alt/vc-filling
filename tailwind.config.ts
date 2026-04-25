import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "dark-theme-bg": "#004246",
        "light-theme-bg": "white",
        "dark-theme-spcl-div-bg": "#013437",
        "text-color": "#2df8c5",
        white: "#fff",
        primary: "#39b54a",
        black: "#000",
        "gray-50": "rgb(249 250 251)",
        "gray-100": "rgb(243 244 246)",
        "gray-200": "rgb(229 231 235)",
        "gray-300": "rgb(209 213 219)",
        "gray-400": "rgb(156 163 175)",
        "gray-500": "rgb(107 114 128)",
        "gray-600": "rgb(75 85 99)",
        "gray-700": "rgb(55 65 81)",
        "gray-800": "rgb(31 41 55)",
        "gray-900": "rgb(17 24 39)",
        "green-300": "rgb(134 239 172)",
        "green-400": "rgb(74 222 128)",
        "green-500": "rgb(34 197 94)",
        "green-600": "rgb(22 163 74)",
        "teal-500": "#14b8a6",
        "orange-500": "rgb(249 115 22)",
        transparent: "transparent",
        blue: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
