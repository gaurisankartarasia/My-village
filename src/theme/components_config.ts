import { type Components } from "@mui/material/styles";

const componentConfig: Components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        textTransform: "none",
        borderRadius: "50px",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#ffffff",
        color: "inherit",
        boxShadow: "none",
      },
    },
  },
};

export default componentConfig;
