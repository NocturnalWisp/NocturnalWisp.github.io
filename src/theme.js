import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ink: {
          900: { value: "#1d1a17" },
          700: { value: "#4d4742" },
        },
        paper: {
          100: { value: "#f6f0e8" },
          200: { value: "#efe4d6" },
        },
        sand: {
          400: { value: "#d2b48c" },
        },
        accent: {
          500: { value: "#c77b3b" },
          700: { value: "#a15f2b" },
        },
        teal: {
          500: { value: "#2b7a78" },
          700: { value: "#205d5c" },
        },
      },
      fonts: {
        heading: { value: "'Montserrat', sans-serif" },
        body: { value: "'Lato', sans-serif" },
      },
      radii: {
        xl2: { value: "1rem" },
      },
    },
  },
  globalCss: {
    "html, body": {
      bg: "paper.100",
      color: "ink.900",
      scrollBehavior: "smooth",
    },
    a: {
      textDecoration: "none",
    },
  },
});

export const system = createSystem(defaultConfig, config);
