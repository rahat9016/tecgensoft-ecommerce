/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xsm: "100%",
          xm: "100%",
          xlg: "100%",
          sm: "100%",
          md: "100%",
          tab: "100%",
          lg: "1024px",
          xl: "1245px",
        },
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
        },
      },
      colors: {
        "main-primary":"#02BF6C",
        "main-primary-dark": "#00854b",
        "main-secondary":"#EA244E",
        "main-light-gray":"#EFF3F4",
        "main-smoky-black":"#0D0D0D",
        "main-secondary-dark": "#bc1a3d",
        "main-bg-primary": "#02BF6C",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        "secondary-transparent": "rgba(255, 0, 0,.1)",
        gray: "#D9D9D9",
        gainsboro: "#DDDDDD",
        light: "#E6E6E6",
        "gray-dark": "#7A7A7A",
        "spanish-gray": "#9B9B9C",
        "light-gray": "#F3F5F6",
        "dim-gray": "#8D8D8D",
        "slate-gray": "#CDCDCD",
        yellow: "#FFC702",
        "black-dim": "#2B2B2B",
        "black-dark": "#363739",
        "black-light": "#7E7E7E",
        link: "#2C77AC",
        "white-light": "#EAEAEA",
        overlay: "rgba(0,0,0,0.5)",
        blue: "#1877F2",
        silver: "#6F6E77",
        green: "#02BF6C",
        cultured: "#F6F6F6",
        "gray-light": "#F4F4F4",
        skeleton: "#E0E0E0",
        "skeleton-white": "#F0F0F0",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
      fontSize: {
        "8xl": "8px",
        xsm: "10px",
        "15xl": "15px",
        "18xl": "18px",
        "22xl": "22px",
        "26xl": "26px",
        "45xl": "45px",
        "80xl": "80px",
      },
      borderRadius: {
        "5px": "5px",
        "15px": "15px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      screens: {
        xsm: "320px",
        xm: "390px",
        xlg: "425px",
        sm: "640px",
        md: "768px",
        tab: "992px",
        lg: "1024px",
        xl: "1245px",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "15px": "15px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "25px": "25px",
        "30px": "30px",
        "60px": "60px",
      },
      gap: {
        "19px": "19px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
