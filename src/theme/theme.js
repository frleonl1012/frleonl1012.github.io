import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;