module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C0C0C0",
          secondary: "#E5E4E2",
          accent: "#BCC6CC",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "lighn",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
