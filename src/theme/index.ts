import { createTheme } from "@mui/material/styles";
import componentConfig from "./components_config";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005cbb",
      contrastText: "#FFF8E1",
    },
    secondary: {
      main: "#E57373",
    },
    background: {
      default: "#F5F5F5",
      paper: "#ECEFF1",
    },
    text: {
      primary: "#3C4043",
      secondary: "#757575",
    },
  },
  shape: {
    borderRadius: "8px",
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontFamily: '"IM Fell English SC", serif',
    },
    h2: {
      fontFamily: '"IM Fell English SC", serif',
    },
    h3: {
      fontFamily: '"IM Fell English SC", serif',
    },
    h4: {
      fontFamily: '"IM Fell English SC", serif',
    },
    h5: {
      fontFamily: '"IM Fell English SC", serif',
    },
  },
  components: componentConfig,
});

export default theme;
