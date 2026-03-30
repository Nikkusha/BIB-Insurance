import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    spacing: {
      px:    "1px",
      "0":   "0px",
      "0.5": "3px",
      "1":   "6px",
      "1.5": "9px",
      "2":   "12px",
      "2.5": "15px",
      "3":   "18px",
      "3.5": "21px",
      "4":   "24px",
      "5":   "30px",
      "6":   "36px",
      "7":   "42px",
      "8":   "48px",
      "9":   "54px",
      "10":  "60px",
      "11":  "66px",
      "12":  "72px",
      "14":  "84px",
      "16":  "96px",
      "20":  "120px",
      "24":  "144px",
      "28":  "168px",
      "32":  "192px",
      "36":  "216px",
      "40":  "240px",
      "44":  "264px",
      "48":  "288px",
      "52":  "312px",
      "56":  "336px",
      "60":  "360px",
      "64":  "384px",
      "72":  "432px",
      "80":  "480px",
      "96":  "576px",
    },
    extend: {
      fontSize: {
        xs:   ["0.75rem",   { lineHeight: "1.125rem", letterSpacing: "0.01em" }],  // 12px
        sm:   ["0.875rem",  { lineHeight: "1.25rem",  letterSpacing: "0.01em" }],  // 14px
        base: ["1rem",      { lineHeight: "1.5rem",   letterSpacing: "0" }],       // 16px — unchanged
        lg:   ["1.375rem",  { lineHeight: "1.875rem", letterSpacing: "0" }],       // 22px
        xl:   ["1.75rem",   { lineHeight: "2.25rem",  letterSpacing: "-0.01em" }], // 28px
        "2xl":["2.25rem",   { lineHeight: "2.75rem",  letterSpacing: "-0.01em" }], // 36px
        "3xl":["2.875rem",  { lineHeight: "3.375rem", letterSpacing: "-0.02em" }], // 46px
        "4xl":["3.75rem",   { lineHeight: "4.25rem",  letterSpacing: "-0.03em" }], // 60px
        "5xl":["4.75rem",   { lineHeight: "5.25rem",  letterSpacing: "-0.04em" }], // 76px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--brand-blue-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        bib: "var(--shadow-sm)",
        "bib-md": "var(--shadow-md)",
        "bib-lg": "var(--shadow-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
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
