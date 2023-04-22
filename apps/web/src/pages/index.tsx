import { createTheme, ThemeProvider } from '@mui/material';
import { AppContainer } from '../components/Container';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#C0C0C0'
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
