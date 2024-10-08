import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppLayout from "./pages/AppLayout";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#030712",
        default: "#030712",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: "#030712",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: "#030712",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Box component="div" className="bg-primary">
                <AppLayout />;
              </Box>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
