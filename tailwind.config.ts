import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./node_modules/preline/preline.js", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("preline/plugin")]
};

export default config;
