import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        xs: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "2rem",
        "3xl": "2rem",
        "4xl": "2rem",
      },
      screens: {
        xs: "360px",
        sm: "575px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1680px",
        "4xl": "1920px",
      },
    },
    colors: {
      // Black-forest theme
      primary: {
        50: "#f4f8f1",
        100: "#e5edde",
        200: "#cadbbf",
        300: "#a3c194",
        400: "#79a166",
        500: "#578346",
        600: "#406833",
        700: "#335329",
        800: "#294322",
        900: "#23371d",
        950: "#0d160b",
      },
      // Trendy-pink theme
      secondary: {
        50: "#faf8fb",
        100: "#f4f0f7",
        200: "#e9e0ee",
        300: "#d7c6e1",
        400: "#bea4ce",
        500: "#a27fb6",
        600: "#856198",
        700: "#785589",
        800: "#5b4167",
        900: "#4e3956",
        950: "#2e1d35",
      },
      // Additional colors
      white: "#ffffff",
      black: "#000000",

      // Default Tailwind colors
      slate: colors.slate,
      red: colors.red,
      pink: colors.pink,
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,
      green: colors.green,
      blue: colors.blue,
      transparent: "transparent",

      // Custom colors
      heading: "#979798",
      body: colors.slate[700],
      background: colors.gray[100],
    },
    //typography
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5x1": "3.052rem",

      // Additional font sizes
      //additional
      h1: [
        "5rem",
        {
          lineHeight: "5rem",
          letterSpacing: "0.0375",
          fontWeight: "700",
        },
      ],
      h1: [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0.0375",
          fontWeight: "700",
        },
      ],
      h3: [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "0.05",
          fontWeight: "700",
        },
      ],
      h4: [
        "2rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      h5: [
        "1.5rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      p: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      body: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      span: [
        "0.75rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    },

    extend: {},
  },
  plugins: [],
};
