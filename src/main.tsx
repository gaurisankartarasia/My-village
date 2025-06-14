import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { HelmetProvider } from '@dr.pogodin/react-helmet';

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index.ts";
import CssBaseline from "@mui/material/CssBaseline";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
