module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#31B2EE",
          secondary: "#54595F",
          accent: "#61CE70",
          info: "#6EC1E4",
          neutral: "#191D24",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
