import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    primary: "#D80466",
  },

  darkColors: {
    primary: "red",
  },
  components: {
    Button: {
      radius: 5,
    },
  },
  mode: "light",
});

export { ThemeProvider, theme };
