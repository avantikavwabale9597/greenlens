/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#0C1707",
        olive: "#4A612F",
        matcha: "#879D55",
        cream: "#EEE6D1",
        parchment: "#FAF5EF",
      },
    },
  },
  plugins: [],
};
