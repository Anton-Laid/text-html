const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      screens: {
        xs: { max: "500px" },
      },
    },
  },
};

export default config;
