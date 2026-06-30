import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    border: {
      main: "#bfdbfe",
      soft: "#dbe7f3",
    },
    surface: {
      subtle: "#f8fbff",
    },
    textSoft: "#64748b",
  },
  typography: {
    fontFamily: [
      "Sora",
      "Manrope",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#f8fafc",
        },
        "*::selection": {
          backgroundColor: "rgba(37, 99, 235, 0.18)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "0.9rem 1.45rem",
        },
        contained: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#ffffff",
          "&:hover": {
            background: "linear-gradient(135deg, #111827 0%, #1d4ed8 100%)",
          },
        },
        outlined: {
          borderColor: "#d4deeb",
          color: "#0f172a",
          "&:hover": {
            borderColor: "#94a3b8",
            backgroundColor: "rgba(255,255,255,0.65)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

theme.palette.border = {
  main: "#bfdbfe",
  soft: "#dbe7f3",
};

theme.palette.surface = {
  subtle: "#f8fbff",
};

theme.palette.text.soft = "#64748b";

export default theme;
