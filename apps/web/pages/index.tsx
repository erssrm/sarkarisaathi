import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "ui";
import { NewsCard } from "ui";
import { AppContainer } from "../components/Container";


const themeLight = createTheme({
  palette: {
    background: {
      default: "#81c784"
    }
  }
});

export default function Web() {
  return (
    <ThemeProvider theme={themeLight}>
      <AppContainer />
    </ThemeProvider>

  );
}
