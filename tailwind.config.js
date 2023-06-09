/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      "xs": "460px",
      "sm": "640px",
      "md": "720px",
      "2md": "1024px",
      "lg": "1280px",
      "2lg": "1350px",
      "lgr": "1500px",
      "xl": "1636px",
      "2xl": "1715px"
    },

    extend: {
      fontFamily: {
        "Yekan-thin": "Yekan-thin",
        "Yekan-regular": "Yekan-regular",
        "Yekan-medium": "Yekan-medium",
        "Yekan-light": "Yekan-light",
        "Yekan-extraBold": "Yekan-extraBold",
        "Yekan-bold": "Yekan-bold",
        "Yekan-extraBlack": "Yekan-extraBlack",
        "Yekan-black": "Yekan-black",
      },

      colors: {
        "primary-dark" : "#424242",
        "primary-light" : "#4C4C4C",
        "primary-lighter": "#858588",
        "primary-lighter-2": "#636366",
        "primary-lighter-3": "#99999C",
        "secondary": "#36459B",
        "secondary-dark": "#36446f",
        "anti-flash-light": "#F1F4F5",
        "border-color": "#EDEDED",
        "platinum": "#E4E4E4",
        "light-blue": "#A3D0EA",
        "sunset": "#FFC684",
      },

      backgroundImage: {
        'telegram-bg': "url('./src/assets/imgs/background.jpg')",
      },

      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
}

