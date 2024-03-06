"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#258BB6",
      light: "#37abd6",
      dark: "#185a81",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
